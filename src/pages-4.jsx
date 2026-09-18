// pages-4.jsx - Today So Far, Daily Performance Tracker, Cohort LTV.
// Data model folded from DB's reference. Layout ours.

function DefFooter() {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", gap:16, flexWrap:"wrap",
      marginTop:22, paddingTop:14, borderTop:"1px solid var(--rule)" }}>
      <span style={{ fontSize:10, letterSpacing:"0.05em", textTransform:"none", color:"var(--ink-dim)" }}>
        {D3.defs.netRev}</span>
      <span style={{ fontSize:10, letterSpacing:"0.05em", textTransform:"none", color:"var(--ink-dim)" }}>
        {D3.defs.profit}</span>
    </div>
  );
}

/* ============================== TODAY SO FAR ============================== */
function Today() {
  const l = D3.live;
  const totSpend = l.channels.reduce((s,c)=>s+(c.spend||0),0);
  const totRev = l.channels.reduce((s,c)=>s+c.rev,0);
  return (
    <div className="page-in">
      <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:9 }}>
        <span className="dot" style={{ background:"var(--good)" }}/>
        <span style={{ fontSize:10.5, fontWeight:700, letterSpacing:"0.09em",
          textTransform:"none", color:"var(--good)" }}>Live</span>
        <span style={{ fontSize:10.5, color:"var(--ink-mute)" }}>· order stream</span>
      </div>
      <PageHead title="Today so far"
        sub="How new customer revenue and orders hold up at the current spend level, paced against yesterday to the same hour."
        right={<div style={{ textAlign:"right" }}>
          <div className="mono" style={{ fontSize:14, fontWeight:600 }}>{l.day}</div>
          <div style={{ fontSize:11, color:"var(--ink-mute)" }}>{l.elapsed}% of day elapsed</div>
          <div style={{ width:150, marginTop:6 }}><Bar pct={l.elapsed} tone="accent" h={4}/></div>
        </div>} />

      <G c={6} name="6" style={{ marginBottom:24 }}>
        {l.head.map(k=><KPI key={k.label} {...k}/>)}
      </G>

      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.1fr 1fr" }}>
        <Card pad={0}>
          <div style={{ padding:"18px 18px 0" }}>
            <SecLabel icon="mkt" right="live spend against attributed revenue">Spend by channel</SecLabel>
          </div>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Channel</th><th style={{textAlign:"right"}}>Spend</th>
              <th style={{textAlign:"right"}}>Revenue</th><th style={{textAlign:"right"}}>ROAS</th></tr></thead>
            <tbody>
              {l.channels.map(c=>(
                <tr key={c.n}>
                  <td><span style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span className="dot" style={{ background:T(c.tone) }}/>
                    <span style={{ fontWeight:600 }}>{c.n}</span>
                    {c.note && <span style={{ fontSize:10, color:"var(--ink-mute)" }}>{c.note}</span>}
                  </span></td>
                  <td className="num" style={{textAlign:"right"}}>{c.spend==null?"N/A":fmt.usd(c.spend)}</td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.usd(c.rev)}</td>
                  <td className="num" style={{textAlign:"right", fontWeight:600,
                    color:c.roas==null?"var(--ink-mute)":c.roas>=3?"var(--good)":"var(--warn)"}}>
                    {c.roas==null?"N/A":c.roas.toFixed(2)+"x"}</td>
                </tr>))}
              <tr style={{ background:"var(--surface-2)" }}>
                <td style={{ fontWeight:700 }}>Total</td>
                <td className="num" style={{textAlign:"right", fontWeight:700}}>{fmt.usd(totSpend)}</td>
                <td className="num" style={{textAlign:"right", fontWeight:700}}>{fmt.usd(totRev)}</td>
                <td className="num" style={{textAlign:"right", fontWeight:700}}>{(totRev/totSpend).toFixed(2)}x</td>
              </tr>
            </tbody>
          </table></div>
        </Card>

        <Card pad={20}>
          <SecLabel icon="pulse" right="same definitions as the daily tracker">Metrics</SecLabel>
          <G c={3} gap={16}>
            {l.metrics.map(m=>(
              <div key={m.label}>
                <div style={{ display:"flex", alignItems:"center", gap:5, fontSize:9.5, fontWeight:700,
                  letterSpacing:"0.06em", textTransform:"none", color:"var(--ink-mute)", marginBottom:4 }}>
                  {m.label}<Help text={m.help}/>
                </div>
                <div className="mono" style={{ fontSize:18, fontWeight:600 }}>{m.value}</div>
              </div>))}
          </G>
        </Card>
      </G>
      <DefFooter/>
    </div>
  );
}

