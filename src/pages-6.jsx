// pages-6.jsx, the team layer. Role scorecards, the weekly score log and the
// org chart, all reading one score store so a number logged once shows
// everywhere it's used.

/* ------------------------------------------------------------ score store */
const SCORE_KEY = "mynd.scorelog.v1";
const ScoreStore = { mode:"sample", live:{}, focus:null, viewAs:"owner", clears:0, subs:new Set() };
try { const raw = localStorage.getItem(SCORE_KEY); if (raw) ScoreStore.live = JSON.parse(raw) || {}; } catch (e) {}

function scoreEmit() { ScoreStore.subs.forEach(f => f()); }
function useScore() {
  const [, force] = useState(0);
  useEffect(() => { const f = () => force(x => x + 1); ScoreStore.subs.add(f); return () => ScoreStore.subs.delete(f); }, []);
  return ScoreStore;
}
function scoreSet(k, v) { ScoreStore[k] = v; scoreEmit(); }
function scoreRow(id) {
  const src = ScoreStore.mode === "sample" ? (SAMPLE_LOG[id] || []) : (ScoreStore.live[id] || []);
  return WEEKS.map((w, i) => (src[i] === undefined || src[i] === "" ? null : src[i]));
}
function scoreEnter(id, i, raw) {
  const row = (ScoreStore.live[id] || []).slice();
  const v = raw === "" ? null : Number(raw);
  row[i] = raw === "" || isNaN(v) ? null : v;
  ScoreStore.live = { ...ScoreStore.live, [id]: row };
  try { localStorage.setItem(SCORE_KEY, JSON.stringify(ScoreStore.live)); } catch (e) {}
  scoreEmit();
}
function scoreClear() {
  ScoreStore.live = {}; ScoreStore.clears += 1;
  try { localStorage.removeItem(SCORE_KEY); } catch (e) {}
  scoreEmit();
}

/* ------------------------------------------------------------ status, same rules as the tracker */
// Prior is the previous entry that holds a number, so monthly and per-run seats
// compare run to run rather than to an empty week.
function seatRead(s) {
  const row = scoreRow(s.id);
  const idx = row.map((v, i) => v == null ? -1 : i).filter(i => i >= 0);
  const li = idx.length ? idx[idx.length - 1] : -1, pi = idx.length > 1 ? idx[idx.length - 2] : -1;
  const latest = li >= 0 ? row[li] : null, prior = pi >= 0 ? row[pi] : null;
  let st;
  if (latest == null) st = "Not measured";
  else if (s.target.kind === "max") st = latest <= s.target.v ? "On target" : "Off target";
  else if (s.target.kind === "min") st = latest >= s.target.v ? "On target" : "Off target";
  else if (prior == null) st = "Baseline";
  else st = latest > prior ? "Improving" : latest === prior ? "Flat" : "Slipping";
  const better = latest == null || prior == null || latest === prior ? null : s.target.kind === "max" ? latest < prior : latest > prior;
  const dir = latest == null || prior == null || latest === prior ? 0 : latest > prior ? 1 : -1;
  return { row, latest, prior, li, st, better, dir, entries: idx.length };
}
const ST_TONE = { "On target":"good", "Improving":"good", "Flat":"warn", "Baseline":"info",
  "Off target":"bad", "Slipping":"bad", "Not measured":"mute" };
const MEASURE_TONE = { "Measurable":"good", "Needs 30 days":"info", "Needs build":"warn", "Needs access":"warn",
  "Needs three runs":"warn", "Needs roadmap":"bad", "Needs attribution":"bad" };

function fmtSeat(s, v) {
  if (v == null) return "-";
  if (s.unit === "usd") return fmt.usd(v);
  if (s.unit === "pct") return Number(v).toFixed(1) + "%";
  if (s.unit === "h") return (Number.isInteger(v) ? v : Number(v).toFixed(1)) + " hrs";
  if (s.unit === "rate") return Number(v).toFixed(2) + " / $";
  return Number.isInteger(v) ? String(v) : Number(v).toFixed(1);
}
const seatById = (id) => SEATS.find(s => s.id === id);

