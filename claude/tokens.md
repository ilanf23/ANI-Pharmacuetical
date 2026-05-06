# ANI Meridian v3.0 — Engineering Tokens

Code-ready reference for color, type, spacing, motion, and form. For voice/copy rules see `claude/voice.md`. For FDA compliance and accessibility see `claude/compliance.md`. For full brand strategy, photography, governance see `claude/brand-system.md`.

---

## 30-Second Read

| Element | Value |
|---|---|
| Brand promise | "Care, codified." |
| Primary | Indigo `#312E81` |
| Accent | Saffron `#F59E0B` |
| Third | Teal `#0D9488` |
| Surface | Bone `#F7F5F1` |
| Text | Charcoal `#1A1A1F` |
| Display type | Inter Tight (600) |
| Body type | Inter (400) |
| Mono / data type | Inter (eyebrows, tabular numerics use Inter with `tnum`) |
| A11y floor | WCAG 2.2 AA |

---

## Color — Primitives

### Indigo (Brand Authority)
| Token | Hex | Use |
|---|---|---|
| `--indigo-50` | `#EEEEFB` | Subtle background |
| `--indigo-100` | `#D5D4F0` | Hover background |
| `--indigo-200` | `#A8A6D9` | Disabled brand |
| `--indigo-400` | `#4D4AAA` | Hover on brand |
| `--indigo-500` | `#312E81` | **Brand primary** |
| `--indigo-600` | `#232067` | Active/pressed |
| `--indigo-700` | `#15124A` | Deep emphasis |
| `--indigo-900` | `#08062A` | Hero bg, dark mode |

### Saffron (Patient Warmth)
| Token | Hex | Use |
|---|---|---|
| `--saffron-50` | `#FEF6E5` | Subtle accent bg |
| `--saffron-100` | `#FCE8B8` | Soft accent |
| `--saffron-300` | `#F9C76C` | Decorative |
| `--saffron-500` | `#F59E0B` | **Accent default** (decorative, ≥24px text, buttons) |
| `--saffron-600` | `#C57A02` | Hover on accent |
| `--saffron-700` | `#8B5500` | **Body-safe** (italic body, accent text on light) |

### Teal (Clinical Credibility)
| Token | Hex | Use |
|---|---|---|
| `--teal-50` | `#E5F5F4` | Subtle background |
| `--teal-100` | `#B6E3DF` | Soft surface |
| `--teal-300` | `#5DCBC2` | Decorative |
| `--teal-500` | `#0D9488` | **Default** (decorative, large text) |
| `--teal-600` | `#0A776D` | Hover |
| `--teal-700` | `#075952` | **Body-safe** (text on light) |
| `--teal-900` | `#042521` | Deep emphasis |

### Neutrals
| Token | Hex | Use |
|---|---|---|
| `--bone-100` | `#FFFEFB` | Lightest surface — cards |
| `--bone-200` | `#F7F5F1` | **Default page bg** |
| `--bone-300` | `#EAE7E1` | Subtle dividers |
| `--steel-300` | `#A8AAB0` | Disabled / placeholder |
| `--steel-500` | `#6B6E73` | Secondary muted text |
| `--steel-700` | `#3F4145` | Mid emphasis text |
| `--charcoal-800` | `#1A1A1F` | **Body text** |
| `--charcoal-900` | `#0E0E12` | Max emphasis / dark page |

### Semantic states
| Token | Hex |
|---|---|
| `--green-success` | `#3D8B5C` |
| `--amber-warning` | `#C5851F` |
| `--red-error` | `#B83A2A` |
| `--blue-info` | `#3568A8` |

---

## Color — Semantic Tokens

**Components reference these, never primitives.**

### Surfaces
| Token | Light | Dark |
|---|---|---|
| `--surface-page` | `--bone-200` | `--charcoal-900` |
| `--surface-elevated` | `--bone-100` | `--indigo-900` |
| `--surface-sunken` | `--bone-300` | `--charcoal-800` |
| `--surface-brand` | `--indigo-500` | `--indigo-400` |
| `--surface-brand-subtle` | `--indigo-50` | `--indigo-700` |
| `--surface-accent` | `--saffron-500` | `--saffron-300` |
| `--surface-accent-subtle` | `--saffron-50` | `--saffron-700` |
| `--surface-third` | `--teal-500` | `--teal-300` |
| `--surface-third-subtle` | `--teal-50` | `--teal-700` |

