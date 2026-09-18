// period.jsx, the period selector engine.
// The mock stores flow figures at 30 days. This rescales them to the selected
// window. Balances, rates, targets and monthly trends don't move.
// In the live build this file goes away: the reporting layer returns each
// window directly from the data contract.

const PERIOD_BASE = JSON.parse(JSON.stringify({ D, D2, D3 }));
const PERIOD_TODAY = 17;                     // Sep 17, matches D3.live.day
const PERIOD_DAYS = { "1 day":1, "7 days":7, "30 days":30, "90 days":90, "MTD":PERIOD_TODAY };
const PERIOD = { label:"30 days", short:"30d", days:30, custom:false };

const pRound = (v) => Math.round(v);
const pMoney = (s, f) => typeof s !== "string" ? s :
  s.replace(/([+-]?)\$([\d,]+(?:\.\d+)?)/, (m, sg, n) =>
    sg + "$" + pRound(parseFloat(n.replace(/,/g, "")) * f).toLocaleString("en-US"));
const pCount = (s, f) => typeof s !== "string" ? s :
  s.replace(/^([\d,]+)$/, (m, n) => pRound(parseFloat(n.replace(/,/g, "")) * f).toLocaleString("en-US"));
const p30 = (s, short) => typeof s !== "string" ? s : s.replace(/30d\b/g, short).replace(/30 day/g, short === "1d" ? "1 day" : short.replace("d", " day"));

function periodShort(label, days) {
  return { "1 day":"1d", "7 days":"7d", "30 days":"30d", "90 days":"90d", "MTD":"MTD" }[label] || days + "d";
}

