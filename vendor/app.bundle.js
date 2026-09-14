(function(){

/* ==== data.jsx ==== */
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
    phase: "Phase 3 Build"
  },
  // ---------------------------------------------------------------- decisions
  decisions: [{
    id: "d1",
    level: "urgent",
    title: "Mercury bucket rules need your sign-off before they go live",
    body: "The percentages you read out on the call totalled 80. The ones you calculated with total 100. We need the Q4 set confirmed in writing before it gets wired, because once it is a rule it moves money without asking.",
    meta: "Blocks the waterfall going live"
  }, {
    id: "d2",
    level: "urgent",
    title: "The $20K card draw takes your headroom to $3,619",
    body: "You paid the card from $44,724 down to $23,081 in four weeks. Drawing $20,000 for the Q4 plan puts available credit back near where it was in August, when the low was $376.",
    meta: "Decide before the ad team turns on"
  }, {
    id: "d3",
    level: "action",
    title: "Three logins still open. They block three of seven data sources",
    body: "Klaviyo, Packiyo and the Test Partner account history. Everflow already came through and it unblocked two workstreams at once.",
    meta: "Blocks the reporting layer"
  }, {
    id: "d4",
    level: "opportunity",
    title: "First-order cascade is a settings change worth more than anything else here",
    body: "Rebills already retry on a second processor. First orders do not. Approval at 94.75% against a 98% target is about $18,000 a year, and this is the single biggest revenue item in the engagement.",
    meta: "Sticky config, not a build"
  }, {
    id: "d5",
    level: "action",
    title: "Kitchen ledger has to start on the next run",
    body: "Cost per unit is still a $10 placeholder. Three runs a product before it means anything, and the next run is three to four weeks out.",
    meta: "Gates margin per unit"
  }],
  // ---------------------------------------------------------------- headline
  headline: [{
    key: "cash",
    label: "Cash available",
    value: "$40,347",
    sub: "Against a $22,500 floor",
    delta: -37.2,
    deltaLabel: "vs Aug 22",
    tone: "warn",
    trust: "good"
  }, {
    key: "result",
    label: "Monthly result",
    value: "+$15,197",
    sub: "On the same revenue",
    delta: 3826,
    deltaLabel: "vs July",
    tone: "good",
    trust: "good"
  }, {
    key: "fixed",
    label: "Fixed costs",
    value: "$14,050",
    sub: "From $28,860 in July",
    delta: -51.3,
    deltaLabel: "cut",
    tone: "good",
    trust: "good"
  }, {
    key: "debt",
    label: "Total owed",
    value: "$175,000",
    sub: "Next payment $9,481 Oct 1",
    delta: -15.9,
    deltaLabel: "in 30 days",
    tone: "good",
    trust: "good"
  }, {
    key: "approval",
    label: "Approval rate",
    value: "94.75%",
    sub: "Target 98%",
    delta: 0,
    deltaLabel: "flat",
    tone: "warn",
    trust: "good"
  }, {
    key: "cover",
    label: "SKUs at risk",
    value: "4",
    sub: "2 critical · 2 warning",
    delta: 0,
    deltaLabel: "",
    tone: "bad",
    trust: "mock"
  }],
  // ---------------------------------------------------------------- cash
  cash: {
    accounts: [{
      name: "BlueBanc ··4830",
      role: "Settlement. Rails land here, sweeps to Mercury",
      balance: 34074,
      tone: "info"
    }, {
      name: "Mercury Operating ··7698",
      role: "Operating account",
      balance: 6273,
      tone: "accent"
    }, {
      name: "Mercury, eight sub-accounts",
      role: "Bucket structure, not yet funded",
      balance: 0,
      tone: "mute"
    }],
    total: 40347,
    floor: 22500,
    floorBasis: "1.25 months of operating cost",
    floorNote: "Set on $18,000 of OPEX. September fixed plus the two new hires is $16,050, which would put the floor at $20,063.",
    card: {
      owed: 23081,
      limit: 46700,
      available: 23619,
      prevOwed: 44724,
      prevAvailable: 500
    },
    trail: [{
      m: "Mar",
      bluebanc: 3000,
      mercury: 95621
    }, {
      m: "Apr",
      bluebanc: 12400,
      mercury: 51917
    }, {
      m: "May",
      bluebanc: 38900,
      mercury: 26604
    }, {
      m: "Jun",
      bluebanc: 76042,
      mercury: 6914
    }, {
      m: "Jul",
      bluebanc: 55265,
      mercury: 4697
    }, {
      m: "Aug",
      bluebanc: 50372,
      mercury: 6358
    }, {
      m: "Sep",
      bluebanc: 34074,
      mercury: 6273
    }],
    buckets: [{
      name: "Operating",
      pct: null,
      code: "1000",
      balance: 22500,
      target: 22500,
      note: "Holds the floor, spills to Sweep",
      tone: "accent"
    }, {
      name: "Marketing",
      pct: 35,
      code: "1040",
      balance: 0,
      target: 13125,
      note: "Largest share of the sweep",
      tone: "info"
    }, {
      name: "Inventory",
      pct: 25,
      code: "1030",
      balance: 0,
      target: 9375,
      note: "Sized off velocity once it lands",
      tone: "good"
    }, {
      name: "Taxes",
      pct: 20,
      code: "1050",
      balance: 0,
      target: 7500,
      note: "Placeholder until a CPA lands",
      tone: "warn"
    }, {
      name: "Owner profit",
      pct: 15,
      code: "1070",
      balance: 0,
      target: 5625,
      note: "Distribution, separate from draw",
      tone: "accent"
    }, {
      name: "Reserve",
      pct: 5,
      code: "1020",
      balance: 0,
      target: 1875,
      note: "Caps at $108,000",
      tone: "mute"
    }],
    debt: [{
      label: "Buyout note, remaining",
      value: 148444,
      note: "8 of 9 payments left, through May 2027"
    }, {
      label: "Chase card",
      value: 23081,
      note: "Interest bearing. Paid in full each cycle"
    }, {
      label: "Second obligation",
      value: 80000,
      note: "Undated, no written terms. Modelled as real"
    }],
    schedule: [{
      date: "Sep 1, 2026",
      amount: 11555.56,
      status: "paid",
      note: "Largest. Carries grace interest"
    }, {
      date: "Oct 1, 2026",
      amount: 9481.48,
      status: "next",
      note: ""
    }, {
      date: "Nov 1, 2026",
      amount: 9407.41,
      status: "planned",
      note: ""
    }, {
      date: "Dec 1, 2026",
      amount: 9333.34,
      status: "planned",
      note: "Falls inside Stress Test 2 window"
    }, {
      date: "Jan 1, 2027",
      amount: 9259.26,
      status: "planned",
      note: "Falls inside Stress Test 2 window"
    }, {
      date: "Feb 1, 2027",
      amount: 9185.19,
      status: "planned",
      note: ""
    }, {
      date: "Mar 1, 2027",
      amount: 9111.11,
      status: "planned",
      note: ""
    }, {
      date: "Apr 1, 2027",
      amount: 9037.04,
      status: "planned",
      note: ""
    }, {
      date: "May 1, 2027",
      amount: 8962.94,
      status: "planned",
      note: "Final"
    }],
    outflows30: [{
      band: "Next 7 days",
      amount: 6420,
      detail: "Kitchen rent $2,200 · software $1,906 · support $1,050 · misc"
    }, {
      band: "8 to 14 days",
      amount: 3100,
      detail: "3PL invoice · ingredient purchase"
    }, {
      band: "15 to 30 days",
      amount: 9481,
      detail: "Buyout payment Oct 1"
    }]
  },
  // ---------------------------------------------------------------- four quarter
  fourQuarter: {
    note: "The whole P&L in four lines. Benchmarks come from the CTC model. Your OPEX is double where it should sit.",
    rows: [{
      line: "Cost of delivery",
      value: 5760,
      pct: 12.3,
      bench: "~40%",
      tone: "good",
      detail: "COGS, fulfilment, processing"
    }, {
      line: "Marketing",
      value: 0,
      pct: 0.0,
      bench: "25-30%",
      tone: "warn",
      detail: "Ad spend currently paused"
    }, {
      line: "OPEX",
      value: 14050,
      pct: 30.0,
      bench: "~15%",
      tone: "bad",
      detail: "Fixed operating cost"
    }, {
      line: "Profit",
      value: 15197,
      pct: 32.5,
      bench: "15-20%",
      tone: "good",
      detail: "Before debt service"
    }],
    revenue: 46814
  },
  // ---------------------------------------------------------------- revenue
  revenue: {
    monthly: [{
      m: "Nov",
      v: 64267
    }, {
      m: "Dec",
      v: 58900
    }, {
      m: "Jan",
      v: 55400
    }, {
      m: "Feb",
      v: 51200
    }, {
      m: "Mar",
      v: 49800
    }, {
      m: "Apr",
      v: 47300
    }, {
      m: "May",
      v: 45100
    }, {
      m: "Jun",
      v: 43900
    }, {
      m: "Jul",
      v: 42112
    }],
    rails: [{
      name: "Deposyt",
      gross: 19840,
      fees: 874,
      reserve: 0,
      net: 18966,
      pct: 4.41,
      approval: 96.2,
      decline: 3.8,
      chargeback: 0.31,
      cap: 60000,
      tone: "good",
      note: "First in the cascade. No reserve"
    }, {
      name: "ExpiTrans",
      gross: 14320,
      fees: 648,
      reserve: 0,
      net: 13672,
      pct: 4.53,
      approval: 94.1,
      decline: 5.9,
      chargeback: 0.44,
      cap: 40000,
      tone: "good",
      note: "Measured at 4.48% and 4.54% all in"
    }, {
      name: "Kurv / EMS",
      gross: 7952,
      fees: 366,
      reserve: 795,
      net: 6791,
      pct: 4.60,
      approval: 91.8,
      decline: 8.2,
      chargeback: 0.67,
      cap: 25000,
      tone: "warn",
      note: "10% reserve to a $75,000 cap. Volume capped at $25,000 per 30 days"
    }, {
      name: "Retired rail",
      gross: 0,
      fees: 0,
      reserve: 500,
      net: 0,
      pct: 0,
      approval: 0,
      decline: 0,
      chargeback: 0,
      cap: 0,
      tone: "mute",
      note: "Wound down. About $500 of residual outstanding"
    }],
    processingNote: "Processing never existed in the ledger. It runs about 4.5% all in against a 1.5% discount rate, and the gap is interchange passed straight through. That is roughly $33,000 a year that was invisible.",
    channels: [{
      name: "Organic / direct",
      rev: 18420,
      share: 43.7,
      trust: "good"
    }, {
      name: "Paid social",
      rev: 0,
      share: 0,
      trust: "good",
      note: "Spend paused"
    }, {
      name: "Email",
      rev: 6890,
      share: 16.4,
      trust: "blocked"
    }, {
      name: "Creators",
      rev: 400,
      share: 0.9,
      trust: "blocked",
      note: "Programme wound down"
    }, {
      name: "Wholesale",
      rev: 4120,
      share: 9.8,
      trust: "mock"
    }, {
      name: "Unattributed",
      rev: 12282,
      share: 29.2,
      trust: "blocked",
      note: "Landing on the internal test account since April"
    }],
    shipments: {
      total: 348,
      onPlatform: 223,
      invisible: 125,
      invisiblePct: 35.9
    }
  },
  // ---------------------------------------------------------------- margin
  margin: {
    contributionNote: "Net sales minus product cost minus variable expense minus ad spend. The number the business should orbit daily.",
    contribution: [{
      m: "Mar",
      v: 21400
    }, {
      m: "Apr",
      v: 19800
    }, {
      m: "May",
      v: 17900
    }, {
      m: "Jun",
      v: 16200
    }, {
      m: "Jul",
      v: 14840
    }, {
      m: "Aug",
      v: 28600
    }, {
      m: "Sep",
      v: 31200
    }],
    offers: [{
      sku: "Dubai Chocolate",
      cat: "Chocolate",
      price: 69,
      cost: 6.72,
      costBasis: "rebuilt",
      margin: 90.3,
      share: 21.4,
      units: 142
    }, {
      sku: "Sea Salt Chocolate",
      cat: "Chocolate",
      price: 69,
      cost: 6.26,
      costBasis: "rebuilt",
      margin: 90.9,
      share: 15.8,
      units: 105
    }, {
      sku: "Matcha Chocolate",
      cat: "Chocolate",
      price: 69,
      cost: 7.25,
      costBasis: "rebuilt",
      margin: 89.5,
      share: 12.1,
      units: 80
    }, {
      sku: "Mint Chocolate",
      cat: "Chocolate",
      price: 69,
      cost: 6.91,
      costBasis: "rebuilt",
      margin: 90.0,
      share: 9.4,
      units: 62
    }, {
      sku: "Strawberry Mango Gummies",
      cat: "Gummies",
      price: 69,
      cost: 10.00,
      costBasis: "placeholder",
      margin: null,
      share: 14.2,
      units: 94
    }, {
      sku: "Blue Raspberry Gummies",
      cat: "Gummies",
      price: 69,
      cost: 10.00,
      costBasis: "placeholder",
      margin: null,
      share: 11.6,
      units: 77
    }, {
      sku: "Micro Caps",
      cat: "Capsules",
      price: null,
      cost: 10.00,
      costBasis: "placeholder",
      margin: null,
      share: 0,
      units: 0,
      note: "Not yet produced"
    }, {
      sku: "M&M-style",
      cat: "Other",
      price: null,
      cost: 10.00,
      costBasis: "placeholder",
      margin: null,
      share: 0,
      units: 0,
      note: "Costed from the client workbook only"
    }],
    kitchen: {
      note: "Cost per unit is a $10 placeholder somebody typed in. Three runs a product before a real number exists.",
      products: 10,
      runsLogged: 0,
      runsNeeded: 30,
      nextRun: "Late September",
      rates: [{
        label: "Labour",
        value: "$25 / hr"
      }, {
        label: "Kitchen rent",
        value: "$2,200 / mo"
      }, {
        label: "Active ingredient",
        value: "$300 / lb"
      }, {
        label: "Delivery",
        value: "$150 / run"
      }]
    }
  },
  // ---------------------------------------------------------------- subscribers
  subs: {
    kpi: [{
      label: "Active subscribers",
      value: "1,842",
      sub: "End of period",
      tone: "neutral",
      trust: "mock"
    }, {
      label: "Rebill rate",
      value: "27.3%",
      sub: "Fell from 100%",
      tone: "bad",
      trust: "good"
    }, {
      label: "Attach rate",
      value: "13.4%",
      sub: "Share of orders",
      tone: "warn",
      trust: "good"
    }, {
      label: "Cycle-3 retention",
      value: "10.98%",
      sub: "Nine in ten gone",
      tone: "bad",
      trust: "good"
    }, {
      label: "Retry recovery",
      value: "0 / 10",
      sub: "Retries two and three",
      tone: "bad",
      trust: "good"
    }, {
      label: "Card updater",
      value: "Off",
      sub: "Expiring cards fail silently",
      tone: "bad",
      trust: "good"
    }],
    rebillTrend: [{
      m: "Feb",
      rate: 100
    }, {
      m: "Mar",
      rate: 96
    }, {
      m: "Apr",
      rate: 71
    }, {
      m: "May",
      rate: 48
    }, {
      m: "Jun",
      rate: 33
    }, {
      m: "Jul",
      rate: 27.3
    }, {
      m: "Aug",
      rate: 61
    }, {
      m: "Sep",
      rate: 74
    }],
    rebillNote: "Rebill fell from 100% to 27.3% when subscriber payment credentials broke. Credentials are restored and the line is recovering. The retry and dunning rebuild is what closes the rest.",
    cohorts: [{
      c: "Mar 2026",
      n: 318,
      m1: 100,
      m3: 21,
      m6: 12,
      m12: null
    }, {
      c: "Apr 2026",
      n: 287,
      m1: 100,
      m3: 18,
      m6: 11,
      m12: null
    }, {
      c: "May 2026",
      n: 341,
      m1: 100,
      m3: 14,
      m6: null,
      m12: null
    }, {
      c: "Jun 2026",
      n: 296,
      m1: 100,
      m3: 11,
      m6: null,
      m12: null
    }, {
      c: "Jul 2026",
      n: 264,
      m1: 100,
      m3: null,
      m6: null,
      m12: null
    }, {
      c: "Aug 2026",
      n: 302,
      m1: 100,
      m3: null,
      m6: null,
      m12: null
    }],
    ltv: {
      blocked: true,
      note: "Lifetime value, revenue per unit and customer lifespan all need working attribution. Every channel number since April has been credited to an internal test account, so any figure here today would be fiction. These populate once the attribution rebuild lands in Phase 3.",
      fields: ["ACLV, lifetime value", "ARPU, revenue per unit", "ACL, customer lifespan", "Cost per customer", "LTV to CAC by channel"]
    },
    funnel: [{
      stage: "Order placed",
      n: 223
    }, {
      stage: "Subscription attached",
      n: 30
    }, {
      stage: "Survived cycle 1",
      n: 30
    }, {
      stage: "Survived cycle 2",
      n: 14
    }, {
      stage: "Survived cycle 3",
      n: 3
    }]
  },
  // ---------------------------------------------------------------- inventory
  inventory: {
    note: "Velocity is being modelled now from warehouse units on hand and line-level transactions. Until it lands, days of cover is an estimate and the inventory bucket is sized on a guess.",
    skus: [{
      sku: "Dubai Chocolate",
      cat: "Chocolate",
      onHand: 980,
      velocity: 117,
      cover: 8,
      lead: 21,
      status: "critical",
      incoming: true,
      po: 61000
    }, {
      sku: "Micro Caps",
      cat: "Capsules",
      onHand: 0,
      velocity: 0,
      cover: 0,
      lead: 30,
      status: "critical",
      incoming: false,
      po: 0,
      note: "Never produced"
    }, {
      sku: "Strawberry Mango Gummies",
      cat: "Gummies",
      onHand: 2210,
      velocity: 104,
      cover: 21,
      lead: 24,
      status: "warning",
      incoming: true,
      po: 142000
    }, {
      sku: "Sea Salt Chocolate",
      cat: "Chocolate",
      onHand: 3100,
      velocity: 92,
      cover: 34,
      lead: 18,
      status: "warning",
      incoming: true,
      po: 53000
    }, {
      sku: "Mint Chocolate",
      cat: "Chocolate",
      onHand: 5640,
      velocity: 83,
      cover: 68,
      lead: 18,
      status: "healthy",
      incoming: false,
      po: 0
    }, {
      sku: "Toffee Chocolate",
      cat: "Chocolate",
      onHand: 3790,
      velocity: 57,
      cover: 66,
      lead: 18,
      status: "healthy",
      incoming: false,
      po: 0
    }, {
      sku: "Espresso Chocolate",
      cat: "Chocolate",
      onHand: 4680,
      velocity: 46,
      cover: 102,
      lead: 18,
      status: "healthy",
      incoming: false,
      po: 0
    }, {
      sku: "Blue Raspberry Gummies",
      cat: "Gummies",
      onHand: 4920,
      velocity: 63,
      cover: 78,
      lead: 24,
      status: "healthy",
      incoming: false,
      po: 0
    }, {
      sku: "Matcha Chocolate",
      cat: "Chocolate",
      onHand: 8100,
      velocity: 39,
      cover: 208,
      lead: 18,
      status: "overstocked",
      incoming: false,
      po: 0
    }],
    affordability: {
      freeCash: 17847,
      totalPO: 256000,
      note: "Free cash is cash on hand minus the operating floor. Reorders sequence from most urgent, or draw on the card for the gap."
    }
  },
  // ---------------------------------------------------------------- team
  team: {
    note: "Zero roles carry a number today. This is the target state. Every seat gets one measure, visible to the person being measured.",
    roles: [{
      name: "DB",
      role: "Founder",
      metric: "Decisions routed through him, per week",
      now: null,
      target: "Falling",
      status: "not-set",
      owner: true
    }, {
      name: "Victor",
      role: "Developer",
      metric: "Fix items closed and verified",
      now: "11 / 21",
      target: "21 / 21",
      status: "on-track"
    }, {
      name: "Rebekka",
      role: "Content lead",
      metric: "Being repointed",
      now: null,
      target: "TBD",
      status: "not-set"
    }, {
      name: "Jose",
      role: "Kitchen and production",
      metric: "Runs logged with all three fields",
      now: "0 / 30",
      target: "30",
      status: "at-risk"
    }, {
      name: "Sales rep",
      role: "Clinic channel",
      metric: "Clinic accounts opened",
      now: "0",
      target: "TBD",
      status: "at-risk"
    }, {
      name: "Support",
      role: "Customer support",
      metric: "First response time",
      now: null,
      target: "TBD",
      status: "not-set"
    }, {
      name: "Admin",
      role: "Being hired",
      metric: "Invoices raised on time",
      now: null,
      target: "TBD",
      status: "not-set"
    }],
    decisions: [{
      d: "Sep 7",
      what: "Q4 bucket percentages set",
      who: "DB",
      deleg: "Only him"
    }, {
      d: "Sep 5",
      what: "Buyout payment funded",
      who: "DB",
      deleg: "Rule-able"
    }, {
      d: "Sep 3",
      what: "Attribution window set at 30 days",
      who: "DB",
      deleg: "Only him"
    }, {
      d: "Sep 2",
      what: "ODY stops selling",
      who: "DB",
      deleg: "Only him"
    }, {
      d: "Aug 31",
      what: "Dev agency terminated, Victor direct",
      who: "DB",
      deleg: "Only him"
    }, {
      d: "Aug 28",
      what: "Tech stack cuts approved",
      who: "DB",
      deleg: "Rule-able"
    }, {
      d: "Aug 27",
      what: "Creator programme wound down",
      who: "DB",
      deleg: "Only him"
    }, {
      d: "Aug 26",
      what: "Ingredient purchase approved",
      who: "DB",
      deleg: "Someone else could"
    }, {
      d: "Aug 25",
      what: "Build plan approved, Gate 2",
      who: "DB",
      deleg: "Only him"
    }, {
      d: "Aug 22",
      what: "3PL invoice queried",
      who: "DB",
      deleg: "Someone else could"
    }],
    processes: {
      written: 0,
      target: 20
    }
  },
  // ---------------------------------------------------------------- data health
  dataHealth: {
    note: "Which numbers on this dashboard you can act on today, and which are still being built. A dashboard that shows a confident wrong number is worse than one that says it does not know yet.",
    sources: [{
      name: "Mercury",
      status: "live",
      detail: "Operating account and bucket structure. Feed connected"
    }, {
      name: "BlueBanc",
      status: "live",
      detail: "Settlement account. Feed connected"
    }, {
      name: "Xero",
      status: "live",
      detail: "78 accounts, all coded. Cut-over 14 September"
    }, {
      name: "Chase",
      status: "partial",
      detail: "Card feed not connected yet"
    }, {
      name: "Sticky.io",
      status: "live",
      detail: "Orders, subscriptions, cascade config"
    }, {
      name: "Everflow",
      status: "live",
      detail: "Access received 24 August"
    }, {
      name: "Packiyo",
      status: "blocked",
      detail: "Access outstanding. Blocks inventory"
    }, {
      name: "Klaviyo",
      status: "blocked",
      detail: "Access outstanding. Blocks email numbers"
    }, {
      name: "Test Partner",
      status: "blocked",
      detail: "History outstanding. Blocks attribution"
    }, {
      name: "Processors",
      status: "partial",
      detail: "Two of three portals self-serve"
    }, {
      name: "Kitchen ledger",
      status: "waiting",
      detail: "Built and issued. Waiting on the first run"
    }, {
      name: "PostHog",
      status: "partial",
      detail: "Being installed, replacing Clarity"
    }],
    reliability: [{
      area: "Cash position",
      level: "high",
      note: "Reconstructed from bank and card statements"
    }, {
      area: "Fixed costs",
      level: "high",
      note: "Verified line by line against transactions"
    }, {
      area: "Debt and schedule",
      level: "high",
      note: "From the signed schedule"
    }, {
      area: "Revenue by rail",
      level: "medium",
      note: "Two of three portals self-serve"
    }, {
      area: "Approval rates",
      level: "medium",
      note: "From gateway reports, not yet re-measured"
    }, {
      area: "Margin per unit",
      level: "low",
      note: "$10 placeholder until the kitchen ledger runs"
    }, {
      area: "Channel revenue",
      level: "none",
      note: "Attribution broken since April"
    }, {
      area: "Lifetime value",
      level: "none",
      note: "Needs attribution first"
    }, {
      area: "Inventory cover",
      level: "low",
      note: "Needs warehouse access and the velocity model"
    }]
  }
};