### Text
| Token | Light | Dark |
|---|---|---|
| `--text-primary` | `--charcoal-800` | `--bone-100` |
| `--text-secondary` | `--steel-700` | `--steel-300` |
| `--text-muted` | `--steel-500` | `--steel-300` |
| `--text-on-brand` | `--bone-100` | `--bone-100` |
| `--text-on-accent` | `--charcoal-800` | `--charcoal-900` |
| `--text-on-third` | `--bone-100` | `--bone-100` |
| `--text-link` | `--indigo-500` | `--indigo-200` |
| `--text-link-hover` | `--saffron-700` | `--saffron-300` |
| `--text-accent` | `--saffron-700` | `--saffron-300` |

### Borders
| Token | Light | Dark |
|---|---|---|
| `--border-subtle` | `rgba(26,26,31,0.08)` | `rgba(244,239,230,0.08)` |
| `--border-default` | `rgba(26,26,31,0.14)` | `rgba(244,239,230,0.14)` |
| `--border-emphasis` | `--charcoal-800` | `--bone-100` |
| `--border-focus` | `--indigo-500` | `--indigo-200` |

---

## Color — Allocation & Rules

**70/20/8/2:** 70% neutrals, 20% text/structure, 8% Indigo, 2% Saffron. Teal for variety/data.

**Where each shows up:**
- **Indigo** — primary CTAs, logo line, headers, pipeline frames, HCP surfaces, investor sections
- **Saffron** — logo dot, patient CTAs, italic emphasis (use 700 on light), live indicators, patient hub
- **Teal** — manufacturing accents, pipeline phase indicators, data viz third series, clinical tags

**Critical contrast rules:**
- ❌ Never use `--saffron-500` for body on light (fails AA)
- ✅ `--saffron-700` for body emphasis on light
- ✅ Saffron CTAs use Charcoal text (AAA), not white
- ✅ Indigo CTAs use Bone-100 text (AAA)
- ✅ `--teal-700` for text on light; `--teal-500` only with white text

**Anti-patterns:**
- ❌ Components referencing primitive tokens directly
- ❌ Saffron-500 + Saffron-700 adjacent (pick one)
- ❌ All three accents in one viewport (max two)
- ❌ Color as the only signal for state
- ❌ Adding a fourth accent

---

## Typography

**Families (self-host both):**
- Inter Tight — Display (variable, OFL)
- Inter — Body, UI, eyebrows, tabular data (variable, OFL)

> **Note:** JetBrains Mono was removed from the system. The `--font-mono` token is retained for backwards compatibility but now resolves to Inter. Use Inter with the `tnum` OpenType feature (`font-variant-numeric: tabular-nums`) for tables, KPI strips, financial numbers, and tickers.

### Scale (fluid)
| Token | Mobile | Desktop | Family | Weight | Use |
|---|---|---|---|---|---|
| `--font-display-2xl` | 56 | 112 | Inter Tight | 600 | Hero only |
| `--font-display-xl` | 44 | 88 | Inter Tight | 600 | Page H1 |
| `--font-display-lg` | 36 | 64 | Inter Tight | 600 | Section H2 |
| `--font-display-md` | 28 | 44 | Inter Tight | 600 | Sub-section H2 |
| `--font-heading-lg` | 22 | 28 | Inter Tight | 600 | H3 |
| `--font-heading-md` | 18 | 22 | Inter Tight | 600 | H4 |
| `--font-heading-sm` | 16 | 18 | Inter | 600 | H5, card titles |
| `--font-body-lg` | 17 | 19 | Inter | 400 | Lead paragraphs |
| `--font-body-md` | 16 | 17 | Inter | 400 | **Default body** |
| `--font-body-sm` | 14 | 15 | Inter | 400 | Captions |
| `--font-micro` | 12 | 13 | Inter | 500 | Footnotes, ISI |
| `--font-eyebrow` | 11 | 12 | Inter | 600 | Section labels (uppercase) |
| `--font-mono-md` | 14 | 15 | Inter (`tnum`) | 400 | Data, codes |

### Letter-spacing
| Range | Value |
|---|---|
| Display 44px+ | -0.04em |
| Heading 22–40px | -0.03em |
| Sub-heading 16–22px | -0.02em |
| Body 15–19px | 0 |
| Eyebrow (uppercase) | 0.18em |

**Italic emphasis:** carries meaning — 1–2 words in hero, pull quotes, scientific names, brand promise. Color with `--text-accent`.

**Tabular figures (`tnum`):** REQUIRED for tables, KPI strips, financial numbers, tickers.

**Heading order:** never skip levels (WCAG 1.3.1). One H1 per page.

---

## Spacing

8pt base + 4pt half-steps.

