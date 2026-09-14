// ui.jsx, primitives. Pure SVG charts, no chart library.
const { useState, useEffect, useRef, useMemo } = React;

const fmt = {
  usd: (n, d = 0) => n == null ? "\u2014" : "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }),
  k: (n) => { if (n == null) return "\u2014"; const a = Math.abs(n);
    if (a >= 1e6) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1e6).toFixed(2) + "M";
    if (a >= 1000) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1000).toFixed(a >= 10000 ? 0 : 1) + "K";
    return (n < 0 ? "-$" : "$") + Math.abs(Math.round(n)); },
  pct: (n, d = 1) => n == null ? "\u2014" : Number(n).toFixed(d) + "%",
  n: (n) => n == null ? "\u2014" : Number(n).toLocaleString("en-US"),
};
const T = (t) => ({ good:"var(--good)", warn:"var(--warn)", bad:"var(--bad)", info:"var(--info)",
  accent:"var(--accent)", violet:"var(--violet)", mute:"var(--ink-mute)", ink:"var(--ink)" }[t] || "var(--ink)");
const TT = (t) => ({ good:"var(--good-tint)", warn:"var(--warn-tint)", bad:"var(--bad-tint)",
  info:"var(--info-tint)", accent:"var(--accent-tint)", violet:"var(--violet-tint)" }[t] || "var(--surface-3)");

function Help({ text }) {
  if (!text) return null;
  return <span className="help">?<span className="hb">{text}</span></span>;
}

