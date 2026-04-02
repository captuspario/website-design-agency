---
schema: agentcompanies/v1
name: Quality
slug: quality
description: Team responsible for UX, accessibility, technical, and handover quality checks.
manager: ../../agents/technical-qa-reviewer/AGENTS.md
includes:
  - ../../agents/ux-qa-reviewer/AGENTS.md
  - ../../agents/accessibility-qa-reviewer/AGENTS.md
  - ../../agents/technical-qa-reviewer/AGENTS.md
  - ../../agents/handover-reviewer/AGENTS.md
---

# Quality

## Team purpose

Quality checks whether the built site is clear, usable, accessible enough for practical launch, technically sound, and realistic for a non-technical owner to manage.

## Agents in this team

- ux-qa-reviewer
- accessibility-qa-reviewer
- technical-qa-reviewer
- handover-reviewer

## Core responsibilities

- Review user flow, consistency, and CTA logic
- Review accessibility basics and flag risk clearly
- Review technical stability and maintainability
- Review owner editability and handover readiness

## Stage involvement

- Multi-pass QA
- Final approval support
- Handover sign-off

## Approval relationship

Quality can block final approval. If QA uncovers structural issues, work returns to the relevant upstream team rather than being patched blindly.

## Delegation relationship

The `project-manager` routes QA through the `technical-qa-reviewer` as quality lead. The quality lead coordinates UX, accessibility, technical, and handover checks and sends structural issues back upstream when needed.
