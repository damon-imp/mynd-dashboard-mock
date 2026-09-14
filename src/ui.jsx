// ui.jsx — primitives and charts. No external chart library, everything is SVG
// so the payload runs offline and pushes anywhere.

const { useState, useEffect, useRef, useMemo } = React;

/* ------------------------------------------------------------ formatting */
const fmt = {
  usd: (n, d = 0) =>
    n === null || n === undefined
      ? "unknown"
      : "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }),
  usdK: (n) => {
    if (n === null || n === undefined) return "unknown";
    const a = Math.abs(n);
    if (a >= 1000000) return "$" + (n / 1000000).toFixed(2) + "M";
    if (a >= 1000) return "$" + Math.round(n / 1000) + "K";
    return "$" + Math.round(n);
  },
  pct: (n, d = 1) => (n === null || n === undefined ? "unknown" : Number(n).toFixed(d) + "%"),
  num: (n) => (n === null || n === undefined ? "unknown" : Number(n).toLocaleString("en-US")),
};

const toneVar = (t) =>
  ({ good: "var(--good)", warn: "var(--warn)", bad: "var(--bad)", info: "var(--info)",
     accent: "var(--accent)", mute: "var(--ink-mute)", neutral: "var(--ink)" }[t] || "var(--ink)");
const toneTint = (t) =>
  ({ good: "var(--good-tint)", warn: "var(--warn-tint)", bad: "var(--bad-tint)",
     info: "var(--info-tint)", accent: "var(--accent-tint)" }[t] || "var(--bg-3)");

/* ------------------------------------------------------------ Card */
function Card({ children, style, pad = 24, hover = false, ...rest }) {
  return (
    <div className={"card" + (hover ? " card-hover" : "")} style={{ padding: pad, ...style }} {...rest}>
      {children}
    </div>
  );
}

function SectionHead({ title, sub, right, style }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                  gap: 16, flexWrap: "wrap", marginBottom: 18, maxWidth: "100%", ...style }}>
      <div style={{ minWidth: 0, flex: "1 1 260px" }}>
        <h2 style={{ fontSize: 19.5, marginBottom: sub ? 7 : 0 }}>{title}</h2>
        {sub && <p style={{ fontSize: 13.5, color: "var(--ink-soft)", maxWidth: 760, lineHeight: 1.55 }}>{sub}</p>}
      </div>
      {right}
    </div>
  );
}

/* ------------------------------------------------------------ Badge */
function Badge({ children, tone = "mute", solid = false, style }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: solid ? toneVar(tone) : toneTint(tone),
      color: solid ? "#fff" : toneVar(tone),
      border: solid ? "none" : `1px solid ${toneVar(tone)}33`,
      borderRadius: 999, padding: "3px 9px", fontSize: 11, fontWeight: 600,
      letterSpacing: "0.01em", whiteSpace: "nowrap", ...style,
    }}>{children}</span>
  );
}

/* ------------------------------------------------------------ Trust pill */
const TRUST = {
  good:    { label: "Verified",     tone: "good" },
  mock:    { label: "Mock shape",   tone: "info" },
  blocked: { label: "Needs attribution", tone: "bad" },
  waiting: { label: "Waiting on data",   tone: "warn" },
};
function Trust({ level, style }) {
  const t = TRUST[level];
  if (!t) return null;
  return <Badge tone={t.tone} style={style}>{t.label}</Badge>;
}

