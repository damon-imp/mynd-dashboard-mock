# MYND Command Center

A working mock of the operating dashboard. 30 pages, all navigable, all
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
| **Exec** | Goals & Targets · Role Scorecards · Org Chart · Project Board (P2) |
| **Money** | Cash & Buckets · Profit & Loss · Debt & Obligations · Payment Rails |
| **Revenue** | Overview · Retention · Subscriptions · Wholesale |
| **Marketing** | Today So Far · Daily Tracker · Cohort LTV · Performance · CAC Ceiling · Attribution · Social |
| **Operations** | Customer Experience · Inventory · Fulfillment · Cost Trend · Suppliers · Production (P2) |
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
  data.jsx            core data model, the data contract
  data2.jsx           marketing, LTV, retention, customer-centric ops
  data3.jsx           live block, daily tracker, cohort LTV
  data4.jsx           sub-tab views: forecast, transactions, reorders, movements, insights, sync
  data5.jsx           seats, every metric, sample score history, transfers
  period.jsx          period selector engine, mock only
  ui.jsx              primitives and charts
  pages-1.jsx         Boardroom, Goals, Scorecards, Org, Money
  pages-2.jsx         Revenue, Subs, Wholesale, Attribution, Social, Inventory, Suppliers, Agents, Vault, Data Health
  pages-3.jsx         Marketing Performance, CAC Ceiling, Retention, Customer Experience, Cost Trend, Fulfillment, Phase2
  pages-4.jsx         Today So Far, Daily Tracker, Cohort LTV
  pages-5.jsx         sub-tab views
  pages-6.jsx         Role Scorecards, Score Log, Org Chart, and the score store
  app.jsx             shell, nav, ticker, palette, routing
