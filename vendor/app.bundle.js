(function(){

/* ==== data.jsx ==== */
// data.jsx, MOCK. Anchored to real MYND figures where they exist so DB recognizes
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
    v: "$26,528"
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
    value: "$29,247",
    delta: 8.4,
    sub: "62.5% of revenue",
    tone: "good",
    help: "Revenue less cost of delivery and marketing. Fixed costs excluded. The number the business should orbit daily.",
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
    label: "Operating profit · 30d",
    value: "+$15,197",
    delta: 3826,
    sub: "was +$387 in July",
    tone: "good",
    help: "Revenue less cost of delivery, marketing and fixed operating cost. Before debt service and owner distributions. Operating profit, not net profit."
  }, {
    k: "amer",
    label: "aMER",
    value: "1.92x",
    delta: 3.1,
    sub: "new cust rev / spend",
    tone: "good",
    help: "Acquisition MER. New customer revenue divided by ad spend. Blended and unattributed."
  }, {
    k: "ncac",
    label: "Cost per new customer",
    value: "$36.42",
    delta: -4.2,
    sub: "blended nCAC",
    tone: "warn",
    help: "Ad spend divided by new customer orders."
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
    l: "Subs canceled",
    v: "2",
    tone: "bad"
  }],
  thisMonth: [{
    l: "Revenue",
    v: "$26,528"
  }, {
    l: "Operating profit",
    v: "$8,630",
    tone: "good"
  }, {
    l: "Orders",
    v: "126"
  }, {
    l: "New subscribers",
    v: "17"
  }, {
    l: "Debt paid",
    v: "$11,556",
    tone: "good"
  }, {
    l: "Distributions",
    v: "$0"
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
    t: "Card utilization at 49%. The Q4 plan would take it to 93%",
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
    v: 17567,
    pct: 37.5,
    tone: "good",
    bench: "~40%",
    d: "Product cost, fulfillment, processing"
  }, {
    line: "Marketing",
    v: 0,
    pct: 0,
    tone: "warn",
    bench: "25-30%",
    d: "Ad spend paused"
  }, {
    line: "Contribution margin",
    v: 29247,
    pct: 62.5,
    tone: "good",
    bench: "",
    d: "Revenue less cost of delivery and marketing",
    sub: true
  }, {
    line: "OPEX",
    v: 14050,
    pct: 30.0,
    tone: "bad",
    bench: "~15%",
    d: "Fixed operating cost"
  }, {
    line: "Operating profit",
    v: 15197,
    pct: 32.5,
    tone: "good",
    bench: "15-20%",
    d: "Contribution margin less OPEX. Before debt service and distributions",
    sub: true
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
  // Daily contribution margin, Aug 19 to Sep 17. Sums tie to the P&L: 30 days = $46,814 revenue,
  // $17,567 cost of delivery. September to date = $26,528. Sep 17 is today, matching revenue today.
  cmDaily: [{
    d: "Aug 19",
    w: "Wed",
    m: 8,
    rev: 1620,
    cod: 608,
    mkt: 0
  }, {
    d: "Aug 20",
    w: "Thu",
    m: 8,
    rev: 1650,
    cod: 634,
    mkt: 0
  }, {
    d: "Aug 21",
    w: "Fri",
    m: 8,
    rev: 1487,
    cod: 540,
    mkt: 0
  }, {
    d: "Aug 22",
    w: "Sat",
    m: 8,
    rev: 1351,
    cod: 523,
    mkt: 0
  }, {
    d: "Aug 23",
    w: "Sun",
    m: 8,
    rev: 1522,
    cod: 575,
    mkt: 0
  }, {
    d: "Aug 24",
    w: "Mon",
    m: 8,
    rev: 1732,
    cod: 631,
    mkt: 0
  }, {
    d: "Aug 25",
    w: "Tue",
    m: 8,
    rev: 1614,
    cod: 624,
    mkt: 0
  }, {
    d: "Aug 26",
    w: "Wed",
    m: 8,
    rev: 1561,
    cod: 578,
    mkt: 0
  }, {
    d: "Aug 27",
    w: "Thu",
    m: 8,
    rev: 1638,
    cod: 606,
    mkt: 0
  }, {
    d: "Aug 28",
    w: "Fri",
    m: 8,
    rev: 1546,
    cod: 598,
    mkt: 0
  }, {
    d: "Aug 29",
    w: "Sat",
    m: 8,
    rev: 1348,
    cod: 492,
    mkt: 0
  }, {
    d: "Aug 30",
    w: "Sun",
    m: 8,
    rev: 1465,
    cod: 552,
    mkt: 0
  }, {
    d: "Aug 31",
    w: "Mon",
    m: 8,
    rev: 1752,
    cod: 670,
    mkt: 0
  }, {
    d: "Sep 1",
    w: "Tue",
    m: 9,
    rev: 1650,
    cod: 599,
    mkt: 0
  }, {
    d: "Sep 2",
    w: "Wed",
    m: 9,
    rev: 1684,
    cod: 646,
    mkt: 0
  }, {
    d: "Sep 3",
    w: "Thu",
    m: 9,
    rev: 1503,
    cod: 565,
    mkt: 0
  }, {
    d: "Sep 4",
    w: "Fri",
    m: 9,
    rev: 1398,
    cod: 511,
    mkt: 0
  }, {
    d: "Sep 5",
    w: "Sat",
    m: 9,
    rev: 1444,
    cod: 559,
    mkt: 0
  }, {
    d: "Sep 6",
    w: "Sun",
    m: 9,
    rev: 1518,
    cod: 560,
    mkt: 0
  }, {
    d: "Sep 7",
    w: "Mon",
    m: 9,
    rev: 1552,
    cod: 577,
    mkt: 0
  }, {
    d: "Sep 8",
    w: "Tue",
    m: 9,
    rev: 1590,
    cod: 613,
    mkt: 0
  }, {
    d: "Sep 9",
    w: "Wed",
    m: 9,
    rev: 1671,
    cod: 608,
    mkt: 0
  }, {
    d: "Sep 10",
    w: "Thu",
    m: 9,
    rev: 1563,
    cod: 592,
    mkt: 0
  }, {
    d: "Sep 11",
    w: "Fri",
    m: 9,
    rev: 1395,
    cod: 531,
    mkt: 0
  }, {
    d: "Sep 12",
    w: "Sat",
    m: 9,
    rev: 1389,
    cod: 505,
    mkt: 0
  }, {
    d: "Sep 13",
    w: "Sun",
    m: 9,
    rev: 1536,
    cod: 591,
    mkt: 0
  }, {
    d: "Sep 14",
    w: "Mon",
    m: 9,
    rev: 1610,
    cod: 602,
    mkt: 0
  }, {
    d: "Sep 15",
    w: "Tue",
    m: 9,
    rev: 1555,
    cod: 571,
    mkt: 0
  }, {
    d: "Sep 16",
    w: "Wed",
    m: 9,
    rev: 1623,
    cod: 628,
    mkt: 0
  }, {
    d: "Sep 17",
    w: "Thu",
    m: 9,
    rev: 1847,
    cod: 678,
    mkt: 0
  }],
  // Owner distributions by month. Irregular draws before the Sep 15 cut-over.
  distributions: [{
    m: "Jan",
    v: 4000
  }, {
    m: "Feb",
    v: 3500
  }, {
    m: "Mar",
    v: 6000
  }, {
    m: "Apr",
    v: 2500
  }, {
    m: "May",
    v: 0
  }, {
    m: "Jun",
    v: 3000
  }, {
    m: "Jul",
    v: 0
  }, {
    m: "Aug",
    v: 1500
  }, {
    m: "Sep",
    v: 0
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
    // Last 30 days against the 30 before. Active end = active start + new - cancellations.
    kpi: [{
      label: "Total active subs",
      value: "1,842",
      delta: -3.2,
      tone: "warn",
      sub: "was 1,903 last month"
    }, {
      label: "New subs started",
      value: "30",
      delta: 7.1,
      tone: "good",
      sub: "was 28"
    }, {
      label: "Cancellations",
      value: "91",
      delta: 8.3,
      invert: true,
      tone: "bad",
      sub: "churn 4.8%, was 4.3%"
    }, {
      label: "Net new subs",
      value: "-61",
      delta: -5,
      deltaUnit: "",
      tone: "bad",
      sub: "was -56. New less cancellations"
    }, {
      label: "M1 retention",
      value: "42%",
      delta: 2,
      deltaUnit: " pts",
      tone: "warn",
      sub: "still active after the first rebill"
    }, {
      label: "M2 retention",
      value: "21%",
      delta: -1,
      deltaUnit: " pts",
      tone: "warn",
      sub: "after the second"
    }, {
      label: "M3 retention",
      value: "11.0%",
      delta: -0.4,
      deltaUnit: " pts",
      tone: "bad",
      sub: "after the third"
    }, {
      label: "Rebill rate",
      value: "74%",
      delta: 13,
      deltaUnit: " pts",
      tone: "good",
      sub: "was 61%"
    }],
    months: [{
      m: "Apr",
      active: 2186,
      neu: 44,
      cancel: 148,
      churn: 6.5,
      net: -104,
      m1: 38,
      m2: 24,
      m3: 14.0,
      rebill: 71
    }, {
      m: "May",
      active: 2097,
      neu: 39,
      cancel: 128,
      churn: 5.9,
      net: -89,
      m1: 36,
      m2: 23,
      m3: 13.0,
      rebill: 48
    }, {
      m: "Jun",
      active: 2012,
      neu: 35,
      cancel: 120,
      churn: 5.7,
      net: -85,
      m1: 35,
      m2: 21,
      m3: 12.0,
      rebill: 33
    }, {
      m: "Jul",
      active: 1959,
      neu: 31,
      cancel: 84,
      churn: 4.2,
      net: -53,
      m1: 39,
      m2: 20,
      m3: 11.6,
      rebill: 27.3
    }, {
      m: "Aug",
      active: 1903,
      neu: 28,
      cancel: 84,
      churn: 4.3,
      net: -56,
      m1: 40,
      m2: 22,
      m3: 11.4,
      rebill: 61
    }, {
      m: "Last 30 days",
      active: 1842,
      neu: 30,
      cancel: 91,
      churn: 4.8,
      net: -61,
      m1: 42,
      m2: 21,
      m3: 11.0,
      rebill: 74
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
    }]
  },
  // ---------------------------------------------------------------- MARKETING
  ads: {
    kpi: [{
      label: "Blended ROAS",
      value: "-",
      sub: "no spend to measure",
      tone: "mute"
    }, {
      label: "Ad spend · 30d",
      value: "$0",
      sub: "paused since August",
      tone: "mute"
    }, {
      label: "CAC",
      value: "-",
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
      sub: "-",
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
      input: "-",
      output: "-",
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
      l: "Labor",
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
    n: "Bills of materials",
    c: 8,
    tone: "violet",
    note: "Per supplier. Drives negotiation and charge review"
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
    n: "Role documents",
    c: 11,
    tone: "accent",
    note: "Nine role documents, metrics by role, role scorecards"
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
    n: "Role scorecards",
    t: "Document",
    d: "Sep 18",
    size: "88 KB"
  }, {
    n: "Metrics by role",
    t: "Document",
    d: "Sep 18",
    size: "112 KB"
  }, {
    n: "Metrics tracker",
    t: "Spreadsheet",
    d: "Sep 18",
    size: "64 KB"
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
    d: "Answers order status, shipping and refund questions from the order platform and the 3PL, escalating anything it can't resolve.",
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
    d: "Matches processor settlements to bank deposits daily and flags anything that doesn't tie.",
    impact: "Removes manual close work"
  }, {
    n: "Creator agent",
    s: "shelved",
    d: "Managed creator onboarding, link generation and payout calculation.",
    impact: "Program wound down"
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

/* ==== data2.jsx ==== */
// data2.jsx - added for the second pass. Marketing performance, LTV by cohort,
// retention, and the customer-centric operations reframe.

const D2 = {
  // ---------------------------------------------------------------- MARKETING
  mkt: {
    note: "Where the ad money goes and what it brings back. Meta carries most of it. Spend is paused today, so this is the shape the surface takes once it turns back on.",
    headline: [{
      label: "Ad spend · 30d",
      value: "$0",
      sub: "paused since August",
      tone: "mute"
    }, {
      label: "Blended ROAS",
      value: "-",
      sub: "no spend to measure",
      tone: "mute",
      help: "Revenue attributed to ads divided by ad spend."
    }, {
      label: "Blended CAC",
      value: "-",
      sub: "needs attribution",
      tone: "mute",
      help: "What it costs to acquire one paying customer, across all paid channels."
    }, {
      label: "CAC ceiling",
      value: "$58",
      sub: "derived from 90-day contribution",
      tone: "warn",
      help: "The most you can pay for a customer and still be profitable inside 90 days."
    }, {
      label: "Planned Q4 budget",
      value: "$13,125",
      sub: "35% of the sweep",
      tone: "violet"
    }, {
      label: "Channels live",
      value: "1 of 4",
      sub: "Meta only",
      tone: "warn"
    }],
    channels: [{
      n: "Meta",
      status: "Paused",
      share: "Primary",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "info",
      note: "Where most of the budget goes. Ad buyer confirmed the data comes out of the box."
    }, {
      n: "Google",
      status: "Not connected",
      share: "Secondary",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "mute",
      note: "Possible. Not committed."
    }, {
      n: "AppLovin",
      status: "Not connected",
      share: "Secondary",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "mute",
      note: "Possible. Not committed."
    }, {
      n: "Organic",
      status: "Live",
      share: "Small",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "good",
      note: "Small percentage of total. No spend against it."
    }],
    // shape only, populates when spend resumes
    trend: [{
      m: "Apr",
      spend: 8400,
      rev: 31200
    }, {
      m: "May",
      spend: 7900,
      rev: 27600
    }, {
      m: "Jun",
      spend: 6200,
      rev: 21400
    }, {
      m: "Jul",
      spend: 3000,
      rev: 11800
    }, {
      m: "Aug",
      spend: 0,
      rev: 0
    }, {
      m: "Sep",
      spend: 0,
      rev: 0
    }],
    creative: [{
      n: "Bundle offer, static",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "paused"
    }, {
      n: "Single unit, video",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "paused"
    }, {
      n: "Founder story, UGC",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "paused"
    }, {
      n: "Subscription offer",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "draft"
    }]
  },
  // ---------------------------------------------------------------- LTV / CAC CEILING
  ltv: {
    note: "The number that tells you what you can afford to pay for a customer. Contribution based, not revenue based, because at 90% product margin a revenue figure flatters a break-even business.",
    windows: ["First order", "30 days", "90 days", "180 days"],
    // by product category
    byCategory: [{
      n: "Chocolate",
      first: 41.2,
      d30: 58.4,
      d90: 79.1,
      d180: 96.4,
      ceiling: 79,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "Gummies",
      first: 38.8,
      d30: 54.2,
      d90: 71.6,
      d180: 84.2,
      ceiling: 72,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "Capsules",
      first: null,
      d30: null,
      d90: null,
      d180: null,
      ceiling: null,
      profitAt: "Not produced",
      tone: "mute"
    }, {
      n: "Bundle",
      first: 52.6,
      d30: 81.4,
      d90: 118.2,
      d180: 146.8,
      ceiling: 118,
      profitAt: "First order",
      tone: "good"
    }],
    // by coupon / offer
    byCoupon: [{
      n: "No coupon",
      first: 48.1,
      d30: 66.2,
      d90: 88.4,
      d180: 106.2,
      ceiling: 88,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "WELCOME15",
      first: 31.4,
      d30: 49.8,
      d90: 71.2,
      d180: 88.6,
      ceiling: 71,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "SAVE25",
      first: 18.2,
      d30: 34.1,
      d90: 54.8,
      d180: 71.4,
      ceiling: 55,
      profitAt: "30 days",
      tone: "warn"
    }, {
      n: "BOGO",
      first: -4.6,
      d30: 14.2,
      d90: 36.8,
      d180: 52.1,
      ceiling: 37,
      profitAt: "90 days",
      tone: "bad"
    }, {
      n: "FREESHIP",
      first: 39.8,
      d30: 57.1,
      d90: 76.4,
      d180: 92.8,
      ceiling: 76,
      profitAt: "First order",
      tone: "good"
    }],
    cohorts: [{
      c: "Mar 2026",
      n: 318,
      first: 44.2,
      d30: 61.8,
      d90: 82.4,
      d180: 99.1
    }, {
      c: "Apr 2026",
      n: 287,
      first: 42.8,
      d30: 59.4,
      d90: 78.2,
      d180: 94.6
    }, {
      c: "May 2026",
      n: 341,
      first: 45.6,
      d30: 63.1,
      d90: 81.8,
      d180: null
    }, {
      c: "Jun 2026",
      n: 296,
      first: 41.9,
      d30: 57.2,
      d90: 74.6,
      d180: null
    }, {
      c: "Jul 2026",
      n: 264,
      first: 43.4,
      d30: 60.8,
      d90: null,
      d180: null
    }, {
      c: "Aug 2026",
      n: 302,
      first: 46.1,
      d30: null,
      d90: null,
      d180: null
    }]
  },
  // ---------------------------------------------------------------- RETENTION
  retention: {
    note: "How much of the money comes from people who already bought. The cheapest revenue in the business, and the least measured.",
    kpi: [{
      label: "Revenue from existing",
      value: "38.4%",
      sub: "of the 30 day total",
      tone: "warn",
      delta: 2.1,
      help: "Any order from a customer who has bought before."
    }, {
      label: "Revenue from new",
      value: "61.6%",
      sub: "first-time buyers",
      tone: "ink",
      delta: -2.1
    }, {
      label: "Email revenue",
      value: "$6,890",
      sub: "14.7% of total",
      tone: "info",
      delta: 8.4
    }, {
      label: "Referral code usage",
      value: "112",
      sub: "4.2% of orders",
      tone: "warn",
      delta: 14.2
    }, {
      label: "Repeat rate",
      value: "22.8%",
      sub: "bought more than once",
      tone: "warn",
      delta: 1.4
    }, {
      label: "Time to second order",
      value: "41 days",
      sub: "median",
      tone: "ink",
      delta: -6.2
    }],
    split: [{
      m: "Apr",
      existing: 34.1,
      neu: 65.9
    }, {
      m: "May",
      existing: 35.2,
      neu: 64.8
    }, {
      m: "Jun",
      existing: 36.0,
      neu: 64.0
    }, {
      m: "Jul",
      existing: 36.3,
      neu: 63.7
    }, {
      m: "Aug",
      existing: 37.6,
      neu: 62.4
    }, {
      m: "Sep",
      existing: 38.4,
      neu: 61.6
    }],
    emailTrend: [{
      m: "Apr",
      v: 4820
    }, {
      m: "May",
      v: 5240
    }, {
      m: "Jun",
      v: 5910
    }, {
      m: "Jul",
      v: 6120
    }, {
      m: "Aug",
      v: 6350
    }, {
      m: "Sep",
      v: 6890
    }],
    referralTrend: [{
      m: "Apr",
      v: 64
    }, {
      m: "May",
      v: 71
    }, {
      m: "Jun",
      v: 83
    }, {
      m: "Jul",
      v: 91
    }, {
      m: "Aug",
      v: 98
    }, {
      m: "Sep",
      v: 112
    }],
    sources: [{
      m: "Email flows",
      v: 4210,
      tone: "info"
    }, {
      m: "Email campaigns",
      v: 2680,
      tone: "info"
    }, {
      m: "Referral codes",
      v: 3840,
      tone: "violet"
    }, {
      m: "Subscription rebills",
      v: 5120,
      tone: "good"
    }, {
      m: "Direct repeat",
      v: 2110,
      tone: "accent"
    }]
  },
  // ---------------------------------------------------------------- OPS, CUSTOMER CENTRIC
  ops: {
    note: "Things that delight customers and turn into money. Problems live underneath, not on top.",
    kpi: [{
      label: "Order to doorstep",
      value: "4.2 days",
      sub: "median, end to end",
      tone: "good",
      delta: -8.1,
      help: "From the moment they pay to the moment it arrives."
    }, {
      label: "Shipped same day",
      value: "78%",
      sub: "target 90%",
      tone: "warn",
      delta: 4.2
    }, {
      label: "In stock when wanted",
      value: "91%",
      sub: "of attempted orders",
      tone: "warn",
      delta: -2.4,
      help: "Orders that didn't hit an out-of-stock product."
    }, {
      label: "Arrived undamaged",
      value: "98.6%",
      sub: "of delivered orders",
      tone: "good",
      delta: 0.4
    }, {
      label: "Reship rate",
      value: "2.1%",
      sub: "26 of 348 July",
      tone: "warn",
      delta: -0.6
    }, {
      label: "Support response",
      value: "6.4 hrs",
      sub: "target under 4",
      tone: "bad",
      delta: -12.1
    }],
    deliver: [{
      m: "Apr",
      v: 5.1
    }, {
      m: "May",
      v: 4.9
    }, {
      m: "Jun",
      v: 4.7
    }, {
      m: "Jul",
      v: 4.5
    }, {
      m: "Aug",
      v: 4.4
    }, {
      m: "Sep",
      v: 4.2
    }],
    friction: [{
      n: "Out of stock at checkout",
      count: 31,
      cost: 2139,
      tone: "bad",
      fix: "Days of cover alerts before the reorder window"
    }, {
      n: "Late shipment, over 2 days",
      count: 24,
      cost: 0,
      tone: "warn",
      fix: "3PL cutoff time and same-day rules"
    }, {
      n: "Damaged on arrival",
      count: 5,
      cost: 345,
      tone: "warn",
      fix: "Packaging review with the supplier"
    }, {
      n: "Support waited over 24 hrs",
      count: 18,
      cost: 0,
      tone: "bad",
      fix: "First response target and an owner"
    }, {
      n: "Rebill failed silently",
      count: 42,
      cost: 2898,
      tone: "bad",
      fix: "Retry rebuild and card updater"
    }],
    // cost trend moved here from Products & Margin
    costTrend: [{
      n: "Dubai Chocolate",
      cur: 6.72,
      prev: 6.94,
      basis: "measured"
    }, {
      n: "Sea Salt Chocolate",
      cur: 6.26,
      prev: 6.41,
      basis: "measured"
    }, {
      n: "Matcha Chocolate",
      cur: 7.25,
      prev: 7.18,
      basis: "measured"
    }, {
      n: "Mint Chocolate",
      cur: 6.91,
      prev: 7.02,
      basis: "measured"
    }, {
      n: "Toffee Chocolate",
      cur: 7.02,
      prev: 7.11,
      basis: "measured"
    }, {
      n: "Espresso Chocolate",
      cur: 6.88,
      prev: 6.95,
      basis: "measured"
    }, {
      n: "Strawberry Gummies",
      cur: 10.00,
      prev: 10.00,
      basis: "placeholder"
    }, {
      n: "Blue Raspberry Gummies",
      cur: 10.00,
      prev: 10.00,
      basis: "placeholder"
    }],
    costSeries: [{
      m: "Apr",
      v: 7.21
    }, {
      m: "May",
      v: 7.08
    }, {
      m: "Jun",
      v: 6.97
    }, {
      m: "Jul",
      v: 6.94
    }, {
      m: "Aug",
      v: 6.88
    }, {
      m: "Sep",
      v: 6.84
    }]
  },
  // ---------------------------------------------------------------- FULFILLMENT (moved)
  fulfillment: {
    shipments: {
      total: 348,
      onPlatform: 223,
      invisible: 125,
      pct: 35.9
    },
    breakdown: [{
      m: "Wholesale",
      v: 48,
      tone: "info"
    }, {
      m: "Samples",
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
  }
};

/* ==== data3.jsx ==== */
// data3.jsx - folded from DB's growth intelligence reference.
// Data model taken, layout ours.

const D3 = {
  defs: {
    netRev: "Net revenue = sales less discounts less refunds plus shipping, excluding tax.",
    profit: "Contribution profit. Fixed overhead excluded.",
    sep: "MER and aMER are blended and unattributed. ROAS is per channel and attributed. Kept deliberately separate."
  },
  // ---------------------------------------------------------------- LIVE BLOCK
  live: {
    day: "Thursday, Sep 17",
    elapsed: 81,
    head: [{
      label: "Total ad spend",
      value: "$4,411",
      delta: -5.0,
      sub: "vs pace",
      tone: "ink",
      good: true,
      help: "Spend so far today across every paid channel."
    }, {
      label: "New customer orders",
      value: "123",
      delta: -6.0,
      sub: "vs pace",
      tone: "ink",
      help: "First-time buyers only. Returning orders are excluded."
    }, {
      label: "New customer revenue",
      value: "$8,019",
      delta: -5.9,
      sub: "vs pace",
      tone: "ink",
      help: "Net revenue from first-time buyers today."
    }, {
      label: "aMER",
      value: "1.82x",
      sub: "new customer rev / spend",
      tone: "good",
      help: "Acquisition MER. New customer revenue divided by total ad spend. The number that says whether acquisition pays."
    }, {
      label: "MER",
      value: "3.87x",
      sub: "total rev / spend",
      tone: "good",
      help: "Blended and unattributed. All revenue divided by all spend."
    }, {
      label: "Blended nCAC",
      value: "$35.86",
      sub: "spend / new order",
      tone: "warn",
      help: "What one new customer costs today, blended across channels."
    }],
    channels: [{
      n: "Meta",
      spend: 2034,
      rev: 6283,
      roas: 3.09,
      tone: "info"
    }, {
      n: "Google",
      spend: 1346,
      rev: 4255,
      roas: 3.16,
      tone: "warn"
    }, {
      n: "AppLovin",
      spend: 1031,
      rev: 2500,
      roas: 2.43,
      tone: "violet"
    }, {
      n: "Organic",
      spend: null,
      rev: 4029,
      roas: null,
      tone: "mute",
      note: "revenue only"
    }],
    metrics: [{
      label: "% new customer revenue",
      value: "47.0%",
      help: "Share of today's revenue from first-time buyers."
    }, {
      label: "NAOV",
      value: "$65.19",
      help: "New customer average order value."
    }, {
      label: "Total ROAS",
      value: "3.87x"
    }, {
      label: "Total orders",
      value: "217"
    }, {
      label: "New revenue",
      value: "$8,019"
    }, {
      label: "Returning revenue",
      value: "$9,048"
    }]
  },
  // ---------------------------------------------------------------- DAILY TRACKER
  daily: {
    rows: [{
      d: "Sep 1",
      w: "Tue",
      spend: 7342,
      dS: null,
      ord: 220,
      dO: null,
      nc: 14980,
      amer: 2.04,
      mer: 3.69,
      nNew: 220,
      $new: 14980,
      nRet: 147,
      $ret: 12099,
      tot: 367,
      ncrev: 55.3,
      naov: 68.09,
      ncac: 33.37,
      roas: 3.05,
      rev: 27079,
      gm: 18033,
      profit: 6904
    }, {
      d: "Sep 2",
      w: "Wed",
      spend: 6507,
      dS: -11.4,
      ord: 176,
      dO: -20.0,
      nc: 13252,
      amer: 2.04,
      mer: 3.51,
      nNew: 176,
      $new: 13252,
      nRet: 97,
      $ret: 9603,
      tot: 273,
      ncrev: 58.0,
      naov: 75.30,
      ncac: 36.97,
      roas: 2.82,
      rev: 22855,
      gm: 15343,
      profit: 5783
    }, {
      d: "Sep 3",
      w: "Thu",
      spend: 6565,
      dS: 0.9,
      ord: 151,
      dO: -14.2,
      nc: 11401,
      amer: 1.74,
      mer: 3.92,
      nNew: 151,
      $new: 11401,
      nRet: 173,
      $ret: 14350,
      tot: 324,
      ncrev: 44.3,
      naov: 75.50,
      ncac: 43.48,
      roas: 3.39,
      rev: 25751,
      gm: 16797,
      profit: 6562
    }, {
      d: "Sep 4",
      w: "Fri",
      spend: 7297,
      dS: 11.2,
      ord: 215,
      dO: 42.4,
      nc: 14920,
      amer: 2.04,
      mer: 4.13,
      nNew: 215,
      $new: 14920,
      nRet: 152,
      $ret: 15181,
      tot: 367,
      ncrev: 49.6,
      naov: 69.40,
      ncac: 33.94,
      roas: 3.45,
      rev: 30101,
      gm: 20118,
      profit: 8836
    }, {
      d: "Sep 5",
      w: "Sat",
      spend: 4610,
      dS: -36.8,
      ord: 111,
      dO: -48.4,
      nc: 8014,
      amer: 1.74,
      mer: 3.61,
      nNew: 111,
      $new: 8014,
      nRet: 87,
      $ret: 8650,
      tot: 198,
      ncrev: 48.1,
      naov: 72.20,
      ncac: 41.53,
      roas: 2.86,
      rev: 16664,
      gm: 10498,
      profit: 3751
    }, {
      d: "Sep 6",
      w: "Sun",
      spend: 5429,
      dS: 17.8,
      ord: 136,
      dO: 22.5,
      nc: 9365,
      amer: 1.72,
      mer: 3.61,
      nNew: 136,
      $new: 9365,
      nRet: 126,
      $ret: 10224,
      tot: 262,
      ncrev: 47.8,
      naov: 68.86,
      ncac: 39.92,
      roas: 2.96,
      rev: 19589,
      gm: 12715,
      profit: 4478
    }, {
      d: "Sep 7",
      w: "Mon",
      spend: 6186,
      dS: 13.9,
      ord: 194,
      dO: 42.6,
      nc: 12644,
      amer: 2.04,
      mer: 3.56,
      nNew: 194,
      $new: 12644,
      nRet: 110,
      $ret: 9403,
      tot: 304,
      ncrev: 57.4,
      naov: 65.18,
      ncac: 31.89,
      roas: 3.04,
      rev: 22047,
      gm: 13786,
      profit: 4736
    }, {
      d: "Sep 8",
      w: "Tue",
      spend: 7625,
      dS: 23.3,
      ord: 216,
      dO: 11.3,
      nc: 13429,
      amer: 1.76,
      mer: 3.65,
      nNew: 216,
      $new: 13429,
      nRet: 181,
      $ret: 14425,
      tot: 397,
      ncrev: 48.2,
      naov: 62.17,
      ncac: 35.30,
      roas: 3.01,
      rev: 27854,
      gm: 18041,
      profit: 6570
    }, {
      d: "Sep 9",
      w: "Wed",
      spend: 6900,
      dS: -9.5,
      ord: 226,
      dO: 4.6,
      nc: 15516,
      amer: 2.25,
      mer: 3.98,
      nNew: 226,
      $new: 15516,
      nRet: 153,
      $ret: 11977,
      tot: 379,
      ncrev: 56.4,
      naov: 68.65,
      ncac: 30.53,
      roas: 3.16,
      rev: 27493,
      gm: 17130,
      profit: 6538
    }, {
      d: "Sep 10",
      w: "Thu",
      spend: 6077,
      dS: -11.9,
      ord: 156,
      dO: -31.0,
      nc: 11762,
      amer: 1.94,
      mer: 3.89,
      nNew: 156,
      $new: 11762,
      nRet: 135,
      $ret: 11873,
      tot: 291,
      ncrev: 49.8,
      naov: 75.40,
      ncac: 38.96,
      roas: 3.13,
      rev: 23635,
      gm: 15517,
      profit: 6106
    }, {
      d: "Sep 11",
      w: "Fri",
      spend: 6723,
      dS: 10.6,
      ord: 202,
      dO: 29.5,
      nc: 12820,
      amer: 1.91,
      mer: 3.57,
      nNew: 202,
      $new: 12820,
      nRet: 134,
      $ret: 11183,
      tot: 336,
      ncrev: 53.4,
      naov: 63.47,
      ncac: 33.28,
      roas: 2.89,
      rev: 24003,
      gm: 15745,
      profit: 5815
    }, {
      d: "Sep 12",
      w: "Sat",
      spend: 5411,
      dS: -19.5,
      ord: 126,
      dO: -37.6,
      nc: 9684,
      amer: 1.79,
      mer: 3.75,
      nNew: 126,
      $new: 9684,
      nRet: 128,
      $ret: 10601,
      tot: 254,
      ncrev: 47.7,
      naov: 76.86,
      ncac: 42.94,
      roas: 3.10,
      rev: 20285,
      gm: 12828,
      profit: 4539
    }, {
      d: "Sep 13",
      w: "Sun",
      spend: 4856,
      dS: -10.3,
      ord: 121,
      dO: -4.0,
      nc: 8865,
      amer: 1.83,
      mer: 4.04,
      nNew: 121,
      $new: 8865,
      nRet: 112,
      $ret: 10742,
      tot: 233,
      ncrev: 45.2,
      naov: 73.26,
      ncac: 40.13,
      roas: 3.51,
      rev: 19607,
      gm: 13020,
      profit: 5814
    }, {
      d: "Sep 14",
      w: "Mon",
      spend: 6243,
      dS: 28.6,
      ord: 156,
      dO: 28.9,
      nc: 11978,
      amer: 1.92,
      mer: 3.40,
      nNew: 156,
      $new: 11978,
      nRet: 99,
      $ret: 9251,
      tot: 255,
      ncrev: 56.4,
      naov: 76.78,
      ncac: 40.02,
      roas: 2.87,
      rev: 21229,
      gm: 13664,
      profit: 4711
    }, {
      d: "Sep 15",
      w: "Tue",
      spend: 5746,
      dS: -8.0,
      ord: 162,
      dO: 3.8,
      nc: 10550,
      amer: 1.84,
      mer: 3.98,
      nNew: 162,
      $new: 10550,
      nRet: 128,
      $ret: 12327,
      tot: 290,
      ncrev: 46.1,
      naov: 65.12,
      ncac: 35.47,
      roas: 3.03,
      rev: 22877,
      gm: 15355,
      profit: 6433
    }],
    totals: {
      spend: 93517,
      ord: 2568,
      nc: 179180,
      amer: 1.92,
      mer: 3.75,
      nNew: 2568,
      $new: 179180,
      nRet: 1962,
      $ret: 171889,
      tot: 4530,
      ncrev: 51.0,
      naov: 69.77,
      ncac: 36.42,
      roas: 3.09,
      rev: 351069,
      gm: 228588,
      profit: 87574
    },
    forecast: {
      spend: 187034,
      ord: 5136,
      nc: 358360,
      amer: 1.92,
      mer: 3.75,
      nNew: 5136,
      $new: 358360,
      nRet: 3924,
      $ret: 343778,
      tot: 9060,
      ncrev: 51.0,
      naov: 69.77,
      ncac: 36.42,
      roas: 3.09,
      rev: 702138,
      gm: 457177,
      profit: 175149
    },
    target: {
      spend: 210000,
      ord: 5600,
      nc: 470000,
      $new: 470000,
      rev: 1020000,
      profit: 250000
    },
    reqDay: {
      spend: 7766,
      ord: 202,
      nc: 19388,
      $new: 19388,
      rev: 44595,
      profit: 10828
    },
    channels: [{
      n: "Meta",
      spend: 47465,
      fcst: 50049,
      rev: 143111,
      roas: 3.02,
      tone: "info"
    }, {
      n: "Google",
      spend: 28496,
      fcst: 30008,
      rev: 106201,
      roas: 3.73,
      tone: "warn"
    }, {
      n: "AppLovin",
      spend: 17556,
      fcst: 18167,
      rev: 39258,
      roas: 2.24,
      tone: "violet"
    }, {
      n: "Organic",
      spend: null,
      fcst: null,
      rev: 62499,
      roas: null,
      tone: "mute"
    }]
  },
  // ---------------------------------------------------------------- COHORT LTV
  cohort: {
    def: "A cohort is the product and coupon on a customer's first order, never reassigned. LTV is cumulative net revenue per acquired customer, by days since that customer's own first order.",
    basis: "LTV basis is net revenue only, one curve per cohort. Windows are rolling days from each customer's first order at 30, 60, 90, 180 and 365, and include every later order across any product, not just repeats of the cohort product.",
    marks: ["Day 0", "M1", "M2", "M3", "M6", "M12"],
    byProduct: {
      head: [{
        label: "Blended first-order AOV",
        value: "$35.84",
        sub: "20,700 customers"
      }, {
        label: "Blended M12 LTV",
        value: "$161.97",
        sub: "4.52x first-order value"
      }, {
        label: "Top M12 cohort",
        value: "Capsules",
        sub: "$289.30 per customer",
        tone: "warn"
      }, {
        label: "Best LTV multiple",
        value: "6.55x",
        sub: "Capsules",
        tone: "good"
      }],
      rows: [{
        n: "Dubai Chocolate",
        c: 5240,
        aov: 42.50,
        m1: 54.10,
        m2: 74.60,
        m3: 92.30,
        m6: 128.70,
        m12: 171.40,
        x: 4.03,
        tone: "info"
      }, {
        n: "Capsules",
        c: 2890,
        aov: 44.20,
        m1: 62.40,
        m2: 96.10,
        m3: 128.70,
        m6: 198.50,
        m12: 289.30,
        x: 6.55,
        tone: "warn"
      }, {
        n: "Strawberry Mango Gummies",
        c: 3050,
        aov: 27.40,
        m1: 36.20,
        m2: 52.10,
        m3: 66.40,
        m6: 95.30,
        m12: 132.60,
        x: 4.84,
        tone: "good"
      }, {
        n: "Blue Raspberry Gummies",
        c: 2470,
        aov: 26.10,
        m1: 34.00,
        m2: 49.20,
        m3: 62.50,
        m6: 88.10,
        m12: 121.70,
        x: 4.66,
        tone: "violet"
      }, {
        n: "Espresso Chocolate",
        c: 1640,
        aov: 35.60,
        m1: 47.30,
        m2: 68.40,
        m3: 87.20,
        m6: 126.90,
        m12: 172.10,
        x: 4.83,
        tone: "bad"
      }, {
        n: "Toffee Chocolate",
        c: 1780,
        aov: 33.80,
        m1: 43.10,
        m2: 60.20,
        m3: 74.60,
        m6: 101.30,
        m12: 134.80,
        x: 3.99,
        tone: "good"
      }, {
        n: "Mint Chocolate",
        c: 2110,
        aov: 31.20,
        m1: 40.40,
        m2: 56.30,
        m3: 69.10,
        m6: 96.20,
        m12: 128.50,
        x: 4.12,
        tone: "accent"
      }, {
        n: "Love Gummies",
        c: 1520,
        aov: 38.90,
        m1: 43.20,
        m2: 51.40,
        m3: 57.60,
        m6: 68.30,
        m12: 79.10,
        x: 2.03,
        tone: "bad"
      }]
    },
    byCoupon: {
      head: [{
        label: "Blended first-order AOV",
        value: "$57.79",
        sub: "12,640 customers"
      }, {
        label: "Blended M12 LTV",
        value: "$190.32",
        sub: "3.29x first-order value"
      }, {
        label: "Top M12 cohort",
        value: "No coupon",
        sub: "$231.80 per customer",
        tone: "info"
      }, {
        label: "Best LTV multiple",
        value: "3.58x",
        sub: "WELCOME15",
        tone: "good"
      }],
      rows: [{
        n: "No coupon",
        c: 5210,
        aov: 68.70,
        m1: 82.40,
        m2: 108.90,
        m3: 131.20,
        m6: 176.50,
        m12: 231.80,
        x: 3.37,
        tone: "info"
      }, {
        n: "WELCOME15",
        c: 4380,
        aov: 54.10,
        m1: 66.80,
        m2: 89.70,
        m3: 108.40,
        m6: 148.20,
        m12: 193.60,
        x: 3.58,
        tone: "warn"
      }, {
        n: "SAVE25",
        c: 1930,
        aov: 47.30,
        m1: 55.20,
        m2: 71.60,
        m3: 84.90,
        m6: 106.10,
        m12: 128.40,
        x: 2.71,
        tone: "good"
      }, {
        n: "BOGO Launch",
        c: 1120,
        aov: 39.60,
        m1: 44.80,
        m2: 56.30,
        m3: 64.70,
        m6: 78.90,
        m12: 91.20,
        x: 2.30,
        tone: "violet"
      }]
    },
    aovByCategory: [{
      n: "Chocolates",
      aov: 37.80,
      c: 10770,
      x: 4.16,
      tone: "info"
    }, {
      n: "Gummies",
      aov: 26.82,
      c: 5520,
      x: 4.76,
      tone: "warn"
    }, {
      n: "Love Gummies",
      aov: 38.90,
      c: 1520,
      x: 2.03,
      tone: "good"
    }, {
      n: "Capsules",
      aov: 44.20,
      c: 2890,
      x: 6.55,
      tone: "violet"
    }]
  }
};

/* ==== data4.jsx ==== */
// data4.jsx, sub-tab views. Modeled, shaped to demonstrate the surface.
// Cash forecast, transactions, reorders, stock movements, boardroom insights
// and sync status.

const D4 = {
  // ---------------------------------------------------------------- CASH FORECAST
  // Thirteen weeks from the current balance. Inflows net of fees and reserve.
  forecast: {
    open: 40347,
    floor: 22500,
    weeks: [{
      w: "Sep 21",
      inn: 10840,
      fixed: 3240,
      variable: 1510,
      debt: 0
    }, {
      w: "Sep 28",
      inn: 10620,
      fixed: 3240,
      variable: 1480,
      debt: 9481,
      note: "Buyout Oct 1"
    }, {
      w: "Oct 5",
      inn: 11050,
      fixed: 3310,
      variable: 1540,
      debt: 0
    }, {
      w: "Oct 12",
      inn: 11230,
      fixed: 3240,
      variable: 9800,
      debt: 0,
      note: "Dubai Chocolate reorder, first half"
    }, {
      w: "Oct 19",
      inn: 11410,
      fixed: 3240,
      variable: 1590,
      debt: 0
    }, {
      w: "Oct 26",
      inn: 11380,
      fixed: 3240,
      variable: 1580,
      debt: 9407,
      note: "Buyout Nov 1"
    }, {
      w: "Nov 2",
      inn: 11720,
      fixed: 3310,
      variable: 1630,
      debt: 0
    }, {
      w: "Nov 9",
      inn: 11940,
      fixed: 3240,
      variable: 9800,
      debt: 0,
      note: "Dubai Chocolate reorder, second half"
    }, {
      w: "Nov 16",
      inn: 12260,
      fixed: 3240,
      variable: 1710,
      debt: 0
    }, {
      w: "Nov 23",
      inn: 13480,
      fixed: 3240,
      variable: 1880,
      debt: 0,
      note: "Holiday week"
    }, {
      w: "Nov 30",
      inn: 12910,
      fixed: 3310,
      variable: 1800,
      debt: 9333,
      note: "Buyout Dec 1"
    }, {
      w: "Dec 7",
      inn: 12640,
      fixed: 3240,
      variable: 1760,
      debt: 0
    }, {
      w: "Dec 14",
      inn: 12420,
      fixed: 3240,
      variable: 1730,
      debt: 0
    }]
  },
  // ---------------------------------------------------------------- TRANSACTIONS
  transactions: [{
    d: "Sep 17",
    desc: "Rail A settlement",
    acct: "BlueBanc · Settlement",
    cat: "Sales",
    amt: 1624,
    st: "matched"
  }, {
    d: "Sep 17",
    desc: "Sweep to operating",
    acct: "Mercury · Operating",
    cat: "Transfer",
    amt: 4800,
    st: "matched"
  }, {
    d: "Sep 16",
    desc: "Rail B settlement",
    acct: "BlueBanc · Settlement",
    cat: "Sales",
    amt: 1138,
    st: "matched"
  }, {
    d: "Sep 16",
    desc: "3PL monthly invoice",
    acct: "Mercury · Operating",
    cat: "Fulfillment",
    amt: -1890,
    st: "matched"
  }, {
    d: "Sep 16",
    desc: "Email platform",
    acct: "Chase card",
    cat: "Software",
    amt: -350,
    st: "review"
  }, {
    d: "Sep 15",
    desc: "Rail C settlement",
    acct: "BlueBanc · Settlement",
    cat: "Sales",
    amt: 612,
    st: "matched"
  }, {
    d: "Sep 15",
    desc: "Rail C reserve hold",
    acct: "BlueBanc · Settlement",
    cat: "Processing",
    amt: -61,
    st: "matched"
  }, {
    d: "Sep 15",
    desc: "Payroll",
    acct: "Mercury · Operating",
    cat: "Payroll",
    amt: -4210,
    st: "matched"
  }, {
    d: "Sep 14",
    desc: "Packaging supplier",
    acct: "Chase card",
    cat: "Cost of goods",
    amt: -1480,
    st: "matched"
  }, {
    d: "Sep 14",
    desc: "Refund, order 48213",
    acct: "BlueBanc · Settlement",
    cat: "Refunds",
    amt: -69,
    st: "matched"
  }, {
    d: "Sep 13",
    desc: "Ingredient run",
    acct: "Chase card",
    cat: "Cost of goods",
    amt: -2340,
    st: "review"
  }, {
    d: "Sep 12",
    desc: "Kitchen rent",
    acct: "Mercury · Operating",
    cat: "Rent",
    amt: -2200,
    st: "matched"
  }, {
    d: "Sep 12",
    desc: "Wholesale invoice paid",
    acct: "Mercury · Operating",
    cat: "Sales",
    amt: 1380,
    st: "matched"
  }, {
    d: "Sep 11",
    desc: "Unknown debit",
    acct: "BlueBanc · Settlement",
    cat: "Uncategorized",
    amt: -214,
    st: "open"
  }],
  // ---------------------------------------------------------------- REORDERS
  // cost comes from D.inventory[].po so both tabs agree; qty = cost / unit
  reorders: [{
    sku: "Dubai Chocolate",
    cover: 8,
    lead: 21,
    qty: 5300,
    unit: 6.72,
    supplier: "Own kitchen",
    st: "late"
  }, {
    sku: "Strawberry Mango Gummies",
    cover: 21,
    lead: 24,
    qty: 4700,
    unit: 10.00,
    supplier: "LA Manufacturer",
    st: "late"
  }, {
    sku: "Sea Salt Chocolate",
    cover: 34,
    lead: 18,
    qty: 4100,
    unit: 6.26,
    supplier: "Own kitchen",
    st: "soon"
  }, {
    sku: "Micro Caps",
    cover: 0,
    lead: 30,
    qty: null,
    unit: 10.00,
    supplier: "LA Manufacturer",
    st: "blocked",
    note: "Never produced. Needs a launch decision, not a reorder."
  }, {
    sku: "Mint Chocolate",
    cover: 68,
    lead: 18,
    qty: 0,
    unit: 6.91,
    supplier: "Own kitchen",
    st: "ok"
  }],
  // ---------------------------------------------------------------- MOVEMENTS
  movements: [{
    d: "Sep 17",
    sku: "Dubai Chocolate",
    type: "Shipped",
    qty: -38,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 17",
    sku: "Sea Salt Chocolate",
    type: "Shipped",
    qty: -24,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 16",
    sku: "Strawberry Mango Gummies",
    type: "Shipped",
    qty: -31,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 16",
    sku: "Dubai Chocolate",
    type: "Wholesale",
    qty: -48,
    where: "3PL",
    logged: false
  }, {
    d: "Sep 15",
    sku: "Mint Chocolate",
    type: "Sample",
    qty: -12,
    where: "Kitchen",
    logged: false
  }, {
    d: "Sep 15",
    sku: "Blue Raspberry Gummies",
    type: "Received",
    qty: 1200,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 14",
    sku: "Dubai Chocolate",
    type: "Reship",
    qty: -6,
    where: "3PL",
    logged: false
  }, {
    d: "Sep 13",
    sku: "Toffee Chocolate",
    type: "Comp",
    qty: -4,
    where: "Kitchen",
    logged: false
  }, {
    d: "Sep 12",
    sku: "Sea Salt Chocolate",
    type: "Received",
    qty: 1180,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 12",
    sku: "Matcha Chocolate",
    type: "Adjustment",
    qty: -40,
    where: "3PL",
    logged: true,
    note: "Count variance"
  }, {
    d: "Sep 11",
    sku: "Espresso Chocolate",
    type: "Shipped",
    qty: -19,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 10",
    sku: "Strawberry Mango Gummies",
    type: "Sample",
    qty: -20,
    where: "3PL",
    logged: false
  }],
  // ---------------------------------------------------------------- INSIGHTS
  insights: [{
    tone: "bad",
    title: "Retention is the leak, not acquisition",
    num: "30 to 3",
    sub: "subscriptions to third rebill",
    why: "You pay full price for every customer and keep about one in ten past the third rebill. More traffic makes that number bigger, not better.",
    go: "subs",
    cta: "Subscriptions"
  }, {
    tone: "bad",
    title: "Dubai Chocolate runs out before a reorder can land",
    num: "8 of 21",
    sub: "days of cover against lead time",
    why: "Your best seller stocks out in about two weeks unless the run is already moving. The reorder costs more than the free cash above the floor.",
    go: "inventory",
    cta: "Inventory"
  }, {
    tone: "warn",
    title: "The basket shrank, the volume didn't",
    num: "$195 to $121",
    sub: "revenue per shipment since November",
    why: "Shipments held flat while revenue fell a third. That's a basket and mix problem, and it has a different fix from a demand problem.",
    go: "revenue",
    cta: "Revenue"
  }, {
    tone: "warn",
    title: "Fixed costs are double the benchmark",
    num: "30% vs 15%",
    sub: "of revenue",
    why: "About $7,000 a month of gap. It's the largest lever left on the cost side and it doesn't depend on selling more.",
    go: "pl",
    cta: "Profit and loss"
  }, {
    tone: "warn",
    title: "Declines cost more than they look",
    num: "94.75%",
    sub: "approval against a 98% target",
    why: "Three points of approval is about $18,000 a year of orders customers already tried to pay for.",
    go: "rails",
    cta: "Payment rails"
  }, {
    tone: "good",
    title: "Rebills are recovering",
    num: "27% to 74%",
    sub: "rebill rate, July to September",
    why: "Credentials are restored. The retry rebuild closes most of the rest before any retention offer needs to run.",
    go: "subs",
    cta: "Subscriptions"
  }],
  // ---------------------------------------------------------------- SYNC STATUS
  sync: [{
    n: "Mercury",
    last: "2 min ago",
    every: "15 min",
    s: "live"
  }, {
    n: "BlueBanc",
    last: "2 min ago",
    every: "15 min",
    s: "live"
  }, {
    n: "Xero",
    last: "1 hr ago",
    every: "hourly",
    s: "live"
  }, {
    n: "Order platform",
    last: "4 min ago",
    every: "5 min",
    s: "live"
  }, {
    n: "Affiliate platform",
    last: "12 min ago",
    every: "15 min",
    s: "live"
  }, {
    n: "Chase card",
    last: "Sep 5",
    every: "manual",
    s: "partial"
  }, {
    n: "Processors",
    last: "6 hr ago",
    every: "daily",
    s: "partial"
  }, {
    n: "Warehouse",
    last: "Never",
    every: "hourly",
    s: "blocked"
  }, {
    n: "Email platform",
    last: "Never",
    every: "hourly",
    s: "blocked"
  }, {
    n: "Attribution history",
    last: "Never",
    every: "once",
    s: "blocked"
  }, {
    n: "Kitchen ledger",
    last: "Never",
    every: "per run",
    s: "waiting"
  }, {
    n: "Site analytics",
    last: "3 hr ago",
    every: "hourly",
    s: "partial"
  }]
};

/* ==== data5.jsx ==== */
// data5.jsx, the team layer. Seats, scorecards and the weekly score log.
// Folded from the MYND role documents, Metrics by role, Role scorecards and
// the Metrics tracker, September 18, 2026. Every seat is scored on every
// metric it's held to, not just the primary one. Targets, cadence, sources and
// status logic match the Metrics tracker. Sample history is modeled.

const WEEKS = ["Sep 21", "Sep 28", "Oct 5", "Oct 12", "Oct 19", "Oct 26", "Nov 2", "Nov 9", "Nov 16", "Nov 23", "Nov 30", "Dec 7", "Dec 14", "Dec 21", "Dec 28", "Jan 4", "Jan 11", "Jan 18", "Jan 25", "Feb 1", "Feb 8", "Feb 15", "Feb 22", "Mar 1", "Mar 8", "Mar 15"];

// Seat-level context. measure and need describe the primary number.
// unit on metrics: "n" count, "h" hours, "pct" percent, "usd" dollars, "rate" units per dollar, "yes" 1 or 0
const SEATS = [{
  id: "founder",
  seat: "Founder and Owner",
  short: "Founder",
  who: "DB",
  reports: null,
  line: "Set direction, hold the relationships only an owner can hold, and get out of the way of everything else.",
  manages: "Direction, money movement, processors, outside advisors",
  not: "The day to day. That's the COO.",
  measure: "Measurable",
  need: "Decision log, already running",
  doc: "09 Founder and Owner"
}, {
  id: "coo",
  seat: "Chief Operating Officer",
  short: "COO",
  who: "Camila",
  reports: "founder",
  line: "Run the day to day so the business works without the owner in the middle of every task.",
  manages: "Suppliers and manufacturers, the warehouse, day to day coordination",
  not: "Recipes, code or brand direction.",
  measure: "Needs 30 days",
  need: "History before a target means anything",
  doc: "01 Chief Operating Officer"
}, {
  id: "content",
  seat: "Content and Brand Lead",
  short: "Content and Brand",
  who: "Rebekka",
  reports: "founder",
  line: "Own the brand and make the outside teams work as one.",
  manages: "The email and SMS agency, the creator VA, brand review",
  not: "What gets built or when. Paid advertising.",
  measure: "Needs attribution",
  need: "Channel revenue, blocked until attribution is rebuilt",
  doc: "02 Content and Brand Lead"
}, {
  id: "dev",
  seat: "Developer",
  short: "Developer",
  who: "Victor",
  reports: "founder",
  line: "Ship the features that let customers do more for themselves and let the business earn more per customer.",
  manages: "The codebase and the three repositories",
  not: "Brand, copy or what the offer is. Takes work only from the owner.",
  measure: "Needs roadmap",
  need: "A written roadmap to ship against",
  doc: "03 Developer"
}, {
  id: "support",
  seat: "Customer Support",
  short: "Support",
  who: "S.J.",
  reports: "founder",
  moving: "coo",
  line: "Get customer problems resolved fast, and make sure nothing sits waiting.",
  manages: "The support inbox and every open customer issue",
  not: "Refund policy, pricing or anything that changes the offer.",
  measure: "Needs build",
  need: "Resolution timestamps out of the support tool",
  doc: "04 Customer Support"
}, {
  id: "wholesale",
  seat: "Wholesale and Clinic Sales",
  short: "Wholesale",
  who: "Clinic channel",
  reports: "founder",
  line: "Open and hold wholesale accounts, so revenue stops depending only on direct consumers.",
  manages: "The wholesale pipeline and every account in it",
  not: "Pricing, terms, or placing orders with the warehouse.",
  measure: "Measurable",
  need: "Activity log, already running",
  doc: "05 Wholesale and Clinic Sales"
}, {
  id: "kitchen",
  seat: "Kitchen and Production",
  short: "Kitchen",
  who: "Jose",
  reports: "founder",
  moving: "coo",
  line: "Make the product, on schedule, at a cost the business can measure.",
  manages: "The kitchen, the production schedule, ingredient ordering for a run",
  not: "What gets made or how much. That comes from the reorder plan.",
  measure: "Needs three runs",
  need: "Logged runs per product",
  doc: "06 Kitchen and Production"
}, {
  id: "warehouse",
  seat: "Fulfillment and the Warehouse",
  short: "Warehouse",
  who: "Owned by the COO",
  reports: "coo",
  relationship: true,
  line: "The warehouse ships what customers order, accurately and on time, and the numbers prove it.",
  manages: "A relationship, not a person. The COO owns it. The owner handles anything financial.",
  not: "Customer communication or what gets reordered.",
  measure: "Needs access",
  need: "Order and inventory accuracy from their system",
  doc: "07 Fulfillment and the Warehouse"
}, {
  id: "ea",
  seat: "Executive Assistant",
  short: "Assistant",
  who: "Assistant",
  reports: "founder",
  line: "Take the small work off the owner, then turn it into something that runs without either of you.",
  manages: "The owner's inbox, vendor admin, whatever is being handed over",
  not: "Banking, payments or spend decisions.",
  measure: "Needs build",
  need: "A simple count of what moved each week",
  doc: "08 Executive Assistant"
}];

// Every metric each seat is held to. Generated from the same spec as the Metrics tracker.
// kind: max (at or under), min (at or over), up (rising), down (flat or falling), yes (1 yes, 0 no)
const METRICS = [{
  seat: "founder",
  id: "f_dec",
  name: "Decisions routed through him each week",
  primary: true,
  kind: "max",
  v: 5,
  target: "Under 5",
  unit: "n",
  cadence: "Weekly",
  source: "Decision log"
}, {
  seat: "founder",
  id: "f_xfer",
  name: "Functions transferred and holding",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Monthly",
  source: "Transfer log"
}, {
  seat: "founder",
  id: "f_growth",
  name: "Share of week on growth",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising from 10%",
  unit: "pct",
  cadence: "Monthly",
  source: "Self report"
}, {
  seat: "coo",
  id: "c_dec",
  name: "Operational decisions closed without the owner",
  primary: true,
  kind: "up",
  v: null,
  target: "Rising. Baseline at 30 days",
  unit: "n",
  cadence: "Weekly",
  source: "Decision log"
}, {
  seat: "coo",
  id: "c_lead",
  name: "Products under lead time",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Weekly",
  source: "Inventory system"
}, {
  seat: "coo",
  id: "c_reorder",
  name: "Reorders placed inside lead time",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Purchase log"
}, {
  seat: "coo",
  id: "c_late",
  name: "Liabilities paid late",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Monthly",
  source: "Accounting"
}, {
  seat: "content",
  id: "b_rev",
  name: "Revenue from organic social",
  primary: true,
  kind: "up",
  v: null,
  target: "Profitable",
  unit: "usd",
  cadence: "Monthly",
  source: "Attribution, once rebuilt"
}, {
  seat: "content",
  id: "b_review",
  name: "Published without brand review",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Weekly",
  source: "Publishing log"
}, {
  seat: "content",
  id: "b_mismatch",
  name: "Site and email mismatches",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Monthly",
  source: "Incident note"
}, {
  seat: "content",
  id: "b_va",
  name: "Creator VA system documented",
  primary: false,
  kind: "yes",
  v: 1,
  target: "Yes",
  unit: "yes",
  cadence: "Monthly",
  source: "The document"
}, {
  seat: "dev",
  id: "d_road",
  name: "Roadmap items shipped each week",
  primary: true,
  kind: "up",
  v: null,
  target: "Per roadmap",
  unit: "n",
  cadence: "Weekly",
  source: "Roadmap"
}, {
  seat: "dev",
  id: "d_bugs",
  name: "Customer-blocking bugs open over a day",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Daily",
  source: "Issue list"
}, {
  seat: "dev",
  id: "d_handover",
  name: "Handover document current",
  primary: false,
  kind: "yes",
  v: 1,
  target: "Yes",
  unit: "yes",
  cadence: "Monthly",
  source: "The document"
}, {
  seat: "support",
  id: "s_resolve",
  name: "Time to resolve, median hours",
  primary: true,
  kind: "max",
  v: 24,
  target: "Under 24 hours",
  unit: "h",
  cadence: "Weekly",
  source: "Support tool"
}, {
  seat: "support",
  id: "s_reply",
  name: "Time to first reply, median hours",
  primary: false,
  kind: "max",
  v: 24,
  target: "Under 1 business day, scored at 24 hours",
  unit: "h",
  cadence: "Weekly",
  source: "Support tool"
}, {
  seat: "support",
  id: "s_open",
  name: "Issues open past a day",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Daily",
  source: "Support tool"
}, {
  seat: "support",
  id: "s_repeat",
  name: "Repeat questions turned into written answers",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Monthly",
  source: "Site content"
}, {
  seat: "wholesale",
  id: "w_out",
  name: "Outbound activity per day",
  primary: true,
  kind: "min",
  v: 10,
  target: "10 or more a day",
  unit: "n",
  cadence: "Daily",
  source: "Activity log"
}, {
  seat: "wholesale",
  id: "w_inbound",
  name: "Inbound answered same day",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Weekly",
  source: "Inbox"
}, {
  seat: "wholesale",
  id: "w_opened",
  name: "Accounts opened",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Monthly",
  source: "Order records"
}, {
  seat: "wholesale",
  id: "w_reorder",
  name: "Accounts reordering on pattern",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "pct",
  cadence: "Monthly",
  source: "Order records"
}, {
  seat: "kitchen",
  id: "k_output",
  name: "Output per dollar",
  primary: true,
  kind: "up",
  v: null,
  target: "Measured, then rising",
  unit: "rate",
  cadence: "Per run",
  source: "Run log"
}, {
  seat: "kitchen",
  id: "k_logged",
  name: "Runs logged with all three fields",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Run log"
}, {
  seat: "kitchen",
  id: "k_sched",
  name: "Runs completed on schedule",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Production schedule"
}, {
  seat: "kitchen",
  id: "k_costed",
  name: "Products with a measured cost",
  primary: false,
  kind: "min",
  v: 10,
  target: "All 10",
  unit: "n",
  cadence: "Monthly",
  source: "Run log"
}, {
  seat: "warehouse",
  id: "h_order",
  name: "Order accuracy",
  primary: true,
  kind: "min",
  v: 99.5,
  target: "99.5% or better",
  unit: "pct",
  cadence: "Monthly",
  source: "Warehouse system"
}, {
  seat: "warehouse",
  id: "h_inv",
  name: "Inventory accuracy",
  primary: false,
  kind: "min",
  v: 98,
  target: "98 to 99%",
  unit: "pct",
  cadence: "Monthly",
  source: "Warehouse system"
}, {
  seat: "warehouse",
  id: "h_freight",
  name: "Freight as a share of revenue",
  primary: false,
  kind: "down",
  v: null,
  target: "Flat or falling",
  unit: "pct",
  cadence: "Monthly",
  source: "Warehouse invoices"
}, {
  seat: "warehouse",
  id: "h_unrec",
  name: "Orders that never reached the platform",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Monthly",
  source: "Reconciliation"
}, {
  seat: "ea",
  id: "e_tasks",
  name: "Tasks taken off the owner each week",
  primary: true,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Weekly",
  source: "Transfer log"
}, {
  seat: "ea",
  id: "e_doc",
  name: "Handed-over tasks with a written version",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Task notes"
}, {
  seat: "ea",
  id: "e_cred",
  name: "Credential list current",
  primary: false,
  kind: "yes",
  v: 1,
  target: "Yes",
  unit: "yes",
  cadence: "Monthly",
  source: "The list"
}];

// Modeled twelve weeks per metric. Gaps are real states: not built yet, or read monthly or per run.
const SAMPLE_LOG = {
  f_dec: [14, 14, 13, 12, 12, 11, 10, 9, 9, 8, 7, 7],
  f_xfer: [null, null, 1, null, null, null, 2, null, null, null, 3, null],
  f_growth: [null, null, 10, null, null, null, 14, null, null, null, 18, null],
  c_dec: [3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
  c_lead: [3, 3, 2, 2, 3, 2, 2, 1, 2, 2, 2, 2],
  c_reorder: [null, null, 50, null, null, null, 67, null, null, null, 75, null],
  c_late: [null, null, 1, null, null, null, 0, null, null, null, 0, null],
  b_rev: [null, null, null, null, null, null, 1240, null, null, null, 1610, null],
  b_review: [2, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
  b_mismatch: [null, null, 1, null, null, null, 0, null, null, null, 0, null],
  b_va: [null, null, 0, null, null, null, 0, null, null, null, 0, null],
  d_road: [null, null, 2, 3, 1, 3, 4, 3, 2, 4, 3, 4],
  d_bugs: [1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0],
  d_handover: [null, null, 0, null, null, null, 0, null, null, null, 1, null],
  s_resolve: [null, null, 31, 28, 26, 22, 20, 19, 21, 18, 17, 16],
  s_reply: [null, null, 20, 18, 16, 15, 14, 15, 14, 13, 14, 14],
  s_open: [null, null, 4, 3, 3, 2, 2, 3, 2, 2, 2, 2],
  s_repeat: [null, null, 2, null, null, null, 4, null, null, null, 6, null],
  w_out: [10, 9, 11, 12, 8, 10, 11, 12, 13, 12, 14, 13],
  w_inbound: [100, 100, 0, 100, 100, 100, 0, 100, 100, 0, 100, 100],
  w_opened: [null, null, 0, null, null, null, 1, null, null, null, 2, null],
  w_reorder: [null, null, null, null, null, null, 50, null, null, null, 50, null],
  k_output: [null, 0.52, null, 0.55, null, 0.54, null, 0.58, null, 0.61, null, 0.6],
  k_logged: [null, null, 50, null, null, null, 67, null, null, null, 83, null],
  k_sched: [null, null, 100, null, null, null, 100, null, null, null, 50, null],
  k_costed: [null, null, 1, null, null, null, 3, null, null, null, 3, null],
  h_order: [null, null, null, null, null, null, 99.1, null, null, null, 99.6, null],
  h_inv: [null, null, null, null, null, null, 97.2, null, null, null, 98.4, null],
  h_freight: [null, null, null, null, null, null, 11.8, null, null, null, 11.2, null],
  h_unrec: [null, null, null, null, null, null, 9, null, null, null, 6, null],
  e_tasks: [4, 6, 5, 7, 8, 8, 9, 11, 10, 12, 12, 13],
  e_doc: [null, null, 50, null, null, null, 60, null, null, null, 70, null],
  e_cred: [null, null, 1, null, null, null, 1, null, null, null, 1, null]
};

// What moves off the owner, in order, and where each one is in the three-step
// transfer: watch him do it, do it with him watching, do it alone.
const TRANSFERS = [{
  f: "Reordering product",
  stage: "First",
  to: "COO",
  step: 2
}, {
  f: "Tracking every consumable",
  stage: "First",
  to: "COO",
  step: 1
}, {
  f: "Supplier coordination",
  stage: "First",
  to: "COO",
  step: 1
}, {
  f: "Invoicing and paying liabilities",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Manufacturer runs and their problems",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Lab testing and what comes back",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Reorders and wholesale orders with the warehouse",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Wholesale inquiries from the site",
  stage: "Next",
  to: "Wholesale",
  step: 0
}, {
  f: "Vendor communication",
  stage: "Held",
  to: "Owner, for control",
  step: null
}];
const TRANSFER_STEPS = ["Not started", "Watched him do it", "Done with him watching", "Done alone, written"];
const OWNER = {
  only: ["Move money", "Pay the card", "Communicate with the payment processors and the broker", "Communicate with outside advisors"],
  choice: ["Packaging and brand design", "Deal structure", "Setting up anything new, before it runs"],
  quote: "Nothing really. Everything can be hired for."
};

/* ==== period.jsx ==== */
// period.jsx, the period selector engine.
// The mock stores flow figures at 30 days. This rescales them to the selected
// window. Balances, rates, targets and monthly trends don't move.
// In the live build this file goes away: the reporting layer returns each
// window directly from the data contract.

const PERIOD_BASE = JSON.parse(JSON.stringify({
  D,
  D2,
  D3
}));
const PERIOD_TODAY = 17; // Sep 17, matches D3.live.day
const PERIOD_DAYS = {
  "1 day": 1,
  "7 days": 7,
  "30 days": 30,
  "90 days": 90,
  "MTD": PERIOD_TODAY
};
const PERIOD = {
  label: "30 days",
  short: "30d",
  days: 30,
  custom: false
};
const pRound = v => Math.round(v);
const pMoney = (s, f) => typeof s !== "string" ? s : s.replace(/([+-]?)\$([\d,]+(?:\.\d+)?)/, (m, sg, n) => sg + "$" + pRound(parseFloat(n.replace(/,/g, "")) * f).toLocaleString("en-US"));
const pCount = (s, f) => typeof s !== "string" ? s : s.replace(/^([\d,]+)$/, (m, n) => pRound(parseFloat(n.replace(/,/g, "")) * f).toLocaleString("en-US"));
const p30 = (s, short) => typeof s !== "string" ? s : s.replace(/30d\b/g, short).replace(/30 day/g, short === "1d" ? "1 day" : short.replace("d", " day"));
function periodShort(label, days) {
  return {
    "1 day": "1d",
    "7 days": "7d",
    "30 days": "30d",
    "90 days": "90d",
    "MTD": "MTD"
  }[label] || days + "d";
}
function applyPeriod(label, customDays) {
  const days = label === "Custom" ? Math.max(1, customDays || 30) : PERIOD_DAYS[label];
  const short = periodShort(label, days);
  const f = days / 30;
  Object.assign(PERIOD, {
    label: label === "Custom" ? days + (days === 1 ? " day" : " days") : label,
    short,
    days,
    custom: label === "Custom"
  });

  // restore the 30 day base every time, then scale
  const base = JSON.parse(JSON.stringify(PERIOD_BASE));
  Object.keys(base.D).forEach(k => {
    D[k] = base.D[k];
  });
  Object.keys(base.D2).forEach(k => {
    D2[k] = base.D2[k];
  });
  Object.keys(base.D3).forEach(k => {
    D3[k] = base.D3[k];
  });
  if (days === 30 && label !== "Custom") return;

  // Boardroom tiles
  D.unit.forEach(u => {
    if (u.k === "rev") {
      u.value = pMoney(u.value, f);
      u.label = "Revenue · " + short;
    }
    if (u.k === "cm") {
      u.value = pMoney(u.value, f);
    }
    if (u.k === "burn") {
      u.value = pMoney(u.value, f);
      u.label = "Operating profit · " + short;
      u.sub = "30 day " + PERIOD_BASE.D.unit.find(x => x.k === "burn").value;
    }
  });
  D.funnel.forEach(r => {
    r.v = pRound(r.v * f);
    if (r.note === "30 days") r.note = PERIOD.label;
  });

  // Money. Up to 30 days, revenue, cost of delivery and marketing come from the daily
  // contribution table so the P&L, the tiles and the daily rows agree to the dollar.
  D.pl.forEach(r => {
    r.v = pRound(r.v * f);
  });
  if (days <= D.cmDaily.length) {
    const rows = label === "MTD" ? D.cmDaily.filter(r => r.m === 9) : D.cmDaily.slice(-days);
    const rev = rows.reduce((a, r) => a + r.rev, 0),
      cod = rows.reduce((a, r) => a + r.cod, 0),
      mkt = rows.reduce((a, r) => a + r.mkt, 0);
    const opex = pRound(PERIOD_BASE.D.pl.find(r => r.line === "OPEX").v * rows.length / 30);
    const cm = rev - cod - mkt,
      op = cm - opex;
    const set = {
      "Revenue": rev,
      "Cost of delivery": cod,
      "Marketing": mkt,
      "Contribution margin": cm,
      "OPEX": opex,
      "Operating profit": op
    };
    D.pl.forEach(r => {
      r.v = set[r.line];
      r.pct = rev ? +(r.v / rev * 100).toFixed(1) : 0;
      if (r.line === "Revenue") r.pct = 100;
    });
    D.unit.forEach(u => {
      if (u.k === "rev") u.value = fmt.usd(rev);
      if (u.k === "cm") {
        u.value = fmt.usd(cm);
        u.sub = fmt.pct(cm / rev * 100) + " of revenue";
      }
      if (u.k === "burn") u.value = (op >= 0 ? "+" : "-") + fmt.usd(Math.abs(op));
    });
  }
  D.rails.forEach(r => {
    r.g30 = r.gross;
    ["gross", "fees", "net"].forEach(k => {
      r[k] = pRound(r[k] * f);
    });
  });

  // Revenue
  D.channels.forEach(r => {
    r.v = pRound(r.v * f);
  });
  D.products.forEach(r => {
    r.units = pRound(r.units * f);
    r.rev = pRound(r.rev * f);
  });

  // Retention
  D2.retention.kpi.forEach(k => {
    if (k.label === "Email revenue") k.value = pMoney(k.value, f);
    if (k.label === "Referral code usage") k.value = pCount(k.value, f);
    k.sub = p30(k.sub, short);
  });
  D2.retention.sources.forEach(r => {
    r.v = pRound(r.v * f);
  });

  // Customer experience friction
  D2.ops.friction.forEach(r => {
    r.count = pRound(r.count * f);
    r.cost = pRound(r.cost * f);
  });

  // Marketing labels
  D2.mkt.headline.forEach(k => {
    k.label = p30(k.label, short);
  });
  D.ads.kpi.forEach(k => {
    k.label = p30(k.label, short);
  });

  // Daily tracker: keep the last N days on record, recompute the footer
  const rows = D3.daily.rows;
  const keep = label === "MTD" ? rows : rows.slice(-Math.min(days, rows.length));
  D3.daily.rows = keep;
  const sum = k => keep.reduce((s, r) => s + (r[k] || 0), 0);
  const t = {};
  ["spend", "ord", "nc", "nNew", "$new", "nRet", "$ret", "tot", "rev", "gm", "profit"].forEach(k => {
    t[k] = sum(k);
  });
  t.amer = t.nc / t.spend;
  t.mer = t.rev / t.spend;
  t.ncrev = t.$new / t.rev * 100;
  t.naov = t.$new / t.nNew;
  t.ncac = t.spend / t.nNew;
  t.roas = keep.reduce((s, r) => s + r.roas * r.spend, 0) / t.spend;
  const cf = t.spend / PERIOD_BASE.D3.daily.totals.spend;
  D3.daily.totals = t;
  D3.daily.channels.forEach(c => {
    if (c.spend != null) {
      c.spend = pRound(c.spend * cf);
      c.fcst = pRound(c.fcst * cf);
    }
    c.rev = pRound(c.rev * cf);
  });
}
function PeriodNote() {
  const rows = D3.daily.rows.length;
  const txt = PERIOD.days === 30 && !PERIOD.custom ? null : `Showing ${PERIOD.label}. Flow figures follow the period. Balances, rates and monthly trends don't.` + (PERIOD.days > rows ? ` The daily tracker has ${rows} days on record.` : "");
  return txt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      margin: "-8px 0 16px"
    }
  }, txt) : null;
}
function CustomRange({
  from,
  to,
  onChange
}) {
  const box = {
    background: "var(--surface-3)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--r-sm)",
    color: "var(--ink)",
    padding: "5px 8px",
    fontSize: 11.5,
    colorScheme: "inherit"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: from,
    max: to,
    onChange: e => onChange(e.target.value, to),
    style: box,
    "aria-label": "From"
  }), "to", /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: to,
    min: from,
    max: "2026-09-17",
    onChange: e => onChange(from, e.target.value),
    style: box,
    "aria-label": "To"
  }));
}
function rangeDays(from, to) {
  const a = new Date(from + "T00:00:00"),
    b = new Date(to + "T00:00:00");
  return Math.max(1, Math.round((b - a) / 864e5) + 1);
}

/* ==== ui.jsx ==== */
// ui.jsx, primitives. Pure SVG charts, no chart library.
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
const fmt = {
  usd: (n, d = 0) => n == null ? "-" : "$" + Number(n).toLocaleString("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  }),
  k: n => {
    if (n == null) return "-";
    const a = Math.abs(n);
    if (a >= 1e6) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1e6).toFixed(2) + "M";
    if (a >= 1000) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1000).toFixed(a >= 10000 ? 0 : 1) + "K";
    return (n < 0 ? "-$" : "$") + Math.abs(Math.round(n));
  },
  pct: (n, d = 1) => n == null ? "-" : Number(n).toFixed(d) + "%",
  n: n => n == null ? "-" : Number(n).toLocaleString("en-US")
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
  return /*#__PURE__*/React.createElement("div", {
    className: "card" + (hover ? " card-h" : ""),
    style: {
      padding: pad,
      ...style
    },
    ...r
  }, children);
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
  deltaUnit = "%",
  invert,
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
      textTransform: "none",
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
      color: delta > 0 !== !!invert ? "var(--good)" : "var(--bad)"
    }
  }, delta > 0 ? "\u2197" : "\u2198", Math.abs(delta), deltaUnit)), sub && /*#__PURE__*/React.createElement("span", {
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

/* funnel row: two-tone bar with count and share */
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
      textTransform: "none",
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
  })), vals.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: X(i) + "%",
      top: Y(v) + "%",
      width: 7,
      height: 7,
      borderRadius: 99,
      transform: "translate(-50%,-50%)",
      background: "var(--surface)",
      border: `1.6px solid ${T(tone)}`
    }
  })), target != null && tLabel && /*#__PURE__*/React.createElement("span", {
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
// pages-1.jsx, Boardroom, Goals, Org, Project Board, Money pages

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
    help: "The eight numbers that describe whether this business is working."
  }, "Unit economics · ", period), /*#__PURE__*/React.createElement(G, {
    c: 4,
    name: "4",
    style: {
      marginBottom: 26
    }
  }, D.unit.map(u => /*#__PURE__*/React.createElement(KPI, {
    key: u.k,
    ...u,
    onClick: () => go(u.k === "cash" || u.k === "debt" ? "cash" : u.k === "cm" || u.k === "burn" ? "pl" : u.k === "appr" ? "rails" : "revenue")
  }))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel",
    help: "Where people fall out between landing on the site and rebilling a third time.",
    right: `${PERIOD.label} window · site to third rebill`
  }, "The funnel · ", period), /*#__PURE__*/React.createElement(Card, {
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
      textTransform: "none",
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
    right: "September, through the 17th"
  }, "This month"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 14
  }, D.thisMonth.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "none",
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
  }, /*#__PURE__*/React.createElement(DistributionsTrend, {
    h: 168
  })), /*#__PURE__*/React.createElement(Card, {
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
      textTransform: "none",
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

/* owner distributions by month, used on the Boardroom and Financials */
function DistributionsTrend({
  h = 150
}) {
  const d = D.distributions,
    ytd = d.reduce((a, r) => a + r.v, 0);
  const paid = d.filter(r => r.v > 0).length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: `${fmt.usd(ytd)} this year`,
    help: "What you've taken out of the business as owner, by month. Before the Sep 15 cut-over these were draws taken whenever cash allowed. From the cut-over, the Owner profit bucket takes 15% of every sweep."
  }, "Distributions trend"), /*#__PURE__*/React.createElement(BarChart, {
    data: d.map((r, i) => ({
      ...r,
      tone: i === d.length - 1 ? "accent" : r.v ? "violet" : "info"
    })),
    h: h
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 12
    }
  }, paid, " of ", d.length, " months paid anything, and no two the same. September is month to date. From the cut-over the Owner profit bucket fills on every sweep, so this line should steady."));
}