/* ------------------------------------------------------------ Stat tile */
function Stat({ label, value, sub, delta, deltaLabel, tone = "neutral", trust, tip, onClick }) {
  const up = delta > 0;
  return (
    <Card hover={!!onClick} pad={20} onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span className="eyebrow tip" style={{ position: "relative" }}>
          {label}
          {tip && <span className="tip-body">{tip}</span>}
        </span>
        {trust && trust !== "good" && <Trust level={trust} />}
      </div>
      <div style={{ fontFamily: "var(--display)", fontSize: 27, fontWeight: 600,
                    letterSpacing: "-0.025em", color: toneVar(tone), lineHeight: 1.05 }}>
        {value}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        {sub && <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>{sub}</span>}
        {delta !== undefined && delta !== 0 && (
          <span className="mono" style={{ fontSize: 11, fontWeight: 600,
            color: up ? "var(--good)" : "var(--bad)" }}>
            {up ? "▲" : "▼"} {Math.abs(delta) > 999 ? "" : Math.abs(delta).toFixed(1) + "% "}{deltaLabel}
          </span>
        )}
        {delta === 0 && deltaLabel && (
          <span style={{ fontSize: 11, color: "var(--ink-mute)" }}>{deltaLabel}</span>
        )}
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------ Segmented */
function Seg({ options, value, onChange, style, className }) {
  return (
    <div className={"seg" + (className ? " " + className : "")} style={style}>
      {options.map((o) => {
        const v = typeof o === "string" ? o : o.v;
        const l = typeof o === "string" ? o : o.l;
        return (
          <button key={v} data-on={value === v} onClick={() => onChange(v)}>{l}</button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------ Progress */
function Bar({ pct, tone = "accent", height = 6, track = true, style }) {
  const p = Math.max(0, Math.min(100, pct || 0));
  return (
    <div style={{ width: "100%", height, borderRadius: 99,
                  background: track ? "var(--bg-4)" : "transparent", overflow: "hidden", ...style }}>
      <div style={{ width: p + "%", height: "100%", borderRadius: 99,
                    background: toneVar(tone), transition: "width 700ms cubic-bezier(0.22,0.68,0,1)" }} />
    </div>
  );
}

/* ------------------------------------------------------------ Bar chart */
function BarChart({ data, height = 200, tone = "accent", valueFmt = fmt.usdK, showAxis = true, horizontal = false }) {
  const max = Math.max(...data.map((d) => Math.abs(d.v))) || 1;
  if (horizontal) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 1fr 74px",
                                gap: 12, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--ink-soft)", overflow: "hidden",
                           textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.m || d.label}</span>
            <div style={{ background: "var(--bg-4)", borderRadius: 4, height: 20, overflow: "hidden" }}>
              <div style={{ width: (Math.abs(d.v) / max) * 100 + "%", height: "100%",
                            background: toneVar(d.tone || tone), borderRadius: 4,
                            transition: "width 700ms cubic-bezier(0.22,0.68,0,1)" }} />
            </div>
            <span className="mono" style={{ fontSize: 11.5, textAlign: "right", color: "var(--ink)" }}>
              {valueFmt(d.v)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height,
                    borderBottom: "1px solid var(--rule)", paddingBottom: 0 }}>
        {data.map((d, i) => (
          <div key={i} className="tip" style={{ flex: 1, display: "flex", flexDirection: "column",
                                                 justifyContent: "flex-end", height: "100%", position: "relative" }}>
            <div style={{ height: (Math.abs(d.v) / max) * 100 + "%",
                          background: toneVar(d.tone || tone), borderRadius: "4px 4px 0 0",
                          minHeight: 3, transition: "height 700ms cubic-bezier(0.22,0.68,0,1)",
                          opacity: d.dim ? 0.4 : 1 }} />
            <span className="tip-body">{d.m || d.label}: {valueFmt(d.v)}</span>
          </div>
        ))}
      </div>
      {showAxis && (
        <div style={{ display: "flex", gap: 6, marginTop: 7 }}>
          {data.map((d, i) => (
            <span key={i} style={{ flex: 1, textAlign: "center", fontSize: 10.5, color: "var(--ink-mute)" }}>
              {d.m || d.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------ Line chart */
function LineChart({ data, height = 190, tone = "good", valueFmt = (v) => v, target, targetLabel, yMin, yMax }) {
  const vals = data.map((d) => d.v !== undefined ? d.v : d.rate);
  const lo = yMin !== undefined ? yMin : Math.min(...vals, target !== undefined ? target : Infinity) * 0.92;
  const hi = yMax !== undefined ? yMax : Math.max(...vals, target !== undefined ? target : -Infinity) * 1.06;
  const W = 100, H = 100;
  const x = (i) => (i / (data.length - 1)) * W;
  const y = (v) => H - ((v - lo) / (hi - lo)) * H;
  const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const area = `0,${H} ${pts} ${W},${H}`;
  const uid = useMemo(() => "g" + Math.random().toString(36).slice(2, 8), []);
  return (
    <div>
      <div style={{ position: "relative", height }}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
             style={{ width: "100%", height: "100%", overflow: "visible" }}>
          <defs>
            <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={toneVar(tone)} stopOpacity="0.22" />
              <stop offset="100%" stopColor={toneVar(tone)} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 25, 50, 75, 100].map((g) => (
            <line key={g} x1="0" y1={g} x2={W} y2={g}
                  stroke="var(--rule-soft)" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
          ))}
          {target !== undefined && (
            <line x1="0" y1={y(target)} x2={W} y2={y(target)}
                  stroke="var(--warn)" strokeWidth="1" strokeDasharray="3 3"
                  vectorEffect="non-scaling-stroke" />
          )}
          <polygon points={area} fill={`url(#${uid})`} />
          <polyline points={pts} fill="none" stroke={toneVar(tone)} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          {vals.map((v, i) => (
            <circle key={i} cx={x(i)} cy={y(v)} r="2.6" fill="var(--bg-2)"
                    stroke={toneVar(tone)} strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        {target !== undefined && targetLabel && (
          <span style={{ position: "absolute", right: 0, top: `${y(target)}%`,
                         transform: "translateY(-130%)", fontSize: 10, color: "var(--warn)",
                         fontWeight: 600 }}>{targetLabel}</span>
        )}
      </div>
      <div style={{ display: "flex", marginTop: 8 }}>
        {data.map((d, i) => (
          <span key={i} style={{ flex: 1, textAlign: "center", fontSize: 10.5, color: "var(--ink-mute)" }}>
            {d.m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Stacked bar */
function StackedBar({ segments, height = 34, showLabels = true }) {
  const total = segments.reduce((s, x) => s + x.v, 0) || 1;
  return (
    <div>
      <div style={{ display: "flex", height, borderRadius: 7, overflow: "hidden", background: "var(--bg-4)" }}>
        {segments.map((s, i) => (
          <div key={i} className="tip" style={{ width: (s.v / total) * 100 + "%",
                        background: toneVar(s.tone), position: "relative",
                        transition: "width 700ms cubic-bezier(0.22,0.68,0,1)" }}>
            <span className="tip-body">{s.label}: {fmt.usdK(s.v)} · {((s.v / total) * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
      {showLabels && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 11 }}>
          {segments.map((s, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6,
                                    fontSize: 12, color: "var(--ink-soft)" }}>
              <i style={{ width: 8, height: 8, borderRadius: 2, background: toneVar(s.tone) }} />
              {s.label}
              <span className="mono" style={{ color: "var(--ink)" }}>{fmt.usdK(s.v)}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------ Donut */
function Donut({ value, max = 100, size = 120, stroke = 11, tone = "accent", label, sub }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(1, value / max));
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-4)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={toneVar(tone)}
                strokeWidth={stroke} strokeLinecap="round"
                strokeDasharray={`${c * p} ${c}`}
                style={{ transition: "stroke-dasharray 800ms cubic-bezier(0.22,0.68,0,1)" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 1 }}>
        <span style={{ fontFamily: "var(--display)", fontSize: size / 5.2, fontWeight: 600,
                       letterSpacing: "-0.02em" }}>{label}</span>
        {sub && <span style={{ fontSize: 10, color: "var(--ink-mute)" }}>{sub}</span>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Scatter */
function Scatter({ points, height = 260, xLabel, yLabel, xFmt = fmt.usdK, yFmt = (v) => v }) {
  const PAD = { l: 46, r: 16, t: 14, b: 34 };
  const W = 620, H = height;
  const iw = W - PAD.l - PAD.r, ih = H - PAD.t - PAD.b;
  const xMax = Math.max(...points.map((p) => p.x)) * 1.15 || 1;
  const yMax = Math.max(...points.map((p) => p.y)) * 1.2 || 1;
  const px = (v) => PAD.l + (v / xMax) * iw;
  const py = (v) => PAD.t + ih - (v / yMax) * ih;
  const xT = [0, 0.25, 0.5, 0.75, 1].map((f) => f * xMax);
  const yT = [0, 0.25, 0.5, 0.75, 1].map((f) => f * yMax);
  const [hover, setHover] = useState(null);

  return (
    <div style={{ position: "relative" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
        {yT.map((v, i) => (
          <g key={"y" + i}>
            <line x1={PAD.l} y1={py(v)} x2={W - PAD.r} y2={py(v)} stroke="var(--rule-soft)" strokeWidth="1" />
            <text x={PAD.l - 8} y={py(v) + 3.5} textAnchor="end" fontSize="10" fill="var(--ink-mute)">
              {Math.round(v)}
            </text>
          </g>
        ))}
        {xT.map((v, i) => (
          <g key={"x" + i}>
            <line x1={px(v)} y1={PAD.t} x2={px(v)} y2={PAD.t + ih} stroke="var(--rule-soft)" strokeWidth="1" />
            <text x={px(v)} y={H - PAD.b + 16} textAnchor="middle" fontSize="10" fill="var(--ink-mute)">
              {xFmt(Math.round(v))}
            </text>
          </g>
        ))}
        {points.map((p, i) => (
          <circle key={i} cx={px(p.x)} cy={py(p.y)} r={(p.r || 16) / 2}
            fill={toneVar(p.tone)} fillOpacity={hover === i ? 1 : 0.85}
            stroke="var(--bg-2)" strokeWidth="2"
            style={{ cursor: "pointer", transition: "fill-opacity 160ms ease" }}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} />
        ))}
        {hover !== null && (
          <g pointerEvents="none">
            <rect x={Math.min(px(points[hover].x) + 10, W - 176)} y={py(points[hover].y) - 42}
                  width="166" height="46" rx="7" fill="var(--bg-4)" stroke="var(--rule)" />
            <text x={Math.min(px(points[hover].x) + 20, W - 166)} y={py(points[hover].y) - 25}
                  fontSize="11.5" fontWeight="600" fill="var(--ink)">{points[hover].label}</text>
            <text x={Math.min(px(points[hover].x) + 20, W - 166)} y={py(points[hover].y) - 10}
                  fontSize="10.5" fill="var(--ink-soft)">
              {xFmt(points[hover].x)} · {yFmt(points[hover].y)}
            </text>
          </g>
        )}
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11,
                    color: "var(--ink-soft)", marginTop: 2 }}>
        <span>{xLabel}</span><span>{yLabel}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Empty / blocked panel */
function Blocked({ title, note, fields }) {
  return (
    <Card pad={26} style={{ borderStyle: "dashed", background: "transparent" }}>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: "var(--bad-tint)",
                      display: "grid", placeItems: "center", flexShrink: 0 }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--bad)" strokeWidth="2">
            <circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16.5v.01" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ fontSize: 15, marginBottom: 6 }}>{title}</h3>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55, maxWidth: 660 }}>{note}</p>
          {fields && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 13 }}>
              {fields.map((f) => <Badge key={f} tone="mute">{f}</Badge>)}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------ Note strip */
function Note({ children, tone = "info", icon = "i" }) {
  return (
    <div style={{ display: "flex", gap: 11, alignItems: "flex-start",
                  background: toneTint(tone), border: `1px solid ${toneVar(tone)}26`,
                  borderRadius: "var(--r-md)", padding: "16px 18px" }}>
      <span style={{ width: 17, height: 17, borderRadius: 999, background: toneVar(tone),
                     color: "#fff", fontSize: 11, fontWeight: 700, display: "grid",
                     placeItems: "center", flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------ Grid helper */
function Grid({ cols = 4, gap = 20, children, style, name }) {
  return (
    <div data-grid={name || String(cols)}
         style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap, ...style }}>
      {children}
    </div>
  );
}
