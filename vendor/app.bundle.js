(function(){

/* ==== data.jsx ==== */
// data.jsx — MOCK. Anchored to real MYND figures where they exist so DB recognises
// his own business. Everything else is shaped to demonstrate the surface.

const D = {
  meta: {
    user: "Damon B.",
    role: "Founder / CEO",
    tz: "Los Angeles",
    updated: "11:42 PM"
  },
  ticker: [{
    i: "dollar",
    l: "Revenue today",
    v: "$1,847"
  }, {
    i: "box",
    l: "Orders today",
    v: "14"
  }, {
    i: "pulse",
    l: "Approval rate",
    v: "94.75%",
    tone: "warn"
  }, {
    i: "dollar",
    l: "Cash",
    v: "$40,347"
  }, {
    i: "alert",
    l: "Dubai Chocolate",
    v: "8d cover",
    tone: "bad"
  }, {
    i: "rev",
    l: "Rebill rate",
    v: "74%",
    tone: "good"
  }, {
    i: "clock",
    l: "Next buyout",
    v: "$9,481 · Oct 1"
  }, {
    i: "truck",
    l: "Shipments today",
    v: "11"
  }, {
    i: "dollar",
    l: "MTD revenue",
    v: "$14,920"
  }, {
    i: "pulse",
    l: "Chargebacks 30d",
    v: "0.42%",
    tone: "good"
  }],
  // ---------------------------------------------------------------- BOARDROOM
  unit: [{
    k: "rev",
    label: "Revenue · 30d",
    value: "$46,814",
    delta: -4.1,
    sub: "all four rails",
    tone: "ink",
    help: "Gross across every processor, matched to the bank.",
    spark: [64267, 58900, 55400, 51200, 49800, 47300, 45100, 43900, 46814]
  }, {
    k: "cm",
    label: "Contribution margin",
    value: "$31,200",
    delta: 8.4,
    sub: "67% of revenue",
    tone: "good",
    help: "Net sales less product cost, variable expense and ad spend. The number the business should orbit daily.",
    spark: [21400, 19800, 17900, 16200, 14840, 28600, 31200]
  }, {
    k: "cash",
    label: "Available cash",
    value: "$40,347",
    delta: -37.2,
    sub: "floor $22,500",
    tone: "warn",
    help: "Across Mercury and BlueBanc. Free cash is what sits above the operating floor."
  }, {
    k: "burn",
    label: "Monthly result",
    value: "+$15,197",
    delta: 3826,
    sub: "was +$387 in July",
    tone: "good",
    help: "Revenue less fixed and variable cost, before debt service."
  }, {
    k: "aov",
    label: "Average order",
    value: "$189",
    delta: 2.1,
    sub: "223 paid orders",
    tone: "ink",
    help: "Revenue over orders that touched the platform."
  }, {
    k: "appr",
    label: "Approval rate",
    value: "94.75%",
    delta: 0,
    sub: "target 98%",
    tone: "warn",
    help: "Three points below target is about $18,000 a year."
  }, {
    k: "debt",
    label: "Total owed",
    value: "$251,525",
    delta: -11.6,
    sub: "next $9,481 Oct 1",
    tone: "ink",
    help: "Buyout note, card and the undated second obligation."
  }],
  funnel: [{
    label: "Sessions",
    v: 18420,
    pct: 100,
    note: "30 days"
  }, {
    label: "Add to cart",
    v: 2210,
    pct: 62,
    note: "12.0% of sessions"
  }, {
    label: "Checkout",
    v: 418,
    pct: 34,
    note: "18.9% of carts"
  }, {
    label: "Paid order",
    v: 223,
    pct: 22,
    note: "53.3% of checkouts"
  }, {
    label: "Subscription",
    v: 30,
    pct: 9,
    note: "13.4% attach"
  }, {
    label: "Rebilled 3x",
    v: 3,
    pct: 3,
    note: "10.98% survive"
  }],
  today: [{
    l: "Orders today",
    v: "14"
  }, {
    l: "Revenue today",
    v: "$1,847"
  }, {
    l: "Shipments out",
    v: "11"
  }, {
    l: "Declines today",
    v: "3",
    tone: "warn"
  }, {
    l: "Support tickets",
    v: "6"
  }, {
    l: "Subs cancelled",
    v: "2",
    tone: "bad"
  }],
  toDate: [{
    l: "Revenue YTD",
    v: "$486,220"
  }, {
    l: "Orders YTD",
    v: "2,614"
  }, {
    l: "Active subs",
    v: "1,842"
  }, {
    l: "Debt paid down",
    v: "$33,000",
    tone: "good"
  }, {
    l: "Cost cut, monthly",
    v: "$14,810",
    tone: "good"
  }, {
    l: "Units shipped",
    v: "9,480"
  }],
  attention: [{
    t: "Dubai Chocolate runs out in 8 days against a 21 day lead time",
    tone: "bad"
  }, {
    t: "Micro Caps has been at zero stock for 34 days",
    tone: "bad"
  }, {
    t: "Three data sources still unconnected, so channel numbers are directional only",
    tone: "warn"
  }, {
    t: "Card utilisation at 49%. The Q4 plan would take it to 93%",
    tone: "warn"
  }, {
    t: "Six of ten products still priced against a placeholder cost",
    tone: "warn"
  }, {
    t: "Kitchen has logged 0 of 30 production runs",
    tone: "warn"
  }],
  // ---------------------------------------------------------------- MONEY
  accounts: [{
    n: "Mercury · Operating",
    c: "1000",
    v: 22500,
    role: "Holds the floor, spills to sweep",
    tone: "accent"
  }, {
    n: "Mercury · Sweep",
    c: "1010",
    v: 0,
    role: "Distributes to buckets",
    tone: "info"
  }, {
    n: "Mercury · Marketing",
    c: "1040",
    v: 0,
    role: "35% of sweep",
    tone: "violet"
  }, {
    n: "Mercury · Inventory",
    c: "1030",
    v: 0,
    role: "25% of sweep",
    tone: "good"
  }, {
    n: "Mercury · Taxes",
    c: "1050",
    v: 0,
    role: "20% of sweep",
    tone: "warn"
  }, {
    n: "Mercury · Owner",
    c: "1070",
    v: 0,
    role: "15% of sweep",
    tone: "accent"
  }, {
    n: "Mercury · Reserve",
    c: "1020",
    v: 0,
    role: "5%, caps at $108,000",
    tone: "mute"
  }, {
    n: "Mercury · Debt svc",
    c: "1060",
    v: 6273,
    role: "Funds the buyout schedule",
    tone: "bad"
  }, {
    n: "BlueBanc · Settlement",
    c: "1080",
    v: 34074,
    role: "Rails land here, sweeps to Mercury",
    tone: "info"
  }],
  cashTrail: [{
    m: "Mar",
    v: 98621
  }, {
    m: "Apr",
    v: 64317
  }, {
    m: "May",
    v: 65504
  }, {
    m: "Jun",
    v: 82956
  }, {
    m: "Jul",
    v: 59962
  }, {
    m: "Aug",
    v: 56730
  }, {
    m: "Sep",
    v: 40347
  }],
  buckets: [{
    n: "Marketing",
    pct: 35,
    target: 13125,
    v: 0,
    tone: "violet"
  }, {
    n: "Inventory",
    pct: 25,
    target: 9375,
    v: 0,
    tone: "good"
  }, {
    n: "Taxes",
    pct: 20,
    target: 7500,
    v: 0,
    tone: "warn"
  }, {
    n: "Owner profit",
    pct: 15,
    target: 5625,
    v: 0,
    tone: "accent"
  }, {
    n: "Reserve",
    pct: 5,
    target: 1875,
    v: 0,
    tone: "info"
  }],
  pl: [{
    line: "Revenue",
    v: 46814,
    pct: 100,
    tone: "ink",
    bench: ""
  }, {
    line: "Cost of delivery",
    v: 5760,
    pct: 12.3,
    tone: "good",
    bench: "~40%",
    d: "COGS, fulfilment, processing"
  }, {
    line: "Marketing",
    v: 0,
    pct: 0,
    tone: "warn",
    bench: "25-30%",
    d: "Ad spend paused"
  }, {
    line: "OPEX",
    v: 14050,
    pct: 30.0,
    tone: "bad",
    bench: "~15%",
    d: "Fixed operating cost"
  }, {
    line: "Profit",
    v: 15197,
    pct: 32.5,
    tone: "good",
    bench: "15-20%",
    d: "Before debt service"
  }],
  debt: [{
    n: "Buyout note",
    v: 148444,
    note: "8 of 9 payments through May 2027",
    tone: "bad"
  }, {
    n: "Chase card",
    v: 23081,
    note: "$46,700 limit · 49% used",
    tone: "warn"
  }, {
    n: "Second obligation",
    v: 80000,
    note: "Undated, no written terms",
    tone: "mute"
  }],
  schedule: [{
    d: "Sep 1, 2026",
    v: 11555.56,
    s: "paid"
  }, {
    d: "Oct 1, 2026",
    v: 9481.48,
    s: "next"
  }, {
    d: "Nov 1, 2026",
    v: 9407.41,
    s: "planned"
  }, {
    d: "Dec 1, 2026",
    v: 9333.34,
    s: "planned"
  }, {
    d: "Jan 1, 2027",
    v: 9259.26,
    s: "planned"
  }, {
    d: "Feb 1, 2027",
    v: 9185.19,
    s: "planned"
  }, {
    d: "Mar 1, 2027",
    v: 9111.11,
    s: "planned"
  }, {
    d: "Apr 1, 2027",
    v: 9037.04,
    s: "planned"
  }, {
    d: "May 1, 2027",
    v: 8962.94,
    s: "planned"
  }],
  rails: [{
    n: "Deposyt",
    gross: 19840,
    fees: 874,
    res: 0,
    net: 18966,
    pct: 4.41,
    appr: 96.2,
    cb: 0.31,
    cap: 60000,
    tone: "good"
  }, {
    n: "ExpiTrans",
    gross: 14320,
    fees: 648,
    res: 0,
    net: 13672,
    pct: 4.53,
    appr: 94.1,
    cb: 0.44,
    cap: 40000,
    tone: "good"
  }, {
    n: "Kurv / EMS",
    gross: 7952,
    fees: 366,
    res: 795,
    net: 6791,
    pct: 4.60,
    appr: 91.8,
    cb: 0.67,
    cap: 25000,
    tone: "warn"
  }, {
    n: "Retired rail",
    gross: 0,
    fees: 0,
    res: 500,
    net: 0,
    pct: 0,
    appr: 0,
    cb: 0,
    cap: 0,
    tone: "mute"
  }],
  // ---------------------------------------------------------------- REVENUE
  revMonthly: [{
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
  channels: [{
    m: "Organic / direct",
    v: 18420,
    trust: "good"
  }, {
    m: "Email",
    v: 6890,
    trust: "low"
  }, {
    m: "Wholesale",
    v: 4120,
    trust: "mock"
  }, {
    m: "Creators",
    v: 400,
    trust: "low"
  }, {
    m: "Paid social",
    v: 0,
    trust: "good"
  }, {
    m: "Unattributed",
    v: 12282,
    trust: "none",
    tone: "bad"
  }],
  products: [{
    sku: "Dubai Chocolate",
    cat: "Chocolate",
    price: 69,
    cost: 6.72,
    basis: "measured",
    margin: 90.3,
    units: 142,
    rev: 9798,
    trend: [118, 126, 131, 138, 142]
  }, {
    sku: "Sea Salt Chocolate",
    cat: "Chocolate",
    price: 69,
    cost: 6.26,
    basis: "measured",
    margin: 90.9,
    units: 105,
    rev: 7245,
    trend: [96, 99, 103, 101, 105]
  }, {
    sku: "Strawberry Mango Gummies",
    cat: "Gummies",
    price: 69,
    cost: 10.00,
    basis: "placeholder",
    margin: null,
    units: 94,
    rev: 6486,
    trend: [71, 78, 84, 90, 94]
  }, {
    sku: "Matcha Chocolate",
    cat: "Chocolate",
    price: 69,
    cost: 7.25,
    basis: "measured",
    margin: 89.5,
    units: 80,
    rev: 5520,
    trend: [92, 88, 85, 82, 80]
  }, {
    sku: "Blue Raspberry Gummies",
    cat: "Gummies",
    price: 69,
    cost: 10.00,
    basis: "placeholder",
    margin: null,
    units: 77,
    rev: 5313,
    trend: [58, 64, 69, 74, 77]
  }, {
    sku: "Mint Chocolate",
    cat: "Chocolate",
    price: 69,
    cost: 6.91,
    basis: "measured",
    margin: 90.0,
    units: 62,
    rev: 4278,
    trend: [68, 66, 64, 63, 62]
  }, {
    sku: "Toffee Chocolate",
    cat: "Chocolate",
    price: 69,
    cost: 7.02,
    basis: "measured",
    margin: 89.8,
    units: 48,
    rev: 3312,
    trend: [52, 50, 49, 48, 48]
  }, {
    sku: "Espresso Chocolate",
    cat: "Chocolate",
    price: 69,
    cost: 6.88,
    basis: "measured",
    margin: 90.0,
    units: 41,
    rev: 2829,
    trend: [46, 44, 43, 42, 41]
  }, {
    sku: "Micro Caps",
    cat: "Capsules",
    price: null,
    cost: 10.00,
    basis: "placeholder",
    margin: null,
    units: 0,
    rev: 0,
    trend: [0, 0, 0, 0, 0]
  }],
  subs: {
    kpi: [{
      label: "Active subscribers",
      value: "1,842",
      sub: "end of period",
      tone: "ink",
      delta: -3.2
    }, {
      label: "Rebill rate",
      value: "74%",
      sub: "recovering from 27.3%",
      tone: "good",
      delta: 21.3
    }, {
      label: "Attach rate",
      value: "13.4%",
      sub: "of paid orders",
      tone: "warn",
      delta: 0.4
    }, {
      label: "Cycle-3 retention",
      value: "10.98%",
      sub: "nine in ten gone",
      tone: "bad",
      delta: -1.1
    }, {
      label: "Retry recovery",
      value: "0 / 10",
      sub: "attempts 2 and 3",
      tone: "bad"
    }, {
      label: "Churn, monthly",
      value: "8.6%",
      sub: "of active base",
      tone: "bad",
      delta: -0.8
    }],
    rebill: [{
      m: "Feb",
      v: 100
    }, {
      m: "Mar",
      v: 96
    }, {
      m: "Apr",
      v: 71
    }, {
      m: "May",
      v: 48
    }, {
      m: "Jun",
      v: 33
    }, {
      m: "Jul",
      v: 27.3
    }, {
      m: "Aug",
      v: 61
    }, {
      m: "Sep",
      v: 74
    }],
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
    }]
  },
  // ---------------------------------------------------------------- MARKETING
  ads: {
    kpi: [{
      label: "Blended ROAS",
      value: "\u2014",
      sub: "no spend to measure",
      tone: "mute"
    }, {
      label: "Ad spend · 30d",
      value: "$0",
      sub: "paused since August",
      tone: "mute"
    }, {
      label: "CAC",
      value: "\u2014",
      sub: "needs attribution",
      tone: "mute"
    }, {
      label: "Impressions",
      value: "0",
      sub: "all channels",
      tone: "mute"
    }, {
      label: "CTR",
      value: "0.00%",
      sub: "\u2014",
      tone: "mute"
    }, {
      label: "Planned Q4 budget",
      value: "$13,125",
      sub: "35% of sweep",
      tone: "violet"
    }],
    accounts: [{
      n: "Meta Business",
      id: "act_8841203",
      status: "Paused",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      leads: 0
    }, {
      n: "TikTok Ads",
      id: "act_5520918",
      status: "Not connected",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      leads: 0
    }, {
      n: "Google Ads",
      id: "act_2290471",
      status: "Not connected",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      leads: 0
    }],
    social: [{
      n: "Instagram",
      followers: "24.8K",
      growth: 1.9,
      posts: 12,
      eng: "3.4%",
      tone: "good"
    }, {
      n: "TikTok",
      followers: "11.2K",
      growth: 6.4,
      posts: 18,
      eng: "5.1%",
      tone: "good"
    }, {
      n: "YouTube",
      followers: "2.1K",
      growth: 0.4,
      posts: 3,
      eng: "1.8%",
      tone: "warn"
    }, {
      n: "X",
      followers: "1.4K",
      growth: -0.7,
      posts: 6,
      eng: "0.9%",
      tone: "bad"
    }]
  },
  // ---------------------------------------------------------------- OPS
  inventory: [{
    sku: "Dubai Chocolate",
    cat: "Chocolate",
    hand: 980,
    vel: 117,
    cover: 8,
    lead: 21,
    st: "critical",
    po: 61000,
    inc: true
  }, {
    sku: "Micro Caps",
    cat: "Capsules",
    hand: 0,
    vel: 0,
    cover: 0,
    lead: 30,
    st: "critical",
    po: 0,
    inc: false,
    note: "Never produced"
  }, {
    sku: "Strawberry Mango Gummies",
    cat: "Gummies",
    hand: 2210,
    vel: 104,
    cover: 21,
    lead: 24,
    st: "warning",
    po: 142000,
    inc: true
  }, {
    sku: "Sea Salt Chocolate",
    cat: "Chocolate",
    hand: 3100,
    vel: 92,
    cover: 34,
    lead: 18,
    st: "warning",
    po: 53000,
    inc: true
  }, {
    sku: "Mint Chocolate",
    cat: "Chocolate",
    hand: 5640,
    vel: 83,
    cover: 68,
    lead: 18,
    st: "healthy",
    po: 0,
    inc: false
  }, {
    sku: "Toffee Chocolate",
    cat: "Chocolate",
    hand: 3790,
    vel: 57,
    cover: 66,
    lead: 18,
    st: "healthy",
    po: 0,
    inc: false
  }, {
    sku: "Espresso Chocolate",
    cat: "Chocolate",
    hand: 4680,
    vel: 46,
    cover: 102,
    lead: 18,
    st: "healthy",
    po: 0,
    inc: false
  }, {
    sku: "Blue Raspberry Gummies",
    cat: "Gummies",
    hand: 4920,
    vel: 63,
    cover: 78,
    lead: 24,
    st: "healthy",
    po: 0,
    inc: false
  }, {
    sku: "Matcha Chocolate",
    cat: "Chocolate",
    hand: 8100,
    vel: 39,
    cover: 208,
    lead: 18,
    st: "over",
    po: 0,
    inc: false
  }],
  production: {
    runs: [{
      d: "Pending",
      product: "Dubai Chocolate",
      input: "\u2014",
      output: "\u2014",
      yield: null,
      cost: null,
      st: "scheduled"
    }, {
      d: "Aug 14",
      product: "Sea Salt Chocolate",
      input: "48 lb",
      output: "1,180 bars",
      yield: 92.4,
      cost: 6.26,
      st: "estimated"
    }, {
      d: "Jul 22",
      product: "Mint Chocolate",
      input: "41 lb",
      output: "980 bars",
      yield: 90.1,
      cost: 6.91,
      st: "estimated"
    }, {
      d: "Jul 03",
      product: "Matcha Chocolate",
      input: "38 lb",
      output: "860 bars",
      yield: 88.2,
      cost: 7.25,
      st: "estimated"
    }],
    rates: [{
      l: "Labour",
      v: "$25 / hr"
    }, {
      l: "Kitchen rent",
      v: "$2,200 / mo"
    }, {
      l: "Active ingredient",
      v: "$300 / lb"
    }, {
      l: "Delivery",
      v: "$150 / run"
    }]
  },
  suppliers: [{
    n: "LA Manufacturer",
    what: "Gummies and capsules",
    terms: "100% up front",
    lead: "24 days",
    spend: 142000,
    risk: "warn"
  }, {
    n: "Own kitchen",
    what: "All chocolate",
    terms: "n/a",
    lead: "18-21 days",
    spend: 26400,
    risk: "good"
  }, {
    n: "Ingredient supplier",
    what: "Active ingredient",
    terms: "Retail, no account",
    lead: "7 days",
    spend: 31200,
    risk: "bad"
  }, {
    n: "Packaging",
    what: "Boxes, labels, inserts",
    terms: "Net 0",
    lead: "14 days",
    spend: 14800,
    risk: "warn"
  }, {
    n: "3PL warehouse",
    what: "Pick, pack, ship",
    terms: "Monthly invoice",
    lead: "n/a",
    spend: 18900,
    risk: "good"
  }],
  // ---------------------------------------------------------------- GOALS
  goals: [{
    g: "Monthly revenue",
    now: "$46.8K",
    target: "$85K",
    pct: 55,
    tone: "warn",
    bench: 70,
    note: "Back to the November run rate, then past it"
  }, {
    g: "Fixed cost ratio",
    now: "30.0%",
    target: "15%",
    pct: 50,
    tone: "bad",
    bench: 100,
    note: "Benchmark for DTC is about 15% of revenue"
  }, {
    g: "Gross margin",
    now: "90%",
    target: "85%",
    pct: 100,
    tone: "good",
    bench: 88,
    note: "Already ahead. Protect it rather than chase it"
  }, {
    g: "Approval rate",
    now: "94.75%",
    target: "98%",
    pct: 77,
    tone: "warn",
    bench: 96,
    note: "Three points is about $18,000 a year"
  }, {
    g: "Rebill rate",
    now: "74%",
    target: "90%",
    pct: 82,
    tone: "warn",
    bench: 85,
    note: "Was 27.3% in July. Credentials restored"
  }, {
    g: "Subscription attach",
    now: "13.4%",
    target: "30%",
    pct: 45,
    tone: "bad",
    bench: 62,
    note: "Every point of attach compounds"
  }, {
    g: "Cycle-3 retention",
    now: "11.0%",
    target: "45%",
    pct: 24,
    tone: "bad",
    bench: 55,
    note: "The single weakest number in the business"
  }, {
    g: "Days of cover, worst SKU",
    now: "8d",
    target: "45d",
    pct: 18,
    tone: "bad",
    bench: 60,
    note: "Anything under lead time is a stockout waiting"
  }, {
    g: "Debt outstanding",
    now: "$251K",
    target: "$0",
    pct: 38,
    tone: "warn",
    bench: 50,
    note: "$33,000 paid down in the last month"
  }, {
    g: "Processes written",
    now: "0",
    target: "20",
    pct: 0,
    tone: "bad",
    bench: 0,
    note: "Nothing about how this runs is written down"
  }],
  // ---------------------------------------------------------------- TEAM
  org: {
    exec: [{
      n: "Damon B.",
      r: "Founder / CEO",
      tag: "CEO"
    }],
    leads: [{
      n: "Rebekka",
      r: "Content lead",
      team: "Marketing",
      count: 2
    }, {
      n: "Victor",
      r: "Developer",
      team: "Technology",
      count: 1
    }, {
      n: "Jose",
      r: "Production",
      team: "Kitchen",
      count: 2
    }, {
      n: "Sales rep",
      r: "Clinic channel",
      team: "Wholesale",
      count: 1
    }],
    teams: [{
      lead: "Rebekka",
      team: "Marketing",
      note: "Creator programme wound down. Seat being repointed.",
      people: ["Content freelancer", "Designer (hiring)"]
    }, {
      lead: "Victor",
      team: "Technology",
      note: "Direct contractor from Sep 1. Instructions route through DB.",
      people: ["Greg (OpFix)", "Everett (OpFix)"]
    }, {
      lead: "Jose",
      team: "Kitchen",
      note: "LA facility. Chocolate production.",
      people: ["Kitchen hand", "Packer"]
    }, {
      lead: "Sales rep",
      team: "Wholesale",
      note: "Commission only. Cold outbound to clinics.",
      people: ["Admin (hiring)"]
    }]
  },
  scorecards: [{
    n: "Damon B.",
    r: "Founder",
    metric: "Decisions routed through him weekly",
    now: "14",
    target: "< 5",
    st: "bad"
  }, {
    n: "Victor",
    r: "Developer",
    metric: "Fix items closed and verified",
    now: "11 / 21",
    target: "21",
    st: "good"
  }, {
    n: "Rebekka",
    r: "Content lead",
    metric: "Being repointed",
    now: "\u2014",
    target: "TBD",
    st: "mute"
  }, {
    n: "Jose",
    r: "Production",
    metric: "Runs logged with all fields",
    now: "0 / 30",
    target: "30",
    st: "bad"
  }, {
    n: "Sales rep",
    r: "Clinic channel",
    metric: "Clinic accounts opened",
    now: "0",
    target: "6",
    st: "bad"
  }, {
    n: "Support",
    r: "Customer support",
    metric: "First response time",
    now: "\u2014",
    target: "< 4h",
    st: "mute"
  }],
  tasks: {
    cols: [{
      k: "blocked",
      l: "Blocked",
      tone: "bad",
      items: [{
        t: "Warehouse system access",
        who: "DB",
        p: "High"
      }, {
        t: "Email platform access",
        who: "DB",
        p: "High"
      }, {
        t: "Attribution history export",
        who: "DB",
        p: "High"
      }]
    }, {
      k: "queue",
      l: "Queue",
      tone: "mute",
      items: [{
        t: "Move ingredients to wholesale accounts",
        who: "DB",
        p: "Med"
      }, {
        t: "Second card application",
        who: "DB",
        p: "Med"
      }, {
        t: "Clinic pricing sheet",
        who: "Sales",
        p: "Low"
      }, {
        t: "Retention offer copy",
        who: "Rebekka",
        p: "Med"
      }]
    }, {
      k: "doing",
      l: "In progress",
      tone: "accent",
      items: [{
        t: "First-order payment cascade",
        who: "Victor",
        p: "High"
      }, {
        t: "Attribution rebuild, 30 day window",
        who: "Victor",
        p: "High"
      }, {
        t: "Kitchen ledger rollout",
        who: "Jose",
        p: "High"
      }, {
        t: "Product page rebuild",
        who: "Designer",
        p: "Med"
      }]
    }, {
      k: "done",
      l: "Done",
      tone: "good",
      items: [{
        t: "Card data exposure closed",
        who: "Victor",
        p: "High"
      }, {
        t: "Security fix list cleared",
        who: "Victor",
        p: "High"
      }, {
        t: "Cost base cut by $14,810/mo",
        who: "DB",
        p: "High"
      }, {
        t: "Code moved to client ownership",
        who: "Victor",
        p: "Med"
      }]
    }]
  },
  vault: [{
    n: "Supplier agreements",
    c: 6,
    tone: "accent",
    note: "Manufacturer, packaging, 3PL"
  }, {
    n: "Processor agreements",
    c: 4,
    tone: "warn",
    note: "Includes volume caps and reserve terms"
  }, {
    n: "Entity and formation",
    c: 9,
    tone: "bad",
    note: "Restricted"
  }, {
    n: "Insurance",
    c: 3,
    tone: "info",
    note: "Product liability, general"
  }, {
    n: "Trademark and IP",
    c: 5,
    tone: "violet",
    note: "Filed and pending"
  }, {
    n: "Lab reports and COAs",
    c: 28,
    tone: "good",
    note: "Per batch, public facing"
  }],
  drive: [{
    n: "Financial reconstruction",
    t: "Spreadsheet",
    d: "Sep 8",
    size: "2.4 MB"
  }, {
    n: "Kitchen ledger",
    t: "Spreadsheet",
    d: "Aug 27",
    size: "180 KB"
  }, {
    n: "Tech stack and vendors",
    t: "Spreadsheet",
    d: "Sep 2",
    size: "340 KB"
  }, {
    n: "Build plan",
    t: "Document",
    d: "Aug 26",
    size: "1.1 MB"
  }, {
    n: "Roles and responsibilities",
    t: "Document",
    d: "Sep 2",
    size: "96 KB"
  }, {
    n: "Brand assets",
    t: "Folder",
    d: "Jul 14",
    size: "142 MB"
  }],
  agents: [{
    n: "Support agent",
    s: "planned",
    d: "Answers order status, shipping and refund questions from the order platform and the 3PL, escalating anything it cannot resolve.",
    impact: "Halves support load"
  }, {
    n: "Content agent",
    s: "planned",
    d: "Drafts product copy, email sequences and social posts against the brand voice and the claims policy.",
    impact: "Replaces a freelancer"
  }, {
    n: "Inventory agent",
    s: "planned",
    d: "Watches days of cover per product and raises a purchase order before anything crosses its lead time.",
    impact: "Ends stockouts"
  }, {
    n: "Reconciliation agent",
    s: "planned",
    d: "Matches processor settlements to bank deposits daily and flags anything that does not tie.",
    impact: "Removes manual close work"
  }, {
    n: "Creator agent",
    s: "shelved",
    d: "Managed creator onboarding, link generation and payout calculation.",
    impact: "Programme wound down"
  }],
  dataHealth: [{
    n: "Mercury",
    s: "live",
    d: "Operating account and buckets"
  }, {
    n: "BlueBanc",
    s: "live",
    d: "Settlement account"
  }, {
    n: "Xero",
    s: "live",
    d: "78 accounts, all coded"
  }, {
    n: "Order platform",
    s: "live",
    d: "Orders, subscriptions, cascade"
  }, {
    n: "Affiliate platform",
    s: "live",
    d: "Access received 24 August"
  }, {
    n: "Chase card",
    s: "partial",
    d: "Feed not connected"
  }, {
    n: "Processors",
    s: "partial",
    d: "Two of three self-serve"
  }, {
    n: "Warehouse",
    s: "blocked",
    d: "Access outstanding"
  }, {
    n: "Email platform",
    s: "blocked",
    d: "Access outstanding"
  }, {
    n: "Attribution history",
    s: "blocked",
    d: "Export outstanding"
  }, {
    n: "Kitchen ledger",
    s: "waiting",
    d: "Built, waiting on first run"
  }, {
    n: "Site analytics",
    s: "partial",
    d: "Being installed"
  }],
  reliability: [{
    a: "Cash position",
    l: "high",
    n: "Reconstructed from bank and card statements"
  }, {
    a: "Fixed costs",
    l: "high",
    n: "Verified line by line"
  }, {
    a: "Debt schedule",
    l: "high",
    n: "From the signed agreement"
  }, {
    a: "Revenue by rail",
    l: "medium",
    n: "Two of three portals self-serve"
  }, {
    a: "Approval rates",
    l: "medium",
    n: "Gateway reports, not re-measured"
  }, {
    a: "Margin per unit",
    l: "low",
    n: "Placeholder cost on six of ten products"
  }, {
    a: "Inventory cover",
    l: "low",
    n: "Needs warehouse access"
  }, {
    a: "Channel revenue",
    l: "none",
    n: "Attribution broken since April"
  }, {
    a: "Lifetime value",
    l: "none",
    n: "Needs attribution first"
  }]
};

/* ==== ui.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ui.jsx — primitives. Pure SVG charts, no chart library.
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
const fmt = {
  usd: (n, d = 0) => n == null ? "\u2014" : "$" + Number(n).toLocaleString("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  }),
  k: n => {
    if (n == null) return "\u2014";
    const a = Math.abs(n);
    if (a >= 1e6) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1e6).toFixed(2) + "M";
    if (a >= 1000) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1000).toFixed(a >= 10000 ? 0 : 1) + "K";
    return (n < 0 ? "-$" : "$") + Math.abs(Math.round(n));
  },
  pct: (n, d = 1) => n == null ? "\u2014" : Number(n).toFixed(d) + "%",
  n: n => n == null ? "\u2014" : Number(n).toLocaleString("en-US")
};
const T = t => ({
  good: "var(--good)",
  warn: "var(--warn)",
  bad: "var(--bad)",
  info: "var(--info)",
  accent: "var(--accent)",
  violet: "var(--violet)",
  mute: "var(--ink-mute)",
  ink: "var(--ink)"
})[t] || "var(--ink)";
const TT = t => ({
  good: "var(--good-tint)",
  warn: "var(--warn-tint)",
  bad: "var(--bad-tint)",
  info: "var(--info-tint)",
  accent: "var(--accent-tint)",
  violet: "var(--violet-tint)"
})[t] || "var(--surface-3)";
function Help({
  text
}) {
  if (!text) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "help"
  }, "?", /*#__PURE__*/React.createElement("span", {
    className: "hb"
  }, text));
}
function SecLabel({
  icon,
  children,
  help,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sec-label",
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, icon && /*#__PURE__*/React.createElement(Ico, {
    n: icon,
    s: 13
  }), children, /*#__PURE__*/React.createElement(Help, {
    text: help
  })), right && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 400,
      letterSpacing: 0,
      textTransform: "none",
      color: "var(--ink-mute)"
    }
  }, right));
}
function Card({
  children,
  style,
  pad = 18,
  hover,
  ...r
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "card" + (hover ? " card-h" : ""),
    style: {
      padding: pad,
      ...style
    }
  }, r), children);
}
function G({
  c = 4,
  gap = 11,
  children,
  style,
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-g": name || String(c),
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${c},minmax(0,1fr))`,
      gap,
      ...style
    }
  }, children);
}
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
      onClick: () => onChange && onChange(v)
    }, l);
  }));
}
function Badge({
  children,
  tone = "mute",
  solid,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: solid ? T(tone) : TT(tone),
      color: solid ? "#fff" : T(tone),
      border: solid ? "none" : `1px solid ${T(tone)}2E`,
      borderRadius: 999,
      padding: "2px 8px",
      fontSize: 10.5,
      fontWeight: 650,
      whiteSpace: "nowrap",
      letterSpacing: "0.01em",
      ...style
    }
  }, children);
}
function Spark({
  data,
  tone = "accent",
  h = 30,
  fill = true
}) {
  const lo = Math.min(...data),
    hi = Math.max(...data),
    r = hi - lo || 1;
  const pts = data.map((v, i) => `${i / (data.length - 1) * 100},${28 - (v - lo) / r * 26}`).join(" ");
  const id = useMemo(() => "s" + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 30",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: h,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: T(tone),
    stopOpacity: "0.28"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: T(tone),
    stopOpacity: "0"
  }))), fill && /*#__PURE__*/React.createElement("polygon", {
    points: `0,30 ${pts} 100,30`,
    fill: `url(#${id})`
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: T(tone),
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }));
}
function KPI({
  label,
  value,
  sub,
  delta,
  tone = "ink",
  help,
  spark,
  sparkTone,
  onClick,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kpi" + (onClick ? " kpi-click" : ""),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, label, /*#__PURE__*/React.createElement(Help, {
    text: help
  })), badge), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 7,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 23,
      fontWeight: 600,
      letterSpacing: "-0.025em",
      color: T(tone),
      lineHeight: 1.05
    }
  }, value), delta != null && delta !== 0 && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10.5,
      fontWeight: 650,
      color: delta > 0 ? "var(--good)" : "var(--bad)"
    }
  }, delta > 0 ? "\u2197" : "\u2198", Math.abs(delta), "%")), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, sub), spark && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    data: spark,
    tone: sparkTone || tone,
    h: 26
  })));
}
function Bar({
  pct,
  tone = "accent",
  h = 5,
  style,
  track = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: h,
      borderRadius: 99,
      background: track ? "var(--surface-3)" : "transparent",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(100, pct || 0)) + "%",
      height: "100%",
      borderRadius: 99,
      background: T(tone),
      transition: "width 700ms cubic-bezier(.22,.68,0,1)"
    }
  }));
}