/* ============================== GOALS ============================== */
function Goals({
  period
}) {
  const [kept, setKept] = useState(() => D.goals.map((_, i) => i));
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState({
    g: "",
    now: "",
    target: ""
  });
  const [extra, setExtra] = useState([]);
  const all = [...D.goals.filter((_, i) => kept.includes(i)), ...extra];
  const hit = all.filter(g => g.pct >= 90).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Goals and targets",
    sub: "Where every number sits against where it should sit.",
    meta: "Ten to start. Delete the ones you aren't sure about, add the ones you want.",
    right: /*#__PURE__*/React.createElement("button", {
      onClick: () => setAdding(a => !a),
      style: {
        border: "1px solid var(--rule)",
        background: adding ? "var(--accent)" : "var(--surface-3)",
        color: adding ? "#fff" : "var(--ink-soft)",
        borderRadius: "var(--r-pill)",
        padding: "6px 14px",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, adding ? "Cancel" : "+ Add a goal")
  }), adding && /*#__PURE__*/React.createElement(Card, {
    pad: 16,
    style: {
      marginBottom: 18,
      borderColor: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 10
  }, [["g", "What are you measuring"], ["now", "Where it sits now"], ["target", "Where it should be"]].map(([k, ph]) => /*#__PURE__*/React.createElement("input", {
    key: k,
    value: draft[k],
    placeholder: ph,
    onChange: e => setDraft(d => ({
      ...d,
      [k]: e.target.value
    })),
    style: {
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-sm)",
      padding: "8px 11px",
      color: "var(--ink)",
      fontSize: 12.5,
      fontFamily: "inherit",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (!draft.g) return;
      setExtra(x => [...x, {
        ...draft,
        pct: 50,
        tone: "warn",
        bench: null,
        note: "Added by you"
      }]);
      setDraft({
        g: "",
        now: "",
        target: ""
      });
      setAdding(false);
    },
    style: {
      border: "none",
      background: "var(--accent)",
      color: "#fff",
      borderRadius: "var(--r-sm)",
      padding: "8px 14px",
      fontSize: 12.5,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Add"))), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Goals tracked",
    value: String(all.length),
    tone: "ink",
    sub: `${D.goals.length - kept.length} removed`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "On target",
    value: `${hit} of ${all.length}`,
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
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 22
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target",
    help: "Current against target. The gray marker is the industry benchmark, not your target."
  }, "Scorecard"), all.map((g, i) => {
    const orig = D.goals.indexOf(g);
    return /*#__PURE__*/React.createElement("div", {
      key: g.g,
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => orig >= 0 ? setKept(k => k.filter(x => x !== orig)) : setExtra(x => x.filter(y => y.g !== g.g)),
      title: "Remove this goal",
      style: {
        position: "absolute",
        right: 0,
        top: 13,
        width: 20,
        height: 20,
        border: "1px solid var(--rule)",
        background: "transparent",
        color: "var(--ink-mute)",
        borderRadius: 5,
        cursor: "pointer",
        fontSize: 12,
        lineHeight: 1,
        padding: 0,
        display: "grid",
        placeItems: "center"
      }
    }, "×"), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingRight: 30
      }
    }, /*#__PURE__*/React.createElement(GoalRow, {
      label: g.g,
      now: g.now,
      target: g.target,
      pct: g.pct,
      tone: g.tone,
      note: g.note,
      bench: g.bench
    })));
  }), all.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-mute)",
      padding: "18px 0"
    }
  }, "All goals removed. Add the ones you actually want to run against.")));
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
      textTransform: "none",
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
    sub: "49% utilized",
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
  }, "↓"))), /*#__PURE__*/React.createElement(G, {
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
      textTransform: "none",
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
    sub: "The whole P&L on one page, against where a healthy DTC business sits.",
    meta: "Revenue less cost of delivery and marketing is contribution margin. Less fixed operating cost is operating profit. Debt service and distributions come after."
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
    key: r.line,
    style: {
      background: r.sub ? "var(--surface-3)" : undefined
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: r.sub ? 700 : 500
    }
  }, r.line), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: r.sub ? 700 : 400
    }
  }, fmt.usd(r.v)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: T(r.tone)
    }
  }, r.pct ? fmt.pct(r.pct) : "-"), /*#__PURE__*/React.createElement("td", {
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
  }, r.bench || "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, r.d || "-"))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, "Your fixed operating cost is 30% of revenue. A healthy DTC business runs near 15%. That gap is about $7,000 a month and it's the largest single lever left on the cost side."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(CMDaily, null), /*#__PURE__*/React.createElement(G, {
    c: 1,
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
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

/* daily contribution margin, follows the period selector */
function CMDaily() {
  const all = D.cmDaily;
  const rows = (PERIOD.label === "MTD" ? all.filter(r => r.m === 9) : all.slice(-Math.min(PERIOD.days, all.length))).slice().reverse();
  const t = rows.reduce((a, r) => ({
    rev: a.rev + r.rev,
    cod: a.cod + r.cod,
    mkt: a.mkt + r.mkt
  }), {
    rev: 0,
    cod: 0,
    mkt: 0
  });
  const cm = r => r.rev - r.cod - r.mkt;
  let run = 0;
  const cum = {};
  all.forEach(r => {
    run = (r.d === "Sep 1" ? 0 : run) + cm(r);
    cum[r.d] = run;
  });
  const short = PERIOD.days > all.length;
  return /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: `${rows.length} ${rows.length === 1 ? "day" : "days"}${short ? `, all ${all.length} on record` : ""} · newest first`,
    help: "Revenue less cost of delivery and marketing, every day. Fixed costs are left out on purpose, so this is the number each day's sales actually earned."
  }, "Contribution margin, daily")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x",
    style: {
      maxHeight: 420,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cost of delivery"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Marketing"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Contribution margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Month to date"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-3)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(t.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, "-", fmt.usd(t.cod)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, t.mkt ? "-" + fmt.usd(t.mkt) : "$0"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: "var(--good)"
    }
  }, fmt.usd(t.rev - t.cod - t.mkt)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.pct((t.rev - t.cod - t.mkt) / t.rev * 100)), /*#__PURE__*/React.createElement("td", null)), rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.d
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, r.d), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: r.w === "Sat" || r.w === "Sun" ? "var(--accent)" : "var(--ink-mute)"
    }
  }, r.w)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, "-", fmt.usd(r.cod)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-mute)"
    }
  }, r.mkt ? "-" + fmt.usd(r.mkt) : "$0"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: "var(--good)"
    }
  }, fmt.usd(cm(r))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, fmt.pct(cm(r) / r.rev * 100)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, fmt.usd(cum[r.d]))))))));
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
    sub: "Oct 1 · from debt bucket"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Card utilization",
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
    sub: PERIOD.label + ", all rails"
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
  }, r.fees ? "-" + fmt.usd(r.fees) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.res ? "var(--warn)" : "var(--ink-mute)"
    }
  }, r.res ? "-" + fmt.usd(r.res) : "-"), /*#__PURE__*/React.createElement("td", {
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
  }, r.pct ? fmt.pct(r.pct, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.appr >= 95 ? "var(--good)" : r.appr >= 92 ? "var(--warn)" : r.appr ? "var(--bad)" : "var(--ink-mute)"
    }
  }, r.appr ? fmt.pct(r.appr) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cb ? fmt.pct(r.cb, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 150
    }
  }, r.cap ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Bar, {
    pct: (r.g30 || r.gross) / r.cap * 100,
    tone: (r.g30 || r.gross) / r.cap > 0.8 ? "bad" : (r.g30 || r.gross) / r.cap > 0.6 ? "warn" : "good"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, fmt.k(r.g30 || r.gross), " of ", fmt.k(r.cap), " · 30d")) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11
    }
  }, "-")))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "The Kurv rail is capped at $25,000 in any 30 day period, contractual, with termination rights on breach. Across all rails you top out near $125,000 a month. A $3M run rate needs about $250,000."));
}

