import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const RESEARCH = [
  { title: "Calibre AMB-02/1", year: "2026" },
  { title: "ACF-03 Design", year: "2025" },
  { title: "ACF-02 Design", year: "2024" },
  { title: "ACF-01 Frame", year: "2024" },
  { title: "Caliber AMBˣ Tests", year: "2024" },
  { title: "Prototypes #01 – #02", year: "2023" },
  { title: "Generative Design", year: "2023" },
  { title: "Prototype #01", year: "2023" },
  { title: "Prototypes AMBˣ", year: "2023" },
  { title: "Double Wishbone", year: "2023" },
  { title: "Tourbillon Cage", year: "2023" },
  { title: "Case", year: "2023" },
  { title: "Glass", year: "2022" },
];

const ETHOS = [
  {
    num: "01",
    label: "Design",
    body: "The design philosophy behind each WRK timepiece is the fusion of art and engineering, where aesthetics seamlessly coalesce with functionality.",
  },
  {
    num: "02",
    label: "Engineering",
    body: "Technique driven with precision and passion. Manufacturing exclusive timepieces, 'adding' lightness, using innovative materials, showcasing the beauty of time and emotional moments in life.",
  },
  {
    num: "03",
    label: "Ergonomics",
    body: "Comfort is central during the early concepts. Assessing the dimensions of the case, curve profile, and pressure points on the wrist ensures the best wearing experience.",
  },
];

// ─── Palette ─────────────────────────────────────────────────────────────────

const C = {
  bg: "#0c0c0c",
  surface: "#111111",
  border: "#222222",
  borderMid: "#2a2a2a",
  textPrimary: "#f0f0f0",
  textMuted: "#888888",
  textDim: "#444444",
  accent: "#c8b89a",   // warm parchment/blueprint tone
  blueprint: "#4a7fa5", // blueprint blue
};

// ─── Blueprint SVG Glyphs ────────────────────────────────────────────────────

function WatchBlueprint02() {
  const r = C.blueprint;
  const dim = "rgba(74,127,165,0.35)";
  return (
    <svg viewBox="0 0 320 420" width="220" height="290" aria-hidden style={{ opacity: 0.9 }}>
      <defs>
        <pattern id="grid02" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke={dim} strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="320" height="420" fill="url(#grid02)" />

      {/* Lug top */}
      <rect x="118" y="20" width="84" height="38" rx="8" fill="none" stroke={r} strokeWidth="1.2" />
      <line x1="136" y1="20" x2="136" y2="58" stroke={r} strokeWidth="0.6" opacity="0.5" />
      <line x1="184" y1="20" x2="184" y2="58" stroke={r} strokeWidth="0.6" opacity="0.5" />

      {/* Case body */}
      <rect x="72" y="58" width="176" height="200" rx="28" fill="none" stroke={r} strokeWidth="1.8" />
      {/* Inner bezel */}
      <rect x="84" y="70" width="152" height="176" rx="22" fill="none" stroke={r} strokeWidth="0.8" opacity="0.6" />
      {/* Dial ring */}
      <circle cx="160" cy="158" r="68" fill="none" stroke={r} strokeWidth="1.2" />
      {/* Inner dial */}
      <circle cx="160" cy="158" r="54" fill="none" stroke={r} strokeWidth="0.6" opacity="0.5" />

      {/* Hour indices */}
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * 30 - 90) * (Math.PI / 180);
        const x1 = 160 + 60 * Math.cos(a);
        const y1 = 158 + 60 * Math.sin(a);
        const x2 = 160 + 52 * Math.cos(a);
        const y2 = 158 + 52 * Math.sin(a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={r} strokeWidth={i % 3 === 0 ? 1.4 : 0.7} />;
      })}

      {/* Hands */}
      <line x1="160" y1="158" x2="160" y2="104" stroke={r} strokeWidth="2" strokeLinecap="round" />
      <line x1="160" y1="158" x2="196" y2="172" stroke={r} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="160" cy="158" r="3.5" fill={r} />

      {/* Micro-rotor label */}
      <circle cx="160" cy="158" r="18" fill="none" stroke={r} strokeWidth="0.7" strokeDasharray="3 4" opacity="0.7" />
      <text x="148" y="205" fontSize="6" fill={r} opacity="0.7" fontFamily="monospace">MICRO-ROTOR</text>

      {/* Crown */}
      <rect x="248" y="148" width="20" height="20" rx="5" fill="none" stroke={r} strokeWidth="1" />
      <line x1="248" y1="155" x2="268" y2="155" stroke={r} strokeWidth="0.6" opacity="0.5" />
      <line x1="248" y1="161" x2="268" y2="161" stroke={r} strokeWidth="0.6" opacity="0.5" />

      {/* Lug bottom */}
      <rect x="118" y="258" width="84" height="38" rx="8" fill="none" stroke={r} strokeWidth="1.2" />
      <line x1="136" y1="258" x2="136" y2="296" stroke={r} strokeWidth="0.6" opacity="0.5" />
      <line x1="184" y1="258" x2="184" y2="296" stroke={r} strokeWidth="0.6" opacity="0.5" />

      {/* Dimension callouts */}
      <line x1="52" y1="58" x2="52" y2="258" stroke={r} strokeWidth="0.5" opacity="0.5" />
      <line x1="46" y1="58" x2="58" y2="58" stroke={r} strokeWidth="0.5" opacity="0.5" />
      <line x1="46" y1="258" x2="58" y2="258" stroke={r} strokeWidth="0.5" opacity="0.5" />
      <text x="18" y="162" fontSize="7" fill={r} opacity="0.7" fontFamily="monospace" transform="rotate(-90,36,162)">42.0 MM</text>

      {/* Spec annotations */}
      <line x1="232" y1="70" x2="280" y2="40" stroke={r} strokeWidth="0.5" opacity="0.45" />
      <text x="282" y="38" fontSize="6.5" fill={r} opacity="0.7" fontFamily="monospace">Ti Gr.5</text>
      <line x1="228" y1="258" x2="276" y2="288" stroke={r} strokeWidth="0.5" opacity="0.45" />
      <text x="278" y="292" fontSize="6.5" fill={r} opacity="0.7" fontFamily="monospace">34.2 G</text>

      {/* Strap lines */}
      <line x1="118" y1="296" x2="80" y2="390" stroke={r} strokeWidth="0.8" opacity="0.35" />
      <line x1="202" y1="296" x2="240" y2="390" stroke={r} strokeWidth="0.8" opacity="0.35" />
      <line x1="80" y1="390" x2="240" y2="390" stroke={r} strokeWidth="0.8" opacity="0.35" />

      {/* Model label */}
      <text x="100" y="410" fontSize="8" fill={r} opacity="0.5" fontFamily="monospace" letterSpacing="3">ACF-02 / WRK</text>
    </svg>
  );
}

