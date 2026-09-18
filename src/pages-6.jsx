// pages-6.jsx, the team layer. Every seat is scored on every metric it's held
// to. Role scorecards, the score log and the org chart all read one store, so a
// number logged once shows everywhere it's used.

/* ------------------------------------------------------------ score store */
const SCORE_KEY = "mynd.scorelog.v2";
const ScoreStore = { mode:"sample", live:{}, focus:null, viewAs:"owner", clears:0, subs:new Set() };
try { const raw = localStorage.getItem(SCORE_KEY); if (raw) ScoreStore.live = JSON.parse(raw) || {}; } catch (e) {}

function scoreEmit() { ScoreStore.subs.forEach(f => f()); }
function useScore() {
  const [, force] = useState(0);
  useEffect(() => { const f = () => force(x => x + 1); ScoreStore.subs.add(f); return () => ScoreStore.subs.delete(f); }, []);
  return ScoreStore;
}
function scoreSet(k, v) { ScoreStore[k] = v; scoreEmit(); }
function scoreRow(mid) {
  const src = ScoreStore.mode === "sample" ? (SAMPLE_LOG[mid] || []) : (ScoreStore.live[mid] || []);
  return WEEKS.map((w, i) => (src[i] === undefined || src[i] === "" ? null : src[i]));
}
function scoreEnter(mid, i, raw) {
  const row = (ScoreStore.live[mid] || []).slice();
  const v = raw === "" ? null : Number(raw);
  row[i] = raw === "" || isNaN(v) ? null : v;
  ScoreStore.live = { ...ScoreStore.live, [mid]: row };
  try { localStorage.setItem(SCORE_KEY, JSON.stringify(ScoreStore.live)); } catch (e) {}
  scoreEmit();
}
function scoreClear() {
  ScoreStore.live = {}; ScoreStore.clears += 1;
  try { localStorage.removeItem(SCORE_KEY); } catch (e) {}
  scoreEmit();
}

/* ------------------------------------------------------------ status, same rules as the Metrics tracker */
function judge(m, latest, prior) {
  if (latest == null) return "Not measured";
  if (m.kind === "max") return latest <= m.v ? "On target" : "Off target";
  if (m.kind === "min") return latest >= m.v ? "On target" : "Off target";
  if (m.kind === "yes") return latest === 1 ? "On target" : "Off target";
  if (prior == null) return "Baseline";
  if (m.kind === "up") return latest > prior ? "Improving" : latest === prior ? "Flat" : "Slipping";
  return latest < prior ? "Improving" : latest === prior ? "On target" : "Slipping";   // flat or falling
}
const HOLD = { "On target":1, "Improving":1 }, WATCH = { "Flat":1, "Baseline":1 }, OFF = { "Off target":1, "Slipping":1 };
const ST_TONE = { "On target":"good", "Improving":"good", "Flat":"warn", "Baseline":"info",
  "Off target":"bad", "Slipping":"bad", "Not measured":"mute" };
const MEASURE_TONE = { "Measurable":"good", "Needs 30 days":"info", "Needs build":"warn", "Needs access":"warn",
  "Needs three runs":"warn", "Needs roadmap":"bad", "Needs attribution":"bad" };

// status of a metric as of week i: that week's entry against the last one before it
function statusAt(m, row, i) {
  const latest = row[i];
  if (latest == null) return null;
  let prior = null; for (let j = i - 1; j >= 0; j--) if (row[j] != null) { prior = row[j]; break; }
  return judge(m, latest, prior);
}
function metricRead(m) {
  const row = scoreRow(m.id);
  const idx = row.map((v, i) => v == null ? -1 : i).filter(i => i >= 0);
  const li = idx.length ? idx[idx.length - 1] : -1, pi = idx.length > 1 ? idx[idx.length - 2] : -1;
  const latest = li >= 0 ? row[li] : null, prior = pi >= 0 ? row[pi] : null;
  const st = judge(m, latest, prior);
  let streak = 0;                                   // entries in a row that were off, counting back from the latest
  for (let k = idx.length - 1; k >= 0; k--) { if (OFF[statusAt(m, row, idx[k])]) streak++; else break; }
  const dir = latest == null || prior == null || latest === prior ? 0 : latest > prior ? 1 : -1;
  return { m, row, latest, prior, li, st, streak, dir, entries: idx.length };
}
const seatById = (id) => SEATS.find(s => s.id === id);
const seatMetrics = (id) => METRICS.filter(m => m.seat === id);
function seatRead(s) {
  const reads = seatMetrics(s.id).map(metricRead);
  const n = (set) => reads.filter(r => set[r.st]).length;
  return { s, reads, primary: reads.find(r => r.m.primary), hold: n(HOLD), watch: n(WATCH), off: n(OFF),
    none: reads.filter(r => r.st === "Not measured").length, stuck: reads.filter(r => OFF[r.st]) };
}
// share of a seat's measured metrics holding as of week i, using each metric's latest entry up to then
function seatHealthAt(s, i) {
  let meas = 0, hold = 0, off = 0;
  seatMetrics(s.id).forEach(m => {
    const row = scoreRow(m.id); let j = i; while (j >= 0 && row[j] == null) j--;
    if (j < 0) return;
    const st = statusAt(m, row, j); meas++;
    if (HOLD[st]) hold++; else if (OFF[st]) off++;
  });
  if (!meas) return null;
  // watch states (flat, first entry) sit out of the share; all watch reads amber
  return { pct: hold + off ? hold / (hold + off) * 100 : 60, meas, hold, off };
}