/* funnel row, Impruvu style: two-tone bar with count and share */
function FunnelRow({
  label,
  value,
  share,
  pct,
  a = "accent",
  b = "good",
  split = 0.55,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, label), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, fmt.n(value)), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginLeft: 7
    }
  }, note))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 9,
      borderRadius: 99,
      overflow: "hidden",
      background: "var(--surface-3)",
      width: pct + "%",
      minWidth: "3%",
      transition: "width 700ms cubic-bezier(.22,.68,0,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: split * 100 + "%",
      background: T(a)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: T(b)
    }
  })));
}
function BarChart({
  data,
  h = 150,
  tone = "accent",
  vf = fmt.k,
  axis = true
}) {
  const max = Math.max(...data.map(d => Math.abs(d.v))) || 1;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 5,
      height: h,
      borderBottom: "1px solid var(--rule)"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%"
    },
    title: `${d.m}: ${vf(d.v)}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: Math.abs(d.v) / max * 100 + "%",
      background: T(d.tone || tone),
      borderRadius: "3px 3px 0 0",
      minHeight: 2,
      opacity: d.dim ? 0.35 : 1,
      transition: "height 700ms cubic-bezier(.22,.68,0,1)"
    }
  })))), axis && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      marginTop: 6
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, d.m))));
}
function HBars({
  data,
  vf = fmt.k,
  tone = "accent",
  labelW = 150,
  showPct
}) {
  const max = Math.max(...data.map(d => Math.abs(d.v))) || 1;
  const tot = data.reduce((s, d) => s + Math.abs(d.v), 0) || 1;
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
      gridTemplateColumns: `${labelW}px 1fr auto`,
      gap: 11,
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
  }, d.m), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-3)",
      borderRadius: 4,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.abs(d.v) / max * 100 + "%",
      height: "100%",
      background: T(d.tone || tone),
      borderRadius: 4,
      transition: "width 700ms cubic-bezier(.22,.68,0,1)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, vf(d.v)), showPct && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)",
      marginLeft: 6
    }
  }, (Math.abs(d.v) / tot * 100).toFixed(0), "%")))));
}
function Line({
  data,
  h = 170,
  tone = "good",
  vf = v => v,
  target,
  tLabel,
  yMin,
  yMax
}) {
  const vals = data.map(d => d.v);
  const lo = yMin != null ? yMin : Math.min(...vals, target ?? Infinity) * 0.9;
  const hi = yMax != null ? yMax : Math.max(...vals, target ?? -Infinity) * 1.08;
  const X = i => i / (data.length - 1) * 100,
    Y = v => 100 - (v - lo) / (hi - lo) * 100;
  const pts = vals.map((v, i) => `${X(i)},${Y(v)}`).join(" ");
  const id = useMemo(() => "l" + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: T(tone),
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: T(tone),
    stopOpacity: "0"
  }))), [0, 25, 50, 75, 100].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    y1: g,
    x2: "100",
    y2: g,
    stroke: "var(--rule-soft)",
    strokeWidth: "0.4",
    vectorEffect: "non-scaling-stroke"
  })), target != null && /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: Y(target),
    x2: "100",
    y2: Y(target),
    stroke: "var(--warn)",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: `0,100 ${pts} 100,100`,
    fill: `url(#${id})`
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: T(tone),
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }), vals.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: X(i),
    cy: Y(v),
    r: "2.2",
    fill: "var(--surface)",
    stroke: T(tone),
    strokeWidth: "1.6",
    vectorEffect: "non-scaling-stroke"
  }))), target != null && tLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      top: Y(target) + "%",
      transform: "translateY(-130%)",
      fontSize: 9.5,
      color: "var(--warn)",
      fontWeight: 600
    }
  }, tLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 7
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, d.m))));
}
function Donut({
  v,
  max = 100,
  size = 104,
  sw = 9,
  tone = "accent",
  label,
  sub
}) {
  const r = (size - sw) / 2,
    c = 2 * Math.PI * r,
    p = Math.max(0, Math.min(1, v / max));
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
    stroke: "var(--surface-3)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: T(tone),
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeDasharray: `${c * p} ${c}`,
    style: {
      transition: "stroke-dasharray 800ms cubic-bezier(.22,.68,0,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--display)",
      fontSize: size / 5,
      fontWeight: 600,
      letterSpacing: "-0.02em"
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, sub)));
}

