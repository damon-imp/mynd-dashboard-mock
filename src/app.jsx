// app.jsx, shell: sidebar, top bar, live ticker, sub-tabs, routing

const NAV = [
  { g:"Home", icon:"home", items:[{ id:"boardroom", l:"Boardroom" }] },
  { g:"Exec", icon:"exec", items:[
    { id:"goals", l:"Goals & Targets" },
    { id:"scorecards", l:"Role Scorecards" },
    { id:"scorelog", l:"Score Log" },
    { id:"org", l:"Org Chart" },
    { id:"board", l:"Project Board", p2:true },
  ]},
  { g:"Money", icon:"money", items:[
    { id:"cash", l:"Cash & Buckets" },
    { id:"pl", l:"Profit & Loss" },
    { id:"debt", l:"Debt & Obligations" },
    { id:"rails", l:"Payment Rails" },
  ]},
  { g:"Revenue", icon:"rev", items:[
    { id:"revenue", l:"Overview" },
    { id:"retention", l:"Retention" },
    { id:"subs", l:"Subscriptions" },
    { id:"wholesale", l:"Wholesale" },
  ]},
  { g:"Marketing", icon:"mkt", items:[
    { id:"today", l:"Today So Far" },
    { id:"daily", l:"Daily Tracker" },
    { id:"cohort", l:"Cohort LTV" },
    { id:"mktperf", l:"Performance" },
    { id:"ltv", l:"CAC Ceiling" },
    { id:"attribution", l:"Attribution" },
    { id:"social", l:"Social" },
  ]},
  { g:"Operations", icon:"ops", items:[
    { id:"opshealth", l:"Customer Experience" },
    { id:"inventory", l:"Inventory" },
    { id:"fulfillment", l:"Fulfillment" },
    { id:"costtrend", l:"Cost Trend" },
    { id:"suppliers", l:"Suppliers" },
    { id:"production", l:"Production", p2:true },
  ]},
  { g:"Agents", icon:"agents", items:[{ id:"agents", l:"All Agents" }] },
  { g:"Team OS", icon:"team", items:[{ id:"vault", l:"Vault & Drive" }] },
  { g:"Admin", icon:"admin", items:[{ id:"data", l:"Data Health" }] },
];

const SUBTABS = {
  boardroom: ["Boardroom","Financials","Insights","System Health"],
  cash: ["Cash","Forecast","Transactions"],
  revenue: ["Overview","By Channel"],
  inventory: ["Inventory","Reorders","Movements"],

};

const PAGE_GROUP = {};
NAV.forEach(g => g.items.forEach(i => { PAGE_GROUP[i.id] = g.g; }));

