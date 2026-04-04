# Troubleshooting

## Paperclip health check fails

Check:

```bash
curl http://127.0.0.1:3100/api/health
```

If it fails:

- start Paperclip locally
- confirm nothing else is occupying port `3100`

## Paperclip server fails to start on macOS with embedded Postgres dylib errors

One MVP issue encountered during setup was a missing compatibility-name set inside the downloaded embedded Postgres bundle used by `pnpm dlx paperclipai run`.

Symptoms looked like:

- `Library not loaded: ... libzstd.1.dylib`
- related `liblz4`, `libz`, or `libicu*` compatibility-name errors

If this happens again after cache changes, the fastest recovery path is:

- inspect the `@embedded-postgres/darwin-arm64` bundle under the current pnpm dlx cache
- verify whether the expected compatibility-name files exist
- patch them locally or reinstall once the upstream package is fixed

## Bootstrap script says `fetch failed`

This means the local Paperclip API was not reachable.

Check:

```bash
curl http://127.0.0.1:3100/api/health
```

## Imported agents still show `codex_local`

That means the runtime bootstrap has not been applied yet or failed partway through.

Check:

- Paperclip is running
- `opencode` is installed and on `PATH`
- OpenRouter is connected in OpenCode
- the bootstrap script ran without validation errors

## Bootstrap script says `Missing imported agents for slugs ...`

This usually means the wrong company ID was used.

Check the real imported company and agent count:

```bash
curl -sS http://127.0.0.1:3100/api/companies | jq '.[] | {id,name}'
curl -sS http://127.0.0.1:3100/api/companies/COMPANY_ID_HERE/agents | jq 'length'
```

For this template, the correct company should usually return `19`.

If the agent count is `0`, you likely targeted an empty or incomplete company import.
If the agent count is small and unrelated, you likely targeted a different company.

Also make sure you did not pass the ID with angle brackets:

- wrong: `--company-id <uuid>`
- right: `--company-id uuid`

## `opencode_local` adapter validation fails because `opencode` is missing

Install OpenCode and make sure it is available on `PATH`.

Example check:

```bash
which opencode
opencode --help
```

## `opencode_local` model is unavailable

This usually means OpenRouter is not connected in OpenCode yet.

Check:

```bash
opencode providers list
opencode models | grep '^openrouter/'
```

If no `openrouter/...` models appear, connect OpenRouter in OpenCode first.

## Firecrawl MCP confusion

For MVP, do not block on Firecrawl MCP.

The core runtime stack works without it:

- Paperclip
- OpenCode
- OpenRouter

Add Firecrawl later only if deep site crawling becomes necessary.

## Initiation issue fails with `The user rejected permission to use this specific tool call`

If a freshly imported company fails on the first `project-manager` initiation run and the run log shows rejected reads of files under the repo `docs/` directory, the imported template was too dependent on runtime file access.

The safer pattern is:

- keep the operator documentation in the repo for humans
- embed the critical workflow rules directly in the agent briefs
- keep the master initiation issue self-contained instead of telling agents to open repo doc paths

If you hit this with an older imported company, the best recovery path is usually:

1. archive the broken imported company
2. import the latest template from Git again
3. apply the runtime bootstrap
4. start a fresh project using the updated master coordination issue