/* ------------------------------------------------------------ trend chart with gaps */
function Trend({ seat, row, h = 150, compact }) {
  const last = Math.max(11, row.reduce((m, v, i) => v != null ? i : m, -1));
  const span = row.slice(0, last + 1);
  const vals = span.filter(v => v != null);
  if (!vals.length) {
    return <div style={{ height:h, display:"grid", placeItems:"center", border:"1px dashed var(--rule)",
      borderRadius:"var(--r-md)", color:"var(--ink-mute)", fontSize:11.5 }}>Not measured yet</div>;
  }
  const tv = seat.target.v;
  let lo = Math.min(...vals, tv ?? Infinity), hi = Math.max(...vals, tv ?? -Infinity);
  if (lo === hi) { lo = lo - 1; hi = hi + 1; }
  const pad = (hi - lo) * 0.15; lo -= pad; hi += pad;
  const X = i => span.length === 1 ? 50 : (i / (span.length - 1)) * 100;
  const Y = v => 100 - ((v - lo) / (hi - lo)) * 100;
  const pts = span.map((v, i) => v == null ? null : [X(i), Y(v)]).filter(Boolean);
  const r = seatRead(seat);
  const tone = ST_TONE[r.st] === "mute" ? "accent" : ST_TONE[r.st];
  return (
    <div>
      <div style={{ position:"relative", height:h }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width:"100%", height:"100%", overflow:"visible" }}>
          {!compact && [0,25,50,75,100].map(g => <line key={g} x1="0" y1={g} x2="100" y2={g} stroke="var(--rule-soft)" strokeWidth="0.4" vectorEffect="non-scaling-stroke"/>)}
          {tv != null && <line x1="0" y1={Y(tv)} x2="100" y2={Y(tv)} stroke="var(--warn)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke"/>}
          <polyline points={pts.map(p => p.join(",")).join(" ")} fill="none" stroke={T(tone)} strokeWidth={compact ? 1.6 : 2}
            strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
        </svg>
        {pts.map((p, i) => <span key={i} style={{ position:"absolute", left:p[0] + "%", top:p[1] + "%",
          width:compact ? 5 : 7, height:compact ? 5 : 7, borderRadius:99, transform:"translate(-50%,-50%)",
          background:"var(--surface)", border:`1.6px solid ${T(tone)}` }} />)}
        {!compact && tv != null && <span style={{ position:"absolute", right:0, top:Y(tv) + "%", transform:"translateY(-130%)",
          fontSize:9.5, color:"var(--warn)", fontWeight:600 }}>Target {fmtSeat(seat, tv)}</span>}
      </div>
      {!compact && <div style={{ display:"flex", marginTop:7 }}>
        {span.map((v, i) => <span key={i} style={{ flex:1, textAlign:"center", fontSize:9, color:v == null ? "var(--ink-dim)" : "var(--ink-mute)" }}>
          {i % 2 === 0 || span.length <= 8 ? WEEKS[i] : ""}</span>)}
      </div>}
    </div>
  );
}

function ModeSwitch() {
  const S = useScore();
  return <Seg options={[{ v:"sample", l:"Sample history" }, { v:"live", l:"Live log" }]} value={S.mode} onChange={v => scoreSet("mode", v)} />;
}

function ModeNote() {
  const S = useScore();
  return S.mode === "sample"
    ? <p style={{ fontSize:11, color:"var(--ink-mute)", margin:"-12px 0 18px" }}>Sample history, twelve modeled weeks, shows how the scoring trends. Switch to Live log to enter real numbers.</p>
    : <p style={{ fontSize:11, color:"var(--ink-mute)", margin:"-12px 0 18px" }}>Live log. Numbers entered on the Score Log page. An empty week means not measured, not zero.</p>;
}

