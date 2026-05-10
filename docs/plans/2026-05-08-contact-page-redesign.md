# Contact Page Redesign — Audience-First Routing

## Overview

Redesign the contact page to lead with a visual audience chooser (Patient, HCP, Trade, Partner, Investor) that filters/personalizes the page experience. Reduce form bulk by making the detailed form conditional and progressive based on audience selection. Add visual interest through Meridian brand photography, italic display typography, and purposeful motion — all while preserving FDA OPDP compliance and WCAG 2.2 AA.

## Context

- Files involved:
  - Modify: `contact.html` (single-file page with embedded CSS at top of head)
  - Modify: `styles/components.css` (shared component styles — extend if patterns are reusable)
- Related patterns in repo:
  - `.page-header` heading with italic emphasis (lines 240-242)
  - `.card-grid--two` card pattern with `.tag` tones (lines 482-553)
  - Brand photography in `assets/photo/` (`hero-family-1..5.jpg`, `manufacturing-baudette.png`, `ir-hero-cleanroom.jpg`)
  - Existing audience cards already in DOM — these will be repurposed as anchored detail panels per audience
- Tokens (auto-imported via `claude/tokens.md`):
  - Color allocation 70/20/8/2 (Indigo primary, Saffron accent, Teal third)
  - Use `--saffron-700` for body emphasis on light, never `--saffron-500`
  - Display headings use Inter Tight 600 with italic emphasis on 1-2 words
  - Motion respects `prefers-reduced-motion` (entrances translate up 8-20px, ≤80ms stagger)
- Compliance constraints (`claude/compliance.md` applies):
  - Adverse-event reporting must remain prominent and one-click reachable
  - No PHI collection prompts; existing safety/PHI disclaimers preserved
  - All new interactions keyboard-accessible with visible focus rings
- This is a static HTML site (no framework). Interactivity is vanilla JS inline. No test framework exists in repo — verification is visual/manual against tokens and a11y.

## Development Approach

- Regular: code first, then verify against tokens, contrast rules, and a11y checks.
- Single page redesign — work in `contact.html` directly, hoist any genuinely reusable rules to `components.css`.
- Each task should leave the page in a working, deployable state.
- No test framework exists in this repo, so each task ends with a manual verification step (tokens, contrast, keyboard, reduced-motion).
- Preserve existing form field names so the mailto submission contract is unchanged.

## Implementation Steps

### Task 1: New audience-chooser hero

**Files:**
- Modify: `contact.html` (replace `.page-header` section with new hero, lines ~232-249)

- [ ] Build a hero with kicker "Contact", display-xl headline using italic emphasis (e.g., "Tell us *who you are*. We'll route you in one click."), and short sub
- [ ] Add a 5-tile audience chooser below the headline: Patient & Caregiver, Healthcare Professional, Trade & Pharmacy, Partnership, Investor & Media
- [ ] Each tile: icon (inline SVG, 1.5px stroke, currentColor), label, one-line plain-English hook, hover lift via transform/shadow-md, focus ring via `--shadow-focus`
- [ ] Add a subtle background photo treatment using `hero-family-2.jpg` with Indigo overlay at low opacity; respect `prefers-reduced-motion`
- [ ] Tiles are `<button>` elements with role-appropriate ARIA (`aria-pressed` for selection state) — keyboard tab + arrow-key navigation within the group
- [ ] Verify: contrast ≥ AA, focus visible, headings level still H1 only, reduced-motion disables overlay parallax/animation

### Task 2: Audience-filtered detail panels

**Files:**
- Modify: `contact.html` (refactor existing 6 audience cards section, lines ~480-557, into 5 anchored panels)