function WatchBlueprint01() {
  const r = C.blueprint;
  const dim = "rgba(74,127,165,0.3)";
  return (
    <svg viewBox="0 0 320 420" width="220" height="290" aria-hidden style={{ opacity: 0.85 }}>
      <defs>
        <pattern id="grid01" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke={dim} strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="320" height="420" fill="url(#grid01)" />

      {/* Lug top */}
      <rect x="124" y="24" width="72" height="34" rx="6" fill="none" stroke={r} strokeWidth="1.2" />

      {/* Case body — cushion shape */}
      <rect x="68" y="58" width="184" height="212" rx="36" fill="none" stroke={r} strokeWidth="1.8" />
      <rect x="82" y="72" width="156" height="184" rx="28" fill="none" stroke={r} strokeWidth="0.8" opacity="0.55" />

      {/* Tourbillon cage */}
      <circle cx="160" cy="168" r="70" fill="none" stroke={r} strokeWidth="1.2" />
      <circle cx="160" cy="168" r="52" fill="none" stroke={r} strokeWidth="0.7" opacity="0.6" />

      {/* Tourbillon inner mechanism */}
      <circle cx="160" cy="168" r="28" fill="none" stroke={r} strokeWidth="1" />
      <circle cx="160" cy="168" r="16" fill="none" stroke={r} strokeWidth="0.6" strokeDasharray="2 3" />
      <circle cx="160" cy="168" r="5" fill={r} opacity="0.6" />

      {/* Tourbillon spokes */}
      {[0, 120, 240].map((deg, i) => {
        const rad = (deg - 90) * (Math.PI / 180);
        return (
          <line
            key={i}
            x1={160}
            y1={168}
            x2={160 + 26 * Math.cos(rad)}
            y2={168 + 26 * Math.sin(rad)}
            stroke={r}
            strokeWidth="1.2"
          />
        );
      })}

      {/* Hour indices */}
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * 30 - 90) * (Math.PI / 180);
        const x1 = 160 + 62 * Math.cos(a);
        const y1 = 168 + 62 * Math.sin(a);
        const x2 = 160 + 55 * Math.cos(a);
        const y2 = 168 + 55 * Math.sin(a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={r} strokeWidth={i % 3 === 0 ? 1.6 : 0.8} />;
      })}

      {/* Hands */}
      <line x1="160" y1="168" x2="160" y2="110" stroke={r} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="160" y1="168" x2="202" y2="182" stroke={r} strokeWidth="1.6" strokeLinecap="round" />

      {/* Crown */}
      <rect x="252" y="156" width="22" height="24" rx="6" fill="none" stroke={r} strokeWidth="1" />

      {/* Lug bottom */}
      <rect x="124" y="270" width="72" height="34" rx="6" fill="none" stroke={r} strokeWidth="1.2" />

      {/* Dimension lines */}
      <line x1="48" y1="58" x2="48" y2="270" stroke={r} strokeWidth="0.5" opacity="0.45" />
      <line x1="42" y1="58" x2="54" y2="58" stroke={r} strokeWidth="0.5" opacity="0.45" />
      <line x1="42" y1="270" x2="54" y2="270" stroke={r} strokeWidth="0.5" opacity="0.45" />
      <text x="14" y="172" fontSize="7" fill={r} opacity="0.65" fontFamily="monospace" transform="rotate(-90,32,172)">43.5 MM</text>

      {/* Callouts */}
      <line x1="230" y1="75" x2="278" y2="45" stroke={r} strokeWidth="0.5" opacity="0.4" />
      <text x="280" y="43" fontSize="6.5" fill={r} opacity="0.65" fontFamily="monospace">Titanium</text>
      <line x1="188" y1="168" x2="240" y2="200" stroke={r} strokeWidth="0.5" opacity="0.4" />
      <text x="242" y="204" fontSize="6.5" fill={r} opacity="0.65" fontFamily="monospace">Tourbillon</text>

      {/* Strap */}
      <line x1="124" y1="304" x2="88" y2="398" stroke={r} strokeWidth="0.8" opacity="0.3" />
      <line x1="196" y1="304" x2="232" y2="398" stroke={r} strokeWidth="0.8" opacity="0.3" />
      <line x1="88" y1="398" x2="232" y2="398" stroke={r} strokeWidth="0.8" opacity="0.3" />

      <text x="98" y="414" fontSize="8" fill={r} opacity="0.5" fontFamily="monospace" letterSpacing="3">ACF-01 / WRK</text>
    </svg>
  );
}

