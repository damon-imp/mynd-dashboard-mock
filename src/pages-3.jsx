// pages-3.jsx - second pass. Marketing performance, LTV and CAC ceiling,
// Retention, the customer-centric Operations reframe, Cost trend, Fulfillment.

/* ============================== MARKETING PERFORMANCE ============================== */
function MktPerf() {
  const m = D2.mkt;
  const [tab, setTab] = useState("channels");
  return (
    <div className="page-in">
      <PageHead title="Marketing performance" sub={m.note}
        right={<Seg options={[{v:"channels",l:"Channels"},{v:"trend",l:"Trend"},{v:"creative",l:"Creative"}]} value={tab} onChange={setTab}/>} />
      <G c={6} name="6" style={{ marginBottom:24 }}>{m.headline.map(k=><KPI key={k.label} {...k}/>)}</G>

      {tab==="channels" && (
        <>
          <Card pad={0} style={{ marginBottom:18 }}>
            <div className="scroll-x"><table className="tbl">
              <thead><tr><th>Channel</th><th>Status</th><th>Share</th>
                <th style={{textAlign:"right"}}>Spend</th><th style={{textAlign:"right"}}>Impressions</th>
                <th style={{textAlign:"right"}}>Clicks</th><th style={{textAlign:"right"}}>CTR</th>
                <th style={{textAlign:"right"}}>CPC</th><th style={{textAlign:"right"}}>CPM</th>
                <th style={{textAlign:"right"}}>Conversions</th><th style={{textAlign:"right"}}>CPA</th>
                <th style={{textAlign:"right"}}>ROAS</th></tr></thead>
              <tbody>{m.channels.map(c=>(
                <tr key={c.n}>
                  <td><div style={{ fontWeight:600 }}>{c.n}</div>
                    <div style={{ fontSize:10.5, color:"var(--ink-mute)", maxWidth:230 }}>{c.note}</div></td>
                  <td><Badge tone={c.status==="Live"?"good":c.status==="Paused"?"warn":"mute"}>{c.status}</Badge></td>
                  <td style={{ color:"var(--ink-soft)", fontSize:12 }}>{c.share}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.usd(c.spend)}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.n(c.imp)}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.n(c.clicks)}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.pct(c.ctr,2)}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.usd(c.cpc,2)}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.usd(c.cpm,2)}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.n(c.conv)}</td>
                  <td className="num" style={{textAlign:"right"}}>{c.cpa?fmt.usd(c.cpa):"-"}</td>
                  <td className="num" style={{textAlign:"right", fontWeight:600}}>{c.roas?c.roas.toFixed(2)+"x":"-"}</td>
                </tr>))}</tbody>
            </table></div>
          </Card>
          <Note tone="warn" icon="!">
            Every metric here comes out of the box from the order platform. It isn't readable today, which is
            the reason this dashboard exists. Once spend turns on, the number that governs is the CAC ceiling,
            not ROAS.
          </Note>
        </>
      )}

      {tab==="trend" && (
        <G c={2} name="2" gap={16}>
          <Card pad={20}>
            <SecLabel icon="mkt" right="six months">Spend against attributed revenue</SecLabel>
            <BarChart data={m.trend.map(t=>({m:t.m, v:t.spend, tone:t.spend?"violet":"mute"}))} h={150}/>
            <p style={{ fontSize:11.5, color:"var(--ink-mute)", marginTop:11 }}>
              Spend paused in August. The revenue line beside it's unreliable until attribution is rebuilt.
            </p>
          </Card>
          <Card pad={20}>
            <SecLabel icon="rev" right="six months">Attributed revenue</SecLabel>
            <Line data={m.trend.map(t=>({m:t.m, v:t.rev}))} tone="info" h={150} vf={fmt.k}/>
          </Card>
        </G>
      )}

      {tab==="creative" && (
        <Card pad={0}>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Creative</th><th style={{textAlign:"right"}}>Spend</th>
              <th style={{textAlign:"right"}}>Impressions</th><th style={{textAlign:"right"}}>CTR</th>
              <th style={{textAlign:"right"}}>CPA</th><th>Status</th></tr></thead>
            <tbody>{m.creative.map(c=>(
              <tr key={c.n}><td style={{fontWeight:600}}>{c.n}</td>
                <td className="num" style={{textAlign:"right"}}>{fmt.usd(c.spend)}</td>
                <td className="num" style={{textAlign:"right"}}>{fmt.n(c.imp)}</td>
                <td className="num" style={{textAlign:"right"}}>{fmt.pct(c.ctr,2)}</td>
                <td className="num" style={{textAlign:"right"}}>{c.cpa?fmt.usd(c.cpa):"-"}</td>
                <td><Badge tone={c.st==="paused"?"warn":"mute"}>{c.st==="paused"?"Paused":"Draft"}</Badge></td>
              </tr>))}</tbody>
          </table></div>
        </Card>
      )}
    </div>
  );
}

