# ANI Meridian v3.0 — Compliance & Accessibility

FDA OPDP rules and WCAG 2.2 AA requirements. Not auto-imported — load when working on product pages, ISI bars, HCP gating, forms, or accessibility audits.

---

## FDA OPDP — When These Rules Apply

Any page that names a branded product (Cortrophin® Gel, ILUVIEN®, YUTIQ®, or any prescription drug brand). NOT just product pages — ALSO press releases, earnings pages, insights articles, and patient stories that reference branded products.

---

## Required Elements (branded product mentions)

1. **ISI Bar** — sticky bottom, expandable, full ISI text accessible
2. **Indications** for the branded product visible above the fold OR in the ISI
3. **Prescribing Information (PI)** linked as a downloadable PDF
4. **Adverse Event reporting** info: ANI Medical Info `1-800-308-6755` and FDA MedWatch `1-800-FDA-1088` / `fda.gov/medwatch`
5. **Job code** in footer (format: `US-CORP-2026-XXX` or `US-{BRAND}-XXXX`)
6. **Date of preparation** in footer (auto-stamped on publish)
7. **"This site is for U.S. audiences only."** disclaimer in footer

---

## Fair Balance (FDA enforcement Sept 2025)

Efficacy claims about a branded product MUST be accompanied by risk information **on the same page, in the same prominence**. "Click for safety info" links are insufficient. The September 2025 FDA crackdown issued 70+ untitled letters specifically for this violation.

---

## HCP Gating

Pages with HCP-only content (dosing, MOA detail, prescribing detail, rep contact) require an affirmation gate on entry.

```html
<div role="dialog" aria-modal="true" aria-labelledby="hcp-gate-title">
  <h2 id="hcp-gate-title">For Healthcare Professionals</h2>
  <p>I confirm I am a U.S.-licensed healthcare professional.</p>
  <button class="btn btn--primary">Yes, continue</button>
  <button class="btn btn--secondary">No, take me to patient resources</button>
</div>
```

- Soft gate (affirmation), not credential check — industry norm
- Persists for the session (don't re-prompt on every page)

---

## Banned Content

- ❌ Off-label indication discussion
- ❌ Comparative efficacy claims without head-to-head clinical data
- ❌ Patient testimonials about specific outcomes ("X cured my Y") — use experience-based stories with proper disclaimers
- ❌ Promotional content disguised as scientific/educational

---

## MLR (Medical, Legal, Regulatory) Workflow

Every page that mentions a branded product:

```
Draft → MLR Review → Approved → Published
```

CMS enforces:
1. State machine on publish status
2. Required fields when branded products mentioned (abbreviated indication, ISI link, PI link, AE reporting line)
3. Job code auto-generation per page
4. Date of preparation auto-stamped
5. Re-review trigger when product sections are edited

---

# Accessibility — WCAG 2.2 AA (non-negotiable floor)

## Required for Every Page

- [ ] `<html lang="en">` declared (SC 3.1.1)
- [ ] Skip-to-main-content link as first focusable element (SC 2.4.1)
- [ ] Heading order H1 → H2 → H3 (SC 1.3.1) · One H1 per page
- [ ] Focus visible on every interactive element with 3px Indigo ring (SC 2.4.7)
- [ ] Touch targets minimum 24×24 CSS px, 44×44 recommended (SC 2.5.8)
- [ ] All images have alt text (decorative: `aria-hidden="true"`)
- [ ] Color contrast ≥ 4.5:1 body, ≥ 3:1 large text (SC 1.4.3)
- [ ] Color is never the ONLY signal (SC 1.4.1)
- [ ] `prefers-reduced-motion` honored (SC 2.3.3)
- [ ] Keyboard-only navigation works (SC 2.1.1)
- [ ] No keyboard traps (SC 2.1.2)

## New in WCAG 2.2 (2024+)

- **SC 2.4.11 Focus Not Obscured (Min)** — focused element not fully covered by sticky header/ISI bar
- **SC 2.5.7 Dragging Movements** — drag interactions have single-pointer alternative
- **SC 2.5.8 Target Size (Min)** — 24×24 CSS px minimum
- **SC 3.2.6 Consistent Help** — help mechanisms in consistent order
- **SC 3.3.7 Redundant Entry** — don't ask users to re-enter info already provided
- **SC 3.3.8 Accessible Authentication** — no cognitive function tests in auth

## Forms

- [ ] Every input has associated `<label>` via `for`/`id`
- [ ] Required fields: visible `*` + `aria-required="true"` + `aria-label="required"` on `*`
- [ ] Error state: `aria-invalid="true"` + error described in text via `aria-describedby`
- [ ] Errors described in text, not just color (SC 1.4.1)

## Sticky Elements

- [ ] Focused elements never fully obscured by sticky bar (SC 2.4.11)
- [ ] Body padding accounts for sticky element height (e.g., `padding-bottom: 80px` for ISI bar)
- [ ] Sticky element collapsible with keyboard (Escape key)

## Icon-Only Buttons

```html
<button class="btn-icon" aria-label="Open menu">
  <svg aria-hidden="true" focusable="false"><!-- icon --></svg>
</button>
```

---

## Verified Contrast Ratios

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `--charcoal-800` on `--bone-200` | | 15.6:1 | ✓ AAA |
| `--indigo-500` on `--bone-200` | | 11.5:1 | ✓ AAA |
| `--saffron-700` on `--bone-200` | | 6.8:1 | ✓ AA Body |
| `--teal-700` on `--bone-200` | | 7.5:1 | ✓ AAA |
| `--bone-100` on `--indigo-500` | | 12.0:1 | ✓ AAA |
| `--charcoal-800` on `--saffron-500` | | 7.2:1 | ✓ AAA — dark text on Saffron |
| `--bone-100` on `--teal-500` | | 4.6:1 | ✓ AA |
| `--saffron-500` on `--bone-200` | | 3.0:1 | Decorative / large only |
| `--teal-500` on `--bone-200` | | 4.2:1 | ✓ AA Large only |