```

Edit `src/`, then `npm i @babel/standalone && node build.mjs`.

**Notes.** Charts are hand-rolled SVG, no chart library. `data.jsx` is the spec for
what the reporting layer has to return. Elevation uses `--page` and `--surface`
rather than `--bg` directly, so raised surfaces read lighter in both themes. Trust
levels are a first-class concept and should survive into the live build: they're
what stops a half-wired dashboard lying.

---

## Second pass, what changed

Built from DB's feedback on the first mock.

- **Marketing Performance added.** Meta, Google, AppLovin, Organic. Spend, impressions, clicks, CTR, CPC, CPM, conversions, CPA, ROAS. Channels, trend and creative views.
- **LTV and CAC Ceiling added.** Contribution per customer at first order, 30, 90 and 180 days, cut by product category, by coupon and by cohort. The ceiling column is the number that governs ad spend.
- **Retention added** under Revenue. Share of revenue from existing customers, email revenue, referral code usage, all trended.
- **Customer Experience replaces the old Operations orientation.** Order to doorstep, shipped same day, in stock when wanted, arrived undamaged. Friction sits underneath with a dollar cost and a fix.
- **Products & Margin cut.** Cost trend survived and moved to Operations.
- **Fulfillment moved** out of Revenue into Operations.
- **Bills of materials** live in the Vault, not Suppliers.
- **Subscriptions simplified** to four numbers and the rebill trend. Scope the rest on a call.
- **Goals are editable.** Delete any of the ten, add your own.
- **1 day added** to the period selector.
- **Project Board and Production deferred** to phase two and marked P2 in the nav.
- **Money and Wholesale untouched.**
- **Agents unchanged**, pending a call.

## Third pass, folded from the growth reference

Data model taken from DB's growth intelligence deck. Layout ours.

- **Today So Far.** Live intraday block paced against yesterday to the same hour. Spend, new customer orders, new customer revenue, aMER, MER, blended nCAC, spend by channel, and the metrics block.
- **Daily Performance Tracker.** One row per day with a spend-by-channel toggle. Total, Forecast, Target and Required-per-day footer rows. Click a day to drill.
- **Cohort LTV.** LTV curve at Day 0, M1, M2, M3, M6, M12, by product or by coupon. First-order AOV by category. The M12 over AOV multiple.
- **aMER and MER separated.** Acquisition MER is new customer revenue over spend. MER is blended. ROAS is per channel and attributed. Kept apart on purpose.
- **Definitional footers.** Net revenue and contribution profit stated on every marketing page.
- **Boardroom** now carries aMER and blended nCAC on the unit economics row.

## Fourth pass, build-side gaps closed

- **Period selector filters.** 1 day, 7, 30, 90, MTD and Custom with a date range. Flow figures rescale from the 30 day base: revenue, contribution, result, funnel, P&L, channels, products, rails, retention, friction. The Daily Tracker keeps the last N days on record and recomputes its footer. Balances, rates, targets and monthly trends hold still, and a line under the selector says so. Rail cap bars stay on a 30 day basis because the caps are 30 day caps. `period.jsx` is mock only. The live build asks the reporting layer for the window directly.
- **Every sub-tab is built.** Boardroom: Financials, Insights, System Health. Cash: Forecast (13 weeks against the floor), Transactions. Revenue: By Channel with trust levels. Inventory: Reorders (costs tie to the Inventory tab), Movements (flags stock that left without a sale).
- **Print stylesheet.** Prints the current page and tab, light theme, letter landscape. Sidebar, ticker, tab bar and selector drop out. Cards and table rows don't split across pages.
- **Build pinned.** `build.mjs` pins Babel's classic JSX runtime. Babel 8 defaults to automatic, emits `import` statements, and the bundle renders blank.
- **Voice sweep.** No em dashes, no uppercase label transforms, contractions throughout.

## Fifth pass, the team layer

Folded from the role documents, Metrics by role, Role scorecards and the Metrics tracker, all v1.0, September 18.

- **Role Scorecards rebuilt.** Nine seats, one primary number each, with latest, prior, status, a trend line, target, cadence and how measurable it is today. Click a card for the full trend, the supporting numbers and what the seat manages and doesn't. The one that matters most, decisions routed through the owner, sits on top.
- **Viewing as.** Pick a seat and the page shows only that person's card. That's the everyone-sees-their-own rule, ahead of real role-based access.
- **Score Log added.** One number per seat per week, Sep 21 through Mar 15, the same columns as the tracker. In Live log mode the cells take entries, save in the browser, and export to CSV. An empty week reads Not measured, never zero.
- **Status matches the tracker.** A fixed target compares against the target. A direction compares against the prior entry, which is the last week with a number in it, so monthly and per-run seats compare run to run. The tracker's Prior formula was fixed to the same rule.
- **Org Chart rebuilt.** Owner, COO, the assistant reporting to the owner, the seats reporting to the owner, and the ones owned by or moving to the COO. Each card carries its role in one line and its live number, and clicks through to the scorecard. What stays with the owner and what moves off him sit underneath, with each function's place in the three-step transfer.
- **Sample history or live log.** A switch on all three pages. Sample shows twelve modeled weeks so the trends read. Live starts empty.
- **Owner decisions on the ticker**, read from the log.
- **Vault** carries the role documents, and the drive lists the scorecards, metrics by role and the tracker.

## Sixth pass, every metric scored

Seats were scored on one number. Now every seat is scored on every metric it's held to, 33 in all, so a stalled seat shows which metric it stalled on.

- **One spec, two outputs.** `data5.jsx` METRICS and the Metrics tracker come from the same list: name, primary or not, how it's scored, target, cadence and source. Scoring rules: at or under, at or over, rising, flat or falling, and yes (1 or 0).
- **Every entry is scored.** A metric's status is worked out at every week it has a number, not just the latest, so a metric that stays off shows as a run.
- **Role Scorecards.** Totals across all 33 metrics. Sticking points lists every metric that's off, longest run first, which is where failure modes show up. Seat health over time scores each seat week by week. Each seat card leads with its primary number and lists every other metric with a status dot. The seat detail has a trend for every metric and a status-by-week strip.
- **Score Log.** One row per metric, grouped by seat, with every entry colored by its status that week. Live entries save in the browser and export to CSV. The storage key moved to v2.
- **Org Chart.** Each card shows the primary number plus a dot per metric and how many are holding.

## Known gaps

- Agents are scoped, not built. Outside the current engagement
- Project Board and Production stay phase two until scoped