/* ============================== LTV AND CAC CEILING ============================== */
function LTV() {
  const l = D2.ltv;
  const [view, setView] = useState("category");
  const rows = view === "category" ? l.byCategory : view === "coupon" ? l.byCoupon : null;
  const cell = (v) => v == null ? <span style={{color:"var(--ink-mute)"}}>-</span> :
    <span className="num" style={{ color: v < 0 ? "var(--bad)" : "var(--ink)" }}>{fmt.usd(v,2)}</span>;

  return (
    <div className="page-in">
      <PageHead title="LTV and CAC ceiling" sub={l.note}
        right={<Seg options={[{v:"category",l:"By category"},{v:"coupon",l:"By coupon"},{v:"cohort",l:"By cohort"}]} value={view} onChange={setView}/>} />

      <G c={4} style={{ marginBottom:22 }}>
        <KPI label="CAC ceiling, blended" value="$79" tone="warn" sub="at 90 days"
             help="The most you can pay for a customer and still be profitable inside 90 days." />
        <KPI label="Best category" value="Bundle" tone="good" sub="$118 ceiling at 90 days" />
        <KPI label="Worst offer" value="BOGO" tone="bad" sub="loses money on first order" />
        <KPI label="Profitable on first order" value="4 of 5 offers" tone="good" sub="BOGO is the exception" />
      </G>

      {rows && (
        <>
          <Card pad={0} style={{ marginBottom:18 }}>
            <div className="scroll-x"><table className="tbl">
              <thead><tr><th>{view==="category"?"Category":"Offer"}</th>
                <th style={{textAlign:"right"}}>First order</th><th style={{textAlign:"right"}}>30 days</th>
                <th style={{textAlign:"right"}}>90 days</th><th style={{textAlign:"right"}}>180 days</th>
                <th style={{textAlign:"right"}}>CAC ceiling</th><th>Profitable from</th></tr></thead>
              <tbody>{rows.map(r=>(
                <tr key={r.n}>
                  <td style={{fontWeight:600}}>{r.n}</td>
                  <td style={{textAlign:"right"}}>{cell(r.first)}</td>
                  <td style={{textAlign:"right"}}>{cell(r.d30)}</td>
                  <td style={{textAlign:"right"}}>{cell(r.d90)}</td>
                  <td style={{textAlign:"right"}}>{cell(r.d180)}</td>
                  <td className="num" style={{textAlign:"right", fontWeight:700, color:T(r.tone)}}>
                    {r.ceiling?fmt.usd(r.ceiling):"-"}</td>
                  <td><Badge tone={r.tone}>{r.profitAt}</Badge></td>
                </tr>))}</tbody>
            </table></div>
          </Card>
          <Note tone="info" icon="i">
            Contribution per customer at each window. The ceiling is what you can pay to acquire one and still
            be in profit by ninety days. Anything above it buys revenue and loses money.
          </Note>
        </>
      )}

      {view==="cohort" && (
        <Card pad={0}>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Cohort</th><th style={{textAlign:"right"}}>Customers</th>
              <th style={{textAlign:"right"}}>First order</th><th style={{textAlign:"right"}}>30 days</th>
              <th style={{textAlign:"right"}}>90 days</th><th style={{textAlign:"right"}}>180 days</th></tr></thead>
            <tbody>{l.cohorts.map(c=>(
              <tr key={c.c}><td style={{fontWeight:600}}>{c.c}</td>
                <td className="num" style={{textAlign:"right"}}>{c.n}</td>
                <td style={{textAlign:"right"}}>{cell(c.first)}</td>
                <td style={{textAlign:"right"}}>{cell(c.d30)}</td>
                <td style={{textAlign:"right"}}>{cell(c.d90)}</td>
                <td style={{textAlign:"right"}}>{cell(c.d180)}</td>
              </tr>))}</tbody>
          </table></div>
        </Card>
      )}
    </div>
  );
}

