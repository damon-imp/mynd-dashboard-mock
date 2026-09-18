// data3.jsx - folded from DB's growth intelligence reference.
// Data model taken, layout ours.

const D3 = {
  defs: {
    netRev: "Net revenue = sales less discounts less refunds plus shipping, excluding tax.",
    profit: "Contribution profit. Fixed overhead excluded.",
    sep: "MER and aMER are blended and unattributed. ROAS is per channel and attributed. Kept deliberately separate.",
  },

  // ---------------------------------------------------------------- LIVE BLOCK
  live: {
    day: "Thursday, Sep 17",
    elapsed: 81,
    head: [
      { label:"Total ad spend", value:"$4,411", delta:-5.0, sub:"vs pace", tone:"ink", good:true,
        help:"Spend so far today across every paid channel." },
      { label:"New customer orders", value:"123", delta:-6.0, sub:"vs pace", tone:"ink",
        help:"First-time buyers only. Returning orders are excluded." },
      { label:"New customer revenue", value:"$8,019", delta:-5.9, sub:"vs pace", tone:"ink",
        help:"Net revenue from first-time buyers today." },
      { label:"aMER", value:"1.82x", sub:"new customer rev / spend", tone:"good",
        help:"Acquisition MER. New customer revenue divided by total ad spend. The number that says whether acquisition pays." },
      { label:"MER", value:"3.87x", sub:"total rev / spend", tone:"good",
        help:"Blended and unattributed. All revenue divided by all spend." },
      { label:"Blended nCAC", value:"$35.86", sub:"spend / new order", tone:"warn",
        help:"What one new customer costs today, blended across channels." },
    ],
    channels: [
      { n:"Meta",     spend:2034, rev:6283, roas:3.09, tone:"info" },
      { n:"Google",   spend:1346, rev:4255, roas:3.16, tone:"warn" },
      { n:"AppLovin", spend:1031, rev:2500, roas:2.43, tone:"violet" },
      { n:"Organic",  spend:null, rev:4029, roas:null, tone:"mute", note:"revenue only" },
    ],
    metrics: [
      { label:"% new customer revenue", value:"47.0%", help:"Share of today's revenue from first-time buyers." },
      { label:"NAOV", value:"$65.19", help:"New customer average order value." },
      { label:"Total ROAS", value:"3.87x" },
      { label:"Total orders", value:"217" },
      { label:"New revenue", value:"$8,019" },
      { label:"Returning revenue", value:"$9,048" },
    ],
  },

  // ---------------------------------------------------------------- DAILY TRACKER
  daily: {
    rows: [
      { d:"Sep 1",  w:"Tue", spend:7342, dS:null,  ord:220, dO:null,  nc:14980, amer:2.04, mer:3.69, nNew:220, $new:14980, nRet:147, $ret:12099, tot:367, ncrev:55.3, naov:68.09, ncac:33.37, roas:3.05, rev:27079, gm:18033, profit:6904 },
      { d:"Sep 2",  w:"Wed", spend:6507, dS:-11.4, ord:176, dO:-20.0, nc:13252, amer:2.04, mer:3.51, nNew:176, $new:13252, nRet:97,  $ret:9603,  tot:273, ncrev:58.0, naov:75.30, ncac:36.97, roas:2.82, rev:22855, gm:15343, profit:5783 },
      { d:"Sep 3",  w:"Thu", spend:6565, dS:0.9,   ord:151, dO:-14.2, nc:11401, amer:1.74, mer:3.92, nNew:151, $new:11401, nRet:173, $ret:14350, tot:324, ncrev:44.3, naov:75.50, ncac:43.48, roas:3.39, rev:25751, gm:16797, profit:6562 },
      { d:"Sep 4",  w:"Fri", spend:7297, dS:11.2,  ord:215, dO:42.4,  nc:14920, amer:2.04, mer:4.13, nNew:215, $new:14920, nRet:152, $ret:15181, tot:367, ncrev:49.6, naov:69.40, ncac:33.94, roas:3.45, rev:30101, gm:20118, profit:8836 },
      { d:"Sep 5",  w:"Sat", spend:4610, dS:-36.8, ord:111, dO:-48.4, nc:8014,  amer:1.74, mer:3.61, nNew:111, $new:8014,  nRet:87,  $ret:8650,  tot:198, ncrev:48.1, naov:72.20, ncac:41.53, roas:2.86, rev:16664, gm:10498, profit:3751 },
      { d:"Sep 6",  w:"Sun", spend:5429, dS:17.8,  ord:136, dO:22.5,  nc:9365,  amer:1.72, mer:3.61, nNew:136, $new:9365,  nRet:126, $ret:10224, tot:262, ncrev:47.8, naov:68.86, ncac:39.92, roas:2.96, rev:19589, gm:12715, profit:4478 },
      { d:"Sep 7",  w:"Mon", spend:6186, dS:13.9,  ord:194, dO:42.6,  nc:12644, amer:2.04, mer:3.56, nNew:194, $new:12644, nRet:110, $ret:9403,  tot:304, ncrev:57.4, naov:65.18, ncac:31.89, roas:3.04, rev:22047, gm:13786, profit:4736 },
      { d:"Sep 8",  w:"Tue", spend:7625, dS:23.3,  ord:216, dO:11.3,  nc:13429, amer:1.76, mer:3.65, nNew:216, $new:13429, nRet:181, $ret:14425, tot:397, ncrev:48.2, naov:62.17, ncac:35.30, roas:3.01, rev:27854, gm:18041, profit:6570 },
      { d:"Sep 9",  w:"Wed", spend:6900, dS:-9.5,  ord:226, dO:4.6,   nc:15516, amer:2.25, mer:3.98, nNew:226, $new:15516, nRet:153, $ret:11977, tot:379, ncrev:56.4, naov:68.65, ncac:30.53, roas:3.16, rev:27493, gm:17130, profit:6538 },
      { d:"Sep 10", w:"Thu", spend:6077, dS:-11.9, ord:156, dO:-31.0, nc:11762, amer:1.94, mer:3.89, nNew:156, $new:11762, nRet:135, $ret:11873, tot:291, ncrev:49.8, naov:75.40, ncac:38.96, roas:3.13, rev:23635, gm:15517, profit:6106 },
      { d:"Sep 11", w:"Fri", spend:6723, dS:10.6,  ord:202, dO:29.5,  nc:12820, amer:1.91, mer:3.57, nNew:202, $new:12820, nRet:134, $ret:11183, tot:336, ncrev:53.4, naov:63.47, ncac:33.28, roas:2.89, rev:24003, gm:15745, profit:5815 },
      { d:"Sep 12", w:"Sat", spend:5411, dS:-19.5, ord:126, dO:-37.6, nc:9684,  amer:1.79, mer:3.75, nNew:126, $new:9684,  nRet:128, $ret:10601, tot:254, ncrev:47.7, naov:76.86, ncac:42.94, roas:3.10, rev:20285, gm:12828, profit:4539 },
      { d:"Sep 13", w:"Sun", spend:4856, dS:-10.3, ord:121, dO:-4.0,  nc:8865,  amer:1.83, mer:4.04, nNew:121, $new:8865,  nRet:112, $ret:10742, tot:233, ncrev:45.2, naov:73.26, ncac:40.13, roas:3.51, rev:19607, gm:13020, profit:5814 },
      { d:"Sep 14", w:"Mon", spend:6243, dS:28.6,  ord:156, dO:28.9,  nc:11978, amer:1.92, mer:3.40, nNew:156, $new:11978, nRet:99,  $ret:9251,  tot:255, ncrev:56.4, naov:76.78, ncac:40.02, roas:2.87, rev:21229, gm:13664, profit:4711 },
      { d:"Sep 15", w:"Tue", spend:5746, dS:-8.0,  ord:162, dO:3.8,   nc:10550, amer:1.84, mer:3.98, nNew:162, $new:10550, nRet:128, $ret:12327, tot:290, ncrev:46.1, naov:65.12, ncac:35.47, roas:3.03, rev:22877, gm:15355, profit:6433 },
    ],
    totals:   { spend:93517,  ord:2568, nc:179180, amer:1.92, mer:3.75, nNew:2568, $new:179180, nRet:1962, $ret:171889, tot:4530, ncrev:51.0, naov:69.77, ncac:36.42, roas:3.09, rev:351069, gm:228588, profit:87574 },
    forecast: { spend:187034, ord:5136, nc:358360, amer:1.92, mer:3.75, nNew:5136, $new:358360, nRet:3924, $ret:343778, tot:9060, ncrev:51.0, naov:69.77, ncac:36.42, roas:3.09, rev:702138, gm:457177, profit:175149 },
    target:   { spend:210000, ord:5600, nc:470000, $new:470000, rev:1020000, profit:250000 },
    reqDay:   { spend:7766,   ord:202,  nc:19388,  $new:19388,  rev:44595,   profit:10828 },
    channels: [
      { n:"Meta",     spend:47465, fcst:50049, rev:143111, roas:3.02, tone:"info" },
      { n:"Google",   spend:28496, fcst:30008, rev:106201, roas:3.73, tone:"warn" },
      { n:"AppLovin", spend:17556, fcst:18167, rev:39258,  roas:2.24, tone:"violet" },
      { n:"Organic",  spend:null,  fcst:null,  rev:62499,  roas:null, tone:"mute" },
    ],
  },

  // ---------------------------------------------------------------- COHORT LTV
  cohort: {
    def: "A cohort is the product and coupon on a customer's first order, never reassigned. LTV is cumulative net revenue per acquired customer, by days since that customer's own first order.",
    basis: "LTV basis is net revenue only, one curve per cohort. Windows are rolling days from each customer's first order at 30, 60, 90, 180 and 365, and include every later order across any product, not just repeats of the cohort product.",
    marks: ["Day 0","M1","M2","M3","M6","M12"],
    byProduct: {
      head: [
        { label:"Blended first-order AOV", value:"$35.84", sub:"20,700 customers" },
        { label:"Blended M12 LTV", value:"$161.97", sub:"4.52x first-order value" },
        { label:"Top M12 cohort", value:"Capsules", sub:"$289.30 per customer", tone:"warn" },
        { label:"Best LTV multiple", value:"6.55x", sub:"Capsules", tone:"good" },
      ],
      rows: [
        { n:"Dubai Chocolate",          c:5240, aov:42.50, m1:54.10, m2:74.60, m3:92.30,  m6:128.70, m12:171.40, x:4.03, tone:"info" },
        { n:"Capsules",                 c:2890, aov:44.20, m1:62.40, m2:96.10, m3:128.70, m6:198.50, m12:289.30, x:6.55, tone:"warn" },
        { n:"Strawberry Mango Gummies", c:3050, aov:27.40, m1:36.20, m2:52.10, m3:66.40,  m6:95.30,  m12:132.60, x:4.84, tone:"good" },
        { n:"Blue Raspberry Gummies",   c:2470, aov:26.10, m1:34.00, m2:49.20, m3:62.50,  m6:88.10,  m12:121.70, x:4.66, tone:"violet" },
        { n:"Espresso Chocolate",       c:1640, aov:35.60, m1:47.30, m2:68.40, m3:87.20,  m6:126.90, m12:172.10, x:4.83, tone:"bad" },
        { n:"Toffee Chocolate",         c:1780, aov:33.80, m1:43.10, m2:60.20, m3:74.60,  m6:101.30, m12:134.80, x:3.99, tone:"good" },
        { n:"Mint Chocolate",           c:2110, aov:31.20, m1:40.40, m2:56.30, m3:69.10,  m6:96.20,  m12:128.50, x:4.12, tone:"accent" },
        { n:"Love Gummies",             c:1520, aov:38.90, m1:43.20, m2:51.40, m3:57.60,  m6:68.30,  m12:79.10,  x:2.03, tone:"bad" },
      ],
    },
    byCoupon: {
      head: [
        { label:"Blended first-order AOV", value:"$57.79", sub:"12,640 customers" },
        { label:"Blended M12 LTV", value:"$190.32", sub:"3.29x first-order value" },
        { label:"Top M12 cohort", value:"No coupon", sub:"$231.80 per customer", tone:"info" },
        { label:"Best LTV multiple", value:"3.58x", sub:"WELCOME15", tone:"good" },
      ],
      rows: [
        { n:"No coupon",   c:5210, aov:68.70, m1:82.40, m2:108.90, m3:131.20, m6:176.50, m12:231.80, x:3.37, tone:"info" },
        { n:"WELCOME15",   c:4380, aov:54.10, m1:66.80, m2:89.70,  m3:108.40, m6:148.20, m12:193.60, x:3.58, tone:"warn" },
        { n:"SAVE25",      c:1930, aov:47.30, m1:55.20, m2:71.60,  m3:84.90,  m6:106.10, m12:128.40, x:2.71, tone:"good" },
        { n:"BOGO Launch", c:1120, aov:39.60, m1:44.80, m2:56.30,  m3:64.70,  m6:78.90,  m12:91.20,  x:2.30, tone:"violet" },
      ],
    },
    aovByCategory: [
      { n:"Chocolates",   aov:37.80, c:10770, x:4.16, tone:"info" },
      { n:"Gummies",      aov:26.82, c:5520,  x:4.76, tone:"warn" },
      { n:"Love Gummies", aov:38.90, c:1520,  x:2.03, tone:"good" },
      { n:"Capsules",     aov:44.20, c:2890,  x:6.55, tone:"violet" },
    ],
  },
};
