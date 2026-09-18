// pages-5.jsx, sub-tab views. Boardroom: Financials, Insights, System Health.
// Cash: Forecast, Transactions. Revenue: By Channel. Inventory: Reorders, Movements.

const SYNC_T = { live:"good", partial:"warn", blocked:"bad", waiting:"info" };
const SYNC_L = { live:"Connected", partial:"Partial", blocked:"Blocked", waiting:"Waiting" };

/* ============================== BOARDROOM · FINANCIALS ============================== */
function BoardFinancials({ go }) {
  const pl = Object.fromEntries(D.pl.map(r => [r.line, r]));
  const cm = D.unit.find(u => u.k === "cm");
  return (
    <div className="page-in">
      <PageHead title="Financials" sub="The money view on one screen. Profit and loss, margin, cash and what you owe." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label={D.unit[0].label} value={fmt.usd(pl["Revenue"].v)} tone="ink" onClick={()=>go("pl")} />
        <KPI label="Contribution margin" value={cm.value} tone="good" sub={cm.sub} onClick={()=>go("pl")} />
        <KPI label="Operating profit" value={fmt.usd(pl["Operating profit"].v)} tone="good" sub="before debt service and distributions" onClick={()=>go("pl")} />
        <KPI label="Available cash" value="$40,347" tone="warn" sub="floor $22,500" onClick={()=>go("cash")} />
      </G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.2fr", marginBottom:24 }}>
        <Card pad={20}>
          <SecLabel icon="money" right={PERIOD.label}>Profit and loss</SecLabel>
          {D.pl.map(r => (
            <div key={r.line} style={{ marginBottom:13 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4, gap:10 }}>
                <span style={{ fontSize:12.5, fontWeight:r.sub?600:400 }}>{r.line}</span>
                <span className="mono" style={{ fontSize:13, fontWeight:600, color:T(r.tone) }}>
                  {fmt.usd(r.v)} <span style={{ color:"var(--ink-mute)", fontWeight:400 }}>· {fmt.pct(r.pct)}</span></span>
              </div>
              <Bar pct={r.pct} tone={r.tone} />
              {r.bench && <p style={{ fontSize:10.5, color:"var(--ink-mute)", marginTop:4 }}>Benchmark {r.bench}</p>}
            </div>))}
        </Card>
        <Card pad={20}>
          <DistributionsTrend h={130} />
          <div style={{ height:18 }} />
          <SecLabel icon="rev" right="nine months">Revenue by month</SecLabel>
          <BarChart data={D.revMonthly.map((r,i)=>({ ...r, tone:i===D.revMonthly.length-1?"accent":"info" }))} h={150} />
          <div style={{ height:18 }} />
          <SecLabel icon="money" right="seven months">Cash on hand</SecLabel>
          <Line data={D.cashTrail} h={100} tone="warn" vf={fmt.k} target={22500} tLabel="Floor" />
        </Card>
      </G>
      <G c={3} name="3" gap={16}>
        {D.debt.map(d => (
          <Card key={d.n} pad={18} hover onClick={()=>go("debt")} style={{ cursor:"pointer" }}>
            <div style={{ fontSize:12, color:"var(--ink-mute)", marginBottom:6 }}>{d.n}</div>
            <div className="mono" style={{ fontSize:19, fontWeight:600, color:T(d.tone) }}>{fmt.usd(d.v)}</div>
            <p style={{ fontSize:11, color:"var(--ink-mute)", marginTop:5 }}>{d.note}</p>
          </Card>))}
      </G>
    </div>
  );
}

