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