/* ============================== RETENTION ============================== */
function Retention() {
  const r = D2.retention;
  return (
    <div className="page-in">
      <PageHead title="Retention" sub={r.note} />
      <G c={6} name="6" style={{ marginBottom:24 }}>{r.kpi.map(k=><KPI key={k.label} {...k}/>)}</G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.3fr 1fr", marginBottom:22 }}>
        <Card pad={20}>
          <SecLabel icon="rev" right="six months">Existing against new</SecLabel>
          <Line data={r.split.map(s=>({m:s.m, v:s.existing}))} tone="good" h={165} vf={v=>v+"%"} yMin={20} yMax={50}/>
          <p style={{ fontSize:11.5, color:"var(--ink-mute)", marginTop:11 }}>
            Share of revenue from customers who had already bought. Climbing slowly. Every point here is
            revenue you don't pay to acquire twice.
          </p>
        </Card>
        <Card pad={20}>
          <SecLabel icon="funnel">Where existing revenue comes from</SecLabel>
          <HBars data={r.sources} labelW={130} showPct />
        </Card>
      </G>
      <G c={2} name="2" gap={16}>
        <Card pad={20}>
          <SecLabel icon="mkt" right="six months">Email revenue</SecLabel>
          <BarChart data={r.emailTrend.map((e,i)=>({...e, tone:i===5?"accent":"info"}))} h={140}/>
        </Card>
        <Card pad={20}>
          <SecLabel icon="team" right="six months">Referral code usage</SecLabel>
          <BarChart data={r.referralTrend.map((e,i)=>({...e, tone:i===5?"accent":"violet"}))} h={140} vf={fmt.n}/>
        </Card>
      </G>
    </div>
  );
}

/* ============================== OPERATIONS, CUSTOMER CENTRIC ============================== */
function OpsHealth() {
  const o = D2.ops;
  return (
    <div className="page-in">
      <PageHead title="Customer experience" sub={o.note} />
      <G c={6} name="6" style={{ marginBottom:24 }}>{o.kpi.map(k=><KPI key={k.label} {...k}/>)}</G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.4fr" }}>
        <Card pad={20}>
          <SecLabel icon="truck" right="six months">Order to doorstep</SecLabel>
          <Line data={o.deliver} tone="good" h={165} vf={v=>v+"d"} target={3} tLabel="3 day target"/>
          <p style={{ fontSize:11.5, color:"var(--ink-mute)", marginTop:11 }}>
            Median, from payment to arrival. Down from 5.1 days in April.
          </p>
        </Card>
        <Card pad={0}>
          <div style={{ padding:"18px 18px 0" }}>
            <SecLabel icon="alert" right={"last " + PERIOD.label}>What cost you a customer</SecLabel>
          </div>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Friction</th><th style={{textAlign:"right"}}>Count</th>
              <th style={{textAlign:"right"}}>Revenue lost</th><th>What fixes it</th></tr></thead>
            <tbody>{o.friction.map(f=>(
              <tr key={f.n}>
                <td><span style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span className="dot" style={{ background:T(f.tone) }}/>{f.n}</span></td>
                <td className="num" style={{textAlign:"right", fontWeight:600}}>{f.count}</td>
                <td className="num" style={{textAlign:"right", color:f.cost?"var(--bad)":"var(--ink-mute)"}}>
                  {f.cost?fmt.usd(f.cost):"-"}</td>
                <td style={{ color:"var(--ink-soft)", fontSize:12 }}>{f.fix}</td>
              </tr>))}</tbody>
          </table></div>
        </Card>
      </G>
    </div>
  );
}

