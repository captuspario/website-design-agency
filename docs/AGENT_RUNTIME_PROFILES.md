# Agent Runtime Profiles

This document captures the recommended runtime strategy for local MVP use. It is guidance, not part of the portable company package schema.

## Recommended hybrid setup

- `ceo`: `codex_local`
- specialists: `opencode_local`
- provider for `opencode_local`: OpenRouter via OpenCode

This setup keeps the highest-level judgement role on the strongest available reasoning runtime while making most specialist work cheaper and more flexible.

## Profile lanes

### Executive

- Roles: `ceo`
- Recommended runtime: `codex_local`
- Use for: approvals, sequencing, escalation, trade-offs

### Premium synthesis

- Roles: `creative-director`, `product-designer`
- Recommended runtime: `opencode_local`
- Suggested model: `openrouter/anthropic/claude-opus-4.5`

### Balanced specialists

- Roles: `project-manager`, `ux-researcher`, `content-messaging-strategist`, `information-architect`, `ux-designer`, `ui-designer`, `seo-analyst`, `ux-qa-reviewer`, `accessibility-qa-reviewer`, `handover-reviewer`
- Recommended runtime: `opencode_local`
- Suggested model: `openrouter/anthropic/claude-sonnet-4.5`

### Cost-efficient specialists

- Roles: `business-context-analyst`, `market-competitor-analyst`, `analytics-checker`, `report-writer`
- Recommended runtime: `opencode_local`
- Suggested model: `openrouter/openai/gpt-5-mini`

### Build-heavy

- Roles: `wordpress-builder`, `technical-qa-reviewer`
- Recommended runtime: `opencode_local`
- Suggested model: `openrouter/openai/gpt-5.1`

## Usage rules

- Do not use the `ceo` as the default worker for routine tasks.
- Let `project-manager` coordinate flow.
- Let `product-designer` own synthesis.
- Repoint build-heavy agents to a dedicated local build folder when implementation begins.

## Verification checks

- `curl http://127.0.0.1:3100/api/health`
- `opencode providers list`
- `opencode models | grep '^openrouter/'`
- check imported agents in Paperclip for `adapterType`