function fmtM(m, v) {
  if (v == null) return "-";
  if (m.unit === "yes") return v === 1 ? "Yes" : "No";
  if (m.unit === "usd") return fmt.usd(v);
  if (m.unit === "pct") return (Number.isInteger(v) ? v : Number(v).toFixed(1)) + "%";
  if (m.unit === "h") return (Number.isInteger(v) ? v : Number(v).toFixed(1)) + " hrs";
  if (m.unit === "rate") return Number(v).toFixed(2) + " / $";
  return Number.isInteger(v) ? String(v) : Number(v).toFixed(1);
}
const lastWeek = () => Math.max(11, ...METRICS.map(m => scoreRow(m.id).reduce((a, v, i) => v != null ? i : a, -1)));

/* ------------------------------------------------------------ charts */
function Trend({ m, row, h = 150, compact, tone }) {
  const span = row.slice(0, lastWeek() + 1);
  const vals = span.filter(v => v != null);
  if (!vals.length) {
    return <div style={{ height:h, display:"grid", placeItems:"center", border:"1px dashed var(--rule)",
      borderRadius:"var(--r-md)", color:"var(--ink-mute)", fontSize:11 }}>Not measured yet</div>;
  }
  const tv = m.kind === "yes" ? null : m.v;
  let lo = Math.min(...vals, tv ?? Infinity), hi = Math.max(...vals, tv ?? -Infinity);
  if (m.unit === "yes") { lo = 0; hi = 1; }
  if (lo === hi) { lo -= 1; hi += 1; }
  const pad = (hi - lo) * 0.15; lo -= pad; hi += pad;
  const X = i => span.length === 1 ? 50 : (i / (span.length - 1)) * 100;
  const Y = v => 100 - ((v - lo) / (hi - lo)) * 100;
  const pts = span.map((v, i) => v == null ? null : [X(i), Y(v), statusAt(m, span, i)]).filter(Boolean);
  const line = tone && tone !== "mute" ? tone : "accent";
  return (
    <div>
      <div style={{ position:"relative", height:h }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width:"100%", height:"100%", overflow:"visible" }}>
          {!compact && [0,25,50,75,100].map(g => <line key={g} x1="0" y1={g} x2="100" y2={g} stroke="var(--rule-soft)" strokeWidth="0.4" vectorEffect="non-scaling-stroke"/>)}
          {tv != null && <line x1="0" y1={Y(tv)} x2="100" y2={Y(tv)} stroke="var(--warn)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke"/>}
          <polyline points={pts.map(p => p[0] + "," + p[1]).join(" ")} fill="none" stroke={T(line)} strokeOpacity="0.55"
            strokeWidth={compact ? 1.4 : 2} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
        </svg>
        {pts.map((p, i) => <span key={i} title={p[2]} style={{ position:"absolute", left:p[0] + "%", top:p[1] + "%",
          width:compact ? 6 : 8, height:compact ? 6 : 8, borderRadius:99, transform:"translate(-50%,-50%)",
          background:T(ST_TONE[p[2]]) }} />)}
        {!compact && tv != null && <span style={{ position:"absolute", right:0, top:Y(tv) + "%", transform:"translateY(-130%)",
          fontSize:9.5, color:"var(--warn)", fontWeight:600 }}>Target {fmtM(m, tv)}</span>}
      </div>
      {!compact && <div style={{ display:"flex", marginTop:6 }}>
        {span.map((v, i) => <span key={i} style={{ flex:1, textAlign:"center", fontSize:9, color:"var(--ink-mute)" }}>
          {i % 3 === 0 ? WEEKS[i] : ""}</span>)}
      </div>}
    </div>
  );
}

