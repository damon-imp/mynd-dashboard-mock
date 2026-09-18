// data4.jsx, sub-tab views. Modeled, shaped to demonstrate the surface.
// Cash forecast, transactions, reorders, stock movements, boardroom insights
// and sync status.

const D4 = {
  // ---------------------------------------------------------------- CASH FORECAST
  // Thirteen weeks from the current balance. Inflows net of fees and reserve.
  forecast: {
    open: 40347,
    floor: 22500,
    weeks: [
      { w:"Sep 21", inn:10840, fixed:3240, variable:1510, debt:0 },
      { w:"Sep 28", inn:10620, fixed:3240, variable:1480, debt:9481, note:"Buyout Oct 1" },
      { w:"Oct 5",  inn:11050, fixed:3310, variable:1540, debt:0 },
      { w:"Oct 12", inn:11230, fixed:3240, variable:9800, debt:0, note:"Dubai Chocolate reorder, first half" },
      { w:"Oct 19", inn:11410, fixed:3240, variable:1590, debt:0 },
      { w:"Oct 26", inn:11380, fixed:3240, variable:1580, debt:9407, note:"Buyout Nov 1" },
      { w:"Nov 2",  inn:11720, fixed:3310, variable:1630, debt:0 },
      { w:"Nov 9",  inn:11940, fixed:3240, variable:9800, debt:0, note:"Dubai Chocolate reorder, second half" },
      { w:"Nov 16", inn:12260, fixed:3240, variable:1710, debt:0 },
      { w:"Nov 23", inn:13480, fixed:3240, variable:1880, debt:0, note:"Holiday week" },
      { w:"Nov 30", inn:12910, fixed:3310, variable:1800, debt:9333, note:"Buyout Dec 1" },
      { w:"Dec 7",  inn:12640, fixed:3240, variable:1760, debt:0 },
      { w:"Dec 14", inn:12420, fixed:3240, variable:1730, debt:0 },
    ],
  },

  // ---------------------------------------------------------------- TRANSACTIONS
  transactions: [
    { d:"Sep 17", desc:"Rail A settlement",        acct:"BlueBanc · Settlement", cat:"Sales",            amt:1624,   st:"matched" },
    { d:"Sep 17", desc:"Sweep to operating",       acct:"Mercury · Operating",   cat:"Transfer",         amt:4800,   st:"matched" },
    { d:"Sep 16", desc:"Rail B settlement",        acct:"BlueBanc · Settlement", cat:"Sales",            amt:1138,   st:"matched" },
    { d:"Sep 16", desc:"3PL monthly invoice",      acct:"Mercury · Operating",   cat:"Fulfillment",      amt:-1890,  st:"matched" },
    { d:"Sep 16", desc:"Email platform",           acct:"Chase card",            cat:"Software",         amt:-350,   st:"review" },
    { d:"Sep 15", desc:"Rail C settlement",        acct:"BlueBanc · Settlement", cat:"Sales",            amt:612,    st:"matched" },
    { d:"Sep 15", desc:"Rail C reserve hold",      acct:"BlueBanc · Settlement", cat:"Processing",       amt:-61,    st:"matched" },
    { d:"Sep 15", desc:"Payroll",                  acct:"Mercury · Operating",   cat:"Payroll",          amt:-4210,  st:"matched" },
    { d:"Sep 14", desc:"Packaging supplier",       acct:"Chase card",            cat:"Cost of goods",    amt:-1480,  st:"matched" },
    { d:"Sep 14", desc:"Refund, order 48213",      acct:"BlueBanc · Settlement", cat:"Refunds",          amt:-69,    st:"matched" },
    { d:"Sep 13", desc:"Ingredient run",           acct:"Chase card",            cat:"Cost of goods",    amt:-2340,  st:"review" },
    { d:"Sep 12", desc:"Kitchen rent",             acct:"Mercury · Operating",   cat:"Rent",             amt:-2200,  st:"matched" },
    { d:"Sep 12", desc:"Wholesale invoice paid",   acct:"Mercury · Operating",   cat:"Sales",            amt:1380,   st:"matched" },
    { d:"Sep 11", desc:"Unknown debit",            acct:"BlueBanc · Settlement", cat:"Uncategorized",    amt:-214,   st:"open" },
  ],

  // ---------------------------------------------------------------- REORDERS
  // cost comes from D.inventory[].po so both tabs agree; qty = cost / unit
  reorders: [
    { sku:"Dubai Chocolate",          cover:8,  lead:21, qty:5300, unit:6.72,  supplier:"Own kitchen",     st:"late" },
    { sku:"Strawberry Mango Gummies", cover:21, lead:24, qty:4700, unit:10.00, supplier:"LA Manufacturer", st:"late" },
    { sku:"Sea Salt Chocolate",       cover:34, lead:18, qty:4100, unit:6.26,  supplier:"Own kitchen",     st:"soon" },
    { sku:"Micro Caps",               cover:0,  lead:30, qty:null, unit:10.00, supplier:"LA Manufacturer", st:"blocked", note:"Never produced. Needs a launch decision, not a reorder." },
    { sku:"Mint Chocolate",           cover:68, lead:18, qty:0,    unit:6.91,  supplier:"Own kitchen",     st:"ok" },
  ],

  // ---------------------------------------------------------------- MOVEMENTS
  movements: [
    { d:"Sep 17", sku:"Dubai Chocolate",          type:"Shipped",    qty:-38,  where:"3PL",     logged:true },
    { d:"Sep 17", sku:"Sea Salt Chocolate",       type:"Shipped",    qty:-24,  where:"3PL",     logged:true },
    { d:"Sep 16", sku:"Strawberry Mango Gummies", type:"Shipped",    qty:-31,  where:"3PL",     logged:true },
    { d:"Sep 16", sku:"Dubai Chocolate",          type:"Wholesale",  qty:-48,  where:"3PL",     logged:false },
    { d:"Sep 15", sku:"Mint Chocolate",           type:"Sample",     qty:-12,  where:"Kitchen", logged:false },
    { d:"Sep 15", sku:"Blue Raspberry Gummies",   type:"Received",   qty:1200, where:"3PL",     logged:true },
    { d:"Sep 14", sku:"Dubai Chocolate",          type:"Reship",     qty:-6,   where:"3PL",     logged:false },
    { d:"Sep 13", sku:"Toffee Chocolate",         type:"Comp",       qty:-4,   where:"Kitchen", logged:false },
    { d:"Sep 12", sku:"Sea Salt Chocolate",       type:"Received",   qty:1180, where:"3PL",     logged:true },
    { d:"Sep 12", sku:"Matcha Chocolate",         type:"Adjustment", qty:-40,  where:"3PL",     logged:true, note:"Count variance" },
    { d:"Sep 11", sku:"Espresso Chocolate",       type:"Shipped",    qty:-19,  where:"3PL",     logged:true },
    { d:"Sep 10", sku:"Strawberry Mango Gummies", type:"Sample",     qty:-20,  where:"3PL",     logged:false },
  ],

  // ---------------------------------------------------------------- INSIGHTS
  insights: [
    { tone:"bad", title:"Retention is the leak, not acquisition",
      num:"30 to 3", sub:"subscriptions to third rebill",
      why:"You pay full price for every customer and keep about one in ten past the third rebill. More traffic makes that number bigger, not better.",
      go:"subs", cta:"Subscriptions" },
    { tone:"bad", title:"Dubai Chocolate runs out before a reorder can land",
      num:"8 of 21", sub:"days of cover against lead time",
      why:"Your best seller stocks out in about two weeks unless the run is already moving. The reorder costs more than the free cash above the floor.",
      go:"inventory", cta:"Inventory" },
    { tone:"warn", title:"The basket shrank, the volume didn't",
      num:"$195 to $121", sub:"revenue per shipment since November",
      why:"Shipments held flat while revenue fell a third. That's a basket and mix problem, and it has a different fix from a demand problem.",
      go:"revenue", cta:"Revenue" },
    { tone:"warn", title:"Fixed costs are double the benchmark",
      num:"30% vs 15%", sub:"of revenue",
      why:"About $7,000 a month of gap. It's the largest lever left on the cost side and it doesn't depend on selling more.",
      go:"pl", cta:"Profit and loss" },
    { tone:"warn", title:"Declines cost more than they look",
      num:"94.75%", sub:"approval against a 98% target",
      why:"Three points of approval is about $18,000 a year of orders customers already tried to pay for.",
      go:"rails", cta:"Payment rails" },
    { tone:"good", title:"Rebills are recovering",
      num:"27% to 74%", sub:"rebill rate, July to September",
      why:"Credentials are restored. The retry rebuild closes most of the rest before any retention offer needs to run.",
      go:"subs", cta:"Subscriptions" },
  ],

  // ---------------------------------------------------------------- SYNC STATUS
  sync: [
    { n:"Mercury",            last:"2 min ago",   every:"15 min",  s:"live" },
    { n:"BlueBanc",           last:"2 min ago",   every:"15 min",  s:"live" },
    { n:"Xero",               last:"1 hr ago",    every:"hourly",  s:"live" },
    { n:"Order platform",     last:"4 min ago",   every:"5 min",   s:"live" },
    { n:"Affiliate platform", last:"12 min ago",  every:"15 min",  s:"live" },
    { n:"Chase card",         last:"Sep 5",       every:"manual",  s:"partial" },
    { n:"Processors",         last:"6 hr ago",    every:"daily",   s:"partial" },
    { n:"Warehouse",          last:"Never",       every:"hourly",  s:"blocked" },
    { n:"Email platform",     last:"Never",       every:"hourly",  s:"blocked" },
    { n:"Attribution history",last:"Never",       every:"once",    s:"blocked" },
    { n:"Kitchen ledger",     last:"Never",       every:"per run", s:"waiting" },
    { n:"Site analytics",     last:"3 hr ago",    every:"hourly",  s:"partial" },
  ],
};
