// pages-b.jsx — Revenue & Rails, Margin & Unit Economics, Subscribers & Retention

/* ============================================================ REVENUE */
function PageRevenue() {
  const r = MYND.revenue;
  const [tab, setTab] = useState("rails");
  const totalGross = r.rails.reduce((s, x) => s + x.gross, 0);
  const totalFees = r.rails.reduce((s, x) => s + x.fees, 0);
  const totalReserve = r.rails.reduce((s, x) => s + x.reserve, 0);

  return (
    <div className="page-enter">
      <SectionHead
        title="Revenue and the rails"
        sub="Your books counted one processor out of four. This is all of them, gross in, fees out, net to bank, so nothing hides in the deposit."
      />

      <Grid cols={4} gap={20} style={{ marginBottom: 22 }}>
        <Stat label="Gross revenue" value={fmt.usd(totalGross)} sub="All four rails, last 30 days" tone="neutral" trust="good" />
        <Stat label="Processing cost" value={fmt.usd(totalFees)} sub={fmt.pct((totalFees / totalGross) * 100, 2) + " all in"} tone="bad" trust="good"
              tip="Against a 1.5% discount rate. The gap is interchange, passed straight through." />
        <Stat label="Held in reserve" value={fmt.usd(totalReserve)} sub="Never released since the accounts opened" tone="warn" trust="good" />
        <Stat label="Net to bank" value={fmt.usd(totalGross - totalFees - totalReserve)} sub="What actually lands" tone="good" trust="good" />
      </Grid>

      <Note tone="bad" icon="!">{r.processingNote}</Note>
      <div style={{ height: 32 }} />

      <SectionHead title="Breakdown"
        right={<Seg options={[{ v: "rails", l: "By rail" }, { v: "channels", l: "By channel" }, { v: "ship", l: "Shipments" }]}
          value={tab} onChange={setTab} />} />

      {tab === "rails" && (
        <>
          <Card style={{ marginBottom: 16 }}>
            <div className="scroll-x">
              <table className="tbl">
                <thead><tr>
                  <th>Rail</th><th style={{ textAlign: "right" }}>Gross</th><th style={{ textAlign: "right" }}>Fees</th>
                  <th style={{ textAlign: "right" }}>Reserve</th><th style={{ textAlign: "right" }}>Net</th>
                  <th style={{ textAlign: "right" }}>All in</th><th style={{ textAlign: "right" }}>Approval</th>
                  <th style={{ textAlign: "right" }}>Chargeback</th><th>Volume against cap</th>
                </tr></thead>
                <tbody>
                  {r.rails.map((x) => (
                    <tr key={x.name}>
                      <td>
                        <div style={{ fontWeight: 600, marginBottom: 2 }}>{x.name}</div>
                        <div style={{ fontSize: 11, color: "var(--ink-mute)", maxWidth: 260 }}>{x.note}</div>
                      </td>
                      <td className="num" style={{ textAlign: "right" }}>{fmt.usd(x.gross)}</td>
                      <td className="num" style={{ textAlign: "right", color: "var(--bad)" }}>{x.fees ? "-" + fmt.usd(x.fees) : "—"}</td>
                      <td className="num" style={{ textAlign: "right", color: x.reserve ? "var(--warn)" : "var(--ink-mute)" }}>
                        {x.reserve ? "-" + fmt.usd(x.reserve) : "—"}</td>
                      <td className="num" style={{ textAlign: "right", fontWeight: 600 }}>{fmt.usd(x.net)}</td>
                      <td className="num" style={{ textAlign: "right", color: x.pct > 4.5 ? "var(--bad)" : "var(--warn)" }}>
                        {x.pct ? fmt.pct(x.pct, 2) : "—"}</td>
                      <td className="num" style={{ textAlign: "right",
                        color: x.approval >= 95 ? "var(--good)" : x.approval >= 92 ? "var(--warn)" : x.approval ? "var(--bad)" : "var(--ink-mute)" }}>
                        {x.approval ? fmt.pct(x.approval) : "—"}</td>
                      <td className="num" style={{ textAlign: "right" }}>{x.chargeback ? fmt.pct(x.chargeback, 2) : "—"}</td>
                      <td style={{ width: 160 }}>
                        {x.cap ? (
                          <div>
                            <Bar pct={(x.gross / x.cap) * 100} tone={x.gross / x.cap > 0.8 ? "bad" : x.gross / x.cap > 0.6 ? "warn" : "good"} height={5} />
                            <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)" }}>
                              {fmt.usdK(x.gross)} of {fmt.usdK(x.cap)}
                            </span>
                          </div>
                        ) : <span style={{ color: "var(--ink-mute)", fontSize: 11 }}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Note tone="warn" icon="!">
            The Kurv rail is capped at $25,000 in any 30 day period, contractual, with termination rights if it's breached.
            Across all rails you top out around $125,000 a month. A $3M run rate needs about $250,000.
          </Note>
        </>
      )}

      {tab === "channels" && (
        <>
          <Card style={{ marginBottom: 16 }}>
            <SectionHead title="Revenue by channel"
              sub="Three of these can't be trusted. Every order without an affiliate link has been credited to an internal test account since April."
              style={{ marginBottom: 18 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {r.channels.map((c) => (
                <div key={c.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 5, alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13.5 }}>
                      {c.name}
                      {c.trust !== "good" && <Trust level={c.trust} />}
                    </span>
                    <span className="mono" style={{ fontSize: 13.5, fontWeight: 600,
                      color: c.trust === "blocked" ? "var(--ink-mute)" : "var(--ink)" }}>
                      {fmt.usd(c.rev)}
                    </span>
                  </div>
                  <Bar pct={c.share} tone={c.trust === "blocked" ? "mute" : c.trust === "mock" ? "info" : "accent"} height={5} />
                  {c.note && <p style={{ fontSize: 10.5, color: "var(--ink-mute)", marginTop: 5 }}>{c.note}</p>}
                </div>
              ))}
            </div>
          </Card>
          <Blocked title="Channel revenue is not reliable yet"
            note="The affiliate tag fires on page load, so anything without an affiliate link defaults to an internal test account, and stored IDs never expire. Attribution gets rebuilt with a thirty day window in Phase 3. Until then these splits show shape, not truth." />
        </>
      )}

      {tab === "ship" && (
        <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1fr 1.3fr" }}>
          <Card>
            <SectionHead title="Shipments against orders" sub="July" style={{ marginBottom: 20 }} />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <Donut value={r.shipments.invisible} max={r.shipments.total} size={158} tone="bad"
                     label={fmt.pct(r.shipments.invisiblePct)} sub="invisible" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[["Total shipments", r.shipments.total, "neutral"],
                ["Touched the order platform", r.shipments.onPlatform, "good"],
                ["Never touched it", r.shipments.invisible, "bad"]].map(([l, v, t]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>{l}</span>
                  <span className="mono" style={{ fontSize: 13.5, fontWeight: 600, color: toneVar(t) }}>{fmt.num(v)}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <SectionHead title="What the invisible third is"
              sub="Wholesale, samples, reships and comps go straight to the warehouse and never get recorded as an order."
              style={{ marginBottom: 18 }} />
            <BarChart horizontal valueFmt={fmt.num} data={[
              { m: "Wholesale", v: 48, tone: "info" },
              { m: "Samples to creators", v: 34, tone: "warn" },
              { m: "Reships", v: 26, tone: "warn" },
              { m: "Comps", v: 17, tone: "bad" },
            ]} />
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                Every one of these consumes stock and costs money. None of them appear as a sale, so shipments
                and revenue never tie, and inventory counts drift. The fix is a cost line and a flag on each,
                recorded at the point they ship.
              </p>
            </div>
          </Card>
        </Grid>
      )}
    </div>
  );
}

/* ============================================================ MARGIN */
function PageMargin() {
  const m = MYND.margin;
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Chocolate", "Gummies", "Capsules", "Other"];
  const rows = m.offers.filter((o) => filter === "All" || o.cat === filter);
  const k = m.kitchen;

  return (
    <div className="page-enter">
      <SectionHead
        title="Margin and unit economics"
        sub="What a bar actually costs to make, and what's left after everything variable comes off. Half of this is a placeholder until the kitchen starts logging."
      />

      <Grid cols={4} gap={20} style={{ marginBottom: 22 }}>
        <Stat label="Contribution margin" value={fmt.usd(31200)} sub="Net sales less product, variable and ad spend" tone="good" trust="mock"
              tip="The daily number the whole business should orbit. Not gross margin, not net profit." />
        <Stat label="Gross margin" value="~90%" sub="On chocolate, rebuilt from scratch" tone="good" trust="good" />
        <Stat label="Products with a real cost" value="4 of 10" sub="Six still on the $10 placeholder" tone="bad" trust="good" />
        <Stat label="Runs logged" value={`${k.runsLogged} of ${k.runsNeeded}`} sub="Three runs a product" tone="bad" trust="waiting" />
      </Grid>

      <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1.3fr 1fr", marginBottom: 36 }}>
        <Card>
          <SectionHead title="Contribution margin, monthly" sub={m.contributionNote} style={{ marginBottom: 18 }} />
          <LineChart data={m.contribution} tone="good" height={190} valueFmt={fmt.usdK} />
        </Card>
        <Card>
          <SectionHead title="The kitchen ledger" sub={k.note} style={{ marginBottom: 18 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
            <Donut value={k.runsLogged} max={k.runsNeeded} size={104} tone="warn"
                   label={`${k.runsLogged}`} sub={`of ${k.runsNeeded}`} />
            <div>
              <div style={{ fontSize: 13.5, marginBottom: 6 }}>
                <b>{k.products}</b> products, three runs each
              </div>
              <div style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>
                Next run: <b style={{ color: "var(--warn)" }}>{k.nextRun}</b>
              </div>
            </div>
          </div>
          <div className="eyebrow" style={{ marginBottom: 9 }}>Confirmed rates</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {k.rates.map((x) => (
              <div key={x.label} style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>{x.label}</span>
                <span className="mono" style={{ fontSize: 13 }}>{x.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </Grid>

      <SectionHead title="Offers and margin"
        sub="Anything still showing a $10 cost is a placeholder, not a measurement."
        right={<Seg options={cats} value={filter} onChange={setFilter} />} />
      <Card>
        <div className="scroll-x">
          <table className="tbl">
            <thead><tr>
              <th>Product</th><th>Category</th><th style={{ textAlign: "right" }}>Price</th>
              <th style={{ textAlign: "right" }}>Cost</th><th>Cost basis</th>
              <th style={{ textAlign: "right" }}>Margin</th><th style={{ textAlign: "right" }}>Units</th>
              <th>Share of revenue</th>
            </tr></thead>
            <tbody>
              {rows.map((o) => (
                <tr key={o.sku}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{o.sku}</div>
                    {o.note && <div style={{ fontSize: 10.5, color: "var(--ink-mute)" }}>{o.note}</div>}
                  </td>
                  <td><Badge tone={o.cat === "Chocolate" ? "accent" : o.cat === "Gummies" ? "info" : "mute"}>{o.cat}</Badge></td>
                  <td className="num" style={{ textAlign: "right" }}>{o.price ? fmt.usd(o.price) : "unknown"}</td>
                  <td className="num" style={{ textAlign: "right",
                    color: o.costBasis === "placeholder" ? "var(--bad)" : "var(--ink)" }}>{fmt.usd(o.cost, 2)}</td>
                  <td>{o.costBasis === "rebuilt"
                    ? <Badge tone="good">Measured</Badge>
                    : <Badge tone="bad">Placeholder</Badge>}</td>
                  <td className="num" style={{ textAlign: "right", fontWeight: 600,
                    color: o.margin ? "var(--good)" : "var(--ink-mute)" }}>
                    {o.margin ? fmt.pct(o.margin) : "unknown"}</td>
                  <td className="num" style={{ textAlign: "right" }}>{o.units || "—"}</td>
                  <td style={{ width: 150 }}>
                    {o.share ? <Bar pct={o.share * 4} tone="accent" height={5} /> : <span style={{ color: "var(--ink-mute)", fontSize: 11 }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <div style={{ height: 16 }} />
      <Note tone="bad" icon="!">
        Six of ten products carry a $10 placeholder that somebody typed in once. It's 54% of your cost of goods,
        it includes two products that were never made, and you've been pricing against it since the 20% rise.
        Every margin call this year rests on it.
      </Note>
    </div>
  );
}

/* ============================================================ SUBSCRIBERS */
function PageSubs() {
  const s = MYND.subs;
  const maxFunnel = s.funnel[0].n;

  return (
    <div className="page-enter">
      <SectionHead
        title="Subscribers and retention"
        sub="A million subscribers is meaningless if nobody rebills. This is who actually re-orders, and where they fall off."
      />

      <Grid cols={6} gap={20} name="3" style={{ marginBottom: 36 }}>
        {s.kpi.map((k) => <Stat key={k.label} {...k} />)}
      </Grid>

      <Grid cols={2} name="2-1" gap={24} style={{ gridTemplateColumns: "1.25fr 1fr", marginBottom: 36 }}>
        <Card>
          <SectionHead title="Rebill rate, monthly" sub={s.rebillNote} style={{ marginBottom: 18 }} />
          <LineChart data={s.rebillTrend} tone="good" height={195} target={60} targetLabel="60% target"
                     valueFmt={(v) => v + "%"} yMin={0} yMax={110} />
        </Card>
        <Card>
          <SectionHead title="Where subscribers fall off" sub="Out of 223 orders in July." style={{ marginBottom: 18 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {s.funnel.map((f, i) => {
              const pct = (f.n / maxFunnel) * 100;
              const tone = i === 0 ? "info" : i < 3 ? "warn" : "bad";
              return (
                <div key={f.stage}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13 }}>{f.stage}</span>
                    <span className="mono" style={{ fontSize: 13, fontWeight: 600, color: toneVar(tone) }}>
                      {f.n} <span style={{ color: "var(--ink-mute)", fontWeight: 400 }}>· {fmt.pct(pct, 0)}</span>
                    </span>
                  </div>
                  <Bar pct={pct} tone={tone} height={7} />
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 18, paddingTop: 15, borderTop: "1px solid var(--rule)" }}>
            <p style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
              Some of this is churn and some of it is failed payments that were never retried properly.
              The retry rebuild has to land before any retention offer, or you'll be solving a billing
              problem with a marketing one.
            </p>
          </div>
        </Card>
      </Grid>

      <SectionHead title="Retention by cohort" sub="Percent still active at one, three, six and twelve months." />
      <Card style={{ marginBottom: 36 }}>
        <div className="scroll-x">
          <table className="tbl">
            <thead><tr>
              <th>Cohort</th><th style={{ textAlign: "right" }}>Subscribers</th>
              <th style={{ textAlign: "center" }}>Month 1</th><th style={{ textAlign: "center" }}>Month 3</th>
              <th style={{ textAlign: "center" }}>Month 6</th><th style={{ textAlign: "center" }}>Month 12</th>
            </tr></thead>
            <tbody>
              {s.cohorts.map((c) => (
                <tr key={c.c}>
                  <td style={{ fontWeight: 600 }}>{c.c}</td>
                  <td className="num" style={{ textAlign: "right" }}>{fmt.num(c.n)}</td>
                  {["m1", "m3", "m6", "m12"].map((k) => (
                    <td key={k} style={{ textAlign: "center" }}>
                      {c[k] === null ? <span style={{ color: "var(--ink-mute)" }}>—</span> : (
                        <Badge tone={c[k] >= 60 ? "good" : c[k] >= 20 ? "warn" : "bad"}>{c[k]}%</Badge>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <SectionHead title="Lifetime value" />
      <Blocked title="Lifetime value can't be built yet, and a number here today would be fiction"
        note={s.ltv.note} fields={s.ltv.fields} />
    </div>
  );
}
