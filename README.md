# Website Design Agency

Website Design Agency is an internal-first Paperclip company template for improving simple SMB service websites. It packages a constrained operating model for strategy, design, WordPress build, QA, and handover work.

## What this company is

- A markdown-first company package for Paperclip.
- A practical workflow for SMB website redesigns with human approval at major gates.
- A reusable template that can be cloned and adapted per client project.

## What it does

- Audits an existing website and its business context.
- Benchmarks category patterns and competitor signals.
- Clarifies audience needs, page intent, and message hierarchy.
- Produces a redesign blueprint with IA, UX, and UI direction.
- Converts approved work into a maintainable WordPress build on local or staging.
- Runs structured QA and handover review before completion.

## Who it is for

- Internal teams running repeatable SMB website redesign engagements.
- Operators who want constrained scope, clear role boundaries, and reusable markdown instructions.
- Teams building brochure-style or lead-generation sites for service businesses.

## Out of scope

- Ecommerce
- Memberships
- LMS platforms
- Custom app logic
- Deep CRM integrations
- Large migrations
- Multilingual programs
- Live production editing

## Org structure

- `leadership`: priorities, approvals, sequencing, and taste gates
- `strategy-research`: business, market, audience, and messaging work
- `experience-design`: synthesis, IA, UX, and UI decisions
- `production`: WordPress build, SEO baseline, analytics baseline
- `quality`: UX, accessibility, technical, and handover QA
- `reporting`: compact reports and blueprint summaries

## Workflow stages

1. Business context intake
2. Market and competitor analysis
3. Audience and journey insight
4. Content and messaging direction
5. Information architecture and page blueprint
6. UX and UI direction
7. Approval gate
8. WordPress assembly in local or staging
9. Multi-pass QA
10. Final approval
11. Reporting and handover

See [docs/WORKFLOW.md](/Users/tino/Projects/website%20design%20agency/docs/WORKFLOW.md) and [docs/APPROVAL_GATES.md](/Users/tino/Projects/website%20design%20agency/docs/APPROVAL_GATES.md) for the detailed operating model.

## Repo structure

```text
website-design-agency/
├── COMPANY.md
├── README.md
├── LICENSE
├── docs/
├── teams/
├── agents/
└── skills/
```

## Import into Paperclip

This repo is shaped as a portable Agent Companies package with `COMPANY.md` at the root and role/skill manifests under `teams/`, `agents/`, and `skills/`.

Current Paperclip CLI help confirms the import command accepts a local path, URL, or GitHub repository and supports `--dry-run`.

Example local dry run:

```bash
npx -y paperclipai company import . --dry-run
```

Example GitHub dry run:

```bash
npx -y paperclipai company import https://github.com/captuspario/website-design-agency.git --dry-run
```

Example import as a new company:

```bash
npx -y paperclipai company import . --target new --new-company-name "Client Website Redesign"
```

If you need a different API base or profile, run `npx -y paperclipai company import --help` and add the supported flags for your environment.

## Dry-run import checklist

- Confirm `COMPANY.md` frontmatter is present.
- Confirm team, agent, and skill slugs match their directory names.
- Run `npx -y paperclipai company import . --dry-run`.
- Review the preview output before a real import.

## How to use this company per client project

1. Copy or fork this repo for the client engagement.
2. Add client-specific project notes under `docs/` or a client project folder.
3. Keep the shared company roles and skills stable unless the operating model truly changes.
4. Run the work through the approval gates instead of skipping directly to build.
5. Import the adapted repo into Paperclip for that client project.

## WordPress baseline

- Clean install only
- Local or staging only
- Free block theme baseline
- Twenty Twenty-Four as the default starting point
- Reusable patterns and components first
- Minimal plugin approach

This company is intentionally not an autonomous website factory. It is an internal operating system for disciplined, human-approved SMB website redesign work.