function App() {
  useScore();
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState(() => {
    const h = (location.hash||"").replace("#","");
    return PAGE_GROUP[h] ? h : "boardroom";
  });
  const [period, setPeriod] = useState("30 days");
  const [range, setRange] = useState(["2026-09-01","2026-09-17"]);
  const customDays = rangeDays(range[0], range[1]);
  const pKey = period + (period==="Custom" ? ":" + customDays : "");
  const applied = useRef(null);
  if (applied.current !== pKey) { applyPeriod(period, customDays); applied.current = pKey; }
  const [openGroups, setOpenGroups] = useState(() => {
    const o = {}; NAV.forEach(g => o[g.g] = true); return o;
  });
  const [sideOpen, setSideOpen] = useState(false);
  const [sub, setSub] = useState(0);
  const [search, setSearch] = useState("");
  const [searchOn, setSearchOn] = useState(false);

  useEffect(()=>{ document.body.setAttribute("data-theme", theme); },[theme]);
  useEffect(()=>{
    const before = () => document.body.setAttribute("data-theme", "light");
    const after = () => document.body.setAttribute("data-theme", theme);
    addEventListener("beforeprint", before); addEventListener("afterprint", after);
    return () => { removeEventListener("beforeprint", before); removeEventListener("afterprint", after); };
  },[theme]);
  useEffect(()=>{ location.hash = page; setSub(0); setSideOpen(false); window.scrollTo({top:0,behavior:"smooth"}); },[page]);
  useEffect(()=>{
    const onHash = () => {
      const h = (location.hash||"").replace("#","");
      if (PAGE_GROUP[h] && h !== page) setPage(h);
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  },[page]);

  useEffect(()=>{
    const k = e => {
      if (e.target.tagName==="INPUT") { if(e.key==="Escape") setSearchOn(false); return; }
      if ((e.metaKey||e.ctrlKey) && e.key==="k") { e.preventDefault(); setSearchOn(true); }
      if (e.key==="t"||e.key==="T") setTheme(s=>s==="dark"?"light":"dark");
      if (e.key==="Escape") setSearchOn(false);
    };
    addEventListener("keydown",k); return ()=>removeEventListener("keydown",k);
  },[]);

  const all = NAV.flatMap(g=>g.items.map(i=>({...i, g:g.g})));
  const hits = search ? all.filter(i=>(i.l+" "+i.g).toLowerCase().includes(search.toLowerCase())) : all;

  const P = {
    boardroom:<Boardroom go={setPage} period={period}/>, goals:<Goals period={period}/>,
    scorecards:<TeamScorecards go={setPage}/>, scorelog:<ScoreLog/>, org:<TeamOrg go={setPage}/>,
    cash:<Cash/>, pl:<PL/>, debt:<Debt/>, rails:<Rails/>,
    revenue:<Revenue/>, retention:<Retention/>, subs:<Subs/>, wholesale:<Wholesale/>,
    today:<Today/>, daily:<Daily/>, cohort:<Cohort/>,
    mktperf:<MktPerf/>, ltv:<LTV/>, attribution:<Attribution/>, social:<Social/>,
    opshealth:<OpsHealth/>, inventory:<Inventory/>, fulfillment:<Fulfillment/>,
    costtrend:<CostTrend/>, suppliers:<Suppliers/>,
    production:<Phase2 title="Production" why="Runs, yields and cost per unit."
      when="The metrics here need simplifying before they're worth building. Cost trend already lives under Operations, which covers the part that matters today."/>,
    board:<Phase2 title="Project board" why="Tasks, owners and status."
      when="Not useful until everyone has access, ideally role specific. That access model comes first."/>,
    agents:<Agents/>, vault:<Vault/>, data:<DataHealth/>,
  }[page];

  const subs = SUBTABS[page];

  return (
    <div className="shell" data-open={sideOpen}>
      {sideOpen && <div className="side-scrim" onClick={()=>setSideOpen(false)} />}

      {/* ---------------- sidebar ---------------- */}
      <aside className="side">
        <div style={{ padding:"16px 16px 14px", borderBottom:"1px solid var(--rule)" }}>
          <img src="assets/mynd-logo.svg" alt="MYND" style={{ height:17, filter:"var(--logo-filter)" }} />
          <div style={{ fontSize:10, color:"var(--ink-mute)", marginTop:5 }} className="caps">Command center</div>
        </div>
        <nav style={{ flex:1, padding:"10px 0", overflowY:"auto" }}>
          {NAV.map(g=>{
            const open = openGroups[g.g];
            const active = g.items.some(i=>i.id===page);
            return (
              <div key={g.g} style={{ marginBottom:2 }}>
                <button className="nav-group-label" data-open={open||active}
                  onClick={()=>setOpenGroups(s=>({...s,[g.g]:!s[g.g]}))}>
                  <span style={{ display:"flex", alignItems:"center", gap:8 }}>
                    {active && <span style={{ width:2, height:11, background:"var(--accent)", borderRadius:2, marginLeft:-8, marginRight:2 }}/>}
                    <Ico n={g.icon} s={12}/>{g.g}
                  </span>
                  <span style={{ transform:open?"rotate(90deg)":"none", transition:"transform 180ms ease", display:"flex" }}>
                    <Ico n="chev" s={11}/>
                  </span>
                </button>
                {open && g.items.map(i=>(
                  <button key={i.id} className="nav-item" data-on={page===i.id} onClick={()=>setPage(i.id)}
                    style={i.p2?{opacity:0.55}:undefined}>
                    <span style={{flex:1}}>{i.l}</span>
                    {i.p2 && <span style={{fontSize:8.5,fontWeight:700,letterSpacing:"0.06em",
                      background:"var(--surface-3)",color:"var(--ink-mute)",padding:"1px 5px",
                      borderRadius:4}}>P2</span>}
                  </button>
                ))}
              </div>
            );
          })}
        </nav>
        <div style={{ padding:"13px 16px", borderTop:"1px solid var(--rule)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:11 }}>
            <Avatar name={D.meta.user} size={30}/>
            <div style={{ minWidth:0 }}>
              <div style={{ fontSize:12.5, fontWeight:600, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{D.meta.user}</div>
              <div style={{ fontSize:10.5, color:"var(--ink-mute)" }}>{D.meta.role}</div>
            </div>
          </div>
          <div style={{ display:"flex", gap:7 }}>
            {["Account","Sign out"].map(b=>(
              <button key={b} style={{ flex:1, border:"1px solid var(--rule)", background:"var(--surface-3)",
                borderRadius:"var(--r-sm)", padding:"6px 8px", fontSize:11, cursor:"pointer", color:"var(--ink-soft)" }}>{b}</button>
            ))}
          </div>
        </div>
      </aside>

      {/* ---------------- main ---------------- */}
      <div style={{ minWidth:0 }}>
        <header className="topbar">
          <button onClick={()=>setSideOpen(s=>!s)} aria-label="Menu"
            style={{ background:"none", border:"none", cursor:"pointer", color:"var(--ink-soft)", padding:4, display:"flex" }}>
            <Ico n="menu" s={18}/>
          </button>
          <img src="assets/mynd-logo.svg" alt="MYND" className="hide-sm" style={{ height:15, filter:"var(--logo-filter)" }}/>
          <button onClick={()=>setSearchOn(true)} style={{ display:"flex", alignItems:"center", gap:8,
            background:"var(--surface-3)", border:"1px solid var(--rule)", borderRadius:"var(--r-pill)",
            padding:"5px 12px", fontSize:12, color:"var(--ink-mute)", cursor:"pointer", minWidth:150 }}>
            <Ico n="search" s={13}/> Search
            <span className="mono hide-sm" style={{ marginLeft:"auto", fontSize:10, opacity:0.7 }}>⌘K</span>
          </button>
          <div style={{ flex:1 }}/>
          <span className="hide-sm" style={{ fontSize:11.5, color:"var(--ink-mute)" }}>{D.meta.updated} · {D.meta.tz}</span>
          <button onClick={()=>setTheme(t=>t==="dark"?"light":"dark")} aria-label="Theme"
            style={{ background:"var(--surface-3)", border:"1px solid var(--rule)", borderRadius:99,
              width:30, height:30, cursor:"pointer", display:"grid", placeItems:"center", color:"var(--ink-soft)" }}>
            {theme==="dark"
              ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
              : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>}
          </button>
          <button aria-label="Alerts" style={{ background:"none", border:"none", cursor:"pointer",
            color:"var(--ink-soft)", position:"relative", display:"flex", padding:4 }}>
            <Ico n="bell" s={17}/>
            <span style={{ position:"absolute", top:2, right:2, width:7, height:7, borderRadius:99,
              background:"var(--bad)", border:"1.5px solid var(--surface)" }}/>
          </button>
        </header>

        {/* live ticker */}
        <div className="ticker">
          <div className="ticker-track">
            {[0,1].map(dup=>(
              <div key={dup} style={{ display:"flex" }}>
                <span className="ticker-item caps" style={{ color:"var(--good)", fontWeight:600 }}>
                  <span className="dot" style={{ background:"var(--good)" }}/>Live
                </span>
                {[...D.ticker.slice(0,3), ownerTicker(), ...D.ticker.slice(3)].map((t,i)=>(
                  <span key={i} className="ticker-item">
                    <Ico n={t.i} s={12}/>{t.l}
                    <b className="mono" style={{ color:T(t.tone||"ink"), fontWeight:650 }}>{t.v}</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* sub tabs */}
        {subs && (
          <div className="subtabs">
            {subs.map((s,i)=>(
              <button key={s} className="subtab" data-on={sub===i} onClick={()=>setSub(i)}>{s}</button>
            ))}
          </div>
        )}

        <main className="pad main" style={{ padding:"26px 26px 70px", maxWidth:1680, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
                        gap:14, marginBottom:18, flexWrap:"wrap" }}>
            <span style={{ display:"flex", alignItems:"center", gap:8, fontSize:11.5, color:"var(--ink-mute)" }}>
              {PAGE_GROUP[page]} <Ico n="chev" s={10}/>
              <span style={{ color:"var(--ink-soft)" }}>{all.find(i=>i.id===page)?.l}</span>
            </span>
            <span style={{ display:"inline-flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
              {period==="Custom" && <CustomRange from={range[0]} to={range[1]} onChange={(a,b)=>setRange([a,b])} />}
              <Seg options={["1 day","7 days","30 days","90 days","MTD","Custom"]} value={period} onChange={setPeriod}/>
            </span>
          </div>
          <PeriodNote />
          <div key={pKey + ":" + sub}>
            {sub === 0 || !SUBVIEWS[page] ? P : React.createElement(SUBVIEWS[page][sub], { go:setPage })}
          </div>
        </main>

        <footer style={{ borderTop:"1px solid var(--rule)", padding:"18px 26px 34px",
          display:"flex", justifyContent:"space-between", gap:14, flexWrap:"wrap" }}>
          <span style={{ fontSize:11, color:"var(--ink-mute)" }}>MYND Command · Mock for review · Built by OpFix</span>
          <span style={{ fontSize:11, color:"var(--ink-mute)" }}>
            <b style={{ color:"var(--ink-soft)" }}>⌘K</b> search · <b style={{ color:"var(--ink-soft)" }}>T</b> theme
          </span>
        </footer>
      </div>

      {/* command palette */}
      {searchOn && (
        <div onClick={()=>setSearchOn(false)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)",
          zIndex:100, display:"flex", alignItems:"flex-start", justifyContent:"center", paddingTop:"12vh" }}>
          <div onClick={e=>e.stopPropagation()} style={{ width:"min(560px, 92vw)", background:"var(--surface)",
            border:"1px solid var(--rule)", borderRadius:"var(--r-lg)", boxShadow:"var(--shadow)", overflow:"hidden" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, padding:"14px 16px", borderBottom:"1px solid var(--rule)" }}>
              <Ico n="search" s={16}/>
              <input autoFocus value={search} onChange={e=>setSearch(e.target.value)} placeholder="Jump to a page..."
                style={{ flex:1, background:"none", border:"none", outline:"none", color:"var(--ink)", fontSize:14 }}/>
              <span className="mono" style={{ fontSize:10, color:"var(--ink-mute)" }}>ESC</span>
            </div>
            <div style={{ maxHeight:"46vh", overflowY:"auto", padding:6 }}>
              {hits.length===0 && <div style={{ padding:22, textAlign:"center", fontSize:12.5, color:"var(--ink-mute)" }}>Nothing matches.</div>}
              {hits.map(h=>(
                <button key={h.id} onClick={()=>{ setPage(h.id); setSearchOn(false); setSearch(""); }}
                  style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%",
                    padding:"10px 12px", background:"none", border:"none", borderRadius:"var(--r-sm)",
                    cursor:"pointer", fontSize:13, textAlign:"left" }}
                  onMouseEnter={e=>e.currentTarget.style.background="var(--surface-3)"}
                  onMouseLeave={e=>e.currentTarget.style.background="none"}>
                  <span>{h.l}</span>
                  <span style={{ fontSize:10.5, color:"var(--ink-mute)" }}>{h.g}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
