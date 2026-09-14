// pages-a.jsx — Overview, Cash & Money OS

/* ============================================================ OVERVIEW */
function PageOverview({ go }) {
  const [done, setDone] = useState({});
  const d = MYND;
  const doneCount = Object.values(done).filter(Boolean).length;

  const levelMap = {
    urgent: { tone: "bad", label: "Urgent" },
    action: { tone: "warn", label: "Action" },
    opportunity: { tone: "good", label: "Opportunity" },
  };

  return (
    <div className="page-enter">
      <SectionHead
        title="This week's decisions"
        sub="The things that actually need you. Everything else on this dashboard is there so these stay short."
        right={<Badge tone={doneCount === d.decisions.length ? "good" : "mute"}>
          {doneCount} / {d.decisions.length} done
        </Badge>}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 40 }}>
        {d.decisions.map((x) => {
          const L = levelMap[x.level];
          const isDone = !!done[x.id];
          return (
            <Card key={x.id} pad={0} hover style={{
              borderLeft: `3px solid ${toneVar(L.tone)}`, opacity: isDone ? 0.5 : 1,
              transition: "opacity 260ms ease",
            }}>
              <div style={{ display: "flex", gap: 14, padding: "15px 18px", alignItems: "flex-start" }}>
                <button onClick={() => setDone((s) => ({ ...s, [x.id]: !s[x.id] }))}
                  style={{ width: 19, height: 19, borderRadius: 999, flexShrink: 0, marginTop: 2,
                           border: `1.5px solid ${isDone ? toneVar("good") : "var(--ink-mute)"}`,
                           background: isDone ? toneVar("good") : "transparent", cursor: "pointer",
                           display: "grid", placeItems: "center", padding: 0,
                           transition: "all 180ms ease" }}>
                  {isDone && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </button>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5, flexWrap: "wrap" }}>
                    <Badge tone={L.tone} solid>{L.label}</Badge>
                    <span style={{ fontSize: 14.5, fontWeight: 600,
                                   textDecoration: isDone ? "line-through" : "none" }}>{x.title}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>{x.body}</p>
                  {x.meta && <p style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 6 }}>{x.meta}</p>}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <SectionHead title="The numbers" sub="Six things worth knowing cold, at a glance." />
      <Grid cols={6} gap={20} name="4" style={{ marginBottom: 40 }}>
        {d.headline.map((h) => (
          <Stat key={h.key} {...h} onClick={
            h.key === "cash" || h.key === "debt" ? () => go("cash")
            : h.key === "approval" ? () => go("revenue")
            : h.key === "cover" ? () => go("inventory")
            : h.key === "fixed" || h.key === "result" ? () => go("margin") : undefined
          } />
        ))}
      </Grid>

      <Grid cols={2} gap={24} style={{ marginBottom: 40 }}>
        <Card>
          <SectionHead title="Revenue, last nine months"
            sub="Down a third since November with nobody watching. That's what the books not working looks like."
            style={{ marginBottom: 18 }} />
          <BarChart data={MYND.revenue.monthly.map((r, i) => ({
            ...r, tone: i === MYND.revenue.monthly.length - 1 ? "accent" : "info",
          }))} height={168} />
        </Card>
        <Card>
          <SectionHead title="Where the money sits"
            sub="Two banks on purpose. Mercury runs it, BlueBanc holds settlement."
            style={{ marginBottom: 18 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {MYND.cash.accounts.map((a) => (
              <div key={a.name}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 5 }}>
                  <span style={{ fontSize: 13 }}>{a.name}</span>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{fmt.usd(a.balance)}</span>
                </div>
                <Bar pct={(a.balance / MYND.cash.total) * 100} tone={a.tone} height={5} />
                <p style={{ fontSize: 10.5, color: "var(--ink-mute)", marginTop: 5 }}>{a.role}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 11, display: "flex",
                          justifyContent: "space-between" }}>
              <span style={{ fontSize: 13.5, fontWeight: 600 }}>Total</span>
              <span className="mono" style={{ fontSize: 15, fontWeight: 600 }}>{fmt.usd(MYND.cash.total)}</span>
            </div>
          </div>
        </Card>
      </Grid>

      <SectionHead title="The whole P&L in four lines"
        sub="Cost of delivery, marketing, OPEX, profit. Benchmarks on the right are where a healthy DTC business sits." />
      <Card style={{ marginBottom: 20 }}>
        <div className="scroll-x">
          <table className="tbl">
            <thead><tr>
              <th>Line</th><th style={{ textAlign: "right" }}>Amount</th>
              <th style={{ textAlign: "right" }}>% of revenue</th><th>Against benchmark</th><th>Benchmark</th><th>What's in it</th>
            </tr></thead>
            <tbody>
              {MYND.fourQuarter.rows.map((r) => (
                <tr key={r.line}>
                  <td style={{ fontWeight: 600 }}>{r.line}</td>
                  <td className="num" style={{ textAlign: "right" }}>{fmt.usd(r.value)}</td>
                  <td className="num" style={{ textAlign: "right", color: toneVar(r.tone), fontWeight: 600 }}>
                    {fmt.pct(r.pct)}
                  </td>
                  <td style={{ width: 150 }}><Bar pct={Math.min(r.pct * 2, 100)} tone={r.tone} height={5} /></td>
                  <td style={{ color: "var(--ink-mute)", fontSize: 12.5 }}>{r.bench}</td>
                  <td style={{ color: "var(--ink-soft)", fontSize: 12.5 }}>{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Note tone="warn" icon="!">
        {MYND.fourQuarter.note}
      </Note>
    </div>
  );
}

/* ============================================================ CASH */
function PageCash() {
  const c = MYND.cash;
  const [view, setView] = useState("buckets");
  const sweep = 46814 - 14050;
  const floorPct = (c.total / c.floor) * 100;

  return (
    <div className="page-enter">
      <SectionHead
        title="Cash and the money system"
        sub="What you can actually spend, where it sits, and what it's already committed to. Money routes itself on the way in rather than waiting for you to decide."
      />

      <Grid cols={4} gap={20} style={{ marginBottom: 22 }}>
        <Stat label="Cash on hand" value={fmt.usd(c.total)} sub="Across two banks" tone="neutral" trust="good" />
        <Stat label="Operating floor" value={fmt.usd(c.floor)} sub={c.floorBasis} tone="accent" trust="waiting"
              tip="The number the operating account never drops below. Everything above it sweeps." />
        <Stat label="Free above the floor" value={fmt.usd(c.total - c.floor)} sub="What the buckets can take"
              tone={c.total > c.floor ? "good" : "bad"} trust="good" />
        <Stat label="Card headroom" value={fmt.usd(c.card.available)} sub={`From ${fmt.usd(c.card.prevAvailable)} on Aug 22`}
              delta={4623} deltaLabel="recovered" tone="good" trust="good" />
      </Grid>

      <Note tone="warn" icon="!">{c.floorNote}</Note>

      <div style={{ height: 34 }} />

      <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1.35fr 1fr", marginBottom: 36 }}>
        <Card>
          <SectionHead title="Cash across both banks"
            sub="Mercury drained from $95,621 in March to under $7,000 while BlueBanc filled. The money moved, it didn't vanish."
            style={{ marginBottom: 18 }} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 180,
                        borderBottom: "1px solid var(--rule)" }}>
            {c.trail.map((t) => {
              const tot = t.bluebanc + t.mercury;
              const max = 100000;
              return (
                <div key={t.m} className="tip" style={{ flex: 1, display: "flex", flexDirection: "column",
                              justifyContent: "flex-end", height: "100%", gap: 2 }}>
                  <div style={{ height: (t.mercury / max) * 100 + "%", background: "var(--accent)",
                                borderRadius: "3px 3px 0 0", minHeight: 2 }} />
                  <div style={{ height: (t.bluebanc / max) * 100 + "%", background: "var(--info)",
                                borderRadius: "0 0 3px 3px", minHeight: 2 }} />
                  <span className="tip-body">{t.m}<br />Mercury {fmt.usdK(t.mercury)}<br />BlueBanc {fmt.usdK(t.bluebanc)}<br />Total {fmt.usdK(tot)}</span>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 7 }}>
            {c.trail.map((t) => <span key={t.m} style={{ flex: 1, textAlign: "center", fontSize: 10.5, color: "var(--ink-mute)" }}>{t.m}</span>)}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 14 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--ink-soft)" }}>
              <i style={{ width: 8, height: 8, borderRadius: 2, background: "var(--accent)" }} /> Mercury</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--ink-soft)" }}>
              <i style={{ width: 8, height: 8, borderRadius: 2, background: "var(--info)" }} /> BlueBanc</span>
          </div>
        </Card>

        <Card>
          <SectionHead title="The card" sub="Paid down $21,643 in four weeks." style={{ marginBottom: 18 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <Donut value={c.card.owed} max={c.card.limit} size={124} tone={c.card.owed / c.card.limit > 0.7 ? "bad" : "good"}
                   label={Math.round((c.card.owed / c.card.limit) * 100) + "%"} sub="used" />
            <div style={{ display: "flex", flexDirection: "column", gap: 13, minWidth: 0 }}>
              {[["Limit", c.card.limit, "mute"], ["Owed", c.card.owed, "bad"], ["Available", c.card.available, "good"]].map(([l, v, t]) => (
                <div key={l}>
                  <div className="eyebrow" style={{ marginBottom: 2 }}>{l}</div>
                  <div className="mono" style={{ fontSize: 16, fontWeight: 600, color: toneVar(t) }}>{fmt.usd(v)}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 18, paddingTop: 15, borderTop: "1px solid var(--rule)" }}>
            <p style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
              The Q4 plan draws <b style={{ color: "var(--ink)" }}>$20,000</b> of this. That leaves{" "}
              <b style={{ color: "var(--bad)" }}>{fmt.usd(c.card.available - 20000)}</b> of headroom, which is
              roughly where you were in August.
            </p>
          </div>
        </Card>
      </Grid>

      <SectionHead title="The waterfall"
        sub="Operating fills to the floor first. Everything above it splits five ways on the percentages you set, on the way in."
        right={<Seg options={[{ v: "buckets", l: "Buckets" }, { v: "flow", l: "Flow" }]} value={view} onChange={setView} />} />

      {view === "buckets" ? (
        <Grid cols={3} gap={20} style={{ marginBottom: 36 }}>
          {c.buckets.map((b) => (
            <Card key={b.name} hover>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14.5, fontWeight: 600 }}>{b.name}</span>
                    {b.pct !== null && <Badge tone={b.tone}>{b.pct}%</Badge>}
                  </div>
                  <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-mute)" }}>Code {b.code}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 9 }}>
                <span className="mono" style={{ fontSize: 20, fontWeight: 600, color: toneVar(b.tone) }}>
                  {fmt.usd(b.balance)}
                </span>
                <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>of {fmt.usd(b.target)}</span>
              </div>
              <Bar pct={(b.balance / (b.target || 1)) * 100} tone={b.tone} height={5} />
              <p style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 10 }}>{b.note}</p>
            </Card>
          ))}
        </Grid>
      ) : (
        <Card pad={26} style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { l: "Money comes in", v: fmt.usd(46814), t: "info", d: "Settles into BlueBanc, sweeps to Mercury Operating" },
              { l: "Operating fills to the floor", v: fmt.usd(c.floor), t: "accent", d: "Rent, payroll, software, support. Everything that keeps the lights on" },
              { l: "The rest sweeps", v: fmt.usd(sweep), t: "good", d: "Whatever is above the floor moves to the sweep account" },
            ].map((r, i) => (
              <div key={i}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center",
                              padding: "15px 17px", background: toneTint(r.t), borderRadius: "var(--r-md)",
                              border: `1px solid ${toneVar(r.t)}26` }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>{r.l}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>{r.d}</div>
                  </div>
                  <span className="mono" style={{ fontSize: 17, fontWeight: 600, color: toneVar(r.t) }}>{r.v}</span>
                </div>
                {i < 2 && <div style={{ textAlign: "center", color: "var(--ink-mute)", fontSize: 15, padding: "4px 0" }}>↓</div>}
              </div>
            ))}
            <div style={{ textAlign: "center", color: "var(--ink-mute)", fontSize: 15, padding: "4px 0" }}>↓</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }} data-grid="4">
              {c.buckets.filter((b) => b.pct !== null).map((b) => (
                <div key={b.name} style={{ padding: "13px 12px", background: "var(--bg-3)",
                              borderRadius: "var(--r-md)", border: "1px solid var(--rule)", textAlign: "center" }}>
                  <div className="eyebrow" style={{ marginBottom: 5 }}>{b.name}</div>
                  <div className="mono" style={{ fontSize: 16, fontWeight: 600, color: toneVar(b.tone) }}>{b.pct}%</div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 3 }}>{fmt.usd(b.target)}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1fr 1.15fr" }}>
        <Card>
          <SectionHead title="What you owe" sub="Three obligations, one of them undated." style={{ marginBottom: 16 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {c.debt.map((x) => (
              <div key={x.label}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 4 }}>
                  <span style={{ fontSize: 13.5 }}>{x.label}</span>
                  <span className="mono" style={{ fontSize: 13.5, fontWeight: 600 }}>{fmt.usd(x.value)}</span>
                </div>
                <p style={{ fontSize: 11, color: "var(--ink-mute)" }}>{x.note}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 13, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13.5, fontWeight: 600 }}>Total</span>
              <span className="mono" style={{ fontSize: 16, fontWeight: 600 }}>
                {fmt.usd(c.debt.reduce((s, x) => s + x.value, 0))}
              </span>
            </div>
          </div>
          <div style={{ marginTop: 18, paddingTop: 15, borderTop: "1px solid var(--rule)" }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Next 30 days out</div>
            {c.outflows30.map((o) => (
              <div key={o.band} style={{ marginBottom: 11 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>{o.band}</span>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{fmt.usd(o.amount)}</span>
                </div>
                <p style={{ fontSize: 10.5, color: "var(--ink-mute)" }}>{o.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHead title="Buyout schedule"
            sub="Nine payments through May 2027. The first was the largest because it carried grace interest."
            style={{ marginBottom: 16 }} />
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>Date</th><th style={{ textAlign: "right" }}>Amount</th><th>Status</th><th>Note</th></tr></thead>
              <tbody>
                {c.schedule.map((s) => (
                  <tr key={s.date} style={{ opacity: s.status === "planned" ? 0.62 : 1 }}>
                    <td style={{ fontWeight: s.status === "next" ? 600 : 400 }}>{s.date}</td>
                    <td className="num" style={{ textAlign: "right" }}>{fmt.usd(s.amount, 2)}</td>
                    <td>
                      {s.status === "paid" && <Badge tone="good">Paid</Badge>}
                      {s.status === "next" && <Badge tone="warn" solid>Next</Badge>}
                      {s.status === "planned" && <Badge tone="mute">Planned</Badge>}
                    </td>
                    <td style={{ fontSize: 12, color: "var(--ink-mute)" }}>{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Grid>
    </div>
  );
}