/* ============================== BOARDROOM · INSIGHTS ============================== */
function BoardInsights({ go }) {
  return (
    <div className="page-in">
      <PageHead title="Insights" sub="What the numbers are saying this week, and where to look next."
        meta="Each card links to the page that proves it." />
      <G c={2} name="2" gap={16}>
        {D4.insights.map(n => (
          <Card key={n.title} pad={22} style={{ borderLeft:`3px solid ${T(n.tone)}`, display:"flex", flexDirection:"column", gap:10 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12 }}>
              <h3 style={{ fontSize:15, lineHeight:1.35 }}>{n.title}</h3>
              <Badge tone={n.tone}>{n.tone==="good"?"Working":n.tone==="bad"?"Act now":"Watch"}</Badge>
            </div>
            <div>
              <div className="mono" style={{ fontSize:22, fontWeight:600, color:T(n.tone) }}>{n.num}</div>
              <div style={{ fontSize:11, color:"var(--ink-mute)" }}>{n.sub}</div>
            </div>
            <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.6, flex:1 }}>{n.why}</p>
            <button onClick={()=>go(n.go)} style={{ alignSelf:"flex-start", display:"flex", alignItems:"center", gap:6,
              border:"1px solid var(--rule)", background:"var(--surface-3)", color:"var(--ink-soft)",
              borderRadius:"var(--r-sm)", padding:"6px 11px", fontSize:11.5, fontWeight:600, cursor:"pointer" }}>
              Open {n.cta} <Ico n="chev" s={10} /></button>
          </Card>))}
      </G>
    </div>
  );
}