/* ==== ui.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ui.jsx — primitives and charts. No external chart library, everything is SVG
// so the payload runs offline and pushes anywhere.

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* ------------------------------------------------------------ formatting */
const fmt = {
  usd: (n, d = 0) => n === null || n === undefined ? "unknown" : "$" + Number(n).toLocaleString("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  }),
  usdK: n => {
    if (n === null || n === undefined) return "unknown";
    const a = Math.abs(n);
    if (a >= 1000000) return "$" + (n / 1000000).toFixed(2) + "M";
    if (a >= 1000) return "$" + Math.round(n / 1000) + "K";
    return "$" + Math.round(n);
  },
  pct: (n, d = 1) => n === null || n === undefined ? "unknown" : Number(n).toFixed(d) + "%",
  num: n => n === null || n === undefined ? "unknown" : Number(n).toLocaleString("en-US")
};
const toneVar = t => ({
  good: "var(--good)",
  warn: "var(--warn)",
  bad: "var(--bad)",
  info: "var(--info)",
  accent: "var(--accent)",
  mute: "var(--ink-mute)",
  neutral: "var(--ink)"
})[t] || "var(--ink)";
const toneTint = t => ({
  good: "var(--good-tint)",
  warn: "var(--warn-tint)",
  bad: "var(--bad-tint)",
  info: "var(--info-tint)",
  accent: "var(--accent-tint)"
})[t] || "var(--bg-3)";

/* ------------------------------------------------------------ Card */
function Card({
  children,
  style,
  pad = 24,
  hover = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "card" + (hover ? " card-hover" : ""),
    style: {
      padding: pad,
      ...style
    }
  }, rest), children);
}
function SectionHead({
  title,
  sub,
  right,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
      marginBottom: 18,
      maxWidth: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: "1 1 260px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 19.5,
      marginBottom: sub ? 7 : 0
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-soft)",
      maxWidth: 760,
      lineHeight: 1.55
    }
  }, sub)), right);
}

