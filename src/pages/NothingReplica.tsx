import { useState } from "react";

const NAV_LINKS = ["Explore", "Offers", "Learn More"];
const SHOP_LINKS = ["Shop All", "Phones", "Audio", "Watches", "Accessories", "CMF"];

const PRODUCTS = [
  {
    id: "phone-4a-pro",
    name: "Phone (4a) Pro",
    tagline: "Stay in the moment with Essential Notifications",
    category: "Phone",
    bg: "#f2f2f2",
    accent: "#1a1a1a",
    shape: "phone-pro",
  },
  {
    id: "phone-4a",
    name: "Phone (4a)",
    tagline: "Take better photos with three cameras",
    category: "Phone",
    bg: "#e8e8e8",
    accent: "#1a1a1a",
    shape: "phone",
  },
  {
    id: "headphone-a",
    name: "Headphone (a)",
    tagline: "Five days of back-to-back tracks",
    category: "Audio",
    bg: "#1a1a1a",
    accent: "#f5f5f5",
    shape: "headphone",
  },
  {
    id: "headphone-1",
    name: "Headphone (1)",
    tagline: "Custom sound with tuning by KEF",
    category: "Audio",
    bg: "#f5f0e8",
    accent: "#1a1a1a",
    shape: "headphone-1",
  },
  {
    id: "ear-3",
    name: "Ear (3)",
    tagline: "Cut out background noise with the new Super Mic",
    category: "Audio",
    bg: "#e0e0e0",
    accent: "#1a1a1a",
    shape: "ear",
  },
  {
    id: "phone-3",
    name: "Phone (3)",
    tagline: "Take your best photos with four 50 MP cameras",
    category: "Phone",
    bg: "#111111",
    accent: "#f5f5f5",
    shape: "phone-3",
  },
];

const FOOTER_COLS = [
  {
    heading: "Products",
    links: ["Shop All", "Phones", "Audio", "Watches", "Accessories", "CMF"],
  },
  {
    heading: "Company",
    links: ["Playground", "Careers", "Community", "Contact"],
  },
  {
    heading: "Support",
    links: ["Support Centre", "Legal", "Consent Preferences"],
  },
  {
    heading: "Social",
    links: ["Instagram", "YouTube", "X", "TikTok"],
  },
];

function PhoneProGlyph({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 360" width="120" height="216" aria-hidden>
      <rect x="20" y="10" width="160" height="340" rx="24" ry="24" fill="none" stroke={accent} strokeWidth="2" opacity="0.9" />
      <rect x="28" y="18" width="144" height="324" rx="20" ry="20" fill={accent} opacity="0.06" />
      {/* Glyph dots on back */}
      {[
        [60, 80], [80, 80], [100, 80], [120, 80], [140, 80],
        [60, 100], [80, 100], [100, 100],
        [60, 120], [80, 120],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill={accent} opacity="0.55" />
      ))}
      {/* Camera cluster */}
      <rect x="58" y="58" width="48" height="48" rx="12" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />
      <circle cx="78" cy="75" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx="98" cy="75" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx="78" cy="95" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      {/* Power button */}
      <rect x="182" y="100" width="4" height="30" rx="2" fill={accent} opacity="0.5" />
      {/* Volume */}
      <rect x="14" y="90" width="4" height="20" rx="2" fill={accent} opacity="0.5" />
      <rect x="14" y="118" width="4" height="20" rx="2" fill={accent} opacity="0.5" />
      {/* Screen notch */}
      <rect x="75" y="22" width="50" height="8" rx="4" fill={accent} opacity="0.25" />
    </svg>
  );
}

function PhoneGlyph({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 360" width="120" height="216" aria-hidden>
      <rect x="20" y="10" width="160" height="340" rx="24" ry="24" fill="none" stroke={accent} strokeWidth="2" opacity="0.9" />
      <rect x="28" y="18" width="144" height="324" rx="20" ry="20" fill={accent} opacity="0.06" />
      {[
        [70, 90], [100, 90], [130, 90],
        [70, 110], [100, 110], [130, 110],
        [70, 130], [100, 130], [130, 130],
        [70, 150], [100, 150],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill={accent} opacity="0.5" />
      ))}
      <rect x="62" y="60" width="76" height="58" rx="14" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />
      <circle cx="85" cy="78" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx="115" cy="78" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx="100" cy="100" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <rect x="182" y="100" width="4" height="30" rx="2" fill={accent} opacity="0.5" />
      <rect x="14" y="90" width="4" height="20" rx="2" fill={accent} opacity="0.5" />
      <rect x="14" y="118" width="4" height="20" rx="2" fill={accent} opacity="0.5" />
      <rect x="75" y="22" width="50" height="8" rx="4" fill={accent} opacity="0.25" />
    </svg>
  );
}