/* ============================== DAILY TRACKER ============================== */
function Daily() {
  const d = D3.daily;
  const [chan, setChan] = useState(false);
  const [open, setOpen] = useState(null);
  const delta = (v) => v == null ? <span style={{color:"var(--ink-mute)"}}>-</span> :
    <span className="mono" style={{ fontSize:10, fontWeight:650, color:v>0?"var(--good)":"var(--bad)" }}>
      {v>0?"\u25B2":"\u25BC"} {Math.abs(v).toFixed(1)}%</span>;
  const money = (v) => v==null ? "N/A" : fmt.usd(v);

  return (
    <div className="page-in">
      <PageHead title="Daily performance tracker"
        sub="One row per day. Spend, acquisition, retention, margin and profit side by side. Click a day to drill into channels."
        right={<button onClick={()=>setChan(c=>!c)}
          style={{ display:"flex", alignItems:"center", gap:9, border:"1px solid var(--rule)",
            background:chan?"var(--accent-tint)":"var(--surface-3)", color:chan?"var(--accent)":"var(--ink-soft)",
            borderRadius:"var(--r-sm)", padding:"7px 13px", fontSize:12, fontWeight:600, cursor:"pointer" }}>
          <span style={{ width:14, height:14, borderRadius:3, border:`1.5px solid ${chan?"var(--accent)":"var(--ink-mute)"}`,
            background:chan?"var(--accent)":"transparent", display:"grid", placeItems:"center" }}>
            {chan && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4"><path d="M5 13l4 4L19 7"/></svg>}
          </span>
          Spend by channel
        </button>} />

      <Card pad={0} style={{ marginBottom:14 }}>
        <div className="scroll-x"><table className="tbl">
          <thead>
            <tr>
              <th colSpan={6} style={{ color:"var(--accent)" }}>Snapshot</th>
              {chan ? D3.daily.channels.map(c=>(
                <th key={c.n} colSpan={c.spend==null?2:4} style={{ color:T(c.tone) }}>{c.n}</th>
              )) : <><th colSpan={5}>Customer orders</th><th colSpan={8}>Metrics</th></>}
            </tr>
            <tr>
              <th>Date</th><th style={{textAlign:"right"}}>Ad spend</th><th style={{textAlign:"right"}}>New ord.</th>
              <th style={{textAlign:"right"}}>NC revenue</th><th style={{textAlign:"right"}}>aMER</th><th style={{textAlign:"right"}}>MER</th>
              {chan ? D3.daily.channels.flatMap(c=> c.spend==null
                  ? [<th key={c.n+"r"} style={{textAlign:"right"}}>Rev</th>, <th key={c.n+"o"} style={{textAlign:"right"}}>ROAS</th>]
                  : [<th key={c.n+"s"} style={{textAlign:"right"}}>Spend</th>,
                     <th key={c.n+"f"} style={{textAlign:"right"}}>Fcst</th>,
                     <th key={c.n+"r"} style={{textAlign:"right"}}>Rev</th>,
                     <th key={c.n+"o"} style={{textAlign:"right"}}>ROAS</th>])
                : <>
                  <th style={{textAlign:"right"}}># New</th><th style={{textAlign:"right"}}>$ New</th>
                  <th style={{textAlign:"right"}}># Ret.</th><th style={{textAlign:"right"}}>$ Ret.</th>
                  <th style={{textAlign:"right"}}># Total</th>
                  <th style={{textAlign:"right"}}>% NCrev</th><th style={{textAlign:"right"}}>NAOV</th>
                  <th style={{textAlign:"right"}}>nCAC</th><th style={{textAlign:"right"}}>ROAS</th>
                  <th style={{textAlign:"right"}}>Total rev</th><th style={{textAlign:"right"}}>Gross margin</th>
                  <th style={{textAlign:"right"}}>Profit</th></>}
            </tr>
          </thead>
          <tbody>
            {d.rows.map(r=>(
              <React.Fragment key={r.d}>
                <tr className="clickable" onClick={()=>setOpen(open===r.d?null:r.d)}>
                  <td><div style={{ fontWeight:600 }}>{r.d}</div>
                    <div style={{ fontSize:10, color: r.w==="Sat"||r.w==="Sun" ? "var(--accent)":"var(--ink-mute)" }}>{r.w}</div></td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.spend)}<div>{delta(r.dS)}</div></td>
                  <td className="num" style={{textAlign:"right"}}>{r.ord}<div>{delta(r.dO)}</div></td>
                  <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.nc)}</td>
                  <td className="num" style={{textAlign:"right"}}>{r.amer.toFixed(2)}x</td>
                  <td className="num" style={{textAlign:"right"}}>{r.mer.toFixed(2)}x</td>
                  {chan ? D3.daily.channels.flatMap(c=>{
                    const f = (c.spend||0)/d.totals.spend;
                    const sp = c.spend==null?null:Math.round(r.spend*f);
                    const rv = Math.round(r.nc*((c.rev)/d.totals.nc));
                    return c.spend==null
                      ? [<td key={c.n+"r"} className="num" style={{textAlign:"right"}}>{fmt.usd(rv)}</td>,
                         <td key={c.n+"o"} className="num" style={{textAlign:"right",color:"var(--ink-mute)"}}>N/A</td>]
                      : [<td key={c.n+"s"} className="num" style={{textAlign:"right"}}>{fmt.usd(sp)}</td>,
                         <td key={c.n+"f"} className="num" style={{textAlign:"right",color:"var(--ink-mute)"}}>{fmt.usd(Math.round(sp*1.05))}</td>,
                         <td key={c.n+"r"} className="num" style={{textAlign:"right"}}>{fmt.usd(rv)}</td>,
                         <td key={c.n+"o"} className="num" style={{textAlign:"right",fontWeight:600,
                           color:(rv/sp)>=3?"var(--good)":"var(--warn)"}}>{(rv/sp).toFixed(2)}x</td>];
                  }) : <>
                    <td className="num" style={{textAlign:"right"}}>{r.nNew}</td>
                    <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.$new)}</td>
                    <td className="num" style={{textAlign:"right"}}>{r.nRet}</td>
                    <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.$ret)}</td>
                    <td className="num" style={{textAlign:"right"}}>{r.tot}</td>
                    <td className="num" style={{textAlign:"right"}}>{fmt.pct(r.ncrev)}</td>
                    <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.naov,2)}</td>
                    <td className="num" style={{textAlign:"right", color:r.ncac>40?"var(--bad)":"var(--ink)"}}>{fmt.usd(r.ncac,2)}</td>
                    <td className="num" style={{textAlign:"right"}}>{r.roas.toFixed(2)}x</td>
                    <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.rev)}</td>
                    <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.gm)}</td>
                    <td className="num" style={{textAlign:"right", fontWeight:600, color:"var(--good)"}}>{fmt.usd(r.profit)}</td></>}
                </tr>
                {open===r.d && (
                  <tr><td colSpan={chan?20:18} style={{ background:"var(--surface-2)", padding:"14px 18px" }}>
                    <G c={4} gap={18}>
                      {[["New customer revenue",fmt.usd(r.nc)],["Returning revenue",fmt.usd(r.$ret)],
                        ["Cost per new customer",fmt.usd(r.ncac,2)],["Contribution profit",fmt.usd(r.profit)]].map(([l,v])=>(
                        <div key={l}><div style={{ fontSize:9.5, fontWeight:700, letterSpacing:"0.06em",
                          textTransform:"none", color:"var(--ink-mute)", marginBottom:4 }}>{l}</div>
                          <div className="mono" style={{ fontSize:14, fontWeight:600 }}>{v}</div></div>))}
                    </G>
                  </td></tr>
                )}
              </React.Fragment>))}

            {/* footer rows */}
            <tr style={{ background:"var(--surface-2)", borderTop:"2px solid var(--rule)" }}>
              <td style={{ fontWeight:700, color:"var(--accent)" }}>Total</td>
              <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.spend)}</td>
              <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.n(d.totals.ord)}</td>
              <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.nc)}</td>
              <td className="num" style={{textAlign:"right",fontWeight:700}}>{d.totals.amer.toFixed(2)}x</td>
              <td className="num" style={{textAlign:"right",fontWeight:700}}>{d.totals.mer.toFixed(2)}x</td>
              {chan ? D3.daily.channels.flatMap(c=> c.spend==null
                ? [<td key={c.n+"r"} className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(c.rev)}</td>,
                   <td key={c.n+"o"} className="num" style={{textAlign:"right",color:"var(--ink-mute)"}}>N/A</td>]
                : [<td key={c.n+"s"} className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(c.spend)}</td>,
                   <td key={c.n+"f"} className="num" style={{textAlign:"right"}}>{fmt.usd(c.fcst)}</td>,
                   <td key={c.n+"r"} className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(c.rev)}</td>,
                   <td key={c.n+"o"} className="num" style={{textAlign:"right",fontWeight:700}}>{c.roas.toFixed(2)}x</td>])
                : <>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.n(d.totals.nNew)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.$new)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.n(d.totals.nRet)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.$ret)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.n(d.totals.tot)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.pct(d.totals.ncrev)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.naov,2)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.ncac,2)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{d.totals.roas.toFixed(2)}x</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.rev)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700}}>{fmt.usd(d.totals.gm)}</td>
                  <td className="num" style={{textAlign:"right",fontWeight:700,color:"var(--good)"}}>{fmt.usd(d.totals.profit)}</td></>}
            </tr>
            {!chan && [["Forecast",d.forecast,"ink"],["Target",d.target,"mute"],["Required / day",d.reqDay,"accent"]].map(([lbl,o,tn])=>(
              <tr key={lbl} style={{ opacity: lbl==="Target"?0.7:1 }}>
                <td style={{ fontWeight:700, color:T(tn), fontSize:11.5, textTransform:"none", letterSpacing:"0.05em" }}>{lbl}</td>
                <td className="num" style={{textAlign:"right"}}>{o.spend?fmt.usd(o.spend):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.ord?fmt.n(o.ord):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.nc?fmt.usd(o.nc):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.amer?o.amer.toFixed(2)+"x":"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.mer?o.mer.toFixed(2)+"x":"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.nNew?fmt.n(o.nNew):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.$new?fmt.usd(o.$new):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.nRet?fmt.n(o.nRet):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.$ret?fmt.usd(o.$ret):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.tot?fmt.n(o.tot):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.ncrev?fmt.pct(o.ncrev):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.naov?fmt.usd(o.naov,2):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.ncac?fmt.usd(o.ncac,2):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.roas?o.roas.toFixed(2)+"x":"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.rev?fmt.usd(o.rev):"-"}</td>
                <td className="num" style={{textAlign:"right"}}>{o.gm?fmt.usd(o.gm):"-"}</td>
                <td className="num" style={{textAlign:"right", fontWeight:600}}>{o.profit?fmt.usd(o.profit):"-"}</td>
              </tr>))}
          </tbody>
        </table></div>
      </Card>

      <Note tone="info" icon="i">{D3.defs.sep}</Note>
      <DefFooter/>
    </div>
  );
}