/* goal row: current vs target with a benchmark marker */
function GoalRow({
  label,
  now,
  target,
  unit = "",
  pct,
  tone,
  note,
  bench
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 0",
      borderBottom: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 7,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T(tone)
    }
  }, now, unit), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "target ", target, unit))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    pct: pct,
    tone: tone,
    h: 7
  }), bench != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: bench + "%",
      top: -2,
      bottom: -2,
      width: 2,
      background: "var(--ink-soft)",
      borderRadius: 2
    },
    title: "benchmark"
  })), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 6
    }
  }, note));
}
function Note({
  children,
  tone = "info",
  icon = "i"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      background: TT(tone),
      border: `1px solid ${T(tone)}26`,
      borderRadius: "var(--r-md)",
      padding: "13px 15px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 99,
      background: T(tone),
      color: "#fff",
      fontSize: 10,
      fontWeight: 800,
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, children));
}
function PageHead({
  title,
  sub,
  right,
  meta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 18,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: "1 1 300px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      marginBottom: 5
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)"
    }
  }, sub), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, meta)), right);
}
function Empty({
  title,
  note,
  tag = "Planned"
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 34,
    style: {
      borderStyle: "dashed",
      background: "transparent",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mute",
    style: {
      marginBottom: 12
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      marginBottom: 7
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      maxWidth: 460,
      margin: "0 auto",
      lineHeight: 1.6
    }
  }, note));
}
function Avatar({
  name,
  size = 26,
  tone = "accent"
}) {
  const init = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 99,
      background: TT(tone),
      color: T(tone),
      display: "grid",
      placeItems: "center",
      fontSize: size * 0.38,
      fontWeight: 700,
      flexShrink: 0
    }
  }, init);
}
function Ico({
  n,
  s = 15
}) {
  const p = {
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 10.5L12 3l9 7.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.5 9.5V21h13V9.5"
    })),
    exec: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
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
    money: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2.5",
      y: "6",
      width: "19",
      height: "13",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 10.5h19M17 15h.01"
    })),
    rev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 7h6v6"
    })),
    mkt: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l16-7v16L3 13z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 12.5V19"
    })),
    ops: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 8l-9-5-9 5 9 5 9-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 8v8l9 5 9-5V8"
    })),
    agents: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "7",
      width: "16",
      height: "12",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3v4M9 12h.01M15 12h.01M9.5 16h5"
    })),
    team: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 20c0-3.5 2.9-5.8 6.5-5.8s6.5 2.3 6.5 5.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 5.6a3 3 0 010 5.3M18.5 20c0-2.3-.8-4.2-2.2-5.4"
    })),
    admin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.6 1.6 0 007 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H1a2 2 0 110-4h.1A1.6 1.6 0 002.6 7a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H7a1.6 1.6 0 001-1.5V1a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V7a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z"
    })),
    dollar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2v20M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.6 7 6.5s2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3"
    })),
    funnel: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 4h18l-7 8v7l-4 2v-9z"
    })),
    pulse: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2.5 12h4L9 5l4 14 2.5-7h6"
    })),
    box: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 8l-9-5-9 5 9 5 9-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 8v8l9 5 9-5V8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 13v8"
    })),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l9.5 17H2.5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9.5v4M12 17h.01"
    })),
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.3"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 20V10M12 20V4M19 20v-7"
    })),
    lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "10",
      width: "16",
      height: "11",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10V7a4 4 0 018 0v3"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5.5l3.5 2"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 8.5a6 6 0 10-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14.5 18 8.5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.7 20a2 2 0 01-3.4 0"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 20l-4-4"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M3 12h18M3 18h18"
    })),
    chev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6"
    })),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 3.6-7 8-7s8 3 8 7"
    })),
    file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v5h5"
    })),
    truck: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "6.5",
      width: "13",
      height: "9",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 9.5h4l3 3v3h-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "2"
    })),
    factory: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V10l5.5 3.5V10L14 13.5V7l7 4v10z"
    }))
  }[n];
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, p);
}

