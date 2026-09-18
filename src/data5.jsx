// data5.jsx, the team layer. Seats, scorecards and the weekly score log.
// Folded from the MYND role documents, Metrics by role, Role scorecards and
// the Metrics tracker, all v1.0, September 18, 2026.
// Primary numbers, targets, cadence, sources and status logic match the
// tracker. Sample history is modeled to show the surface.

const WEEKS = ["Sep 21","Sep 28","Oct 5","Oct 12","Oct 19","Oct 26","Nov 2","Nov 9","Nov 16","Nov 23","Nov 30",
  "Dec 7","Dec 14","Dec 21","Dec 28","Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8","Feb 15","Feb 22",
  "Mar 1","Mar 8","Mar 15"];

// target.kind: "max" (at or under), "min" (at or over), "up" (rising, compared with the prior entry)
// unit: "n" count, "h" hours, "pct" percent, "usd" dollars, "rate" units per dollar
const SEATS = [
  { id:"founder", seat:"Founder and Owner", short:"Founder", who:"DB", reports:null,
    line:"Set direction, hold the relationships only an owner can hold, and get out of the way of everything else.",
    manages:"Direction, money movement, processors, outside advisors",
    not:"The day to day. That's the COO.",
    number:"Decisions routed through him each week", unit:"n", target:{ kind:"max", v:5, text:"Under 5" },
    cadence:"Weekly", source:"Decision log", measure:"Measurable", need:"Decision log, already running",
    doc:"09 Founder and Owner",
    supporting:[
      { n:"Functions transferred and holding", target:"Rising", cadence:"Monthly", source:"Transfer log", sample:"3", tone:"good" },
      { n:"Share of week on growth", target:"Rising from 10%", cadence:"Monthly", source:"Self report", sample:"18%", tone:"good" },
    ] },
  { id:"coo", seat:"Chief Operating Officer", short:"COO", who:"Camila", reports:"founder",
    line:"Run the day to day so the business works without the owner in the middle of every task.",
    manages:"Suppliers and manufacturers, the warehouse, day to day coordination",
    not:"Recipes, code or brand direction.",
    number:"Operational decisions closed without the owner", unit:"n", target:{ kind:"up", text:"Rising. Baseline at 30 days" },
    cadence:"Weekly", source:"Decision log", measure:"Needs 30 days", need:"History before a target means anything",
    doc:"01 Chief Operating Officer",
    supporting:[
      { n:"Products under lead time", target:"Zero", cadence:"Weekly", source:"Inventory system", sample:"2", tone:"bad" },
      { n:"Reorders placed inside lead time", target:"100%", cadence:"Monthly", source:"Purchase log", sample:"75%", tone:"warn" },
      { n:"Liabilities paid late", target:"Zero", cadence:"Monthly", source:"Accounting", sample:"0", tone:"good" },
    ] },
  { id:"content", seat:"Content and Brand Lead", short:"Content and Brand", who:"Rebekka", reports:"founder",
    line:"Own the brand and make the outside teams work as one.",
    manages:"The email and SMS agency, the creator VA, brand review",
    not:"What gets built or when. Paid advertising.",
    number:"Revenue from organic social", unit:"usd", target:{ kind:"up", text:"Profitable" },
    cadence:"Monthly", source:"Attribution, once rebuilt", measure:"Needs attribution", need:"Channel revenue, blocked until attribution is rebuilt",
    doc:"02 Content and Brand Lead",
    supporting:[
      { n:"Published without brand review", target:"Zero", cadence:"Weekly", source:"Publishing log", sample:"1", tone:"warn" },
      { n:"Site and email mismatches", target:"Zero", cadence:"Monthly", source:"Incident note", sample:"0", tone:"good" },
      { n:"Creator VA system documented", target:"Yes", cadence:"Monthly", source:"The document", sample:"No", tone:"bad" },
    ] },
  { id:"dev", seat:"Developer", short:"Developer", who:"Victor", reports:"founder",
    line:"Ship the features that let customers do more for themselves and let the business earn more per customer.",
    manages:"The codebase and the three repositories",
    not:"Brand, copy or what the offer is. Takes work only from the owner.",
    number:"Roadmap items shipped each week", unit:"n", target:{ kind:"up", text:"Per roadmap" },
    cadence:"Weekly", source:"Roadmap", measure:"Needs roadmap", need:"A written roadmap to ship against",
    doc:"03 Developer",
    supporting:[
      { n:"Customer-blocking bugs open over a day", target:"Zero", cadence:"Daily", source:"Issue list", sample:"0", tone:"good" },
      { n:"Handover document current", target:"Yes", cadence:"Monthly", source:"The document", sample:"No", tone:"bad" },
    ] },
  { id:"support", seat:"Customer Support", short:"Support", who:"S.J.", reports:"founder", moving:"coo",
    line:"Get customer problems resolved fast, and make sure nothing sits waiting.",
    manages:"The support inbox and every open customer issue",
    not:"Refund policy, pricing or anything that changes the offer.",
    number:"Time to resolve, median hours", unit:"h", target:{ kind:"max", v:24, text:"Under 24 hours" },
    cadence:"Weekly", source:"Support tool", measure:"Needs build", need:"Resolution timestamps out of the support tool",
    doc:"04 Customer Support",
    supporting:[
      { n:"Time to first reply", target:"Under 1 business day", cadence:"Weekly", source:"Support tool", sample:"14 hrs", tone:"good" },
      { n:"Issues open past a day", target:"Zero", cadence:"Daily", source:"Support tool", sample:"2", tone:"warn" },
      { n:"Repeat questions turned into written answers", target:"Rising", cadence:"Monthly", source:"Site content", sample:"6", tone:"good" },
    ] },
  { id:"wholesale", seat:"Wholesale and Clinic Sales", short:"Wholesale", who:"Clinic channel", reports:"founder",
    line:"Open and hold wholesale accounts, so revenue stops depending only on direct consumers.",
    manages:"The wholesale pipeline and every account in it",
    not:"Pricing, terms, or placing orders with the warehouse.",
    number:"Outbound activity per day", unit:"n", target:{ kind:"min", v:10, text:"10 or more a day" },
    cadence:"Daily", source:"Activity log", measure:"Measurable", need:"Activity log, already running",
    doc:"05 Wholesale and Clinic Sales",
    supporting:[
      { n:"Inbound answered same day", target:"100%", cadence:"Weekly", source:"Inbox", sample:"80%", tone:"warn" },
      { n:"Accounts opened", target:"Rising", cadence:"Monthly", source:"Order records", sample:"2", tone:"good" },
      { n:"Accounts reordering on pattern", target:"Rising", cadence:"Monthly", source:"Order records", sample:"50%", tone:"warn" },
    ] },
  { id:"kitchen", seat:"Kitchen and Production", short:"Kitchen", who:"Jose", reports:"founder", moving:"coo",
    line:"Make the product, on schedule, at a cost the business can measure.",
    manages:"The kitchen, the production schedule, ingredient ordering for a run",
    not:"What gets made or how much. That comes from the reorder plan.",
    number:"Output per dollar", unit:"rate", target:{ kind:"up", text:"Measured, then rising" },
    cadence:"Per run", source:"Run log", measure:"Needs three runs", need:"Logged runs per product",
    doc:"06 Kitchen and Production",
    supporting:[
      { n:"Runs logged with all three fields", target:"100%", cadence:"Monthly", source:"Run log", sample:"83%", tone:"warn" },
      { n:"Runs completed on schedule", target:"100%", cadence:"Monthly", source:"Production schedule", sample:"100%", tone:"good" },
      { n:"Products with a measured cost", target:"All of them", cadence:"Monthly", source:"Run log", sample:"3 of 10", tone:"warn" },
    ] },
  { id:"warehouse", seat:"Fulfillment and the Warehouse", short:"Warehouse", who:"Owned by the COO", reports:"coo", relationship:true,
    line:"The warehouse ships what customers order, accurately and on time, and the numbers prove it.",
    manages:"A relationship, not a person. The COO owns it. The owner handles anything financial.",
    not:"Customer communication or what gets reordered.",
    number:"Order accuracy", unit:"pct", target:{ kind:"min", v:99.5, text:"99.5% or better" },
    cadence:"Monthly", source:"Warehouse system", measure:"Needs access", need:"Order and inventory accuracy from their system",
    doc:"07 Fulfillment and the Warehouse",
    supporting:[
      { n:"Inventory accuracy", target:"98 to 99%", cadence:"Monthly", source:"Warehouse system", sample:"98.4%", tone:"good" },
      { n:"Freight as a share of revenue", target:"Flat or falling", cadence:"Monthly", source:"Warehouse invoices", sample:"11.2%", tone:"warn" },
      { n:"Orders that never reached the platform", target:"Zero", cadence:"Monthly", source:"Reconciliation", sample:"6", tone:"bad" },
    ] },
  { id:"ea", seat:"Executive Assistant", short:"Assistant", who:"Assistant", reports:"founder",
    line:"Take the small work off the owner, then turn it into something that runs without either of you.",
    manages:"The owner's inbox, vendor admin, whatever is being handed over",
    not:"Banking, payments or spend decisions.",
    number:"Tasks taken off the owner each week", unit:"n", target:{ kind:"up", text:"Rising" },
    cadence:"Weekly", source:"Transfer log", measure:"Needs build", need:"A simple count of what moved each week",
    doc:"08 Executive Assistant",
    supporting:[
      { n:"Handed-over tasks with a written version", target:"100%", cadence:"Monthly", source:"Task notes", sample:"70%", tone:"warn" },
      { n:"Credential list current", target:"Yes", cadence:"Monthly", source:"The list", sample:"Yes", tone:"good" },
    ] },
];