// ─── Shared style helpers ─────────────────────────────────────────────────────

const mono = "'Courier New', Courier, monospace";
const sans = "'Helvetica Neue', Arial, sans-serif";

// ─── Component ───────────────────────────────────────────────────────────────

export default function WRKReplica() {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  return (
    <div style={{ background: C.bg, color: C.textPrimary, fontFamily: sans, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── TICKER BAND ── */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 0 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.2em", whiteSpace: "nowrap", padding: "0 32px" }}>
              {i % 2 === 0 ? "WRK TIMEPIECES — ADVANCED HOROLOGY ENGINEERING" : "◆"}
            </span>
          ))}
        </div>
      </div>

      {/* ── NAV ── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(12,12,12,0.95)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Wordmark */}
          <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 1 }}>
            <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.3em", color: C.textPrimary, lineHeight: 1 }}>WRK</span>
            <span style={{ fontSize: 7.5, fontFamily: mono, color: C.textMuted, letterSpacing: "0.18em", textTransform: "uppercase" }}>Timepieces</span>
          </a>

          {/* Primary nav */}
          <nav style={{ display: "flex", gap: 40, alignItems: "center" }}>
            {["Timepieces", "R&D", "Our Ethos"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/[^a-z]/g, "")}`}
                onMouseEnter={() => setActiveNav(link)}
                onMouseLeave={() => setActiveNav(null)}
                style={{
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeNav === link ? C.textPrimary : C.textMuted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 500,
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {/* Social icons */}
            {[
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            ].map(({ label, path }) => (
              <a key={label} href="#" aria-label={label} style={{ color: C.textDim, transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textDim)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d={path} />
                </svg>
              </a>
            ))}

            <a href="mailto:info@wrk-timepieces.com" style={{ fontSize: 10, fontFamily: mono, color: C.textDim, textDecoration: "none", letterSpacing: "0.05em" }}>
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "100px 40px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Copy */}
          <div>
            <p style={{ fontSize: 10, fontFamily: mono, color: C.accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 32 }}>
              Watchmaking Research Kinematics
            </p>
            <h1 style={{ fontSize: "clamp(72px, 10vw, 128px)", fontWeight: 700, letterSpacing: "-3px", lineHeight: 0.92, color: C.textPrimary, marginBottom: 40 }}>
              WRK
            </h1>
            <div style={{ width: 48, height: 1, background: C.accent, marginBottom: 32, opacity: 0.6 }} />
            <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.75, maxWidth: 440, marginBottom: 40 }}>
              Pushing the boundaries of what is possible in watchmaking — to redefine the art of horology.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <a href="#timepieces"
                style={{ display: "inline-block", border: `1px solid ${C.accent}`, color: C.accent, padding: "12px 28px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", fontFamily: mono }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.accent; (e.currentTarget as HTMLElement).style.color = C.bg; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.accent; }}
              >
                Explore ACF-01
              </a>
              <a href="#rd" style={{ fontSize: 11, fontFamily: mono, color: C.textDim, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textDim)}
              >
                R&D →
              </a>
            </div>
          </div>

          {/* Hero blueprint */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", border: `1px solid ${C.border}`, opacity: 0.4 }} />
            <div style={{ position: "absolute", width: 480, height: 480, borderRadius: "50%", border: `1px solid ${C.border}`, opacity: 0.2 }} />
            <WatchBlueprint02 />
          </div>
        </div>

        {/* Introducing label */}
        <div style={{ marginTop: 80, borderTop: `1px solid ${C.border}`, paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.2em", textTransform: "uppercase" }}>Introducing</span>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.15em", color: C.textPrimary }}>ACF-02</span>
          <span style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.15em" }}>Advanced Horology Engineering</span>
        </div>
      </section>

      {/* ── TIMEPIECES ── */}
      <section id="timepieces" style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72 }}>
            <div>
              <p style={{ fontSize: 10, fontFamily: mono, color: C.accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>
                — Timepieces
              </p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, letterSpacing: "-1px", color: C.textPrimary, maxWidth: 520, lineHeight: 1.2 }}>
                Our inspiration flows from engineering, motorsport, and contemporary design.
              </h2>
            </div>
            <a href="#" style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textDim)}
            >
              View All →
            </a>
          </div>

          {/* Product cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>

            {/* ACF-02 */}
            <article style={{ background: C.bg, border: `1px solid ${C.border}`, padding: "56px 48px", display: "flex", flexDirection: "column", gap: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
                <div>
                  <span style={{ fontSize: 9, fontFamily: mono, color: C.accent, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
                    Now Available
                  </span>
                  <h3 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.5px", color: C.textPrimary, lineHeight: 1 }}>ACF-02</h3>
                </div>
                <span style={{ fontSize: 9, fontFamily: mono, color: C.textDim, letterSpacing: "0.1em", border: `1px solid ${C.border}`, padding: "4px 10px" }}>
                  Limited Edition
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "center", margin: "8px 0 40px" }}>
                <WatchBlueprint02 />
              </div>

              {/* Spec table */}
              <div style={{ borderTop: `1px solid ${C.border}`, marginBottom: 36 }}>
                {[
                  ["Material", "Titanium Grade 5"],
                  ["Parts", "48 Components"],
                  ["Mechanics", "Automatic / Micro-Rotor"],
                  ["Power Reserve", "72 Hours"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</span>
                    <span style={{ fontSize: 11, fontFamily: mono, color: C.textMuted, letterSpacing: "0.08em" }}>{v}</span>
                  </div>
                ))}
              </div>

              <a href="#"
                style={{ display: "inline-block", alignSelf: "flex-start", border: `1px solid ${C.textPrimary}`, color: C.textPrimary, padding: "12px 28px", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontFamily: mono }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.textPrimary; (e.currentTarget as HTMLElement).style.color = C.bg; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.textPrimary; }}
              >
                Learn More
              </a>
            </article>

            {/* ACF-01 */}
            <article style={{ background: "#080808", border: `1px solid ${C.border}`, padding: "56px 48px", display: "flex", flexDirection: "column", gap: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
                <div>
                  <span style={{ fontSize: 9, fontFamily: mono, color: C.textDim, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
                    Archive
                  </span>
                  <h3 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.5px", color: C.textPrimary, lineHeight: 1 }}>ACF-01</h3>
                </div>
                <span style={{ fontSize: 9, fontFamily: mono, color: C.textDim, letterSpacing: "0.1em", border: `1px solid ${C.border}`, padding: "4px 10px" }}>
                  Limited Edition
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "center", margin: "8px 0 40px" }}>
                <WatchBlueprint01 />
              </div>

              <div style={{ borderTop: `1px solid ${C.border}`, marginBottom: 36 }}>
                {[
                  ["Material", "Titanium"],
                  ["Parts", "187 Components"],
                  ["Mechanics", "Tourbillon"],
                  ["Power Reserve", "Manual Winding"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</span>
                    <span style={{ fontSize: 11, fontFamily: mono, color: C.textMuted, letterSpacing: "0.08em" }}>{v}</span>
                  </div>
                ))}
              </div>

              <a href="#"
                style={{ display: "inline-block", alignSelf: "flex-start", border: `1px solid ${C.borderMid}`, color: C.textMuted, padding: "12px 28px", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontFamily: mono }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.textMuted; (e.currentTarget as HTMLElement).style.color = C.textPrimary; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.borderMid; (e.currentTarget as HTMLElement).style.color = C.textMuted; }}
              >
                Learn More
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── R&D ── */}
      <section id="rd" style={{ padding: "100px 40px", maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <p style={{ fontSize: 10, fontFamily: mono, color: C.accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>
              — Research & Development
            </p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 700, letterSpacing: "-1px", color: C.textPrimary }}>
              Latest Articles
            </h2>
          </div>
          <a href="#" style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textDim)}
          >
            View All →
          </a>
        </div>

        {/* Research list */}
        <div style={{ borderTop: `1px solid ${C.border}` }}>
          {RESEARCH.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", borderBottom: `1px solid ${C.border}`, textDecoration: "none", cursor: "pointer" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "12px")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
            >
              <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
                <span style={{ fontSize: 9, fontFamily: mono, color: C.textDim, minWidth: 28 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 14, color: C.textMuted, letterSpacing: "0.02em", transition: "color 0.15s" }}>
                  {item.title}
                </span>
              </div>
              <span style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.1em" }}>
                {item.year} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── ETHOS ── */}
      <section id="ourethos" style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          <div style={{ marginBottom: 72 }}>
            <p style={{ fontSize: 10, fontFamily: mono, color: C.accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>
              — Our Ethos
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, letterSpacing: "-1px", color: C.textPrimary }}>
              The principles behind every decision.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {ETHOS.map((item) => (
              <article key={item.num} style={{ border: `1px solid ${C.border}`, padding: "48px 36px", background: C.bg }}>
                <span style={{ fontSize: 11, fontFamily: mono, color: C.textDim, letterSpacing: "0.15em", display: "block", marginBottom: 28 }}>
                  {item.num}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.3px", color: C.textPrimary, marginBottom: 20 }}>
                  {item.label}
                </h3>
                <div style={{ width: 28, height: 1, background: C.accent, marginBottom: 24, opacity: 0.5 }} />
                <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <p style={{ fontSize: 10, fontFamily: mono, color: C.accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14 }}>Partners & Contact</p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.5px", color: C.textPrimary }}>
            Interested in collaborating?
          </h2>
        </div>
        <a
          href="mailto:info@wrk-timepieces.com"
          style={{ fontSize: 11, fontFamily: mono, color: C.accent, letterSpacing: "0.15em", textDecoration: "none", border: `1px solid ${C.accent}`, padding: "14px 32px", textTransform: "uppercase", display: "inline-block" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.accent; (e.currentTarget as HTMLElement).style.color = C.bg; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.accent; }}
        >
          info@wrk-timepieces.com
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "56px 40px 36px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 56, flexWrap: "wrap", gap: 40 }}>
            <div>
              <p style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.3em", color: C.textPrimary, marginBottom: 8 }}>WRK</p>
              <p style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.15em" }}>Advanced Horology Engineering</p>
            </div>

            <div style={{ display: "flex", gap: 64 }}>
              {[
                { heading: "Navigation", links: ["Timepieces", "R&D", "Our Ethos", "Partners"] },
                { heading: "Legal", links: ["Privacy", "Terms & Conditions", "Cookie Policy"] },
              ].map((col) => (
                <div key={col.heading}>
                  <p style={{ fontSize: 9, fontFamily: mono, color: C.textDim, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 18 }}>{col.heading}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" style={{ fontSize: 12, color: C.textMuted, textDecoration: "none" }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.textPrimary)}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.08em" }}>
              © WRK 2026 — WRK SRL, Italy
            </p>
            <p style={{ fontSize: 10, fontFamily: mono, color: C.textDim, letterSpacing: "0.06em" }}>
              Designed by Studio 28K — Coded by Ruud Luijten
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
