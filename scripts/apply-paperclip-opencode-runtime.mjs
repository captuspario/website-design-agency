#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const part = argv[i];
    if (!part.startsWith("--")) continue;
    const key = part.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function kebab(value) {
  return String(value || "")
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function request(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${options.method || "GET"} ${url} failed: ${res.status} ${text}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const companyId = args["company-id"];
  const cwd = args.cwd;

  if (!companyId || !cwd) {
    console.error(
      [
        "Usage:",
        "  node scripts/apply-paperclip-opencode-runtime.mjs --company-id <id> --cwd <abs-client-project-path> [--api-base http://localhost:3100/api] [--config ./config/paperclip-opencode-runtime.json] [--dry-run] [--pause-marked]",
        "",
        "Notes:",
        "  - Use the imported company ID from Paperclip.",
        "  - Set --cwd to the active client-project workspace, not this company template repo.",
        "  - In local_trusted mode, no API key is usually required."
      ].join("\n")
    );
    process.exit(1);
  }

  if (!path.isAbsolute(cwd)) {
    throw new Error(`--cwd must be an absolute path. Received: ${cwd}`);
  }

  const configPath = path.resolve(args.config || "./config/paperclip-opencode-runtime.json");
  const config = await readJson(configPath);
  const apiBase = (args["api-base"] || config.defaults.apiBase || "http://localhost:3100/api").replace(/\/$/, "");
  const dryRun = Boolean(args["dry-run"]);
  const pauseMarked = Boolean(args["pause-marked"]);
  const apiKey = process.env.PAPERCLIP_API_KEY || process.env.PAPERCLIP_TOKEN;

  const headers = {
    "content-type": "application/json"
  };

  if (apiKey) {
    headers.authorization = `Bearer ${apiKey}`;
  }

  const agents = await request(`${apiBase}/companies/${companyId}/agents`, { headers });
  const bySlug = new Map();

  for (const agent of agents) {
    const candidates = [
      agent.slug,
      agent.role,
      agent.name,
      agent.title
    ].filter(Boolean);

    for (const candidate of candidates) {
      bySlug.set(kebab(candidate), agent);
    }
  }

  const updates = [];

  for (const [slug, agentConfig] of Object.entries(config.agents)) {
    const agent = bySlug.get(slug);
    if (!agent) {
      updates.push({ slug, status: "missing" });
      continue;
    }

    const payload = {
      adapterType: config.defaults.adapterType,
      adapterConfig: {
        cwd,
        model: agentConfig.model
      },
      budgetMonthlyCents: agentConfig.budgetMonthlyCents
    };

    updates.push({
      slug,
      agentId: agent.id,
      payload,
      pauseAfterConfigure: Boolean(agentConfig.pauseAfterConfigure)
    });
  }

  const missing = updates.filter((item) => item.status === "missing");
  if (missing.length > 0) {
    console.warn(`Missing imported agents for slugs: ${missing.map((item) => item.slug).join(", ")}`);
  }

  const actionable = updates.filter((item) => item.agentId);
  console.log(`Prepared ${actionable.length} agent updates for company ${companyId}.`);

  for (const item of actionable) {
    console.log(`- ${item.slug} -> ${item.payload.adapterType} ${item.payload.adapterConfig.model} budget=${item.payload.budgetMonthlyCents}`);
  }

  if (dryRun) return;

  for (const item of actionable) {
    await request(`${apiBase}/agents/${item.agentId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(item.payload)
    });

    if (pauseMarked && item.pauseAfterConfigure) {
      await request(`${apiBase}/agents/${item.agentId}/pause`, {
        method: "POST",
        headers
      });
    }
  }

  console.log("Runtime configuration applied.");
  if (pauseMarked) {
    console.log("Configured agents marked with pauseAfterConfigure were paused.");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