/* ==== pages-1.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-1.jsx — Boardroom, Goals, Org, Project Board, Money pages

/* ============================== BOARDROOM ============================== */
function Boardroom({
  go,
  period
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Boardroom",
    sub: `The whole business in one view · ${period}`,
    meta: "Live across cash, revenue, margin, subscriptions, inventory and the team."
  }), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "dollar",
    help: "The seven numbers that describe whether this business is working."
  }, "Unit economics \xB7 ", period), /*#__PURE__*/React.createElement(G, {
    c: 7,
    name: "7",
    style: {
      marginBottom: 26
    }
  }, D.unit.map(u => /*#__PURE__*/React.createElement(KPI, _extends({
    key: u.k
  }, u, {
    onClick: () => go(u.k === "cash" || u.k === "debt" ? "cash" : u.k === "cm" || u.k === "burn" ? "pl" : u.k === "appr" ? "rails" : "revenue")
  })))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel",
    help: "Where people fall out between landing on the site and rebilling a third time.",
    right: "30 day window \xB7 site to third rebill"
  }, "The funnel \xB7 ", period), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 26
    },
    pad: 20
  }, D.funnel.map((f, i) => /*#__PURE__*/React.createElement(FunnelRow, {
    key: f.label,
    label: f.label,
    value: f.v,
    pct: f.pct,
    note: f.note,
    a: i < 3 ? "accent" : i < 5 ? "warn" : "bad",
    b: i < 3 ? "info" : i < 5 ? "warn" : "bad",
    split: 0.62
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 6,
      paddingTop: 13,
      borderTop: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "The steep drop is between paid order and subscription. Attach at 13.4% is where the compounding is lost."))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16,
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "live"
  }, "Today on the floor"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 14
  }, D.today.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 3
    }
  }, t.l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(t.tone || "ink")
    }
  }, t.v))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "since acquisition"
  }, "To date"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 14
  }, D.toDate.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 3
    }
  }, t.l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(t.tone || "ink")
    }
  }, t.v)))))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.5fr 1fr",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "nine months"
  }, "Revenue trend"), /*#__PURE__*/React.createElement(BarChart, {
    data: D.revMonthly.map((r, i) => ({
      ...r,
      tone: i === D.revMonthly.length - 1 ? "accent" : "info"
    })),
    h: 168
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 12
    }
  }, "Down a third since November. Revenue per shipment fell from $195 to $121 with volume flat.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: "Mercury + BlueBanc"
  }, "Cash position"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    v: 40347,
    max: 100000,
    size: 96,
    tone: "warn",
    label: "$40K",
    sub: "on hand"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minWidth: 0
    }
  }, [["Operating floor", "$22,500", "accent"], ["Free above floor", "$17,847", "good"], ["Card headroom", "$23,619", "info"]].map(([l, v, t]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: T(t)
    }
  }, v))))), /*#__PURE__*/React.createElement(Line, {
    data: D.cashTrail,
    h: 90,
    tone: "warn"
  }))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "alert",
    help: "Things worth a look. Not a task list, just what the numbers are flagging.",
    right: "6 items"
  }, "Action and watch items"), /*#__PURE__*/React.createElement(Card, {
    pad: 18
  }, D.attention.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      padding: "10px 0",
      borderBottom: i < D.attention.length - 1 ? "1px solid var(--rule-soft)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(a.tone),
      marginTop: 7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, a.t)))));
}

