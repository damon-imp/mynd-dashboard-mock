# MYND Command Center

A working mock of the operating dashboard. Twenty-two pages, all navigable, all
interactive. Nothing is wired to live data yet, which is the point: this is what
you walk DB through to agree the surface before it gets built against real sources.

Open `index.html`. No build step, no server, no CDN.

---

## What it is

A command center, not a report. The first thing DB sees is his business at a
glance: unit economics, the funnel, what happened today, what's happened to date.
Action and watch items sit at the bottom where they belong.

### Navigation

| Group | Pages |
| --- | --- |
| **Home** | Boardroom |
| **Exec** | Goals & Targets · Role Scorecards · Project Board · Org Chart |
| **Money** | Cash & Buckets · Profit & Loss · Debt & Obligations · Payment Rails |
| **Revenue** | Overview · Products & Margin · Subscriptions · Wholesale |
| **Marketing** | Attribution · Ads · Social |
| **Operations** | Inventory · Production · Suppliers |
| **Agents** | All Agents |
| **Team OS** | Vault & Drive |
| **Admin** | Data Health |

### Interactions that work

- Collapsible sidebar groups, active-state tracking
- Command palette on **⌘K** with live filtering
- Theme toggle on **T**, dark and light both first-class
- Live ticker across the top, pauses on hover
- Period selector on every page
- Sub-tabs where a section has more than one view
- Segmented filters on Cash, Products, Inventory
- Expandable inventory rows with reorder detail
- Hash routing with browser back and forward
- Mobile drawer nav, tested at 390px

---

## The data

Mock, but anchored to real MYND figures wherever they exist so DB recognizes his
own business and the conversation stays on shape rather than numbers.

Real: $46,814 revenue · $40,347 cash · $23,081 on the card · $14,050 fixed costs
from $28,860 · 94.75% approval · 13.4% attach · 10.98% cycle-three retention ·
$69 bar at $6.26-$7.25 · 348 shipments with 125 invisible · 4.5% processing ·
Kurv's $25,000 cap and 10% reserve · the nine-payment buyout schedule · the Q4
bucket percentages.

Everything else is shaped to demonstrate the surface.

Where a number genuinely can't be produced yet, the UI says so rather than
inventing one. Attribution is the clearest case: every channel figure since April
has been landing on an internal test account, so the Attribution page leads with
that rather than printing confident splits.

---

## For the build

```
index.html            entry
base.css              tokens, both themes, responsive layer
assets/               MYND wordmark
vendor/               React 18 UMD + compiled bundle
src/                  readable JSX, edit these
  data.jsx            every number in one object, this is the data contract
  ui.jsx              primitives and charts
  pages-1.jsx         Boardroom, Goals, Scorecards, Board, Org, Money
  pages-2.jsx         Revenue, Marketing, Ops, Agents, Vault, Data Health
  app.jsx             shell, nav, ticker, palette, routing
```

Edit `src/`, then `npm i @babel/standalone && node build.mjs`.

**Notes.** Charts are hand-rolled SVG, no chart library. `data.jsx` is the spec for
what the reporting layer has to return. Elevation uses `--page` and `--surface`
rather than `--bg` directly, so raised surfaces read lighter in both themes. Trust
levels are a first-class concept and should survive into the live build: they're
what stops a half-wired dashboard lying.

---

## Known gaps

- Period selector is present but doesn't filter the mock data
- Sub-tabs beyond the first show a scoped placeholder
- Agents are scoped, not built. Outside the current engagement
- No print stylesheet
