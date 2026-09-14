# MYND Operations Dashboard, mock

A clickable mock for review. Every page is real and navigable. Nothing is wired to
live data yet, which is the point: this is the thing you walk DB through to agree
the shape before Greg builds it against real sources.

---

## Design language

Follows the Elevate v10 system: Apple-calm neutrals, one accent, semantic colour
used only where it carries meaning, a single soft shadow tier, system font stack,
and everything driven by CSS custom properties.

Spacing rhythm and type scale match Elevate rather than a typical dense dashboard.
Cards gap at 20-24, pad at 24, body text sits at 13-13.5px. It's deliberately
airier than most ops tooling because it's a surface someone keeps open all day.

## Running it

Open `index.html`. That's it.

React is vendored in `/vendor`, so there's no CDN call and nothing to fail on
hotel wifi mid-walkthrough. It runs from a file path, a laptop, a USB stick or
any static host. Push the whole folder to Netlify, Vercel, S3, wherever.

---

## What's in it

Eight pages.

| Tab | What it answers |
| --- | --- |
| **Overview** | What needs deciding this week, and the six numbers worth knowing cold |
| **Cash & Money OS** | What's spendable, the operating floor, the bucket waterfall, what's owed and when |
| **Revenue & Rails** | All four processors, gross in, fees out, net to bank. Revenue by channel and the invisible shipments |
| **Margin & Units** | Contribution margin, what a bar actually costs, kitchen ledger status |
| **Subscribers** | Rebill rate, where subscribers fall off, retention by cohort |
| **Inventory** | Days of cover per SKU, velocity, and whether the reorder is affordable |
| **Team** | One number per seat, and the founder decision log |
| **Data Health** | Which numbers on this dashboard can be trusted today, and which can't |

### Interactions that work

- Tab navigation, with hash routing so you can deep-link a tab
- Keyboard: **1** to **8** for tabs, **T** for theme
- Dark and light, toggle top right. Dark is the default
- The decisions checklist ticks off and counts
- Segmented filters on Cash, Revenue, Margin and Inventory
- Inventory rows expand for reorder detail
- Hover tooltips on every chart
- Responsive down to phone width

---

## Why it doesn't match DB's Figma exactly

His version was a good start and most of the structure survived. Three things changed.

**The Money OS was missing entirely.** His mockup has a cash flow page but nothing
about the operating floor, the buckets, the waterfall or the debt schedule. That's
the centre of this engagement, so it's now the second tab.

**Revenue by rail didn't exist.** His books counted one processor out of four, and
his mockup repeated the same blind spot. Every revenue view here splits by rail,
with fees and reserve visible rather than buried in the deposit.

**Some of his numbers would have been fiction.** His version shows LTV:CAC by
channel with confident figures. Attribution has been crediting an internal test
account since April, so those numbers can't be produced honestly today. Rather
than print them, the Subscribers page carries a panel explaining exactly why
they're empty and when they fill in.

Three things were added that weren't in his: the four-quarter P&L against
benchmarks, role scorecards with the decision log, and the Data Health page.

---

## The Data Health page

Worth walking him through deliberately. It grades every number by how much it can
be trusted right now. Cash, fixed costs and the debt schedule are green. Margin
per unit is red because of the $10 placeholder. Channel revenue and lifetime value
are flagged as not usable yet.

A dashboard that shows a confident wrong number is more dangerous than one that
admits what it doesn't know. As sources connect, rows move up that list and the
tiles they feed stop carrying a warning.

---

## The data

All mock, but anchored to real MYND figures wherever they exist, so DB recognises
his own business and the conversation stays on shape rather than numbers.

Real: $42,112 July revenue · $40,347 cash · $23,081 on the card against a $46,700
limit · $14,050 fixed costs from $28,860 · 94.75% approval · 27.3% rebill ·
10.98% cycle-three retention · $69 bar at $6.26 to $7.25 · 348 July shipments with
125 invisible · 4.5% all-in processing · Kurv's 10% reserve and $25,000 cap ·
the nine-payment buyout schedule · the Q4 bucket percentages.

Invented for shape and labelled **Mock shape** in the UI: SKU-level velocity, the
cohort table, active subscriber counts, the channel splits.

Labelled **Needs attribution**: anything that can't be honestly produced until the
attribution rebuild lands.

---

## For Greg

### Structure

```
index.html            entry, loads vendor + bundle
base.css              design tokens, both themes, responsive layer
assets/               MYND wordmark, svg and png
vendor/               React 18 UMD + the compiled bundle
src/                  readable JSX sources, edit these
  data.jsx            every number in one object
  ui.jsx              primitives and charts
  pages-a.jsx         Overview, Cash
  pages-b.jsx         Revenue, Margin, Subscribers
  pages-c.jsx         Inventory, Team, Data Health
  app.jsx             shell, nav, theme, routing
```

### Editing

Change anything in `src/`, then rebuild the bundle:

```bash
npm i @babel/standalone
node build.mjs
```

Or during design iteration, swap the `<script src="vendor/app.bundle.js">` line in
`index.html` for Babel standalone plus `type="text/babel"` script tags pointing at
`src/`, and skip the build step. Slower to load, faster to iterate.

### Notes for the real build

- **Charts are hand-rolled SVG on purpose.** No chart library, no CDN, nothing to
  version-pin. Swap for Recharts or similar in the live build if you'd rather.
- **`data.jsx` is the whole data contract.** Every shape the UI needs is in that
  one object. Treat it as the spec for what the reporting layer has to return.
- **Design tokens are all CSS custom properties.** Nothing is hard-coded, so
  theming and brand changes happen in `base.css` alone.
- **Trust levels are a first-class concept.** Every tile can carry `trust:
  "good" | "mock" | "blocked" | "waiting"` and the UI renders the right badge.
  Keep that in the live version. It's what stops a half-wired dashboard lying.
- **Elevation uses `--page` and `--surface`, not `--bg`.** A raised surface reads
  lighter than the page in both themes. Keep that pair rather than reaching for
  `--bg-2` directly, or dark mode inverts.
- **The brand navy is `#283C61`.** Too dark to read as an accent on a dark
  surface, so dark mode uses a lightened derivative and light mode uses it neat.

---

## Known gaps

- Date range control top right is present but not wired to filter data
- No print stylesheet
- Charts are static, no drill-through yet
- Logo is the header wordmark. The playful footer version is in `assets/` but it
  doesn't suit an ops surface