// one row per metric, one cell per week, colored by the status that week
function StatusStrip({ reads, weeks }) {
  return (
    <div className="scroll-x">
      <div style={{ display:"grid", gridTemplateColumns:`minmax(170px,1.4fr) repeat(${weeks},minmax(22px,1fr))`, gap:3, minWidth:520 }}>
        <span />
        {Array.from({ length:weeks }, (_, i) => <span key={i} style={{ fontSize:8.5, color:"var(--ink-mute)", textAlign:"center" }}>{i % 2 === 0 ? WEEKS[i] : ""}</span>)}
        {reads.map(r => <React.Fragment key={r.m.id}>
          <span style={{ fontSize:11, color:"var(--ink-soft)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontWeight:r.m.primary ? 600 : 400 }}>{r.m.name}</span>
          {Array.from({ length:weeks }, (_, i) => { const st = statusAt(r.m, r.row, i);
            return <span key={i} title={st ? `${WEEKS[i]}: ${fmtM(r.m, r.row[i])}, ${st}` : `${WEEKS[i]}: no entry`}
              style={{ height:16, borderRadius:3, background:st ? T(ST_TONE[st]) : "var(--surface-3)", opacity:st ? 0.85 : 1 }} />; })}
        </React.Fragment>)}
      </div>
    </div>
  );
}

function ModeSwitch() {
  const S = useScore();
  return <Seg options={[{ v:"sample", l:"Sample history" }, { v:"live", l:"Live log" }]} value={S.mode} onChange={v => scoreSet("mode", v)} />;
}
function ModeNote() {
  const S = useScore();
  return <p style={{ fontSize:11, color:"var(--ink-mute)", margin:"-12px 0 18px" }}>
    {S.mode === "sample"
      ? `Sample history, twelve modeled weeks across all ${METRICS.length} metrics. Switch to Live log to enter real numbers.`
      : "Live log. Numbers entered on the Score Log page. An empty week means not measured, not zero."}</p>;
}
const detailBtn = { border:"1px solid var(--rule)", background:"var(--surface-3)", color:"var(--ink-soft)",
  borderRadius:"var(--r-sm)", padding:"6px 11px", fontSize:11.5, fontWeight:600, cursor:"pointer" };
const Dot = ({ st }) => <span className="dot" style={{ background:T(ST_TONE[st]), flexShrink:0 }} />;

/* ============================== ROLE SCORECARDS ============================== */
function TeamScorecards({ go }) {
  const S = useScore();
  const seats = SEATS.map(seatRead);
  const all = seats.flatMap(x => x.reads);
  const cnt = (set) => all.filter(r => set[r.st]).length;
  const shown = S.viewAs === "owner" ? seats : seats.filter(x => x.s.id === S.viewAs || (S.viewAs === "coo" && x.s.id === "warehouse"));
  const focus = S.focus && shown.find(x => x.s.id === S.focus);
  const f = metricRead(METRICS.find(m => m.id === "f_dec"));
  const stuck = all.filter(r => OFF[r.st]).sort((a, b) => b.streak - a.streak);
  const weeks = lastWeek() + 1;
  return (
    <div className="page-in">
      <PageHead title="Role scorecards" sub="Every seat, scored on every metric it's held to. Everyone sees their own card. The owner sees all of them."
        right={<span style={{ display:"inline-flex", gap:10, alignItems:"center", flexWrap:"wrap" }}>
          <select value={S.viewAs} onChange={e => { scoreSet("viewAs", e.target.value); scoreSet("focus", null); }}
            aria-label="Viewing as" style={{ background:"var(--surface-3)", color:"var(--ink)", border:"1px solid var(--rule)",
            borderRadius:"var(--r-sm)", padding:"6px 9px", fontSize:12 }}>
            <option value="owner">Viewing as the owner, all seats</option>
            {SEATS.filter(s => !s.relationship && s.id !== "founder").map(s => <option key={s.id} value={s.id}>Viewing as {s.who}, {s.short}</option>)}
          </select>
          <ModeSwitch /></span>} />
      <ModeNote />

      {S.viewAs === "owner" && <>
        <G c={4} style={{ marginBottom:20 }}>
          <KPI label="Holding" value={String(cnt(HOLD))} tone="good" sub={`of ${all.length} metrics, on target or improving`} />
          <KPI label="Off" value={String(cnt(OFF))} tone="bad" sub="off target or slipping" />
          <KPI label="Watch" value={String(cnt(WATCH))} tone="warn" sub="flat, or a first entry" />
          <KPI label="Not measured" value={String(all.filter(r => r.st === "Not measured").length)} tone="mute" sub="measure still being built" />
        </G>

        <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.25fr", marginBottom:20 }}>
          <Card pad={20} style={{ borderLeft:"3px solid var(--accent)" }}>
            <div className="sec-label">The one that matters most</div>
            <div style={{ display:"flex", alignItems:"baseline", gap:10, flexWrap:"wrap", margin:"6px 0 6px" }}>
              <span className="mono" style={{ fontSize:30, fontWeight:600, color:T(ST_TONE[f.st] === "mute" ? "ink" : ST_TONE[f.st]) }}>{fmtM(f.m, f.latest)}</span>
              <span style={{ fontSize:12.5, color:"var(--ink-soft)" }}>decisions routed through the owner this week. Target under 5.</span>
            </div>
            <p style={{ fontSize:11.5, color:"var(--ink-mute)", lineHeight:1.55, marginBottom:10 }}>Every other number improves as this one falls, because most of them are held back by waiting on him.</p>
            <Trend m={f.m} row={f.row} h={96} tone={ST_TONE[f.st]} />
          </Card>
          <Card pad={0}>
            <div style={{ padding:"18px 18px 4px" }}>
              <SecLabel icon="alert" right="longest run first" help="Every metric that's off target or slipping right now, sorted by how many entries in a row it's been off. A long run is a failure mode, not a bad week.">Sticking points</SecLabel>
            </div>
            {stuck.length === 0
              ? <p style={{ padding:"8px 18px 20px", fontSize:12.5, color:"var(--ink-mute)" }}>Nothing's off right now.</p>
              : <div className="scroll-x"><table className="tbl">
                <thead><tr><th>Seat</th><th>Metric</th><th style={{ textAlign:"right" }}>Latest</th><th>Target</th><th style={{ textAlign:"right" }}>Off for</th></tr></thead>
                <tbody>{stuck.slice(0, 8).map(r => { const s = seatById(r.m.seat); return (
                  <tr key={r.m.id} className="clickable" onClick={() => scoreSet("focus", s.id)} style={{ cursor:"pointer" }}>
                    <td style={{ fontWeight:600, whiteSpace:"nowrap" }}>{s.short}</td>
                    <td style={{ fontSize:12 }}>{r.m.name}</td>
                    <td className="num" style={{ textAlign:"right", color:"var(--bad)", fontWeight:600, whiteSpace:"nowrap" }}>{fmtM(r.m, r.latest)}</td>
                    <td style={{ fontSize:11.5, color:"var(--ink-mute)" }}>{r.m.target}</td>
                    <td style={{ textAlign:"right", whiteSpace:"nowrap" }}><Badge tone={r.streak >= 3 ? "bad" : "warn"}>{r.streak} {r.streak === 1 ? "entry" : "entries"}</Badge></td>
                  </tr>); })}</tbody>
              </table></div>}
            {stuck.length > 8 && <p style={{ padding:"8px 18px 14px", fontSize:11, color:"var(--ink-mute)" }}>{stuck.length - 8} more on the seat cards below.</p>}
          </Card>
        </G>

        <Card pad={20} style={{ marginBottom:22 }}>
          <SecLabel icon="pulse" right="holding against off, by week"
            help="Each cell uses every metric's latest entry up to that week, and scores holding against off. Flat and first entries sit out. Gray means nothing measured yet.">Seat health over time</SecLabel>
          <div className="scroll-x">
            <div style={{ display:"grid", gridTemplateColumns:`minmax(130px,1fr) repeat(${weeks},minmax(24px,1fr))`, gap:3, minWidth:520 }}>
              <span />
              {Array.from({ length:weeks }, (_, i) => <span key={i} style={{ fontSize:8.5, color:"var(--ink-mute)", textAlign:"center" }}>{i % 2 === 0 ? WEEKS[i] : ""}</span>)}
              {SEATS.map(s => <React.Fragment key={s.id}>
                <span onClick={() => scoreSet("focus", s.id)} style={{ fontSize:11.5, color:"var(--ink-soft)", cursor:"pointer", whiteSpace:"nowrap" }}>{s.short}</span>
                {Array.from({ length:weeks }, (_, i) => { const hh = seatHealthAt(s, i);
                  const tone = !hh ? null : hh.pct >= 75 ? "good" : hh.pct >= 50 ? "warn" : "bad";
                  return <span key={i} title={hh ? `${WEEKS[i]}: ${hh.hold} holding, ${hh.off} off, ${hh.meas - hh.hold - hh.off} on watch` : `${WEEKS[i]}: nothing measured`}
                    style={{ height:18, borderRadius:3, background:tone ? T(tone) : "var(--surface-3)", opacity:tone ? 0.85 : 1 }} />; })}
              </React.Fragment>)}
            </div>
          </div>
        </Card>
      </>}

      <G c={3} name="3" gap={16} style={{ marginBottom:22 }}>
        {shown.map(x => { const { s, primary: p } = x; const on = S.focus === s.id; return (
          <Card key={s.id} pad={18} hover onClick={() => scoreSet("focus", on ? null : s.id)}
            style={{ cursor:"pointer", borderColor:on ? "var(--accent)" : undefined, display:"flex", flexDirection:"column", gap:10 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:10 }}>
              <div style={{ display:"flex", alignItems:"center", gap:9, minWidth:0 }}>
                <Avatar name={s.who} size={28} tone={x.off ? "bad" : "accent"} />
                <div style={{ minWidth:0 }}>
                  <div style={{ fontSize:13.5, fontWeight:600 }}>{s.seat}</div>
                  <div style={{ fontSize:11, color:"var(--ink-mute)" }}>{s.who}</div>
                </div>
              </div>
              <Badge tone={x.off ? "bad" : x.hold ? "good" : "mute"}>{x.off ? `${x.off} stuck` : x.hold ? "Holding" : "Not measured"}</Badge>
            </div>
            <div>
              <div style={{ fontSize:11, color:"var(--ink-mute)", marginBottom:2 }}>{p.m.name}</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:9, flexWrap:"wrap" }}>
                <span className="mono" style={{ fontSize:22, fontWeight:600, color:p.latest == null ? "var(--ink-mute)" : T(ST_TONE[p.st]) }}>{fmtM(p.m, p.latest)}</span>
                <Badge tone={ST_TONE[p.st]}>{p.st}</Badge>
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:6, paddingTop:9, borderTop:"1px solid var(--rule-soft)" }}>
              {x.reads.filter(r => !r.m.primary).map(r => (
                <div key={r.m.id} style={{ display:"grid", gridTemplateColumns:"auto 1fr auto", gap:8, alignItems:"center" }}>
                  <Dot st={r.st} />
                  <span style={{ fontSize:11.5, color:OFF[r.st] ? "var(--ink)" : "var(--ink-soft)", fontWeight:OFF[r.st] ? 600 : 400 }}>{r.m.name}</span>
                  <span className="mono" style={{ fontSize:11.5, color:r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st]), whiteSpace:"nowrap" }}>{fmtM(r.m, r.latest)}</span>
                </div>))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", gap:8, flexWrap:"wrap", fontSize:10.5, color:"var(--ink-mute)",
              paddingTop:8, borderTop:"1px solid var(--rule-soft)" }}>
              <span>{x.hold} of {x.reads.length} holding{x.none ? ` · ${x.none} not measured` : ""}</span>
              <Badge tone={MEASURE_TONE[s.measure]}>{s.measure}</Badge>
            </div>
          </Card>); })}
      </G>

      {focus && <SeatDetail x={focus} go={go} weeks={weeks} />}

      <Note tone="info" icon="i">
        When a seat is off, the colored dots show which metric it's stuck on. Look there before the person. Most of the time a
        number moves because something upstream of it changed, not because somebody stopped trying. Click any card for every trend.
      </Note>
    </div>
  );
}

