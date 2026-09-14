// pages-2.jsx — Revenue, Products, Subscriptions, Wholesale, Attribution, Ads,
// Social, Inventory, Production, Suppliers, Agents, Vault, Drive, Data Health

/* ============================== REVENUE ============================== */
function Revenue() {
  return (
    <div className="page-in">
      <PageHead title="Revenue" sub="Where the money comes from, and how much of it you can actually attribute." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Revenue · 30d" value="$46,814" tone="ink" delta={-4.1} spark={D.revMonthly.map(r=>r.v)} />
        <KPI label="Orders" value="223" tone="ink" sub="on platform" delta={1.8} />
        <KPI label="Average order" value="$189" tone="ink" delta={2.1} help="Revenue over orders that touched the platform." />
        <KPI label="Unattributed" value="26.2%" tone="bad" sub="$12,282 of revenue" help="Orders without an affiliate land on an internal test account." />
      </G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.4fr 1fr", marginBottom:24 }}>
        <Card pad={20}>
          <SecLabel icon="rev" right="nine months">Monthly revenue</SecLabel>
          <BarChart data={D.revMonthly.map((r,i)=>({...r,tone:i===8?"accent":"info"}))} h={185}/>
        </Card>
        <Card pad={20}>
          <SecLabel icon="funnel" help="Three of these can't be trusted until attribution is rebuilt.">By channel</SecLabel>
          <HBars data={D.channels} labelW={120} showPct />
          <div style={{ marginTop:14, paddingTop:12, borderTop:"1px solid var(--rule-soft)",
                        display:"flex", gap:12, flexWrap:"wrap" }}>
            {[["good","Trusted"],["mock","Shape only"],["none","Not usable"]].map(([k,l])=>(
              <span key={k} style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:10.5, color:"var(--ink-mute)" }}>
                <span className="dot" style={{ background:T(k==="good"?"good":k==="mock"?"info":"bad") }} />{l}
              </span>))}
          </div>
        </Card>
      </G>
      <SecLabel icon="box" right="July">Shipments against orders</SecLabel>
      <G c={4} gap={13}>
        <KPI label="Total shipments" value="348" tone="ink" />
        <KPI label="Touched the platform" value="223" tone="good" sub="64.1%" />
        <KPI label="Never touched it" value="125" tone="bad" sub="35.9%" help="Wholesale, samples, reships and comps." />
        <KPI label="Revenue per shipment" value="$121" tone="warn" sub="was $195 in November" />
      </G>
    </div>
  );
}

/* ============================== PRODUCTS ============================== */
function Products() {
  const [cat, setCat] = useState("All");
  const cats = ["All","Chocolate","Gummies","Capsules"];
  const rows = D.products.filter(p=>cat==="All"||p.cat===cat);
  return (
    <div className="page-in">
      <PageHead title="Products and margin" sub="What each product earns, and what it actually costs to make."
        right={<Seg options={cats} value={cat} onChange={setCat} />} />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Products live" value="8 of 10" tone="ink" sub="two never produced" />
        <KPI label="Real cost known" value="6 of 10" tone="warn" sub="rest on placeholder" />
        <KPI label="Blended margin" value="~90%" tone="good" sub="on measured products" />
        <KPI label="Top product share" value="20.9%" tone="ink" sub="Dubai Chocolate" />
      </G>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Product</th><th>Category</th><th style={{textAlign:"right"}}>Price</th>
            <th style={{textAlign:"right"}}>Cost</th><th>Basis</th><th style={{textAlign:"right"}}>Margin</th>
            <th style={{textAlign:"right"}}>Units</th><th style={{textAlign:"right"}}>Revenue</th><th>Trend</th></tr></thead>
          <tbody>{rows.map(p=>(
            <tr key={p.sku}>
              <td style={{ fontWeight:600 }}>{p.sku}</td>
              <td><Badge tone={p.cat==="Chocolate"?"accent":p.cat==="Gummies"?"info":"mute"}>{p.cat}</Badge></td>
              <td className="num" style={{ textAlign:"right" }}>{p.price?fmt.usd(p.price):"\u2014"}</td>
              <td className="num" style={{ textAlign:"right", color:p.basis==="placeholder"?"var(--bad)":"var(--ink)" }}>{fmt.usd(p.cost,2)}</td>
              <td>{p.basis==="measured"?<Badge tone="good">Measured</Badge>:<Badge tone="bad">Placeholder</Badge>}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600, color:p.margin?"var(--good)":"var(--ink-mute)" }}>{p.margin?fmt.pct(p.margin):"\u2014"}</td>
              <td className="num" style={{ textAlign:"right" }}>{p.units||"\u2014"}</td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.usd(p.rev)}</td>
              <td style={{ width:90 }}><Spark data={p.trend} tone={p.trend[4]>=p.trend[0]?"good":"bad"} h={24} fill={false}/></td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <div style={{ height:18 }} />
      <Note tone="bad" icon="!">
        Four products still carry a $10 placeholder cost that somebody typed in once. That is 54% of your cost of
        goods, it includes two products that were never made, and you have been pricing against it since the 20% rise.
      </Note>
    </div>
  );
}

