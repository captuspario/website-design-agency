# Paperclip Project Playbook

Use this company template in Paperclip as the operating system for live website work.

## Core model

- Company: reusable agency operating system
- Project: one client website engagement
- Issue: one meaningful workstream or phase
- Task: optional sub-step when an issue becomes too broad

See [docs/OPERATING_HIERARCHY.md](/Users/tino/Projects/website%20design%20agency/docs/OPERATING_HIERARCHY.md) for the management chain that should govern delegation.

## Recommended project shape

Create one Paperclip project per website/client. Use the project description for stable context only:

- source website
- project purpose
- scope boundaries
- major exclusions

Do not try to run the workflow from the project description alone. The project description should not contain detailed execution instructions.

## Recommended issue shape

Start each website engagement with one master coordination issue assigned to `project-manager`, then create or allow creation of the main phase issues.

If the workflow needs stronger continuity or the project-manager stops too early, assign a CEO oversight issue using [docs/CEO_EXECUTION_BRIEF.md](/Users/tino/Projects/website%20design%20agency/docs/CEO_EXECUTION_BRIEF.md).

Make all meaningful issue outputs follow the handoff expectations in [docs/COLLABORATION_PROTOCOL.md](/Users/tino/Projects/website%20design%20agency/docs/COLLABORATION_PROTOCOL.md) so each phase explicitly names the next likely owner instead of stopping ambiguously.
Use [docs/STAGE_TRANSITION_RULES.md](/Users/tino/Projects/website%20design%20agency/docs/STAGE_TRANSITION_RULES.md) so completed upstream outputs automatically trigger the next phase instead of leaving the project idle.

Recommended issues:

1. Business context and intake
2. Competitor and category analysis
3. Audience and journey insight
4. Messaging framework
5. IA and page blueprint
6. UX and UI direction
7. Build readiness
8. QA and handover planning

## When to use tasks

Tasks are optional.

Use them only when:

- one issue contains several distinct deliverables
- multiple specialists need clean sub-ownership inside one issue
- a phase needs a checklist of implementation steps

Do not create tasks by default for every issue.

## Role of each layer

- `project-manager`: orchestrates the workflow, issue creation, sequencing, and blockers
- specialists: produce the substantive work inside their role boundaries
- `product-designer`: primary synthesis role across strategy, IA, UX, and UI
- `ceo`: approval, sequencing, escalation gate, and executive continuity controller when the workflow stalls

## Management chain

- `ceo` works through leadership, not through direct specialist execution
- `project-manager` delegates into strategy, production, quality, and reporting through team leads
- `creative-director` delegates into experience design through `product-designer`
- team leads delegate to their specialist contributors

All agents should also make the next handoff easier by ending work with:

- `Completed`
- `Key decisions or findings`
- `Ready for`
- `Needs approval or unblocker`
- `Improvement note`

## Approval model

Run with as much autonomy as possible, then stop only at meaningful approval gates:

- strategy synthesis ready
- IA/page blueprint ready
- UX/UI direction ready
- build readiness ready
- QA summary ready

At each gate, the `ceo` should summarise:

- what is ready
- key decisions made
- major risks or open questions
- clear recommendation: approve, revise, or hold

## Continuous improvement model

The company should improve through explicit feedback loops, not hidden memory.

During and after each project:

- capture recurring stalls, weak handoffs, rework patterns, and QA failures
- use `report-writer` or `project-manager` to produce a compact retrospective
- use `ceo` to decide which lessons should become reusable template improvements
- promote approved improvements into the Git-backed company template

See [docs/CONTINUOUS_IMPROVEMENT.md](/Users/tino/Projects/website%20design%20agency/docs/CONTINUOUS_IMPROVEMENT.md).

## Local build workspace

Keep live project coordination in Paperclip first.

Only create a separate local build folder when implementation becomes real. At that point, repoint build-heavy agents to the local folder and leave the rest of the project centred in Paperclip.

## Recommended first rollout

1. Create project
2. Create master coordination issue assigned to `project-manager`
3. Create or allow creation of intake, competitor, and audience issues
4. Review the first synthesis via `ceo`
5. Continue only after approval or revision
