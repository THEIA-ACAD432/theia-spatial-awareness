const featureSpecs = [
  ["Format", "Waist-worn assistive module"],
  ["Feedback", "Directional haptic and optional audio"],
  ["Use case", "Secondary spatial awareness layer"],
  ["Positioning", "Supports the cane, not replaces it"],
];

const zones = [
  ["01", "Forward field"],
  ["02", "Left proximity"],
  ["03", "Right proximity"],
  ["04", "Rear module"],
];

const steps = [
  ["Sense", "Nearby obstacles enter the belt field."],
  ["Map", "Processing logic translates proximity."],
  ["Signal", "Directional cues reach the body quickly."],
];

function ProductGlyph() {
  return (
    <div className="ni-glyph">
      <svg viewBox="0 0 700 520" className="ni-glyph-svg" aria-label="Abstract wearable belt concept">
        <defs>
          <radialGradient id="niGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="350" cy="255" rx="205" ry="108" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
        <ellipse cx="350" cy="255" rx="255" ry="148" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeDasharray="4 8" />
        <ellipse cx="350" cy="255" rx="165" ry="80" fill="rgba(0,0,0,0.88)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        {[
          [190, 255],
          [280, 184],
          [350, 172],
          [420, 184],
          [510, 255],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="26" fill="url(#niGlow)" />
            <circle cx={cx} cy={cy} r="8" fill="rgba(255,255,255,0.9)" />
          </g>
        ))}
        <path d="M350 172 L350 88" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <path d="M510 255 L610 222" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <path d="M190 255 L90 298" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <text x="364" y="84" className="ni-svg-label">FORWARD FIELD</text>
        <text x="616" y="226" className="ni-svg-label">HAPTIC ZONE</text>
        <text x="16" y="304" className="ni-svg-label">SIDE SENSOR</text>
      </svg>
    </div>
  );
}

const NothingInspired = () => {
  return (
    <div className="ni-page">
      <header className="ni-header">
        <div className="ni-shell ni-header-row">
          <a href="#ni-top" className="ni-brand">
            <span className="ni-brand-dot" aria-hidden />
            <span>THEIA / ALT</span>
          </a>
          <nav className="ni-nav" aria-label="Inspired page">
            <a href="#ni-top">Overview</a>
            <a href="#ni-system">System</a>
            <a href="#ni-experience">Experience</a>
            <a href="#ni-specs">Specs</a>
          </nav>
        </div>
      </header>

      <main id="ni-top">
        <section className="ni-hero">
          <div className="ni-shell ni-hero-grid">
            <div className="ni-hero-copy">
              <p className="ni-eyebrow">SPATIAL AWARENESS SYSTEM / CONCEPT PAGE</p>
              <h1>THEIA</h1>
              <h2>A body-level layer of spatial awareness.</h2>
              <p>
                A separate concept page built in an industrial, minimal hardware-presentation style.
              </p>
              <div className="ni-actions">
                <a href="#ni-system" className="ni-button-primary">
                  View system
                </a>
                <a href="/" className="ni-button-secondary">
                  Back to main site
                </a>
              </div>
            </div>
            <ProductGlyph />
          </div>
        </section>

        <section id="ni-system" className="ni-section">
          <div className="ni-shell">
            <div className="ni-section-head">
              <p className="ni-eyebrow">01 / SYSTEM</p>
              <h3>Simple, modular, wearable.</h3>
            </div>
            <div className="ni-system-flow">
              {steps.map(([title, text]) => (
                <article key={title} className="ni-panel">
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ni-experience" className="ni-section">
          <div className="ni-shell ni-experience-grid">
            <div className="ni-panel ni-tall">
              <p className="ni-eyebrow">02 / ZONES</p>
              <div className="ni-zone-list">
                {zones.map(([id, label]) => (
                  <div key={id} className="ni-zone-row">
                    <span>{id}</span>
                    <p>{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ni-panel ni-statement">
              <p className="ni-eyebrow">03 / POSITIONING</p>
              <h3>Designed to support the cane, not replace it.</h3>
            </div>
          </div>
        </section>

        <section id="ni-specs" className="ni-section">
          <div className="ni-shell">
            <div className="ni-section-head">
              <p className="ni-eyebrow">04 / SPECS</p>
              <h3>Condensed concept summary.</h3>
            </div>
            <div className="ni-spec-grid">
              {featureSpecs.map(([label, value]) => (
                <article key={label} className="ni-spec-card">
                  <span>{label}</span>
                  <p>{value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NothingInspired;