/* ------------------------------------------------------------ Badge */
function Badge({
  children,
  tone = "mute",
  solid = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: solid ? toneVar(tone) : toneTint(tone),
      color: solid ? "#fff" : toneVar(tone),
      border: solid ? "none" : `1px solid ${toneVar(tone)}33`,
      borderRadius: 999,
      padding: "3px 9px",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}

/* ------------------------------------------------------------ Trust pill */
const TRUST = {
  good: {
    label: "Verified",
    tone: "good"
  },
  mock: {
    label: "Mock shape",
    tone: "info"
  },
  blocked: {
    label: "Needs attribution",
    tone: "bad"
  },
  waiting: {
    label: "Waiting on data",
    tone: "warn"
  }
};
function Trust({
  level,
  style
}) {
  const t = TRUST[level];
  if (!t) return null;
  return /*#__PURE__*/React.createElement(Badge, {
    tone: t.tone,
    style: style
  }, t.label);
}

/* ------------------------------------------------------------ Stat tile */
function Stat({
  label,
  value,
  sub,
  delta,
  deltaLabel,
  tone = "neutral",
  trust,
  tip,
  onClick
}) {
  const up = delta > 0;
  return /*#__PURE__*/React.createElement(Card, {
    hover: !!onClick,
    pad: 20,
    onClick: onClick,
    style: {
      cursor: onClick ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow tip",
    style: {
      position: "relative"
    }
  }, label, tip && /*#__PURE__*/React.createElement("span", {
    className: "tip-body"
  }, tip)), trust && trust !== "good" && /*#__PURE__*/React.createElement(Trust, {
    level: trust
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 27,
      fontWeight: 600,
      letterSpacing: "-0.025em",
      color: toneVar(tone),
      lineHeight: 1.05
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, sub), delta !== undefined && delta !== 0 && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: up ? "var(--good)" : "var(--bad)"
    }
  }, up ? "▲" : "▼", " ", Math.abs(delta) > 999 ? "" : Math.abs(delta).toFixed(1) + "% ", deltaLabel), delta === 0 && deltaLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, deltaLabel)));
}