function SeatDetail({ x, go, weeks }) {
  const { s } = x;
  return (
    <Card pad={22} style={{ marginBottom:22 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:14, flexWrap:"wrap", marginBottom:16 }}>
        <div style={{ minWidth:0, flex:"1 1 320px" }}>
          <h3 style={{ fontSize:17, marginBottom:5 }}>{s.seat} · {s.who}</h3>
          <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.55 }}>{s.line}</p>
          <p style={{ fontSize:11.5, color:"var(--ink-mute)", marginTop:6, lineHeight:1.55 }}>
            <b style={{ fontWeight:600 }}>Manages.</b> {s.manages}. <b style={{ fontWeight:600 }}>Doesn't.</b> {s.not} Role document: {s.doc}, in the Vault.</p>
        </div>
        <span style={{ display:"flex", gap:8 }}>
          <button onClick={() => go("scorelog")} style={detailBtn}>Open the log</button>
          <button onClick={() => go("org")} style={detailBtn}>See on the org chart</button>
        </span>
      </div>
      <SecLabel icon="target" right="each dot colored by its status that week">Every metric</SecLabel>
      <G c={2} name="2" gap={14} style={{ marginBottom:20 }}>
        {x.reads.map(r => (
          <div key={r.m.id} style={{ border:"1px solid var(--rule-soft)", borderRadius:"var(--r-md)", padding:14 }}>
            <div style={{ display:"flex", justifyContent:"space-between", gap:10, alignItems:"flex-start", marginBottom:8 }}>
              <div style={{ minWidth:0 }}>
                <div style={{ fontSize:12.5, fontWeight:r.m.primary ? 650 : 500 }}>{r.m.name}{r.m.primary && <span style={{ color:"var(--accent)", fontWeight:500 }}> · primary</span>}</div>
                <div style={{ fontSize:10.5, color:"var(--ink-mute)" }}>Target {r.m.target} · {r.m.cadence} · {r.m.source}</div>
              </div>
              <div style={{ textAlign:"right", flexShrink:0 }}>
                <div className="mono" style={{ fontSize:15, fontWeight:600, color:r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st]) }}>{fmtM(r.m, r.latest)}</div>
                <Badge tone={ST_TONE[r.st]}>{r.st}{OFF[r.st] && r.streak > 1 ? `, ${r.streak} entries` : ""}</Badge>
              </div>
            </div>
            <Trend m={r.m} row={r.row} h={84} tone={ST_TONE[r.st]} />
          </div>))}
      </G>
      <SecLabel icon="clock" right="green holding, amber flat, blue first entry, red off, gray no entry">Status by week</SecLabel>
      <StatusStrip reads={x.reads} weeks={weeks} />
    </Card>
  );
}