| Token | rem | px |
|---|---|---|
| `--space-1` | 0.25 | 4 |
| `--space-2` | 0.5 | 8 |
| `--space-3` | 0.75 | 12 |
| `--space-4` | 1 | 16 (default) |
| `--space-5` | 1.5 | 24 |
| `--space-6` | 2 | 32 |
| `--space-7` | 3 | 48 |
| `--space-8` | 4 | 64 |
| `--space-9` | 6 | 96 |
| `--space-10` | 8 | 128 |

**Layout:** container max 1360px, padding 32px desktop / 20px mobile, 12-col grid, 24px gutters (16 mobile).

**Breakpoints:** sm 480, md 768, lg 1024, xl 1280, 2xl 1536. Mobile-first.

---

## Form

### Radius
| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 2px | Inputs, badges |
| `--radius-sm` | 6px | Tags, small cards |
| `--radius-md` | 10px | **Default cards, buttons** |
| `--radius-lg` | 16px | Hero modules |
| `--radius-xl` | 24px | Marquee modules |
| `--radius-pill` | 999px | Pills |

### Shadows (indigo-tinted, never gray)
| Token | Value |
|---|---|
| `--shadow-xs` | `0 1px 1px rgba(49,46,129,0.04)` |
| `--shadow-sm` | `0 1px 2px rgba(49,46,129,0.06), 0 4px 8px rgba(49,46,129,0.04)` |
| `--shadow-md` | `0 4px 12px rgba(49,46,129,0.06), 0 12px 28px rgba(49,46,129,0.08)` |
| `--shadow-lg` | `0 12px 32px rgba(49,46,129,0.10), 0 32px 64px rgba(49,46,129,0.12)` |
| `--shadow-xl` | `0 24px 56px rgba(49,46,129,0.16), 0 48px 96px rgba(49,46,129,0.18)` |
| `--shadow-focus` | `0 0 0 3px rgba(49,46,129,0.20)` |
| `--shadow-accent` | `0 12px 32px rgba(245,158,11,0.30)` |

### Borders
- `--border-width-default` 1px
- `--border-width-emphasis` 1.5px
- `--border-width-thick` 2px (active, focus)

---

## Motion

### Easing
| Token | Curve | Meaning |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default UI |
| `--ease-decelerate` | `cubic-bezier(0, 0, 0, 1)` | Entering |
| `--ease-accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | Exiting |

### Duration
`--duration-instant` 100 · `--duration-fast` 200 · `--duration-default` 300 · `--duration-slow` 500 · `--duration-deliberate` 800 (ms).

**Reduced motion (non-negotiable):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

**Principles:** purpose over flourish, direction has meaning (entrances translate up 8–20px), stagger ≤80ms, never block UI, respect reduced motion.

---

## Iconography

- Stroke 1.5px, rounded caps/joins
- 24×24 grid, 2px padding (20×20 inner)
- `stroke="currentColor"` (inherits)
- Custom set, ~60 icons. Don't use Font Awesome.

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true" focusable="false">
  <!-- path -->
</svg>
```

---

## Logo

**Concept:** "Direction" — horizontal Indigo line resolving into Saffron circle at right.

**Wordmark:** "ANI" in Inter Tight 600. "PHARMACEUTICALS" in Inter 600 caps, 0.18em tracking, ~28% of "ANI" cap height.

**Variants:** horizontal primary (default), stacked (mobile/avatar), wordmark only, mark only (<120px), two-tone (default), reverse (Bone+Saffron on dark), mono (single-color print only).

**Clear space:** 2× cap height of "A" on all sides.

**Min sizes:** horizontal 140px digital / 40mm print · stacked 100px / 30mm · mark 24×24px / 8mm.

**Don'ts:** swap line/circle colors, rotate, skew, drop shadows, recolor wordmark, stretch, retypeset.

---

## CSS Custom Properties (drop-in)

