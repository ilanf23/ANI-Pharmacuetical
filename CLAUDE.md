# ANI Pharmaceuticals — Project Instructions

This file is the entry point. Topic-specific docs live in [`claude/`](./claude).

## Always loaded (auto-imported)

- [`claude/tokens.md`](./claude/tokens.md) — Meridian v3.0 engineering tokens: color, type, spacing, motion, form, CSS custom properties.

@claude/tokens.md

## Load on demand

Read these only when the task touches them — they are not auto-imported.

- `claude/voice.md` — Voice, tone, headline rules, banned phrases, brand boilerplate. Load when drafting copy.
- `claude/compliance.md` — FDA OPDP rules (ISI bar, fair balance, MLR, HCP gating) and WCAG 2.2 AA accessibility. Load when working on product pages, forms, sticky bars, or a11y.
- `docs/brand-book.md` — Full Meridian v3.0 brand book (strategy, identity, photography, governance). Load when context beyond `tokens.md` is needed.

---

*Add new topics by dropping a markdown file into `claude/` and adding a link above. Use `@claude/<file>.md` only for docs that must load every turn — keep total auto-imported size under 40k characters.*
