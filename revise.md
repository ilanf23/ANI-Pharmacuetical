# Homepage Revision Brief

Working doc for the next pass on `index.html`. Captures what's there, what's broken, what I want, and the method to get there.

---

## 1. Current homepage structure

Section order in `index.html` (top to bottom):

| # | Section | Anchor / class | Notes |
|---|---|---|---|
| 1 | Nav | `<header class="nav">` | Sticky top |
| 2 | Hero | `.hero` | Display headline + primary CTA |
| 3 | Stats band (dark) | `.stats-band` | KPI strip on dark indigo |
| 4 | Mission & core values | `.purpose-section` | "Why we exist" |
| 5 | Cortrophin Gel intro header | (untitled section) | Sets up the molecule story |
| 6 | Scroll clip | `.scroll-clip` | 3D scrubbed video, sticky |
| 7 | Portfolio marquee | `.portfolio-marquee` | Auto-scrolling logo/product strip |
| 8 | **Cortrophin — Access (legacy)** | `.cortrophin-section--access` | ⚠ **Duplicate** — superseded by §9 |
| 9 | **Science & Access (combined)** | `.science-access-section` | New: therapeutic focus + access in one section |
| 10 | Manufacturing | `.feature-row` | Video poster + facility tour CTA |
| 11 | Investor (dark split) | `.investor-section` | 2026 guidance + ANIP stock card |
| 12 | CTA band (light, centered) | `.cta-section` | Careers / "the work is rare" |
| 13 | Footer | `<footer>` | Standard 4-col + legal |
| 14 | ISI bar | (sticky) | Compliance bar |

---

## 2. Changes made in the most recent pass

- **Combined Therapeutic Focus + Cortrophin Access into one section.**
  New ID: `.science-access-section`. Single header bridges science (where) and access (how):
  - Eyebrow: "Science & Access"
  - H2: *Where the rare meets the reachable.* (italic on `rare` + `reachable` per Meridian italic-emphasis rules)
  - Lead: connects science focus → access infrastructure.
- **Two visual tiers under one heading**, separated by a hairline divider (`.tier-heading`):
  - Tier 1 — Therapeutic Focus (light cards, 4 areas: Rheumatology, Ophthalmology, Nephrology, Generics).
  - Tier 2 — Access in Practice (dark indigo cards, 4 pillars: U.S. mfg, patient support, specialty pharmacy, pricing).
- **New CSS** in `styles/components.css`: `.tier-heading`, `.tier-heading__title`, `.tier-heading__lead`, `.science-access-section .dark-card-grid` spacing override.
- **Cortrophin links** moved into the bottom of the combined section (Visit Cortrophin.com / Prescribing Information).

---

## 3. What I'm looking for next

**Goal:** the homepage tells one story, top to bottom, in fewer sections — each section earns its place against the brand promise *"Care, codified."*

The rubric every section must pass:

1. **One job per section.** If two sections answer the same question, merge or cut.
2. **Headline does work.** Italic-emphasized phrase carries the meaning (per `claude/tokens.md`). No generic marketing verbs ("empowering," "delivering," "leveraging").
3. **Lead paragraph adds, not repeats.** It should expand the headline, not re-state it.
4. **Two accents max per viewport** (Indigo + Saffron, or Indigo + Teal — never all three).
5. **Body uses Saffron-700 / Teal-700, not 500.** WCAG AA on Bone-200.
6. **Every CTA is reachable in one tap on mobile.** No buried links.
7. **Tabular figures (`tnum`) on every number** in stats, KPIs, ticker, financials.
8. **Reduced-motion respected** for any new animation.

### Specific revision targets (in priority order)

- [ ] **🔴 Remove duplicate Cortrophin Access section** (lines 246–299 in `index.html`). The combined Science & Access section (§9) already contains its content. Delete the legacy block — no other section references it.
- [ ] **Sequence audit.** Current order goes: Hero → Stats → Mission → Cortrophin intro → Scroll clip → Marquee → Science & Access → Manufacturing → Investor → Careers. Decide: does the *Cortrophin intro* + *scroll clip* belong before the *Science & Access* tier-2 block (which is also Cortrophin)? Likely yes to consolidate, but verify the narrative reads cleanly.
- [ ] **Mission & core values vs. Hero.** The hero already promises something; check that Mission isn't restating it. If it is, cut the lead and let the values do the talking.
- [ ] **Stats band copy.** Each stat needs a noun + a unit, no orphan numbers. "60% rare disease revenue mix" beats "60% rare disease."
- [ ] **Investor section.** The stock card is rich; the copy beside it is generic. Headline should reference the *why* of the guidance, not just the number.
- [ ] **Careers CTA band.** "The work is rare. The impact is real." is strong — don't soften it. Verify CTA text is "See open roles →" not a generic "Learn more."
- [ ] **Footer.** Confirm Job code + Date of preparation are dynamic or at least current (per FDA OPDP — see `claude/compliance.md`).

---

## 4. How to do it

### Step 1 — Read the rubric, not the page
Before touching anything, load `claude/tokens.md` (auto-loaded). If the work touches copy, also load `claude/voice.md`. If it touches forms, sticky bars, or product claims, load `claude/compliance.md`.

### Step 2 — Section-by-section critique
For each section, in order:

1. **State its job in one sentence.** If you can't, the section needs to be cut or rewritten.
2. **Does another section already do that job?** If yes → merge (like we did with Therapeutic Focus + Cortrophin Access).
3. **Does the headline carry meaning, or is it a label?** Replace labels with one-sentence claims with italic emphasis on the load-bearing 1–2 words.
4. **Does the lead expand the headline?** If it just restates, cut or replace.
5. **Are CTAs specific?** "Tour our facilities →" beats "Learn more →".

### Step 3 — Make minimal, named edits
- One section per commit.
- Use `Edit` for surgical replacements; never rewrite the whole file.
- After each section change, run the dev server (`npm run dev`) and verify the section in browser at desktop + mobile breakpoints (480, 768, 1024, 1280).
- Do **not** add new component classes if an existing one fits. Check `styles/components.css` first.

### Step 4 — Verify against compliance
For any product mention (Cortrophin, ILUVIEN, YUTIQ):
- ® on first reference per page.
- ISI bar visible on every product mention.
- No efficacy claim without fair-balance proximity.

### Step 5 — Verify against tokens
- No primitive token references in new component code (`--indigo-500` directly = ❌; use `--surface-brand` ✅).
- Saffron-500 never on body text; Saffron-700 only.
- Two accents max per viewport.

### Step 6 — Ship one section at a time
- Commit with a scope: `feat(home): combine therapeutic focus + access into one section`.
- Don't bundle structural and copy changes in the same commit — review gets harder.

---

## 5. Out of scope (don't touch this pass)

- Nav, footer, ISI bar layout — these are global, separate brief.
- Scroll-clip 3D sequence — works, leave it alone.
- Stock ticker card — data source is a separate ticket.

---

*Last updated: 2026-05-06. Owner: Ilan.*