/* ============================== SCORE LOG ============================== */
function ScoreLog() {
  const S = useScore();
  const live = S.mode === "live";
  const shownWeeks = live ? WEEKS.length : 12;
  const exportCsv = () => {
    const head = ["Seat","Who","Metric","Primary","Target","Cadence","Source", ...WEEKS, "Latest","Prior","Status"];
    const lines = [head].concat(METRICS.map(m => { const r = metricRead(m), s = seatById(m.seat);
      return [s.seat, s.who, m.name, m.primary ? "Primary" : "", m.target, m.cadence, m.source,
        ...r.row.map(v => v == null ? "" : v), r.latest ?? "", r.prior ?? "", r.st]; }));
    const csv = lines.map(l => l.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type:"text/csv" }));
    a.download = `mynd_score_log_${S.mode}.csv`; a.click();
  };
  const inp = { width:60, background:"var(--surface-3)", border:"1px solid var(--rule)", borderRadius:6,
    color:"var(--ink)", padding:"5px 6px", fontSize:12, textAlign:"right", fontFamily:"var(--mono)" };
  const sticky = { position:"sticky", left:0, background:"var(--surface)", zIndex:1 };
  return (
    <div className="page-in">
      <PageHead title="Score log" sub="Every metric, every week it's read. Each entry is scored the moment it lands."
        right={<span style={{ display:"inline-flex", gap:10, alignItems:"center", flexWrap:"wrap" }}>
          <button onClick={exportCsv} style={detailBtn}>Export CSV</button>
          {live && <button onClick={() => { if (confirm("Clear every live entry?")) scoreClear(); }} style={detailBtn}>Clear live log</button>}
          <ModeSwitch /></span>} />
      <ModeNote />
      <Card pad={0} style={{ marginBottom:20 }} key={S.mode + ":" + S.clears}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr>
            <th style={{ ...sticky, minWidth:230 }}>Metric</th><th>Target</th>
            {WEEKS.slice(0, shownWeeks).map((w, i) => <th key={w} style={{ textAlign:"right", color:i === 0 ? "var(--accent)" : undefined }}>{w}</th>)}
            <th>Status</th>
          </tr></thead>
          <tbody>{SEATS.map(s => <React.Fragment key={s.id}>
            <tr><td colSpan={shownWeeks + 3} style={{ background:"var(--surface-3)", fontWeight:650, fontSize:12 }}>
              <span style={{ position:"sticky", left:13 }}>{s.seat} <span style={{ fontWeight:400, color:"var(--ink-mute)" }}>· {s.who}</span></span></td></tr>
            {seatMetrics(s.id).map(m => { const r = metricRead(m); return (
              <tr key={m.id}>
                <td style={sticky}>
                  <div style={{ fontWeight:m.primary ? 600 : 400, fontSize:12.5 }}>{m.name}</div>
                  <div style={{ fontSize:10.5, color:"var(--ink-mute)" }}>{m.cadence}{m.primary ? " · primary" : ""}{m.unit === "yes" ? " · 1 yes, 0 no" : m.unit === "pct" ? " · whole percent" : ""}</div></td>
                <td style={{ fontSize:11.5, color:"var(--ink-soft)", minWidth:110 }}>{m.target}</td>
                {r.row.slice(0, shownWeeks).map((v, i) => { const st = statusAt(m, r.row, i); return (
                  <td key={i} className="num" style={{ textAlign:"right", whiteSpace:"nowrap",
                    color:v == null ? "var(--ink-dim)" : T(ST_TONE[st]), background:st && OFF[st] ? "var(--bad-tint)" : undefined }}>
                    {live
                      ? <input type="number" step="any" min={m.unit === "yes" ? 0 : undefined} max={m.unit === "yes" ? 1 : undefined}
                          defaultValue={v ?? ""} aria-label={`${m.name}, week of ${WEEKS[i]}`}
                          onBlur={e => { const nv = e.target.value; if (String(v ?? "") !== nv) scoreEnter(m.id, i, nv); }} style={inp} />
                      : (v == null ? "-" : fmtM(m, v))}
                  </td>); })}
                <td><Badge tone={ST_TONE[r.st]}>{r.st}</Badge></td>
              </tr>); })}
          </React.Fragment>)}</tbody>
        </table></div>
      </Card>

      <G c={2} name="2h" gap={16}>
        <Card pad={20}>
          <SecLabel icon="target">How status works</SecLabel>
          <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.6 }}>
            At or under and at or over compare each entry to the target. Yes metrics take 1 for yes and 0 for no. Rising compares
            each entry to the last one before it, and flat or falling counts no change as on target. Every entry gets scored, so a
            metric that stays off shows as a red run across the weeks. Not measured means nothing was entered, and that's a real
            state rather than a zero.
          </p>
        </Card>
        <Card pad={20}>
          <SecLabel icon="clock">What to enter</SecLabel>
          <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.6 }}>
            Weekly and daily metrics get a number every week. Daily ones take the week's figure: the average for activity, the worst
            day for anything targeted at zero. Monthly metrics get one number in the first week of the month, per-run metrics one in
            the week of the run. Percentages go in as whole numbers.
          </p>
        </Card>
      </G>
    </div>
  );
}