/* ==== pages-2.jsx ==== */
// pages-2.jsx, Revenue, Products, Subscriptions, Wholesale, Attribution, Ads,
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
    label: D.unit[0].label,
    value: D.unit[0].value,
    tone: "ink",
    delta: -4.1,
    spark: D.revMonthly.map(r => r.v)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Orders",
    value: fmt.n(D.funnel[3].v),
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
    sub: fmt.usd(D.channels[5].v) + " of revenue",
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
  }), l))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Shipments and fulfillment moved to Operations, where they belong. Retention now sits in its own page under Revenue."));
}

/* ============================== SUBSCRIPTIONS ============================== */
function Subs() {
  const s = D.subs;
  const cell = {
    textAlign: "right"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Subscriptions",
    sub: "Eight numbers. How many you have, how many start, how many stop, and who stays.",
    meta: "Last 30 days against the 30 before. Active at the end equals active at the start, plus new, less cancellations."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 14
    }
  }, s.kpi.slice(0, 4).map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, s.kpi.slice(4).map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "six months"
  }, "Month by month")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Month"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Active"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "New"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Cancellations"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Churn"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Net new"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "M1"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "M2"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "M3"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Rebill"))), /*#__PURE__*/React.createElement("tbody", null, s.months.map((r, i) => {
    const last = i === s.months.length - 1;
    return /*#__PURE__*/React.createElement("tr", {
      key: r.m,
      style: {
        fontWeight: last ? 600 : 400
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, r.m), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, fmt.n(r.active)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, r.neu), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, r.cancel), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, fmt.pct(r.churn)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        ...cell,
        color: r.net < 0 ? "var(--bad)" : "var(--good)"
      }
    }, r.net > 0 ? "+" : "", r.net), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, r.m1, "%"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, r.m2, "%"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        ...cell,
        color: "var(--bad)"
      }
    }, fmt.pct(r.m3)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, r.rebill, "%"));
  }))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "eight months"
  }, "Rebill rate"), /*#__PURE__*/React.createElement(Line, {
    data: s.rebill,
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
  }, "Fell to 27.3% when subscriber payment credentials broke. Restored and recovering. The retry rebuild closes the rest.")), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Net new has been negative every month on the page. Retention after the first rebill is where most of it goes, so M1 is the number to watch first. Offer testing and cancellation reasons get added once you've decided what you'd act on."));
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
    last: "-"
  }, {
    n: "Clinic D · Austin",
    st: "Pitched",
    orders: 0,
    rev: 0,
    last: "-"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Wholesale and clinics",
    sub: "The emerging channel. Commission-only rep, cold outbound.",
    meta: "Wholesale orders never touch the order platform, which is why they're invisible in revenue."
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
    value: fmt.usd(D.channels[2].v),
    tone: "ink",
    sub: PERIOD.label,
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
  }, a.orders || "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, a.rev ? fmt.usd(a.rev) : "-"), /*#__PURE__*/React.createElement("td", {
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
  }, D.ads.kpi.map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), /*#__PURE__*/React.createElement(SecLabel, {
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
  }, "Before spend turns back on you need a cost-per-customer ceiling that finance sets and marketing can't move. That number can't be computed until attribution is rebuilt, which makes the rebuild a prerequisite for the Q4 budget rather than a parallel task."));
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
    label: "Posts · 30d",
    value: "39",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Best performer",
    value: "TikTok",
    tone: "good",
    sub: "5.1% engagement"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Attributed revenue",
    value: "-",
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
  }, "Growth · 30d"), /*#__PURE__*/React.createElement("th", {
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
    sub: "2 critical · 2 warning"
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
    }, s.vel ? s.vel + "/day" : "-"), /*#__PURE__*/React.createElement("td", {
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
    }, "-")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
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
        textTransform: "none",
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
  }, r.yield ? fmt.pct(r.yield) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cost ? fmt.usd(r.cost, 2) : "-"), /*#__PURE__*/React.createElement("td", null, r.st === "scheduled" ? /*#__PURE__*/React.createElement(Badge, {
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
  }, "You pay the manufacturer one hundred percent up front. Even net 30 on that one relationship would free up working capital equal to about a month of inventory spend, and it costs nothing to ask."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Bills of materials live in the Vault under Team OS, next to the supplier agreements they belong with."));
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
    sub: "creator program wound down"
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
      textTransform: "none",
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
    meta: "A dashboard that shows a confident wrong number is worse than one that admits what it doesn't know."
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

/* ==== pages-3.jsx ==== */
// pages-3.jsx - second pass. Marketing performance, LTV and CAC ceiling,
// Retention, the customer-centric Operations reframe, Cost trend, Fulfillment.

/* ============================== MARKETING PERFORMANCE ============================== */
function MktPerf() {
  const m = D2.mkt;
  const [tab, setTab] = useState("channels");
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Marketing performance",
    sub: m.note,
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "channels",
        l: "Channels"
      }, {
        v: "trend",
        l: "Trend"
      }, {
        v: "creative",
        l: "Creative"
      }],
      value: tab,
      onChange: setTab
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, m.headline.map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), tab === "channels" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Share"), /*#__PURE__*/React.createElement("th", {
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
  }, "CPC"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPM"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Conversions"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPA"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "ROAS"))), /*#__PURE__*/React.createElement("tbody", null, m.channels.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      maxWidth: 230
    }
  }, c.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: c.status === "Live" ? "good" : c.status === "Paused" ? "warn" : "mute"
  }, c.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, c.share), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.imp)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.clicks)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(c.ctr, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.cpc, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.cpm, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.conv)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, c.cpa ? fmt.usd(c.cpa) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, c.roas ? c.roas.toFixed(2) + "x" : "-"))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Every metric here comes out of the box from the order platform. It isn't readable today, which is the reason this dashboard exists. Once spend turns on, the number that governs is the CAC ceiling, not ROAS.")), tab === "trend" && /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "six months"
  }, "Spend against attributed revenue"), /*#__PURE__*/React.createElement(BarChart, {
    data: m.trend.map(t => ({
      m: t.m,
      v: t.spend,
      tone: t.spend ? "violet" : "mute"
    })),
    h: 150
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "Spend paused in August. The revenue line beside it's unreliable until attribution is rebuilt.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "six months"
  }, "Attributed revenue"), /*#__PURE__*/React.createElement(Line, {
    data: m.trend.map(t => ({
      m: t.m,
      v: t.rev
    })),
    tone: "info",
    h: 150,
    vf: fmt.k
  }))), tab === "creative" && /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Creative"), /*#__PURE__*/React.createElement("th", {
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
  }, "CTR"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPA"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, m.creative.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.imp)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(c.ctr, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, c.cpa ? fmt.usd(c.cpa) : "-"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: c.st === "paused" ? "warn" : "mute"
  }, c.st === "paused" ? "Paused" : "Draft")))))))));
}

