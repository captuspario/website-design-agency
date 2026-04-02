# Stage Transition Rules

Use these rules to keep the project moving automatically when a phase is materially complete.

## Core rule

A stage is not finished when one agent says "done". A stage is finished when the required upstream outputs exist and the next owner can reasonably act.

When that condition is met, `project-manager` must immediately do one of these:

1. commission the next team lead or specialist
2. commission `product-designer` for synthesis
3. route to `ceo` for a real approval gate
4. reopen upstream work only if a true blocker remains

`project-manager` must not stop at a stage boundary without choosing one of those actions.

## Stage 1 to Stage 2 trigger

If these outputs exist:

- business context
- competitor analysis
- audience and journey insight

Then Stage 1 is complete enough to move on.

Default next action:

- commission `product-designer` to synthesize strategic positioning, messaging implications, and the blueprint direction for the next stage

Do not wait for a human prompt if:

- the three inputs exist
- no explicit blocker remains
- no approval gate has been reached yet

## Default transition map

### Research complete

Required:

- business context
- competitor analysis
- audience and journey insight

Next:

- `product-designer` synthesis
- `content-messaging-strategist` if messaging is still underdefined

### Messaging complete

Required:

- messaging framework
- proof needs
- CTA logic

Next:

- `information-architect`
- `ux-designer`

### IA and UX package complete

Required:

- sitemap / navigation recommendation
- page blueprint direction
- page flow / CTA placement logic

Next:

- `ui-designer`
- `product-designer` synthesis
- `creative-director` approval when the package is coherent

### Design direction approved

Required:

- synthesised blueprint
- design direction
- approval from `creative-director`

Next:

- `project-manager` build-readiness check
- `ceo` approval if this is the agreed approval gate

### Build-ready approved

Required:

- approved blueprint
- approved design direction
- resolved major blockers
- clear build target path

Next:

- `wordpress-builder`

### Build stable enough for review

Required:

- local WordPress build exists
- builder notes exist

Next:

- `technical-qa-reviewer` as quality lead

### QA complete

Required:

- UX, accessibility, technical, SEO, analytics, and handover checks complete
- blocking issues either fixed or explicitly escalated

Next:

- `report-writer`
- `ceo` final approval

## Anti-stall rules for project-manager

- Do not interpret "ready for synthesis" as a terminal state.
- Do not wait for another human issue if the next owner is named and the inputs exist.
- Do not treat a handoff note as informational only. Treat it as a routing instruction unless blocked.
- If a specialist names a `Ready for` owner and no blocker is listed, route the work onward.

## Anti-stall rules for ceo

- If `project-manager` stops at a non-approval boundary, re-route the work back into the chain.
- Do not absorb the work yourself.

