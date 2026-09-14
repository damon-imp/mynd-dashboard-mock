// app.jsx — shell, navigation, theme, routing

const TABS = [
  { id: "overview",  label: "Overview",    icon: "grid" },
  { id: "cash",      label: "Cash & Money OS", icon: "wallet" },
  { id: "revenue",   label: "Revenue & Rails", icon: "trend" },
  { id: "margin",    label: "Margin & Units",  icon: "bars" },
  { id: "subs",      label: "Subscribers",     icon: "users" },
  { id: "inventory", label: "Inventory",       icon: "box" },
  { id: "team",      label: "Team",            icon: "badge" },
  { id: "data",      label: "Data Health",     icon: "pulse" },
];

function Icon({ name, size = 15 }) {
  const p = {
    grid:   <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    wallet: <><rect x="2.5" y="6" width="19" height="13" rx="2.5" /><path d="M2.5 10h19M17 14.5h.01" /></>,
    trend:  <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
    bars:   <><path d="M5 20V10M12 20V4M19 20v-7" /></>,
    users:  <><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><path d="M16.5 5.5a3.2 3.2 0 010 5.6M18 20c0-2.4-.8-4.4-2.2-5.6" /></>,
    box:    <><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></>,
    badge:  <><circle cx="12" cy="9" r="4" /><path d="M7 14.5L5.5 21l6.5-3 6.5 3-1.5-6.5" /></>,
    pulse:  <><path d="M2.5 12h4l2.5-7 4 14 2.5-7h5.5" /></>,
  }[name];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{p}</svg>
  );
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <img src="assets/mynd-logo.svg" alt="MYND"
           style={{ height: 19, width: "auto",
                    filter: "var(--logo-filter)" }} />
      <span style={{ width: 1, height: 20, background: "var(--rule)" }} />
      <span style={{ fontSize: 12, color: "var(--ink-soft)", letterSpacing: "-0.01em",
                     fontWeight: 500, whiteSpace: "nowrap" }}>
        Operations Dashboard
      </span>
    </div>
  );
}

function ThemeToggle({ theme, setTheme }) {
  const dark = theme === "dark";
  return (
    <button onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{ appearance: "none", border: "1px solid var(--rule)", background: "var(--bg-3)",
               width: 52, height: 28, borderRadius: 999, position: "relative", cursor: "pointer",
               padding: 0, transition: "background 220ms ease, border-color 220ms ease", flexShrink: 0 }}>
      <span style={{ position: "absolute", top: 2.5, left: dark ? 2.5 : 26, width: 22, height: 22,
                     borderRadius: 999, background: "var(--accent)", display: "grid", placeItems: "center",
                     transition: "left 260ms cubic-bezier(0.22,0.68,0,1)", boxShadow: "var(--shadow-sm)" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {dark
            ? <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
            : <><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>}
        </svg>
      </span>
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [tab, setTab] = useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return TABS.some((t) => t.id === h) ? h : "overview";
  });
  const [range, setRange] = useState("30d");

  useEffect(() => { document.body.setAttribute("data-theme", theme); }, [theme]);

  useEffect(() => {
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || "").replace("#", "");
      if (TABS.some((t) => t.id === h) && h !== tab) setTab(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [tab]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= TABS.length) setTab(TABS[n - 1].id);
      if (e.key === "t" || e.key === "T") setTheme((s) => (s === "dark" ? "light" : "dark"));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Page = {
    overview:  <PageOverview go={setTab} />,
    cash:      <PageCash />,
    revenue:   <PageRevenue />,
    margin:    <PageMargin />,
    subs:      <PageSubs />,
    inventory: <PageInventory />,
    team:      <PageTeam />,
    data:      <PageData />,
  }[tab];

  return (
    <div style={{ minHeight: "100vh", background: "var(--page)" }}>
      {/* top bar */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--surface)",
                       borderBottom: "1px solid var(--rule)",
                       backdropFilter: "saturate(180%) blur(14px)" }}>
        <div className="wrap nav-row" style={{ minHeight: "var(--nav-h)", display: "flex",
                      alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Logo />
          <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="hide-sm" style={{ fontSize: 11.5, color: "var(--ink-mute)" }}>
              {MYND.meta.asOf}
            </span>
            <Seg className="hide-sm"
              options={[{ v: "7d", l: "7d" }, { v: "30d", l: "30d" }, { v: "90d", l: "90d" }, { v: "ytd", l: "YTD" }]}
              value={range} onChange={setRange} />
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
        <div className="wrap tabstrip-wrap">
          <nav className="tabstrip" aria-label="Sections">
            {TABS.map((t) => (
              <button key={t.id} className="tab" data-on={tab === t.id} onClick={() => setTab(t.id)}>
                <Icon name={t.icon} />
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* phase strip */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap" style={{ padding: "10px 28px", display: "flex", alignItems: "center",
                      gap: 16, flexWrap: "wrap" }}>
          <Badge tone="accent" solid>{MYND.meta.phase}</Badge>
          <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>
            Day <b style={{ color: "var(--ink)" }}>{MYND.meta.day}</b> of {MYND.meta.ofDays}
          </span>
          <div style={{ flex: 1, minWidth: 120, maxWidth: 320 }}>
            <Bar pct={(MYND.meta.day / MYND.meta.ofDays) * 100} tone="accent" height={4} />
          </div>
          <span className="hide-sm" style={{ fontSize: 11.5, color: "var(--ink-mute)" }}>
            Gate 3 on 17 Nov · Close-out 31 Jan
          </span>
        </div>
      </div>

      <main className="wrap" style={{ padding: "36px 28px 90px" }}>
        {Page}
      </main>

      <footer style={{ borderTop: "1px solid var(--rule)", padding: "22px 0 40px" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between",
                      gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 11.5, color: "var(--ink-mute)" }}>
            MYND Operations Dashboard · Mock for review · Built by OpFix
          </span>
          <span style={{ fontSize: 11.5, color: "var(--ink-mute)" }}>
            Press <b style={{ color: "var(--ink-soft)" }}>1</b> to <b style={{ color: "var(--ink-soft)" }}>8</b> to switch tabs,{" "}
            <b style={{ color: "var(--ink-soft)" }}>T</b> for theme
          </span>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