/* ============================== BOARDROOM · SYSTEM HEALTH ============================== */
function BoardHealth({ go }) {
  const count = (s) => D4.sync.filter(x => x.s === s).length;
  return (
    <div className="page-in">
      <PageHead title="System health" sub="Every source that feeds this dashboard, when it last synced, and what's stuck." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Connected" value={String(count("live"))} tone="good" sub={`of ${D4.sync.length} sources`} />
        <KPI label="Partial" value={String(count("partial"))} tone="warn" sub="syncing, not complete" />
        <KPI label="Blocked" value={String(count("blocked"))} tone="bad" sub="access outstanding" />
        <KPI label="Waiting" value={String(count("waiting"))} tone="info" sub="built, no data yet" onClick={()=>go("data")} />
      </G>
      <Card pad={0} style={{ marginBottom:18 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Source</th><th>Status</th><th>Last sync</th><th>Cadence</th></tr></thead>
          <tbody>{D4.sync.map(s => (
            <tr key={s.n}>
              <td style={{ fontWeight:600 }}>{s.n}</td>
              <td><Badge tone={SYNC_T[s.s]}>{SYNC_L[s.s]}</Badge></td>
              <td className="num" style={{ color:s.last==="Never"?"var(--bad)":"var(--ink-soft)" }}>{s.last}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:12 }}>{s.every}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="warn" icon="!">
        Three sources are blocked on access. Until they connect, channel revenue and lifetime value stay off the
        dashboard rather than showing a number that looks right and isn't. Data Health grades every metric area.
      </Note>
    </div>
  );
}

/* ============================== CASH · FORECAST ============================== */
function CashForecast() {
  const f = D4.forecast;
  let bal = f.open;
  const rows = f.weeks.map(w => {
    const out = w.fixed + w.variable + w.debt;
    bal = bal + w.inn - out;
    return { ...w, out, end:bal, above:bal - f.floor };
  });
  const low = rows.reduce((a,b) => b.end < a.end ? b : a, rows[0]);
  const end = rows[rows.length-1];
  const tIn = rows.reduce((s,r)=>s+r.inn,0), tOut = rows.reduce((s,r)=>s+r.out,0);
  return (
    <div className="page-in">
      <PageHead title="Cash forecast" sub="Thirteen weeks forward from today's balance, against the operating floor."
        meta="Updated weekly. Inflows net of processing fees and reserve." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Opening cash" value={fmt.usd(f.open)} tone="ink" sub="today" />
        <KPI label="Lowest week" value={fmt.usd(low.end)} tone={low.above<0?"bad":low.above<5000?"warn":"good"} sub={`week of ${low.w}`} />
        <KPI label="Ending cash" value={fmt.usd(end.end)} tone="good" sub={`week of ${end.w}`} />
        <KPI label="Net over 13 weeks" value={(tIn-tOut>=0?"+":"-")+fmt.usd(Math.abs(tIn-tOut))} tone={tIn-tOut>=0?"good":"bad"} sub={`${fmt.k(tIn)} in · ${fmt.k(tOut)} out`} />
      </G>
      <Card pad={20} style={{ marginBottom:20 }}>
        <SecLabel icon="money" right="ending balance by week">Where cash lands</SecLabel>
        <Line data={rows.map(r=>({ m:r.w, v:r.end }))} h={190} tone="accent" vf={fmt.k} target={f.floor} tLabel="Floor $22.5K" />
      </Card>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Week of</th><th style={{textAlign:"right"}}>In</th><th style={{textAlign:"right"}}>Fixed</th>
            <th style={{textAlign:"right"}}>Variable</th><th style={{textAlign:"right"}}>Debt</th>
            <th style={{textAlign:"right"}}>Ending</th><th style={{textAlign:"right"}}>Above floor</th><th>What moves it</th></tr></thead>
          <tbody>{rows.map(r => (
            <tr key={r.w}>
              <td style={{ fontWeight:600 }}>{r.w}</td>
              <td className="num" style={{ textAlign:"right", color:"var(--good)" }}>{fmt.usd(r.inn)}</td>
              <td className="num" style={{ textAlign:"right" }}>-{fmt.usd(r.fixed)}</td>
              <td className="num" style={{ textAlign:"right" }}>-{fmt.usd(r.variable)}</td>
              <td className="num" style={{ textAlign:"right", color:r.debt?"var(--bad)":"var(--ink-mute)" }}>{r.debt?"-"+fmt.usd(r.debt):"-"}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600 }}>{fmt.usd(r.end)}</td>
              <td className="num" style={{ textAlign:"right", color:r.above<0?"var(--bad)":r.above<5000?"var(--warn)":"var(--good)" }}>{fmt.usd(r.above)}</td>
              <td style={{ fontSize:11.5, color:"var(--ink-mute)" }}>{r.note || ""}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
    </div>
  );
}

/* ============================== CASH · TRANSACTIONS ============================== */
function CashTransactions() {
  const [f, setF] = useState("All");
  const ST = { matched:["good","Matched"], review:["warn","Review"], open:["bad","Uncategorized"] };
  const rows = D4.transactions.filter(t => f==="All" || (f==="In" ? t.amt>0 : f==="Out" ? t.amt<0 : t.st!=="matched"));
  const tin = D4.transactions.filter(t=>t.amt>0).reduce((s,t)=>s+t.amt,0);
  const tout = D4.transactions.filter(t=>t.amt<0).reduce((s,t)=>s+t.amt,0);
  const flag = D4.transactions.filter(t=>t.st!=="matched").length;
  return (
    <div className="page-in">
      <PageHead title="Transactions" sub="Every dollar in and out across the banks and the card, coded as it lands."
        right={<Seg options={["All","In","Out","Needs a look"]} value={f} onChange={setF} />} />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Money in" value={fmt.usd(tin)} tone="good" sub="last 7 days" />
        <KPI label="Money out" value={fmt.usd(Math.abs(tout))} tone="bad" sub="last 7 days" />
        <KPI label="Net" value={(tin+tout>=0?"+":"-")+fmt.usd(Math.abs(tin+tout))} tone={tin+tout>=0?"good":"bad"} />
        <KPI label="Needs a look" value={String(flag)} tone={flag?"warn":"good"} sub="review or uncategorized" />
      </G>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Date</th><th>Description</th><th>Account</th><th>Category</th>
            <th style={{textAlign:"right"}}>Amount</th><th>Status</th></tr></thead>
          <tbody>{rows.map((t,i) => (
            <tr key={i}>
              <td className="num" style={{ color:"var(--ink-mute)" }}>{t.d}</td>
              <td style={{ fontWeight:500 }}>{t.desc}</td>
              <td style={{ fontSize:12, color:"var(--ink-soft)" }}>{t.acct}</td>
              <td style={{ fontSize:12, color:t.cat==="Uncategorized"?"var(--bad)":"var(--ink-soft)" }}>{t.cat}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600, color:t.amt>0?"var(--good)":"var(--ink)" }}>
                {t.amt>0?"+":"-"}{fmt.usd(Math.abs(t.amt))}</td>
              <td><Badge tone={ST[t.st][0]}>{ST[t.st][1]}</Badge></td>
            </tr>))}</tbody>
        </table></div>
      </Card>
    </div>
  );
}

/* ============================== REVENUE · BY CHANNEL ============================== */
function RevenueChannels() {
  const TR = { good:["good","Trusted"], low:["warn","Directional"], mock:["info","Shape only"], none:["bad","Not usable"] };
  const total = D.channels.reduce((s,c)=>s+c.v,0);
  const trusted = D.channels.filter(c=>c.trust==="good").reduce((s,c)=>s+c.v,0);
  return (
    <div className="page-in">
      <PageHead title="Revenue by channel" sub="Where each dollar came from, and how far you can trust the split."
        meta={`${PERIOD.label}. Attribution is being rebuilt, so every row carries its trust level.`} />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Total" value={fmt.usd(total)} tone="ink" sub={PERIOD.label} />
        <KPI label="Trusted" value={fmt.pct(trusted/total*100)} tone="good" sub={fmt.usd(trusted)} />
        <KPI label="Unattributed" value={fmt.pct(D.channels[5].v/total*100)} tone="bad" sub={fmt.usd(D.channels[5].v)} />
        <KPI label="Channels" value={String(D.channels.length)} tone="ink" sub="including unattributed" />
      </G>
      <Card pad={0} style={{ marginBottom:18 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Channel</th><th style={{textAlign:"right"}}>Revenue</th><th>Share</th><th>Trust</th></tr></thead>
          <tbody>{D.channels.map(c => (
            <tr key={c.m}>
              <td style={{ fontWeight:600 }}>{c.m}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600, color:c.tone?T(c.tone):"var(--ink)" }}>{fmt.usd(c.v)}</td>
              <td style={{ width:"34%" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <Bar pct={c.v/total*100} tone={TR[c.trust][0]} />
                  <span className="mono" style={{ fontSize:11, color:"var(--ink-mute)", minWidth:42, textAlign:"right" }}>{fmt.pct(c.v/total*100)}</span>
                </div></td>
              <td><Badge tone={TR[c.trust][0]}>{TR[c.trust][1]}</Badge></td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="warn" icon="!">
        Orders without an affiliate link default to an internal test account, so the unattributed row is real
        revenue with no honest channel. It shrinks as the attribution rebuild lands.
      </Note>
    </div>
  );
}

/* ============================== INVENTORY · REORDERS ============================== */
function InvReorders() {
  const free = 17847;
  const ST = { late:["bad","Order now"], soon:["warn","This week"], blocked:["mute","Decision"], ok:["good","No action"] };
  let run = free;
  const rows = D4.reorders.map(r => {
    const inv = D.inventory.find(x => x.sku === r.sku);
    const cost = inv && inv.po ? inv.po : 0;
    r = { ...r, qty: cost ? Math.round(cost / r.unit) : r.qty };
    const orderBy = r.cover - r.lead;
    run -= cost;
    return { ...r, cost, orderBy, left:run };
  });
  const need = rows.reduce((s,r)=>s+r.cost,0);
  return (
    <div className="page-in">
      <PageHead title="Reorders" sub="What to order, when it has to go in, and whether the cash covers it."
        meta="Costs match the reorder figures on the Inventory tab. Quantity is cost over unit cost." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="To order now" value={String(rows.filter(r=>r.st==="late").length)} tone="bad" sub="cover under lead time" />
        <KPI label="Reorder cost" value={fmt.usd(need)} tone="warn" sub="everything due" />
        <KPI label="Free cash" value={fmt.usd(free)} tone="good" sub="above the floor" />
        <KPI label="Gap" value={fmt.usd(Math.max(0, need-free))} tone={need>free?"bad":"good"} sub="sequence or use credit" />
      </G>
      <Card pad={0} style={{ marginBottom:18 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Product</th><th>Supplier</th><th style={{textAlign:"right"}}>Cover</th><th style={{textAlign:"right"}}>Lead</th>
            <th>Order by</th><th style={{textAlign:"right"}}>Qty</th><th style={{textAlign:"right"}}>Cost</th>
            <th style={{textAlign:"right"}}>Cash after</th><th>Status</th></tr></thead>
          <tbody>{rows.map(r => (
            <tr key={r.sku}>
              <td style={{ fontWeight:600 }}>{r.sku}{r.note && <div style={{ fontSize:10.5, color:"var(--ink-mute)", fontWeight:400 }}>{r.note}</div>}</td>
              <td style={{ fontSize:12, color:"var(--ink-soft)" }}>{r.supplier}</td>
              <td className="num" style={{ textAlign:"right" }}>{r.cover}d</td>
              <td className="num" style={{ textAlign:"right" }}>{r.lead}d</td>
              <td className="num" style={{ color:r.orderBy<0?"var(--bad)":r.orderBy<7?"var(--warn)":"var(--ink-soft)" }}>
                {r.st==="blocked"?"-":r.orderBy<0?`${Math.abs(r.orderBy)}d overdue`:`in ${r.orderBy}d`}</td>
              <td className="num" style={{ textAlign:"right" }}>{r.qty?fmt.n(r.qty):"-"}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600 }}>{r.cost?fmt.usd(r.cost):"-"}</td>
              <td className="num" style={{ textAlign:"right", color:r.left<0?"var(--bad)":"var(--good)" }}>{r.cost?fmt.usd(r.left):"-"}</td>
              <td><Badge tone={ST[r.st][0]}>{ST[r.st][1]}</Badge></td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="warn" icon="!">
        Cash after runs down the list in order of urgency. Where it goes negative, the order needs splitting,
        payment terms, or credit before it can go in.
      </Note>
    </div>
  );
}

/* ============================== INVENTORY · MOVEMENTS ============================== */
function InvMovements() {
  const [f, setF] = useState("All");
  const rows = D4.movements.filter(m => f==="All" || (f==="Unlogged" ? !m.logged : m.type===f));
  const inn = D4.movements.filter(m=>m.qty>0).reduce((s,m)=>s+m.qty,0);
  const out = D4.movements.filter(m=>m.qty<0).reduce((s,m)=>s+m.qty,0);
  const unl = D4.movements.filter(m=>!m.logged);
  const TY = { Received:"good", Shipped:"info", Wholesale:"violet", Sample:"warn", Reship:"warn", Comp:"bad", Adjustment:"mute" };
  return (
    <div className="page-in">
      <PageHead title="Stock movements" sub="Every unit in and out, and whether the order platform ever saw it."
        right={<Seg options={["All","Received","Shipped","Unlogged"]} value={f} onChange={setF} />} />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Units in" value={fmt.n(inn)} tone="good" sub="last 7 days" />
        <KPI label="Units out" value={fmt.n(Math.abs(out))} tone="ink" sub="last 7 days" />
        <KPI label="Off platform" value={String(unl.length)} tone="bad" sub={`${fmt.n(Math.abs(unl.reduce((s,m)=>s+m.qty,0)))} units, no sale recorded`} />
        <KPI label="Adjustments" value={String(D4.movements.filter(m=>m.type==="Adjustment").length)} tone="warn" sub="count variance" />
      </G>
      <Card pad={0} style={{ marginBottom:18 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Date</th><th>Product</th><th>Type</th><th style={{textAlign:"right"}}>Units</th><th>Location</th><th>On platform</th></tr></thead>
          <tbody>{rows.map((m,i) => (
            <tr key={i}>
              <td className="num" style={{ color:"var(--ink-mute)" }}>{m.d}</td>
              <td style={{ fontWeight:500 }}>{m.sku}{m.note && <span style={{ fontSize:10.5, color:"var(--ink-mute)" }}> · {m.note}</span>}</td>
              <td><Badge tone={TY[m.type]}>{m.type}</Badge></td>
              <td className="num" style={{ textAlign:"right", fontWeight:600, color:m.qty>0?"var(--good)":"var(--ink)" }}>{m.qty>0?"+":""}{fmt.n(m.qty)}</td>
              <td style={{ fontSize:12, color:"var(--ink-soft)" }}>{m.where}</td>
              <td>{m.logged ? <Badge tone="good">Logged</Badge> : <Badge tone="bad">Invisible</Badge>}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="info" icon="i">
        Wholesale, samples, reships and comps leave the shelf without touching the order platform. That's why
        shipments never tie to revenue and counts drift. Each one gets logged here as it moves.
      </Note>
    </div>
  );
}

const SUBVIEWS = {
  boardroom: [null, BoardFinancials, BoardInsights, BoardHealth],
  cash:      [null, CashForecast, CashTransactions],
  revenue:   [null, RevenueChannels],
  inventory: [null, InvReorders, InvMovements],
};