/* ============================== LTV AND CAC CEILING ============================== */
function LTV() {
  const l = D2.ltv;
  const [view, setView] = useState("category");
  const rows = view === "category" ? l.byCategory : view === "coupon" ? l.byCoupon : null;
  const cell = v => v == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "-") : /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      color: v < 0 ? "var(--bad)" : "var(--ink)"
    }
  }, fmt.usd(v, 2));
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "LTV and CAC ceiling",
    sub: l.note,
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "category",
        l: "By category"
      }, {
        v: "coupon",
        l: "By coupon"
      }, {
        v: "cohort",
        l: "By cohort"
      }],
      value: view,
      onChange: setView
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "CAC ceiling, blended",
    value: "$79",
    tone: "warn",
    sub: "at 90 days",
    help: "The most you can pay for a customer and still be profitable inside 90 days."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Best category",
    value: "Bundle",
    tone: "good",
    sub: "$118 ceiling at 90 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Worst offer",
    value: "BOGO",
    tone: "bad",
    sub: "loses money on first order"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Profitable on first order",
    value: "4 of 5 offers",
    tone: "good",
    sub: "BOGO is the exception"
  })), rows && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, view === "category" ? "Category" : "Offer"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "First order"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "30 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "90 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "180 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CAC ceiling"), /*#__PURE__*/React.createElement("th", null, "Profitable from"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.n), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.first)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.d30)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.d90)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.d180)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: T(r.tone)
    }
  }, r.ceiling ? fmt.usd(r.ceiling) : "-"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone
  }, r.profitAt)))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Contribution per customer at each window. The ceiling is what you can pay to acquire one and still be in profit by ninety days. Anything above it buys revenue and loses money.")), view === "cohort" && /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Cohort"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Customers"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "First order"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "30 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "90 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "180 days"))), /*#__PURE__*/React.createElement("tbody", null, l.cohorts.map(c => /*#__PURE__*/React.createElement("tr", {
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
  }, c.n), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.first)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.d30)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.d90)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.d180)))))))));
}