/* ============================== ROLE SCORECARDS ============================== */
function TeamScorecards({ go }) {
  const S = useScore();
  const reads = SEATS.map(s => ({ s, r: seatRead(s) }));
  const count = (f) => reads.filter(x => f(x.r.st)).length;
  const shown = S.viewAs === "owner" ? reads : reads.filter(x => x.s.id === S.viewAs || (S.viewAs === "coo" && x.s.id === "warehouse"));
  const focus = S.focus && shown.find(x => x.s.id === S.focus);
  const f = seatRead(seatById("founder"));
  return (
    <div className="page-in">
      <PageHead title="Role scorecards" sub="One number per seat. Everyone sees their own card. The owner sees all of them."
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
          <KPI label="On target or improving" value={String(count(st => st === "On target" || st === "Improving"))} tone="good" sub="of 9 seats" />
          <KPI label="Off target or slipping" value={String(count(st => st === "Off target" || st === "Slipping"))} tone="bad" sub="look upstream first" />
          <KPI label="Baseline or flat" value={String(count(st => st === "Baseline" || st === "Flat"))} tone="warn" sub="one entry, or no move" />
          <KPI label="Not measured" value={String(count(st => st === "Not measured"))} tone="mute" sub="measure still being built" />
        </G>
        <Card pad={22} style={{ marginBottom:22, borderLeft:"3px solid var(--accent)" }}>
          <G c={2} name="2h" gap={22} style={{ gridTemplateColumns:"1fr 1.4fr", alignItems:"center" }}>
            <div>
              <div className="sec-label">The one that matters most</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:10, flexWrap:"wrap", margin:"6px 0 8px" }}>
                <span className="mono" style={{ fontSize:32, fontWeight:600, color:T(ST_TONE[f.st] === "mute" ? "ink" : ST_TONE[f.st]) }}>{fmtSeat(seatById("founder"), f.latest)}</span>
                <span style={{ fontSize:12.5, color:"var(--ink-soft)" }}>decisions routed through the owner this week. Target under 5.</span>
              </div>
              <p style={{ fontSize:12, color:"var(--ink-mute)", lineHeight:1.55 }}>Every other number on these cards improves as this one falls, because most of them are held back by waiting on him.</p>
            </div>
            <Trend seat={seatById("founder")} row={f.row} h={120} />
          </G>
        </Card>
      </>}

      <G c={3} name="3" gap={16} style={{ marginBottom:22 }}>
        {shown.map(({ s, r }) => {
          const on = S.focus === s.id;
          return (
            <Card key={s.id} pad={18} hover onClick={() => scoreSet("focus", on ? null : s.id)}
              style={{ cursor:"pointer", borderColor:on ? "var(--accent)" : undefined, display:"flex", flexDirection:"column", gap:10 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:10 }}>
                <div style={{ display:"flex", alignItems:"center", gap:9, minWidth:0 }}>
                  <Avatar name={s.who} size={28} tone={ST_TONE[r.st] === "bad" ? "bad" : "accent"} />
                  <div style={{ minWidth:0 }}>
                    <div style={{ fontSize:13.5, fontWeight:600 }}>{s.seat}</div>
                    <div style={{ fontSize:11, color:"var(--ink-mute)" }}>{s.who}</div>
                  </div>
                </div>
                <Badge tone={ST_TONE[r.st]}>{r.st}</Badge>
              </div>
              <div style={{ fontSize:11.5, color:"var(--ink-soft)" }}>{s.number}</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:9, flexWrap:"wrap" }}>
                <span className="mono" style={{ fontSize:24, fontWeight:600, color:r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st]) }}>{fmtSeat(s, r.latest)}</span>
                {r.prior != null && <span className="mono" style={{ fontSize:11, color:r.better ? "var(--good)" : r.better === false ? "var(--bad)" : "var(--ink-mute)" }}>
                  {r.dir > 0 ? "\u25B2 " : r.dir < 0 ? "\u25BC " : ""}prior {fmtSeat(s, r.prior)}</span>}
              </div>
              <Trend seat={s} row={r.row} h={44} compact />
              <div style={{ display:"flex", justifyContent:"space-between", gap:8, flexWrap:"wrap", fontSize:10.5, color:"var(--ink-mute)",
                paddingTop:8, borderTop:"1px solid var(--rule-soft)" }}>
                <span>Target {s.target.text} · {s.cadence}</span>
                <Badge tone={MEASURE_TONE[s.measure]}>{s.measure}</Badge>
              </div>
            </Card>);
        })}
      </G>

      {focus && <SeatDetail s={focus.s} r={focus.r} go={go} />}

      <Note tone="info" icon="i">
        If a number is off, look at the supporting numbers before the person. Most of the time a primary number moves because
        something upstream of it changed, not because somebody stopped trying. Click any card for its trend and supporting numbers.
      </Note>
    </div>
  );
}

