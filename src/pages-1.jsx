// pages-1.jsx, Boardroom, Goals, Org, Project Board, Money pages

/* ============================== BOARDROOM ============================== */
function Boardroom({ go, period }) {
  return (
    <div className="page-in">
      <PageHead title="Boardroom" sub={`The whole business in one view · ${period}`}
        meta="Live across cash, revenue, margin, subscriptions, inventory and the team." />

      <SecLabel icon="dollar" help="The eight numbers that describe whether this business is working.">Unit economics · {period}</SecLabel>
      <G c={4} name="4" style={{ marginBottom: 26 }}>
        {D.unit.map(u => <KPI key={u.k} {...u} onClick={() =>
          go(u.k==="cash"||u.k==="debt" ? "cash" : u.k==="cm"||u.k==="burn" ? "pl" :
             u.k==="appr" ? "rails" : "revenue")} />)}
      </G>

      <SecLabel icon="funnel" help="Where people fall out between landing on the site and rebilling a third time."
        right={`${PERIOD.label} window · site to third rebill`}>The funnel · {period}</SecLabel>
      <Card style={{ marginBottom: 26 }} pad={20}>
        {D.funnel.map((f,i) => (
          <FunnelRow key={f.label} label={f.label} value={f.v} pct={f.pct} note={f.note}
            a={i<3?"accent":i<5?"warn":"bad"} b={i<3?"info":i<5?"warn":"bad"} split={0.62} />
        ))}
        <div style={{ display:"flex", gap:16, marginTop:6, paddingTop:13, borderTop:"1px solid var(--rule-soft)" }}>
          <span style={{ fontSize:11, color:"var(--ink-mute)" }}>
            The steep drop is between paid order and subscription. Attach at 13.4% is where the compounding is lost.
          </span>
        </div>
      </Card>

      <G c={2} name="2" gap={16} style={{ marginBottom: 26 }}>
        <Card pad={20}>
          <SecLabel icon="pulse" right="live">Today on the floor</SecLabel>
          <G c={3} gap={14}>
            {D.today.map(t => (
              <div key={t.l}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.06em", textTransform:"none",
                              color:"var(--ink-mute)", marginBottom:3 }}>{t.l}</div>
                <div className="mono" style={{ fontSize:19, fontWeight:600, color:T(t.tone||"ink") }}>{t.v}</div>
              </div>
            ))}
          </G>
        </Card>
        <Card pad={20}>
          <SecLabel icon="chart" right="September, through the 17th">This month</SecLabel>
          <G c={3} gap={14}>
            {D.thisMonth.map(t => (
              <div key={t.l}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.06em", textTransform:"none",
                              color:"var(--ink-mute)", marginBottom:3 }}>{t.l}</div>
                <div className="mono" style={{ fontSize:19, fontWeight:600, color:T(t.tone||"ink") }}>{t.v}</div>
              </div>
            ))}
          </G>
        </Card>
      </G>

      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.5fr 1fr", marginBottom: 26 }}>
        <Card pad={20}>
          <DistributionsTrend h={168} />
        </Card>
        <Card pad={20}>
          <SecLabel icon="money" right="Mercury + BlueBanc">Cash position</SecLabel>
          <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:16 }}>
            <Donut v={40347} max={100000} size={96} tone="warn" label="$40K" sub="on hand" />
            <div style={{ display:"flex", flexDirection:"column", gap:10, minWidth:0 }}>
              {[["Operating floor","$22,500","accent"],["Free above floor","$17,847","good"],["Card headroom","$23,619","info"]].map(([l,v,t])=>(
                <div key={l}>
                  <div style={{ fontSize:9.5, fontWeight:700, letterSpacing:"0.06em", textTransform:"none", color:"var(--ink-mute)" }}>{l}</div>
                  <div className="mono" style={{ fontSize:15, fontWeight:600, color:T(t) }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <Line data={D.cashTrail} h={90} tone="warn" />
        </Card>
      </G>

      <SecLabel icon="alert" help="Things worth a look. Not a task list, just what the numbers are flagging."
        right="6 items">Action and watch items</SecLabel>
      <Card pad={18}>
        {D.attention.map((a,i)=>(
          <div key={i} style={{ display:"flex", gap:11, alignItems:"flex-start",
            padding:"10px 0", borderBottom: i<D.attention.length-1?"1px solid var(--rule-soft)":"none" }}>
            <span className="dot" style={{ background:T(a.tone), marginTop:7 }} />
            <span style={{ fontSize:12.5, color:"var(--ink-soft)" }}>{a.t}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* owner distributions by month, used on the Boardroom and Financials */
function DistributionsTrend({ h = 150 }) {
  const d = D.distributions, ytd = d.reduce((a, r) => a + r.v, 0);
  const paid = d.filter(r => r.v > 0).length;
  return (<>
    <SecLabel icon="money" right={`${fmt.usd(ytd)} this year`}
      help="What you've taken out of the business as owner, by month. Before the Sep 15 cut-over these were draws taken whenever cash allowed. From the cut-over, the Owner profit bucket takes 15% of every sweep.">Distributions trend</SecLabel>
    <BarChart data={d.map((r, i) => ({ ...r, tone: i === d.length - 1 ? "accent" : r.v ? "violet" : "info" }))} h={h} />
    <p style={{ fontSize:11.5, color:"var(--ink-mute)", marginTop:12 }}>
      {paid} of {d.length} months paid anything, and no two the same. September is month to date. From the cut-over the Owner
      profit bucket fills on every sweep, so this line should steady.
    </p>
  </>);
}

/* ============================== GOALS ============================== */
function Goals({ period }) {
  const [kept, setKept] = useState(() => D.goals.map((_, i) => i));
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState({ g:"", now:"", target:"" });
  const [extra, setExtra] = useState([]);
  const all = [...D.goals.filter((_, i) => kept.includes(i)), ...extra];
  const hit = all.filter(g => g.pct >= 90).length;

  return (
    <div className="page-in">
      <PageHead title="Goals and targets" sub="Where every number sits against where it should sit."
        meta="Ten to start. Delete the ones you aren't sure about, add the ones you want."
        right={<button onClick={()=>setAdding(a=>!a)}
          style={{ border:"1px solid var(--rule)", background: adding?"var(--accent)":"var(--surface-3)",
            color: adding?"#fff":"var(--ink-soft)", borderRadius:"var(--r-pill)", padding:"6px 14px",
            fontSize:12, fontWeight:600, cursor:"pointer" }}>
          {adding ? "Cancel" : "+ Add a goal"}</button>} />

      {adding && (
        <Card pad={16} style={{ marginBottom:18, borderColor:"var(--accent)" }}>
          <G c={4} gap={10}>
            {[["g","What are you measuring"],["now","Where it sits now"],["target","Where it should be"]].map(([k,ph])=>(
              <input key={k} value={draft[k]} placeholder={ph}
                onChange={e=>setDraft(d=>({...d,[k]:e.target.value}))}
                style={{ background:"var(--surface-3)", border:"1px solid var(--rule)",
                  borderRadius:"var(--r-sm)", padding:"8px 11px", color:"var(--ink)",
                  fontSize:12.5, fontFamily:"inherit", outline:"none" }} />
            ))}
            <button onClick={()=>{ if(!draft.g) return;
                setExtra(x=>[...x,{...draft, pct:50, tone:"warn", bench:null, note:"Added by you"}]);
                setDraft({g:"",now:"",target:""}); setAdding(false); }}
              style={{ border:"none", background:"var(--accent)", color:"#fff",
                borderRadius:"var(--r-sm)", padding:"8px 14px", fontSize:12.5,
                fontWeight:600, cursor:"pointer" }}>Add</button>
          </G>
        </Card>
      )}

      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Goals tracked" value={String(all.length)} tone="ink" sub={`${D.goals.length - kept.length} removed`} />
        <KPI label="On target" value={`${hit} of ${all.length}`} tone={hit>4?"good":"warn"} sub="at or above 90%" />
        <KPI label="Furthest behind" value="Cycle-3 retention" tone="bad" sub="11% against a 45% target" />
        <KPI label="Already ahead" value="Gross margin" tone="good" sub="90% against 85%" />
      </G>

      <Card pad={22}>
        <SecLabel icon="target" help="Current against target. The gray marker is the industry benchmark, not your target.">Scorecard</SecLabel>
        {all.map((g, i) => {
          const orig = D.goals.indexOf(g);
          return (
            <div key={g.g} style={{ position:"relative" }}>
              <button onClick={()=> orig >= 0
                  ? setKept(k => k.filter(x => x !== orig))
                  : setExtra(x => x.filter(y => y.g !== g.g))}
                title="Remove this goal"
                style={{ position:"absolute", right:0, top:13, width:20, height:20,
                  border:"1px solid var(--rule)", background:"transparent", color:"var(--ink-mute)",
                  borderRadius:5, cursor:"pointer", fontSize:12, lineHeight:1, padding:0,
                  display:"grid", placeItems:"center" }}>&times;</button>
              <div style={{ paddingRight:30 }}>
                <GoalRow label={g.g} now={g.now} target={g.target} pct={g.pct}
                  tone={g.tone} note={g.note} bench={g.bench} />
              </div>
            </div>
          );
        })}
        {all.length === 0 && (
          <p style={{ fontSize:12.5, color:"var(--ink-mute)", padding:"18px 0" }}>
            All goals removed. Add the ones you actually want to run against.
          </p>
        )}
      </Card>
    </div>
  );
}

/* ============================== PROJECT BOARD ============================== */
function Board() {
  const [open, setOpen] = useState(null);
  return (
    <div className="page-in">
      <PageHead title="Project board" sub="What's moving, what's stuck, and who has it."
        right={<Seg options={[{v:"all",l:"All"},{v:"mine",l:"Mine"}]} value="all" onChange={()=>{}} />} />
      <G c={4} gap={13}>
        {D.tasks.cols.map(col=>(
          <div key={col.k}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
                          padding:"0 4px 10px" }}>
              <span style={{ display:"flex", alignItems:"center", gap:7, fontSize:11.5, fontWeight:700,
                             letterSpacing:"0.05em", textTransform:"none", color:T(col.tone) }}>
                <span className="dot" style={{ background:T(col.tone) }} />{col.l}
              </span>
              <span style={{ fontSize:11, color:"var(--ink-mute)" }}>{col.items.length}</span>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {col.items.map((it,i)=>{
                const id = col.k+i, isOpen = open===id;
                return (
                  <Card key={id} pad={13} hover onClick={()=>setOpen(isOpen?null:id)}
                    style={{ cursor:"pointer", borderLeft:`3px solid ${T(col.tone)}` }}>
                    <div style={{ fontSize:12.5, fontWeight:500, marginBottom:8, lineHeight:1.4 }}>{it.t}</div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ display:"flex", alignItems:"center", gap:6, fontSize:11, color:"var(--ink-mute)" }}>
                        <Avatar name={it.who} size={18} tone="mute" />{it.who}
                      </span>
                      <Badge tone={it.p==="High"?"bad":it.p==="Med"?"warn":"mute"}>{it.p}</Badge>
                    </div>
                    {isOpen && <p style={{ fontSize:11, color:"var(--ink-soft)", marginTop:10,
                      paddingTop:10, borderTop:"1px solid var(--rule-soft)" }}>
                      Opened 4 days ago. No blockers recorded. Click again to collapse.</p>}
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </G>
    </div>
  );
}

/* ============================== CASH ============================== */
function Cash() {
  const [v, setV] = useState("buckets");
  return (
    <div className="page-in">
      <PageHead title="Cash and buckets" sub="What's spendable, and where every dollar routes on the way in."
        right={<Seg options={[{v:"buckets",l:"Buckets"},{v:"accounts",l:"Accounts"},{v:"flow",l:"Waterfall"}]} value={v} onChange={setV} />} />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Cash on hand" value="$40,347" tone="ink" sub="two banks" delta={-37.2} help="Mercury plus BlueBanc." />
        <KPI label="Operating floor" value="$22,500" tone="accent" sub="1.25 months of cost" help="The number operating never drops below." />
        <KPI label="Free above floor" value="$17,847" tone="good" sub="what buckets can take" />
        <KPI label="Card headroom" value="$23,619" tone="info" sub="49% utilized" delta={4623} />
      </G>

      {v==="buckets" && (
        <G c={5} name="5" gap={13} style={{ marginBottom:24 }}>
          {D.buckets.map(b=>(
            <Card key={b.n} pad={16} hover>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
                <span style={{ fontSize:13.5, fontWeight:600 }}>{b.n}</span>
                <Badge tone={b.tone}>{b.pct}%</Badge>
              </div>
              <div className="mono" style={{ fontSize:19, fontWeight:600, color:T(b.tone) }}>{fmt.usd(b.v)}</div>
              <div style={{ fontSize:11, color:"var(--ink-mute)", marginBottom:9 }}>of {fmt.usd(b.target)}</div>
              <Bar pct={(b.v/b.target)*100} tone={b.tone} />
            </Card>
          ))}
        </G>
      )}

      {v==="accounts" && (
        <Card pad={0} style={{ marginBottom:24 }}>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Account</th><th>Code</th><th>What it does</th><th style={{textAlign:"right"}}>Balance</th><th>Share</th></tr></thead>
            <tbody>{D.accounts.map(a=>(
              <tr key={a.n}>
                <td style={{ fontWeight:600 }}>{a.n}</td>
                <td className="num" style={{ color:"var(--ink-mute)" }}>{a.c}</td>
                <td style={{ color:"var(--ink-soft)", fontSize:12 }}>{a.role}</td>
                <td className="num" style={{ textAlign:"right", fontWeight:600, color:a.v?T(a.tone):"var(--ink-mute)" }}>{fmt.usd(a.v)}</td>
                <td style={{ width:130 }}><Bar pct={(a.v/40347)*100} tone={a.tone} /></td>
              </tr>))}</tbody>
          </table></div>
        </Card>
      )}

      {v==="flow" && (
        <Card pad={24} style={{ marginBottom:24 }}>
          {[{l:"Money settles in",v:"$46,814",t:"info",d:"All four rails land in BlueBanc, then sweep to Mercury"},
            {l:"Operating fills to the floor",v:"$22,500",t:"accent",d:"Rent, payroll, software, support"},
            {l:"Everything above sweeps",v:"$24,314",t:"good",d:"Splits five ways on the percentages you set"}].map((r,i)=>(
            <div key={i}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:16, alignItems:"center",
                padding:"15px 17px", background:TT(r.t), borderRadius:"var(--r-md)", border:`1px solid ${T(r.t)}26` }}>
                <div><div style={{ fontSize:13.5, fontWeight:600, marginBottom:3 }}>{r.l}</div>
                  <div style={{ fontSize:11.5, color:"var(--ink-soft)" }}>{r.d}</div></div>
                <span className="mono" style={{ fontSize:17, fontWeight:600, color:T(r.t) }}>{r.v}</span>
              </div>
              <div style={{ textAlign:"center", color:"var(--ink-mute)", padding:"5px 0" }}>↓</div>
            </div>
          ))}
          <G c={5} name="5" gap={9}>
            {D.buckets.map(b=>(
              <div key={b.n} style={{ padding:"13px 11px", background:"var(--surface-3)",
                borderRadius:"var(--r-md)", border:"1px solid var(--rule)", textAlign:"center" }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.05em", textTransform:"none",
                              color:"var(--ink-mute)", marginBottom:5 }}>{b.n}</div>
                <div className="mono" style={{ fontSize:16, fontWeight:600, color:T(b.tone) }}>{b.pct}%</div>
                <div className="mono" style={{ fontSize:10.5, color:"var(--ink-mute)", marginTop:3 }}>{fmt.usd(b.target)}</div>
              </div>
            ))}
          </G>
        </Card>
      )}

      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1.3fr 1fr" }}>
        <Card pad={20}>
          <SecLabel icon="chart" right="seven months">Cash trail</SecLabel>
          <Line data={D.cashTrail} h={170} tone="warn" vf={fmt.k} />
        </Card>
        <Card pad={20}>
          <SecLabel icon="clock" right="next 30 days">Committed outflows</SecLabel>
          {[["Next 7 days",6420,"warn","Rent, software, support"],
            ["8 to 14 days",3100,"info","3PL invoice, ingredients"],
            ["15 to 30 days",9481,"bad","Buyout payment Oct 1"]].map(([l,v,t,d])=>(
            <div key={l} style={{ marginBottom:14 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                <span style={{ fontSize:12.5 }}>{l}</span>
                <span className="mono" style={{ fontSize:13, fontWeight:600, color:T(t) }}>{fmt.usd(v)}</span>
              </div>
              <Bar pct={(v/19001)*100} tone={t} />
              <p style={{ fontSize:10.5, color:"var(--ink-mute)", marginTop:4 }}>{d}</p>
            </div>
          ))}
        </Card>
      </G>
    </div>
  );
}

/* ============================== P&L ============================== */
function PL() {
  return (
    <div className="page-in">
      <PageHead title="Profit and loss" sub="The whole P&L on one page, against where a healthy DTC business sits."
        meta="Revenue less cost of delivery and marketing is contribution margin. Less fixed operating cost is operating profit. Debt service and distributions come after." />
      <Card pad={0} style={{ marginBottom:20 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Line</th><th style={{textAlign:"right"}}>Amount</th>
            <th style={{textAlign:"right"}}>% of revenue</th><th>Against benchmark</th>
            <th>Benchmark</th><th>What's in it</th></tr></thead>
          <tbody>{D.pl.map(r=>(
            <tr key={r.line} style={{ background:r.sub?"var(--surface-3)":undefined }}>
              <td style={{ fontWeight:r.sub?700:500 }}>{r.line}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:r.sub?700:400 }}>{fmt.usd(r.v)}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600, color:T(r.tone) }}>{r.pct?fmt.pct(r.pct):"-"}</td>
              <td style={{ width:150 }}>{r.bench && <Bar pct={Math.min(r.pct*2,100)} tone={r.tone} />}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:12 }}>{r.bench||"-"}</td>
              <td style={{ color:"var(--ink-soft)", fontSize:12 }}>{r.d||"-"}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="bad" icon="!">
        Your fixed operating cost is 30% of revenue. A healthy DTC business runs near 15%. That gap is about
        $7,000 a month and it's the largest single lever left on the cost side.
      </Note>
      <div style={{ height:24 }} />
      <CMDaily />
      <G c={1} gap={16}>
        <Card pad={20}>
          <SecLabel icon="chart">Fixed cost, monthly</SecLabel>
          <BarChart data={[{m:"Jun",v:28860,tone:"bad"},{m:"Jul",v:28860,tone:"bad"},{m:"Aug",v:21400,tone:"warn"},{m:"Sep",v:14050,tone:"good"},{m:"Oct",v:11050,tone:"good",dim:true}]} h={175}/>
          <p style={{ fontSize:11.5, color:"var(--ink-mute)", marginTop:11 }}>October is projected once email moves.</p>
        </Card>
      </G>
    </div>
  );
}

/* daily contribution margin, follows the period selector */
function CMDaily() {
  const all = D.cmDaily;
  const rows = (PERIOD.label === "MTD" ? all.filter(r => r.m === 9) : all.slice(-Math.min(PERIOD.days, all.length))).slice().reverse();
  const t = rows.reduce((a, r) => ({ rev:a.rev + r.rev, cod:a.cod + r.cod, mkt:a.mkt + r.mkt }), { rev:0, cod:0, mkt:0 });
  const cm = (r) => r.rev - r.cod - r.mkt;
  let run = 0;
  const cum = {}; all.forEach(r => { run = (r.d === "Sep 1" ? 0 : run) + cm(r); cum[r.d] = run; });
  const short = PERIOD.days > all.length;
  return (
    <Card pad={0} style={{ marginBottom:20 }}>
      <div style={{ padding:"18px 18px 4px" }}>
        <SecLabel icon="rev" right={`${rows.length} ${rows.length === 1 ? "day" : "days"}${short ? `, all ${all.length} on record` : ""} · newest first`}
          help="Revenue less cost of delivery and marketing, every day. Fixed costs are left out on purpose, so this is the number each day's sales actually earned.">Contribution margin, daily</SecLabel>
      </div>
      <div className="scroll-x" style={{ maxHeight:420, overflowY:"auto" }}><table className="tbl">
        <thead><tr><th>Date</th><th style={{textAlign:"right"}}>Revenue</th><th style={{textAlign:"right"}}>Cost of delivery</th>
          <th style={{textAlign:"right"}}>Marketing</th><th style={{textAlign:"right"}}>Contribution margin</th>
          <th style={{textAlign:"right"}}>Margin</th><th style={{textAlign:"right"}}>Month to date</th></tr></thead>
        <tbody>
          <tr style={{ background:"var(--surface-3)" }}>
            <td style={{ fontWeight:700 }}>Total</td>
            <td className="num" style={{ textAlign:"right", fontWeight:700 }}>{fmt.usd(t.rev)}</td>
            <td className="num" style={{ textAlign:"right", fontWeight:700 }}>-{fmt.usd(t.cod)}</td>
            <td className="num" style={{ textAlign:"right", fontWeight:700 }}>{t.mkt ? "-" + fmt.usd(t.mkt) : "$0"}</td>
            <td className="num" style={{ textAlign:"right", fontWeight:700, color:"var(--good)" }}>{fmt.usd(t.rev - t.cod - t.mkt)}</td>
            <td className="num" style={{ textAlign:"right", fontWeight:700 }}>{fmt.pct((t.rev - t.cod - t.mkt) / t.rev * 100)}</td>
            <td />
          </tr>
          {rows.map(r => (
          <tr key={r.d}>
            <td><span style={{ fontWeight:600 }}>{r.d}</span> <span style={{ fontSize:10.5, color:r.w==="Sat"||r.w==="Sun"?"var(--accent)":"var(--ink-mute)" }}>{r.w}</span></td>
            <td className="num" style={{ textAlign:"right" }}>{fmt.usd(r.rev)}</td>
            <td className="num" style={{ textAlign:"right", color:"var(--ink-soft)" }}>-{fmt.usd(r.cod)}</td>
            <td className="num" style={{ textAlign:"right", color:"var(--ink-mute)" }}>{r.mkt ? "-" + fmt.usd(r.mkt) : "$0"}</td>
            <td className="num" style={{ textAlign:"right", fontWeight:600, color:"var(--good)" }}>{fmt.usd(cm(r))}</td>
            <td className="num" style={{ textAlign:"right", color:"var(--ink-soft)" }}>{fmt.pct(cm(r) / r.rev * 100)}</td>
            <td className="num" style={{ textAlign:"right", color:"var(--ink-soft)" }}>{fmt.usd(cum[r.d])}</td>
          </tr>))}
        </tbody>
      </table></div>
    </Card>
  );
}

/* ============================== DEBT ============================== */
function Debt() {
  return (
    <div className="page-in">
      <PageHead title="Debt and obligations" sub="What's owed, to whom, and when it lands." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Total owed" value="$251,525" tone="ink" delta={-11.6} sub="down $33K in 30 days" />
        <KPI label="Next payment" value="$9,481" tone="warn" sub="Oct 1 · from debt bucket" />
        <KPI label="Card utilization" value="49%" tone="warn" sub="$23,081 of $46,700" />
        <KPI label="Payments remaining" value="8 of 9" tone="ink" sub="through May 2027" />
      </G>
      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.3fr" }}>
        <Card pad={20}>
          <SecLabel icon="money">What you owe</SecLabel>
          {D.debt.map(d=>(
            <div key={d.n} style={{ marginBottom:16 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                <span style={{ fontSize:13 }}>{d.n}</span>
                <span className="mono" style={{ fontSize:14, fontWeight:600, color:T(d.tone) }}>{fmt.usd(d.v)}</span>
              </div>
              <Bar pct={(d.v/251525)*100} tone={d.tone} />
              <p style={{ fontSize:10.5, color:"var(--ink-mute)", marginTop:5 }}>{d.note}</p>
            </div>
          ))}
        </Card>
        <Card pad={0}>
          <div style={{ padding:"18px 18px 0" }}><SecLabel icon="clock">Buyout schedule</SecLabel></div>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Date</th><th style={{textAlign:"right"}}>Amount</th><th>Status</th><th>Funded from</th></tr></thead>
            <tbody>{D.schedule.map(s=>(
              <tr key={s.d} style={{ opacity:s.s==="planned"?0.6:1 }}>
                <td style={{ fontWeight:s.s==="next"?600:400 }}>{s.d}</td>
                <td className="num" style={{ textAlign:"right" }}>{fmt.usd(s.v,2)}</td>
                <td>{s.s==="paid"?<Badge tone="good">Paid</Badge>:s.s==="next"?<Badge tone="warn" solid>Next</Badge>:<Badge tone="mute">Planned</Badge>}</td>
                <td style={{ fontSize:11.5, color:"var(--ink-mute)" }}>Debt service bucket</td>
              </tr>))}</tbody>
          </table></div>
        </Card>
      </G>
    </div>
  );
}

/* ============================== RAILS ============================== */
function Rails() {
  const tg = D.rails.reduce((s,r)=>s+r.gross,0), tf = D.rails.reduce((s,r)=>s+r.fees,0),
        tr = D.rails.reduce((s,r)=>s+r.res,0);
  return (
    <div className="page-in">
      <PageHead title="Payment rails" sub="All four processors, gross in, fees out, net to bank."
        meta="Nothing hides inside a deposit." />
      <G c={4} style={{ marginBottom:24 }}>
        <KPI label="Gross" value={fmt.usd(tg)} tone="ink" sub={PERIOD.label + ", all rails"} />
        <KPI label="Processing cost" value={fmt.usd(tf)} tone="bad" sub={fmt.pct((tf/tg)*100,2)+" all in"} help="Against a 1.5% discount rate. The gap is interchange." />
        <KPI label="Held in reserve" value={fmt.usd(tr)} tone="warn" sub="never released" />
        <KPI label="Net to bank" value={fmt.usd(tg-tf-tr)} tone="good" sub="what actually lands" />
      </G>
      <Card pad={0} style={{ marginBottom:20 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Rail</th><th style={{textAlign:"right"}}>Gross</th><th style={{textAlign:"right"}}>Fees</th>
            <th style={{textAlign:"right"}}>Reserve</th><th style={{textAlign:"right"}}>Net</th>
            <th style={{textAlign:"right"}}>All in</th><th style={{textAlign:"right"}}>Approval</th>
            <th style={{textAlign:"right"}}>Chargeback</th><th>Volume against cap</th></tr></thead>
          <tbody>{D.rails.map(r=>(
            <tr key={r.n}>
              <td style={{ fontWeight:600 }}>{r.n}</td>
              <td className="num" style={{ textAlign:"right" }}>{fmt.usd(r.gross)}</td>
              <td className="num" style={{ textAlign:"right", color:"var(--bad)" }}>{r.fees?"-"+fmt.usd(r.fees):"-"}</td>
              <td className="num" style={{ textAlign:"right", color:r.res?"var(--warn)":"var(--ink-mute)" }}>{r.res?"-"+fmt.usd(r.res):"-"}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600 }}>{fmt.usd(r.net)}</td>
              <td className="num" style={{ textAlign:"right", color:r.pct>4.5?"var(--bad)":"var(--warn)" }}>{r.pct?fmt.pct(r.pct,2):"-"}</td>
              <td className="num" style={{ textAlign:"right", color:r.appr>=95?"var(--good)":r.appr>=92?"var(--warn)":r.appr?"var(--bad)":"var(--ink-mute)" }}>{r.appr?fmt.pct(r.appr):"-"}</td>
              <td className="num" style={{ textAlign:"right" }}>{r.cb?fmt.pct(r.cb,2):"-"}</td>
              <td style={{ width:150 }}>{r.cap?<div>
                <Bar pct={((r.g30||r.gross)/r.cap)*100} tone={(r.g30||r.gross)/r.cap>0.8?"bad":(r.g30||r.gross)/r.cap>0.6?"warn":"good"} />
                <span className="mono" style={{ fontSize:9.5, color:"var(--ink-mute)" }}>{fmt.k(r.g30||r.gross)} of {fmt.k(r.cap)} · 30d</span>
              </div>:<span style={{ color:"var(--ink-mute)", fontSize:11 }}>-</span>}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="warn" icon="!">
        The Kurv rail is capped at $25,000 in any 30 day period, contractual, with termination rights on breach.
        Across all rails you top out near $125,000 a month. A $3M run rate needs about $250,000.
      </Note>
    </div>
  );
}
