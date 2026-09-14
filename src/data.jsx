// data.jsx — MOCK DATA
// Figures are anchored to real MYND numbers from the diagnosis wherever they exist,
// so DB recognises his own business. Anything invented for shape is marked
// trust:"mock". Anything that cannot be trusted until attribution is rebuilt is
// marked trust:"blocked" and the UI says so rather than showing a confident number.

const MYND = {
  meta: {
    brand: "MYND",
    subtitle: "Operations Dashboard",
    period: "Sep 8, 2026",
    asOf: "Data as of Sep 8, 2026 · Mock",
    day: 35,
    ofDays: 180,
    phase: "Phase 3 Build",
  },

  // ---------------------------------------------------------------- decisions
  decisions: [
    {
      id: "d1",
      level: "urgent",
      title: "Mercury bucket rules need your sign-off before they go live",
      body: "The percentages you read out on the call totalled 80. The ones you calculated with total 100. We need the Q4 set confirmed in writing before it gets wired, because once it is a rule it moves money without asking.",
      meta: "Blocks the waterfall going live",
    },
    {
      id: "d2",
      level: "urgent",
      title: "The $20K card draw takes your headroom to $3,619",
      body: "You paid the card from $44,724 down to $23,081 in four weeks. Drawing $20,000 for the Q4 plan puts available credit back near where it was in August, when the low was $376.",
      meta: "Decide before the ad team turns on",
    },
    {
      id: "d3",
      level: "action",
      title: "Three logins still open. They block three of seven data sources",
      body: "Klaviyo, Packiyo and the Test Partner account history. Everflow already came through and it unblocked two workstreams at once.",
      meta: "Blocks the reporting layer",
    },
    {
      id: "d4",
      level: "opportunity",
      title: "First-order cascade is a settings change worth more than anything else here",
      body: "Rebills already retry on a second processor. First orders do not. Approval at 94.75% against a 98% target is about $18,000 a year, and this is the single biggest revenue item in the engagement.",
      meta: "Sticky config, not a build",
    },
    {
      id: "d5",
      level: "action",
      title: "Kitchen ledger has to start on the next run",
      body: "Cost per unit is still a $10 placeholder. Three runs a product before it means anything, and the next run is three to four weeks out.",
      meta: "Gates margin per unit",
    },
  ],

  // ---------------------------------------------------------------- headline
  headline: [
    { key: "cash",    label: "Cash available",      value: "$40,347",  sub: "Against a $22,500 floor",   delta: -37.2, deltaLabel: "vs Aug 22",  tone: "warn",  trust: "good" },
    { key: "result",  label: "Monthly result",      value: "+$15,197", sub: "On the same revenue",       delta: 3826,  deltaLabel: "vs July",    tone: "good",  trust: "good" },
    { key: "fixed",   label: "Fixed costs",         value: "$14,050",  sub: "From $28,860 in July",      delta: -51.3, deltaLabel: "cut",        tone: "good",  trust: "good" },
    { key: "debt",    label: "Total owed",          value: "$175,000", sub: "Next payment $9,481 Oct 1", delta: -15.9, deltaLabel: "in 30 days", tone: "good",  trust: "good" },
    { key: "approval",label: "Approval rate",       value: "94.75%",   sub: "Target 98%",                delta: 0,     deltaLabel: "flat",       tone: "warn",  trust: "good" },
    { key: "cover",   label: "SKUs at risk",        value: "4",        sub: "2 critical · 2 warning",    delta: 0,     deltaLabel: "",           tone: "bad",   trust: "mock" },
  ],

  // ---------------------------------------------------------------- cash
  cash: {
    accounts: [
      { name: "BlueBanc ··4830", role: "Settlement. Rails land here, sweeps to Mercury", balance: 34074, tone: "info" },
      { name: "Mercury Operating ··7698", role: "Operating account", balance: 6273, tone: "accent" },
      { name: "Mercury, eight sub-accounts", role: "Bucket structure, not yet funded", balance: 0, tone: "mute" },
    ],
    total: 40347,
    floor: 22500,
    floorBasis: "1.25 months of operating cost",
    floorNote: "Set on $18,000 of OPEX. September fixed plus the two new hires is $16,050, which would put the floor at $20,063.",
    card: { owed: 23081, limit: 46700, available: 23619, prevOwed: 44724, prevAvailable: 500 },
    trail: [
      { m: "Mar", bluebanc: 3000,  mercury: 95621 },
      { m: "Apr", bluebanc: 12400, mercury: 51917 },
      { m: "May", bluebanc: 38900, mercury: 26604 },
      { m: "Jun", bluebanc: 76042, mercury: 6914  },
      { m: "Jul", bluebanc: 55265, mercury: 4697  },
      { m: "Aug", bluebanc: 50372, mercury: 6358  },
      { m: "Sep", bluebanc: 34074, mercury: 6273  },
    ],
    buckets: [
      { name: "Operating",     pct: null, code: "1000", balance: 22500, target: 22500, note: "Holds the floor, spills to Sweep", tone: "accent" },
      { name: "Marketing",     pct: 35,   code: "1040", balance: 0,     target: 13125, note: "Largest share of the sweep",       tone: "info" },
      { name: "Inventory",     pct: 25,   code: "1030", balance: 0,     target: 9375,  note: "Sized off velocity once it lands", tone: "good" },
      { name: "Taxes",         pct: 20,   code: "1050", balance: 0,     target: 7500,  note: "Placeholder until a CPA lands",    tone: "warn" },
      { name: "Owner profit",  pct: 15,   code: "1070", balance: 0,     target: 5625,  note: "Distribution, separate from draw", tone: "accent" },
      { name: "Reserve",       pct: 5,    code: "1020", balance: 0,     target: 1875,  note: "Caps at $108,000",                 tone: "mute" },
    ],
    debt: [
      { label: "Buyout note, remaining", value: 148444, note: "8 of 9 payments left, through May 2027" },
      { label: "Chase card",             value: 23081,  note: "Interest bearing. Paid in full each cycle" },
      { label: "Second obligation",      value: 80000,  note: "Undated, no written terms. Modelled as real" },
    ],
    schedule: [
      { date: "Sep 1, 2026", amount: 11555.56, status: "paid",    note: "Largest. Carries grace interest" },
      { date: "Oct 1, 2026", amount: 9481.48,  status: "next",    note: "" },
      { date: "Nov 1, 2026", amount: 9407.41,  status: "planned", note: "" },
      { date: "Dec 1, 2026", amount: 9333.34,  status: "planned", note: "Falls inside Stress Test 2 window" },
      { date: "Jan 1, 2027", amount: 9259.26,  status: "planned", note: "Falls inside Stress Test 2 window" },
      { date: "Feb 1, 2027", amount: 9185.19,  status: "planned", note: "" },
      { date: "Mar 1, 2027", amount: 9111.11,  status: "planned", note: "" },
      { date: "Apr 1, 2027", amount: 9037.04,  status: "planned", note: "" },
      { date: "May 1, 2027", amount: 8962.94,  status: "planned", note: "Final" },
    ],
    outflows30: [
      { band: "Next 7 days",   amount: 6420,  detail: "Kitchen rent $2,200 · software $1,906 · support $1,050 · misc" },
      { band: "8 to 14 days",  amount: 3100,  detail: "3PL invoice · ingredient purchase" },
      { band: "15 to 30 days", amount: 9481,  detail: "Buyout payment Oct 1" },
    ],
  },

  // ---------------------------------------------------------------- four quarter
  fourQuarter: {
    note: "The whole P&L in four lines. Benchmarks come from the CTC model. Your OPEX is double where it should sit.",
    rows: [
      { line: "Cost of delivery", value: 5760,  pct: 12.3, bench: "~40%", tone: "good", detail: "COGS, fulfilment, processing" },
      { line: "Marketing",        value: 0,     pct: 0.0,  bench: "25-30%", tone: "warn", detail: "Ad spend currently paused" },
      { line: "OPEX",             value: 14050, pct: 30.0, bench: "~15%",  tone: "bad",  detail: "Fixed operating cost" },
      { line: "Profit",           value: 15197, pct: 32.5, bench: "15-20%", tone: "good", detail: "Before debt service" },
    ],
    revenue: 46814,
  },

  // ---------------------------------------------------------------- revenue
  revenue: {
    monthly: [
      { m: "Nov", v: 64267 }, { m: "Dec", v: 58900 }, { m: "Jan", v: 55400 },
      { m: "Feb", v: 51200 }, { m: "Mar", v: 49800 }, { m: "Apr", v: 47300 },
      { m: "May", v: 45100 }, { m: "Jun", v: 43900 }, { m: "Jul", v: 42112 },
    ],
    rails: [
      { name: "Deposyt",   gross: 19840, fees: 874,  reserve: 0,    net: 18966, pct: 4.41, approval: 96.2, decline: 3.8,  chargeback: 0.31, cap: 60000, tone: "good",   note: "First in the cascade. No reserve" },
      { name: "ExpiTrans", gross: 14320, fees: 648,  reserve: 0,    net: 13672, pct: 4.53, approval: 94.1, decline: 5.9,  chargeback: 0.44, cap: 40000, tone: "good",   note: "Measured at 4.48% and 4.54% all in" },
      { name: "Kurv / EMS", gross: 7952, fees: 366,  reserve: 795,  net: 6791,  pct: 4.60, approval: 91.8, decline: 8.2,  chargeback: 0.67, cap: 25000, tone: "warn",   note: "10% reserve to a $75,000 cap. Volume capped at $25,000 per 30 days" },
      { name: "Retired rail", gross: 0,  fees: 0,    reserve: 500,  net: 0,     pct: 0,    approval: 0,    decline: 0,    chargeback: 0,    cap: 0,     tone: "mute",   note: "Wound down. About $500 of residual outstanding" },
    ],
    processingNote: "Processing never existed in the ledger. It runs about 4.5% all in against a 1.5% discount rate, and the gap is interchange passed straight through. That is roughly $33,000 a year that was invisible.",
    channels: [
      { name: "Organic / direct", rev: 18420, share: 43.7, trust: "good" },
      { name: "Paid social",      rev: 0,     share: 0,    trust: "good", note: "Spend paused" },
      { name: "Email",            rev: 6890,  share: 16.4, trust: "blocked" },
      { name: "Creators",         rev: 400,   share: 0.9,  trust: "blocked", note: "Programme wound down" },
      { name: "Wholesale",        rev: 4120,  share: 9.8,  trust: "mock" },
      { name: "Unattributed",     rev: 12282, share: 29.2, trust: "blocked", note: "Landing on the internal test account since April" },
    ],
    shipments: { total: 348, onPlatform: 223, invisible: 125, invisiblePct: 35.9 },
  },

  // ---------------------------------------------------------------- margin
  margin: {
    contributionNote: "Net sales minus product cost minus variable expense minus ad spend. The number the business should orbit daily.",
    contribution: [
      { m: "Mar", v: 21400 }, { m: "Apr", v: 19800 }, { m: "May", v: 17900 },
      { m: "Jun", v: 16200 }, { m: "Jul", v: 14840 }, { m: "Aug", v: 28600 }, { m: "Sep", v: 31200 },
    ],
    offers: [
      { sku: "Dubai Chocolate",          cat: "Chocolate", price: 69, cost: 6.72, costBasis: "rebuilt", margin: 90.3, share: 21.4, units: 142 },
      { sku: "Sea Salt Chocolate",       cat: "Chocolate", price: 69, cost: 6.26, costBasis: "rebuilt", margin: 90.9, share: 15.8, units: 105 },
      { sku: "Matcha Chocolate",         cat: "Chocolate", price: 69, cost: 7.25, costBasis: "rebuilt", margin: 89.5, share: 12.1, units: 80 },
      { sku: "Mint Chocolate",           cat: "Chocolate", price: 69, cost: 6.91, costBasis: "rebuilt", margin: 90.0, share: 9.4,  units: 62 },
      { sku: "Strawberry Mango Gummies", cat: "Gummies",   price: 69, cost: 10.00, costBasis: "placeholder", margin: null, share: 14.2, units: 94 },
      { sku: "Blue Raspberry Gummies",   cat: "Gummies",   price: 69, cost: 10.00, costBasis: "placeholder", margin: null, share: 11.6, units: 77 },
      { sku: "Micro Caps",               cat: "Capsules",  price: null, cost: 10.00, costBasis: "placeholder", margin: null, share: 0, units: 0, note: "Not yet produced" },
      { sku: "M&M-style",                cat: "Other",     price: null, cost: 10.00, costBasis: "placeholder", margin: null, share: 0, units: 0, note: "Costed from the client workbook only" },
    ],
    kitchen: {
      note: "Cost per unit is a $10 placeholder somebody typed in. Three runs a product before a real number exists.",
      products: 10,
      runsLogged: 0,
      runsNeeded: 30,
      nextRun: "Late September",
      rates: [
        { label: "Labour",            value: "$25 / hr" },
        { label: "Kitchen rent",      value: "$2,200 / mo" },
        { label: "Active ingredient", value: "$300 / lb" },
        { label: "Delivery",          value: "$150 / run" },
      ],
    },
  },

  // ---------------------------------------------------------------- subscribers
  subs: {
    kpi: [
      { label: "Active subscribers", value: "1,842", sub: "End of period",        tone: "neutral", trust: "mock" },
      { label: "Rebill rate",        value: "27.3%", sub: "Fell from 100%",       tone: "bad",     trust: "good" },
      { label: "Attach rate",        value: "13.4%", sub: "Share of orders",      tone: "warn",    trust: "good" },
      { label: "Cycle-3 retention",  value: "10.98%", sub: "Nine in ten gone",    tone: "bad",     trust: "good" },
      { label: "Retry recovery",     value: "0 / 10", sub: "Retries two and three", tone: "bad",   trust: "good" },
      { label: "Card updater",       value: "Off",   sub: "Expiring cards fail silently", tone: "bad", trust: "good" },
    ],
    rebillTrend: [
      { m: "Feb", rate: 100 }, { m: "Mar", rate: 96 }, { m: "Apr", rate: 71 },
      { m: "May", rate: 48 },  { m: "Jun", rate: 33 }, { m: "Jul", rate: 27.3 },
      { m: "Aug", rate: 61 },  { m: "Sep", rate: 74 },
    ],
    rebillNote: "Rebill fell from 100% to 27.3% when subscriber payment credentials broke. Credentials are restored and the line is recovering. The retry and dunning rebuild is what closes the rest.",
    cohorts: [
      { c: "Mar 2026", n: 318, m1: 100, m3: 21, m6: 12, m12: null },
      { c: "Apr 2026", n: 287, m1: 100, m3: 18, m6: 11, m12: null },
      { c: "May 2026", n: 341, m1: 100, m3: 14, m6: null, m12: null },
      { c: "Jun 2026", n: 296, m1: 100, m3: 11, m6: null, m12: null },
      { c: "Jul 2026", n: 264, m1: 100, m3: null, m6: null, m12: null },
      { c: "Aug 2026", n: 302, m1: 100, m3: null, m6: null, m12: null },
    ],
    ltv: {
      blocked: true,
      note: "Lifetime value, revenue per unit and customer lifespan all need working attribution. Every channel number since April has been credited to an internal test account, so any figure here today would be fiction. These populate once the attribution rebuild lands in Phase 3.",
      fields: ["ACLV, lifetime value", "ARPU, revenue per unit", "ACL, customer lifespan", "Cost per customer", "LTV to CAC by channel"],
    },
    funnel: [
      { stage: "Order placed",     n: 223 },
      { stage: "Subscription attached", n: 30 },
      { stage: "Survived cycle 1", n: 30 },
      { stage: "Survived cycle 2", n: 14 },
      { stage: "Survived cycle 3", n: 3 },
    ],
  },

  // ---------------------------------------------------------------- inventory
  inventory: {
    note: "Velocity is being modelled now from warehouse units on hand and line-level transactions. Until it lands, days of cover is an estimate and the inventory bucket is sized on a guess.",
    skus: [
      { sku: "Dubai Chocolate",          cat: "Chocolate", onHand: 980,  velocity: 117, cover: 8,   lead: 21, status: "critical", incoming: true,  po: 61000 },
      { sku: "Micro Caps",               cat: "Capsules",  onHand: 0,    velocity: 0,   cover: 0,   lead: 30, status: "critical", incoming: false, po: 0, note: "Never produced" },
      { sku: "Strawberry Mango Gummies", cat: "Gummies",   onHand: 2210, velocity: 104, cover: 21,  lead: 24, status: "warning",  incoming: true,  po: 142000 },
      { sku: "Sea Salt Chocolate",       cat: "Chocolate", onHand: 3100, velocity: 92,  cover: 34,  lead: 18, status: "warning",  incoming: true,  po: 53000 },
      { sku: "Mint Chocolate",           cat: "Chocolate", onHand: 5640, velocity: 83,  cover: 68,  lead: 18, status: "healthy",  incoming: false, po: 0 },
      { sku: "Toffee Chocolate",         cat: "Chocolate", onHand: 3790, velocity: 57,  cover: 66,  lead: 18, status: "healthy",  incoming: false, po: 0 },
      { sku: "Espresso Chocolate",       cat: "Chocolate", onHand: 4680, velocity: 46,  cover: 102, lead: 18, status: "healthy",  incoming: false, po: 0 },
      { sku: "Blue Raspberry Gummies",   cat: "Gummies",   onHand: 4920, velocity: 63,  cover: 78,  lead: 24, status: "healthy",  incoming: false, po: 0 },
      { sku: "Matcha Chocolate",         cat: "Chocolate", onHand: 8100, velocity: 39,  cover: 208, lead: 18, status: "overstocked", incoming: false, po: 0 },
    ],
    affordability: {
      freeCash: 17847,
      totalPO: 256000,
      note: "Free cash is cash on hand minus the operating floor. Reorders sequence from most urgent, or draw on the card for the gap.",
    },
  },

  // ---------------------------------------------------------------- team
  team: {
    note: "Zero roles carry a number today. This is the target state. Every seat gets one measure, visible to the person being measured.",
    roles: [
      { name: "DB",        role: "Founder",              metric: "Decisions routed through him, per week", now: null, target: "Falling", status: "not-set", owner: true },
      { name: "Victor",    role: "Developer",            metric: "Fix items closed and verified",          now: "11 / 21", target: "21 / 21", status: "on-track" },
      { name: "Rebekka",   role: "Content lead",         metric: "Being repointed",                        now: null, target: "TBD",   status: "not-set" },
      { name: "Jose",      role: "Kitchen and production", metric: "Runs logged with all three fields",    now: "0 / 30", target: "30",  status: "at-risk" },
      { name: "Sales rep", role: "Clinic channel",       metric: "Clinic accounts opened",                 now: "0",  target: "TBD",   status: "at-risk" },
      { name: "Support",   role: "Customer support",     metric: "First response time",                    now: null, target: "TBD",   status: "not-set" },
      { name: "Admin",     role: "Being hired",          metric: "Invoices raised on time",                now: null, target: "TBD",   status: "not-set" },
    ],
    decisions: [
      { d: "Sep 7",  what: "Q4 bucket percentages set",                who: "DB", deleg: "Only him" },
      { d: "Sep 5",  what: "Buyout payment funded",                    who: "DB", deleg: "Rule-able" },
      { d: "Sep 3",  what: "Attribution window set at 30 days",        who: "DB", deleg: "Only him" },
      { d: "Sep 2",  what: "ODY stops selling",                        who: "DB", deleg: "Only him" },
      { d: "Aug 31", what: "Dev agency terminated, Victor direct",     who: "DB", deleg: "Only him" },
      { d: "Aug 28", what: "Tech stack cuts approved",                 who: "DB", deleg: "Rule-able" },
      { d: "Aug 27", what: "Creator programme wound down",             who: "DB", deleg: "Only him" },
      { d: "Aug 26", what: "Ingredient purchase approved",             who: "DB", deleg: "Someone else could" },
      { d: "Aug 25", what: "Build plan approved, Gate 2",              who: "DB", deleg: "Only him" },
      { d: "Aug 22", what: "3PL invoice queried",                      who: "DB", deleg: "Someone else could" },
    ],
    processes: { written: 0, target: 20 },
  },

  // ---------------------------------------------------------------- data health
  dataHealth: {
    note: "Which numbers on this dashboard you can act on today, and which are still being built. A dashboard that shows a confident wrong number is worse than one that says it does not know yet.",
    sources: [
      { name: "Mercury",        status: "live",    detail: "Operating account and bucket structure. Feed connected" },
      { name: "BlueBanc",       status: "live",    detail: "Settlement account. Feed connected" },
      { name: "Xero",           status: "live",    detail: "78 accounts, all coded. Cut-over 14 September" },
      { name: "Chase",          status: "partial", detail: "Card feed not connected yet" },
      { name: "Sticky.io",      status: "live",    detail: "Orders, subscriptions, cascade config" },
      { name: "Everflow",       status: "live",    detail: "Access received 24 August" },
      { name: "Packiyo",        status: "blocked", detail: "Access outstanding. Blocks inventory" },
      { name: "Klaviyo",        status: "blocked", detail: "Access outstanding. Blocks email numbers" },
      { name: "Test Partner",   status: "blocked", detail: "History outstanding. Blocks attribution" },
      { name: "Processors",     status: "partial", detail: "Two of three portals self-serve" },
      { name: "Kitchen ledger", status: "waiting", detail: "Built and issued. Waiting on the first run" },
      { name: "PostHog",        status: "partial", detail: "Being installed, replacing Clarity" },
    ],
    reliability: [
      { area: "Cash position",     level: "high",   note: "Reconstructed from bank and card statements" },
      { area: "Fixed costs",       level: "high",   note: "Verified line by line against transactions" },
      { area: "Debt and schedule", level: "high",   note: "From the signed schedule" },
      { area: "Revenue by rail",   level: "medium", note: "Two of three portals self-serve" },
      { area: "Approval rates",    level: "medium", note: "From gateway reports, not yet re-measured" },
      { area: "Margin per unit",   level: "low",    note: "$10 placeholder until the kitchen ledger runs" },
      { area: "Channel revenue",   level: "none",   note: "Attribution broken since April" },
      { area: "Lifetime value",    level: "none",   note: "Needs attribution first" },
      { area: "Inventory cover",   level: "low",    note: "Needs warehouse access and the velocity model" },
    ],
  },
};
