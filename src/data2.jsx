// data2.jsx - added for the second pass. Marketing performance, LTV by cohort,
// retention, and the customer-centric operations reframe.

const D2 = {
  // ---------------------------------------------------------------- MARKETING
  mkt: {
    note: "Where the ad money goes and what it brings back. Meta carries most of it. Spend is paused today, so this is the shape the surface takes once it turns back on.",
    headline: [
      { label:"Ad spend · 30d", value:"$0", sub:"paused since August", tone:"mute" },
      { label:"Blended ROAS", value:"-", sub:"no spend to measure", tone:"mute", help:"Revenue attributed to ads divided by ad spend." },
      { label:"Blended CAC", value:"-", sub:"needs attribution", tone:"mute", help:"What it costs to acquire one paying customer, across all paid channels." },
      { label:"CAC ceiling", value:"$58", sub:"derived from 90-day contribution", tone:"warn", help:"The most you can pay for a customer and still be profitable inside 90 days." },
      { label:"Planned Q4 budget", value:"$13,125", sub:"35% of the sweep", tone:"violet" },
      { label:"Channels live", value:"1 of 4", sub:"Meta only", tone:"warn" },
    ],
    channels: [
      { n:"Meta", status:"Paused", share:"Primary", spend:0, imp:0, clicks:0, ctr:0, cpc:0, cpm:0, conv:0, cpa:0, roas:0, tone:"info",
        note:"Where most of the budget goes. Ad buyer confirmed the data comes out of the box." },
      { n:"Google", status:"Not connected", share:"Secondary", spend:0, imp:0, clicks:0, ctr:0, cpc:0, cpm:0, conv:0, cpa:0, roas:0, tone:"mute",
        note:"Possible. Not committed." },
      { n:"AppLovin", status:"Not connected", share:"Secondary", spend:0, imp:0, clicks:0, ctr:0, cpc:0, cpm:0, conv:0, cpa:0, roas:0, tone:"mute",
        note:"Possible. Not committed." },
      { n:"Organic", status:"Live", share:"Small", spend:0, imp:0, clicks:0, ctr:0, cpc:0, cpm:0, conv:0, cpa:0, roas:0, tone:"good",
        note:"Small percentage of total. No spend against it." },
    ],
    // shape only, populates when spend resumes
    trend: [
      { m:"Apr", spend:8400, rev:31200 },{ m:"May", spend:7900, rev:27600 },
      { m:"Jun", spend:6200, rev:21400 },{ m:"Jul", spend:3000, rev:11800 },
      { m:"Aug", spend:0, rev:0 },{ m:"Sep", spend:0, rev:0 },
    ],
    creative: [
      { n:"Bundle offer, static", spend:0, imp:0, ctr:0, cpa:0, st:"paused" },
      { n:"Single unit, video", spend:0, imp:0, ctr:0, cpa:0, st:"paused" },
      { n:"Founder story, UGC", spend:0, imp:0, ctr:0, cpa:0, st:"paused" },
      { n:"Subscription offer", spend:0, imp:0, ctr:0, cpa:0, st:"draft" },
    ],
  },

  // ---------------------------------------------------------------- LTV / CAC CEILING
  ltv: {
    note: "The number that tells you what you can afford to pay for a customer. Contribution based, not revenue based, because at 90% product margin a revenue figure flatters a break-even business.",
    windows: ["First order","30 days","90 days","180 days"],
    // by product category
    byCategory: [
      { n:"Chocolate", first:41.2, d30:58.4, d90:79.1, d180:96.4, ceiling:79, profitAt:"First order", tone:"good" },
      { n:"Gummies",   first:38.8, d30:54.2, d90:71.6, d180:84.2, ceiling:72, profitAt:"First order", tone:"good" },
      { n:"Capsules",  first:null, d30:null, d90:null, d180:null, ceiling:null, profitAt:"Not produced", tone:"mute" },
      { n:"Bundle",    first:52.6, d30:81.4, d90:118.2, d180:146.8, ceiling:118, profitAt:"First order", tone:"good" },
    ],
    // by coupon / offer
    byCoupon: [
      { n:"No coupon",   first:48.1, d30:66.2, d90:88.4, d180:106.2, ceiling:88, profitAt:"First order", tone:"good" },
      { n:"WELCOME15",   first:31.4, d30:49.8, d90:71.2, d180:88.6, ceiling:71, profitAt:"First order", tone:"good" },
      { n:"SAVE25",      first:18.2, d30:34.1, d90:54.8, d180:71.4, ceiling:55, profitAt:"30 days", tone:"warn" },
      { n:"BOGO",        first:-4.6, d30:14.2, d90:36.8, d180:52.1, ceiling:37, profitAt:"90 days", tone:"bad" },
      { n:"FREESHIP",    first:39.8, d30:57.1, d90:76.4, d180:92.8, ceiling:76, profitAt:"First order", tone:"good" },
    ],
    cohorts: [
      { c:"Mar 2026", n:318, first:44.2, d30:61.8, d90:82.4, d180:99.1 },
      { c:"Apr 2026", n:287, first:42.8, d30:59.4, d90:78.2, d180:94.6 },
      { c:"May 2026", n:341, first:45.6, d30:63.1, d90:81.8, d180:null },
      { c:"Jun 2026", n:296, first:41.9, d30:57.2, d90:74.6, d180:null },
      { c:"Jul 2026", n:264, first:43.4, d30:60.8, d90:null, d180:null },
      { c:"Aug 2026", n:302, first:46.1, d30:null, d90:null, d180:null },
    ],
  },

  // ---------------------------------------------------------------- RETENTION
  retention: {
    note: "How much of the money comes from people who already bought. The cheapest revenue in the business, and the least measured.",
    kpi: [
      { label:"Revenue from existing", value:"38.4%", sub:"of the 30 day total", tone:"warn", delta:2.1, help:"Any order from a customer who has bought before." },
      { label:"Revenue from new", value:"61.6%", sub:"first-time buyers", tone:"ink", delta:-2.1 },
      { label:"Email revenue", value:"$6,890", sub:"14.7% of total", tone:"info", delta:8.4 },
      { label:"Referral code usage", value:"112", sub:"4.2% of orders", tone:"warn", delta:14.2 },
      { label:"Repeat rate", value:"22.8%", sub:"bought more than once", tone:"warn", delta:1.4 },
      { label:"Time to second order", value:"41 days", sub:"median", tone:"ink", delta:-6.2 },
    ],
    split: [
      { m:"Apr", existing:34.1, neu:65.9 },{ m:"May", existing:35.2, neu:64.8 },
      { m:"Jun", existing:36.0, neu:64.0 },{ m:"Jul", existing:36.3, neu:63.7 },
      { m:"Aug", existing:37.6, neu:62.4 },{ m:"Sep", existing:38.4, neu:61.6 },
    ],
    emailTrend: [
      { m:"Apr", v:4820 },{ m:"May", v:5240 },{ m:"Jun", v:5910 },
      { m:"Jul", v:6120 },{ m:"Aug", v:6350 },{ m:"Sep", v:6890 },
    ],
    referralTrend: [
      { m:"Apr", v:64 },{ m:"May", v:71 },{ m:"Jun", v:83 },
      { m:"Jul", v:91 },{ m:"Aug", v:98 },{ m:"Sep", v:112 },
    ],
    sources: [
      { m:"Email flows", v:4210, tone:"info" },
      { m:"Email campaigns", v:2680, tone:"info" },
      { m:"Referral codes", v:3840, tone:"violet" },
      { m:"Subscription rebills", v:5120, tone:"good" },
      { m:"Direct repeat", v:2110, tone:"accent" },
    ],
  },

  // ---------------------------------------------------------------- OPS, CUSTOMER CENTRIC
  ops: {
    note: "Things that delight customers and turn into money. Problems live underneath, not on top.",
    kpi: [
      { label:"Order to doorstep", value:"4.2 days", sub:"median, end to end", tone:"good", delta:-8.1, help:"From the moment they pay to the moment it arrives." },
      { label:"Shipped same day", value:"78%", sub:"target 90%", tone:"warn", delta:4.2 },
      { label:"In stock when wanted", value:"91%", sub:"of attempted orders", tone:"warn", delta:-2.4, help:"Orders that didn't hit an out-of-stock product." },
      { label:"Arrived undamaged", value:"98.6%", sub:"of delivered orders", tone:"good", delta:0.4 },
      { label:"Reship rate", value:"2.1%", sub:"26 of 348 July", tone:"warn", delta:-0.6 },
      { label:"Support response", value:"6.4 hrs", sub:"target under 4", tone:"bad", delta:-12.1 },
    ],
    deliver: [
      { m:"Apr", v:5.1 },{ m:"May", v:4.9 },{ m:"Jun", v:4.7 },
      { m:"Jul", v:4.5 },{ m:"Aug", v:4.4 },{ m:"Sep", v:4.2 },
    ],
    friction: [
      { n:"Out of stock at checkout", count:31, cost:2139, tone:"bad", fix:"Days of cover alerts before the reorder window" },
      { n:"Late shipment, over 2 days", count:24, cost:0, tone:"warn", fix:"3PL cutoff time and same-day rules" },
      { n:"Damaged on arrival", count:5, cost:345, tone:"warn", fix:"Packaging review with the supplier" },
      { n:"Support waited over 24 hrs", count:18, cost:0, tone:"bad", fix:"First response target and an owner" },
      { n:"Rebill failed silently", count:42, cost:2898, tone:"bad", fix:"Retry rebuild and card updater" },
    ],
    // cost trend moved here from Products & Margin
    costTrend: [
      { n:"Dubai Chocolate",    cur:6.72, prev:6.94, basis:"measured" },
      { n:"Sea Salt Chocolate", cur:6.26, prev:6.41, basis:"measured" },
      { n:"Matcha Chocolate",   cur:7.25, prev:7.18, basis:"measured" },
      { n:"Mint Chocolate",     cur:6.91, prev:7.02, basis:"measured" },
      { n:"Toffee Chocolate",   cur:7.02, prev:7.11, basis:"measured" },
      { n:"Espresso Chocolate", cur:6.88, prev:6.95, basis:"measured" },
      { n:"Strawberry Gummies", cur:10.00, prev:10.00, basis:"placeholder" },
      { n:"Blue Raspberry Gummies", cur:10.00, prev:10.00, basis:"placeholder" },
    ],
    costSeries: [
      { m:"Apr", v:7.21 },{ m:"May", v:7.08 },{ m:"Jun", v:6.97 },
      { m:"Jul", v:6.94 },{ m:"Aug", v:6.88 },{ m:"Sep", v:6.84 },
    ],
  },

  // ---------------------------------------------------------------- FULFILLMENT (moved)
  fulfillment: {
    shipments: { total:348, onPlatform:223, invisible:125, pct:35.9 },
    breakdown: [
      { m:"Wholesale", v:48, tone:"info" },
      { m:"Samples", v:34, tone:"warn" },
      { m:"Reships", v:26, tone:"warn" },
      { m:"Comps", v:17, tone:"bad" },
    ],
  },
};
