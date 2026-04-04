# Project Kickoff Prompts

These prompts are designed for the real Paperclip workflow: projects provide context, issues do the work.

## Project description

Use this as the project description:

```text
Website redesign and rebuild project for www.clients-old-website.com using the Website Design Agency workflow.

This engagement is for a simple SMB service website and should stay tightly scoped to strategy, IA, UX/UI direction, implementation planning, QA, and handover. Do not drift into ecommerce, custom app logic, memberships, LMS, multilingual scope, or live production editing.
```

Replace the URL with the real source site.

## Master coordination issue

Assign this to `project-manager`:

```text
Run this website engagement through the Website Design Agency workflow with as much autonomy as possible.

Use the project context and source website as the basis for the work. Create and manage the necessary issue structure, assign the appropriate specialists, and progress through the workflow automatically where reasonable.

Operating rules:
- do not stop for human input on minor or routine decisions
- proceed autonomously through intake, business context, competitor analysis, audience and journey insight, messaging, IA, and UX/UI direction
- use the defined company roles properly
- respect the management chain, where `ceo` works through leadership, leadership works through team leads, and team leads delegate to specialists
- require every meaningful issue output to end with `Completed`, `Key decisions or findings`, `Reporting line`, `Ready for`, `Needs approval or unblocker`, and `Improvement note`
- automatically commission the next owner when the required upstream outputs exist
- use the project-manager for coordination
- use the product-designer as the primary synthesis role
- use the CEO for executive review, sequencing, and approval decisions
- stop and request board operator approval only when the CEO believes a meaningful approval gate has been reached
- do not begin implementation until the CEO has requested and received approval to proceed
- do not drift into ecommerce, custom app logic, memberships, LMS, multilingual work, deep CRM integration, or live production editing
- specialists should report complete or blocked work back through their direct leader before treating their contribution as closed
- when business context, competitor analysis, and audience and journey insight all exist with no blocker, commission `product-designer` immediately for synthesis
- when messaging, proof needs, and CTA logic are strong enough, commission `information-architect` and `ux-designer`
- when a coherent IA and UX package exists, commission `ui-designer` and route back through `product-designer` for synthesis
- when a real approval boundary is reached, route to `ceo`; otherwise keep the work moving

Approval gates that should trigger CEO review:
- strategic synthesis is ready
- IA/page blueprint is ready
- UX/UI direction is ready
- build readiness is ready
- QA summary is ready for final sign-off

When stopping for approval, the CEO should provide:
- a short summary of what is ready
- the key decisions made
- the main risks or open questions
- a clear recommendation: approve, revise, or hold

Until such a gate is reached, continue progressing the work autonomously.
```

## CEO continuity issue

Assign this to `ceo` when the workflow has stalled or when you want the entire company to keep moving until a real approval gate:

```text
Act as the executive orchestrator for this website project.

Your job is not to do the specialist work yourself. Your job is to keep the entire company workflow moving end to end until a real approval gate or final implementation outcome is reached.

Operating rules:
- inspect the current project state, completed issues, and latest outputs
- determine what phase the project is actually in
- identify any stalled or broken handoff
- delegate the correct next specialist or synthesis work immediately
- continue the workflow autonomously where the next step is obvious
- enforce the collaboration protocol so each completed output names the next likely owner
- work through leadership and team leads before expecting specialist execution
- do not stop merely because one issue has completed
- stop only when a meaningful approval gate has been reached or a true blocker exists
- use the product-designer as the main synthesis role
- use the project-manager to coordinate issue structure and execution tracking
- keep specialists inside their role boundaries
- do not begin implementation until strategy, IA, and UX/UI direction are strong enough and reviewed

At each step, make sure there is always a live next owner, a live next issue, or a clear approval request. Do not leave the workflow without momentum.

When requesting approval, provide:
- what is ready
- what decisions were made
- what risks remain
- what happens next if approved
- a clear recommendation: approve, revise, or hold
```

## Retrospective issue

Assign this to `report-writer` or `project-manager` after a meaningful milestone or completed project:

```text
Review this website project and produce a compact operating retrospective for the reusable company template.

Focus on:
- what worked unusually well
- where the workflow stalled
- where delegation came too late or too early
- where synthesis was missing
- recurring QA or build issues
- what should change in prompts, workflow, approval gates, or role instructions next time

Separate project-specific quirks from reusable lessons. End with a short list of concrete template improvement proposals.
```

## CEO improvement decision issue

Assign this to `ceo` when a retrospective exists and you want a decision on whether the template should change:

```text
Review the retrospective findings from this website project and decide which lessons should become reusable company-template improvements.

Your job is to distinguish between:
- client-specific exceptions
- true company-level improvements

For each proposed improvement:
- decide approve, reject, or defer
- explain why
- state exactly which workflow, prompt, policy, or role instruction should change if approved

Do not allow the company template to drift based on one-off project preferences. Improve only what would make future website projects more reliable.
```

## First intake issue

Assign this to `business-context-analyst`:

```text
Start the first phase of this website engagement using the source website for this project as the primary reference.

This issue is for business context, website intake, and strategic starting assumptions. The goal is to establish enough shared understanding for later competitor analysis, audience insight, messaging, IA, and design work.

What to do:
- review the existing source website for this project
- infer what the business appears to offer
- identify likely service categories
- identify likely target audience segments
- identify current trust signals and obvious trust gaps
- identify likely primary conversion actions
- identify obvious structural, messaging, or credibility weaknesses
- list the most important unknowns that need confirmation

Output requirements:
- keep the output practical and decision-oriented
- do not write vague general audit commentary
- distinguish observed facts from inference
- focus on what later agents will need in order to do strong work
- produce a compact but high-signal intake summary that can support the next issues
```

## Competitor issue

Assign this to `market-competitor-analyst`:

```text
Use the source website for this project as the starting point and conduct a competitor and category analysis for this engagement.

Focus on:
- likely direct competitors
- adjacent competitors if useful
- category patterns in structure, messaging, and trust cues
- weak clichés and overused patterns
- opportunities for this website to be clearer, more credible, or more differentiated

Keep the output practical and decision-oriented. Do not turn this into broad market research. The goal is to support later messaging, IA, UX, and UI decisions.
```

## Audience issue

Assign this to `ux-researcher`:

```text
Using the source website for this project and the developing project context, infer likely audience groups, key needs, concerns, decision criteria, and likely journey paths.

Focus on:
- likely audience segments
- what they are trying to solve
- likely objections or anxieties
- trust cues they may need
- likely CTA paths and journey expectations

Keep the output lightweight and decision-oriented. Mark inference clearly where certainty is limited. The goal is to support messaging, IA, UX, and design decisions.
```