/* ============================== RETENTION ============================== */
function Retention() {
  const r = D2.retention;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Retention",
    sub: r.note
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, r.kpi.map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.3fr 1fr",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "six months"
  }, "Existing against new"), /*#__PURE__*/React.createElement(Line, {
    data: r.split.map(s => ({
      m: s.m,
      v: s.existing
    })),
    tone: "good",
    h: 165,
    vf: v => v + "%",
    yMin: 20,
    yMax: 50
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "Share of revenue from customers who had already bought. Climbing slowly. Every point here is revenue you don't pay to acquire twice.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel"
  }, "Where existing revenue comes from"), /*#__PURE__*/React.createElement(HBars, {
    data: r.sources,
    labelW: 130,
    showPct: true
  }))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "six months"
  }, "Email revenue"), /*#__PURE__*/React.createElement(BarChart, {
    data: r.emailTrend.map((e, i) => ({
      ...e,
      tone: i === 5 ? "accent" : "info"
    })),
    h: 140
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team",
    right: "six months"
  }, "Referral code usage"), /*#__PURE__*/React.createElement(BarChart, {
    data: r.referralTrend.map((e, i) => ({
      ...e,
      tone: i === 5 ? "accent" : "violet"
    })),
    h: 140,
    vf: fmt.n
  }))));
}

/* ============================== OPERATIONS, CUSTOMER CENTRIC ============================== */
function OpsHealth() {
  const o = D2.ops;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Customer experience",
    sub: o.note
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, o.kpi.map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.4fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "truck",
    right: "six months"
  }, "Order to doorstep"), /*#__PURE__*/React.createElement(Line, {
    data: o.deliver,
    tone: "good",
    h: 165,
    vf: v => v + "d",
    target: 3,
    tLabel: "3 day target"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "Median, from payment to arrival. Down from 5.1 days in April.")), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "alert",
    right: "last " + PERIOD.label
  }, "What cost you a customer")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Friction"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Count"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue lost"), /*#__PURE__*/React.createElement("th", null, "What fixes it"))), /*#__PURE__*/React.createElement("tbody", null, o.friction.map(f => /*#__PURE__*/React.createElement("tr", {
    key: f.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(f.tone)
    }
  }), f.n)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, f.count), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: f.cost ? "var(--bad)" : "var(--ink-mute)"
    }
  }, f.cost ? fmt.usd(f.cost) : "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, f.fix)))))))));
}

/* ============================== COST TREND ============================== */
function CostTrend() {
  const o = D2.ops;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cost trend",
    sub: "What it costs to make each product, and which way it's moving.",
    meta: "The only number worth keeping from the old products view."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Blended cost per unit",
    value: "$6.84",
    tone: "good",
    delta: -5.1,
    sub: "down from $7.21 in April"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Products measured",
    value: "6 of 8",
    tone: "warn",
    sub: "two on placeholder"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Cheapest to make",
    value: "$6.26",
    tone: "good",
    sub: "Sea Salt Chocolate"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Most expensive",
    value: "$7.25",
    tone: "warn",
    sub: "Matcha Chocolate"
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
    icon: "chart",
    right: "six months"
  }, "Blended cost per unit"), /*#__PURE__*/React.createElement(Line, {
    data: o.costSeries,
    tone: "good",
    h: 170,
    vf: v => "$" + v.toFixed(2)
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "factory"
  }, "By product")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Current"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Previous"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Change"), /*#__PURE__*/React.createElement("th", null, "Basis"))), /*#__PURE__*/React.createElement("tbody", null, o.costTrend.map(c => {
    const d = c.cur - c.prev;
    return /*#__PURE__*/React.createElement("tr", {
      key: c.n
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, c.n), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: c.basis === "placeholder" ? "var(--bad)" : "var(--ink)"
      }
    }, fmt.usd(c.cur, 2)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-mute)"
      }
    }, fmt.usd(c.prev, 2)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        fontWeight: 600,
        color: d === 0 ? "var(--ink-mute)" : d < 0 ? "var(--good)" : "var(--bad)"
      }
    }, d === 0 ? "-" : (d < 0 ? "\u2193" : "\u2191") + fmt.usd(Math.abs(d), 2)), /*#__PURE__*/React.createElement("td", null, c.basis === "measured" ? /*#__PURE__*/React.createElement(Badge, {
      tone: "good"
    }, "Measured") : /*#__PURE__*/React.createElement(Badge, {
      tone: "bad"
    }, "Placeholder")));
  })))))));
}

/* ============================== FULFILLMENT ============================== */
function Fulfillment() {
  const f = D2.fulfillment;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Fulfillment",
    sub: "What ships, and how much of it your systems can see.",
    meta: "Moved here from Revenue. It is an operations problem, not a revenue one."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total shipments",
    value: fmt.n(f.shipments.total),
    tone: "ink",
    sub: "July"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Touched the platform",
    value: fmt.n(f.shipments.onPlatform),
    tone: "good",
    sub: "64.1%"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Never touched it",
    value: fmt.n(f.shipments.invisible),
    tone: "bad",
    sub: fmt.pct(f.shipments.pct)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Shipped same day",
    value: "78%",
    tone: "warn",
    sub: "target 90%"
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
    icon: "box"
  }, "Visible against invisible"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "14px 0 18px"
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    v: f.shipments.invisible,
    max: f.shipments.total,
    size: 150,
    tone: "bad",
    label: fmt.pct(f.shipments.pct),
    sub: "invisible"
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "truck",
    right: "July"
  }, "What the invisible third is"), /*#__PURE__*/React.createElement(HBars, {
    data: f.breakdown,
    vf: fmt.n,
    labelW: 140,
    showPct: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 15,
      borderTop: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "Every one of these consumes stock and costs money. None appear as a sale, so shipments and revenue never tie and inventory counts drift. The fix is a cost line and a flag at the point they ship.")))));
}

/* ============================== PHASE 2 PLACEHOLDER ============================== */
function Phase2({
  title,
  why,
  when
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: title,
    sub: why
  }), /*#__PURE__*/React.createElement(Empty, {
    title: "Deferred to phase two",
    note: when,
    tag: "Phase 2"
  }));
}

/* ==== pages-4.jsx ==== */
// pages-4.jsx - Today So Far, Daily Performance Tracker, Cohort LTV.
// Data model folded from DB's reference. Layout ours.

function DefFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
      marginTop: 22,
      paddingTop: 14,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.05em",
      textTransform: "none",
      color: "var(--ink-dim)"
    }
  }, D3.defs.netRev), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.05em",
      textTransform: "none",
      color: "var(--ink-dim)"
    }
  }, D3.defs.profit));
}

/* ============================== TODAY SO FAR ============================== */
function Today() {
  const l = D3.live;
  const totSpend = l.channels.reduce((s, c) => s + (c.spend || 0), 0);
  const totRev = l.channels.reduce((s, c) => s + c.rev, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--good)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.09em",
      textTransform: "none",
      color: "var(--good)"
    }
  }, "Live"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, "· order stream")), /*#__PURE__*/React.createElement(PageHead, {
    title: "Today so far",
    sub: "How new customer revenue and orders hold up at the current spend level, paced against yesterday to the same hour.",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, l.day), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-mute)"
      }
    }, l.elapsed, "% of day elapsed"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      pct: l.elapsed,
      tone: "accent",
      h: 4
    })))
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, l.head.map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "live spend against attributed revenue"
  }, "Spend by channel")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "ROAS"))), /*#__PURE__*/React.createElement("tbody", null, l.channels.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(c.tone)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, c.n), c.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)"
    }
  }, c.note))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, c.spend == null ? "N/A" : fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: c.roas == null ? "var(--ink-mute)" : c.roas >= 3 ? "var(--good)" : "var(--warn)"
    }
  }, c.roas == null ? "N/A" : c.roas.toFixed(2) + "x"))), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-2)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(totSpend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(totRev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, (totRev / totSpend).toFixed(2), "x")))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "same definitions as the daily tracker"
  }, "Metrics"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 16
  }, l.metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "none",
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, m.label, /*#__PURE__*/React.createElement(Help, {
    text: m.help
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, m.value)))))), /*#__PURE__*/React.createElement(DefFooter, null));
}