/* ------------------------------------------------------------ Segmented */
function Seg({
  options,
  value,
  onChange,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg" + (className ? " " + className : ""),
    style: style
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.v;
    const l = typeof o === "string" ? o : o.l;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      "data-on": value === v,
      onClick: () => onChange(v)
    }, l);
  }));
}

/* ------------------------------------------------------------ Progress */
function Bar({
  pct,
  tone = "accent",
  height = 6,
  track = true,
  style
}) {
  const p = Math.max(0, Math.min(100, pct || 0));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height,
      borderRadius: 99,
      background: track ? "var(--bg-4)" : "transparent",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p + "%",
      height: "100%",
      borderRadius: 99,
      background: toneVar(tone),
      transition: "width 700ms cubic-bezier(0.22,0.68,0,1)"
    }
  }));
}

/* ------------------------------------------------------------ Bar chart */
function BarChart({
  data,
  height = 200,
  tone = "accent",
  valueFmt = fmt.usdK,
  showAxis = true,
  horizontal = false
}) {
  const max = Math.max(...data.map(d => Math.abs(d.v))) || 1;
  if (horizontal) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "130px 1fr 74px",
        gap: 12,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--ink-soft)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, d.m || d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--bg-4)",
        borderRadius: 4,
        height: 20,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: Math.abs(d.v) / max * 100 + "%",
        height: "100%",
        background: toneVar(d.tone || tone),
        borderRadius: 4,
        transition: "width 700ms cubic-bezier(0.22,0.68,0,1)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11.5,
        textAlign: "right",
        color: "var(--ink)"
      }
    }, valueFmt(d.v)))));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 6,
      height,
      borderBottom: "1px solid var(--rule)",
      paddingBottom: 0
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tip",
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: Math.abs(d.v) / max * 100 + "%",
      background: toneVar(d.tone || tone),
      borderRadius: "4px 4px 0 0",
      minHeight: 3,
      transition: "height 700ms cubic-bezier(0.22,0.68,0,1)",
      opacity: d.dim ? 0.4 : 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tip-body"
  }, d.m || d.label, ": ", valueFmt(d.v))))), showAxis && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 7
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, d.m || d.label))));
}

/* ------------------------------------------------------------ Line chart */
function LineChart({
  data,
  height = 190,
  tone = "good",
  valueFmt = v => v,
  target,
  targetLabel,
  yMin,
  yMax
}) {
  const vals = data.map(d => d.v !== undefined ? d.v : d.rate);
  const lo = yMin !== undefined ? yMin : Math.min(...vals, target !== undefined ? target : Infinity) * 0.92;
  const hi = yMax !== undefined ? yMax : Math.max(...vals, target !== undefined ? target : -Infinity) * 1.06;
  const W = 100,
    H = 100;
  const x = i => i / (data.length - 1) * W;
  const y = v => H - (v - lo) / (hi - lo) * H;
  const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const area = `0,${H} ${pts} ${W},${H}`;
  const uid = useMemo(() => "g" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: uid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: toneVar(tone),
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: toneVar(tone),
    stopOpacity: "0"
  }))), [0, 25, 50, 75, 100].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    y1: g,
    x2: W,
    y2: g,
    stroke: "var(--rule-soft)",
    strokeWidth: "0.4",
    vectorEffect: "non-scaling-stroke"
  })), target !== undefined && /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: y(target),
    x2: W,
    y2: y(target),
    stroke: "var(--warn)",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: `url(#${uid})`
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: toneVar(tone),
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }), vals.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: "2.6",
    fill: "var(--bg-2)",
    stroke: toneVar(tone),
    strokeWidth: "1.8",
    vectorEffect: "non-scaling-stroke"
  }))), target !== undefined && targetLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      top: `${y(target)}%`,
      transform: "translateY(-130%)",
      fontSize: 10,
      color: "var(--warn)",
      fontWeight: 600
    }
  }, targetLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 8
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, d.m))));
}

/* ------------------------------------------------------------ Stacked bar */
function StackedBar({
  segments,
  height = 34,
  showLabels = true
}) {
  const total = segments.reduce((s, x) => s + x.v, 0) || 1;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height,
      borderRadius: 7,
      overflow: "hidden",
      background: "var(--bg-4)"
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tip",
    style: {
      width: s.v / total * 100 + "%",
      background: toneVar(s.tone),
      position: "relative",
      transition: "width 700ms cubic-bezier(0.22,0.68,0,1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tip-body"
  }, s.label, ": ", fmt.usdK(s.v), " \xB7 ", (s.v / total * 100).toFixed(1), "%")))), showLabels && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: 11
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: toneVar(s.tone)
    }
  }), s.label, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--ink)"
    }
  }, fmt.usdK(s.v))))));
}

/* ------------------------------------------------------------ Donut */
function Donut({
  value,
  max = 100,
  size = 120,
  stroke = 11,
  tone = "accent",
  label,
  sub
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(1, value / max));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--bg-4)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: toneVar(tone),
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: `${c * p} ${c}`,
    style: {
      transition: "stroke-dasharray 800ms cubic-bezier(0.22,0.68,0,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--display)",
      fontSize: size / 5.2,
      fontWeight: 600,
      letterSpacing: "-0.02em"
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)"
    }
  }, sub)));
}

/* ------------------------------------------------------------ Scatter */
function Scatter({
  points,
  height = 260,
  xLabel,
  yLabel,
  xFmt = fmt.usdK,
  yFmt = v => v
}) {
  const PAD = {
    l: 46,
    r: 16,
    t: 14,
    b: 34
  };
  const W = 620,
    H = height;
  const iw = W - PAD.l - PAD.r,
    ih = H - PAD.t - PAD.b;
  const xMax = Math.max(...points.map(p => p.x)) * 1.15 || 1;
  const yMax = Math.max(...points.map(p => p.y)) * 1.2 || 1;
  const px = v => PAD.l + v / xMax * iw;
  const py = v => PAD.t + ih - v / yMax * ih;
  const xT = [0, 0.25, 0.5, 0.75, 1].map(f => f * xMax);
  const yT = [0, 0.25, 0.5, 0.75, 1].map(f => f * yMax);
  const [hover, setHover] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, yT.map((v, i) => /*#__PURE__*/React.createElement("g", {
    key: "y" + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD.l,
    y1: py(v),
    x2: W - PAD.r,
    y2: py(v),
    stroke: "var(--rule-soft)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: PAD.l - 8,
    y: py(v) + 3.5,
    textAnchor: "end",
    fontSize: "10",
    fill: "var(--ink-mute)"
  }, Math.round(v)))), xT.map((v, i) => /*#__PURE__*/React.createElement("g", {
    key: "x" + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: px(v),
    y1: PAD.t,
    x2: px(v),
    y2: PAD.t + ih,
    stroke: "var(--rule-soft)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: px(v),
    y: H - PAD.b + 16,
    textAnchor: "middle",
    fontSize: "10",
    fill: "var(--ink-mute)"
  }, xFmt(Math.round(v))))), points.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: px(p.x),
    cy: py(p.y),
    r: (p.r || 16) / 2,
    fill: toneVar(p.tone),
    fillOpacity: hover === i ? 1 : 0.85,
    stroke: "var(--bg-2)",
    strokeWidth: "2",
    style: {
      cursor: "pointer",
      transition: "fill-opacity 160ms ease"
    },
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null)
  })), hover !== null && /*#__PURE__*/React.createElement("g", {
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: Math.min(px(points[hover].x) + 10, W - 176),
    y: py(points[hover].y) - 42,
    width: "166",
    height: "46",
    rx: "7",
    fill: "var(--bg-4)",
    stroke: "var(--rule)"
  }), /*#__PURE__*/React.createElement("text", {
    x: Math.min(px(points[hover].x) + 20, W - 166),
    y: py(points[hover].y) - 25,
    fontSize: "11.5",
    fontWeight: "600",
    fill: "var(--ink)"
  }, points[hover].label), /*#__PURE__*/React.createElement("text", {
    x: Math.min(px(points[hover].x) + 20, W - 166),
    y: py(points[hover].y) - 10,
    fontSize: "10.5",
    fill: "var(--ink-soft)"
  }, xFmt(points[hover].x), " \xB7 ", yFmt(points[hover].y)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", null, xLabel), /*#__PURE__*/React.createElement("span", null, yLabel)));
}

/* ------------------------------------------------------------ Empty / blocked panel */
function Blocked({
  title,
  note,
  fields
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      borderStyle: "dashed",
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--bad-tint)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--bad)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16.5v.01",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.55,
      maxWidth: 660
    }
  }, note), fields && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7,
      marginTop: 13
    }
  }, fields.map(f => /*#__PURE__*/React.createElement(Badge, {
    key: f,
    tone: "mute"
  }, f))))));
}

/* ------------------------------------------------------------ Note strip */
function Note({
  children,
  tone = "info",
  icon = "i"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      background: toneTint(tone),
      border: `1px solid ${toneVar(tone)}26`,
      borderRadius: "var(--r-md)",
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      borderRadius: 999,
      background: toneVar(tone),
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.6
    }
  }, children));
}

/* ------------------------------------------------------------ Grid helper */
function Grid({
  cols = 4,
  gap = 20,
  children,
  style,
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-grid": name || String(cols),
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
      gap,
      ...style
    }
  }, children);
}