// Modeled twelve weeks. Gaps are real states: the measure wasn't built yet, or
// the number is read monthly or per run.
const _ = null;
const SAMPLE_LOG = {
  founder:   [14,14,13,12,12,11,10,9,9,8,7,7],
  coo:       [3,5,6,8,9,11,12,14,15,17,18,20],
  content:   [_,_,_,_,_,_,_,_,1240,_,_,1610],
  dev:       [_,_,2,3,1,3,4,3,2,4,3,4],
  support:   [_,_,31,28,26,22,20,19,21,18,17,16],
  wholesale: [10,9,11,12,8,10,11,12,13,12,14,13],
  kitchen:   [_,0.52,_,0.55,_,0.54,_,0.58,_,0.61,_,0.60],
  warehouse: [_,_,_,_,_,99.1,_,_,_,99.6,_,_],
  ea:        [4,6,5,7,8,8,9,11,10,12,12,13],
};

// What moves off the owner, in order, and where each one is in the three-step
// transfer: watch him do it, do it with him watching, do it alone.
const TRANSFERS = [
  { f:"Reordering product",                         stage:"First", to:"COO", step:2 },
  { f:"Tracking every consumable",                  stage:"First", to:"COO", step:1 },
  { f:"Supplier coordination",                      stage:"First", to:"COO", step:1 },
  { f:"Invoicing and paying liabilities",           stage:"Next",  to:"COO", step:0 },
  { f:"Manufacturer runs and their problems",       stage:"Next",  to:"COO", step:0 },
  { f:"Lab testing and what comes back",            stage:"Next",  to:"COO", step:0 },
  { f:"Reorders and wholesale orders with the warehouse", stage:"Next", to:"COO", step:0 },
  { f:"Wholesale inquiries from the site",          stage:"Next",  to:"Wholesale", step:0 },
  { f:"Vendor communication",                       stage:"Held",  to:"Owner, for control", step:null },
];
const TRANSFER_STEPS = ["Not started","Watched him do it","Done with him watching","Done alone, written"];

const OWNER = {
  only:["Move money","Pay the card","Communicate with the payment processors and the broker","Communicate with outside advisors"],
  choice:["Packaging and brand design","Deal structure","Setting up anything new, before it runs"],
  quote:"Nothing really. Everything can be hired for.",
};