function SeatDetail({ s, r, go }) {
  const S = useScore();
  return (
    <Card pad={22} style={{ marginBottom:22 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:14, flexWrap:"wrap", marginBottom:16 }}>
        <div style={{ minWidth:0, flex:"1 1 320px" }}>
          <h3 style={{ fontSize:17, marginBottom:5 }}>{s.seat} · {s.who}</h3>
          <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.55 }}>{s.line}</p>
        </div>
        <span style={{ display:"flex", gap:8 }}>
          <button onClick={() => go("scorelog")} style={detailBtn}>Open the log</button>
          <button onClick={() => go("org")} style={detailBtn}>See on the org chart</button>
        </span>
      </div>
      <G c={2} name="2h" gap={22} style={{ gridTemplateColumns:"1.5fr 1fr" }}>
        <div>
          <SecLabel icon="pulse" right={`${r.entries} ${r.entries === 1 ? "entry" : "entries"} · read ${s.cadence.toLowerCase()}`}>{s.number}</SecLabel>
          <Trend seat={s} row={r.row} h={170} />
          <p style={{ fontSize:11, color:"var(--ink-mute)", marginTop:12 }}>
            From {s.source.toLowerCase()}. {s.measure === "Measurable" ? "Readable today." : `Before this number means anything: ${s.need.charAt(0).toLowerCase() + s.need.slice(1)}.`}
          </p>
        </div>
        <div>
          <SecLabel icon="target">Supporting numbers</SecLabel>
          {s.supporting.map(x => (
            <div key={x.n} style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:10, padding:"9px 0", borderBottom:"1px solid var(--rule-soft)" }}>
              <div><div style={{ fontSize:12.5, fontWeight:500 }}>{x.n}</div>
                <div style={{ fontSize:10.5, color:"var(--ink-mute)" }}>Target {x.target} · {x.cadence} · {x.source}</div></div>
              {S.mode === "sample"
                ? <span className="mono" style={{ fontSize:13, fontWeight:600, color:T(x.tone), alignSelf:"center" }}>{x.sample}</span>
                : <Badge tone="mute" style={{ alignSelf:"center" }}>Not measured</Badge>}
            </div>))}
          <div style={{ marginTop:14, fontSize:11.5, color:"var(--ink-soft)", lineHeight:1.55 }}>
            <b style={{ fontWeight:600 }}>Manages.</b> {s.manages}<br/>
            <b style={{ fontWeight:600 }}>Doesn't.</b> {s.not}<br/>
            <span style={{ color:"var(--ink-mute)" }}>Role document: {s.doc}, in the Vault.</span>
          </div>
        </div>
      </G>
    </Card>
  );
}
const detailBtn = { border:"1px solid var(--rule)", background:"var(--surface-3)", color:"var(--ink-soft)",
  borderRadius:"var(--r-sm)", padding:"6px 11px", fontSize:11.5, fontWeight:600, cursor:"pointer" };