function HeadphoneGlyph({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 240 200" width="200" height="167" aria-hidden>
      <path d="M40 130 Q40 50 120 50 Q200 50 200 130" fill="none" stroke={accent} strokeWidth="3" opacity="0.8" />
      <rect x="20" y="118" width="36" height="56" rx="18" fill="none" stroke={accent} strokeWidth="2" opacity="0.9" />
      <rect x="184" y="118" width="36" height="56" rx="18" fill="none" stroke={accent} strokeWidth="2" opacity="0.9" />
      {[
        [38, 138], [38, 152], [38, 166],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill={accent} opacity="0.55" />
      ))}
      {[
        [202, 138], [202, 152], [202, 166],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill={accent} opacity="0.55" />
      ))}
    </svg>
  );
}

function EarGlyph({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 160 220" width="100" height="138" aria-hidden>
      <ellipse cx="80" cy="80" rx="44" ry="50" fill="none" stroke={accent} strokeWidth="2" opacity="0.9" />
      <ellipse cx="80" cy="80" rx="24" ry="28" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />
      <path d="M80 130 L80 200" stroke={accent} strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
      <circle cx="80" cy="204" r="6" fill={accent} opacity="0.8" />
      {[
        [60, 68], [70, 68], [80, 68], [90, 68], [100, 68],
        [65, 78], [75, 78], [85, 78], [95, 78],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill={accent} opacity="0.4" />
      ))}
    </svg>
  );
}

function Phone3Glyph({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 360" width="120" height="216" aria-hidden>
      <rect x="20" y="10" width="160" height="340" rx="26" ry="26" fill="none" stroke={accent} strokeWidth="2" opacity="0.9" />
      <rect x="28" y="18" width="144" height="324" rx="20" ry="20" fill={accent} opacity="0.07" />
      {[
        [55, 75], [75, 75], [95, 75], [115, 75], [135, 75], [155, 75],
        [55, 92], [75, 92], [95, 92], [115, 92], [135, 92],
        [55, 109], [75, 109], [95, 109], [115, 109],
        [55, 126], [75, 126], [95, 126],
        [55, 143], [75, 143],
        [55, 160],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill={accent} opacity="0.45" />
      ))}
      {/* 4-camera cluster */}
      <rect x="55" y="48" width="72" height="72" rx="18" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />
      <circle cx="75" cy="68" r="9" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx="107" cy="68" r="9" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx="75" cy="100" r="9" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx="107" cy="100" r="9" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <rect x="182" y="100" width="4" height="30" rx="2" fill={accent} opacity="0.5" />
      <rect x="14" y="90" width="4" height="20" rx="2" fill={accent} opacity="0.5" />
      <rect x="14" y="118" width="4" height="20" rx="2" fill={accent} opacity="0.5" />
      <rect x="75" y="22" width="50" height="8" rx="4" fill={accent} opacity="0.25" />
    </svg>
  );
}

function Headphone1Glyph({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 240 200" width="200" height="167" aria-hidden>
      <path d="M40 130 Q40 50 120 50 Q200 50 200 130" fill="none" stroke={accent} strokeWidth="3.5" opacity="0.85" />
      <rect x="16" y="115" width="40" height="62" rx="20" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.9" />
      <rect x="184" y="115" width="40" height="62" rx="20" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.9" />
      <circle cx="36" cy="146" r="10" fill={accent} opacity="0.2" />
      <circle cx="36" cy="146" r="4" fill={accent} opacity="0.7" />
      <circle cx="204" cy="146" r="10" fill={accent} opacity="0.2" />
      <circle cx="204" cy="146" r="4" fill={accent} opacity="0.7" />
    </svg>
  );
}

function ProductGlyph({ shape, accent }: { shape: string; accent: string }) {
  if (shape === "phone-pro") return <PhoneProGlyph accent={accent} />;
  if (shape === "phone") return <PhoneGlyph accent={accent} />;
  if (shape === "headphone") return <HeadphoneGlyph accent={accent} />;
  if (shape === "headphone-1") return <Headphone1Glyph accent={accent} />;
  if (shape === "ear") return <EarGlyph accent={accent} />;
  if (shape === "phone-3") return <Phone3Glyph accent={accent} />;
  return null;
}

function NothingLogo() {
  return (
    <svg viewBox="0 0 120 28" height="18" aria-label="Nothing" fill="currentColor">
      <text x="0" y="22" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.5" fill="currentColor">
        Nothing
      </text>
    </svg>
  );
}