/* ============================== SUBSCRIPTIONS ============================== */
function Subs() {
  return (
    <div className="page-in">
      <PageHead title="Subscriptions" sub="Who actually re-orders, and where they fall off." />
      <G c={6} name="6" style={{ marginBottom:24 }}>{D.subs.kpi.map(k=><KPI key={k.label} {...k}/>)}</G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.3fr 1fr", marginBottom:24 }}>
        <Card pad={20}>
          <SecLabel icon="pulse" right="eight months">Rebill rate</SecLabel>
          <Line data={D.subs.rebill} tone="good" target={90} tLabel="90% target" vf={v=>v+"%"} yMin={0} yMax={110} h={190}/>
          <p style={{ fontSize:11.5, color:"var(--ink-mute)", marginTop:12 }}>
            Fell to 27.3% when subscriber payment credentials broke. Restored and recovering. The retry rebuild closes the rest.
          </p>
        </Card>
        <Card pad={20}>
          <SecLabel icon="funnel">Where they fall off</SecLabel>
          {[["Paid order",223,100,"info"],["Attached a subscription",30,13,"warn"],
            ["Survived cycle 1",30,13,"warn"],["Survived cycle 2",14,6,"bad"],["Survived cycle 3",3,1,"bad"]].map(([l,n,p,t])=>(
            <div key={l} style={{ marginBottom:12 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                <span style={{ fontSize:12.5 }}>{l}</span>
                <span className="mono" style={{ fontSize:12.5, fontWeight:600, color:T(t) }}>{n} <span style={{ color:"var(--ink-mute)", fontWeight:400 }}>· {p}%</span></span>
              </div><Bar pct={p} tone={t} h={7}/>
            </div>))}
        </Card>
      </G>
      <SecLabel icon="chart" right="% still active">Retention by cohort</SecLabel>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Cohort</th><th style={{textAlign:"right"}}>Subscribers</th>
            <th style={{textAlign:"center"}}>Month 1</th><th style={{textAlign:"center"}}>Month 3</th>
            <th style={{textAlign:"center"}}>Month 6</th><th style={{textAlign:"center"}}>Month 12</th></tr></thead>
          <tbody>{D.subs.cohorts.map(c=>(
            <tr key={c.c}><td style={{ fontWeight:600 }}>{c.c}</td>
              <td className="num" style={{ textAlign:"right" }}>{c.n}</td>
              {["m1","m3","m6","m12"].map(k=>(
                <td key={k} style={{ textAlign:"center" }}>
                  {c[k]==null?<span style={{ color:"var(--ink-mute)" }}>\u2014</span>:
                    <Badge tone={c[k]>=60?"good":c[k]>=20?"warn":"bad"}>{c[k]}%</Badge>}
                </td>))}
            </tr>))}</tbody>
        </table></div>
      </Card>
    </div>
  );
}

/* ============================== WHOLESALE ============================== */
function Wholesale() {
  const accounts = [
    { n:"Clinic A · Los Angeles", st:"Active", orders:4, rev:2840, last:"Aug 28" },
    { n:"Clinic B · Phoenix", st:"Active", orders:2, rev:980, last:"Sep 2" },
    { n:"Clinic C · Denver", st:"Trial", orders:1, rev:300, last:"Aug 14" },
    { n:"Retailer · Portland", st:"Pitched", orders:0, rev:0, last:"\u2014" },
    { n:"Clinic D · Austin", st:"Pitched", orders:0, rev:0, last:"\u2014" },
  ];
  return (
    <div className="page-in">
      <PageHead title="Wholesale and clinics" sub="The emerging channel. Commission-only rep, cold outbound."
        meta="Wholesale orders never touch the order platform, which is why they are invisible in revenue." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Active accounts" value="2" tone="warn" sub="of 5 in pipeline" />
        <KPI label="Wholesale revenue" value="$4,120" tone="ink" sub="30 days" delta={12.4} />
        <KPI label="Share of revenue" value="8.8%" tone="ink" />
        <KPI label="Rep commission" value="Commission only" tone="mute" sub="no base" />
      </G>
      <Card pad={0} style={{ marginBottom:20 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Account</th><th>Status</th><th style={{textAlign:"right"}}>Orders</th>
            <th style={{textAlign:"right"}}>Revenue</th><th>Last order</th></tr></thead>
          <tbody>{accounts.map(a=>(
            <tr key={a.n}><td style={{ fontWeight:600 }}>{a.n}</td>
              <td><Badge tone={a.st==="Active"?"good":a.st==="Trial"?"warn":"mute"}>{a.st}</Badge></td>
              <td className="num" style={{ textAlign:"right" }}>{a.orders||"\u2014"}</td>
              <td className="num" style={{ textAlign:"right" }}>{a.rev?fmt.usd(a.rev):"\u2014"}</td>
              <td style={{ color:"var(--ink-mute)" }}>{a.last}</td></tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="warn" icon="!">
        Wholesale ships straight from the warehouse without an order record, so it never reconciles against revenue
        and it silently consumes stock the inventory system thinks you still have.
      </Note>
    </div>
  );
}

/* ============================== ATTRIBUTION ============================== */
function Attribution() {
  return (
    <div className="page-in">
      <PageHead title="Attribution" sub="Which channel earned which order."
        meta="Currently the weakest system in the business." />
      <Card pad={26} style={{ borderColor:"var(--bad)", background:"var(--bad-tint)", marginBottom:24 }}>
        <div style={{ display:"flex", gap:15, alignItems:"flex-start" }}>
          <div style={{ width:34, height:34, borderRadius:9, background:"var(--bad)", display:"grid",
                        placeItems:"center", flexShrink:0 }}><Ico n="alert" s={18}/></div>
          <div>
            <h3 style={{ fontSize:16, marginBottom:7 }}>Attribution has been broken since April</h3>
            <p style={{ fontSize:13, color:"var(--ink-soft)", lineHeight:1.6, maxWidth:700 }}>
              The tracking tag fires on page load, so any order without an affiliate link defaults to an internal
              test account. Stored affiliate IDs never expire either. That means every channel number you have
              looked at since April is wrong. Not just creator numbers. All of them.
            </p>
            <div style={{ display:"flex", gap:9, marginTop:14, flexWrap:"wrap" }}>
              {["Cost per customer","Lifetime value","Channel ROAS","Creator payouts","Campaign performance"].map(f=>
                <Badge key={f} tone="bad">{f}</Badge>)}
            </div>
          </div>
        </div>
      </Card>
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Orders unattributed" value="26.2%" tone="bad" sub="landing on a test account" />
        <KPI label="Attribution window" value="30 days" tone="good" sub="set, not yet built" />
        <KPI label="Stored IDs expiring" value="No" tone="bad" sub="credit never lapses" />
        <KPI label="Fix lands" value="Phase 3" tone="warn" sub="prerequisite for all channel reporting" />
      </G>
      <Card pad={20}>
        <SecLabel icon="funnel">What each channel claims, and what we can prove</SecLabel>
        <HBars data={D.channels} labelW={140} showPct />
      </Card>
    </div>
  );
}

/* ============================== ADS ============================== */
function Ads() {
  return (
    <div className="page-in">
      <PageHead title="Ads" sub="Paid acquisition across every platform."
        meta="Spend has been paused since August. The Q4 plan turns it back on." />
      <G c={6} name="6" style={{ marginBottom:24 }}>{D.ads.kpi.map(k=><KPI key={k.label} {...k}/>)}</G>
      <SecLabel icon="mkt" right="3 accounts">Ad accounts</SecLabel>
      <Card pad={0} style={{ marginBottom:20 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Account</th><th>ID</th><th>Status</th><th style={{textAlign:"right"}}>Spend</th>
            <th style={{textAlign:"right"}}>Impressions</th><th style={{textAlign:"right"}}>Clicks</th>
            <th style={{textAlign:"right"}}>CTR</th><th style={{textAlign:"right"}}>CPC</th></tr></thead>
          <tbody>{D.ads.accounts.map(a=>(
            <tr key={a.n}><td style={{ fontWeight:600 }}>{a.n}</td>
              <td className="num" style={{ color:"var(--ink-mute)" }}>{a.id}</td>
              <td><Badge tone={a.status==="Paused"?"warn":"mute"}>{a.status}</Badge></td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.usd(a.spend)}</td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.n(a.imp)}</td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.n(a.clicks)}</td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.pct(a.ctr,2)}</td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.usd(a.cpc)}</td></tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="warn" icon="!">
        Before spend turns back on you need a cost-per-customer ceiling that finance sets and marketing cannot move.
        That number cannot be computed until attribution is rebuilt, which makes the rebuild a prerequisite for the
        Q4 budget rather than a parallel task.
      </Note>
    </div>
  );
}

/* ============================== SOCIAL ============================== */
function Social() {
  return (
    <div className="page-in">
      <PageHead title="Social" sub="Organic reach and engagement across every platform." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Total following" value="39.5K" tone="ink" delta={2.4} />
        <KPI label="Posts · 30d" value="39" tone="ink" />
        <KPI label="Best performer" value="TikTok" tone="good" sub="5.1% engagement" />
        <KPI label="Attributed revenue" value="\u2014" tone="mute" sub="needs attribution" />
      </G>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Platform</th><th style={{textAlign:"right"}}>Followers</th>
            <th style={{textAlign:"right"}}>Growth · 30d</th><th style={{textAlign:"right"}}>Posts</th>
            <th style={{textAlign:"right"}}>Engagement</th><th>Trend</th></tr></thead>
          <tbody>{D.ads.social.map(s=>(
            <tr key={s.n}><td style={{ fontWeight:600 }}>{s.n}</td>
              <td className="num" style={{ textAlign:"right" }}>{s.followers}</td>
              <td className="num" style={{ textAlign:"right", color:s.growth>0?"var(--good)":"var(--bad)" }}>
                {s.growth>0?"+":""}{s.growth}%</td>
              <td className="num" style={{ textAlign:"right" }}>{s.posts}</td>
              <td className="num" style={{ textAlign:"right", color:T(s.tone) }}>{s.eng}</td>
              <td style={{ width:100 }}><Spark data={s.growth>0?[10,12,13,15,18]:[18,16,15,13,12]} tone={s.tone} h={24} fill={false}/></td>
            </tr>))}</tbody>
        </table></div>
      </Card>
    </div>
  );
}

/* ============================== INVENTORY ============================== */
function Inventory() {
  const [st, setSt] = useState("All"); const [open, setOpen] = useState({});
  const L = { critical:"Stockout risk", warning:"Reorder soon", healthy:"Healthy", over:"Overstocked" };
  const TN = { critical:"bad", warning:"warn", healthy:"good", over:"info" };
  const rows = D.inventory.filter(s=>st==="All"||s.st===st);
  const risk = D.inventory.filter(s=>s.st==="critical"||s.st==="warning");
  const po = risk.reduce((a,b)=>a+b.po,0);
  return (
    <div className="page-in">
      <PageHead title="Inventory" sub="What you have, how fast it moves, and whether you can afford the reorder."
        right={<Seg options={["All","critical","warning","healthy","over"].map(v=>({v,l:v==="All"?"All":L[v]}))} value={st} onChange={setSt}/>} />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="At risk" value={String(risk.length)} tone="bad" sub="2 critical · 2 warning" />
        <KPI label="Free cash" value="$17,847" tone="good" sub="above the floor" />
        <KPI label="Reorder cost" value={fmt.usd(po)} tone="warn" sub="all at-risk products" />
        <KPI label="Shortfall" value={fmt.usd(po-17847)} tone="bad" sub="sequence or use credit" />
      </G>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th style={{width:26}}></th><th>Product</th><th>Category</th>
            <th style={{textAlign:"right"}}>On hand</th><th style={{textAlign:"right"}}>Velocity</th>
            <th style={{textAlign:"right"}}>Cover</th><th style={{textAlign:"right"}}>Lead time</th>
            <th>Cover against lead</th><th>Incoming</th><th>Status</th></tr></thead>
          <tbody>{rows.map(s=>{
            const o=!!open[s.sku];
            return (<React.Fragment key={s.sku}>
              <tr>
                <td style={{ padding:"9px 6px 9px 13px" }}>
                  <button onClick={()=>setOpen(x=>({...x,[s.sku]:!x[s.sku]}))}
                    style={{ border:"1px solid var(--rule)", background:o?"var(--accent-tint)":"transparent",
                      color:o?"var(--accent)":"var(--ink-mute)", width:21, height:21, borderRadius:5,
                      cursor:"pointer", display:"grid", placeItems:"center", padding:0, fontSize:9 }}>{o?"\u25BE":"\u25B8"}</button>
                </td>
                <td><div style={{ fontWeight:600 }}>{s.sku}</div>
                  {s.note && <div style={{ fontSize:10, color:"var(--ink-mute)" }}>{s.note}</div>}</td>
                <td><Badge tone={s.cat==="Chocolate"?"accent":s.cat==="Gummies"?"info":"mute"}>{s.cat}</Badge></td>
                <td className="num" style={{ textAlign:"right" }}>{fmt.n(s.hand)}</td>
                <td className="num" style={{ textAlign:"right" }}>{s.vel?s.vel+"/day":"\u2014"}</td>
                <td className="num" style={{ textAlign:"right", fontWeight:600, color:T(TN[s.st]) }}>{s.cover}d</td>
                <td className="num" style={{ textAlign:"right", color:"var(--ink-soft)" }}>{s.lead}d</td>
                <td style={{ width:140 }}><Bar pct={Math.min((s.cover/(s.lead*3))*100,100)} tone={TN[s.st]}/>
                  {s.cover>0&&s.cover<s.lead && <span style={{ fontSize:9.5, color:"var(--bad)" }}>inside lead time</span>}</td>
                <td>{s.inc?<Badge tone="good">On order</Badge>:<span style={{ color:"var(--ink-mute)", fontSize:11 }}>\u2014</span>}</td>
                <td><Badge tone={TN[s.st]}>{L[s.st]}</Badge></td>
              </tr>
              {o && <tr><td colSpan={10} style={{ background:"var(--surface-2)", padding:"15px 18px" }}>
                <G c={4} gap={18}>
                  {[["Reorder cost", s.po?fmt.usd(s.po):"Not scheduled"],
                    ["Runs out", s.cover?`in ${s.cover} days`:"already out"],
                    ["Lead time", `${s.lead} days`],
                    ["Verdict", s.po>17847?"Needs sequencing or credit":s.po?"Fundable from free cash":"No action"]].map(([l,v])=>(
                    <div key={l}><div style={{ fontSize:9.5, fontWeight:700, letterSpacing:"0.06em",
                      textTransform:"uppercase", color:"var(--ink-mute)", marginBottom:4 }}>{l}</div>
                      <div style={{ fontSize:13, fontWeight:500 }}>{v}</div></div>))}
                </G></td></tr>}
            </React.Fragment>);
          })}</tbody>
        </table></div>
      </Card>
    </div>
  );
}

/* ============================== PRODUCTION ============================== */
function Production() {
  return (
    <div className="page-in">
      <PageHead title="Production" sub="Every run, what went in, what came out, and what it cost."
        meta="Own kitchen for chocolate. Contract manufacturer for gummies and capsules." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Runs logged" value="0 of 30" tone="bad" sub="three per product" />
        <KPI label="Average yield" value="90.2%" tone="warn" sub="estimated, not measured" />
        <KPI label="Next run" value="Late Sep" tone="warn" sub="Dubai Chocolate" />
        <KPI label="Cost confidence" value="Low" tone="bad" sub="33% error bar" help="Until three runs per product are logged." />
      </G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.5fr 1fr" }}>
        <Card pad={0}>
          <div style={{ padding:"18px 18px 0" }}><SecLabel icon="factory">Production runs</SecLabel></div>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Date</th><th>Product</th><th style={{textAlign:"right"}}>Input</th>
              <th style={{textAlign:"right"}}>Output</th><th style={{textAlign:"right"}}>Yield</th>
              <th style={{textAlign:"right"}}>Cost / unit</th><th>Status</th></tr></thead>
            <tbody>{D.production.runs.map((r,i)=>(
              <tr key={i}><td style={{ color:r.st==="scheduled"?"var(--ink-mute)":"var(--ink)" }}>{r.d}</td>
                <td style={{ fontWeight:600 }}>{r.product}</td>
                <td className="num" style={{ textAlign:"right" }}>{r.input}</td>
                <td className="num" style={{ textAlign:"right" }}>{r.output}</td>
                <td className="num" style={{ textAlign:"right" }}>{r.yield?fmt.pct(r.yield):"\u2014"}</td>
                <td className="num" style={{ textAlign:"right" }}>{r.cost?fmt.usd(r.cost,2):"\u2014"}</td>
                <td>{r.st==="scheduled"?<Badge tone="mute">Scheduled</Badge>:<Badge tone="warn">Estimated</Badge>}</td>
              </tr>))}</tbody>
          </table></div>
        </Card>
        <Card pad={20}>
          <SecLabel icon="money">Confirmed rates</SecLabel>
          {D.production.rates.map(r=>(
            <div key={r.l} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0",
              borderBottom:"1px solid var(--rule-soft)" }}>
              <span style={{ fontSize:12.5, color:"var(--ink-soft)" }}>{r.l}</span>
              <span className="mono" style={{ fontSize:13, fontWeight:600 }}>{r.v}</span>
            </div>))}
          <div style={{ marginTop:16 }}>
            <Note tone="bad" icon="!">No run has been logged with all fields yet. Until three land per product,
              cost per unit stays an estimate and margin stays a guess.</Note>
          </div>
        </Card>
      </G>
    </div>
  );
}

/* ============================== SUPPLIERS ============================== */
function Suppliers() {
  return (
    <div className="page-in">
      <PageHead title="Suppliers" sub="Who you depend on, on what terms, and how exposed that makes you." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Active suppliers" value="5" tone="ink" />
        <KPI label="On payment terms" value="1 of 5" tone="bad" sub="rest are pay up front" help="Supplier terms are free working capital nobody has asked for." />
        <KPI label="Annual spend" value="$233K" tone="ink" />
        <KPI label="Single points of failure" value="2" tone="bad" sub="manufacturer and kitchen" />
      </G>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Supplier</th><th>What they supply</th><th>Terms</th><th>Lead time</th>
            <th style={{textAlign:"right"}}>Annual spend</th><th>Risk</th></tr></thead>
          <tbody>{D.suppliers.map(s=>(
            <tr key={s.n}><td style={{ fontWeight:600 }}>{s.n}</td>
              <td style={{ color:"var(--ink-soft)" }}>{s.what}</td>
              <td className="mono" style={{ fontSize:12 }}>{s.terms}</td>
              <td className="num">{s.lead}</td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.usd(s.spend)}</td>
              <td><Badge tone={s.risk}>{s.risk==="good"?"Low":s.risk==="warn"?"Watch":"High"}</Badge></td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <div style={{ height:18 }} />
      <Note tone="warn" icon="!">
        You pay the manufacturer one hundred percent up front. Even net 30 on that one relationship would free up
        working capital equal to about a month of inventory spend, and it costs nothing to ask.
      </Note>
    </div>
  );
}

/* ============================== AGENTS ============================== */
function Agents() {
  return (
    <div className="page-in">
      <PageHead title="Agents" sub="Automated workers that run a function without a person in the loop."
        meta="Outside the current engagement scope. Scoped here so the dashboard has somewhere to put them." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Agents planned" value="4" tone="violet" />
        <KPI label="Live" value="0" tone="mute" />
        <KPI label="Shelved" value="1" tone="mute" sub="creator programme wound down" />
        <KPI label="Estimated load removed" value="~22 hrs / wk" tone="good" sub="once all four run" />
      </G>
      <G c={2} name="2" gap={14}>
        {D.agents.map(a=>(
          <Card key={a.n} pad={18} hover style={{ opacity:a.s==="shelved"?0.55:1 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:9 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:32, height:32, borderRadius:8, background:"var(--violet-tint)",
                  color:"var(--violet)", display:"grid", placeItems:"center" }}><Ico n="agents" s={17}/></div>
                <span style={{ fontSize:14.5, fontWeight:600 }}>{a.n}</span>
              </div>
              <Badge tone={a.s==="planned"?"violet":"mute"}>{a.s==="planned"?"Planned":"Shelved"}</Badge>
            </div>
            <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.55, marginBottom:11 }}>{a.d}</p>
            <div style={{ paddingTop:11, borderTop:"1px solid var(--rule-soft)", display:"flex",
                          justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:10, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:"var(--ink-mute)" }}>Impact</span>
              <span style={{ fontSize:12, fontWeight:600, color:"var(--good)" }}>{a.impact}</span>
            </div>
          </Card>))}
      </G>
    </div>
  );
}

/* ============================== VAULT ============================== */
function Vault() {
  return (
    <div className="page-in">
      <PageHead title="Vault" sub="Contracts, agreements and anything that would hurt to lose."
        meta="Access controlled. Everything here lives in accounts you own." />
      <G c={3} name="3" gap={14} style={{ marginBottom:24 }}>
        {D.vault.map(v=>(
          <Card key={v.n} pad={18} hover style={{ cursor:"pointer" }}>
            <div style={{ display:"flex", alignItems:"center", gap:11, marginBottom:11 }}>
              <div style={{ width:34, height:34, borderRadius:9, background:TT(v.tone), color:T(v.tone),
                display:"grid", placeItems:"center" }}><Ico n="lock" s={16}/></div>
              <div><div style={{ fontSize:14, fontWeight:600 }}>{v.n}</div>
                <div style={{ fontSize:11, color:"var(--ink-mute)" }}>{v.c} documents</div></div>
            </div>
            <p style={{ fontSize:11.5, color:"var(--ink-soft)" }}>{v.note}</p>
          </Card>))}
      </G>
      <SecLabel icon="file" right="recently updated">Drive</SecLabel>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Name</th><th>Type</th><th>Updated</th><th style={{textAlign:"right"}}>Size</th></tr></thead>
          <tbody>{D.drive.map(f=>(
            <tr key={f.n} style={{ cursor:"pointer" }}>
              <td><span style={{ display:"flex", alignItems:"center", gap:9 }}>
                <Ico n="file" s={14}/><span style={{ fontWeight:500 }}>{f.n}</span></span></td>
              <td><Badge tone="mute">{f.t}</Badge></td>
              <td style={{ color:"var(--ink-mute)" }}>{f.d}</td>
              <td className="num" style={{ textAlign:"right", color:"var(--ink-mute)" }}>{f.size}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
    </div>
  );
}

/* ============================== DATA HEALTH ============================== */
function DataHealth() {
  const ST={live:"good",partial:"warn",blocked:"bad",waiting:"info"};
  const SL={live:"Connected",partial:"Partial",blocked:"Blocked",waiting:"Waiting"};
  const RT={high:"good",medium:"warn",low:"bad",none:"bad"};
  const RL={high:"Act on it",medium:"Check first",low:"Directional",none:"Not usable"};
  const RP={high:100,medium:65,low:32,none:8};
  const live=D.dataHealth.filter(s=>s.s==="live").length;
  return (
    <div className="page-in">
      <PageHead title="Data health" sub="Which numbers on this dashboard you can act on, and which are still being built."
        meta="A dashboard that shows a confident wrong number is worse than one that admits what it does not know." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Sources connected" value={`${live} of ${D.dataHealth.length}`} tone={live>7?"good":"warn"} />
        <KPI label="Blocked on access" value="3" tone="bad" sub="warehouse, email, attribution" />
        <KPI label="Numbers you can act on" value="3 of 9" tone="warn" />
        <KPI label="Waiting on the kitchen" value="1" tone="warn" sub="margin per unit" />
      </G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.15fr" }}>
        <Card pad={20}>
          <SecLabel icon="pulse">Sources</SecLabel>
          {D.dataHealth.map(s=>(
            <div key={s.n} style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:12,
              alignItems:"center", padding:"9px 0", borderBottom:"1px solid var(--rule-soft)" }}>
              <div><div style={{ fontSize:12.5, fontWeight:500 }}>{s.n}</div>
                <div style={{ fontSize:10.5, color:"var(--ink-mute)" }}>{s.d}</div></div>
              <Badge tone={ST[s.s]}>{SL[s.s]}</Badge>
            </div>))}
        </Card>
        <Card pad={20}>
          <SecLabel icon="target">How much to trust each number</SecLabel>
          {D.reliability.map(r=>(
            <div key={r.a} style={{ marginBottom:14 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                <span style={{ fontSize:12.5, fontWeight:500 }}>{r.a}</span>
                <Badge tone={RT[r.l]}>{RL[r.l]}</Badge>
              </div>
              <Bar pct={RP[r.l]} tone={RT[r.l]} />
              <p style={{ fontSize:10.5, color:"var(--ink-mute)", marginTop:4 }}>{r.n}</p>
            </div>))}
        </Card>
      </G>
    </div>
  );
}