/* ==== pages-a.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-a.jsx — Overview, Cash & Money OS

/* ============================================================ OVERVIEW */
function PageOverview({
  go
}) {
  const [done, setDone] = useState({});
  const d = MYND;
  const doneCount = Object.values(done).filter(Boolean).length;
  const levelMap = {
    urgent: {
      tone: "bad",
      label: "Urgent"
    },
    action: {
      tone: "warn",
      label: "Action"
    },
    opportunity: {
      tone: "good",
      label: "Opportunity"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "This week's decisions",
    sub: "The things that actually need you. Everything else on this dashboard is there so these stay short.",
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: doneCount === d.decisions.length ? "good" : "mute"
    }, doneCount, " / ", d.decisions.length, " done")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
      marginBottom: 40
    }
  }, d.decisions.map(x => {
    const L = levelMap[x.level];
    const isDone = !!done[x.id];
    return /*#__PURE__*/React.createElement(Card, {
      key: x.id,
      pad: 0,
      hover: true,
      style: {
        borderLeft: `3px solid ${toneVar(L.tone)}`,
        opacity: isDone ? 0.5 : 1,
        transition: "opacity 260ms ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        padding: "15px 18px",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setDone(s => ({
        ...s,
        [x.id]: !s[x.id]
      })),
      style: {
        width: 19,
        height: 19,
        borderRadius: 999,
        flexShrink: 0,
        marginTop: 2,
        border: `1.5px solid ${isDone ? toneVar("good") : "var(--ink-mute)"}`,
        background: isDone ? toneVar("good") : "transparent",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        padding: 0,
        transition: "all 180ms ease"
      }
    }, isDone && /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "3.5"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        marginBottom: 5,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: L.tone,
      solid: true
    }, L.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        textDecoration: isDone ? "line-through" : "none"
      }
    }, x.title)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--ink-soft)",
        lineHeight: 1.55
      }
    }, x.body), x.meta && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: "var(--ink-mute)",
        marginTop: 6
      }
    }, x.meta))));
  })), /*#__PURE__*/React.createElement(SectionHead, {
    title: "The numbers",
    sub: "Six things worth knowing cold, at a glance."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 6,
    gap: 20,
    name: "4",
    style: {
      marginBottom: 40
    }
  }, d.headline.map(h => /*#__PURE__*/React.createElement(Stat, _extends({
    key: h.key
  }, h, {
    onClick: h.key === "cash" || h.key === "debt" ? () => go("cash") : h.key === "approval" ? () => go("revenue") : h.key === "cover" ? () => go("inventory") : h.key === "fixed" || h.key === "result" ? () => go("margin") : undefined
  })))), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    gap: 24,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Revenue, last nine months",
    sub: "Down a third since November with nobody watching. That's what the books not working looks like.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(BarChart, {
    data: MYND.revenue.monthly.map((r, i) => ({
      ...r,
      tone: i === MYND.revenue.monthly.length - 1 ? "accent" : "info"
    })),
    height: 168
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Where the money sits",
    sub: "Two banks on purpose. Mercury runs it, BlueBanc holds settlement.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, MYND.cash.accounts.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, a.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, fmt.usd(a.balance))), /*#__PURE__*/React.createElement(Bar, {
    pct: a.balance / MYND.cash.total * 100,
    tone: a.tone,
    height: 5
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, a.role))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--rule)",
      paddingTop: 11,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, fmt.usd(MYND.cash.total)))))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "The whole P&L in four lines",
    sub: "Cost of delivery, marketing, OPEX, profit. Benchmarks on the right are where a healthy DTC business sits."
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Line"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "% of revenue"), /*#__PURE__*/React.createElement("th", null, "Against benchmark"), /*#__PURE__*/React.createElement("th", null, "Benchmark"), /*#__PURE__*/React.createElement("th", null, "What's in it"))), /*#__PURE__*/React.createElement("tbody", null, MYND.fourQuarter.rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.line
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.line), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.value)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: toneVar(r.tone),
      fontWeight: 600
    }
  }, fmt.pct(r.pct)), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    pct: Math.min(r.pct * 2, 100),
    tone: r.tone,
    height: 5
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 12.5
    }
  }, r.bench), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12.5
    }
  }, r.detail))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, MYND.fourQuarter.note));
}

/* ============================================================ CASH */
function PageCash() {
  const c = MYND.cash;
  const [view, setView] = useState("buckets");
  const sweep = 46814 - 14050;
  const floorPct = c.total / c.floor * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Cash and the money system",
    sub: "What you can actually spend, where it sits, and what it's already committed to. Money routes itself on the way in rather than waiting for you to decide."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: 20,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Cash on hand",
    value: fmt.usd(c.total),
    sub: "Across two banks",
    tone: "neutral",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Operating floor",
    value: fmt.usd(c.floor),
    sub: c.floorBasis,
    tone: "accent",
    trust: "waiting",
    tip: "The number the operating account never drops below. Everything above it sweeps."
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Free above the floor",
    value: fmt.usd(c.total - c.floor),
    sub: "What the buckets can take",
    tone: c.total > c.floor ? "good" : "bad",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Card headroom",
    value: fmt.usd(c.card.available),
    sub: `From ${fmt.usd(c.card.prevAvailable)} on Aug 22`,
    delta: 4623,
    deltaLabel: "recovered",
    tone: "good",
    trust: "good"
  })), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, c.floorNote), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1.35fr 1fr",
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Cash across both banks",
    sub: "Mercury drained from $95,621 in March to under $7,000 while BlueBanc filled. The money moved, it didn't vanish.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 8,
      height: 180,
      borderBottom: "1px solid var(--rule)"
    }
  }, c.trail.map(t => {
    const tot = t.bluebanc + t.mercury;
    const max = 100000;
    return /*#__PURE__*/React.createElement("div", {
      key: t.m,
      className: "tip",
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: t.mercury / max * 100 + "%",
        background: "var(--accent)",
        borderRadius: "3px 3px 0 0",
        minHeight: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: t.bluebanc / max * 100 + "%",
        background: "var(--info)",
        borderRadius: "0 0 3px 3px",
        minHeight: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "tip-body"
    }, t.m, /*#__PURE__*/React.createElement("br", null), "Mercury ", fmt.usdK(t.mercury), /*#__PURE__*/React.createElement("br", null), "BlueBanc ", fmt.usdK(t.bluebanc), /*#__PURE__*/React.createElement("br", null), "Total ", fmt.usdK(tot)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 7
    }
  }, c.trail.map(t => /*#__PURE__*/React.createElement("span", {
    key: t.m,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, t.m))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: "var(--accent)"
    }
  }), " Mercury"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: "var(--info)"
    }
  }), " BlueBanc"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "The card",
    sub: "Paid down $21,643 in four weeks.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    value: c.card.owed,
    max: c.card.limit,
    size: 124,
    tone: c.card.owed / c.card.limit > 0.7 ? "bad" : "good",
    label: Math.round(c.card.owed / c.card.limit * 100) + "%",
    sub: "used"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13,
      minWidth: 0
    }
  }, [["Limit", c.card.limit, "mute"], ["Owed", c.card.owed, "bad"], ["Available", c.card.available, "good"]].map(([l, v, t]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 2
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: toneVar(t)
    }
  }, fmt.usd(v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 15,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "The Q4 plan draws ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, "$20,000"), " of this. That leaves", " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--bad)"
    }
  }, fmt.usd(c.card.available - 20000)), " of headroom, which is roughly where you were in August.")))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "The waterfall",
    sub: "Operating fills to the floor first. Everything above it splits five ways on the percentages you set, on the way in.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "buckets",
        l: "Buckets"
      }, {
        v: "flow",
        l: "Flow"
      }],
      value: view,
      onChange: setView
    })
  }), view === "buckets" ? /*#__PURE__*/React.createElement(Grid, {
    cols: 3,
    gap: 20,
    style: {
      marginBottom: 36
    }
  }, c.buckets.map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.name,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 600
    }
  }, b.name), b.pct !== null && /*#__PURE__*/React.createElement(Badge, {
    tone: b.tone
  }, b.pct, "%")), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, "Code ", b.code))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: toneVar(b.tone)
    }
  }, fmt.usd(b.balance)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)"
    }
  }, "of ", fmt.usd(b.target))), /*#__PURE__*/React.createElement(Bar, {
    pct: b.balance / (b.target || 1) * 100,
    tone: b.tone,
    height: 5
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      marginTop: 10
    }
  }, b.note)))) : /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, [{
    l: "Money comes in",
    v: fmt.usd(46814),
    t: "info",
    d: "Settles into BlueBanc, sweeps to Mercury Operating"
  }, {
    l: "Operating fills to the floor",
    v: fmt.usd(c.floor),
    t: "accent",
    d: "Rent, payroll, software, support. Everything that keeps the lights on"
  }, {
    l: "The rest sweeps",
    v: fmt.usd(sweep),
    t: "good",
    d: "Whatever is above the floor moves to the sweep account"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "15px 17px",
      background: toneTint(r.t),
      borderRadius: "var(--r-md)",
      border: `1px solid ${toneVar(r.t)}26`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 3
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, r.d)), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: toneVar(r.t)
    }
  }, r.v)), i < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--ink-mute)",
      fontSize: 15,
      padding: "4px 0"
    }
  }, "\u2193"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--ink-mute)",
      fontSize: 15,
      padding: "4px 0"
    }
  }, "\u2193"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 8
    },
    "data-grid": "4"
  }, c.buckets.filter(b => b.pct !== null).map(b => /*#__PURE__*/React.createElement("div", {
    key: b.name,
    style: {
      padding: "13px 12px",
      background: "var(--bg-3)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--rule)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 5
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: toneVar(b.tone)
    }
  }, b.pct, "%"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 3
    }
  }, fmt.usd(b.target))))))), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1fr 1.15fr"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "What you owe",
    sub: "Three obligations, one of them undated.",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13
    }
  }, c.debt.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5
    }
  }, x.label), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, fmt.usd(x.value))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, x.note))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--rule)",
      paddingTop: 13,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, fmt.usd(c.debt.reduce((s, x) => s + x.value, 0))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 15,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Next 30 days out"), c.outflows30.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.band,
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, o.band), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, fmt.usd(o.amount))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, o.detail))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Buyout schedule",
    sub: "Nine payments through May 2027. The first was the largest because it carried grace interest.",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Note"))), /*#__PURE__*/React.createElement("tbody", null, c.schedule.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.date,
    style: {
      opacity: s.status === "planned" ? 0.62 : 1
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: s.status === "next" ? 600 : 400
    }
  }, s.date), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(s.amount, 2)), /*#__PURE__*/React.createElement("td", null, s.status === "paid" && /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Paid"), s.status === "next" && /*#__PURE__*/React.createElement(Badge, {
    tone: "warn",
    solid: true
  }, "Next"), s.status === "planned" && /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "Planned")), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)"
    }
  }, s.note)))))))));
}