/* ============================== SCORE LOG ============================== */
function ScoreLog() {
  const S = useScore();
  const live = S.mode === "live";
  const shownWeeks = live ? WEEKS.length : 12;
  const exportCsv = () => {
    const head = ["Seat","Who","The number","Target", ...WEEKS, "Latest","Prior","Status"];
    const lines = [head].concat(SEATS.map(s => { const r = seatRead(s);
      return [s.seat, s.who, s.number, s.target.text, ...r.row.map(v => v == null ? "" : v), r.latest ?? "", r.prior ?? "", r.st]; }));
    const csv = lines.map(l => l.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type:"text/csv" }));
    a.download = `mynd_score_log_${S.mode}.csv`; a.click();
  };
  const cell = { width:62, background:"var(--surface-3)", border:"1px solid var(--rule)", borderRadius:6,
    color:"var(--ink)", padding:"5px 6px", fontSize:12, textAlign:"right", fontFamily:"var(--mono)" };
  return (
    <div className="page-in">
      <PageHead title="Score log" sub="One number per seat per week. Status calculates on its own."
        right={<span style={{ display:"inline-flex", gap:10, alignItems:"center", flexWrap:"wrap" }}>
          <button onClick={exportCsv} style={detailBtn}>Export CSV</button>
          {live && <button onClick={() => { if (confirm("Clear every live entry?")) scoreClear(); }} style={detailBtn}>Clear live log</button>}
          <ModeSwitch /></span>} />
      <ModeNote />
      <Card pad={0} style={{ marginBottom:20 }} key={S.mode + ":" + S.clears}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr>
            <th style={{ position:"sticky", left:0, background:"var(--surface)", zIndex:1, minWidth:190 }}>Seat and number</th>
            <th>Target</th>
            {WEEKS.slice(0, shownWeeks).map((w, i) => <th key={w} style={{ textAlign:"right", color:i === 0 ? "var(--accent)" : undefined }}>{w}</th>)}
            <th style={{ textAlign:"right" }}>Latest</th><th style={{ textAlign:"right" }}>Prior</th><th>Status</th>
          </tr></thead>
          <tbody>{SEATS.map(s => { const r = seatRead(s); return (
            <tr key={s.id}>
              <td style={{ position:"sticky", left:0, background:"var(--surface)", zIndex:1 }}>
                <div style={{ fontWeight:600 }}>{s.short} <span style={{ fontWeight:400, color:"var(--ink-mute)" }}>· {s.who}</span></div>
                <div style={{ fontSize:10.5, color:"var(--ink-mute)" }}>{s.number}</div></td>
              <td style={{ fontSize:11.5, color:"var(--ink-soft)", whiteSpace:"nowrap" }}>{s.target.text}</td>
              {r.row.slice(0, shownWeeks).map((v, i) => (
                <td key={i} className="num" style={{ textAlign:"right", whiteSpace:"nowrap", color:v == null ? "var(--ink-dim)" : "var(--ink)" }}>
                  {live
                    ? <input type="number" step="any" defaultValue={v ?? ""} aria-label={`${s.short} week of ${WEEKS[i]}`}
                        onBlur={e => { const nv = e.target.value; if (String(v ?? "") !== nv) scoreEnter(s.id, i, nv); }} style={cell} />
                    : (v == null ? "-" : fmtSeat(s, v))}
                </td>))}
              <td className="num" style={{ textAlign:"right", fontWeight:600, whiteSpace:"nowrap" }}>{fmtSeat(s, r.latest)}</td>
              <td className="num" style={{ textAlign:"right", color:"var(--ink-mute)", whiteSpace:"nowrap" }}>{fmtSeat(s, r.prior)}</td>
              <td><Badge tone={ST_TONE[r.st]}>{r.st}</Badge></td>
            </tr>); })}</tbody>
        </table></div>
      </Card>

      <G c={2} name="2h" gap={16} style={{ marginBottom:20 }}>
        <Card pad={20}>
          <SecLabel icon="target">How status works</SecLabel>
          <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.6 }}>
            Where a seat has a fixed target, status compares the latest number to that target. Where the target is a direction,
            it compares the latest number to the one before it. Monthly and per-run seats compare to their last entry, not to an
            empty week. Not measured means nothing has been entered yet, and that's a real state rather than a zero.
          </p>
        </Card>
        <Card pad={20}>
          <SecLabel icon="clock">Setting a target</SecLabel>
          <p style={{ fontSize:12.5, color:"var(--ink-soft)", lineHeight:1.6 }}>
            Five seats have a direction rather than a number, on purpose. Measure for thirty days, set the target against the
            baseline, and move it once it has held for two months. Order accuracy at 99.5% is the industry standard, so it
            applies from day one.
          </p>
        </Card>
      </G>

      <SecLabel icon="pulse" right="read when a primary number moves">Supporting numbers</SecLabel>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Seat</th><th>Supporting number</th><th>Target</th><th>Cadence</th><th>Source</th><th style={{ textAlign:"right" }}>Latest</th></tr></thead>
          <tbody>{SEATS.flatMap(s => s.supporting.map((x, j) => (
            <tr key={s.id + j}>
              <td style={{ fontWeight:j === 0 ? 600 : 400, color:j === 0 ? "var(--ink)" : "transparent" }}>{s.short}</td>
              <td>{x.n}</td>
              <td style={{ color:"var(--ink-soft)", fontSize:12 }}>{x.target}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:12 }}>{x.cadence}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:12 }}>{x.source}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:600, color:S.mode === "sample" ? T(x.tone) : "var(--ink-mute)" }}>
                {S.mode === "sample" ? x.sample : "Not measured"}</td>
            </tr>)))}</tbody>
        </table></div>
      </Card>
    </div>
  );
}