/* ============================== ORG CHART ============================== */
function OrgCard({ s, go }) {
  const x = seatRead(s), p = x.primary;
  return (
    <Card pad={16} hover onClick={() => { scoreSet("viewAs", "owner"); scoreSet("focus", s.id); go("scorecards"); }}
      style={{ cursor:"pointer", display:"flex", flexDirection:"column", gap:8, borderStyle:s.relationship ? "dashed" : undefined }}>
      <div style={{ display:"flex", alignItems:"center", gap:9 }}>
        <Avatar name={s.who} size={30} tone={s.relationship ? "mute" : "accent"} />
        <div style={{ minWidth:0 }}>
          <div style={{ fontSize:13.5, fontWeight:600 }}>{s.short}</div>
          <div style={{ fontSize:11, color:"var(--ink-mute)" }}>{s.who}</div>
        </div>
      </div>
      <p style={{ fontSize:11.5, color:"var(--ink-soft)", lineHeight:1.5 }}>{s.line}</p>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:8, paddingTop:8, borderTop:"1px solid var(--rule-soft)" }}>
        <span style={{ fontSize:10.5, color:"var(--ink-mute)", minWidth:0 }}>{p.m.name}</span>
        <span className="mono" style={{ fontSize:13, fontWeight:600, color:p.latest == null ? "var(--ink-mute)" : T(ST_TONE[p.st]), whiteSpace:"nowrap" }}>{fmtM(p.m, p.latest)}</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:5, flexWrap:"wrap" }}>
        {x.reads.map(r => <Dot key={r.m.id} st={r.st} />)}
        <span style={{ fontSize:10.5, color:"var(--ink-mute)", marginLeft:4 }}>{x.hold} of {x.reads.length} holding</span>
      </div>
      {s.moving && <Badge tone="info" style={{ alignSelf:"flex-start" }}>Moving to the COO</Badge>}
      {s.relationship && <Badge tone="mute" style={{ alignSelf:"flex-start" }}>A relationship, not a person</Badge>}
    </Card>
  );
}