/* ============================== COST TREND ============================== */
function CostTrend() {
  const o = D2.ops;
  return (
    <div className="page-in">
      <PageHead title="Cost trend" sub="What it costs to make each product, and which way it's moving."
        meta="The only number worth keeping from the old products view." />
      <G c={4} style={{ marginBottom:22 }}>
        <KPI label="Blended cost per unit" value="$6.84" tone="good" delta={-5.1} sub="down from $7.21 in April" />
        <KPI label="Products measured" value="6 of 8" tone="warn" sub="two on placeholder" />
        <KPI label="Cheapest to make" value="$6.26" tone="good" sub="Sea Salt Chocolate" />
        <KPI label="Most expensive" value="$7.25" tone="warn" sub="Matcha Chocolate" />
      </G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.3fr" }}>
        <Card pad={20}>
          <SecLabel icon="chart" right="six months">Blended cost per unit</SecLabel>
          <Line data={o.costSeries} tone="good" h={170} vf={v=>"$"+v.toFixed(2)}/>
        </Card>
        <Card pad={0}>
          <div style={{ padding:"18px 18px 0" }}><SecLabel icon="factory">By product</SecLabel></div>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Product</th><th style={{textAlign:"right"}}>Current</th>
              <th style={{textAlign:"right"}}>Previous</th><th style={{textAlign:"right"}}>Change</th><th>Basis</th></tr></thead>
            <tbody>{o.costTrend.map(c=>{
              const d = c.cur - c.prev;
              return (<tr key={c.n}>
                <td style={{fontWeight:600}}>{c.n}</td>
                <td className="num" style={{textAlign:"right", color:c.basis==="placeholder"?"var(--bad)":"var(--ink)"}}>{fmt.usd(c.cur,2)}</td>
                <td className="num" style={{textAlign:"right", color:"var(--ink-mute)"}}>{fmt.usd(c.prev,2)}</td>
                <td className="num" style={{textAlign:"right", fontWeight:600,
                  color: d===0?"var(--ink-mute)":d<0?"var(--good)":"var(--bad)"}}>
                  {d===0?"-":(d<0?"\u2193":"\u2191")+fmt.usd(Math.abs(d),2)}</td>
                <td>{c.basis==="measured"?<Badge tone="good">Measured</Badge>:<Badge tone="bad">Placeholder</Badge>}</td>
              </tr>);})}</tbody>
          </table></div>
        </Card>
      </G>
    </div>
  );
}

/* ============================== FULFILLMENT ============================== */
function Fulfillment() {
  const f = D2.fulfillment;
  return (
    <div className="page-in">
      <PageHead title="Fulfillment" sub="What ships, and how much of it your systems can see."
        meta="Moved here from Revenue. It is an operations problem, not a revenue one." />
      <G c={4} style={{ marginBottom:22 }}>
        <KPI label="Total shipments" value={fmt.n(f.shipments.total)} tone="ink" sub="July" />
        <KPI label="Touched the platform" value={fmt.n(f.shipments.onPlatform)} tone="good" sub="64.1%" />
        <KPI label="Never touched it" value={fmt.n(f.shipments.invisible)} tone="bad" sub={fmt.pct(f.shipments.pct)} />
        <KPI label="Shipped same day" value="78%" tone="warn" sub="target 90%" />
      </G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.3fr" }}>
        <Card pad={20}>
          <SecLabel icon="box">Visible against invisible</SecLabel>
          <div style={{ display:"flex", justifyContent:"center", margin:"14px 0 18px" }}>
            <Donut v={f.shipments.invisible} max={f.shipments.total} size={150} tone="bad"
              label={fmt.pct(f.shipments.pct)} sub="invisible"/>
          </div>
        </Card>
        <Card pad={20}>
          <SecLabel icon="truck" right="July">What the invisible third is</SecLabel>
          <HBars data={f.breakdown} vf={fmt.n} labelW={140} showPct />
          <div style={{ marginTop:18, paddingTop:15, borderTop:"1px solid var(--rule-soft)" }}>
            <p style={{ fontSize:12, color:"var(--ink-soft)", lineHeight:1.55 }}>
              Every one of these consumes stock and costs money. None appear as a sale, so shipments and
              revenue never tie and inventory counts drift. The fix is a cost line and a flag at the point
              they ship.
            </p>
          </div>
        </Card>
      </G>
    </div>
  );
}

/* ============================== PHASE 2 PLACEHOLDER ============================== */
function Phase2({ title, why, when }) {
  return (
    <div className="page-in">
      <PageHead title={title} sub={why} />
      <Empty title="Deferred to phase two" note={when} tag="Phase 2" />
    </div>
  );
}
