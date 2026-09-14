// pages-c.jsx — Inventory & Velocity, Team & Accountability, Data Health

/* ============================================================ INVENTORY */
function PageInventory() {
  const inv = MYND.inventory;
  const [status, setStatus] = useState("All");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState({});

  const statuses = ["All", "critical", "warning", "healthy", "overstocked"];
  const cats = ["All", "Chocolate", "Gummies", "Capsules"];
  const label = { critical: "Stockout risk", warning: "Reorder soon", healthy: "Healthy", overstocked: "Overstocked" };
  const tone = { critical: "bad", warning: "warn", healthy: "good", overstocked: "info" };

  const rows = inv.skus.filter((s) =>
    (status === "All" || s.status === status) && (cat === "All" || s.cat === cat));

  const atRisk = inv.skus.filter((s) => s.status === "critical" || s.status === "warning");
  const totalPO = atRisk.reduce((s, x) => s + x.po, 0);
  const gap = totalPO - inv.affordability.freeCash;

  return (
    <div className="page-enter">
      <SectionHead
        title="Inventory and velocity"
        sub="How much you have, how fast it moves, and whether you can afford the reorder before you run out."
      />

      <Grid cols={4} gap={20} style={{ marginBottom: 22 }}>
        <Stat label="SKUs at risk" value={String(atRisk.length)} sub="2 critical · 2 warning" tone="bad" trust="mock" />
        <Stat label="Free cash for inventory" value={fmt.usd(inv.affordability.freeCash)} sub="Cash above the operating floor" tone="good" trust="good" />
        <Stat label="Reorder requirement" value={fmt.usd(totalPO)} sub="All urgent and warning SKUs" tone="warn" trust="mock" />
        <Stat label="Shortfall" value={fmt.usd(gap)} sub="Sequence purchases or draw on the card" tone="bad" trust="mock" />
      </Grid>

      <Note tone="warn" icon="!">{inv.note}</Note>
      <div style={{ height: 32 }} />

      <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1fr 1.2fr", marginBottom: 36 }}>
        <Card>
          <SectionHead title="Can you fund the reorders?"
            sub="Free cash against what the at-risk SKUs need." style={{ marginBottom: 18 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {[["Free cash available", inv.affordability.freeCash, "good"],
              ["Total reorder cost", totalPO, "warn"],
              ["Net position", -gap, "bad"]].map(([l, v, t]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>{l}</span>
                <span className="mono" style={{ fontSize: 17, fontWeight: 600, color: toneVar(t) }}>{fmt.usd(v)}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>
              {inv.affordability.note}
            </p>
          </div>
        </Card>
        <Card>
          <SectionHead title="Ad spend against velocity"
            sub="Bubble size is revenue. Colour is stock status. Anything red and to the right is spending into a stockout."
            style={{ marginBottom: 18 }} />
          <Scatter height={250} xLabel="Monthly ad spend" yLabel="Units per day"
            yFmt={(v) => v + "/day"}
            points={inv.skus.filter((s) => s.velocity > 0).map((s) => ({
              x: s.po / 4 || 2000, y: s.velocity, r: 13 + s.velocity / 8,
              tone: tone[s.status], label: s.sku,
            }))} />
        </Card>
      </Grid>

      <SectionHead title="Days of cover"
        sub="Click a row for lead time and reorder detail. Red means you run out before a reorder could land."
        right={<div style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: "100%", minWidth: 0 }}>
          <Seg options={cats} value={cat} onChange={setCat} />
          <Seg options={statuses.map((s) => ({ v: s, l: s === "All" ? "All" : label[s] }))} value={status} onChange={setStatus} />
        </div>} />

      <Card>
        <div className="scroll-x">
          <table className="tbl">
            <thead><tr>
              <th style={{ width: 26 }}></th><th>Product</th><th>Category</th>
              <th style={{ textAlign: "right" }}>On hand</th><th style={{ textAlign: "right" }}>Velocity</th>
              <th style={{ textAlign: "right" }}>Days of cover</th><th style={{ textAlign: "right" }}>Lead time</th>
              <th>Cover against lead time</th><th>Incoming</th><th>Status</th>
            </tr></thead>
            <tbody>
              {rows.map((s) => {
                const isOpen = !!open[s.sku];
                const risk = s.cover > 0 && s.cover < s.lead;
                return (
                  <React.Fragment key={s.sku}>
                    <tr className="clickable" onClick={() => setOpen((o) => ({ ...o, [s.sku]: !o[s.sku] }))}>
                      <td style={{ padding: "10px 6px 10px 14px" }}>
                        <button aria-label={isOpen ? "Collapse" : "Expand"}
                          onClick={(e) => { e.stopPropagation(); setOpen((o) => ({ ...o, [s.sku]: !o[s.sku] })); }}
                          style={{ appearance: "none", border: "1px solid var(--rule)",
                                   background: isOpen ? "var(--accent-tint)" : "transparent",
                                   color: isOpen ? "var(--accent)" : "var(--ink-mute)",
                                   width: 22, height: 22, borderRadius: 6, cursor: "pointer",
                                   display: "grid", placeItems: "center", padding: 0, fontSize: 10,
                                   transition: "all 160ms ease" }}>
                          {isOpen ? "▾" : "▸"}
                        </button>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{s.sku}</div>
                        {s.note && <div style={{ fontSize: 10.5, color: "var(--ink-mute)" }}>{s.note}</div>}
                      </td>
                      <td><Badge tone={s.cat === "Chocolate" ? "accent" : s.cat === "Gummies" ? "info" : "mute"}>{s.cat}</Badge></td>
                      <td className="num" style={{ textAlign: "right" }}>{fmt.num(s.onHand)}</td>
                      <td className="num" style={{ textAlign: "right" }}>{s.velocity ? s.velocity + "/day" : "—"}</td>
                      <td className="num" style={{ textAlign: "right", fontWeight: 600, color: toneVar(tone[s.status]) }}>
                        {s.cover ? s.cover + "d" : "0d"}
                      </td>
                      <td className="num" style={{ textAlign: "right", color: "var(--ink-soft)" }}>{s.lead}d</td>
                      <td style={{ width: 150 }}>
                        <Bar pct={Math.min((s.cover / (s.lead * 3)) * 100, 100)} tone={tone[s.status]} height={5} />
                        {risk && <span style={{ fontSize: 10, color: "var(--bad)" }}>inside lead time</span>}
                      </td>
                      <td>{s.incoming ? <Badge tone="good">On order</Badge> : <span style={{ color: "var(--ink-mute)", fontSize: 11 }}>—</span>}</td>
                      <td><Badge tone={tone[s.status]}>{label[s.status]}</Badge></td>
                    </tr>
                    {isOpen && (
                      <tr>
                        <td colSpan={10} style={{ background: "var(--bg-3)", padding: "16px 18px" }}>
                          <Grid cols={4} gap={20}>
                            {[["Reorder cost", s.po ? fmt.usd(s.po) : "Not scheduled"],
                              ["Runs out", s.cover ? `in ${s.cover} days` : "already out"],
                              ["Lead time", `${s.lead} days`],
                              ["Verdict", s.po > inv.affordability.freeCash ? "Needs sequencing or credit" : s.po ? "Fundable from free cash" : "No action"]].map(([l, v]) => (
                              <div key={l}>
                                <div className="eyebrow" style={{ marginBottom: 4 }}>{l}</div>
                                <div style={{ fontSize: 13.5, fontWeight: 500 }}>{v}</div>
                              </div>
                            ))}
                          </Grid>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ============================================================ TEAM */
function PageTeam() {
  const t = MYND.team;
  const statusTone = { "on-track": "good", "at-risk": "bad", "not-set": "mute" };
  const statusLabel = { "on-track": "On track", "at-risk": "At risk", "not-set": "No number yet" };
  const delegTone = { "Only him": "bad", "Rule-able": "warn", "Someone else could": "good", "TBD": "mute" };
  const counts = t.decisions.reduce((a, d) => { a[d.deleg] = (a[d.deleg] || 0) + 1; return a; }, {});

  return (
    <div className="page-enter">
      <SectionHead
        title="Team and accountability"
        sub="One number per seat, visible to the person being measured. A scorecard nobody can see is a report about them, not a tool for them."
      />

      <Grid cols={4} gap={20} style={{ marginBottom: 36 }}>
        <Stat label="Roles with a number" value={`1 of ${t.roles.length}`} sub="Target is all of them" tone="bad" trust="good" />
        <Stat label="Written processes" value={`${t.processes.written}`} sub={`Target ${t.processes.target}+ by Day 180`} tone="bad" trust="good" />
        <Stat label="Decisions logged" value={String(t.decisions.length)} sub="Last 14 days" tone="neutral" trust="mock" />
        <Stat label="Could be delegated" value={`${(counts["Rule-able"] || 0) + (counts["Someone else could"] || 0)} of ${t.decisions.length}`}
              sub="With a written rule" tone="warn" trust="mock" />
      </Grid>

      <SectionHead title="Role scorecards" sub={t.note} />
      <Card style={{ marginBottom: 36 }}>
        <div className="scroll-x">
          <table className="tbl">
            <thead><tr>
              <th>Who</th><th>Role</th><th>The one number</th>
              <th style={{ textAlign: "right" }}>Now</th><th style={{ textAlign: "right" }}>Target</th><th>Status</th>
            </tr></thead>
            <tbody>
              {t.roles.map((r) => (
                <tr key={r.name}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <span style={{ width: 27, height: 27, borderRadius: 999, background: r.owner ? "var(--accent)" : "var(--bg-4)",
                                     color: r.owner ? "#fff" : "var(--ink-soft)", display: "grid", placeItems: "center",
                                     fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                        {r.name.slice(0, 2).toUpperCase()}
                      </span>
                      <span style={{ fontWeight: 600 }}>{r.name}</span>
                    </div>
                  </td>
                  <td style={{ color: "var(--ink-soft)" }}>{r.role}</td>
                  <td>{r.metric}</td>
                  <td className="num" style={{ textAlign: "right", fontWeight: 600 }}>
                    {r.now || <span style={{ color: "var(--ink-mute)", fontWeight: 400 }}>not set</span>}</td>
                  <td className="num" style={{ textAlign: "right", color: "var(--ink-soft)" }}>{r.target}</td>
                  <td><Badge tone={statusTone[r.status]}>{statusLabel[r.status]}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1.3fr 1fr" }}>
        <Card>
          <SectionHead title="Founder decision log"
            sub="Every decision that routed through you, sorted into what only you can decide and what could move."
            style={{ marginBottom: 16 }} />
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>Date</th><th>Decision</th><th>Could this move?</th></tr></thead>
              <tbody>
                {t.decisions.map((d, i) => (
                  <tr key={i}>
                    <td className="num" style={{ color: "var(--ink-mute)", whiteSpace: "nowrap" }}>{d.d}</td>
                    <td>{d.what}</td>
                    <td><Badge tone={delegTone[d.deleg]}>{d.deleg}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card>
          <SectionHead title="The delegation map" sub="Where the last fourteen days of decisions actually sit." style={{ marginBottom: 18 }} />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <Donut value={counts["Only him"] || 0} max={t.decisions.length} size={150} tone="bad"
                   label={fmt.pct(((counts["Only him"] || 0) / t.decisions.length) * 100, 0)} sub="only him" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {Object.entries(counts).map(([k, v]) => (
              <div key={k}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 13 }}>{k}</span>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 600, color: toneVar(delegTone[k]) }}>{v}</span>
                </div>
                <Bar pct={(v / t.decisions.length) * 100} tone={delegTone[k]} height={5} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18, paddingTop: 15, borderTop: "1px solid var(--rule)" }}>
            <p style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
              The middle group is where delegation actually happens. A decision with a written rule behind it
              stops being a decision.
            </p>
          </div>
        </Card>
      </Grid>
    </div>
  );
}

/* ============================================================ DATA HEALTH */
function PageData() {
  const d = MYND.dataHealth;
  const sTone = { live: "good", partial: "warn", blocked: "bad", waiting: "info" };
  const sLabel = { live: "Connected", partial: "Partial", blocked: "Blocked", waiting: "Waiting on data" };
  const rTone = { high: "good", medium: "warn", low: "bad", none: "bad" };
  const rLabel = { high: "Act on it", medium: "Check before acting", low: "Directional only", none: "Not usable yet" };
  const rPct = { high: 100, medium: 65, low: 32, none: 8 };

  const live = d.sources.filter((s) => s.status === "live").length;

  return (
    <div className="page-enter">
      <SectionHead
        title="Data health"
        sub={d.note}
      />

      <Grid cols={4} gap={20} style={{ marginBottom: 36 }}>
        <Stat label="Sources connected" value={`${live} of ${d.sources.length}`} sub="Feeding the dashboard" tone={live > 7 ? "good" : "warn"} trust="good" />
        <Stat label="Blocked on access" value="3" sub="Packiyo, Klaviyo, Test Partner" tone="bad" trust="good" />
        <Stat label="Numbers you can act on" value="3 of 9" sub="The rest need work first" tone="warn" trust="good" />
        <Stat label="Waiting on the kitchen" value="1" sub="Margin per unit" tone="warn" trust="good" />
      </Grid>

      <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1fr 1.15fr" }}>
        <Card>
          <SectionHead title="Where the data comes from" style={{ marginBottom: 16 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {d.sources.map((s) => (
              <div key={s.name} style={{ display: "grid", gridTemplateColumns: "1fr auto",
                            gap: 12, alignItems: "center", padding: "10px 2px",
                            borderBottom: "1px solid var(--rule-soft)" }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-mute)" }}>{s.detail}</div>
                </div>
                <Badge tone={sTone[s.status]}>{sLabel[s.status]}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHead title="How much to trust each number"
            sub="Green means act on it. Red means it exists as a shape, not a fact."
            style={{ marginBottom: 16 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            {d.reliability.map((r) => (
              <div key={r.area}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12,
                              alignItems: "center", marginBottom: 5 }}>
                  <span style={{ fontSize: 13.5, fontWeight: 500 }}>{r.area}</span>
                  <Badge tone={rTone[r.level]}>{rLabel[r.level]}</Badge>
                </div>
                <Bar pct={rPct[r.level]} tone={rTone[r.level]} height={5} />
                <p style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 5 }}>{r.note}</p>
              </div>
            ))}
          </div>
        </Card>
      </Grid>

      <div style={{ height: 32 }} />
      <Note tone="info" icon="i">
        This page exists because a dashboard that shows a confident wrong number is more dangerous than one
        that admits what it doesn't know. As sources connect and the attribution rebuild lands, rows move up
        this list and the tiles they feed stop carrying a warning.
      </Note>
    </div>
  );
}