```css
:root {
  /* Indigo */
  --indigo-50:  #EEEEFB; --indigo-100: #D5D4F0;
  --indigo-200: #A8A6D9; --indigo-400: #4D4AAA;
  --indigo-500: #312E81; --indigo-600: #232067;
  --indigo-700: #15124A; --indigo-900: #08062A;

  /* Saffron */
  --saffron-50:  #FEF6E5; --saffron-100: #FCE8B8;
  --saffron-300: #F9C76C; --saffron-500: #F59E0B;
  --saffron-600: #C57A02; --saffron-700: #8B5500;

  /* Teal */
  --teal-50:  #E5F5F4; --teal-100: #B6E3DF;
  --teal-300: #5DCBC2; --teal-500: #0D9488;
  --teal-600: #0A776D; --teal-700: #075952;
  --teal-900: #042521;

  /* Neutrals */
  --bone-100: #FFFEFB; --bone-200: #F7F5F1; --bone-300: #EAE7E1;
  --steel-300: #A8AAB0; --steel-500: #6B6E73; --steel-700: #3F4145;
  --charcoal-800: #1A1A1F; --charcoal-900: #0E0E12;

  /* Semantic states */
  --green-success: #3D8B5C; --amber-warning: #C5851F;
  --red-error: #B83A2A;

  /* Semantic — light */
  --surface-page: var(--bone-200);
  --surface-elevated: var(--bone-100);
  --surface-sunken: var(--bone-300);
  --surface-brand: var(--indigo-500);
  --surface-brand-subtle: var(--indigo-50);
  --surface-accent: var(--saffron-500);
  --surface-accent-subtle: var(--saffron-50);
  --surface-third: var(--teal-500);
  --surface-third-subtle: var(--teal-50);

  --text-primary: var(--charcoal-800);
  --text-secondary: var(--steel-700);
  --text-muted: var(--steel-500);
  --text-on-brand: var(--bone-100);
  --text-on-accent: var(--charcoal-800);
  --text-on-third: var(--bone-100);
  --text-link: var(--indigo-500);
  --text-link-hover: var(--saffron-700);
  --text-accent: var(--saffron-700);

  --border-subtle: rgba(26,26,31,0.08);
  --border-default: rgba(26,26,31,0.14);
  --border-emphasis: var(--charcoal-800);
  --border-focus: var(--indigo-500);
  --border-error: var(--red-error);

  /* Type */
  --font-display: 'Inter Tight', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'Inter', -apple-system, sans-serif;

  --font-display-2xl: clamp(3.5rem, 8vw, 7rem);
  --font-display-xl:  clamp(2.75rem, 6vw, 5.5rem);
  --font-display-lg:  clamp(2.25rem, 4.5vw, 4rem);
  --font-display-md:  clamp(1.75rem, 3vw, 2.75rem);
  --font-heading-lg:  clamp(1.375rem, 2vw, 1.75rem);
  --font-heading-md:  clamp(1.125rem, 1.5vw, 1.375rem);
  --font-body-lg:     clamp(1.0625rem, 1.25vw, 1.1875rem);
  --font-body-md:     clamp(1rem, 1vw, 1.0625rem);
  --font-body-sm:     clamp(0.875rem, 0.95vw, 0.9375rem);
  --font-eyebrow:     clamp(0.6875rem, 0.75vw, 0.75rem);

  /* Spacing */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem;    --space-5: 1.5rem; --space-6: 2rem;
  --space-7: 3rem;    --space-8: 4rem;   --space-9: 6rem;
  --space-10: 8rem;

  /* Radii */
  --radius-xs: 2px;  --radius-sm: 6px;  --radius-md: 10px;
  --radius-lg: 16px; --radius-xl: 24px; --radius-pill: 999px;

  /* Shadows */
  --shadow-xs:     0 1px 1px rgba(49,46,129,0.04);
  --shadow-sm:     0 1px 2px rgba(49,46,129,0.06), 0 4px 8px rgba(49,46,129,0.04);
  --shadow-md:     0 4px 12px rgba(49,46,129,0.06), 0 12px 28px rgba(49,46,129,0.08);
  --shadow-lg:     0 12px 32px rgba(49,46,129,0.10), 0 32px 64px rgba(49,46,129,0.12);
  --shadow-focus:  0 0 0 3px rgba(49,46,129,0.20);
  --shadow-accent: 0 12px 32px rgba(245,158,11,0.30);

  /* Motion */
  --ease-standard:   cubic-bezier(0.2, 0, 0, 1);
  --ease-decelerate: cubic-bezier(0, 0, 0, 1);
  --ease-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --duration-instant: 100ms; --duration-fast: 200ms;
  --duration-default: 300ms; --duration-slow: 500ms;
  --duration-deliberate: 800ms;
}

[data-theme="dark"] {
  --surface-page:          var(--charcoal-900);
  --surface-elevated:      var(--indigo-900);
  --surface-brand:         var(--indigo-400);
  --surface-brand-subtle:  var(--indigo-700);
  --surface-accent:        var(--saffron-300);
  --surface-accent-subtle: var(--saffron-700);
  --surface-third:         var(--teal-300);
  --surface-third-subtle:  var(--teal-700);
  --text-primary:   var(--bone-100);
  --text-secondary: var(--steel-300);
  --text-muted:     var(--steel-300);
  --text-link:      var(--indigo-200);
  --text-accent:    var(--saffron-300);
  --border-focus:   var(--indigo-200);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance Budgets

LCP < 2.0s on 4G · CLS < 0.05 · INP < 200ms · JS bundle < 180KB compressed initial.