function SecLabel({ icon, children, help, right }) {
  return (
    <div className="sec-label" style={{ justifyContent: "space-between" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {icon && <Ico n={icon} s={13} />}{children}<Help text={help} />
      </span>
      {right && <span style={{ fontSize: 10.5, fontWeight: 400, letterSpacing: 0,
                               textTransform: "none", color: "var(--ink-mute)" }}>{right}</span>}
    </div>
  );
}

function Card({ children, style, pad = 18, hover, ...r }) {
  return <div className={"card" + (hover ? " card-h" : "")} style={{ padding: pad, ...style }} {...r}>{children}</div>;
}

function G({ c = 4, gap = 11, children, style, name }) {
  return <div data-g={name || String(c)}
    style={{ display: "grid", gridTemplateColumns: `repeat(${c},minmax(0,1fr))`, gap, ...style }}>{children}</div>;
}

function Seg({ options, value, onChange, style, className }) {
  return (
    <div className={"seg" + (className ? " " + className : "")} style={style}>
      {options.map(o => {
        const v = typeof o === "string" ? o : o.v;
        const l = typeof o === "string" ? o : o.l;
        return <button key={v} data-on={value === v} onClick={() => onChange && onChange(v)}>{l}</button>;
      })}
    </div>
  );
}

function Badge({ children, tone = "mute", solid, style }) {
  return <span style={{ display:"inline-flex", alignItems:"center", gap:4,
    background: solid ? T(tone) : TT(tone), color: solid ? "#fff" : T(tone),
    border: solid ? "none" : `1px solid ${T(tone)}2E`, borderRadius:999, padding:"2px 8px",
    fontSize:10.5, fontWeight:650, whiteSpace:"nowrap", letterSpacing:"0.01em", ...style }}>{children}</span>;
}

function Spark({ data, tone = "accent", h = 30, fill = true }) {
  const lo = Math.min(...data), hi = Math.max(...data), r = hi - lo || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * 100},${28 - ((v - lo) / r) * 26}`).join(" ");
  const id = useMemo(() => "s" + Math.random().toString(36).slice(2, 7), []);
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width:"100%", height:h, overflow:"visible" }}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={T(tone)} stopOpacity="0.28"/><stop offset="100%" stopColor={T(tone)} stopOpacity="0"/>
      </linearGradient></defs>
      {fill && <polygon points={`0,30 ${pts} 100,30`} fill={`url(#${id})`} />}
      <polyline points={pts} fill="none" stroke={T(tone)} strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function KPI({ label, value, sub, delta, tone = "ink", help, spark, sparkTone, onClick, badge }) {
  return (
    <div className={"kpi" + (onClick ? " kpi-click" : "")} onClick={onClick}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:6 }}>
        <span style={{ display:"flex", alignItems:"center", gap:6, fontSize:10, fontWeight:700,
                       letterSpacing:"0.07em", textTransform:"uppercase", color:"var(--ink-mute)",
                       overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
          {label}<Help text={help} />
        </span>
        {badge}
      </div>
      <div style={{ display:"flex", alignItems:"baseline", gap:7, flexWrap:"wrap" }}>
        <span style={{ fontFamily:"var(--display)", fontSize:23, fontWeight:600,
                       letterSpacing:"-0.025em", color:T(tone), lineHeight:1.05 }}>{value}</span>
        {delta != null && delta !== 0 && (
          <span className="mono" style={{ fontSize:10.5, fontWeight:650, color: delta > 0 ? "var(--good)":"var(--bad)" }}>
            {delta > 0 ? "\u2197" : "\u2198"}{Math.abs(delta)}%
          </span>
        )}
      </div>
      {sub && <span style={{ fontSize:11, color:"var(--ink-mute)" }}>{sub}</span>}
      {spark && <div style={{ marginTop:2 }}><Spark data={spark} tone={sparkTone || tone} h={26} /></div>}
    </div>
  );
}

function Bar({ pct, tone = "accent", h = 5, style, track = true }) {
  return <div style={{ width:"100%", height:h, borderRadius:99,
    background: track ? "var(--surface-3)" : "transparent", overflow:"hidden", ...style }}>
    <div style={{ width: Math.max(0, Math.min(100, pct || 0)) + "%", height:"100%", borderRadius:99,
      background: T(tone), transition:"width 700ms cubic-bezier(.22,.68,0,1)" }} /></div>;
}

/* funnel row, Impruvu style: two-tone bar with count and share */
function FunnelRow({ label, value, share, pct, a = "accent", b = "good", split = 0.55, note }) {
  return (
    <div style={{ marginBottom: 13 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:5 }}>
        <span style={{ fontSize:10.5, fontWeight:700, letterSpacing:"0.07em",
                       textTransform:"uppercase", color:"var(--ink-mute)" }}>{label}</span>
        <span><span className="mono" style={{ fontSize:14, fontWeight:600 }}>{fmt.n(value)}</span>
          {note && <span style={{ fontSize:10.5, color:"var(--ink-mute)", marginLeft:7 }}>{note}</span>}</span>
      </div>
      <div style={{ display:"flex", height:9, borderRadius:99, overflow:"hidden",
                    background:"var(--surface-3)", width: pct + "%", minWidth:"3%",
                    transition:"width 700ms cubic-bezier(.22,.68,0,1)" }}>
        <div style={{ width:(split*100)+"%", background:T(a) }} />
        <div style={{ flex:1, background:T(b) }} />
      </div>
    </div>
  );
}

function BarChart({ data, h = 150, tone = "accent", vf = fmt.k, axis = true }) {
  const max = Math.max(...data.map(d => Math.abs(d.v))) || 1;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"flex-end", gap:5, height:h, borderBottom:"1px solid var(--rule)" }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"flex-end", height:"100%" }} title={`${d.m}: ${vf(d.v)}`}>
            <div style={{ height:(Math.abs(d.v)/max)*100+"%", background:T(d.tone||tone),
              borderRadius:"3px 3px 0 0", minHeight:2, opacity:d.dim?0.35:1,
              transition:"height 700ms cubic-bezier(.22,.68,0,1)" }} />
          </div>
        ))}
      </div>
      {axis && <div style={{ display:"flex", gap:5, marginTop:6 }}>
        {data.map((d,i)=><span key={i} style={{ flex:1, textAlign:"center", fontSize:9.5, color:"var(--ink-mute)" }}>{d.m}</span>)}
      </div>}
    </div>
  );
}