/* ============================== GOALS ============================== */
function Goals({
  period
}) {
  const hit = D.goals.filter(g => g.pct >= 90).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Goals and targets",
    sub: "Where every number sits against where it should sit.",
    meta: "The grey marker on each bar is the industry benchmark, not your target."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Goals on target",
    value: `${hit} of ${D.goals.length}`,
    tone: hit > 4 ? "good" : "warn",
    sub: "at or above 90%"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Furthest behind",
    value: "Cycle-3 retention",
    tone: "bad",
    sub: "11% against a 45% target"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Already ahead",
    value: "Gross margin",
    tone: "good",
    sub: "90% against 85%"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Biggest dollar gap",
    value: "$38K / mo",
    tone: "warn",
    sub: "revenue against target"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 22
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target",
    help: "Current against target, with the benchmark marked."
  }, "Scorecard"), D.goals.map(g => /*#__PURE__*/React.createElement(GoalRow, {
    key: g.g,
    label: g.g,
    now: g.now,
    target: g.target,
    pct: g.pct,
    tone: g.tone,
    note: g.note,
    bench: g.bench
  }))));
}

/* ============================== ORG ============================== */
function Org() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Organisation",
    sub: "Who does what, and who it routes through.",
    meta: "Three full time, plus contractors and two open seats."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label",
    style: {
      justifyContent: "center"
    }
  }, "Founder"), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      maxWidth: 280,
      margin: "0 auto",
      borderColor: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Damon B",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, "Damon B."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--accent)"
    }
  }, "Founder / CEO"), /*#__PURE__*/React.createElement(Badge, {
    tone: "bad"
  }, "Every decision routes here")))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team",
    right: "4 teams"
  }, "Teams and reporting"), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 14,
    style: {
      marginBottom: 20
    }
  }, D.org.teams.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.team,
    pad: 18,
    hover: true,
    style: {
      borderLeft: "3px solid var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.lead,
    size: 32
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, t.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--accent)"
    }
  }, t.team))), /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, t.people.length + 1, " people")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      marginBottom: 12
    }
  }, t.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7
    }
  }, t.people.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: 99,
      padding: "4px 10px 4px 4px",
      fontSize: 11.5
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p,
    size: 19,
    tone: "mute"
  }), p)))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Nothing about how this business runs is written down and no role carries a number yet. That is the single biggest structural risk here, bigger than any individual metric on this dashboard."));
}

/* ============================== SCORECARDS ============================== */
function Scorecards() {
  const tone = {
    good: "good",
    bad: "bad",
    mute: "mute"
  };
  const lab = {
    good: "On track",
    bad: "At risk",
    mute: "Not set"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Role scorecards",
    sub: "One number per seat, visible to the person being measured.",
    meta: "A scorecard nobody can see is a report about them, not a tool for them."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 0
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
  }, "Target"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, D.scorecards.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: s.n,
    size: 26,
    tone: s.st === "bad" ? "bad" : "accent"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, s.n))), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)"
    }
  }, s.r), /*#__PURE__*/React.createElement("td", null, s.metric), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, s.now), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, s.target), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: tone[s.st]
  }, lab[s.st])))))))));
}