/* ============================== DAILY TRACKER ============================== */
function Daily() {
  const d = D3.daily;
  const [chan, setChan] = useState(false);
  const [open, setOpen] = useState(null);
  const delta = v => v == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "-") : /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      fontWeight: 650,
      color: v > 0 ? "var(--good)" : "var(--bad)"
    }
  }, v > 0 ? "\u25B2" : "\u25BC", " ", Math.abs(v).toFixed(1), "%");
  const money = v => v == null ? "N/A" : fmt.usd(v);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Daily performance tracker",
    sub: "One row per day. Spend, acquisition, retention, margin and profit side by side. Click a day to drill into channels.",
    right: /*#__PURE__*/React.createElement("button", {
      onClick: () => setChan(c => !c),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        border: "1px solid var(--rule)",
        background: chan ? "var(--accent-tint)" : "var(--surface-3)",
        color: chan ? "var(--accent)" : "var(--ink-soft)",
        borderRadius: "var(--r-sm)",
        padding: "7px 13px",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        borderRadius: 3,
        border: `1.5px solid ${chan ? "var(--accent)" : "var(--ink-mute)"}`,
        background: chan ? "var(--accent)" : "transparent",
        display: "grid",
        placeItems: "center"
      }
    }, chan && /*#__PURE__*/React.createElement("svg", {
      width: "9",
      height: "9",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "4"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7"
    }))), "Spend by channel")
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 6,
    style: {
      color: "var(--accent)"
    }
  }, "Snapshot"), chan ? D3.daily.channels.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.n,
    colSpan: c.spend == null ? 2 : 4,
    style: {
      color: T(c.tone)
    }
  }, c.n)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("th", {
    colSpan: 5
  }, "Customer orders"), /*#__PURE__*/React.createElement("th", {
    colSpan: 8
  }, "Metrics"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Ad spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "New ord."), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "NC revenue"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "aMER"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "MER"), chan ? D3.daily.channels.flatMap(c => c.spend == null ? [/*#__PURE__*/React.createElement("th", {
    key: c.n + "r",
    style: {
      textAlign: "right"
    }
  }, "Rev"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "o",
    style: {
      textAlign: "right"
    }
  }, "ROAS")] : [/*#__PURE__*/React.createElement("th", {
    key: c.n + "s",
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "f",
    style: {
      textAlign: "right"
    }
  }, "Fcst"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "r",
    style: {
      textAlign: "right"
    }
  }, "Rev"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "o",
    style: {
      textAlign: "right"
    }
  }, "ROAS")]) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "# New"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "$ New"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "# Ret."), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "$ Ret."), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "# Total"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "% NCrev"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "NAOV"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "nCAC"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "ROAS"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Total rev"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Gross margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Profit")))), /*#__PURE__*/React.createElement("tbody", null, d.rows.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.d
  }, /*#__PURE__*/React.createElement("tr", {
    className: "clickable",
    onClick: () => setOpen(open === r.d ? null : r.d)
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, r.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: r.w === "Sat" || r.w === "Sun" ? "var(--accent)" : "var(--ink-mute)"
    }
  }, r.w)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.spend), /*#__PURE__*/React.createElement("div", null, delta(r.dS))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.ord, /*#__PURE__*/React.createElement("div", null, delta(r.dO))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.nc)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.amer.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.mer.toFixed(2), "x"), chan ? D3.daily.channels.flatMap(c => {
    const f = (c.spend || 0) / d.totals.spend;
    const sp = c.spend == null ? null : Math.round(r.spend * f);
    const rv = Math.round(r.nc * (c.rev / d.totals.nc));
    return c.spend == null ? [/*#__PURE__*/React.createElement("td", {
      key: c.n + "r",
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.usd(rv)), /*#__PURE__*/React.createElement("td", {
      key: c.n + "o",
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-mute)"
      }
    }, "N/A")] : [/*#__PURE__*/React.createElement("td", {
      key: c.n + "s",
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.usd(sp)), /*#__PURE__*/React.createElement("td", {
      key: c.n + "f",
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-mute)"
      }
    }, fmt.usd(Math.round(sp * 1.05))), /*#__PURE__*/React.createElement("td", {
      key: c.n + "r",
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.usd(rv)), /*#__PURE__*/React.createElement("td", {
      key: c.n + "o",
      className: "num",
      style: {
        textAlign: "right",
        fontWeight: 600,
        color: rv / sp >= 3 ? "var(--good)" : "var(--warn)"
      }
    }, (rv / sp).toFixed(2), "x")];
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.nNew), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.$new)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.nRet), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.$ret)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.tot), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(r.ncrev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.naov, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.ncac > 40 ? "var(--bad)" : "var(--ink)"
    }
  }, fmt.usd(r.ncac, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.roas.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.gm)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: "var(--good)"
    }
  }, fmt.usd(r.profit)))), open === r.d && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: chan ? 20 : 18,
    style: {
      background: "var(--surface-2)",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 18
  }, [["New customer revenue", fmt.usd(r.nc)], ["Returning revenue", fmt.usd(r.$ret)], ["Cost per new customer", fmt.usd(r.ncac, 2)], ["Contribution profit", fmt.usd(r.profit)]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "none",
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, v)))))))), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-2)",
      borderTop: "2px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700,
      color: "var(--accent)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.ord)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.nc)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, d.totals.amer.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, d.totals.mer.toFixed(2), "x"), chan ? D3.daily.channels.flatMap(c => c.spend == null ? [/*#__PURE__*/React.createElement("td", {
    key: c.n + "r",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(c.rev)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "o",
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-mute)"
    }
  }, "N/A")] : [/*#__PURE__*/React.createElement("td", {
    key: c.n + "s",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "f",
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.fcst)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "r",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(c.rev)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "o",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, c.roas.toFixed(2), "x")]) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.nNew)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.$new)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.nRet)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.$ret)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.tot)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.pct(d.totals.ncrev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.naov, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.ncac, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, d.totals.roas.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.gm)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: "var(--good)"
    }
  }, fmt.usd(d.totals.profit)))), !chan && [["Forecast", d.forecast, "ink"], ["Target", d.target, "mute"], ["Required / day", d.reqDay, "accent"]].map(([lbl, o, tn]) => /*#__PURE__*/React.createElement("tr", {
    key: lbl,
    style: {
      opacity: lbl === "Target" ? 0.7 : 1
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700,
      color: T(tn),
      fontSize: 11.5,
      textTransform: "none",
      letterSpacing: "0.05em"
    }
  }, lbl), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.spend ? fmt.usd(o.spend) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.ord ? fmt.n(o.ord) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.nc ? fmt.usd(o.nc) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.amer ? o.amer.toFixed(2) + "x" : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.mer ? o.mer.toFixed(2) + "x" : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.nNew ? fmt.n(o.nNew) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.$new ? fmt.usd(o.$new) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.nRet ? fmt.n(o.nRet) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.$ret ? fmt.usd(o.$ret) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.tot ? fmt.n(o.tot) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.ncrev ? fmt.pct(o.ncrev) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.naov ? fmt.usd(o.naov, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.ncac ? fmt.usd(o.ncac, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.roas ? o.roas.toFixed(2) + "x" : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.rev ? fmt.usd(o.rev) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.gm ? fmt.usd(o.gm) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, o.profit ? fmt.usd(o.profit) : "-"))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, D3.defs.sep), /*#__PURE__*/React.createElement(DefFooter, null));
}

/* ============================== COHORT LTV ============================== */
function Cohort() {
  const c = D3.cohort;
  const [by, setBy] = useState("product");
  const set = by === "product" ? c.byProduct : c.byCoupon;
  const maxAov = Math.max(...c.aovByCategory.map(a => a.aov));

  // LTV curve
  const W = 680,
    H = 300,
    PAD = {
      l: 52,
      r: 18,
      t: 16,
      b: 34
    };
  const iw = W - PAD.l - PAD.r,
    ih = H - PAD.t - PAD.b;
  const keys = ["aov", "m1", "m2", "m3", "m6", "m12"];
  const hi = Math.max(...set.rows.flatMap(r => keys.map(k => r[k]))) * 1.08;
  const X = i => PAD.l + i / (keys.length - 1) * iw,
    Y = v => PAD.t + ih - v / hi * ih;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cohort LTV and offer economics",
    sub: c.def,
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "product",
        l: "By product"
      }, {
        v: "coupon",
        l: "By coupon"
      }],
      value: by,
      onChange: setBy
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, set.head.map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.label,
    ...k
  }))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.4fr 1fr",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: by === "product" ? "by product" : "by coupon"
  }, "LTV curve, cumulative net revenue per customer"), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: "100%",
      height: "auto"
    }
  }, [0, .25, .5, .75, 1].map(f => /*#__PURE__*/React.createElement("g", {
    key: f
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD.l,
    y1: Y(hi * f),
    x2: W - PAD.r,
    y2: Y(hi * f),
    stroke: "var(--rule-soft)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: PAD.l - 8,
    y: Y(hi * f) + 3.5,
    textAnchor: "end",
    fontSize: "9.5",
    fill: "var(--ink-mute)"
  }, "$", Math.round(hi * f)))), keys.map((k, i) => /*#__PURE__*/React.createElement("text", {
    key: k,
    x: X(i),
    y: H - PAD.b + 17,
    textAnchor: "middle",
    fontSize: "9.5",
    fill: "var(--ink-mute)"
  }, c.marks[i])), set.rows.map(r => /*#__PURE__*/React.createElement("g", {
    key: r.n
  }, /*#__PURE__*/React.createElement("polyline", {
    points: keys.map((k, i) => `${X(i)},${Y(r[k])}`).join(" "),
    fill: "none",
    stroke: T(r.tone),
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), keys.map((k, i) => /*#__PURE__*/React.createElement("circle", {
    key: k,
    cx: X(i),
    cy: Y(r[k]),
    r: "2.4",
    fill: T(r.tone)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 9,
      marginTop: 14
    }
  }, set.rows.map(r => /*#__PURE__*/React.createElement("span", {
    key: r.n,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-sm)",
      padding: "4px 9px",
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(r.tone)
    }
  }), r.n)))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "by category"
  }, "First-order AOV"), c.aovByCategory.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.n,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, a.n), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, fmt.usd(a.aov, 2))), /*#__PURE__*/React.createElement(Bar, {
    pct: a.aov / maxAov * 100,
    tone: a.tone,
    h: 7
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, fmt.n(a.c), " customers · ", a.x.toFixed(2), "x to M12"))))), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Cohort (", by, ")"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Customers"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "First-order AOV"), ["M1", "M2", "M3", "M6", "M12"].map(m => /*#__PURE__*/React.createElement("th", {
    key: m,
    style: {
      textAlign: "right"
    }
  }, "LTV ", m)), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "M12 x AOV"))), /*#__PURE__*/React.createElement("tbody", null, set.rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(r.tone)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, r.n))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(r.c)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.aov, 2)), ["m1", "m2", "m3", "m6", "m12"].map(k => /*#__PURE__*/React.createElement("td", {
    key: k,
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r[k], 2))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: r.x >= 4 ? "var(--good)" : r.x >= 3 ? "var(--warn)" : "var(--bad)"
    }
  }, r.x.toFixed(2), "x"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, c.basis), /*#__PURE__*/React.createElement(DefFooter, null));
}

/* ==== pages-5.jsx ==== */
// pages-5.jsx, sub-tab views. Boardroom: Financials, Insights, System Health.
// Cash: Forecast, Transactions. Revenue: By Channel. Inventory: Reorders, Movements.

const SYNC_T = {
  live: "good",
  partial: "warn",
  blocked: "bad",
  waiting: "info"
};
const SYNC_L = {
  live: "Connected",
  partial: "Partial",
  blocked: "Blocked",
  waiting: "Waiting"
};

/* ============================== BOARDROOM · FINANCIALS ============================== */
function BoardFinancials({
  go
}) {
  const pl = Object.fromEntries(D.pl.map(r => [r.line, r]));
  const cm = D.unit.find(u => u.k === "cm");
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Financials",
    sub: "The money view on one screen. Profit and loss, margin, cash and what you owe."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: D.unit[0].label,
    value: fmt.usd(pl["Revenue"].v),
    tone: "ink",
    onClick: () => go("pl")
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Contribution margin",
    value: cm.value,
    tone: "good",
    sub: cm.sub,
    onClick: () => go("pl")
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Operating profit",
    value: fmt.usd(pl["Operating profit"].v),
    tone: "good",
    sub: "before debt service and distributions",
    onClick: () => go("pl")
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Available cash",
    value: "$40,347",
    tone: "warn",
    sub: "floor $22,500",
    onClick: () => go("cash")
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.2fr",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: PERIOD.label
  }, "Profit and loss"), D.pl.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.line,
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4,
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: r.sub ? 600 : 400
    }
  }, r.line), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: T(r.tone)
    }
  }, fmt.usd(r.v), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontWeight: 400
    }
  }, "· ", fmt.pct(r.pct)))), /*#__PURE__*/React.createElement(Bar, {
    pct: r.pct,
    tone: r.tone
  }), r.bench && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, "Benchmark ", r.bench)))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(DistributionsTrend, {
    h: 130
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "nine months"
  }, "Revenue by month"), /*#__PURE__*/React.createElement(BarChart, {
    data: D.revMonthly.map((r, i) => ({
      ...r,
      tone: i === D.revMonthly.length - 1 ? "accent" : "info"
    })),
    h: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: "seven months"
  }, "Cash on hand"), /*#__PURE__*/React.createElement(Line, {
    data: D.cashTrail,
    h: 100,
    tone: "warn",
    vf: fmt.k,
    target: 22500,
    tLabel: "Floor"
  }))), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 16
  }, D.debt.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.n,
    pad: 18,
    hover: true,
    onClick: () => go("debt"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)",
      marginBottom: 6
    }
  }, d.n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(d.tone)
    }
  }, fmt.usd(d.v)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, d.note)))));
}

/* ============================== BOARDROOM · INSIGHTS ============================== */
function BoardInsights({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Insights",
    sub: "What the numbers are saying this week, and where to look next.",
    meta: "Each card links to the page that proves it."
  }), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16
  }, D4.insights.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    pad: 22,
    style: {
      borderLeft: `3px solid ${T(n.tone)}`,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      lineHeight: 1.35
    }
  }, n.title), /*#__PURE__*/React.createElement(Badge, {
    tone: n.tone
  }, n.tone === "good" ? "Working" : n.tone === "bad" ? "Act now" : "Watch")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: T(n.tone)
    }
  }, n.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, n.sub)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.6,
      flex: 1
    }
  }, n.why), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(n.go),
    style: {
      alignSelf: "flex-start",
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid var(--rule)",
      background: "var(--surface-3)",
      color: "var(--ink-soft)",
      borderRadius: "var(--r-sm)",
      padding: "6px 11px",
      fontSize: 11.5,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Open ", n.cta, " ", /*#__PURE__*/React.createElement(Ico, {
    n: "chev",
    s: 10
  }))))));
}

/* ============================== BOARDROOM · SYSTEM HEALTH ============================== */
function BoardHealth({
  go
}) {
  const count = s => D4.sync.filter(x => x.s === s).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "System health",
    sub: "Every source that feeds this dashboard, when it last synced, and what's stuck."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Connected",
    value: String(count("live")),
    tone: "good",
    sub: `of ${D4.sync.length} sources`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Partial",
    value: String(count("partial")),
    tone: "warn",
    sub: "syncing, not complete"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Blocked",
    value: String(count("blocked")),
    tone: "bad",
    sub: "access outstanding"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Waiting",
    value: String(count("waiting")),
    tone: "info",
    sub: "built, no data yet",
    onClick: () => go("data")
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Source"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Last sync"), /*#__PURE__*/React.createElement("th", null, "Cadence"))), /*#__PURE__*/React.createElement("tbody", null, D4.sync.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: SYNC_T[s.s]
  }, SYNC_L[s.s])), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: s.last === "Never" ? "var(--bad)" : "var(--ink-soft)"
    }
  }, s.last), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 12
    }
  }, s.every))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Three sources are blocked on access. Until they connect, channel revenue and lifetime value stay off the dashboard rather than showing a number that looks right and isn't. Data Health grades every metric area."));
}

/* ============================== CASH · FORECAST ============================== */
function CashForecast() {
  const f = D4.forecast;
  let bal = f.open;
  const rows = f.weeks.map(w => {
    const out = w.fixed + w.variable + w.debt;
    bal = bal + w.inn - out;
    return {
      ...w,
      out,
      end: bal,
      above: bal - f.floor
    };
  });
  const low = rows.reduce((a, b) => b.end < a.end ? b : a, rows[0]);
  const end = rows[rows.length - 1];
  const tIn = rows.reduce((s, r) => s + r.inn, 0),
    tOut = rows.reduce((s, r) => s + r.out, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cash forecast",
    sub: "Thirteen weeks forward from today's balance, against the operating floor.",
    meta: "Updated weekly. Inflows net of processing fees and reserve."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Opening cash",
    value: fmt.usd(f.open),
    tone: "ink",
    sub: "today"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Lowest week",
    value: fmt.usd(low.end),
    tone: low.above < 0 ? "bad" : low.above < 5000 ? "warn" : "good",
    sub: `week of ${low.w}`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Ending cash",
    value: fmt.usd(end.end),
    tone: "good",
    sub: `week of ${end.w}`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Net over 13 weeks",
    value: (tIn - tOut >= 0 ? "+" : "-") + fmt.usd(Math.abs(tIn - tOut)),
    tone: tIn - tOut >= 0 ? "good" : "bad",
    sub: `${fmt.k(tIn)} in · ${fmt.k(tOut)} out`
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: "ending balance by week"
  }, "Where cash lands"), /*#__PURE__*/React.createElement(Line, {
    data: rows.map(r => ({
      m: r.w,
      v: r.end
    })),
    h: 190,
    tone: "accent",
    vf: fmt.k,
    target: f.floor,
    tLabel: "Floor $22.5K"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Week of"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "In"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Fixed"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Variable"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Debt"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Ending"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Above floor"), /*#__PURE__*/React.createElement("th", null, "What moves it"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.w
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.w), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--good)"
    }
  }, fmt.usd(r.inn)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, "-", fmt.usd(r.fixed)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, "-", fmt.usd(r.variable)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.debt ? "var(--bad)" : "var(--ink-mute)"
    }
  }, r.debt ? "-" + fmt.usd(r.debt) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, fmt.usd(r.end)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.above < 0 ? "var(--bad)" : r.above < 5000 ? "var(--warn)" : "var(--good)"
    }
  }, fmt.usd(r.above)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, r.note || ""))))))));
}

/* ============================== CASH · TRANSACTIONS ============================== */
function CashTransactions() {
  const [f, setF] = useState("All");
  const ST = {
    matched: ["good", "Matched"],
    review: ["warn", "Review"],
    open: ["bad", "Uncategorized"]
  };
  const rows = D4.transactions.filter(t => f === "All" || (f === "In" ? t.amt > 0 : f === "Out" ? t.amt < 0 : t.st !== "matched"));
  const tin = D4.transactions.filter(t => t.amt > 0).reduce((s, t) => s + t.amt, 0);
  const tout = D4.transactions.filter(t => t.amt < 0).reduce((s, t) => s + t.amt, 0);
  const flag = D4.transactions.filter(t => t.st !== "matched").length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Transactions",
    sub: "Every dollar in and out across the banks and the card, coded as it lands.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: ["All", "In", "Out", "Needs a look"],
      value: f,
      onChange: setF
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Money in",
    value: fmt.usd(tin),
    tone: "good",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Money out",
    value: fmt.usd(Math.abs(tout)),
    tone: "bad",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Net",
    value: (tin + tout >= 0 ? "+" : "-") + fmt.usd(Math.abs(tin + tout)),
    tone: tin + tout >= 0 ? "good" : "bad"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Needs a look",
    value: String(flag),
    tone: flag ? "warn" : "good",
    sub: "review or uncategorized"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((t, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, t.d), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, t.desc), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, t.acct), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: t.cat === "Uncategorized" ? "var(--bad)" : "var(--ink-soft)"
    }
  }, t.cat), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: t.amt > 0 ? "var(--good)" : "var(--ink)"
    }
  }, t.amt > 0 ? "+" : "-", fmt.usd(Math.abs(t.amt))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: ST[t.st][0]
  }, ST[t.st][1])))))))));
}

/* ============================== REVENUE · BY CHANNEL ============================== */
function RevenueChannels() {
  const TR = {
    good: ["good", "Trusted"],
    low: ["warn", "Directional"],
    mock: ["info", "Shape only"],
    none: ["bad", "Not usable"]
  };
  const total = D.channels.reduce((s, c) => s + c.v, 0);
  const trusted = D.channels.filter(c => c.trust === "good").reduce((s, c) => s + c.v, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Revenue by channel",
    sub: "Where each dollar came from, and how far you can trust the split.",
    meta: `${PERIOD.label}. Attribution is being rebuilt, so every row carries its trust level.`
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total",
    value: fmt.usd(total),
    tone: "ink",
    sub: PERIOD.label
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Trusted",
    value: fmt.pct(trusted / total * 100),
    tone: "good",
    sub: fmt.usd(trusted)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Unattributed",
    value: fmt.pct(D.channels[5].v / total * 100),
    tone: "bad",
    sub: fmt.usd(D.channels[5].v)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Channels",
    value: String(D.channels.length),
    tone: "ink",
    sub: "including unattributed"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", null, "Share"), /*#__PURE__*/React.createElement("th", null, "Trust"))), /*#__PURE__*/React.createElement("tbody", null, D.channels.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.m
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.m), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: c.tone ? T(c.tone) : "var(--ink)"
    }
  }, fmt.usd(c.v)), /*#__PURE__*/React.createElement("td", {
    style: {
      width: "34%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    pct: c.v / total * 100,
    tone: TR[c.trust][0]
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      minWidth: 42,
      textAlign: "right"
    }
  }, fmt.pct(c.v / total * 100)))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: TR[c.trust][0]
  }, TR[c.trust][1])))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Orders without an affiliate link default to an internal test account, so the unattributed row is real revenue with no honest channel. It shrinks as the attribution rebuild lands."));
}