/* ==== pages-b.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-b.jsx — Revenue & Rails, Margin & Unit Economics, Subscribers & Retention

/* ============================================================ REVENUE */
function PageRevenue() {
  const r = MYND.revenue;
  const [tab, setTab] = useState("rails");
  const totalGross = r.rails.reduce((s, x) => s + x.gross, 0);
  const totalFees = r.rails.reduce((s, x) => s + x.fees, 0);
  const totalReserve = r.rails.reduce((s, x) => s + x.reserve, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Revenue and the rails",
    sub: "Your books counted one processor out of four. This is all of them, gross in, fees out, net to bank, so nothing hides in the deposit."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: 20,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Gross revenue",
    value: fmt.usd(totalGross),
    sub: "All four rails, last 30 days",
    tone: "neutral",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Processing cost",
    value: fmt.usd(totalFees),
    sub: fmt.pct(totalFees / totalGross * 100, 2) + " all in",
    tone: "bad",
    trust: "good",
    tip: "Against a 1.5% discount rate. The gap is interchange, passed straight through."
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Held in reserve",
    value: fmt.usd(totalReserve),
    sub: "Never released since the accounts opened",
    tone: "warn",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Net to bank",
    value: fmt.usd(totalGross - totalFees - totalReserve),
    sub: "What actually lands",
    tone: "good",
    trust: "good"
  })), /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, r.processingNote), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Breakdown",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "rails",
        l: "By rail"
      }, {
        v: "channels",
        l: "By channel"
      }, {
        v: "ship",
        l: "Shipments"
      }],
      value: tab,
      onChange: setTab
    })
  }), tab === "rails" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Rail"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Gross"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Fees"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Reserve"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Net"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "All in"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Approval"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Chargeback"), /*#__PURE__*/React.createElement("th", null, "Volume against cap"))), /*#__PURE__*/React.createElement("tbody", null, r.rails.map(x => /*#__PURE__*/React.createElement("tr", {
    key: x.name
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 2
    }
  }, x.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      maxWidth: 260
    }
  }, x.note)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(x.gross)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--bad)"
    }
  }, x.fees ? "-" + fmt.usd(x.fees) : "—"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: x.reserve ? "var(--warn)" : "var(--ink-mute)"
    }
  }, x.reserve ? "-" + fmt.usd(x.reserve) : "—"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, fmt.usd(x.net)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: x.pct > 4.5 ? "var(--bad)" : "var(--warn)"
    }
  }, x.pct ? fmt.pct(x.pct, 2) : "—"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: x.approval >= 95 ? "var(--good)" : x.approval >= 92 ? "var(--warn)" : x.approval ? "var(--bad)" : "var(--ink-mute)"
    }
  }, x.approval ? fmt.pct(x.approval) : "—"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, x.chargeback ? fmt.pct(x.chargeback, 2) : "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 160
    }
  }, x.cap ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Bar, {
    pct: x.gross / x.cap * 100,
    tone: x.gross / x.cap > 0.8 ? "bad" : x.gross / x.cap > 0.6 ? "warn" : "good",
    height: 5
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--ink-mute)"
    }
  }, fmt.usdK(x.gross), " of ", fmt.usdK(x.cap))) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11
    }
  }, "\u2014")))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "The Kurv rail is capped at $25,000 in any 30 day period, contractual, with termination rights if it's breached. Across all rails you top out around $125,000 a month. A $3M run rate needs about $250,000.")), tab === "channels" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Revenue by channel",
    sub: "Three of these can't be trusted. Every order without an affiliate link has been credited to an internal test account since April.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13
    }
  }, r.channels.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 5,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontSize: 13.5
    }
  }, c.name, c.trust !== "good" && /*#__PURE__*/React.createElement(Trust, {
    level: c.trust
  })), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: c.trust === "blocked" ? "var(--ink-mute)" : "var(--ink)"
    }
  }, fmt.usd(c.rev))), /*#__PURE__*/React.createElement(Bar, {
    pct: c.share,
    tone: c.trust === "blocked" ? "mute" : c.trust === "mock" ? "info" : "accent",
    height: 5
  }), c.note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, c.note))))), /*#__PURE__*/React.createElement(Blocked, {
    title: "Channel revenue is not reliable yet",
    note: "The affiliate tag fires on page load, so anything without an affiliate link defaults to an internal test account, and stored IDs never expire. Attribution gets rebuilt with a thirty day window in Phase 3. Until then these splits show shape, not truth."
  })), tab === "ship" && /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1fr 1.3fr"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Shipments against orders",
    sub: "July",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    value: r.shipments.invisible,
    max: r.shipments.total,
    size: 158,
    tone: "bad",
    label: fmt.pct(r.shipments.invisiblePct),
    sub: "invisible"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [["Total shipments", r.shipments.total, "neutral"], ["Touched the order platform", r.shipments.onPlatform, "good"], ["Never touched it", r.shipments.invisible, "bad"]].map(([l, v, t]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)"
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: toneVar(t)
    }
  }, fmt.num(v)))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "What the invisible third is",
    sub: "Wholesale, samples, reships and comps go straight to the warehouse and never get recorded as an order.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(BarChart, {
    horizontal: true,
    valueFmt: fmt.num,
    data: [{
      m: "Wholesale",
      v: 48,
      tone: "info"
    }, {
      m: "Samples to creators",
      v: 34,
      tone: "warn"
    }, {
      m: "Reships",
      v: 26,
      tone: "warn"
    }, {
      m: "Comps",
      v: 17,
      tone: "bad"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "Every one of these consumes stock and costs money. None of them appear as a sale, so shipments and revenue never tie, and inventory counts drift. The fix is a cost line and a flag on each, recorded at the point they ship.")))));
}

/* ============================================================ MARGIN */
function PageMargin() {
  const m = MYND.margin;
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Chocolate", "Gummies", "Capsules", "Other"];
  const rows = m.offers.filter(o => filter === "All" || o.cat === filter);
  const k = m.kitchen;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Margin and unit economics",
    sub: "What a bar actually costs to make, and what's left after everything variable comes off. Half of this is a placeholder until the kitchen starts logging."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: 20,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Contribution margin",
    value: fmt.usd(31200),
    sub: "Net sales less product, variable and ad spend",
    tone: "good",
    trust: "mock",
    tip: "The daily number the whole business should orbit. Not gross margin, not net profit."
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Gross margin",
    value: "~90%",
    sub: "On chocolate, rebuilt from scratch",
    tone: "good",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Products with a real cost",
    value: "4 of 10",
    sub: "Six still on the $10 placeholder",
    tone: "bad",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Runs logged",
    value: `${k.runsLogged} of ${k.runsNeeded}`,
    sub: "Three runs a product",
    tone: "bad",
    trust: "waiting"
  })), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1.3fr 1fr",
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Contribution margin, monthly",
    sub: m.contributionNote,
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(LineChart, {
    data: m.contribution,
    tone: "good",
    height: 190,
    valueFmt: fmt.usdK
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "The kitchen ledger",
    sub: k.note,
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    value: k.runsLogged,
    max: k.runsNeeded,
    size: 104,
    tone: "warn",
    label: `${k.runsLogged}`,
    sub: `of ${k.runsNeeded}`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("b", null, k.products), " products, three runs each"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, "Next run: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--warn)"
    }
  }, k.nextRun)))), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 9
    }
  }, "Confirmed rates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, k.rates.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.label,
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, x.label), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13
    }
  }, x.value)))))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Offers and margin",
    sub: "Anything still showing a $10 cost is a placeholder, not a measurement.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: cats,
      value: filter,
      onChange: setFilter
    })
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Price"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cost"), /*#__PURE__*/React.createElement("th", null, "Cost basis"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Units"), /*#__PURE__*/React.createElement("th", null, "Share of revenue"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(o => /*#__PURE__*/React.createElement("tr", {
    key: o.sku
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, o.sku), o.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, o.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: o.cat === "Chocolate" ? "accent" : o.cat === "Gummies" ? "info" : "mute"
  }, o.cat)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.price ? fmt.usd(o.price) : "unknown"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: o.costBasis === "placeholder" ? "var(--bad)" : "var(--ink)"
    }
  }, fmt.usd(o.cost, 2)), /*#__PURE__*/React.createElement("td", null, o.costBasis === "rebuilt" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Measured") : /*#__PURE__*/React.createElement(Badge, {
    tone: "bad"
  }, "Placeholder")), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: o.margin ? "var(--good)" : "var(--ink-mute)"
    }
  }, o.margin ? fmt.pct(o.margin) : "unknown"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.units || "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 150
    }
  }, o.share ? /*#__PURE__*/React.createElement(Bar, {
    pct: o.share * 4,
    tone: "accent",
    height: 5
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11
    }
  }, "\u2014")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, "Six of ten products carry a $10 placeholder that somebody typed in once. It's 54% of your cost of goods, it includes two products that were never made, and you've been pricing against it since the 20% rise. Every margin call this year rests on it."));
}