/* ============================== ORG CHART ============================== */
function OrgCard({ s, go, dim }) {
  const r = seatRead(s);
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
        <span style={{ fontSize:10.5, color:"var(--ink-mute)", minWidth:0 }}>{s.number}</span>
        <span className="mono" style={{ fontSize:13, fontWeight:600, color:r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st]), whiteSpace:"nowrap" }}>{fmtSeat(s, r.latest)}</span>
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
  const fr = seatRead(owner);
  const steps = S.mode === "sample" ? TRANSFERS : TRANSFERS.map(t => ({ ...t, step: t.step == null ? null : 0 }));
  const vline = <div style={{ width:1, height:20, background:"var(--rule)", margin:"0 auto" }} />;
  return (
    <div className="page-in">
      <PageHead title="Org chart" sub="Who does what, who it reports to, and the one number each seat is held to."
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
            <div style={{ fontSize:11.5, color:"var(--ink-soft)" }}>{owner.number}: <b className="mono" style={{ color:T(ST_TONE[fr.st] === "mute" ? "ink" : ST_TONE[fr.st]) }}>{fmtSeat(owner, fr.latest)}</b>, target under 5</div>
          </div>
        </Card>
      </div>
      {vline}
      <div style={{ maxWidth:340, margin:"0 auto" }}><OrgCard s={coo} go={go} /></div>

      <SecLabel icon="team" right={`${direct.length} seats`}>Reports to the owner</SecLabel>
      <G c={4} name="4" gap={14} style={{ marginBottom:22 }}>
        {direct.map(s => <OrgCard key={s.id} s={s} go={go} />)}
      </G>
      <SecLabel icon="team" right={`${underCoo.length} owned · ${moving.length} reporting to the owner until they move`}>Owned by the COO, or moving to the COO</SecLabel>
      <G c={3} name="3" gap={14} style={{ marginBottom:26 }}>
        {underCoo.map(s => <OrgCard key={s.id} s={s} go={go} />)}
        {moving.map(s => <OrgCard key={s.id + "m"} s={s} go={go} />)}
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
  const r = seatRead(seatById("founder"));
  return { i:"team", l:"Owner decisions this week", v: r.latest == null ? "not logged" : String(r.latest), tone: r.latest == null ? "ink" : r.latest <= 5 ? "good" : "bad" };
}