/* ============================== INVENTORY · REORDERS ============================== */
function InvReorders() {
  const free = 17847;
  const ST = {
    late: ["bad", "Order now"],
    soon: ["warn", "This week"],
    blocked: ["mute", "Decision"],
    ok: ["good", "No action"]
  };
  let run = free;
  const rows = D4.reorders.map(r => {
    const inv = D.inventory.find(x => x.sku === r.sku);
    const cost = inv && inv.po ? inv.po : 0;
    r = {
      ...r,
      qty: cost ? Math.round(cost / r.unit) : r.qty
    };
    const orderBy = r.cover - r.lead;
    run -= cost;
    return {
      ...r,
      cost,
      orderBy,
      left: run
    };
  });
  const need = rows.reduce((s, r) => s + r.cost, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Reorders",
    sub: "What to order, when it has to go in, and whether the cash covers it.",
    meta: "Costs match the reorder figures on the Inventory tab. Quantity is cost over unit cost."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "To order now",
    value: String(rows.filter(r => r.st === "late").length),
    tone: "bad",
    sub: "cover under lead time"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Reorder cost",
    value: fmt.usd(need),
    tone: "warn",
    sub: "everything due"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Free cash",
    value: fmt.usd(free),
    tone: "good",
    sub: "above the floor"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Gap",
    value: fmt.usd(Math.max(0, need - free)),
    tone: need > free ? "bad" : "good",
    sub: "sequence or use credit"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Supplier"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cover"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Lead"), /*#__PURE__*/React.createElement("th", null, "Order by"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Qty"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cost"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cash after"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.sku
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.sku, r.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      fontWeight: 400
    }
  }, r.note)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, r.supplier), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cover, "d"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.lead, "d"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: r.orderBy < 0 ? "var(--bad)" : r.orderBy < 7 ? "var(--warn)" : "var(--ink-soft)"
    }
  }, r.st === "blocked" ? "-" : r.orderBy < 0 ? `${Math.abs(r.orderBy)}d overdue` : `in ${r.orderBy}d`), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.qty ? fmt.n(r.qty) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, r.cost ? fmt.usd(r.cost) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.left < 0 ? "var(--bad)" : "var(--good)"
    }
  }, r.cost ? fmt.usd(r.left) : "-"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: ST[r.st][0]
  }, ST[r.st][1])))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Cash after runs down the list in order of urgency. Where it goes negative, the order needs splitting, payment terms, or credit before it can go in."));
}

/* ============================== INVENTORY · MOVEMENTS ============================== */
function InvMovements() {
  const [f, setF] = useState("All");
  const rows = D4.movements.filter(m => f === "All" || (f === "Unlogged" ? !m.logged : m.type === f));
  const inn = D4.movements.filter(m => m.qty > 0).reduce((s, m) => s + m.qty, 0);
  const out = D4.movements.filter(m => m.qty < 0).reduce((s, m) => s + m.qty, 0);
  const unl = D4.movements.filter(m => !m.logged);
  const TY = {
    Received: "good",
    Shipped: "info",
    Wholesale: "violet",
    Sample: "warn",
    Reship: "warn",
    Comp: "bad",
    Adjustment: "mute"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Stock movements",
    sub: "Every unit in and out, and whether the order platform ever saw it.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: ["All", "Received", "Shipped", "Unlogged"],
      value: f,
      onChange: setF
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Units in",
    value: fmt.n(inn),
    tone: "good",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Units out",
    value: fmt.n(Math.abs(out)),
    tone: "ink",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Off platform",
    value: String(unl.length),
    tone: "bad",
    sub: `${fmt.n(Math.abs(unl.reduce((s, m) => s + m.qty, 0)))} units, no sale recorded`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Adjustments",
    value: String(D4.movements.filter(m => m.type === "Adjustment").length),
    tone: "warn",
    sub: "count variance"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Units"), /*#__PURE__*/React.createElement("th", null, "Location"), /*#__PURE__*/React.createElement("th", null, "On platform"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((m, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, m.d), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, m.sku, m.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, " · ", m.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: TY[m.type]
  }, m.type)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: m.qty > 0 ? "var(--good)" : "var(--ink)"
    }
  }, m.qty > 0 ? "+" : "", fmt.n(m.qty)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, m.where), /*#__PURE__*/React.createElement("td", null, m.logged ? /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Logged") : /*#__PURE__*/React.createElement(Badge, {
    tone: "bad"
  }, "Invisible")))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Wholesale, samples, reships and comps leave the shelf without touching the order platform. That's why shipments never tie to revenue and counts drift. Each one gets logged here as it moves."));
}
const SUBVIEWS = {
  boardroom: [null, BoardFinancials, BoardInsights, BoardHealth],
  cash: [null, CashForecast, CashTransactions],
  revenue: [null, RevenueChannels],
  inventory: [null, InvReorders, InvMovements]
};

/* ==== pages-6.jsx ==== */
// pages-6.jsx, the team layer. Every seat is scored on every metric it's held
// to. Role scorecards, the score log and the org chart all read one store, so a
// number logged once shows everywhere it's used.

/* ------------------------------------------------------------ score store */
const SCORE_KEY = "mynd.scorelog.v2";
const ScoreStore = {
  mode: "sample",
  live: {},
  focus: null,
  viewAs: "owner",
  clears: 0,
  subs: new Set()
};
try {
  const raw = localStorage.getItem(SCORE_KEY);
  if (raw) ScoreStore.live = JSON.parse(raw) || {};
} catch (e) {}
function scoreEmit() {
  ScoreStore.subs.forEach(f => f());
}
function useScore() {
  const [, force] = useState(0);
  useEffect(() => {
    const f = () => force(x => x + 1);
    ScoreStore.subs.add(f);
    return () => ScoreStore.subs.delete(f);
  }, []);
  return ScoreStore;
}
function scoreSet(k, v) {
  ScoreStore[k] = v;
  scoreEmit();
}
function scoreRow(mid) {
  const src = ScoreStore.mode === "sample" ? SAMPLE_LOG[mid] || [] : ScoreStore.live[mid] || [];
  return WEEKS.map((w, i) => src[i] === undefined || src[i] === "" ? null : src[i]);
}
function scoreEnter(mid, i, raw) {
  const row = (ScoreStore.live[mid] || []).slice();
  const v = raw === "" ? null : Number(raw);
  row[i] = raw === "" || isNaN(v) ? null : v;
  ScoreStore.live = {
    ...ScoreStore.live,
    [mid]: row
  };
  try {
    localStorage.setItem(SCORE_KEY, JSON.stringify(ScoreStore.live));
  } catch (e) {}
  scoreEmit();
}
function scoreClear() {
  ScoreStore.live = {};
  ScoreStore.clears += 1;
  try {
    localStorage.removeItem(SCORE_KEY);
  } catch (e) {}
  scoreEmit();
}

/* ------------------------------------------------------------ status, same rules as the Metrics tracker */
function judge(m, latest, prior) {
  if (latest == null) return "Not measured";
  if (m.kind === "max") return latest <= m.v ? "On target" : "Off target";
  if (m.kind === "min") return latest >= m.v ? "On target" : "Off target";
  if (m.kind === "yes") return latest === 1 ? "On target" : "Off target";
  if (prior == null) return "Baseline";
  if (m.kind === "up") return latest > prior ? "Improving" : latest === prior ? "Flat" : "Slipping";
  return latest < prior ? "Improving" : latest === prior ? "On target" : "Slipping"; // flat or falling
}
const HOLD = {
    "On target": 1,
    "Improving": 1
  },
  WATCH = {
    "Flat": 1,
    "Baseline": 1
  },
  OFF = {
    "Off target": 1,
    "Slipping": 1
  };
const ST_TONE = {
  "On target": "good",
  "Improving": "good",
  "Flat": "warn",
  "Baseline": "info",
  "Off target": "bad",
  "Slipping": "bad",
  "Not measured": "mute"
};
const MEASURE_TONE = {
  "Measurable": "good",
  "Needs 30 days": "info",
  "Needs build": "warn",
  "Needs access": "warn",
  "Needs three runs": "warn",
  "Needs roadmap": "bad",
  "Needs attribution": "bad"
};

// status of a metric as of week i: that week's entry against the last one before it
function statusAt(m, row, i) {
  const latest = row[i];
  if (latest == null) return null;
  let prior = null;
  for (let j = i - 1; j >= 0; j--) if (row[j] != null) {
    prior = row[j];
    break;
  }
  return judge(m, latest, prior);
}
function metricRead(m) {
  const row = scoreRow(m.id);
  const idx = row.map((v, i) => v == null ? -1 : i).filter(i => i >= 0);
  const li = idx.length ? idx[idx.length - 1] : -1,
    pi = idx.length > 1 ? idx[idx.length - 2] : -1;
  const latest = li >= 0 ? row[li] : null,
    prior = pi >= 0 ? row[pi] : null;
  const st = judge(m, latest, prior);
  let streak = 0; // entries in a row that were off, counting back from the latest
  for (let k = idx.length - 1; k >= 0; k--) {
    if (OFF[statusAt(m, row, idx[k])]) streak++;else break;
  }
  const dir = latest == null || prior == null || latest === prior ? 0 : latest > prior ? 1 : -1;
  return {
    m,
    row,
    latest,
    prior,
    li,
    st,
    streak,
    dir,
    entries: idx.length
  };
}
const seatById = id => SEATS.find(s => s.id === id);
const seatMetrics = id => METRICS.filter(m => m.seat === id);
function seatRead(s) {
  const reads = seatMetrics(s.id).map(metricRead);
  const n = set => reads.filter(r => set[r.st]).length;
  return {
    s,
    reads,
    primary: reads.find(r => r.m.primary),
    hold: n(HOLD),
    watch: n(WATCH),
    off: n(OFF),
    none: reads.filter(r => r.st === "Not measured").length,
    stuck: reads.filter(r => OFF[r.st])
  };
}
// share of a seat's measured metrics holding as of week i, using each metric's latest entry up to then
function seatHealthAt(s, i) {
  let meas = 0,
    hold = 0,
    off = 0;
  seatMetrics(s.id).forEach(m => {
    const row = scoreRow(m.id);
    let j = i;
    while (j >= 0 && row[j] == null) j--;
    if (j < 0) return;
    const st = statusAt(m, row, j);
    meas++;
    if (HOLD[st]) hold++;else if (OFF[st]) off++;
  });
  if (!meas) return null;
  // watch states (flat, first entry) sit out of the share; all watch reads amber
  return {
    pct: hold + off ? hold / (hold + off) * 100 : 60,
    meas,
    hold,
    off
  };
}
function fmtM(m, v) {
  if (v == null) return "-";
  if (m.unit === "yes") return v === 1 ? "Yes" : "No";
  if (m.unit === "usd") return fmt.usd(v);
  if (m.unit === "pct") return (Number.isInteger(v) ? v : Number(v).toFixed(1)) + "%";
  if (m.unit === "h") return (Number.isInteger(v) ? v : Number(v).toFixed(1)) + " hrs";
  if (m.unit === "rate") return Number(v).toFixed(2) + " / $";
  return Number.isInteger(v) ? String(v) : Number(v).toFixed(1);
}
const lastWeek = () => Math.max(11, ...METRICS.map(m => scoreRow(m.id).reduce((a, v, i) => v != null ? i : a, -1)));

/* ------------------------------------------------------------ charts */
function Trend({
  m,
  row,
  h = 150,
  compact,
  tone
}) {
  const span = row.slice(0, lastWeek() + 1);
  const vals = span.filter(v => v != null);
  if (!vals.length) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: h,
        display: "grid",
        placeItems: "center",
        border: "1px dashed var(--rule)",
        borderRadius: "var(--r-md)",
        color: "var(--ink-mute)",
        fontSize: 11
      }
    }, "Not measured yet");
  }
  const tv = m.kind === "yes" ? null : m.v;
  let lo = Math.min(...vals, tv ?? Infinity),
    hi = Math.max(...vals, tv ?? -Infinity);
  if (m.unit === "yes") {
    lo = 0;
    hi = 1;
  }
  if (lo === hi) {
    lo -= 1;
    hi += 1;
  }
  const pad = (hi - lo) * 0.15;
  lo -= pad;
  hi += pad;
  const X = i => span.length === 1 ? 50 : i / (span.length - 1) * 100;
  const Y = v => 100 - (v - lo) / (hi - lo) * 100;
  const pts = span.map((v, i) => v == null ? null : [X(i), Y(v), statusAt(m, span, i)]).filter(Boolean);
  const line = tone && tone !== "mute" ? tone : "accent";
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
  }, !compact && [0, 25, 50, 75, 100].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    y1: g,
    x2: "100",
    y2: g,
    stroke: "var(--rule-soft)",
    strokeWidth: "0.4",
    vectorEffect: "non-scaling-stroke"
  })), tv != null && /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: Y(tv),
    x2: "100",
    y2: Y(tv),
    stroke: "var(--warn)",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts.map(p => p[0] + "," + p[1]).join(" "),
    fill: "none",
    stroke: T(line),
    strokeOpacity: "0.55",
    strokeWidth: compact ? 1.4 : 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  })), pts.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    title: p[2],
    style: {
      position: "absolute",
      left: p[0] + "%",
      top: p[1] + "%",
      width: compact ? 6 : 8,
      height: compact ? 6 : 8,
      borderRadius: 99,
      transform: "translate(-50%,-50%)",
      background: T(ST_TONE[p[2]])
    }
  })), !compact && tv != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      top: Y(tv) + "%",
      transform: "translateY(-130%)",
      fontSize: 9.5,
      color: "var(--warn)",
      fontWeight: 600
    }
  }, "Target ", fmtM(m, tv))), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 6
    }
  }, span.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 9,
      color: "var(--ink-mute)"
    }
  }, i % 3 === 0 ? WEEKS[i] : ""))));
}

// one row per metric, one cell per week, colored by the status that week
function StatusStrip({
  reads,
  weeks
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `minmax(170px,1.4fr) repeat(${weeks},minmax(22px,1fr))`,
      gap: 3,
      minWidth: 520
    }
  }, /*#__PURE__*/React.createElement("span", null), Array.from({
    length: weeks
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 8.5,
      color: "var(--ink-mute)",
      textAlign: "center"
    }
  }, i % 2 === 0 ? WEEKS[i] : "")), reads.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.m.id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontWeight: r.m.primary ? 600 : 400
    }
  }, r.m.name), Array.from({
    length: weeks
  }, (_, i) => {
    const st = statusAt(r.m, r.row, i);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      title: st ? `${WEEKS[i]}: ${fmtM(r.m, r.row[i])}, ${st}` : `${WEEKS[i]}: no entry`,
      style: {
        height: 16,
        borderRadius: 3,
        background: st ? T(ST_TONE[st]) : "var(--surface-3)",
        opacity: st ? 0.85 : 1
      }
    });
  })))));
}
function ModeSwitch() {
  const S = useScore();
  return /*#__PURE__*/React.createElement(Seg, {
    options: [{
      v: "sample",
      l: "Sample history"
    }, {
      v: "live",
      l: "Live log"
    }],
    value: S.mode,
    onChange: v => scoreSet("mode", v)
  });
}
function ModeNote() {
  const S = useScore();
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      margin: "-12px 0 18px"
    }
  }, S.mode === "sample" ? `Sample history, twelve modeled weeks across all ${METRICS.length} metrics. Switch to Live log to enter real numbers.` : "Live log. Numbers entered on the Score Log page. An empty week means not measured, not zero.");
}
const detailBtn = {
  border: "1px solid var(--rule)",
  background: "var(--surface-3)",
  color: "var(--ink-soft)",
  borderRadius: "var(--r-sm)",
  padding: "6px 11px",
  fontSize: 11.5,
  fontWeight: 600,
  cursor: "pointer"
};
const Dot = ({
  st
}) => /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    background: T(ST_TONE[st]),
    flexShrink: 0
  }
});

/* ============================== ROLE SCORECARDS ============================== */
function TeamScorecards({
  go
}) {
  const S = useScore();
  const seats = SEATS.map(seatRead);
  const all = seats.flatMap(x => x.reads);
  const cnt = set => all.filter(r => set[r.st]).length;
  const shown = S.viewAs === "owner" ? seats : seats.filter(x => x.s.id === S.viewAs || S.viewAs === "coo" && x.s.id === "warehouse");
  const focus = S.focus && shown.find(x => x.s.id === S.focus);
  const f = metricRead(METRICS.find(m => m.id === "f_dec"));
  const stuck = all.filter(r => OFF[r.st]).sort((a, b) => b.streak - a.streak);
  const weeks = lastWeek() + 1;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Role scorecards",
    sub: "Every seat, scored on every metric it's held to. Everyone sees their own card. The owner sees all of them.",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: S.viewAs,
      onChange: e => {
        scoreSet("viewAs", e.target.value);
        scoreSet("focus", null);
      },
      "aria-label": "Viewing as",
      style: {
        background: "var(--surface-3)",
        color: "var(--ink)",
        border: "1px solid var(--rule)",
        borderRadius: "var(--r-sm)",
        padding: "6px 9px",
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "owner"
    }, "Viewing as the owner, all seats"), SEATS.filter(s => !s.relationship && s.id !== "founder").map(s => /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, "Viewing as ", s.who, ", ", s.short))), /*#__PURE__*/React.createElement(ModeSwitch, null))
  }), /*#__PURE__*/React.createElement(ModeNote, null), S.viewAs === "owner" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Holding",
    value: String(cnt(HOLD)),
    tone: "good",
    sub: `of ${all.length} metrics, on target or improving`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Off",
    value: String(cnt(OFF)),
    tone: "bad",
    sub: "off target or slipping"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Watch",
    value: String(cnt(WATCH)),
    tone: "warn",
    sub: "flat, or a first entry"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Not measured",
    value: String(all.filter(r => r.st === "Not measured").length),
    tone: "mute",
    sub: "measure still being built"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.25fr",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      borderLeft: "3px solid var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, "The one that matters most"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      flexWrap: "wrap",
      margin: "6px 0 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 30,
      fontWeight: 600,
      color: T(ST_TONE[f.st] === "mute" ? "ink" : ST_TONE[f.st])
    }
  }, fmtM(f.m, f.latest)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, "decisions routed through the owner this week. Target under 5.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      lineHeight: 1.55,
      marginBottom: 10
    }
  }, "Every other number improves as this one falls, because most of them are held back by waiting on him."), /*#__PURE__*/React.createElement(Trend, {
    m: f.m,
    row: f.row,
    h: 96,
    tone: ST_TONE[f.st]
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "alert",
    right: "longest run first",
    help: "Every metric that's off target or slipping right now, sorted by how many entries in a row it's been off. A long run is a failure mode, not a bad week."
  }, "Sticking points")), stuck.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "8px 18px 20px",
      fontSize: 12.5,
      color: "var(--ink-mute)"
    }
  }, "Nothing's off right now.") : /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Seat"), /*#__PURE__*/React.createElement("th", null, "Metric"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Latest"), /*#__PURE__*/React.createElement("th", null, "Target"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Off for"))), /*#__PURE__*/React.createElement("tbody", null, stuck.slice(0, 8).map(r => {
    const s = seatById(r.m.seat);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.m.id,
      className: "clickable",
      onClick: () => scoreSet("focus", s.id),
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600,
        whiteSpace: "nowrap"
      }
    }, s.short), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, r.m.name), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--bad)",
        fontWeight: 600,
        whiteSpace: "nowrap"
      }
    }, fmtM(r.m, r.latest)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-mute)"
      }
    }, r.m.target), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: r.streak >= 3 ? "bad" : "warn"
    }, r.streak, " ", r.streak === 1 ? "entry" : "entries")));
  })))), stuck.length > 8 && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "8px 18px 14px",
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, stuck.length - 8, " more on the seat cards below."))), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "holding against off, by week",
    help: "Each cell uses every metric's latest entry up to that week, and scores holding against off. Flat and first entries sit out. Gray means nothing measured yet."
  }, "Seat health over time"), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `minmax(130px,1fr) repeat(${weeks},minmax(24px,1fr))`,
      gap: 3,
      minWidth: 520
    }
  }, /*#__PURE__*/React.createElement("span", null), Array.from({
    length: weeks
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 8.5,
      color: "var(--ink-mute)",
      textAlign: "center"
    }
  }, i % 2 === 0 ? WEEKS[i] : "")), SEATS.map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => scoreSet("focus", s.id),
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, s.short), Array.from({
    length: weeks
  }, (_, i) => {
    const hh = seatHealthAt(s, i);
    const tone = !hh ? null : hh.pct >= 75 ? "good" : hh.pct >= 50 ? "warn" : "bad";
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      title: hh ? `${WEEKS[i]}: ${hh.hold} holding, ${hh.off} off, ${hh.meas - hh.hold - hh.off} on watch` : `${WEEKS[i]}: nothing measured`,
      style: {
        height: 18,
        borderRadius: 3,
        background: tone ? T(tone) : "var(--surface-3)",
        opacity: tone ? 0.85 : 1
      }
    });
  }))))))), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 16,
    style: {
      marginBottom: 22
    }
  }, shown.map(x => {
    const {
      s,
      primary: p
    } = x;
    const on = S.focus === s.id;
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      pad: 18,
      hover: true,
      onClick: () => scoreSet("focus", on ? null : s.id),
      style: {
        cursor: "pointer",
        borderColor: on ? "var(--accent)" : undefined,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: s.who,
      size: 28,
      tone: x.off ? "bad" : "accent"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600
      }
    }, s.seat), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-mute)"
      }
    }, s.who))), /*#__PURE__*/React.createElement(Badge, {
      tone: x.off ? "bad" : x.hold ? "good" : "mute"
    }, x.off ? `${x.off} stuck` : x.hold ? "Holding" : "Not measured")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-mute)",
        marginBottom: 2
      }
    }, p.m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 9,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 22,
        fontWeight: 600,
        color: p.latest == null ? "var(--ink-mute)" : T(ST_TONE[p.st])
      }
    }, fmtM(p.m, p.latest)), /*#__PURE__*/React.createElement(Badge, {
      tone: ST_TONE[p.st]
    }, p.st))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingTop: 9,
        borderTop: "1px solid var(--rule-soft)"
      }
    }, x.reads.filter(r => !r.m.primary).map(r => /*#__PURE__*/React.createElement("div", {
      key: r.m.id,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Dot, {
      st: r.st
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: OFF[r.st] ? "var(--ink)" : "var(--ink-soft)",
        fontWeight: OFF[r.st] ? 600 : 400
      }
    }, r.m.name), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11.5,
        color: r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st]),
        whiteSpace: "nowrap"
      }
    }, fmtM(r.m, r.latest))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
        flexWrap: "wrap",
        fontSize: 10.5,
        color: "var(--ink-mute)",
        paddingTop: 8,
        borderTop: "1px solid var(--rule-soft)"
      }
    }, /*#__PURE__*/React.createElement("span", null, x.hold, " of ", x.reads.length, " holding", x.none ? ` · ${x.none} not measured` : ""), /*#__PURE__*/React.createElement(Badge, {
      tone: MEASURE_TONE[s.measure]
    }, s.measure)));
  })), focus && /*#__PURE__*/React.createElement(SeatDetail, {
    x: focus,
    go: go,
    weeks: weeks
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "When a seat is off, the colored dots show which metric it's stuck on. Look there before the person. Most of the time a number moves because something upstream of it changed, not because somebody stopped trying. Click any card for every trend."));
}
function SeatDetail({
  x,
  go,
  weeks
}) {
  const {
    s
  } = x;
  return /*#__PURE__*/React.createElement(Card, {
    pad: 22,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 14,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: "1 1 320px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      marginBottom: 5
    }
  }, s.seat, " · ", s.who), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, s.line), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 6,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "Manages."), " ", s.manages, ". ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "Doesn't."), " ", s.not, " Role document: ", s.doc, ", in the Vault.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("scorelog"),
    style: detailBtn
  }, "Open the log"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("org"),
    style: detailBtn
  }, "See on the org chart"))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target",
    right: "each dot colored by its status that week"
  }, "Every metric"), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 14,
    style: {
      marginBottom: 20
    }
  }, x.reads.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.m.id,
    style: {
      border: "1px solid var(--rule-soft)",
      borderRadius: "var(--r-md)",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      alignItems: "flex-start",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: r.m.primary ? 650 : 500
    }
  }, r.m.name, r.m.primary && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 500
    }
  }, " · primary")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, "Target ", r.m.target, " · ", r.m.cadence, " · ", r.m.source)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st])
    }
  }, fmtM(r.m, r.latest)), /*#__PURE__*/React.createElement(Badge, {
    tone: ST_TONE[r.st]
  }, r.st, OFF[r.st] && r.streak > 1 ? `, ${r.streak} entries` : ""))), /*#__PURE__*/React.createElement(Trend, {
    m: r.m,
    row: r.row,
    h: 84,
    tone: ST_TONE[r.st]
  })))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock",
    right: "green holding, amber flat, blue first entry, red off, gray no entry"
  }, "Status by week"), /*#__PURE__*/React.createElement(StatusStrip, {
    reads: x.reads,
    weeks: weeks
  }));
}

