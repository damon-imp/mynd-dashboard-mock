// data.jsx, MOCK. Anchored to real MYND figures where they exist so DB recognizes
// his own business. Everything else is shaped to demonstrate the surface.

const D = {
  meta: { user: "Damon B.", role: "Founder / CEO", tz: "Los Angeles", updated: "11:42 PM" },

  ticker: [
    { i: "dollar", l: "Revenue today", v: "$1,847" },
    { i: "box",    l: "Orders today", v: "14" },
    { i: "pulse",  l: "Approval rate", v: "94.75%", tone: "warn" },
    { i: "dollar", l: "Cash", v: "$40,347" },
    { i: "alert",  l: "Dubai Chocolate", v: "8d cover", tone: "bad" },
    { i: "rev",    l: "Rebill rate", v: "74%", tone: "good" },
    { i: "clock",  l: "Next buyout", v: "$9,481 · Oct 1" },
    { i: "truck",  l: "Shipments today", v: "11" },
    { i: "dollar", l: "MTD revenue", v: "$14,920" },
    { i: "pulse",  l: "Chargebacks 30d", v: "0.42%", tone: "good" },
  ],

  // ---------------------------------------------------------------- BOARDROOM
  unit: [
    { k:"rev",   label:"Revenue · 30d",   value:"$46,814", delta:-4.1, sub:"all four rails", tone:"ink", help:"Gross across every processor, matched to the bank.", spark:[64267,58900,55400,51200,49800,47300,45100,43900,46814] },
    { k:"cm",    label:"Contribution margin", value:"$31,200", delta:8.4, sub:"67% of revenue", tone:"good", help:"Net sales less product cost, variable expense and ad spend. The number the business should orbit daily.", spark:[21400,19800,17900,16200,14840,28600,31200] },
    { k:"cash",  label:"Available cash",  value:"$40,347", delta:-37.2, sub:"floor $22,500", tone:"warn", help:"Across Mercury and BlueBanc. Free cash is what sits above the operating floor." },
    { k:"burn",  label:"Monthly result",  value:"+$15,197", delta:3826, sub:"was +$387 in July", tone:"good", help:"Revenue less fixed and variable cost, before debt service." },
    { k:"aov",   label:"Average order",   value:"$189", delta:2.1, sub:"223 paid orders", tone:"ink", help:"Revenue over orders that touched the platform." },
    { k:"appr",  label:"Approval rate",   value:"94.75%", delta:0, sub:"target 98%", tone:"warn", help:"Three points below target is about $18,000 a year." },
    { k:"debt",  label:"Total owed",      value:"$251,525", delta:-11.6, sub:"next $9,481 Oct 1", tone:"ink", help:"Buyout note, card and the undated second obligation." },
  ],

  funnel: [
    { label:"Sessions",       v:18420, pct:100, note:"30 days" },
    { label:"Add to cart",    v:2210,  pct:62,  note:"12.0% of sessions" },
    { label:"Checkout",       v:418,   pct:34,  note:"18.9% of carts" },
    { label:"Paid order",     v:223,   pct:22,  note:"53.3% of checkouts" },
    { label:"Subscription",   v:30,    pct:9,   note:"13.4% attach" },
    { label:"Rebilled 3x",    v:3,     pct:3,   note:"10.98% survive" },
  ],

  today: [
    { l:"Orders today",     v:"14" },
    { l:"Revenue today",    v:"$1,847" },
    { l:"Shipments out",    v:"11" },
    { l:"Declines today",   v:"3", tone:"warn" },
    { l:"Support tickets",  v:"6" },
    { l:"Subs canceled",   v:"2", tone:"bad" },
  ],
  toDate: [
    { l:"Revenue YTD",      v:"$486,220" },
    { l:"Orders YTD",       v:"2,614" },
    { l:"Active subs",      v:"1,842" },
    { l:"Debt paid down",   v:"$33,000", tone:"good" },
    { l:"Cost cut, monthly",v:"$14,810", tone:"good" },
    { l:"Units shipped",    v:"9,480" },
  ],

  attention: [
    { t:"Dubai Chocolate runs out in 8 days against a 21 day lead time", tone:"bad" },
    { t:"Micro Caps has been at zero stock for 34 days", tone:"bad" },
    { t:"Three data sources still unconnected, so channel numbers are directional only", tone:"warn" },
    { t:"Card utilization at 49%. The Q4 plan would take it to 93%", tone:"warn" },
    { t:"Six of ten products still priced against a placeholder cost", tone:"warn" },
    { t:"Kitchen has logged 0 of 30 production runs", tone:"warn" },
  ],

  // ---------------------------------------------------------------- MONEY
  accounts: [
    { n:"Mercury · Operating", c:"1000", v:22500, role:"Holds the floor, spills to sweep", tone:"accent" },
    { n:"Mercury · Sweep",     c:"1010", v:0,     role:"Distributes to buckets", tone:"info" },
    { n:"Mercury · Marketing", c:"1040", v:0,     role:"35% of sweep", tone:"violet" },
    { n:"Mercury · Inventory", c:"1030", v:0,     role:"25% of sweep", tone:"good" },
    { n:"Mercury · Taxes",     c:"1050", v:0,     role:"20% of sweep", tone:"warn" },
    { n:"Mercury · Owner",     c:"1070", v:0,     role:"15% of sweep", tone:"accent" },
    { n:"Mercury · Reserve",   c:"1020", v:0,     role:"5%, caps at $108,000", tone:"mute" },
    { n:"Mercury · Debt svc",  c:"1060", v:6273,  role:"Funds the buyout schedule", tone:"bad" },
    { n:"BlueBanc · Settlement", c:"1080", v:34074, role:"Rails land here, sweeps to Mercury", tone:"info" },
  ],
  cashTrail: [
    { m:"Mar", v:98621 },{ m:"Apr", v:64317 },{ m:"May", v:65504 },
    { m:"Jun", v:82956 },{ m:"Jul", v:59962 },{ m:"Aug", v:56730 },{ m:"Sep", v:40347 },
  ],
  buckets: [
    { n:"Marketing", pct:35, target:13125, v:0, tone:"violet" },
    { n:"Inventory", pct:25, target:9375,  v:0, tone:"good" },
    { n:"Taxes",     pct:20, target:7500,  v:0, tone:"warn" },
    { n:"Owner profit", pct:15, target:5625, v:0, tone:"accent" },
    { n:"Reserve",   pct:5,  target:1875,  v:0, tone:"info" },
  ],
  pl: [
    { line:"Revenue",          v:46814, pct:100,  tone:"ink",  bench:"" },
    { line:"Cost of delivery", v:5760,  pct:12.3, tone:"good", bench:"~40%", d:"COGS, fulfillment, processing" },
    { line:"Marketing",        v:0,     pct:0,    tone:"warn", bench:"25-30%", d:"Ad spend paused" },
    { line:"OPEX",             v:14050, pct:30.0, tone:"bad",  bench:"~15%", d:"Fixed operating cost" },
    { line:"Profit",           v:15197, pct:32.5, tone:"good", bench:"15-20%", d:"Before debt service" },
  ],
  debt: [
    { n:"Buyout note", v:148444, note:"8 of 9 payments through May 2027", tone:"bad" },
    { n:"Chase card",  v:23081,  note:"$46,700 limit · 49% used", tone:"warn" },
    { n:"Second obligation", v:80000, note:"Undated, no written terms", tone:"mute" },
  ],
  schedule: [
    { d:"Sep 1, 2026", v:11555.56, s:"paid" },{ d:"Oct 1, 2026", v:9481.48, s:"next" },
    { d:"Nov 1, 2026", v:9407.41, s:"planned" },{ d:"Dec 1, 2026", v:9333.34, s:"planned" },
    { d:"Jan 1, 2027", v:9259.26, s:"planned" },{ d:"Feb 1, 2027", v:9185.19, s:"planned" },
    { d:"Mar 1, 2027", v:9111.11, s:"planned" },{ d:"Apr 1, 2027", v:9037.04, s:"planned" },
    { d:"May 1, 2027", v:8962.94, s:"planned" },
  ],
  rails: [
    { n:"Deposyt",    gross:19840, fees:874, res:0,   net:18966, pct:4.41, appr:96.2, cb:0.31, cap:60000, tone:"good" },
    { n:"ExpiTrans",  gross:14320, fees:648, res:0,   net:13672, pct:4.53, appr:94.1, cb:0.44, cap:40000, tone:"good" },
    { n:"Kurv / EMS", gross:7952,  fees:366, res:795, net:6791,  pct:4.60, appr:91.8, cb:0.67, cap:25000, tone:"warn" },
    { n:"Retired rail", gross:0,   fees:0,   res:500, net:0,     pct:0,    appr:0,    cb:0,    cap:0,     tone:"mute" },
  ],

  // ---------------------------------------------------------------- REVENUE
  revMonthly: [
    { m:"Nov", v:64267 },{ m:"Dec", v:58900 },{ m:"Jan", v:55400 },{ m:"Feb", v:51200 },
    { m:"Mar", v:49800 },{ m:"Apr", v:47300 },{ m:"May", v:45100 },{ m:"Jun", v:43900 },{ m:"Jul", v:42112 },
  ],
  channels: [
    { m:"Organic / direct", v:18420, trust:"good" },
    { m:"Email",            v:6890,  trust:"low" },
    { m:"Wholesale",        v:4120,  trust:"mock" },
    { m:"Creators",         v:400,   trust:"low" },
    { m:"Paid social",      v:0,     trust:"good" },
    { m:"Unattributed",     v:12282, trust:"none", tone:"bad" },
  ],
  products: [
    { sku:"Dubai Chocolate",          cat:"Chocolate", price:69, cost:6.72, basis:"measured", margin:90.3, units:142, rev:9798, trend:[118,126,131,138,142] },
    { sku:"Sea Salt Chocolate",       cat:"Chocolate", price:69, cost:6.26, basis:"measured", margin:90.9, units:105, rev:7245, trend:[96,99,103,101,105] },
    { sku:"Strawberry Mango Gummies", cat:"Gummies",   price:69, cost:10.00, basis:"placeholder", margin:null, units:94, rev:6486, trend:[71,78,84,90,94] },
    { sku:"Matcha Chocolate",         cat:"Chocolate", price:69, cost:7.25, basis:"measured", margin:89.5, units:80, rev:5520, trend:[92,88,85,82,80] },
    { sku:"Blue Raspberry Gummies",   cat:"Gummies",   price:69, cost:10.00, basis:"placeholder", margin:null, units:77, rev:5313, trend:[58,64,69,74,77] },
    { sku:"Mint Chocolate",           cat:"Chocolate", price:69, cost:6.91, basis:"measured", margin:90.0, units:62, rev:4278, trend:[68,66,64,63,62] },
    { sku:"Toffee Chocolate",         cat:"Chocolate", price:69, cost:7.02, basis:"measured", margin:89.8, units:48, rev:3312, trend:[52,50,49,48,48] },
    { sku:"Espresso Chocolate",       cat:"Chocolate", price:69, cost:6.88, basis:"measured", margin:90.0, units:41, rev:2829, trend:[46,44,43,42,41] },
    { sku:"Micro Caps",               cat:"Capsules",  price:null, cost:10.00, basis:"placeholder", margin:null, units:0, rev:0, trend:[0,0,0,0,0] },
  ],
  subs: {
    kpi: [
      { label:"Active subscribers", value:"1,842", sub:"end of period", tone:"ink", delta:-3.2 },
      { label:"Rebill rate", value:"74%", sub:"recovering from 27.3%", tone:"good", delta:21.3 },
      { label:"Attach rate", value:"13.4%", sub:"of paid orders", tone:"warn", delta:0.4 },
      { label:"Cycle-3 retention", value:"10.98%", sub:"nine in ten gone", tone:"bad", delta:-1.1 },
      { label:"Retry recovery", value:"0 / 10", sub:"attempts 2 and 3", tone:"bad" },
      { label:"Churn, monthly", value:"8.6%", sub:"of active base", tone:"bad", delta:-0.8 },
    ],
    rebill: [{m:"Feb",v:100},{m:"Mar",v:96},{m:"Apr",v:71},{m:"May",v:48},{m:"Jun",v:33},{m:"Jul",v:27.3},{m:"Aug",v:61},{m:"Sep",v:74}],
    cohorts: [
      { c:"Mar 2026", n:318, m1:100, m3:21, m6:12, m12:null },
      { c:"Apr 2026", n:287, m1:100, m3:18, m6:11, m12:null },
      { c:"May 2026", n:341, m1:100, m3:14, m6:null, m12:null },
      { c:"Jun 2026", n:296, m1:100, m3:11, m6:null, m12:null },
      { c:"Jul 2026", n:264, m1:100, m3:null, m6:null, m12:null },
      { c:"Aug 2026", n:302, m1:100, m3:null, m6:null, m12:null },
    ],
  },

  // ---------------------------------------------------------------- MARKETING
  ads: {
    kpi: [
      { label:"Blended ROAS", value:"\u2014", sub:"no spend to measure", tone:"mute" },
      { label:"Ad spend · 30d", value:"$0", sub:"paused since August", tone:"mute" },
      { label:"CAC", value:"\u2014", sub:"needs attribution", tone:"mute" },
      { label:"Impressions", value:"0", sub:"all channels", tone:"mute" },
      { label:"CTR", value:"0.00%", sub:"\u2014", tone:"mute" },
      { label:"Planned Q4 budget", value:"$13,125", sub:"35% of sweep", tone:"violet" },
    ],
    accounts: [
      { n:"Meta Business", id:"act_8841203", status:"Paused", spend:0, imp:0, clicks:0, ctr:0, cpc:0, leads:0 },
      { n:"TikTok Ads",    id:"act_5520918", status:"Not connected", spend:0, imp:0, clicks:0, ctr:0, cpc:0, leads:0 },
      { n:"Google Ads",    id:"act_2290471", status:"Not connected", spend:0, imp:0, clicks:0, ctr:0, cpc:0, leads:0 },
    ],
    social: [
      { n:"Instagram", followers:"24.8K", growth:1.9, posts:12, eng:"3.4%", tone:"good" },
      { n:"TikTok",    followers:"11.2K", growth:6.4, posts:18, eng:"5.1%", tone:"good" },
      { n:"YouTube",   followers:"2.1K",  growth:0.4, posts:3,  eng:"1.8%", tone:"warn" },
      { n:"X",         followers:"1.4K",  growth:-0.7, posts:6, eng:"0.9%", tone:"bad" },
    ],
  },

  // ---------------------------------------------------------------- OPS
  inventory: [
    { sku:"Dubai Chocolate",          cat:"Chocolate", hand:980,  vel:117, cover:8,   lead:21, st:"critical", po:61000, inc:true },
    { sku:"Micro Caps",               cat:"Capsules",  hand:0,    vel:0,   cover:0,   lead:30, st:"critical", po:0, inc:false, note:"Never produced" },
    { sku:"Strawberry Mango Gummies", cat:"Gummies",   hand:2210, vel:104, cover:21,  lead:24, st:"warning",  po:142000, inc:true },
    { sku:"Sea Salt Chocolate",       cat:"Chocolate", hand:3100, vel:92,  cover:34,  lead:18, st:"warning",  po:53000, inc:true },
    { sku:"Mint Chocolate",           cat:"Chocolate", hand:5640, vel:83,  cover:68,  lead:18, st:"healthy",  po:0, inc:false },
    { sku:"Toffee Chocolate",         cat:"Chocolate", hand:3790, vel:57,  cover:66,  lead:18, st:"healthy",  po:0, inc:false },
    { sku:"Espresso Chocolate",       cat:"Chocolate", hand:4680, vel:46,  cover:102, lead:18, st:"healthy",  po:0, inc:false },
    { sku:"Blue Raspberry Gummies",   cat:"Gummies",   hand:4920, vel:63,  cover:78,  lead:24, st:"healthy",  po:0, inc:false },
    { sku:"Matcha Chocolate",         cat:"Chocolate", hand:8100, vel:39,  cover:208, lead:18, st:"over",     po:0, inc:false },
  ],
  production: {
    runs: [
      { d:"Pending", product:"Dubai Chocolate", input:"\u2014", output:"\u2014", yield:null, cost:null, st:"scheduled" },
      { d:"Aug 14", product:"Sea Salt Chocolate", input:"48 lb", output:"1,180 bars", yield:92.4, cost:6.26, st:"estimated" },
      { d:"Jul 22", product:"Mint Chocolate", input:"41 lb", output:"980 bars", yield:90.1, cost:6.91, st:"estimated" },
      { d:"Jul 03", product:"Matcha Chocolate", input:"38 lb", output:"860 bars", yield:88.2, cost:7.25, st:"estimated" },
    ],
    rates: [
      { l:"Labor", v:"$25 / hr" },{ l:"Kitchen rent", v:"$2,200 / mo" },
      { l:"Active ingredient", v:"$300 / lb" },{ l:"Delivery", v:"$150 / run" },
    ],
  },
  suppliers: [
    { n:"LA Manufacturer", what:"Gummies and capsules", terms:"100% up front", lead:"24 days", spend:142000, risk:"warn" },
    { n:"Own kitchen", what:"All chocolate", terms:"n/a", lead:"18-21 days", spend:26400, risk:"good" },
    { n:"Ingredient supplier", what:"Active ingredient", terms:"Retail, no account", lead:"7 days", spend:31200, risk:"bad" },
    { n:"Packaging", what:"Boxes, labels, inserts", terms:"Net 0", lead:"14 days", spend:14800, risk:"warn" },
    { n:"3PL warehouse", what:"Pick, pack, ship", terms:"Monthly invoice", lead:"n/a", spend:18900, risk:"good" },
  ],

  // ---------------------------------------------------------------- GOALS
  goals: [
    { g:"Monthly revenue", now:"$46.8K", target:"$85K", pct:55, tone:"warn", bench:70, note:"Back to the November run rate, then past it" },
    { g:"Fixed cost ratio", now:"30.0%", target:"15%", pct:50, tone:"bad", bench:100, note:"Benchmark for DTC is about 15% of revenue" },
    { g:"Gross margin", now:"90%", target:"85%", pct:100, tone:"good", bench:88, note:"Already ahead. Protect it rather than chase it" },
    { g:"Approval rate", now:"94.75%", target:"98%", pct:77, tone:"warn", bench:96, note:"Three points is about $18,000 a year" },
    { g:"Rebill rate", now:"74%", target:"90%", pct:82, tone:"warn", bench:85, note:"Was 27.3% in July. Credentials restored" },
    { g:"Subscription attach", now:"13.4%", target:"30%", pct:45, tone:"bad", bench:62, note:"Every point of attach compounds" },
    { g:"Cycle-3 retention", now:"11.0%", target:"45%", pct:24, tone:"bad", bench:55, note:"The single weakest number in the business" },
    { g:"Days of cover, worst SKU", now:"8d", target:"45d", pct:18, tone:"bad", bench:60, note:"Anything under lead time is a stockout waiting" },
    { g:"Debt outstanding", now:"$251K", target:"$0", pct:38, tone:"warn", bench:50, note:"$33,000 paid down in the last month" },
    { g:"Processes written", now:"0", target:"20", pct:0, tone:"bad", bench:0, note:"Nothing about how this runs is written down" },
  ],

  // ---------------------------------------------------------------- TEAM
  org: {
    exec: [{ n:"Damon B.", r:"Founder / CEO", tag:"CEO" }],
    leads: [
      { n:"Rebekka", r:"Content lead", team:"Marketing", count:2 },
      { n:"Victor", r:"Developer", team:"Technology", count:1 },
      { n:"Jose", r:"Production", team:"Kitchen", count:2 },
      { n:"Sales rep", r:"Clinic channel", team:"Wholesale", count:1 },
    ],
    teams: [
      { lead:"Rebekka", team:"Marketing", note:"Creator program wound down. Seat being repointed.", people:["Content freelancer","Designer (hiring)"] },
      { lead:"Victor", team:"Technology", note:"Direct contractor from Sep 1. Instructions route through DB.", people:["Greg (OpFix)","Everett (OpFix)"] },
      { lead:"Jose", team:"Kitchen", note:"LA facility. Chocolate production.", people:["Kitchen hand","Packer"] },
      { lead:"Sales rep", team:"Wholesale", note:"Commission only. Cold outbound to clinics.", people:["Admin (hiring)"] },
    ],
  },
  scorecards: [
    { n:"Damon B.", r:"Founder", metric:"Decisions routed through him weekly", now:"14", target:"< 5", st:"bad" },
    { n:"Victor",   r:"Developer", metric:"Fix items closed and verified", now:"11 / 21", target:"21", st:"good" },
    { n:"Rebekka",  r:"Content lead", metric:"Being repointed", now:"\u2014", target:"TBD", st:"mute" },
    { n:"Jose",     r:"Production", metric:"Runs logged with all fields", now:"0 / 30", target:"30", st:"bad" },
    { n:"Sales rep",r:"Clinic channel", metric:"Clinic accounts opened", now:"0", target:"6", st:"bad" },
    { n:"Support",  r:"Customer support", metric:"First response time", now:"\u2014", target:"< 4h", st:"mute" },
  ],
  tasks: {
    cols: [
      { k:"blocked", l:"Blocked", tone:"bad", items:[
        { t:"Warehouse system access", who:"DB", p:"High" },
        { t:"Email platform access", who:"DB", p:"High" },
        { t:"Attribution history export", who:"DB", p:"High" },
      ]},
      { k:"queue", l:"Queue", tone:"mute", items:[
        { t:"Move ingredients to wholesale accounts", who:"DB", p:"Med" },
        { t:"Second card application", who:"DB", p:"Med" },
        { t:"Clinic pricing sheet", who:"Sales", p:"Low" },
        { t:"Retention offer copy", who:"Rebekka", p:"Med" },
      ]},
      { k:"doing", l:"In progress", tone:"accent", items:[
        { t:"First-order payment cascade", who:"Victor", p:"High" },
        { t:"Attribution rebuild, 30 day window", who:"Victor", p:"High" },
        { t:"Kitchen ledger rollout", who:"Jose", p:"High" },
        { t:"Product page rebuild", who:"Designer", p:"Med" },
      ]},
      { k:"done", l:"Done", tone:"good", items:[
        { t:"Card data exposure closed", who:"Victor", p:"High" },
        { t:"Security fix list cleared", who:"Victor", p:"High" },
        { t:"Cost base cut by $14,810/mo", who:"DB", p:"High" },
        { t:"Code moved to client ownership", who:"Victor", p:"Med" },
      ]},
    ],
  },
  vault: [
    { n:"Supplier agreements", c:6, tone:"accent", note:"Manufacturer, packaging, 3PL" },
    { n:"Processor agreements", c:4, tone:"warn", note:"Includes volume caps and reserve terms" },
    { n:"Entity and formation", c:9, tone:"bad", note:"Restricted" },
    { n:"Insurance", c:3, tone:"info", note:"Product liability, general" },
    { n:"Trademark and IP", c:5, tone:"violet", note:"Filed and pending" },
    { n:"Lab reports and COAs", c:28, tone:"good", note:"Per batch, public facing" },
  ],
  drive: [
    { n:"Financial reconstruction", t:"Spreadsheet", d:"Sep 8", size:"2.4 MB" },
    { n:"Kitchen ledger", t:"Spreadsheet", d:"Aug 27", size:"180 KB" },
    { n:"Tech stack and vendors", t:"Spreadsheet", d:"Sep 2", size:"340 KB" },
    { n:"Build plan", t:"Document", d:"Aug 26", size:"1.1 MB" },
    { n:"Roles and responsibilities", t:"Document", d:"Sep 2", size:"96 KB" },
    { n:"Brand assets", t:"Folder", d:"Jul 14", size:"142 MB" },
  ],
  agents: [
    { n:"Support agent", s:"planned", d:"Answers order status, shipping and refund questions from the order platform and the 3PL, escalating anything it cannot resolve.", impact:"Halves support load" },
    { n:"Content agent", s:"planned", d:"Drafts product copy, email sequences and social posts against the brand voice and the claims policy.", impact:"Replaces a freelancer" },
    { n:"Inventory agent", s:"planned", d:"Watches days of cover per product and raises a purchase order before anything crosses its lead time.", impact:"Ends stockouts" },
    { n:"Reconciliation agent", s:"planned", d:"Matches processor settlements to bank deposits daily and flags anything that does not tie.", impact:"Removes manual close work" },
    { n:"Creator agent", s:"shelved", d:"Managed creator onboarding, link generation and payout calculation.", impact:"Program wound down" },
  ],
  dataHealth: [
    { n:"Mercury",        s:"live",    d:"Operating account and buckets" },
    { n:"BlueBanc",       s:"live",    d:"Settlement account" },
    { n:"Xero",           s:"live",    d:"78 accounts, all coded" },
    { n:"Order platform", s:"live",    d:"Orders, subscriptions, cascade" },
    { n:"Affiliate platform", s:"live", d:"Access received 24 August" },
    { n:"Chase card",     s:"partial", d:"Feed not connected" },
    { n:"Processors",     s:"partial", d:"Two of three self-serve" },
    { n:"Warehouse",      s:"blocked", d:"Access outstanding" },
    { n:"Email platform", s:"blocked", d:"Access outstanding" },
    { n:"Attribution history", s:"blocked", d:"Export outstanding" },
    { n:"Kitchen ledger", s:"waiting", d:"Built, waiting on first run" },
    { n:"Site analytics", s:"partial", d:"Being installed" },
  ],
  reliability: [
    { a:"Cash position",   l:"high",   n:"Reconstructed from bank and card statements" },
    { a:"Fixed costs",     l:"high",   n:"Verified line by line" },
    { a:"Debt schedule",   l:"high",   n:"From the signed agreement" },
    { a:"Revenue by rail", l:"medium", n:"Two of three portals self-serve" },
    { a:"Approval rates",  l:"medium", n:"Gateway reports, not re-measured" },
    { a:"Margin per unit", l:"low",    n:"Placeholder cost on six of ten products" },
    { a:"Inventory cover", l:"low",    n:"Needs warehouse access" },
    { a:"Channel revenue", l:"none",   n:"Attribution broken since April" },
    { a:"Lifetime value",  l:"none",   n:"Needs attribution first" },
  ],
};