/* ============================================================ SUBSCRIBERS */
function PageSubs() {
  const s = MYND.subs;
  const maxFunnel = s.funnel[0].n;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Subscribers and retention",
    sub: "A million subscribers is meaningless if nobody rebills. This is who actually re-orders, and where they fall off."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 6,
    gap: 20,
    name: "3",
    style: {
      marginBottom: 36
    }
  }, s.kpi.map(k => /*#__PURE__*/React.createElement(Stat, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1.25fr 1fr",
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Rebill rate, monthly",
    sub: s.rebillNote,
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(LineChart, {
    data: s.rebillTrend,
    tone: "good",
    height: 195,
    target: 60,
    targetLabel: "60% target",
    valueFmt: v => v + "%",
    yMin: 0,
    yMax: 110
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Where subscribers fall off",
    sub: "Out of 223 orders in July.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, s.funnel.map((f, i) => {
    const pct = f.n / maxFunnel * 100;
    const tone = i === 0 ? "info" : i < 3 ? "warn" : "bad";
    return /*#__PURE__*/React.createElement("div", {
      key: f.stage
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, f.stage), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: toneVar(tone)
      }
    }, f.n, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-mute)",
        fontWeight: 400
      }
    }, "\xB7 ", fmt.pct(pct, 0)))), /*#__PURE__*/React.createElement(Bar, {
      pct: pct,
      tone: tone,
      height: 7
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 15,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "Some of this is churn and some of it is failed payments that were never retried properly. The retry rebuild has to land before any retention offer, or you'll be solving a billing problem with a marketing one.")))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Retention by cohort",
    sub: "Percent still active at one, three, six and twelve months."
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Cohort"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Subscribers"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "Month 1"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "Month 3"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "Month 6"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "Month 12"))), /*#__PURE__*/React.createElement("tbody", null, s.cohorts.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.c
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.c), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.num(c.n)), ["m1", "m3", "m6", "m12"].map(k => /*#__PURE__*/React.createElement("td", {
    key: k,
    style: {
      textAlign: "center"
    }
  }, c[k] === null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "\u2014") : /*#__PURE__*/React.createElement(Badge, {
    tone: c[k] >= 60 ? "good" : c[k] >= 20 ? "warn" : "bad"
  }, c[k], "%"))))))))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Lifetime value"
  }), /*#__PURE__*/React.createElement(Blocked, {
    title: "Lifetime value can't be built yet, and a number here today would be fiction",
    note: s.ltv.note,
    fields: s.ltv.fields
  }));
}

/* ==== pages-c.jsx ==== */
// pages-c.jsx — Inventory & Velocity, Team & Accountability, Data Health

/* ============================================================ INVENTORY */
function PageInventory() {
  const inv = MYND.inventory;
  const [status, setStatus] = useState("All");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState({});
  const statuses = ["All", "critical", "warning", "healthy", "overstocked"];
  const cats = ["All", "Chocolate", "Gummies", "Capsules"];
  const label = {
    critical: "Stockout risk",
    warning: "Reorder soon",
    healthy: "Healthy",
    overstocked: "Overstocked"
  };
  const tone = {
    critical: "bad",
    warning: "warn",
    healthy: "good",
    overstocked: "info"
  };
  const rows = inv.skus.filter(s => (status === "All" || s.status === status) && (cat === "All" || s.cat === cat));
  const atRisk = inv.skus.filter(s => s.status === "critical" || s.status === "warning");
  const totalPO = atRisk.reduce((s, x) => s + x.po, 0);
  const gap = totalPO - inv.affordability.freeCash;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Inventory and velocity",
    sub: "How much you have, how fast it moves, and whether you can afford the reorder before you run out."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: 20,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "SKUs at risk",
    value: String(atRisk.length),
    sub: "2 critical \xB7 2 warning",
    tone: "bad",
    trust: "mock"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Free cash for inventory",
    value: fmt.usd(inv.affordability.freeCash),
    sub: "Cash above the operating floor",
    tone: "good",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Reorder requirement",
    value: fmt.usd(totalPO),
    sub: "All urgent and warning SKUs",
    tone: "warn",
    trust: "mock"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Shortfall",
    value: fmt.usd(gap),
    sub: "Sequence purchases or draw on the card",
    tone: "bad",
    trust: "mock"
  })), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, inv.note), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1fr 1.2fr",
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Can you fund the reorders?",
    sub: "Free cash against what the at-risk SKUs need.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13
    }
  }, [["Free cash available", inv.affordability.freeCash, "good"], ["Total reorder cost", totalPO, "warn"], ["Net position", -gap, "bad"]].map(([l, v, t]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-soft)"
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: toneVar(t)
    }
  }, fmt.usd(v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, inv.affordability.note))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Ad spend against velocity",
    sub: "Bubble size is revenue. Colour is stock status. Anything red and to the right is spending into a stockout.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(Scatter, {
    height: 250,
    xLabel: "Monthly ad spend",
    yLabel: "Units per day",
    yFmt: v => v + "/day",
    points: inv.skus.filter(s => s.velocity > 0).map(s => ({
      x: s.po / 4 || 2000,
      y: s.velocity,
      r: 13 + s.velocity / 8,
      tone: tone[s.status],
      label: s.sku
    }))
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Days of cover",
    sub: "Click a row for lead time and reorder detail. Red means you run out before a reorder could land.",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        maxWidth: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Seg, {
      options: cats,
      value: cat,
      onChange: setCat
    }), /*#__PURE__*/React.createElement(Seg, {
      options: statuses.map(s => ({
        v: s,
        l: s === "All" ? "All" : label[s]
      })),
      value: status,
      onChange: setStatus
    }))
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 26
    }
  }), /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "On hand"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Velocity"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Days of cover"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Lead time"), /*#__PURE__*/React.createElement("th", null, "Cover against lead time"), /*#__PURE__*/React.createElement("th", null, "Incoming"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(s => {
    const isOpen = !!open[s.sku];
    const risk = s.cover > 0 && s.cover < s.lead;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.sku
    }, /*#__PURE__*/React.createElement("tr", {
      className: "clickable",
      onClick: () => setOpen(o => ({
        ...o,
        [s.sku]: !o[s.sku]
      }))
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 6px 10px 14px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": isOpen ? "Collapse" : "Expand",
      onClick: e => {
        e.stopPropagation();
        setOpen(o => ({
          ...o,
          [s.sku]: !o[s.sku]
        }));
      },
      style: {
        appearance: "none",
        border: "1px solid var(--rule)",
        background: isOpen ? "var(--accent-tint)" : "transparent",
        color: isOpen ? "var(--accent)" : "var(--ink-mute)",
        width: 22,
        height: 22,
        borderRadius: 6,
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        padding: 0,
        fontSize: 10,
        transition: "all 160ms ease"
      }
    }, isOpen ? "▾" : "▸")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, s.sku), s.note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: "var(--ink-mute)"
      }
    }, s.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: s.cat === "Chocolate" ? "accent" : s.cat === "Gummies" ? "info" : "mute"
    }, s.cat)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.num(s.onHand)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right"
      }
    }, s.velocity ? s.velocity + "/day" : "—"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        fontWeight: 600,
        color: toneVar(tone[s.status])
      }
    }, s.cover ? s.cover + "d" : "0d"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-soft)"
      }
    }, s.lead, "d"), /*#__PURE__*/React.createElement("td", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      pct: Math.min(s.cover / (s.lead * 3) * 100, 100),
      tone: tone[s.status],
      height: 5
    }), risk && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--bad)"
      }
    }, "inside lead time")), /*#__PURE__*/React.createElement("td", null, s.incoming ? /*#__PURE__*/React.createElement(Badge, {
      tone: "good"
    }, "On order") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-mute)",
        fontSize: 11
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: tone[s.status]
    }, label[s.status]))), isOpen && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 10,
      style: {
        background: "var(--bg-3)",
        padding: "16px 18px"
      }
    }, /*#__PURE__*/React.createElement(Grid, {
      cols: 4,
      gap: 20
    }, [["Reorder cost", s.po ? fmt.usd(s.po) : "Not scheduled"], ["Runs out", s.cover ? `in ${s.cover} days` : "already out"], ["Lead time", `${s.lead} days`], ["Verdict", s.po > inv.affordability.freeCash ? "Needs sequencing or credit" : s.po ? "Fundable from free cash" : "No action"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 4
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 500
      }
    }, v)))))));
  }))))));
}

