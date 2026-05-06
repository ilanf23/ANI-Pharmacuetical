# Redesigned Site Copy — ANI Pharmaceuticals

Page-by-page copy for the v3.0 redesign. Each file is the new copy for one URL on `anipharmaceuticals.com`, written against the voice rules in `claude/voice.md` and the engineering tokens in `claude/tokens.md`.

## File map

| File | URL | Purpose |
|---|---|---|
| `index.md` | `/` | Homepage — three audiences, one promise. |
| `about.md` | `/about` | Company story, segments, history. |
| `purpose-values.md` | `/purpose-values` | Purpose statement and five values. |
| `quality.md` | `/quality` | cGMP standard in plain English. |
| `capabilities.md` | `/capabilities` | Manufacturing depth, sold to partners. |
| `locations.md` | `/locations` | Four U.S. facilities, mapped. |
| `executive-team.md` | `/executive-team` | Nine-person leadership grid. |
| `board.md` | `/board` | Eight directors, three committees. |
| `products.md` | `/products` | 200+ products via real finder; rare-disease lead. |
| `careers.md` | `/careers` | Why join. Where you'd work. Recruiting fraud notice. |
| `benefits.md` | `/benefits` | Eight benefit categories. |
| `contact.md` | `/contact` | Routed by audience, not phone-list. |
| `legal.md` | `/privacy` `/terms` `/accessibility` | Page chrome and accessibility commitments. |

## How each file is structured

- `---` frontmatter: page name, URL, audience, purpose, compliance notes.
- Section-by-section copy with eyebrow / headline / subhead / body / CTA blocks.
- Inline design notes where the copy depends on a specific token, motion, or layout decision.
- ISI / fair-balance reminders on any page that surfaces a branded product (Cortrophin, ILUVIEN).

## Voice rules applied

- Direct. Sourced. Patient-centered. Confident, not arrogant. Warm, not saccharine. Active over passive.
- Banned phrases stripped: *innovative*, *world-class*, *robust portfolio*, *transformative*, *we're committed to*, *cutting-edge*, *leverage*, *passionate about*, *thought leader*. None appear.
- Italic emphasis carries meaning — used on one or two words at a time, colored `--text-accent` (Saffron-700 light / Saffron-300 dark).
- *Care, codified.* appears as the closing-band brand promise where appropriate.

## Next step

Design phase: build the templates against `claude/tokens.md`. Each file's "design notes" point to the right tokens and patterns. Branded-product modules need ISI bar and fair-balance review per `claude/compliance.md`.
