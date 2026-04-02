# Collaboration Protocol

Use this protocol to make the company behave like a connected system instead of a set of isolated specialists.

## Core rule

Each agent should complete its own role and also make the next correct handoff easier.

No agent should end work with an ambiguous "done" if the likely next owner is obvious.

## Before starting

Every agent should:

- review the current project phase
- read the latest relevant upstream outputs
- identify whether a real approval gate has already been reached
- confirm whether the work belongs to their role or should be redirected

## While working

Every agent should:

- stay inside role boundaries
- use upstream outputs rather than redoing work unnecessarily
- mark facts, inference, assumptions, and missing inputs clearly
- flag blockers early instead of hiding uncertainty inside polished language

## Required handoff format

Every meaningful output should end with these sections:

- `Completed`
- `Key decisions or findings`
- `Ready for`
- `Needs approval or unblocker`
- `Improvement note`

## Meaning of each section

### Completed

State what was actually completed, not what might happen later.

### Key decisions or findings

State the most important outcomes the next owner must know.

### Ready for

Name the next likely owner or owners explicitly. If the next owner is not obvious, route back to `project-manager`.

### Needs approval or unblocker

State one of:

- `None`
- the exact approval needed
- the exact blocker preventing continuation

### Improvement note

If the project exposed a repeatable workflow weakness, note it in one or two lines so it can feed the continuous improvement loop later.

If no reusable lesson appeared, say `None`.

## Handoff rules

- If the next step is obvious, recommend the next owner explicitly.
- If multiple outputs need synthesis, route to `product-designer`.
- If scope, sequencing, or approval is unclear, route to `project-manager`.
- If a real approval gate has been reached, route to `ceo`.
- If downstream work would be irresponsible without new information, mark the exact blocker.

## Anti-stall rules

Do not:

- declare the project complete because your own role finished
- assume another agent will infer the next step without being told
- hide uncertainty to make work look finished
- bypass approval gates just to maintain momentum

## Learning rule

Agents should help the company improve by surfacing repeatable lessons, not by silently changing behaviour.

When a recurring pattern appears, note it in `Improvement note` so `project-manager`, `report-writer`, and `ceo` can promote the lesson into a durable company-template improvement later.

See [docs/CONTINUOUS_IMPROVEMENT.md](/Users/tino/Projects/website%20design%20agency/docs/CONTINUOUS_IMPROVEMENT.md).