function applyPeriod(label, customDays) {
  const days = label === "Custom" ? Math.max(1, customDays || 30) : PERIOD_DAYS[label];
  const short = periodShort(label, days);
  const f = days / 30;
  Object.assign(PERIOD, { label: label === "Custom" ? days + (days === 1 ? " day" : " days") : label, short, days, custom: label === "Custom" });

  // restore the 30 day base every time, then scale
  const base = JSON.parse(JSON.stringify(PERIOD_BASE));
  Object.keys(base.D).forEach(k => { D[k] = base.D[k]; });
  Object.keys(base.D2).forEach(k => { D2[k] = base.D2[k]; });
  Object.keys(base.D3).forEach(k => { D3[k] = base.D3[k]; });
  if (days === 30 && label !== "Custom") return;

  // Boardroom tiles
  D.unit.forEach(u => {
    if (u.k === "rev") { u.value = pMoney(u.value, f); u.label = "Revenue · " + short; }
    if (u.k === "cm")  { u.value = pMoney(u.value, f); }
    if (u.k === "burn"){ u.value = pMoney(u.value, f); u.label = "Operating profit · " + short;
                         u.sub = "30 day " + PERIOD_BASE.D.unit.find(x=>x.k==="burn").value; }
  });
  D.funnel.forEach(r => { r.v = pRound(r.v * f); if (r.note === "30 days") r.note = PERIOD.label; });

  // Money. Up to 30 days, revenue, cost of delivery and marketing come from the daily
  // contribution table so the P&L, the tiles and the daily rows agree to the dollar.
  D.pl.forEach(r => { r.v = pRound(r.v * f); });
  if (days <= D.cmDaily.length) {
    const rows = label === "MTD" ? D.cmDaily.filter(r => r.m === 9) : D.cmDaily.slice(-days);
    const rev = rows.reduce((a, r) => a + r.rev, 0), cod = rows.reduce((a, r) => a + r.cod, 0), mkt = rows.reduce((a, r) => a + r.mkt, 0);
    const opex = pRound(PERIOD_BASE.D.pl.find(r => r.line === "OPEX").v * rows.length / 30);
    const cm = rev - cod - mkt, op = cm - opex;
    const set = { "Revenue":rev, "Cost of delivery":cod, "Marketing":mkt, "Contribution margin":cm, "OPEX":opex, "Operating profit":op };
    D.pl.forEach(r => { r.v = set[r.line]; r.pct = rev ? +(r.v / rev * 100).toFixed(1) : 0; if (r.line === "Revenue") r.pct = 100; });
    D.unit.forEach(u => {
      if (u.k === "rev") u.value = fmt.usd(rev);
      if (u.k === "cm")  { u.value = fmt.usd(cm); u.sub = fmt.pct(cm / rev * 100) + " of revenue"; }
      if (u.k === "burn") u.value = (op >= 0 ? "+" : "-") + fmt.usd(Math.abs(op));
    });
  }
  D.rails.forEach(r => { r.g30 = r.gross; ["gross","fees","net"].forEach(k => { r[k] = pRound(r[k] * f); }); });

  // Revenue
  D.channels.forEach(r => { r.v = pRound(r.v * f); });
  D.products.forEach(r => { r.units = pRound(r.units * f); r.rev = pRound(r.rev * f); });

  // Retention
  D2.retention.kpi.forEach(k => {
    if (k.label === "Email revenue") k.value = pMoney(k.value, f);
    if (k.label === "Referral code usage") k.value = pCount(k.value, f);
    k.sub = p30(k.sub, short);
  });
  D2.retention.sources.forEach(r => { r.v = pRound(r.v * f); });

  // Customer experience friction
  D2.ops.friction.forEach(r => { r.count = pRound(r.count * f); r.cost = pRound(r.cost * f); });

  // Marketing labels
  D2.mkt.headline.forEach(k => { k.label = p30(k.label, short); });
  D.ads.kpi.forEach(k => { k.label = p30(k.label, short); });

  // Daily tracker: keep the last N days on record, recompute the footer
  const rows = D3.daily.rows;
  const keep = label === "MTD" ? rows : rows.slice(-Math.min(days, rows.length));
  D3.daily.rows = keep;
  const sum = (k) => keep.reduce((s, r) => s + (r[k] || 0), 0);
  const t = {};
  ["spend","ord","nc","nNew","$new","nRet","$ret","tot","rev","gm","profit"].forEach(k => { t[k] = sum(k); });
  t.amer = t.nc / t.spend; t.mer = t.rev / t.spend;
  t.ncrev = t.$new / t.rev * 100; t.naov = t.$new / t.nNew; t.ncac = t.spend / t.nNew;
  t.roas = keep.reduce((s, r) => s + r.roas * r.spend, 0) / t.spend;
  const cf = t.spend / PERIOD_BASE.D3.daily.totals.spend;
  D3.daily.totals = t;
  D3.daily.channels.forEach(c => {
    if (c.spend != null) { c.spend = pRound(c.spend * cf); c.fcst = pRound(c.fcst * cf); }
    c.rev = pRound(c.rev * cf);
  });
}

function PeriodNote() {
  const rows = D3.daily.rows.length;
  const txt = PERIOD.days === 30 && !PERIOD.custom
    ? null
    : `Showing ${PERIOD.label}. Flow figures follow the period. Balances, rates and monthly trends don't.`
      + (PERIOD.days > rows ? ` The daily tracker has ${rows} days on record.` : "");
  return txt ? <p style={{ fontSize:11, color:"var(--ink-mute)", margin:"-8px 0 16px" }}>{txt}</p> : null;
}

function CustomRange({ from, to, onChange }) {
  const box = { background:"var(--surface-3)", border:"1px solid var(--rule)", borderRadius:"var(--r-sm)",
    color:"var(--ink)", padding:"5px 8px", fontSize:11.5, colorScheme:"inherit" };
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:7, fontSize:11.5, color:"var(--ink-mute)" }}>
      <input type="date" value={from} max={to} onChange={e=>onChange(e.target.value, to)} style={box} aria-label="From" />
      to
      <input type="date" value={to} min={from} max="2026-09-17" onChange={e=>onChange(from, e.target.value)} style={box} aria-label="To" />
    </span>
  );
}

function rangeDays(from, to) {
  const a = new Date(from + "T00:00:00"), b = new Date(to + "T00:00:00");
  return Math.max(1, Math.round((b - a) / 864e5) + 1);
}
