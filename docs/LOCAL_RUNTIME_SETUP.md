# Local Runtime Setup

This company package stays vendor-neutral on import. The agent manifests intentionally do not embed Paperclip adapter runtime config.

That is by design. The Agent Companies specification says vendor-specific adapter and runtime config should not live in the base package. The runtime wiring happens after import.

## Goal

Switch the imported company from Paperclip's default imported adapter state to the preferred runtime map.

Default local MVP recommendation:

- all imported agents on `opencode_local`
- OpenRouter backing OpenCode
- `ceo` paused initially until lower-cost agents pass a smoke test

Optional variation after bootstrap:

- keep most agents on `opencode_local`
- manually switch `ceo` to a different model or adapter only if you have a deliberate reason

## Prerequisites

- Paperclip running locally at `http://localhost:3100`
- OpenCode installed locally
- OpenRouter account and API key
- This repo available locally

## Step 1: Import as a new company

Use the web UI or CLI to import this repo as a new company.

Example dry run:

```bash
npx -y paperclipai company import . --target new --new-company-name "Website Design Agency" --dry-run
```

Example real import:

```bash
npx -y paperclipai company import . --target new --new-company-name "Website Design Agency"
```

## Step 2: Connect OpenCode to OpenRouter

In OpenCode:

1. Run `/connect`
2. Choose `OpenRouter`
3. Paste your OpenRouter API key
4. Run `/models` and verify the current model IDs available in your account

OpenCode stores provider auth locally. For local MVP, that is the simplest place to keep the OpenRouter key.

## Step 3: Find the imported company ID

The most reliable way is via the local Paperclip API.

List companies:

```bash
curl -sS http://127.0.0.1:3100/api/companies | jq '.[] | {id,name}'
```

Then verify which candidate company is the real imported agency by checking the agent count:

```bash
curl -sS http://127.0.0.1:3100/api/companies/<company-id>/agents | jq 'length'
```

For this template, the correct imported company should return `19`.

If multiple companies share the same name, use the one whose `/agents` endpoint returns the expected count.

Important:

- do not include angle brackets when running the bootstrap command
- wrong: `--company-id <uuid>`
- right: `--company-id uuid`

## Step 4: Apply the runtime map

This repo includes:

- `config/paperclip-opencode-runtime.json`
- `scripts/apply-paperclip-opencode-runtime.mjs`

Dry run first:

```bash
node scripts/apply-paperclip-opencode-runtime.mjs \
  --company-id COMPANY_ID_HERE \
  --cwd /ABSOLUTE/PATH/TO/CLIENT-PROJECT \
  --dry-run
```

Apply for real:

```bash
node scripts/apply-paperclip-opencode-runtime.mjs \
  --company-id COMPANY_ID_HERE \
  --cwd /ABSOLUTE/PATH/TO/CLIENT-PROJECT \
  --pause-marked
```

Notes:

- `--cwd` should point at the active client project workspace, not this company template repo.
- In Paperclip `local_trusted` mode, the API usually works without extra auth.
- If your instance requires auth, export `PAPERCLIP_API_KEY` first.

## Step 5: Smoke-test before unpausing the CEO

Recommended order:

1. leave the imported `ceo` paused
2. test `project-manager`
3. test `report-writer`
4. test `wordpress-builder` with a safe local task
5. only then unpause `ceo`

## Default runtime map

The bootstrap file in this repo sets every imported agent to `opencode_local`. That is the current default and the simplest native-Paperclip setup.

After the bootstrap succeeds, you can optionally switch `ceo` to a different model or adapter while leaving the rest of the specialists on `opencode_local`.

### Premium

- `ceo` -> `openrouter/anthropic/claude-opus-4.5`
- `creative-director` -> `openrouter/anthropic/claude-opus-4.5`
- `product-designer` -> `openrouter/anthropic/claude-opus-4.5`

### Balanced

- `project-manager` -> `openrouter/anthropic/claude-sonnet-4.5`
- `ux-researcher` -> `openrouter/anthropic/claude-sonnet-4.5`
- `content-messaging-strategist` -> `openrouter/anthropic/claude-sonnet-4.5`
- `information-architect` -> `openrouter/anthropic/claude-sonnet-4.5`
- `ux-designer` -> `openrouter/anthropic/claude-sonnet-4.5`
- `ui-designer` -> `openrouter/anthropic/claude-sonnet-4.5`
- `seo-analyst` -> `openrouter/anthropic/claude-sonnet-4.5`
- `ux-qa-reviewer` -> `openrouter/anthropic/claude-sonnet-4.5`
- `accessibility-qa-reviewer` -> `openrouter/anthropic/claude-sonnet-4.5`
- `handover-reviewer` -> `openrouter/anthropic/claude-sonnet-4.5`

### Cost-efficient

- `business-context-analyst` -> `openrouter/openai/gpt-5-mini`
- `market-competitor-analyst` -> `openrouter/openai/gpt-5-mini`
- `analytics-checker` -> `openrouter/openai/gpt-5-mini`
- `report-writer` -> `openrouter/openai/gpt-5-mini`

### Build-heavy

- `wordpress-builder` -> `openrouter/openai/gpt-5.1`
- `technical-qa-reviewer` -> `openrouter/openai/gpt-5.1`

## Why this is separate from import

Paperclip agents support adapter config at runtime, but the base Agent Companies package should remain portable. Keeping runtime setup separate means:

- the repo stays importable across runtimes
- your OpenRouter/OpenCode strategy can change without rewriting the company manifests
- the same company package can run differently in local MVP versus later hosted deployment