/* ============================================================ TEAM */
function PageTeam() {
  const t = MYND.team;
  const statusTone = {
    "on-track": "good",
    "at-risk": "bad",
    "not-set": "mute"
  };
  const statusLabel = {
    "on-track": "On track",
    "at-risk": "At risk",
    "not-set": "No number yet"
  };
  const delegTone = {
    "Only him": "bad",
    "Rule-able": "warn",
    "Someone else could": "good",
    "TBD": "mute"
  };
  const counts = t.decisions.reduce((a, d) => {
    a[d.deleg] = (a[d.deleg] || 0) + 1;
    return a;
  }, {});
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Team and accountability",
    sub: "One number per seat, visible to the person being measured. A scorecard nobody can see is a report about them, not a tool for them."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: 20,
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Roles with a number",
    value: `1 of ${t.roles.length}`,
    sub: "Target is all of them",
    tone: "bad",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Written processes",
    value: `${t.processes.written}`,
    sub: `Target ${t.processes.target}+ by Day 180`,
    tone: "bad",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Decisions logged",
    value: String(t.decisions.length),
    sub: "Last 14 days",
    tone: "neutral",
    trust: "mock"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Could be delegated",
    value: `${(counts["Rule-able"] || 0) + (counts["Someone else could"] || 0)} of ${t.decisions.length}`,
    sub: "With a written rule",
    tone: "warn",
    trust: "mock"
  })), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Role scorecards",
    sub: t.note
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Who"), /*#__PURE__*/React.createElement("th", null, "Role"), /*#__PURE__*/React.createElement("th", null, "The one number"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Now"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Target"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, t.roles.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.name
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 27,
      height: 27,
      borderRadius: 999,
      background: r.owner ? "var(--accent)" : "var(--bg-4)",
      color: r.owner ? "#fff" : "var(--ink-soft)",
      display: "grid",
      placeItems: "center",
      fontSize: 11,
      fontWeight: 700,
      flexShrink: 0
    }
  }, r.name.slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, r.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)"
    }
  }, r.role), /*#__PURE__*/React.createElement("td", null, r.metric), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, r.now || /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontWeight: 400
    }
  }, "not set")), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, r.target), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone[r.status]
  }, statusLabel[r.status])))))))), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1.3fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Founder decision log",
    sub: "Every decision that routed through you, sorted into what only you can decide and what could move.",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Decision"), /*#__PURE__*/React.createElement("th", null, "Could this move?"))), /*#__PURE__*/React.createElement("tbody", null, t.decisions.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)",
      whiteSpace: "nowrap"
    }
  }, d.d), /*#__PURE__*/React.createElement("td", null, d.what), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: delegTone[d.deleg]
  }, d.deleg)))))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "The delegation map",
    sub: "Where the last fourteen days of decisions actually sit.",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    value: counts["Only him"] || 0,
    max: t.decisions.length,
    size: 150,
    tone: "bad",
    label: fmt.pct((counts["Only him"] || 0) / t.decisions.length * 100, 0),
    sub: "only him"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, Object.entries(counts).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: toneVar(delegTone[k])
    }
  }, v)), /*#__PURE__*/React.createElement(Bar, {
    pct: v / t.decisions.length * 100,
    tone: delegTone[k],
    height: 5
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 15,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "The middle group is where delegation actually happens. A decision with a written rule behind it stops being a decision.")))));
}

/* ============================================================ DATA HEALTH */
function PageData() {
  const d = MYND.dataHealth;
  const sTone = {
    live: "good",
    partial: "warn",
    blocked: "bad",
    waiting: "info"
  };
  const sLabel = {
    live: "Connected",
    partial: "Partial",
    blocked: "Blocked",
    waiting: "Waiting on data"
  };
  const rTone = {
    high: "good",
    medium: "warn",
    low: "bad",
    none: "bad"
  };
  const rLabel = {
    high: "Act on it",
    medium: "Check before acting",
    low: "Directional only",
    none: "Not usable yet"
  };
  const rPct = {
    high: 100,
    medium: 65,
    low: 32,
    none: 8
  };
  const live = d.sources.filter(s => s.status === "live").length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Data health",
    sub: d.note
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: 20,
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Sources connected",
    value: `${live} of ${d.sources.length}`,
    sub: "Feeding the dashboard",
    tone: live > 7 ? "good" : "warn",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Blocked on access",
    value: "3",
    sub: "Packiyo, Klaviyo, Test Partner",
    tone: "bad",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Numbers you can act on",
    value: "3 of 9",
    sub: "The rest need work first",
    tone: "warn",
    trust: "good"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Waiting on the kitchen",
    value: "1",
    sub: "Margin per unit",
    tone: "warn",
    trust: "good"
  })), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    name: "2-1",
    gap: 24,
    style: {
      gridTemplateColumns: "1fr 1.15fr"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Where the data comes from",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, d.sources.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 12,
      alignItems: "center",
      padding: "10px 2px",
      borderBottom: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 500
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, s.detail)), /*#__PURE__*/React.createElement(Badge, {
    tone: sTone[s.status]
  }, sLabel[s.status]))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "How much to trust each number",
    sub: "Green means act on it. Red means it exists as a shape, not a fact.",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 15
    }
  }, d.reliability.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.area
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      alignItems: "center",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 500
    }
  }, r.area), /*#__PURE__*/React.createElement(Badge, {
    tone: rTone[r.level]
  }, rLabel[r.level])), /*#__PURE__*/React.createElement(Bar, {
    pct: rPct[r.level],
    tone: rTone[r.level],
    height: 5
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, r.note)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "This page exists because a dashboard that shows a confident wrong number is more dangerous than one that admits what it doesn't know. As sources connect and the attribution rebuild lands, rows move up this list and the tiles they feed stop carrying a warning."));
}

/* ==== app.jsx ==== */
// app.jsx — shell, navigation, theme, routing

const TABS = [{
  id: "overview",
  label: "Overview",
  icon: "grid"
}, {
  id: "cash",
  label: "Cash & Money OS",
  icon: "wallet"
}, {
  id: "revenue",
  label: "Revenue & Rails",
  icon: "trend"
}, {
  id: "margin",
  label: "Margin & Units",
  icon: "bars"
}, {
  id: "subs",
  label: "Subscribers",
  icon: "users"
}, {
  id: "inventory",
  label: "Inventory",
  icon: "box"
}, {
  id: "team",
  label: "Team",
  icon: "badge"
}, {
  id: "data",
  label: "Data Health",
  icon: "pulse"
}];
function Icon({
  name,
  size = 15
}) {
  const p = {
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    })),
    wallet: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2.5",
      y: "6",
      width: "19",
      height: "13",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 10h19M17 14.5h.01"
    })),
    trend: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 7h6v6"
    })),
    bars: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 20V10M12 20V4M19 20v-7"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 5.5a3.2 3.2 0 010 5.6M18 20c0-2.4-.8-4.4-2.2-5.6"
    })),
    box: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 8l-9-5-9 5 9 5 9-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 8v8l9 5 9-5V8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 13v8"
    })),
    badge: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14.5L5.5 21l6.5-3 6.5 3-1.5-6.5"
    })),
    pulse: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2.5 12h4l2.5-7 4 14 2.5-7h5.5"
    }))
  }[name];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p);
}
function Logo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mynd-logo.svg",
    alt: "MYND",
    style: {
      height: 19,
      width: "auto",
      filter: "var(--logo-filter)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 20,
      background: "var(--rule)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      letterSpacing: "-0.01em",
      fontWeight: 500,
      whiteSpace: "nowrap"
    }
  }, "Operations Dashboard"));
}
function ThemeToggle({
  theme,
  setTheme
}) {
  const dark = theme === "dark";
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(dark ? "light" : "dark"),
    "aria-label": "Toggle theme",
    style: {
      appearance: "none",
      border: "1px solid var(--rule)",
      background: "var(--bg-3)",
      width: 52,
      height: 28,
      borderRadius: 999,
      position: "relative",
      cursor: "pointer",
      padding: 0,
      transition: "background 220ms ease, border-color 220ms ease",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2.5,
      left: dark ? 2.5 : 26,
      width: 22,
      height: 22,
      borderRadius: 999,
      background: "var(--accent)",
      display: "grid",
      placeItems: "center",
      transition: "left 260ms cubic-bezier(0.22,0.68,0,1)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, dark ? /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })))));
}
function App() {
  const [theme, setTheme] = useState("dark");
  const [tab, setTab] = useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return TABS.some(t => t.id === h) ? h : "overview";
  });
  const [range, setRange] = useState("30d");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    window.location.hash = tab;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [tab]);
  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || "").replace("#", "");
      if (TABS.some(t => t.id === h) && h !== tab) setTab(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [tab]);
  useEffect(() => {
    const onKey = e => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= TABS.length) setTab(TABS[n - 1].id);
      if (e.key === "t" || e.key === "T") setTheme(s => s === "dark" ? "light" : "dark");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const Page = {
    overview: /*#__PURE__*/React.createElement(PageOverview, {
      go: setTab
    }),
    cash: /*#__PURE__*/React.createElement(PageCash, null),
    revenue: /*#__PURE__*/React.createElement(PageRevenue, null),
    margin: /*#__PURE__*/React.createElement(PageMargin, null),
    subs: /*#__PURE__*/React.createElement(PageSubs, null),
    inventory: /*#__PURE__*/React.createElement(PageInventory, null),
    team: /*#__PURE__*/React.createElement(PageTeam, null),
    data: /*#__PURE__*/React.createElement(PageData, null)
  }[tab];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--page)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--surface)",
      borderBottom: "1px solid var(--rule)",
      backdropFilter: "saturate(180%) blur(14px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-row",
    style: {
      minHeight: "var(--nav-h)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "nav-right",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hide-sm",
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, MYND.meta.asOf), /*#__PURE__*/React.createElement(Seg, {
    className: "hide-sm",
    options: [{
      v: "7d",
      l: "7d"
    }, {
      v: "30d",
      l: "30d"
    }, {
      v: "90d",
      l: "90d"
    }, {
      v: "ytd",
      l: "YTD"
    }],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    setTheme: setTheme
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wrap tabstrip-wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "tabstrip",
    "aria-label": "Sections"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "tab",
    "data-on": tab === t.id,
    onClick: () => setTab(t.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon
  }), t.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderBottom: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: "10px 28px",
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    solid: true
  }, MYND.meta.phase), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, "Day ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, MYND.meta.day), " of ", MYND.meta.ofDays), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 120,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    pct: MYND.meta.day / MYND.meta.ofDays * 100,
    tone: "accent",
    height: 4
  })), /*#__PURE__*/React.createElement("span", {
    className: "hide-sm",
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "Gate 3 on 17 Nov \xB7 Close-out 31 Jan"))), /*#__PURE__*/React.createElement("main", {
    className: "wrap",
    style: {
      padding: "36px 28px 90px"
    }
  }, Page), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--rule)",
      padding: "22px 0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "MYND Operations Dashboard \xB7 Mock for review \xB7 Built by OpFix"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "Press ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "1"), " to ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "8"), " to switch tabs,", " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "T"), " for theme"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

})();