export default function NothingReplica() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", backgroundColor: "#fff", color: "#111", minHeight: "100vh" }}>
      {/* ── NAV ── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" style={{ color: "#111", textDecoration: "none", fontWeight: 700, fontSize: 20, letterSpacing: "-0.5px" }}>
            Nothing
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {/* Shop dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShopOpen(!shopOpen)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#111", fontWeight: 500, display: "flex", alignItems: "center", gap: 4, padding: 0 }}
              >
                Shop
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {shopOpen && (
                <div style={{ position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid #e5e5e5", borderRadius: 12, padding: "8px 0", minWidth: 160, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                  {SHOP_LINKS.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{ display: "block", padding: "10px 20px", fontSize: 14, color: "#111", textDecoration: "none", whiteSpace: "nowrap" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f5f5f5")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "transparent")}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <a key={link} href="#" style={{ fontSize: 14, color: "#111", textDecoration: "none", fontWeight: 500 }}>
                {link}
              </a>
            ))}
          </nav>

          {/* Right icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Search */}
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#111" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            {/* Cart */}
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#111" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
            {/* Mobile menu toggle */}
            <button
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#111" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #e5e5e5", padding: "16px 24px" }}>
            {["Shop All", ...NAV_LINKS, ...SHOP_LINKS].map((link) => (
              <a key={link} href="#" style={{ display: "block", padding: "10px 0", fontSize: 15, color: "#111", textDecoration: "none", borderBottom: "1px solid #f0f0f0" }}>
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section style={{ background: PRODUCTS[0].bg, minHeight: "72vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", overflow: "hidden", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#888", textTransform: "uppercase", marginBottom: 20 }}>
              New — {PRODUCTS[0].category}
            </p>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2px", color: PRODUCTS[0].accent, marginBottom: 24 }}>
              {PRODUCTS[0].name}
            </h1>
            <p style={{ fontSize: 18, color: "#555", lineHeight: 1.5, marginBottom: 40, maxWidth: 400 }}>
              {PRODUCTS[0].tagline}
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a
                href="#"
                style={{ display: "inline-block", background: "#111", color: "#fff", padding: "14px 32px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em" }}
              >
                Discover
              </a>
              <a
                href="#products"
                style={{ display: "inline-block", background: "transparent", color: "#111", padding: "14px 32px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none", border: "1.5px solid #ccc" }}
              >
                All products
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ProductGlyph shape={PRODUCTS[0].shape} accent={PRODUCTS[0].accent} />
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section id="products" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 16 }}>
          {PRODUCTS.slice(1).map((product) => (
            <article
              key={product.id}
              style={{
                background: product.bg,
                borderRadius: 20,
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                minHeight: 460,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Category badge */}
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: product.accent, opacity: 0.5, textTransform: "uppercase", marginBottom: 8 }}>
                {product.category}
              </span>

              {/* Product name */}
              <h2 style={{ fontSize: 26, fontWeight: 700, color: product.accent, letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 12 }}>
                {product.name}
              </h2>

              {/* Tagline */}
              <p style={{ fontSize: 14, color: product.accent, opacity: 0.65, lineHeight: 1.55, maxWidth: 260, marginBottom: "auto" }}>
                {product.tagline}
              </p>

              {/* Illustration */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "32px 0" }}>
                <ProductGlyph shape={product.shape} accent={product.accent} />
              </div>

              {/* CTA */}
              <a
                href="#"
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  background: "transparent",
                  color: product.accent,
                  padding: "11px 28px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: `1.5px solid ${product.accent === "#f5f5f5" ? "rgba(245,245,245,0.4)" : "rgba(26,26,26,0.25)"}`,
                  letterSpacing: "0.02em",
                }}
              >
                Discover
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── MARQUEE BAND ── */}
      <div style={{ background: "#111", overflow: "hidden", padding: "18px 0", display: "flex" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#fff",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              padding: "0 40px",
              opacity: i % 2 === 0 ? 1 : 0.35,
            }}
          >
            {i % 2 === 0 ? "Nothing" : "◆"}
          </span>
        ))}
      </div>

      {/* ── BRAND STATEMENT ── */}
      <section style={{ background: "#f9f9f9", padding: "120px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#888", textTransform: "uppercase", marginBottom: 24 }}>
            About Nothing
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.15, color: "#111", marginBottom: 28 }}>
            Creating the future of technology.
          </h2>
          <p style={{ fontSize: 17, color: "#666", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
            Nothing creates beautifully designed technology products with a focus on transparency, simplicity, and the human experience.
          </p>
          <a
            href="#"
            style={{ display: "inline-block", background: "#111", color: "#fff", padding: "14px 36px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }}
          >
            Learn more
          </a>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: "#fff", padding: "80px 24px", borderTop: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 12 }}>Stay up to date</h3>
          <p style={{ fontSize: 14, color: "#777", marginBottom: 28 }}>Get the latest news, product launches, and exclusive offers.</p>
          <form
            style={{ display: "flex", gap: 8, maxWidth: 440, margin: "0 auto" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "12px 18px",
                borderRadius: 100,
                border: "1.5px solid #ddd",
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                color: "#111",
                background: "#fafafa",
              }}
            />
            <button
              type="submit"
              style={{ background: "#111", color: "#fff", border: "none", borderRadius: 100, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#111", color: "#fff", padding: "64px 24px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Top: logo + columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4, 1fr)", gap: 40, marginBottom: 64 }}>
            {/* Brand */}
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 16 }}>Nothing</p>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, maxWidth: 220 }}>
                Creating the future of technology since 2020.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#555", textTransform: "uppercase", marginBottom: 20 }}>
                  {col.heading}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: 13, color: "#aaa", textDecoration: "none" }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#aaa")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid #222", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 12, color: "#555" }}>
              © {new Date().getFullYear()} Nothing Technology Limited. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Store: United Kingdom", "Language: EN", "Privacy", "Legal"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#aaa")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