/* ============================== PROJECT BOARD ============================== */
function Board() {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Project board",
    sub: "What's moving, what's stuck, and who has it.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "all",
        l: "All"
      }, {
        v: "mine",
        l: "Mine"
      }],
      value: "all",
      onChange: () => {}
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 13
  }, D.tasks.cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 4px 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: T(col.tone)
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(col.tone)
    }
  }), col.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, col.items.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, col.items.map((it, i) => {
    const id = col.k + i,
      isOpen = open === id;
    return /*#__PURE__*/React.createElement(Card, {
      key: id,
      pad: 13,
      hover: true,
      onClick: () => setOpen(isOpen ? null : id),
      style: {
        cursor: "pointer",
        borderLeft: `3px solid ${T(col.tone)}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 500,
        marginBottom: 8,
        lineHeight: 1.4
      }
    }, it.t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        color: "var(--ink-mute)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: it.who,
      size: 18,
      tone: "mute"
    }), it.who), /*#__PURE__*/React.createElement(Badge, {
      tone: it.p === "High" ? "bad" : it.p === "Med" ? "warn" : "mute"
    }, it.p)), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: "var(--ink-soft)",
        marginTop: 10,
        paddingTop: 10,
        borderTop: "1px solid var(--rule-soft)"
      }
    }, "Opened 4 days ago. No blockers recorded. Click again to collapse."));
  }))))));
}

/* ============================== CASH ============================== */
function Cash() {
  const [v, setV] = useState("buckets");
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cash and buckets",
    sub: "What's spendable, and where every dollar routes on the way in.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "buckets",
        l: "Buckets"
      }, {
        v: "accounts",
        l: "Accounts"
      }, {
        v: "flow",
        l: "Waterfall"
      }],
      value: v,
      onChange: setV
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Cash on hand",
    value: "$40,347",
    tone: "ink",
    sub: "two banks",
    delta: -37.2,
    help: "Mercury plus BlueBanc."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Operating floor",
    value: "$22,500",
    tone: "accent",
    sub: "1.25 months of cost",
    help: "The number operating never drops below."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Free above floor",
    value: "$17,847",
    tone: "good",
    sub: "what buckets can take"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Card headroom",
    value: "$23,619",
    tone: "info",
    sub: "49% utilised",
    delta: 4623
  })), v === "buckets" && /*#__PURE__*/React.createElement(G, {
    c: 5,
    name: "5",
    gap: 13,
    style: {
      marginBottom: 24
    }
  }, D.buckets.map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.n,
    pad: 16,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, b.n), /*#__PURE__*/React.createElement(Badge, {
    tone: b.tone
  }, b.pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(b.tone)
    }
  }, fmt.usd(b.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginBottom: 9
    }
  }, "of ", fmt.usd(b.target)), /*#__PURE__*/React.createElement(Bar, {
    pct: b.v / b.target * 100,
    tone: b.tone
  })))), v === "accounts" && /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "Code"), /*#__PURE__*/React.createElement("th", null, "What it does"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Balance"), /*#__PURE__*/React.createElement("th", null, "Share"))), /*#__PURE__*/React.createElement("tbody", null, D.accounts.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, a.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, a.c), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, a.role), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: a.v ? T(a.tone) : "var(--ink-mute)"
    }
  }, fmt.usd(a.v)), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 130
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    pct: a.v / 40347 * 100,
    tone: a.tone
  })))))))), v === "flow" && /*#__PURE__*/React.createElement(Card, {
    pad: 24,
    style: {
      marginBottom: 24
    }
  }, [{
    l: "Money settles in",
    v: "$46,814",
    t: "info",
    d: "All four rails land in BlueBanc, then sweep to Mercury"
  }, {
    l: "Operating fills to the floor",
    v: "$22,500",
    t: "accent",
    d: "Rent, payroll, software, support"
  }, {
    l: "Everything above sweeps",
    v: "$24,314",
    t: "good",
    d: "Splits five ways on the percentages you set"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "15px 17px",
      background: TT(r.t),
      borderRadius: "var(--r-md)",
      border: `1px solid ${T(r.t)}26`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      marginBottom: 3
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, r.d)), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: T(r.t)
    }
  }, r.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--ink-mute)",
      padding: "5px 0"
    }
  }, "\u2193"))), /*#__PURE__*/React.createElement(G, {
    c: 5,
    name: "5",
    gap: 9
  }, D.buckets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.n,
    style: {
      padding: "13px 11px",
      background: "var(--surface-3)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--rule)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 5
    }
  }, b.n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: T(b.tone)
    }
  }, b.pct, "%"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 3
    }
  }, fmt.usd(b.target)))))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.3fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "seven months"
  }, "Cash trail"), /*#__PURE__*/React.createElement(Line, {
    data: D.cashTrail,
    h: 170,
    tone: "warn",
    vf: fmt.k
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock",
    right: "next 30 days"
  }, "Committed outflows"), [["Next 7 days", 6420, "warn", "Rent, software, support"], ["8 to 14 days", 3100, "info", "3PL invoice, ingredients"], ["15 to 30 days", 9481, "bad", "Buyout payment Oct 1"]].map(([l, v, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: T(t)
    }
  }, fmt.usd(v))), /*#__PURE__*/React.createElement(Bar, {
    pct: v / 19001 * 100,
    tone: t
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, d))))));
}

/* ============================== P&L ============================== */
function PL() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Profit and loss",
    sub: "The whole P&L in four lines, against where a healthy DTC business sits.",
    meta: "Cost of delivery, marketing, OPEX, profit. Nothing else needs to be on this page."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
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
  }, "% of revenue"), /*#__PURE__*/React.createElement("th", null, "Against benchmark"), /*#__PURE__*/React.createElement("th", null, "Benchmark"), /*#__PURE__*/React.createElement("th", null, "What's in it"))), /*#__PURE__*/React.createElement("tbody", null, D.pl.map(r => /*#__PURE__*/React.createElement("tr", {
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
  }, fmt.usd(r.v)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: T(r.tone)
    }
  }, r.pct ? fmt.pct(r.pct) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 150
    }
  }, r.bench && /*#__PURE__*/React.createElement(Bar, {
    pct: Math.min(r.pct * 2, 100),
    tone: r.tone
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 12
    }
  }, r.bench || "\u2014"), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, r.d || "\u2014"))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, "Your fixed operating cost is 30% of revenue. A healthy DTC business runs near 15%. That gap is about $7,000 a month and it is the largest single lever left on the cost side."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev"
  }, "Contribution margin"), /*#__PURE__*/React.createElement(Line, {
    data: [{
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
    tone: "good",
    vf: fmt.k,
    h: 175
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart"
  }, "Fixed cost, monthly"), /*#__PURE__*/React.createElement(BarChart, {
    data: [{
      m: "Jun",
      v: 28860,
      tone: "bad"
    }, {
      m: "Jul",
      v: 28860,
      tone: "bad"
    }, {
      m: "Aug",
      v: 21400,
      tone: "warn"
    }, {
      m: "Sep",
      v: 14050,
      tone: "good"
    }, {
      m: "Oct",
      v: 11050,
      tone: "good",
      dim: true
    }],
    h: 175
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "October is projected once email moves."))));
}

/* ============================== DEBT ============================== */
function Debt() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Debt and obligations",
    sub: "What's owed, to whom, and when it lands."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total owed",
    value: "$251,525",
    tone: "ink",
    delta: -11.6,
    sub: "down $33K in 30 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Next payment",
    value: "$9,481",
    tone: "warn",
    sub: "Oct 1 \xB7 from debt bucket"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Card utilisation",
    value: "49%",
    tone: "warn",
    sub: "$23,081 of $46,700"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Payments remaining",
    value: "8 of 9",
    tone: "ink",
    sub: "through May 2027"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.3fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money"
  }, "What you owe"), D.debt.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.n,
    style: {
      marginBottom: 16
    }
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
  }, d.n), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T(d.tone)
    }
  }, fmt.usd(d.v))), /*#__PURE__*/React.createElement(Bar, {
    pct: d.v / 251525 * 100,
    tone: d.tone
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, d.note)))), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock"
  }, "Buyout schedule")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Funded from"))), /*#__PURE__*/React.createElement("tbody", null, D.schedule.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.d,
    style: {
      opacity: s.s === "planned" ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: s.s === "next" ? 600 : 400
    }
  }, s.d), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(s.v, 2)), /*#__PURE__*/React.createElement("td", null, s.s === "paid" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Paid") : s.s === "next" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "warn",
    solid: true
  }, "Next") : /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "Planned")), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "Debt service bucket")))))))));
}

/* ============================== RAILS ============================== */
function Rails() {
  const tg = D.rails.reduce((s, r) => s + r.gross, 0),
    tf = D.rails.reduce((s, r) => s + r.fees, 0),
    tr = D.rails.reduce((s, r) => s + r.res, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Payment rails",
    sub: "All four processors, gross in, fees out, net to bank.",
    meta: "Nothing hides inside a deposit."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Gross",
    value: fmt.usd(tg),
    tone: "ink",
    sub: "30 days, all rails"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Processing cost",
    value: fmt.usd(tf),
    tone: "bad",
    sub: fmt.pct(tf / tg * 100, 2) + " all in",
    help: "Against a 1.5% discount rate. The gap is interchange."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Held in reserve",
    value: fmt.usd(tr),
    tone: "warn",
    sub: "never released"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Net to bank",
    value: fmt.usd(tg - tf - tr),
    tone: "good",
    sub: "what actually lands"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
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
  }, "Chargeback"), /*#__PURE__*/React.createElement("th", null, "Volume against cap"))), /*#__PURE__*/React.createElement("tbody", null, D.rails.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.gross)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--bad)"
    }
  }, r.fees ? "-" + fmt.usd(r.fees) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.res ? "var(--warn)" : "var(--ink-mute)"
    }
  }, r.res ? "-" + fmt.usd(r.res) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, fmt.usd(r.net)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.pct > 4.5 ? "var(--bad)" : "var(--warn)"
    }
  }, r.pct ? fmt.pct(r.pct, 2) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.appr >= 95 ? "var(--good)" : r.appr >= 92 ? "var(--warn)" : r.appr ? "var(--bad)" : "var(--ink-mute)"
    }
  }, r.appr ? fmt.pct(r.appr) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cb ? fmt.pct(r.cb, 2) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 150
    }
  }, r.cap ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Bar, {
    pct: r.gross / r.cap * 100,
    tone: r.gross / r.cap > 0.8 ? "bad" : r.gross / r.cap > 0.6 ? "warn" : "good"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, fmt.k(r.gross), " of ", fmt.k(r.cap))) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11
    }
  }, "\\u2014")))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "The Kurv rail is capped at $25,000 in any 30 day period, contractual, with termination rights on breach. Across all rails you top out near $125,000 a month. A $3M run rate needs about $250,000."));
}

/* ==== pages-2.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-2.jsx — Revenue, Products, Subscriptions, Wholesale, Attribution, Ads,
// Social, Inventory, Production, Suppliers, Agents, Vault, Drive, Data Health

/* ============================== REVENUE ============================== */
function Revenue() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Revenue",
    sub: "Where the money comes from, and how much of it you can actually attribute."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Revenue \xB7 30d",
    value: "$46,814",
    tone: "ink",
    delta: -4.1,
    spark: D.revMonthly.map(r => r.v)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Orders",
    value: "223",
    tone: "ink",
    sub: "on platform",
    delta: 1.8
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Average order",
    value: "$189",
    tone: "ink",
    delta: 2.1,
    help: "Revenue over orders that touched the platform."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Unattributed",
    value: "26.2%",
    tone: "bad",
    sub: "$12,282 of revenue",
    help: "Orders without an affiliate land on an internal test account."
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.4fr 1fr",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "nine months"
  }, "Monthly revenue"), /*#__PURE__*/React.createElement(BarChart, {
    data: D.revMonthly.map((r, i) => ({
      ...r,
      tone: i === 8 ? "accent" : "info"
    })),
    h: 185
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel",
    help: "Three of these can't be trusted until attribution is rebuilt."
  }, "By channel"), /*#__PURE__*/React.createElement(HBars, {
    data: D.channels,
    labelW: 120,
    showPct: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: "1px solid var(--rule-soft)",
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, [["good", "Trusted"], ["mock", "Shape only"], ["none", "Not usable"]].map(([k, l]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(k === "good" ? "good" : k === "mock" ? "info" : "bad")
    }
  }), l))))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "box",
    right: "July"
  }, "Shipments against orders"), /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 13
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total shipments",
    value: "348",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Touched the platform",
    value: "223",
    tone: "good",
    sub: "64.1%"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Never touched it",
    value: "125",
    tone: "bad",
    sub: "35.9%",
    help: "Wholesale, samples, reships and comps."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Revenue per shipment",
    value: "$121",
    tone: "warn",
    sub: "was $195 in November"
  })));
}

/* ============================== PRODUCTS ============================== */
function Products() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Chocolate", "Gummies", "Capsules"];
  const rows = D.products.filter(p => cat === "All" || p.cat === cat);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Products and margin",
    sub: "What each product earns, and what it actually costs to make.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: cats,
      value: cat,
      onChange: setCat
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Products live",
    value: "8 of 10",
    tone: "ink",
    sub: "two never produced"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Real cost known",
    value: "6 of 10",
    tone: "warn",
    sub: "rest on placeholder"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Blended margin",
    value: "~90%",
    tone: "good",
    sub: "on measured products"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Top product share",
    value: "20.9%",
    tone: "ink",
    sub: "Dubai Chocolate"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "Cost"), /*#__PURE__*/React.createElement("th", null, "Basis"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Units"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", null, "Trend"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.sku
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, p.sku), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: p.cat === "Chocolate" ? "accent" : p.cat === "Gummies" ? "info" : "mute"
  }, p.cat)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, p.price ? fmt.usd(p.price) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: p.basis === "placeholder" ? "var(--bad)" : "var(--ink)"
    }
  }, fmt.usd(p.cost, 2)), /*#__PURE__*/React.createElement("td", null, p.basis === "measured" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Measured") : /*#__PURE__*/React.createElement(Badge, {
    tone: "bad"
  }, "Placeholder")), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: p.margin ? "var(--good)" : "var(--ink-mute)"
    }
  }, p.margin ? fmt.pct(p.margin) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, p.units || "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(p.rev)), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 90
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    data: p.trend,
    tone: p.trend[4] >= p.trend[0] ? "good" : "bad",
    h: 24,
    fill: false
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, "Four products still carry a $10 placeholder cost that somebody typed in once. That is 54% of your cost of goods, it includes two products that were never made, and you have been pricing against it since the 20% rise."));
}

/* ============================== SUBSCRIPTIONS ============================== */
function Subs() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Subscriptions",
    sub: "Who actually re-orders, and where they fall off."
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, D.subs.kpi.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.3fr 1fr",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "eight months"
  }, "Rebill rate"), /*#__PURE__*/React.createElement(Line, {
    data: D.subs.rebill,
    tone: "good",
    target: 90,
    tLabel: "90% target",
    vf: v => v + "%",
    yMin: 0,
    yMax: 110,
    h: 190
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 12
    }
  }, "Fell to 27.3% when subscriber payment credentials broke. Restored and recovering. The retry rebuild closes the rest.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel"
  }, "Where they fall off"), [["Paid order", 223, 100, "info"], ["Attached a subscription", 30, 13, "warn"], ["Survived cycle 1", 30, 13, "warn"], ["Survived cycle 2", 14, 6, "bad"], ["Survived cycle 3", 3, 1, "bad"]].map(([l, n, p, t]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: T(t)
    }
  }, n, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontWeight: 400
    }
  }, "\xB7 ", p, "%"))), /*#__PURE__*/React.createElement(Bar, {
    pct: p,
    tone: t,
    h: 7
  }))))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "% still active"
  }, "Retention by cohort"), /*#__PURE__*/React.createElement(Card, {
    pad: 0
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
  }, "Month 12"))), /*#__PURE__*/React.createElement("tbody", null, D.subs.cohorts.map(c => /*#__PURE__*/React.createElement("tr", {
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
  }, c.n), ["m1", "m3", "m6", "m12"].map(k => /*#__PURE__*/React.createElement("td", {
    key: k,
    style: {
      textAlign: "center"
    }
  }, c[k] == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "\\u2014") : /*#__PURE__*/React.createElement(Badge, {
    tone: c[k] >= 60 ? "good" : c[k] >= 20 ? "warn" : "bad"
  }, c[k], "%"))))))))));
}

/* ============================== WHOLESALE ============================== */
function Wholesale() {
  const accounts = [{
    n: "Clinic A · Los Angeles",
    st: "Active",
    orders: 4,
    rev: 2840,
    last: "Aug 28"
  }, {
    n: "Clinic B · Phoenix",
    st: "Active",
    orders: 2,
    rev: 980,
    last: "Sep 2"
  }, {
    n: "Clinic C · Denver",
    st: "Trial",
    orders: 1,
    rev: 300,
    last: "Aug 14"
  }, {
    n: "Retailer · Portland",
    st: "Pitched",
    orders: 0,
    rev: 0,
    last: "\u2014"
  }, {
    n: "Clinic D · Austin",
    st: "Pitched",
    orders: 0,
    rev: 0,
    last: "\u2014"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Wholesale and clinics",
    sub: "The emerging channel. Commission-only rep, cold outbound.",
    meta: "Wholesale orders never touch the order platform, which is why they are invisible in revenue."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Active accounts",
    value: "2",
    tone: "warn",
    sub: "of 5 in pipeline"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Wholesale revenue",
    value: "$4,120",
    tone: "ink",
    sub: "30 days",
    delta: 12.4
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Share of revenue",
    value: "8.8%",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Rep commission",
    value: "Commission only",
    tone: "mute",
    sub: "no base"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Orders"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", null, "Last order"))), /*#__PURE__*/React.createElement("tbody", null, accounts.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, a.n), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: a.st === "Active" ? "good" : a.st === "Trial" ? "warn" : "mute"
  }, a.st)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, a.orders || "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, a.rev ? fmt.usd(a.rev) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)"
    }
  }, a.last))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Wholesale ships straight from the warehouse without an order record, so it never reconciles against revenue and it silently consumes stock the inventory system thinks you still have."));
}

/* ============================== ATTRIBUTION ============================== */
function Attribution() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Attribution",
    sub: "Which channel earned which order.",
    meta: "Currently the weakest system in the business."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      borderColor: "var(--bad)",
      background: "var(--bad-tint)",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 15,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--bad)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "alert",
    s: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      marginBottom: 7
    }
  }, "Attribution has been broken since April"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.6,
      maxWidth: 700
    }
  }, "The tracking tag fires on page load, so any order without an affiliate link defaults to an internal test account. Stored affiliate IDs never expire either. That means every channel number you have looked at since April is wrong. Not just creator numbers. All of them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      marginTop: 14,
      flexWrap: "wrap"
    }
  }, ["Cost per customer", "Lifetime value", "Channel ROAS", "Creator payouts", "Campaign performance"].map(f => /*#__PURE__*/React.createElement(Badge, {
    key: f,
    tone: "bad"
  }, f)))))), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Orders unattributed",
    value: "26.2%",
    tone: "bad",
    sub: "landing on a test account"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Attribution window",
    value: "30 days",
    tone: "good",
    sub: "set, not yet built"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Stored IDs expiring",
    value: "No",
    tone: "bad",
    sub: "credit never lapses"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Fix lands",
    value: "Phase 3",
    tone: "warn",
    sub: "prerequisite for all channel reporting"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel"
  }, "What each channel claims, and what we can prove"), /*#__PURE__*/React.createElement(HBars, {
    data: D.channels,
    labelW: 140,
    showPct: true
  })));
}

/* ============================== ADS ============================== */
function Ads() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Ads",
    sub: "Paid acquisition across every platform.",
    meta: "Spend has been paused since August. The Q4 plan turns it back on."
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, D.ads.kpi.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "3 accounts"
  }, "Ad accounts"), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Impressions"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Clicks"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CTR"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPC"))), /*#__PURE__*/React.createElement("tbody", null, D.ads.accounts.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, a.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, a.id), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: a.status === "Paused" ? "warn" : "mute"
  }, a.status)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(a.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(a.imp)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(a.clicks)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(a.ctr, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(a.cpc)))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Before spend turns back on you need a cost-per-customer ceiling that finance sets and marketing cannot move. That number cannot be computed until attribution is rebuilt, which makes the rebuild a prerequisite for the Q4 budget rather than a parallel task."));
}

/* ============================== SOCIAL ============================== */
function Social() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Social",
    sub: "Organic reach and engagement across every platform."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total following",
    value: "39.5K",
    tone: "ink",
    delta: 2.4
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Posts \xB7 30d",
    value: "39",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Best performer",
    value: "TikTok",
    tone: "good",
    sub: "5.1% engagement"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Attributed revenue",
    value: "\\u2014",
    tone: "mute",
    sub: "needs attribution"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Platform"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Followers"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Growth \xB7 30d"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Posts"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Engagement"), /*#__PURE__*/React.createElement("th", null, "Trend"))), /*#__PURE__*/React.createElement("tbody", null, D.ads.social.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, s.followers), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: s.growth > 0 ? "var(--good)" : "var(--bad)"
    }
  }, s.growth > 0 ? "+" : "", s.growth, "%"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, s.posts), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: T(s.tone)
    }
  }, s.eng), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 100
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    data: s.growth > 0 ? [10, 12, 13, 15, 18] : [18, 16, 15, 13, 12],
    tone: s.tone,
    h: 24,
    fill: false
  })))))))));
}

/* ============================== INVENTORY ============================== */
function Inventory() {
  const [st, setSt] = useState("All");
  const [open, setOpen] = useState({});
  const L = {
    critical: "Stockout risk",
    warning: "Reorder soon",
    healthy: "Healthy",
    over: "Overstocked"
  };
  const TN = {
    critical: "bad",
    warning: "warn",
    healthy: "good",
    over: "info"
  };
  const rows = D.inventory.filter(s => st === "All" || s.st === st);
  const risk = D.inventory.filter(s => s.st === "critical" || s.st === "warning");
  const po = risk.reduce((a, b) => a + b.po, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Inventory",
    sub: "What you have, how fast it moves, and whether you can afford the reorder.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: ["All", "critical", "warning", "healthy", "over"].map(v => ({
        v,
        l: v === "All" ? "All" : L[v]
      })),
      value: st,
      onChange: setSt
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "At risk",
    value: String(risk.length),
    tone: "bad",
    sub: "2 critical \xB7 2 warning"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Free cash",
    value: "$17,847",
    tone: "good",
    sub: "above the floor"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Reorder cost",
    value: fmt.usd(po),
    tone: "warn",
    sub: "all at-risk products"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Shortfall",
    value: fmt.usd(po - 17847),
    tone: "bad",
    sub: "sequence or use credit"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "Cover"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Lead time"), /*#__PURE__*/React.createElement("th", null, "Cover against lead"), /*#__PURE__*/React.createElement("th", null, "Incoming"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(s => {
    const o = !!open[s.sku];
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.sku
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 6px 9px 13px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(x => ({
        ...x,
        [s.sku]: !x[s.sku]
      })),
      style: {
        border: "1px solid var(--rule)",
        background: o ? "var(--accent-tint)" : "transparent",
        color: o ? "var(--accent)" : "var(--ink-mute)",
        width: 21,
        height: 21,
        borderRadius: 5,
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        padding: 0,
        fontSize: 9
      }
    }, o ? "\u25BE" : "\u25B8")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, s.sku), s.note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--ink-mute)"
      }
    }, s.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: s.cat === "Chocolate" ? "accent" : s.cat === "Gummies" ? "info" : "mute"
    }, s.cat)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.n(s.hand)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right"
      }
    }, s.vel ? s.vel + "/day" : "\u2014"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        fontWeight: 600,
        color: T(TN[s.st])
      }
    }, s.cover, "d"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-soft)"
      }
    }, s.lead, "d"), /*#__PURE__*/React.createElement("td", {
      style: {
        width: 140
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      pct: Math.min(s.cover / (s.lead * 3) * 100, 100),
      tone: TN[s.st]
    }), s.cover > 0 && s.cover < s.lead && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9.5,
        color: "var(--bad)"
      }
    }, "inside lead time")), /*#__PURE__*/React.createElement("td", null, s.inc ? /*#__PURE__*/React.createElement(Badge, {
      tone: "good"
    }, "On order") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-mute)",
        fontSize: 11
      }
    }, "\\u2014")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: TN[s.st]
    }, L[s.st]))), o && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 10,
      style: {
        background: "var(--surface-2)",
        padding: "15px 18px"
      }
    }, /*#__PURE__*/React.createElement(G, {
      c: 4,
      gap: 18
    }, [["Reorder cost", s.po ? fmt.usd(s.po) : "Not scheduled"], ["Runs out", s.cover ? `in ${s.cover} days` : "already out"], ["Lead time", `${s.lead} days`], ["Verdict", s.po > 17847 ? "Needs sequencing or credit" : s.po ? "Fundable from free cash" : "No action"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
        marginBottom: 4
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500
      }
    }, v)))))));
  }))))));
}

/* ============================== PRODUCTION ============================== */
function Production() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Production",
    sub: "Every run, what went in, what came out, and what it cost.",
    meta: "Own kitchen for chocolate. Contract manufacturer for gummies and capsules."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Runs logged",
    value: "0 of 30",
    tone: "bad",
    sub: "three per product"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Average yield",
    value: "90.2%",
    tone: "warn",
    sub: "estimated, not measured"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Next run",
    value: "Late Sep",
    tone: "warn",
    sub: "Dubai Chocolate"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Cost confidence",
    value: "Low",
    tone: "bad",
    sub: "33% error bar",
    help: "Until three runs per product are logged."
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.5fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "factory"
  }, "Production runs")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Input"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Output"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Yield"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cost / unit"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, D.production.runs.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      color: r.st === "scheduled" ? "var(--ink-mute)" : "var(--ink)"
    }
  }, r.d), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.product), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.input), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.output), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.yield ? fmt.pct(r.yield) : "\u2014"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cost ? fmt.usd(r.cost, 2) : "\u2014"), /*#__PURE__*/React.createElement("td", null, r.st === "scheduled" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "Scheduled") : /*#__PURE__*/React.createElement(Badge, {
    tone: "warn"
  }, "Estimated")))))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money"
  }, "Confirmed rates"), D.production.rates.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.l,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, r.l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, r.v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, "No run has been logged with all fields yet. Until three land per product, cost per unit stays an estimate and margin stays a guess.")))));
}

/* ============================== SUPPLIERS ============================== */
function Suppliers() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Suppliers",
    sub: "Who you depend on, on what terms, and how exposed that makes you."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Active suppliers",
    value: "5",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "On payment terms",
    value: "1 of 5",
    tone: "bad",
    sub: "rest are pay up front",
    help: "Supplier terms are free working capital nobody has asked for."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Annual spend",
    value: "$233K",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Single points of failure",
    value: "2",
    tone: "bad",
    sub: "manufacturer and kitchen"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Supplier"), /*#__PURE__*/React.createElement("th", null, "What they supply"), /*#__PURE__*/React.createElement("th", null, "Terms"), /*#__PURE__*/React.createElement("th", null, "Lead time"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Annual spend"), /*#__PURE__*/React.createElement("th", null, "Risk"))), /*#__PURE__*/React.createElement("tbody", null, D.suppliers.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)"
    }
  }, s.what), /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, s.terms), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, s.lead), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(s.spend)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: s.risk
  }, s.risk === "good" ? "Low" : s.risk === "warn" ? "Watch" : "High")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "You pay the manufacturer one hundred percent up front. Even net 30 on that one relationship would free up working capital equal to about a month of inventory spend, and it costs nothing to ask."));
}

/* ============================== AGENTS ============================== */
function Agents() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Agents",
    sub: "Automated workers that run a function without a person in the loop.",
    meta: "Outside the current engagement scope. Scoped here so the dashboard has somewhere to put them."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Agents planned",
    value: "4",
    tone: "violet"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Live",
    value: "0",
    tone: "mute"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Shelved",
    value: "1",
    tone: "mute",
    sub: "creator programme wound down"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Estimated load removed",
    value: "~22 hrs / wk",
    tone: "good",
    sub: "once all four run"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 14
  }, D.agents.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.n,
    pad: 18,
    hover: true,
    style: {
      opacity: a.s === "shelved" ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "var(--violet-tint)",
      color: "var(--violet)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "agents",
    s: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 600
    }
  }, a.n)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.s === "planned" ? "violet" : "mute"
  }, a.s === "planned" ? "Planned" : "Shelved")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55,
      marginBottom: 11
    }
  }, a.d), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 11,
      borderTop: "1px solid var(--rule-soft)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, "Impact"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--good)"
    }
  }, a.impact))))));
}

/* ============================== VAULT ============================== */
function Vault() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Vault",
    sub: "Contracts, agreements and anything that would hurt to lose.",
    meta: "Access controlled. Everything here lives in accounts you own."
  }), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 14,
    style: {
      marginBottom: 24
    }
  }, D.vault.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.n,
    pad: 18,
    hover: true,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: TT(v.tone),
      color: T(v.tone),
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "lock",
    s: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, v.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, v.c, " documents"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, v.note)))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "file",
    right: "recently updated"
  }, "Drive"), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "Updated"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Size"))), /*#__PURE__*/React.createElement("tbody", null, D.drive.map(f => /*#__PURE__*/React.createElement("tr", {
    key: f.n,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "file",
    s: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, f.n))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, f.t)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)"
    }
  }, f.d), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-mute)"
    }
  }, f.size))))))));
}

/* ============================== DATA HEALTH ============================== */
function DataHealth() {
  const ST = {
    live: "good",
    partial: "warn",
    blocked: "bad",
    waiting: "info"
  };
  const SL = {
    live: "Connected",
    partial: "Partial",
    blocked: "Blocked",
    waiting: "Waiting"
  };
  const RT = {
    high: "good",
    medium: "warn",
    low: "bad",
    none: "bad"
  };
  const RL = {
    high: "Act on it",
    medium: "Check first",
    low: "Directional",
    none: "Not usable"
  };
  const RP = {
    high: 100,
    medium: 65,
    low: 32,
    none: 8
  };
  const live = D.dataHealth.filter(s => s.s === "live").length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Data health",
    sub: "Which numbers on this dashboard you can act on, and which are still being built.",
    meta: "A dashboard that shows a confident wrong number is worse than one that admits what it does not know."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Sources connected",
    value: `${live} of ${D.dataHealth.length}`,
    tone: live > 7 ? "good" : "warn"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Blocked on access",
    value: "3",
    tone: "bad",
    sub: "warehouse, email, attribution"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Numbers you can act on",
    value: "3 of 9",
    tone: "warn"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Waiting on the kitchen",
    value: "1",
    tone: "warn",
    sub: "margin per unit"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.15fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse"
  }, "Sources"), D.dataHealth.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 12,
      alignItems: "center",
      padding: "9px 0",
      borderBottom: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, s.d)), /*#__PURE__*/React.createElement(Badge, {
    tone: ST[s.s]
  }, SL[s.s])))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target"
  }, "How much to trust each number"), D.reliability.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.a,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500
    }
  }, r.a), /*#__PURE__*/React.createElement(Badge, {
    tone: RT[r.l]
  }, RL[r.l])), /*#__PURE__*/React.createElement(Bar, {
    pct: RP[r.l],
    tone: RT[r.l]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, r.n))))));
}

/* ==== app.jsx ==== */
// app.jsx — shell: sidebar, top bar, live ticker, sub-tabs, routing

const NAV = [{
  g: "Home",
  icon: "home",
  items: [{
    id: "boardroom",
    l: "Boardroom"
  }]
}, {
  g: "Exec",
  icon: "exec",
  items: [{
    id: "goals",
    l: "Goals & Targets"
  }, {
    id: "scorecards",
    l: "Role Scorecards"
  }, {
    id: "board",
    l: "Project Board"
  }, {
    id: "org",
    l: "Org Chart"
  }]
}, {
  g: "Money",
  icon: "money",
  items: [{
    id: "cash",
    l: "Cash & Buckets"
  }, {
    id: "pl",
    l: "Profit & Loss"
  }, {
    id: "debt",
    l: "Debt & Obligations"
  }, {
    id: "rails",
    l: "Payment Rails"
  }]
}, {
  g: "Revenue",
  icon: "rev",
  items: [{
    id: "revenue",
    l: "Overview"
  }, {
    id: "products",
    l: "Products & Margin"
  }, {
    id: "subs",
    l: "Subscriptions"
  }, {
    id: "wholesale",
    l: "Wholesale"
  }]
}, {
  g: "Marketing",
  icon: "mkt",
  items: [{
    id: "attribution",
    l: "Attribution"
  }, {
    id: "ads",
    l: "Ads"
  }, {
    id: "social",
    l: "Social"
  }]
}, {
  g: "Operations",
  icon: "ops",
  items: [{
    id: "inventory",
    l: "Inventory"
  }, {
    id: "production",
    l: "Production"
  }, {
    id: "suppliers",
    l: "Suppliers"
  }]
}, {
  g: "Agents",
  icon: "agents",
  items: [{
    id: "agents",
    l: "All Agents"
  }]
}, {
  g: "Team OS",
  icon: "team",
  items: [{
    id: "vault",
    l: "Vault & Drive"
  }]
}, {
  g: "Admin",
  icon: "admin",
  items: [{
    id: "data",
    l: "Data Health"
  }]
}];
const SUBTABS = {
  boardroom: ["Boardroom", "Financials", "Insights", "System Health"],
  cash: ["Cash", "Forecast", "Transactions"],
  revenue: ["Overview", "By Product", "By Channel"],
  inventory: ["Inventory", "Reorders", "Movements"]
};
const PAGE_GROUP = {};
NAV.forEach(g => g.items.forEach(i => {
  PAGE_GROUP[i.id] = g.g;
}));
function App() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState(() => {
    const h = (location.hash || "").replace("#", "");
    return PAGE_GROUP[h] ? h : "boardroom";
  });
  const [period, setPeriod] = useState("30 days");
  const [openGroups, setOpenGroups] = useState(() => {
    const o = {};
    NAV.forEach(g => o[g.g] = true);
    return o;
  });
  const [sideOpen, setSideOpen] = useState(false);
  const [sub, setSub] = useState(0);
  const [search, setSearch] = useState("");
  const [searchOn, setSearchOn] = useState(false);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    location.hash = page;
    setSub(0);
    setSideOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page]);
  useEffect(() => {
    const onHash = () => {
      const h = (location.hash || "").replace("#", "");
      if (PAGE_GROUP[h] && h !== page) setPage(h);
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, [page]);
  useEffect(() => {
    const k = e => {
      if (e.target.tagName === "INPUT") {
        if (e.key === "Escape") setSearchOn(false);
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOn(true);
      }
      if (e.key === "t" || e.key === "T") setTheme(s => s === "dark" ? "light" : "dark");
      if (e.key === "Escape") setSearchOn(false);
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  const all = NAV.flatMap(g => g.items.map(i => ({
    ...i,
    g: g.g
  })));
  const hits = search ? all.filter(i => (i.l + " " + i.g).toLowerCase().includes(search.toLowerCase())) : all;
  const P = {
    boardroom: /*#__PURE__*/React.createElement(Boardroom, {
      go: setPage,
      period: period
    }),
    goals: /*#__PURE__*/React.createElement(Goals, {
      period: period
    }),
    scorecards: /*#__PURE__*/React.createElement(Scorecards, null),
    board: /*#__PURE__*/React.createElement(Board, null),
    org: /*#__PURE__*/React.createElement(Org, null),
    cash: /*#__PURE__*/React.createElement(Cash, null),
    pl: /*#__PURE__*/React.createElement(PL, null),
    debt: /*#__PURE__*/React.createElement(Debt, null),
    rails: /*#__PURE__*/React.createElement(Rails, null),
    revenue: /*#__PURE__*/React.createElement(Revenue, null),
    products: /*#__PURE__*/React.createElement(Products, null),
    subs: /*#__PURE__*/React.createElement(Subs, null),
    wholesale: /*#__PURE__*/React.createElement(Wholesale, null),
    attribution: /*#__PURE__*/React.createElement(Attribution, null),
    ads: /*#__PURE__*/React.createElement(Ads, null),
    social: /*#__PURE__*/React.createElement(Social, null),
    inventory: /*#__PURE__*/React.createElement(Inventory, null),
    production: /*#__PURE__*/React.createElement(Production, null),
    suppliers: /*#__PURE__*/React.createElement(Suppliers, null),
    agents: /*#__PURE__*/React.createElement(Agents, null),
    vault: /*#__PURE__*/React.createElement(Vault, null),
    data: /*#__PURE__*/React.createElement(DataHealth, null)
  }[page];
  const subs = SUBTABS[page];
  return /*#__PURE__*/React.createElement("div", {
    className: "shell",
    "data-open": sideOpen
  }, sideOpen && /*#__PURE__*/React.createElement("div", {
    className: "side-scrim",
    onClick: () => setSideOpen(false)
  }), /*#__PURE__*/React.createElement("aside", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 14px",
      borderBottom: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mynd-logo.svg",
    alt: "MYND",
    style: {
      height: 17,
      filter: "var(--logo-filter)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)",
      letterSpacing: "0.05em",
      marginTop: 5
    }
  }, "COMMAND CENTRE")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: "10px 0",
      overflowY: "auto"
    }
  }, NAV.map(g => {
    const open = openGroups[g.g];
    const active = g.items.some(i => i.id === page);
    return /*#__PURE__*/React.createElement("div", {
      key: g.g,
      style: {
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "nav-group-label",
      "data-open": open || active,
      onClick: () => setOpenGroups(s => ({
        ...s,
        [g.g]: !s[g.g]
      }))
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        height: 11,
        background: "var(--accent)",
        borderRadius: 2,
        marginLeft: -8,
        marginRight: 2
      }
    }), /*#__PURE__*/React.createElement(Ico, {
      n: g.icon,
      s: 12
    }), g.g), /*#__PURE__*/React.createElement("span", {
      style: {
        transform: open ? "rotate(90deg)" : "none",
        transition: "transform 180ms ease",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "chev",
      s: 11
    }))), open && g.items.map(i => /*#__PURE__*/React.createElement("button", {
      key: i.id,
      className: "nav-item",
      "data-on": page === i.id,
      onClick: () => setPage(i.id)
    }, i.l)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 16px",
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: D.meta.user,
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, D.meta.user), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, D.meta.role))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7
    }
  }, ["Account", "Sign out"].map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    style: {
      flex: 1,
      border: "1px solid var(--rule)",
      background: "var(--surface-3)",
      borderRadius: "var(--r-sm)",
      padding: "6px 8px",
      fontSize: 11,
      cursor: "pointer",
      color: "var(--ink-soft)"
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSideOpen(s => !s),
    "aria-label": "Menu",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-soft)",
      padding: 4,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "menu",
    s: 18
  })), /*#__PURE__*/React.createElement("img", {
    src: "assets/mynd-logo.svg",
    alt: "MYND",
    className: "hide-sm",
    style: {
      height: 15,
      filter: "var(--logo-filter)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchOn(true),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-pill)",
      padding: "5px 12px",
      fontSize: 12,
      color: "var(--ink-mute)",
      cursor: "pointer",
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "search",
    s: 13
  }), " Search", /*#__PURE__*/React.createElement("span", {
    className: "mono hide-sm",
    style: {
      marginLeft: "auto",
      fontSize: 10,
      opacity: 0.7
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "hide-sm",
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, D.meta.updated, " \xB7 ", D.meta.tz), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(t => t === "dark" ? "light" : "dark"),
    "aria-label": "Theme",
    style: {
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: 99,
      width: 30,
      height: 30,
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      color: "var(--ink-soft)"
    }
  }, theme === "dark" ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  }))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Alerts",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-soft)",
      position: "relative",
      display: "flex",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "bell",
    s: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      right: 2,
      width: 7,
      height: 7,
      borderRadius: 99,
      background: "var(--bad)",
      border: "1.5px solid var(--surface)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ticker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track"
  }, [0, 1].map(dup => /*#__PURE__*/React.createElement("div", {
    key: dup,
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ticker-item",
    style: {
      color: "var(--good)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--good)"
    }
  }), "LIVE"), D.ticker.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ticker-item"
  }, /*#__PURE__*/React.createElement(Ico, {
    n: t.i,
    s: 12
  }), t.l, /*#__PURE__*/React.createElement("b", {
    className: "mono",
    style: {
      color: T(t.tone || "ink"),
      fontWeight: 650
    }
  }, t.v))))))), subs && /*#__PURE__*/React.createElement("div", {
    className: "subtabs"
  }, subs.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "subtab",
    "data-on": sub === i,
    onClick: () => setSub(i)
  }, s))), /*#__PURE__*/React.createElement("main", {
    className: "pad",
    style: {
      padding: "26px 26px 70px",
      maxWidth: 1680,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 14,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, PAGE_GROUP[page], " ", /*#__PURE__*/React.createElement(Ico, {
    n: "chev",
    s: 10
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-soft)"
    }
  }, all.find(i => i.id === page)?.l)), /*#__PURE__*/React.createElement(Seg, {
    options: ["7 days", "30 days", "90 days", "MTD", "Custom"],
    value: period,
    onChange: setPeriod
  })), sub === 0 ? P : /*#__PURE__*/React.createElement(Empty, {
    title: `${subs[sub]} view`,
    note: "This tab is scoped and sits in the build plan. The Boardroom tab carries the working version of this section today."
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--rule)",
      padding: "18px 26px 34px",
      display: "flex",
      justifyContent: "space-between",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "MYND Command \xB7 Mock for review \xB7 Built by OpFix"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "\u2318K"), " search \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "T"), " theme"))), searchOn && /*#__PURE__*/React.createElement("div", {
    onClick: () => setSearchOn(false),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 100,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "12vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(560px, 92vw)",
      background: "var(--surface)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 16px",
      borderBottom: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "search",
    s: 16
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Jump to a page...",
    style: {
      flex: 1,
      background: "none",
      border: "none",
      outline: "none",
      color: "var(--ink)",
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--ink-mute)"
    }
  }, "ESC")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "46vh",
      overflowY: "auto",
      padding: 6
    }
  }, hits.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      textAlign: "center",
      fontSize: 12.5,
      color: "var(--ink-mute)"
    }
  }, "Nothing matches."), hits.map(h => /*#__PURE__*/React.createElement("button", {
    key: h.id,
    onClick: () => {
      setPage(h.id);
      setSearchOn(false);
      setSearch("");
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "10px 12px",
      background: "none",
      border: "none",
      borderRadius: "var(--r-sm)",
      cursor: "pointer",
      fontSize: 13,
      textAlign: "left"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-3)",
    onMouseLeave: e => e.currentTarget.style.background = "none"
  }, /*#__PURE__*/React.createElement("span", null, h.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, h.g)))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

})();