/* ============================== COHORT LTV ============================== */
function Cohort() {
  const c = D3.cohort;
  const [by, setBy] = useState("product");
  const set = by === "product" ? c.byProduct : c.byCoupon;
  const maxAov = Math.max(...c.aovByCategory.map(a=>a.aov));

  // LTV curve
  const W=680, H=300, PAD={l:52,r:18,t:16,b:34};
  const iw=W-PAD.l-PAD.r, ih=H-PAD.t-PAD.b;
  const keys=["aov","m1","m2","m3","m6","m12"];
  const hi = Math.max(...set.rows.flatMap(r=>keys.map(k=>r[k])))*1.08;
  const X=i=>PAD.l+(i/(keys.length-1))*iw, Y=v=>PAD.t+ih-(v/hi)*ih;

  return (
    <div className="page-in">
      <PageHead title="Cohort LTV and offer economics" sub={c.def}
        right={<Seg options={[{v:"product",l:"By product"},{v:"coupon",l:"By coupon"}]} value={by} onChange={setBy}/>} />

      <G c={4} style={{ marginBottom:22 }}>{set.head.map(k=><KPI key={k.label} {...k}/>)}</G>

      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.4fr 1fr", marginBottom:22 }}>
        <Card pad={20}>
          <SecLabel icon="rev" right={by==="product"?"by product":"by coupon"}>
            LTV curve, cumulative net revenue per customer</SecLabel>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width:"100%", height:"auto" }}>
            {[0,.25,.5,.75,1].map(f=>(
              <g key={f}>
                <line x1={PAD.l} y1={Y(hi*f)} x2={W-PAD.r} y2={Y(hi*f)} stroke="var(--rule-soft)" strokeWidth="1"/>
                <text x={PAD.l-8} y={Y(hi*f)+3.5} textAnchor="end" fontSize="9.5" fill="var(--ink-mute)">
                  ${Math.round(hi*f)}</text>
              </g>))}
            {keys.map((k,i)=>(
              <text key={k} x={X(i)} y={H-PAD.b+17} textAnchor="middle" fontSize="9.5" fill="var(--ink-mute)">
                {c.marks[i]}</text>))}
            {set.rows.map(r=>(
              <g key={r.n}>
                <polyline points={keys.map((k,i)=>`${X(i)},${Y(r[k])}`).join(" ")}
                  fill="none" stroke={T(r.tone)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                {keys.map((k,i)=><circle key={k} cx={X(i)} cy={Y(r[k])} r="2.4" fill={T(r.tone)}/>)}
              </g>))}
          </svg>
          <div style={{ display:"flex", flexWrap:"wrap", gap:9, marginTop:14 }}>
            {set.rows.map(r=>(
              <span key={r.n} style={{ display:"inline-flex", alignItems:"center", gap:6,
                border:"1px solid var(--rule)", borderRadius:"var(--r-sm)", padding:"4px 9px", fontSize:11 }}>
                <span className="dot" style={{ background:T(r.tone) }}/>{r.n}</span>))}
          </div>
        </Card>

        <Card pad={20}>
          <SecLabel icon="chart" right="by category">First-order AOV</SecLabel>
          {c.aovByCategory.map(a=>(
            <div key={a.n} style={{ marginBottom:16 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                <span style={{ fontSize:13, fontWeight:500 }}>{a.n}</span>
                <span className="mono" style={{ fontSize:13.5, fontWeight:600 }}>{fmt.usd(a.aov,2)}</span>
              </div>
              <Bar pct={(a.aov/maxAov)*100} tone={a.tone} h={7}/>
              <p style={{ fontSize:10.5, color:"var(--ink-mute)", marginTop:5 }}>
                {fmt.n(a.c)} customers · {a.x.toFixed(2)}x to M12</p>
            </div>))}
        </Card>
      </G>

      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Cohort ({by})</th><th style={{textAlign:"right"}}>Customers</th>
            <th style={{textAlign:"right"}}>First-order AOV</th>
            {["M1","M2","M3","M6","M12"].map(m=><th key={m} style={{textAlign:"right"}}>LTV {m}</th>)}
            <th style={{textAlign:"right"}}>M12 x AOV</th></tr></thead>
          <tbody>{set.rows.map(r=>(
            <tr key={r.n}>
              <td><span style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span className="dot" style={{ background:T(r.tone) }}/>
                <span style={{ fontWeight:600 }}>{r.n}</span></span></td>
              <td className="num" style={{textAlign:"right"}}>{fmt.n(r.c)}</td>
              <td className="num" style={{textAlign:"right"}}>{fmt.usd(r.aov,2)}</td>
              {["m1","m2","m3","m6","m12"].map(k=>(
                <td key={k} className="num" style={{textAlign:"right"}}>{fmt.usd(r[k],2)}</td>))}
              <td className="num" style={{textAlign:"right", fontWeight:700,
                color:r.x>=4?"var(--good)":r.x>=3?"var(--warn)":"var(--bad)"}}>{r.x.toFixed(2)}x</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <div style={{ height:14 }}/>
      <Note tone="info" icon="i">{c.basis}</Note>
      <DefFooter/>
    </div>
  );
}
