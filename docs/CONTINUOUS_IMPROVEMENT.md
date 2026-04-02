# Continuous Improvement System

Use this system when you want the company to improve itself over time without becoming chaotic, drifting in scope, or rewriting its own rules irresponsibly.

## Principle

The company should not "learn" through hidden memory or ad hoc behaviour changes. It should learn through durable, reviewable improvements captured in project outputs and then promoted into the template only when approved.

In practice, that means:

- project work generates evidence
- evidence becomes lessons
- lessons become proposed operating changes
- the `ceo` decides whether the change should affect the reusable company template

## What counts as learning

The company is learning when it gets better at one or more of these:

- assigning the right specialist earlier
- avoiding repeated workflow stalls
- spotting common website problems faster
- producing clearer approval summaries
- improving issue prompts and handoff quality
- tightening QA criteria
- improving WordPress implementation discipline
- reducing repeated mistakes or rework

## What does not count as learning

Do not treat these as valid company learning:

- one-off project preferences that do not generalise
- unreviewed prompt drift
- undocumented behavioural changes
- specialists silently changing scope boundaries
- build shortcuts that weaken the reusable operating model

## Learning loop

Run this loop after meaningful project milestones and at the end of every project.

1. Capture

- specialists complete their work normally
- QA reviewers record recurring failures, fragile decisions, and repeated gaps
- `project-manager` records where orchestration stalled or handoffs broke
- `ceo` records where approvals came too late, too early, or without enough synthesis

2. Synthesize

- `report-writer` or `project-manager` produces a compact retrospective
- separate one-off client constraints from reusable company lessons
- turn repeated observations into candidate operating improvements

3. Propose

- create a dedicated improvement issue for the reusable template
- describe the observed pattern
- describe the cost of leaving it unfixed
- recommend the exact template change:
  - workflow change
  - issue prompt change
  - approval gate change
  - QA rubric change
  - agent brief change
  - runtime-role change

4. Decide

- `ceo` reviews whether the proposed improvement should affect the company template
- approve only changes that generalise across future website projects
- reject or defer client-specific behaviour changes

5. Promote

- once approved, update the Git-backed company template
- keep the improvement in durable docs, prompts, or agent instructions
- do not rely on thread memory as the source of truth

## Required improvement artifacts

Every meaningful project should be able to produce some or all of these:

- `What worked`
- `What stalled`
- `What caused rework`
- `What should be delegated earlier next time`
- `What approval came too late`
- `What recurring QA failures appeared`
- `What WordPress constraints should become stronger policy`
- `What prompt or role instruction should change`

## Recommended owners

- `project-manager`: tracks coordination failures and missing handoffs
- `product-designer`: identifies synthesis gaps between strategy, IA, UX, and UI
- `wordpress-builder`: identifies build friction and pattern reuse failures
- `technical-qa-reviewer`: identifies implementation and delivery risks
- `handover-reviewer`: identifies owner-readiness gaps
- `report-writer`: turns findings into a compact retrospective
- `ceo`: decides whether lessons become template changes

## Improvement issue types

Use these issue types when promoting lessons into reusable changes:

- `Workflow improvement`
- `Prompt improvement`
- `Approval improvement`
- `QA improvement`
- `Build policy improvement`
- `Role boundary improvement`
- `Runtime profile improvement`

## Review cadence

Use both cadences:

- Per project milestone:
  capture issues as they appear so lessons are not lost.
- Per completed project:
  run a formal retrospective before declaring the operating model unchanged.

## Safe self-improvement rule

The company may improve its workflow autonomously, but it should not silently mutate the reusable template.

Safe rule:

- live project adaptation can happen inside Paperclip issues
- reusable company changes should be promoted into Git only through an explicit improvement issue and `ceo` approval

This keeps the company adaptive without becoming unstable.

## Suggested retrospective prompt

Assign this to `report-writer` or `project-manager` after a major milestone or completed project:

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

## Suggested CEO improvement prompt

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
