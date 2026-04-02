# Paperclip Project Playbook

Use this company template in Paperclip as the operating system for live website work.

## Core model

- Company: reusable agency operating system
- Project: one client website engagement
- Issue: one meaningful workstream or phase
- Task: optional sub-step when an issue becomes too broad

## Recommended project shape

Create one Paperclip project per website/client. Use the project description for stable context only:

- source website
- project purpose
- scope boundaries
- major exclusions

Do not try to run the workflow from the project description alone. The project description should not contain detailed execution instructions.

## Recommended issue shape

Start each website engagement with one master coordination issue assigned to `project-manager`, then create or allow creation of the main phase issues.

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
- `ceo`: approval, sequencing, and escalation gate, not default worker

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

## Local build workspace

Keep live project coordination in Paperclip first.

Only create a separate local build folder when implementation becomes real. At that point, repoint build-heavy agents to the local folder and leave the rest of the project centred in Paperclip.

## Recommended first rollout

1. Create project
2. Create master coordination issue assigned to `project-manager`
3. Create or allow creation of intake, competitor, and audience issues
4. Review the first synthesis via `ceo`
5. Continue only after approval or revision