/* ============================== SCORE LOG ============================== */
function ScoreLog() {
  const S = useScore();
  const live = S.mode === "live";
  const shownWeeks = live ? WEEKS.length : 12;
  const exportCsv = () => {
    const head = ["Seat", "Who", "Metric", "Primary", "Target", "Cadence", "Source", ...WEEKS, "Latest", "Prior", "Status"];
    const lines = [head].concat(METRICS.map(m => {
      const r = metricRead(m),
        s = seatById(m.seat);
      return [s.seat, s.who, m.name, m.primary ? "Primary" : "", m.target, m.cadence, m.source, ...r.row.map(v => v == null ? "" : v), r.latest ?? "", r.prior ?? "", r.st];
    }));
    const csv = lines.map(l => l.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], {
      type: "text/csv"
    }));
    a.download = `mynd_score_log_${S.mode}.csv`;
    a.click();
  };
  const inp = {
    width: 60,
    background: "var(--surface-3)",
    border: "1px solid var(--rule)",
    borderRadius: 6,
    color: "var(--ink)",
    padding: "5px 6px",
    fontSize: 12,
    textAlign: "right",
    fontFamily: "var(--mono)"
  };
  const sticky = {
    position: "sticky",
    left: 0,
    background: "var(--surface)",
    zIndex: 1
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Score log",
    sub: "Every metric, every week it's read. Each entry is scored the moment it lands.",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: exportCsv,
      style: detailBtn
    }, "Export CSV"), live && /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (confirm("Clear every live entry?")) scoreClear();
      },
      style: detailBtn
    }, "Clear live log"), /*#__PURE__*/React.createElement(ModeSwitch, null))
  }), /*#__PURE__*/React.createElement(ModeNote, null), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    },
    key: S.mode + ":" + S.clears
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...sticky,
      minWidth: 230
    }
  }, "Metric"), /*#__PURE__*/React.createElement("th", null, "Target"), WEEKS.slice(0, shownWeeks).map((w, i) => /*#__PURE__*/React.createElement("th", {
    key: w,
    style: {
      textAlign: "right",
      color: i === 0 ? "var(--accent)" : undefined
    }
  }, w)), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, SEATS.map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: shownWeeks + 3,
    style: {
      background: "var(--surface-3)",
      fontWeight: 650,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "sticky",
      left: 13
    }
  }, s.seat, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: "var(--ink-mute)"
    }
  }, "· ", s.who)))), seatMetrics(s.id).map(m => {
    const r = metricRead(m);
    return /*#__PURE__*/React.createElement("tr", {
      key: m.id
    }, /*#__PURE__*/React.createElement("td", {
      style: sticky
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: m.primary ? 600 : 400,
        fontSize: 12.5
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: "var(--ink-mute)"
      }
    }, m.cadence, m.primary ? " · primary" : "", m.unit === "yes" ? " · 1 yes, 0 no" : m.unit === "pct" ? " · whole percent" : "")), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-soft)",
        minWidth: 110
      }
    }, m.target), r.row.slice(0, shownWeeks).map((v, i) => {
      const st = statusAt(m, r.row, i);
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        className: "num",
        style: {
          textAlign: "right",
          whiteSpace: "nowrap",
          color: v == null ? "var(--ink-dim)" : T(ST_TONE[st]),
          background: st && OFF[st] ? "var(--bad-tint)" : undefined
        }
      }, live ? /*#__PURE__*/React.createElement("input", {
        type: "number",
        step: "any",
        min: m.unit === "yes" ? 0 : undefined,
        max: m.unit === "yes" ? 1 : undefined,
        defaultValue: v ?? "",
        "aria-label": `${m.name}, week of ${WEEKS[i]}`,
        onBlur: e => {
          const nv = e.target.value;
          if (String(v ?? "") !== nv) scoreEnter(m.id, i, nv);
        },
        style: inp
      }) : v == null ? "-" : fmtM(m, v));
    }), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: ST_TONE[r.st]
    }, r.st)));
  }))))))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target"
  }, "How status works"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.6
    }
  }, "At or under and at or over compare each entry to the target. Yes metrics take 1 for yes and 0 for no. Rising compares each entry to the last one before it, and flat or falling counts no change as on target. Every entry gets scored, so a metric that stays off shows as a red run across the weeks. Not measured means nothing was entered, and that's a real state rather than a zero.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock"
  }, "What to enter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.6
    }
  }, "Weekly and daily metrics get a number every week. Daily ones take the week's figure: the average for activity, the worst day for anything targeted at zero. Monthly metrics get one number in the first week of the month, per-run metrics one in the week of the run. Percentages go in as whole numbers."))));
}

/* ============================== ORG CHART ============================== */
function OrgCard({
  s,
  go
}) {
  const x = seatRead(s),
    p = x.primary;
  return /*#__PURE__*/React.createElement(Card, {
    pad: 16,
    hover: true,
    onClick: () => {
      scoreSet("viewAs", "owner");
      scoreSet("focus", s.id);
      go("scorecards");
    },
    style: {
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      borderStyle: s.relationship ? "dashed" : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: s.who,
    size: 30,
    tone: s.relationship ? "mute" : "accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, s.short), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, s.who))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      lineHeight: 1.5
    }
  }, s.line), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
      paddingTop: 8,
      borderTop: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      minWidth: 0
    }
  }, p.m.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: p.latest == null ? "var(--ink-mute)" : T(ST_TONE[p.st]),
      whiteSpace: "nowrap"
    }
  }, fmtM(p.m, p.latest))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      flexWrap: "wrap"
    }
  }, x.reads.map(r => /*#__PURE__*/React.createElement(Dot, {
    key: r.m.id,
    st: r.st
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginLeft: 4
    }
  }, x.hold, " of ", x.reads.length, " holding")), s.moving && /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    style: {
      alignSelf: "flex-start"
    }
  }, "Moving to the COO"), s.relationship && /*#__PURE__*/React.createElement(Badge, {
    tone: "mute",
    style: {
      alignSelf: "flex-start"
    }
  }, "A relationship, not a person"));
}
function TeamOrg({
  go
}) {
  const S = useScore();
  const owner = seatById("founder"),
    coo = seatById("coo");
  const direct = SEATS.filter(s => s.reports === "founder" && s.id !== "coo" && !s.moving);
  const underCoo = SEATS.filter(s => s.reports === "coo");
  const moving = SEATS.filter(s => s.moving === "coo");
  const fo = seatRead(owner),
    fr = fo.primary;
  const steps = S.mode === "sample" ? TRANSFERS : TRANSFERS.map(t => ({
    ...t,
    step: t.step == null ? null : 0
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Org chart",
    sub: "Who does what, who it reports to, and how each seat is scoring across its metrics.",
    meta: "Nine seats, each with a written role document. Click any seat for its scorecard.",
    right: /*#__PURE__*/React.createElement(ModeSwitch, null)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label",
    style: {
      justifyContent: "center"
    }
  }, "Owner"), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    hover: true,
    onClick: () => {
      scoreSet("viewAs", "owner");
      scoreSet("focus", "founder");
      go("scorecards");
    },
    style: {
      cursor: "pointer",
      borderColor: "var(--accent)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: D.meta.user,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, D.meta.user), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--accent)"
    }
  }, "Founder and Owner"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, fr.m.name, ": ", /*#__PURE__*/React.createElement("b", {
    className: "mono",
    style: {
      color: T(ST_TONE[fr.st] === "mute" ? "ink" : ST_TONE[fr.st])
    }
  }, fmtM(fr.m, fr.latest)), ", target under 5"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, fo.reads.map(r => /*#__PURE__*/React.createElement(Dot, {
    key: r.m.id,
    st: r.st
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginLeft: 4
    }
  }, fo.hold, " of ", fo.reads.length, " holding"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: "var(--rule)",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340,
      margin: "0 auto 22px"
    }
  }, /*#__PURE__*/React.createElement(OrgCard, {
    s: coo,
    go: go
  })), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team",
    right: `${direct.length} seats`
  }, "Reports to the owner"), /*#__PURE__*/React.createElement(G, {
    c: 4,
    name: "4",
    gap: 14,
    style: {
      marginBottom: 22
    }
  }, direct.map(s => /*#__PURE__*/React.createElement(OrgCard, {
    key: s.id,
    s: s,
    go: go
  }))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team",
    right: `${underCoo.length} owned · ${moving.length} reporting to the owner until they move`
  }, "Owned by the COO, or moving to the COO"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 14,
    style: {
      marginBottom: 26
    }
  }, underCoo.concat(moving).map(s => /*#__PURE__*/React.createElement(OrgCard, {
    key: s.id,
    s: s,
    go: go
  }))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.5fr",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "lock"
  }, "What stays with the owner"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginBottom: 6
    }
  }, "Only the owner"), OWNER.only.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      fontSize: 12.5,
      padding: "5px 0"
    }
  }, x)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      margin: "12px 0 6px"
    }
  }, "Kept by choice"), OWNER.choice.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      fontSize: 12.5,
      padding: "5px 0"
    }
  }, x)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      marginTop: 12,
      fontStyle: "italic"
    }
  }, "\"", OWNER.quote, "\"")), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "exec",
    right: "watch, do with him watching, do alone"
  }, "What moves off the owner")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Function"), /*#__PURE__*/React.createElement("th", null, "Order"), /*#__PURE__*/React.createElement("th", null, "To"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 170
    }
  }, "Transfer"))), /*#__PURE__*/React.createElement("tbody", null, steps.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.f
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, t.f), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: t.stage === "First" ? "accent" : t.stage === "Next" ? "info" : "mute"
  }, t.stage)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, t.to), /*#__PURE__*/React.createElement("td", null, t.step == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "Held for control, to revisit") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      marginBottom: 4
    }
  }, [1, 2, 3].map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      flex: 1,
      height: 5,
      borderRadius: 99,
      background: k <= t.step ? "var(--good)" : "var(--surface-3)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, TRANSFER_STEPS[t.step])))))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "A function has transferred when the written version is good enough for a third person to run it. Not when the COO can do it. When somebody who isn't the COO could."));
}
function ownerTicker() {
  const r = metricRead(METRICS.find(m => m.id === "f_dec"));
  return {
    i: "team",
    l: "Owner decisions this week",
    v: r.latest == null ? "not logged" : String(r.latest),
    tone: r.latest == null ? "ink" : r.latest <= 5 ? "good" : "bad"
  };
}

/* ==== app.jsx ==== */
// app.jsx, shell: sidebar, top bar, live ticker, sub-tabs, routing

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
    id: "scorelog",
    l: "Score Log"
  }, {
    id: "org",
    l: "Org Chart"
  }, {
    id: "board",
    l: "Project Board",
    p2: true
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
    id: "retention",
    l: "Retention"
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
    id: "today",
    l: "Today So Far"
  }, {
    id: "daily",
    l: "Daily Tracker"
  }, {
    id: "cohort",
    l: "Cohort LTV"
  }, {
    id: "mktperf",
    l: "Performance"
  }, {
    id: "ltv",
    l: "CAC Ceiling"
  }, {
    id: "attribution",
    l: "Attribution"
  }, {
    id: "social",
    l: "Social"
  }]
}, {
  g: "Operations",
  icon: "ops",
  items: [{
    id: "opshealth",
    l: "Customer Experience"
  }, {
    id: "inventory",
    l: "Inventory"
  }, {
    id: "fulfillment",
    l: "Fulfillment"
  }, {
    id: "costtrend",
    l: "Cost Trend"
  }, {
    id: "suppliers",
    l: "Suppliers"
  }, {
    id: "production",
    l: "Production",
    p2: true
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
  revenue: ["Overview", "By Channel"],
  inventory: ["Inventory", "Reorders", "Movements"]
};
const PAGE_GROUP = {};
NAV.forEach(g => g.items.forEach(i => {
  PAGE_GROUP[i.id] = g.g;
}));
function App() {
  useScore();
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState(() => {
    const h = (location.hash || "").replace("#", "");
    return PAGE_GROUP[h] ? h : "boardroom";
  });
  const [period, setPeriod] = useState("30 days");
  const [range, setRange] = useState(["2026-09-01", "2026-09-17"]);
  const customDays = rangeDays(range[0], range[1]);
  const pKey = period + (period === "Custom" ? ":" + customDays : "");
  const applied = useRef(null);
  if (applied.current !== pKey) {
    applyPeriod(period, customDays);
    applied.current = pKey;
  }
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
    const before = () => document.body.setAttribute("data-theme", "light");
    const after = () => document.body.setAttribute("data-theme", theme);
    addEventListener("beforeprint", before);
    addEventListener("afterprint", after);
    return () => {
      removeEventListener("beforeprint", before);
      removeEventListener("afterprint", after);
    };
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
    scorecards: /*#__PURE__*/React.createElement(TeamScorecards, {
      go: setPage
    }),
    scorelog: /*#__PURE__*/React.createElement(ScoreLog, null),
    org: /*#__PURE__*/React.createElement(TeamOrg, {
      go: setPage
    }),
    cash: /*#__PURE__*/React.createElement(Cash, null),
    pl: /*#__PURE__*/React.createElement(PL, null),
    debt: /*#__PURE__*/React.createElement(Debt, null),
    rails: /*#__PURE__*/React.createElement(Rails, null),
    revenue: /*#__PURE__*/React.createElement(Revenue, null),
    retention: /*#__PURE__*/React.createElement(Retention, null),
    subs: /*#__PURE__*/React.createElement(Subs, null),
    wholesale: /*#__PURE__*/React.createElement(Wholesale, null),
    today: /*#__PURE__*/React.createElement(Today, null),
    daily: /*#__PURE__*/React.createElement(Daily, null),
    cohort: /*#__PURE__*/React.createElement(Cohort, null),
    mktperf: /*#__PURE__*/React.createElement(MktPerf, null),
    ltv: /*#__PURE__*/React.createElement(LTV, null),
    attribution: /*#__PURE__*/React.createElement(Attribution, null),
    social: /*#__PURE__*/React.createElement(Social, null),
    opshealth: /*#__PURE__*/React.createElement(OpsHealth, null),
    inventory: /*#__PURE__*/React.createElement(Inventory, null),
    fulfillment: /*#__PURE__*/React.createElement(Fulfillment, null),
    costtrend: /*#__PURE__*/React.createElement(CostTrend, null),
    suppliers: /*#__PURE__*/React.createElement(Suppliers, null),
    production: /*#__PURE__*/React.createElement(Phase2, {
      title: "Production",
      why: "Runs, yields and cost per unit.",
      when: "The metrics here need simplifying before they're worth building. Cost trend already lives under Operations, which covers the part that matters today."
    }),
    board: /*#__PURE__*/React.createElement(Phase2, {
      title: "Project board",
      why: "Tasks, owners and status.",
      when: "Not useful until everyone has access, ideally role specific. That access model comes first."
    }),
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
      marginTop: 5
    }
  }, "Command center")), /*#__PURE__*/React.createElement("nav", {
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
      onClick: () => setPage(i.id),
      style: i.p2 ? {
        opacity: 0.55
      } : undefined
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, i.l), i.p2 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        background: "var(--surface-3)",
        color: "var(--ink-mute)",
        padding: "1px 5px",
        borderRadius: 4
      }
    }, "P2"))));
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
  }, "⌘K")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "hide-sm",
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, D.meta.updated, " · ", D.meta.tz), /*#__PURE__*/React.createElement("button", {
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
  }), "Live"), [...D.ticker.slice(0, 3), ownerTicker(), ...D.ticker.slice(3)].map((t, i) => /*#__PURE__*/React.createElement("span", {
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
    className: "pad main",
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
  }, all.find(i => i.id === page)?.l)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, period === "Custom" && /*#__PURE__*/React.createElement(CustomRange, {
    from: range[0],
    to: range[1],
    onChange: (a, b) => setRange([a, b])
  }), /*#__PURE__*/React.createElement(Seg, {
    options: ["1 day", "7 days", "30 days", "90 days", "MTD", "Custom"],
    value: period,
    onChange: setPeriod
  }))), /*#__PURE__*/React.createElement(PeriodNote, null), /*#__PURE__*/React.createElement("div", {
    key: pKey + ":" + sub
  }, sub === 0 || !SUBVIEWS[page] ? P : React.createElement(SUBVIEWS[page][sub], {
    go: setPage
  }))), /*#__PURE__*/React.createElement("footer", {
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
  }, "MYND Command · Mock for review · Built by OpFix"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "⌘K"), " search · ", /*#__PURE__*/React.createElement("b", {
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