function HBars({ data, vf = fmt.k, tone = "accent", labelW = 150, showPct }) {
  const max = Math.max(...data.map(d => Math.abs(d.v))) || 1;
  const tot = data.reduce((s,d)=>s+Math.abs(d.v),0) || 1;
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
      {data.map((d,i)=>(
        <div key={i} style={{ display:"grid", gridTemplateColumns:`${labelW}px 1fr auto`, gap:11, alignItems:"center" }}>
          <span style={{ fontSize:12, color:"var(--ink-soft)", overflow:"hidden",
                         textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{d.m}</span>
          <div style={{ background:"var(--surface-3)", borderRadius:4, height:16, overflow:"hidden" }}>
            <div style={{ width:(Math.abs(d.v)/max)*100+"%", height:"100%", background:T(d.tone||tone),
              borderRadius:4, transition:"width 700ms cubic-bezier(.22,.68,0,1)" }} />
          </div>
          <span style={{ textAlign:"right", whiteSpace:"nowrap" }}>
            <span className="mono" style={{ fontSize:12, fontWeight:600 }}>{vf(d.v)}</span>
            {showPct && <span style={{ fontSize:10, color:"var(--ink-mute)", marginLeft:6 }}>
              {((Math.abs(d.v)/tot)*100).toFixed(0)}%</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

function Line({ data, h = 170, tone = "good", vf = (v)=>v, target, tLabel, yMin, yMax }) {
  const vals = data.map(d => d.v);
  const lo = yMin != null ? yMin : Math.min(...vals, target ?? Infinity) * 0.9;
  const hi = yMax != null ? yMax : Math.max(...vals, target ?? -Infinity) * 1.08;
  const X = i => (i/(data.length-1))*100, Y = v => 100 - ((v-lo)/(hi-lo))*100;
  const pts = vals.map((v,i)=>`${X(i)},${Y(v)}`).join(" ");
  const id = useMemo(()=>"l"+Math.random().toString(36).slice(2,7),[]);
  return (
    <div>
      <div style={{ position:"relative", height:h }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width:"100%", height:"100%", overflow:"visible" }}>
          <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={T(tone)} stopOpacity="0.22"/><stop offset="100%" stopColor={T(tone)} stopOpacity="0"/>
          </linearGradient></defs>
          {[0,25,50,75,100].map(g=><line key={g} x1="0" y1={g} x2="100" y2={g} stroke="var(--rule-soft)" strokeWidth="0.4" vectorEffect="non-scaling-stroke"/>)}
          {target!=null && <line x1="0" y1={Y(target)} x2="100" y2={Y(target)} stroke="var(--warn)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke"/>}
          <polygon points={`0,100 ${pts} 100,100`} fill={`url(#${id})`} />
          <polyline points={pts} fill="none" stroke={T(tone)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
          {vals.map((v,i)=><circle key={i} cx={X(i)} cy={Y(v)} r="2.2" fill="var(--surface)" stroke={T(tone)} strokeWidth="1.6" vectorEffect="non-scaling-stroke"/>)}
        </svg>
        {target!=null && tLabel && <span style={{ position:"absolute", right:0, top:Y(target)+"%",
          transform:"translateY(-130%)", fontSize:9.5, color:"var(--warn)", fontWeight:600 }}>{tLabel}</span>}
      </div>
      <div style={{ display:"flex", marginTop:7 }}>
        {data.map((d,i)=><span key={i} style={{ flex:1, textAlign:"center", fontSize:9.5, color:"var(--ink-mute)" }}>{d.m}</span>)}
      </div>
    </div>
  );
}

function Donut({ v, max = 100, size = 104, sw = 9, tone = "accent", label, sub }) {
  const r = (size-sw)/2, c = 2*Math.PI*r, p = Math.max(0, Math.min(1, v/max));
  return (
    <div style={{ position:"relative", width:size, height:size, flexShrink:0 }}>
      <svg width={size} height={size} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={sw}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={T(tone)} strokeWidth={sw} strokeLinecap="round"
          strokeDasharray={`${c*p} ${c}`} style={{ transition:"stroke-dasharray 800ms cubic-bezier(.22,.68,0,1)" }}/>
      </svg>
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column",
                    alignItems:"center", justifyContent:"center" }}>
        <span style={{ fontFamily:"var(--display)", fontSize:size/5, fontWeight:600, letterSpacing:"-0.02em" }}>{label}</span>
        {sub && <span style={{ fontSize:9.5, color:"var(--ink-mute)" }}>{sub}</span>}
      </div>
    </div>
  );
}

/* goal row: current vs target with a benchmark marker */
function GoalRow({ label, now, target, unit = "", pct, tone, note, bench }) {
  return (
    <div style={{ padding:"13px 0", borderBottom:"1px solid var(--rule-soft)" }}>
      <div style={{ display:"flex", justifyContent:"space-between", gap:12, marginBottom:7, flexWrap:"wrap" }}>
        <span style={{ fontSize:13, fontWeight:500 }}>{label}</span>
        <span style={{ display:"flex", alignItems:"baseline", gap:8 }}>
          <span className="mono" style={{ fontSize:14, fontWeight:600, color:T(tone) }}>{now}{unit}</span>
          <span style={{ fontSize:11, color:"var(--ink-mute)" }}>target {target}{unit}</span>
        </span>
      </div>
      <div style={{ position:"relative" }}>
        <Bar pct={pct} tone={tone} h={7} />
        {bench != null && <span style={{ position:"absolute", left:bench+"%", top:-2, bottom:-2, width:2,
          background:"var(--ink-soft)", borderRadius:2 }} title="benchmark" />}
      </div>
      {note && <p style={{ fontSize:10.5, color:"var(--ink-mute)", marginTop:6 }}>{note}</p>}
    </div>
  );
}

function Note({ children, tone = "info", icon = "i" }) {
  return <div style={{ display:"flex", gap:10, alignItems:"flex-start", background:TT(tone),
    border:`1px solid ${T(tone)}26`, borderRadius:"var(--r-md)", padding:"13px 15px" }}>
    <span style={{ width:16, height:16, borderRadius:99, background:T(tone), color:"#fff",
      fontSize:10, fontWeight:800, display:"grid", placeItems:"center", flexShrink:0, marginTop:1 }}>{icon}</span>
    <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.55 }}>{children}</p></div>;
}

function PageHead({ title, sub, right, meta }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start",
                  gap:18, flexWrap:"wrap", marginBottom:22 }}>
      <div style={{ minWidth:0, flex:"1 1 300px" }}>
        <h1 style={{ fontSize:23, marginBottom:5 }}>{title}</h1>
        {sub && <p style={{ fontSize:13, color:"var(--ink-soft)" }}>{sub}</p>}
        {meta && <p style={{ fontSize:11, color:"var(--ink-mute)", marginTop:5 }}>{meta}</p>}
      </div>
      {right}
    </div>
  );
}

