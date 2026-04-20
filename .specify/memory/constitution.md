<!--
Sync Impact Report
- Version change: 0.0.0-template -> 1.0.0
- Modified principles:
	- [PRINCIPLE_1_NAME] -> I. Code Quality Is Non-Negotiable
	- [PRINCIPLE_2_NAME] -> II. Reuse Before Rewrite
	- [PRINCIPLE_3_NAME] -> III. UX Consistency By Design
	- [PRINCIPLE_4_NAME] -> IV. Responsive By Default
	- [PRINCIPLE_5_NAME] -> V. Verifiable Delivery Gates
- Added sections:
	- Implementation Standards
	- Delivery Workflow & Quality Gates
- Removed sections:
	- None
- Templates requiring updates:
	- ✅ updated: .specify/templates/plan-template.md
	- ✅ updated: .specify/templates/spec-template.md
	- ✅ updated: .specify/templates/tasks-template.md
	- ✅ verified no command templates present: .specify/templates/commands/*.md
- Follow-up TODOs:
	- None
-->

# Litovkinova Web Constitution

## Core Principles

### I. Code Quality Is Non-Negotiable
All production code MUST pass automated linting, formatting, and test checks before merge. Every
change MUST preserve readability through clear naming, small composable units, and explicit error
handling for failure paths. Pull requests MUST include tests for new behavior and regression tests
for defects. Rationale: high quality code reduces defects, rework, and onboarding cost.

### II. Reuse Before Rewrite
Teams MUST prefer existing components, utilities, and patterns before introducing new abstractions.
When duplication is introduced, follow-up extraction MUST be planned in the same feature scope or
explicitly justified in the plan. New shared code MUST be documented with usage boundaries and
extension points. Rationale: disciplined reuse lowers maintenance burden and keeps behavior
consistent.

### III. UX Consistency By Design
User flows, terminology, feedback states, and interaction patterns MUST remain consistent across
the product. Features MUST use shared design tokens/components where available and MUST define
explicit acceptance criteria for empty, loading, success, and error states. Rationale: consistency
improves learnability, trust, and task completion speed.

### IV. Responsive By Default
All user-facing changes MUST be verified for both mobile and desktop breakpoints before merge.
Layouts MUST adapt without content loss, horizontal scrolling, or inaccessible controls.
Accessibility-critical interactions (navigation, forms, dialogs) MUST remain fully usable across
target viewport classes. Rationale: responsive quality is a core product requirement, not a polish
task.

### V. Verifiable Delivery Gates
Each specification, plan, and task set MUST include explicit quality, reuse, UX consistency, and
responsiveness checks. A feature is not done until these checks are objectively verifiable through
tests, reviews, or documented validation steps. Rationale: measurable gates prevent drift from
principles under delivery pressure.

## Implementation Standards

- Prefer cohesive modules with single responsibility and stable interfaces.
- Require explicit trade-off notes for temporary shortcuts and track them as follow-up tasks.
- Keep design and copy changes aligned with established product patterns unless a deliberate
	redesign is approved.
- Validate responsive behavior at representative mobile and desktop viewport sizes for every
	user-visible change.

## Delivery Workflow & Quality Gates

- Specification quality gates MUST define measurable acceptance criteria for code quality,
	reusability, UX consistency, and responsive behavior.
- Implementation plans MUST fail constitution checks if any required validation is missing.
- Task breakdowns MUST include concrete validation tasks for automated quality checks, UX
	consistency review, and mobile/desktop responsiveness verification.
- Code review MUST block merges when constitutional gates are not met or not evidenced.

## Governance

This constitution overrides local conventions when conflicts occur. Amendments REQUIRE a documented
proposal, an explicit impact assessment on templates, and approval from project maintainers.
Versioning policy follows semantic intent: MAJOR for incompatible governance changes, MINOR for
new principles/sections or materially expanded obligations, and PATCH for clarifications that do
not change obligations. Compliance review is REQUIRED during planning, implementation, and pull
request review; unresolved violations MUST be tracked and approved as explicit exceptions.

**Version**: 1.0.0 | **Ratified**: 2026-04-20 | **Last Amended**: 2026-04-20
