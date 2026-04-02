---
name: Technical QA
slug: technical-qa
description: Run technical QA for theme and plugin compliance, rendering stability, and obvious performance issues.
---

# Technical QA

## Purpose

Check whether the site is technically stable, maintainable, and aligned with the approved WordPress rules.

## Inputs

- Built site
- WordPress policy
- Build notes

## Outputs

- Technical issue list
- Compliance notes
- Fix priorities

## Steps

1. Review theme and plugin choices against policy.
2. Check major page rendering and responsive stability.
3. Flag obvious performance or fragility problems.
4. Confirm the build does not rely on unsupported workarounds.

## Done criteria

- Issues are tied to maintainability or stability.
- Policy violations are explicit.
- The review stays within practical QA scope.

## Escalation

Escalate when the build depends on unsupported plugins, brittle customisation, or unresolved hosting constraints.