function Empty({ title, note, tag = "Planned" }) {
  return <Card pad={34} style={{ borderStyle:"dashed", background:"transparent", textAlign:"center" }}>
    <Badge tone="mute" style={{ marginBottom:12 }}>{tag}</Badge>
    <h3 style={{ fontSize:16, marginBottom:7 }}>{title}</h3>
    <p style={{ fontSize:12.5, color:"var(--ink-soft)", maxWidth:460, margin:"0 auto", lineHeight:1.6 }}>{note}</p>
  </Card>;
}

function Avatar({ name, size = 26, tone = "accent" }) {
  const init = name.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
  return <span style={{ width:size, height:size, borderRadius:99, background:TT(tone), color:T(tone),
    display:"grid", placeItems:"center", fontSize:size*0.38, fontWeight:700, flexShrink:0 }}>{init}</span>;
}

function Ico({ n, s = 15 }) {
  const p = {
    home:<><path d="M3 10.5L12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/></>,
    exec:<><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
    money:<><rect x="2.5" y="6" width="19" height="13" rx="2.5"/><path d="M2.5 10.5h19M17 15h.01"/></>,
    rev:<><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></>,
    mkt:<><path d="M3 11l16-7v16L3 13z"/><path d="M7 12.5V19"/></>,
    ops:<><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></>,
    agents:<><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9.5 16h5"/></>,
    team:<><circle cx="9" cy="8" r="3"/><path d="M2.5 20c0-3.5 2.9-5.8 6.5-5.8s6.5 2.3 6.5 5.8"/><path d="M16.5 5.6a3 3 0 010 5.3M18.5 20c0-2.3-.8-4.2-2.2-5.4"/></>,
    admin:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.6 1.6 0 007 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H1a2 2 0 110-4h.1A1.6 1.6 0 002.6 7a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H7a1.6 1.6 0 001-1.5V1a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V7a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z"/></>,
    dollar:<><path d="M12 2v20M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.6 7 6.5s2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3"/></>,
    funnel:<><path d="M3 4h18l-7 8v7l-4 2v-9z"/></>,
    pulse:<><path d="M2.5 12h4L9 5l4 14 2.5-7h6"/></>,
    box:<><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></>,
    alert:<><path d="M12 3l9.5 17H2.5z"/><path d="M12 9.5v4M12 17h.01"/></>,
    target:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3"/></>,
    chart:<><path d="M5 20V10M12 20V4M19 20v-7"/></>,
    lock:<><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 018 0v3"/></>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5.5l3.5 2"/></>,
    bell:<><path d="M18 8.5a6 6 0 10-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14.5 18 8.5z"/><path d="M13.7 20a2 2 0 01-3.4 0"/></>,
    search:<><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></>,
    menu:<><path d="M3 6h18M3 12h18M3 18h18"/></>,
    chev:<><path d="M9 6l6 6-6 6"/></>,
    user:<><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></>,
    file:<><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/></>,
    truck:<><rect x="1.5" y="6.5" width="13" height="9" rx="1.5"/><path d="M14.5 9.5h4l3 3v3h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    factory:<><path d="M3 21V10l5.5 3.5V10L14 13.5V7l7 4v10z"/></>,
  }[n];
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>{p}</svg>;
}