function TeamOrg({ go }) {
  const S = useScore();
  const owner = seatById("founder"), coo = seatById("coo");
  const direct = SEATS.filter(s => s.reports === "founder" && s.id !== "coo" && !s.moving);
  const underCoo = SEATS.filter(s => s.reports === "coo");
  const moving = SEATS.filter(s => s.moving === "coo");
  const fo = seatRead(owner), fr = fo.primary;
  const steps = S.mode === "sample" ? TRANSFERS : TRANSFERS.map(t => ({ ...t, step: t.step == null ? null : 0 }));
  return (
    <div className="page-in">
      <PageHead title="Org chart" sub="Who does what, who it reports to, and how each seat is scoring across its metrics."
        meta="Nine seats, each with a written role document. Click any seat for its scorecard."
        right={<ModeSwitch />} />

      <div style={{ maxWidth:340, margin:"0 auto" }}>
        <div className="sec-label" style={{ justifyContent:"center" }}>Owner</div>
        <Card pad={18} hover onClick={() => { scoreSet("viewAs", "owner"); scoreSet("focus", "founder"); go("scorecards"); }}
          style={{ cursor:"pointer", borderColor:"var(--accent)", textAlign:"center" }}>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
            <Avatar name={D.meta.user} size={40} />
            <div style={{ fontSize:15, fontWeight:600 }}>{D.meta.user}</div>
            <div style={{ fontSize:11.5, color:"var(--accent)" }}>Founder and Owner</div>
            <div style={{ fontSize:11.5, color:"var(--ink-soft)" }}>{fr.m.name}: <b className="mono" style={{ color:T(ST_TONE[fr.st] === "mute" ? "ink" : ST_TONE[fr.st]) }}>{fmtM(fr.m, fr.latest)}</b>, target under 5</div>
            <div style={{ display:"flex", alignItems:"center", gap:5 }}>{fo.reads.map(r => <Dot key={r.m.id} st={r.st} />)}
              <span style={{ fontSize:10.5, color:"var(--ink-mute)", marginLeft:4 }}>{fo.hold} of {fo.reads.length} holding</span></div>
          </div>
        </Card>
      </div>
      <div style={{ width:1, height:20, background:"var(--rule)", margin:"0 auto" }} />
      <div style={{ maxWidth:340, margin:"0 auto 22px" }}><OrgCard s={coo} go={go} /></div>

      <SecLabel icon="team" right={`${direct.length} seats`}>Reports to the owner</SecLabel>
      <G c={4} name="4" gap={14} style={{ marginBottom:22 }}>
        {direct.map(s => <OrgCard key={s.id} s={s} go={go} />)}
      </G>
      <SecLabel icon="team" right={`${underCoo.length} owned · ${moving.length} reporting to the owner until they move`}>Owned by the COO, or moving to the COO</SecLabel>
      <G c={3} name="3" gap={14} style={{ marginBottom:26 }}>
        {underCoo.concat(moving).map(s => <OrgCard key={s.id} s={s} go={go} />)}
      </G>

      <G c={2} name="2h" gap={16} style={{ gridTemplateColumns:"1fr 1.5fr", marginBottom:20 }}>
        <Card pad={20}>
          <SecLabel icon="lock">What stays with the owner</SecLabel>
          <div style={{ fontSize:11, color:"var(--ink-mute)", marginBottom:6 }}>Only the owner</div>
          {OWNER.only.map(x => <div key={x} style={{ fontSize:12.5, padding:"5px 0" }}>{x}</div>)}
          <div style={{ fontSize:11, color:"var(--ink-mute)", margin:"12px 0 6px" }}>Kept by choice</div>
          {OWNER.choice.map(x => <div key={x} style={{ fontSize:12.5, padding:"5px 0" }}>{x}</div>)}
          <p style={{ fontSize:11.5, color:"var(--ink-soft)", marginTop:12, fontStyle:"italic" }}>"{OWNER.quote}"</p>
        </Card>
        <Card pad={0}>
          <div style={{ padding:"18px 18px 4px" }}>
            <SecLabel icon="exec" right="watch, do with him watching, do alone">What moves off the owner</SecLabel>
          </div>
          <div className="scroll-x"><table className="tbl">
            <thead><tr><th>Function</th><th>Order</th><th>To</th><th style={{ minWidth:170 }}>Transfer</th></tr></thead>
            <tbody>{steps.map(t => (
              <tr key={t.f}>
                <td style={{ fontWeight:500 }}>{t.f}</td>
                <td><Badge tone={t.stage === "First" ? "accent" : t.stage === "Next" ? "info" : "mute"}>{t.stage}</Badge></td>
                <td style={{ fontSize:12, color:"var(--ink-soft)" }}>{t.to}</td>
                <td>{t.step == null ? <span style={{ fontSize:11.5, color:"var(--ink-mute)" }}>Held for control, to revisit</span> : <div>
                  <div style={{ display:"flex", gap:3, marginBottom:4 }}>
                    {[1,2,3].map(k => <span key={k} style={{ flex:1, height:5, borderRadius:99, background:k <= t.step ? "var(--good)" : "var(--surface-3)" }} />)}
                  </div>
                  <span style={{ fontSize:10.5, color:"var(--ink-mute)" }}>{TRANSFER_STEPS[t.step]}</span></div>}</td>
              </tr>))}</tbody>
          </table></div>
        </Card>
      </G>
      <Note tone="info" icon="i">
        A function has transferred when the written version is good enough for a third person to run it. Not when the COO can
        do it. When somebody who isn't the COO could.
      </Note>
    </div>
  );
}

function ownerTicker() {
  const r = metricRead(METRICS.find(m => m.id === "f_dec"));
  return { i:"team", l:"Owner decisions this week", v: r.latest == null ? "not logged" : String(r.latest), tone: r.latest == null ? "ink" : r.latest <= 5 ? "good" : "bad" };
}