- [ ] Convert the current card grid into 5 audience panels: Patient, HCP, Trade, Partnership, Investor — each with its own id (e.g., `#panel-patient`)
- [ ] Each panel includes: phone numbers, email, key links, and a context paragraph; Patient panel surfaces savings/access; HCP surfaces MedInfo Portal
- [ ] Adverse-event/Safety info appears as a persistent compliance call-out within Patient and HCP panels (and as a sticky helper link in the page) so it's never hidden by filter state
- [ ] Add small JS: clicking an audience tile sets `data-audience` on `<main>`, scrolls to the matching panel, and dims/hides non-matching panels (CSS `[data-audience]` attribute selectors)
- [ ] Provide a "Show all audiences" reset link inside each panel; default state on load shows all panels (no JS required for baseline content)
- [ ] Use `--tag` tones already in the codebase: `tag--third` for non-safety, `tag--accent` for Safety call-out
- [ ] Verify: works without JS (all panels visible), keyboard reachable, screen reader announces filter changes via `aria-live` polite

### Task 3: Slim, progressive contact form

**Files:**
- Modify: `contact.html` (refactor form sections, lines ~251-478; embedded CSS lines ~17-200)

- [ ] Move the form below the audience panels into its own section "Send a detailed inquiry"
- [ ] Collapse form to two visible sections by default: (1) Your contact info (name, email, role, organization, location) and (2) Your message (subject, urgency, background)
- [ ] Hide the "Product or business context" and "Response preferences" sections behind a "Add more details" disclosure (`<details>`/`<summary>`) so the form feels lighter
- [ ] When an audience tile is selected, pre-fill the "I am a" and "Primary topic" selects, and auto-expand only the relevant detail section (e.g., Partnership opens Business need)
- [ ] Keep field names, required attributes, and the mailto action unchanged
- [ ] Refresh form visual: single-column on mobile (already there), reduce padding from `--space-7` to `--space-6`, soften card with `--shadow-md`, `--radius-lg`
- [ ] Verify: every required field still required, consents still gated, no PHI prompt added, form submits the same payload as before

### Task 4: Locations and motion polish

**Files:**
- Modify: `contact.html` (locations section ~559-589, plus motion treatments)

- [ ] Replace the two-card locations block with a richer split layout: left half a small annotated map illustration or photographic tile (use `manufacturing-baudette.png` for Baudette, a Princeton stock or neutral facility tile if available); right half the address + phone + a "Get directions" link (Google Maps URL constructed safely)
- [ ] Add a third small "All four locations →" CTA at bottom that links to `/locations`
- [ ] Add subtle entrance animations: fade-up 12px on scroll for tiles, ≤80ms stagger, `--duration-default`; gate behind IntersectionObserver and `prefers-reduced-motion`
- [ ] Add tile hover micro-interactions on audience chooser: 1px translate-y-(-2px) + shadow lift, `--duration-fast`, `--ease-standard`
- [ ] Remove the dark "Looking for medical information?" section or fold it into the HCP panel as an inline link (it's redundant with the HCP panel)
- [ ] Verify: reduced-motion users see no animation; LCP candidate (hero photo) preloaded; no CLS from late-loading photos (width/height on `<img>`)

### Task 5: A11y and token audit

**Files:**
- Modify: `contact.html`, `styles/components.css` (only if hoisted styles exist)

- [ ] Verify all colors reference semantic tokens (no raw hex in new code)
- [ ] Confirm Saffron usage: 700 for any body/text emphasis on light; 500 reserved for decorative/CTA where charcoal text sits on it
- [ ] Confirm one H1 only, heading order intact, all interactive elements have accessible names
- [ ] Run in-browser checks: tab through entire page, confirm focus visible on every control; toggle `prefers-reduced-motion` and confirm no animation
- [ ] Run contrast spot-check on hero overlay, audience tiles, and form labels
- [ ] Verify 70/20/8/2 color allocation roughly holds; no more than two accents in any viewport

### Task 6: Update documentation

- [ ] Update `README.md` only if user-facing structure changed (likely skip)
- [ ] Move this plan to `docs/plans/completed/` once implementation is merged
