import heroImage from "@/assets/theia-device-hero.jpg";
import beltImage from "@/assets/halobelt.png";
import contextImage from "@/assets/theia-context.jpg";
import hapticImage from "@/assets/theia-haptic.jpg";
import teamBrian from "@/assets/team-brian.jpg";
import teamChristine from "@/assets/team-christine.png";
import teamEsther from "@/assets/team-esther.jpg";
import teamJose from "@/assets/team-jose.jpg";
import teamKen from "@/assets/team-ken.jpg";
import teamKenzie from "@/assets/team-kenzie.jpg";

const navItems = [
  ["Overview", "#top"],
  ["Challenge", "#challenge"],
  ["Solution", "#solution"],
  ["Prototype", "#prototype"],
  ["System", "#system"],
  ["Process", "#process"],
  ["Business", "#business"],
  ["Team", "#team"],
  ["References", "#references"],
];

const comparisonRows = [
  ["Strength", "Reliable tactile primary tool", "Strong mobility partner", "Route context", "Extended obstacle sensing", "Body-level spatial feedback"],
  ["Gap", "Ground-level and contact-based", "High cost and access burden", "No direct nearby obstacle cues", "Complex and sometimes intrusive", "Not a replacement for mobility tools"],
  ["Training", "Established", "High", "Low to moderate", "Moderate to high", "Moderate and calibratable"],
  ["Privacy", "Low", "Low", "Location concerns", "Possible recording concerns", "Data-minimized by design"],
];

const prototypeStages = [
  ["V01", "Basic sensing build", "Proved directional cue concept"],
  ["V02", "Improved belt logic", "Better signal readability"],
  ["TEST", "Controlled obstacle trials", "Trust depended on fit and consistency"],
  ["RESULT", "Clarity over complexity", "Simple cue language mattered most"],
  ["REDESIGN", "Narrower claims and better process", "Support, not automation"],
];

const businessPanels = [
  ["Beachhead", "Pilot-driven assistive product"],
  ["Pilot path", "Accessibility centers and O&M partners"],
  ["Financial model", "Pilot to partnership to low-volume product"],
  ["Sustainability", "Affordable, durable, repairable, private"],
];

const riskPairs = [
  ["Over-reliance", "Cane remains primary"],
  ["False alert", "Adjustable sensitivity"],
  ["Missed obstacle", "Clear claim limits"],
  ["Sensor blocked", "Obstruction checks"],
  ["Battery failure", "Low-battery alerts"],
  ["Privacy issue", "Data minimization"],
];

const teamCards = [
  { role: "Product / industrial design", skill: "Form, ergonomics, prototyping", contribution: "Wearable object and fit", image: teamBrian, name: "Brian Camilo" },
  { role: "Brand / website lead", skill: "Visual system, storytelling", contribution: "Launch-style presentation", image: teamKen, name: "Ken Chin" },
  { role: "UX / research lead", skill: "Journey, accessibility, testing", contribution: "Spatial confidence framing", image: teamKenzie, name: "Kenzie Gill" },
  { role: "Hardware / technical lead", skill: "Sensors, microcontroller, wiring", contribution: "Core sensing system", image: teamJose, name: "Jose Hernandez" },
  { role: "Business / process lead", skill: "Adoption, pilot, sustainability", contribution: "Implementation pathway", image: teamEsther, name: "Esther Ji" },
  { role: "Systems / validation", skill: "Integration, communication", contribution: "System coherence", image: teamChristine, name: "Christine Lai" },
];

const references = [
  {
    title: "Vision impairment and assistive technology",
    items: [
      "WHO. Blindness and vision impairment.",
      "WHO and UNICEF. Global report on assistive technology.",
      "CDC. Vision loss and public health context.",
    ],
  },
  {
    title: "Co-design and patient involvement",
    items: [
      "Course readings on participatory design.",
      "Representative literature on co-design with blind and low-vision users.",
    ],
  },
  {
    title: "Implementation and policy",
    items: [
      "Course readings on digital health implementation.",
      "Representative sources on training, support, and adoption.",
    ],
  },
  {
    title: "Privacy and regulatory",
    items: [
      "FDA intended use and device classification guidance.",
      "HHS HIPAA guidance on covered entities and business associates.",
    ],
  },
];

function SectionHeader({
  index,
  label,
  title,
  sub,
}: {
  index: string;
  label: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="section-header">
      <div className="section-index">{index}</div>
      <div>
        <p className="micro-label">{label}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-sub">{sub}</p>
      </div>
    </div>
  );
}

function HeroBeltGraphic() {
  return (
    <div className="belt-hero">
      <div className="belt-glow" />
      <svg viewBox="0 0 760 620" className="belt-svg" aria-label="Theia belt concept render">
        <defs>
          <linearGradient id="beltStroke" x1="0%" x2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.75)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
          </linearGradient>
          <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(215,163,93,0.65)" />
            <stop offset="100%" stopColor="rgba(215,163,93,0)" />
          </radialGradient>
        </defs>

        <ellipse cx="380" cy="315" rx="238" ry="128" fill="rgba(255,255,255,0.02)" stroke="url(#beltStroke)" strokeWidth="2.2" />
        <ellipse cx="380" cy="315" rx="194" ry="98" fill="rgba(5,5,5,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
        <ellipse cx="380" cy="315" rx="264" ry="152" fill="none" stroke="rgba(215,163,93,0.18)" strokeWidth="1" strokeDasharray="5 8" />

        {[
          [198, 315],
          [288, 230],
          [380, 205],
          [472, 230],
          [562, 315],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="36" fill="url(#sensorGlow)" />
            <circle cx={cx} cy={cy} r="9" fill="rgba(215,163,93,0.95)" />
            <circle cx={cx} cy={cy} r="13" fill="none" stroke="rgba(215,163,93,0.55)" strokeWidth="1.2" />
            <text x={cx} y={cy - 24} textAnchor="middle" className="svg-tiny">
              M0{index + 1}
            </text>
          </g>
        ))}

        <path d="M380 205 L380 120" stroke="rgba(215,163,93,0.5)" strokeWidth="1.2" strokeDasharray="5 5" />
        <text x="398" y="118" className="svg-label">FORWARD SENSOR FIELD</text>

        <path d="M564 315 L680 270" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
        <text x="688" y="270" className="svg-label">HAPTIC ZONE</text>

        <path d="M196 315 L82 370" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
        <text x="26" y="376" className="svg-label">SIDE PROXIMITY MODULE</text>

        <path d="M472 398 L550 498" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
        <text x="556" y="506" className="svg-label">BATTERY / CONTROL</text>
      </svg>
    </div>
  );
}

function ChainDiagram() {
  const items = ["Vision loss", "Spatial uncertainty", "Mobility stress", "Reduced independence"];
  return (
    <div className="chain-diagram">
      {items.map((item, index) => (
        <div key={item} className="chain-step">
          <span className="chain-num">0{index + 1}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function ArchitectureFlow() {
  const items = ["Environment", "Sensor Input", "Processing Logic", "Haptic / Audio Cue", "User Response"];
  return (
    <div className="architecture-flow">
      {items.map((item) => (
        <div key={item} className="architecture-node">
          {item}
        </div>
      ))}
    </div>
  );
}

function BeltBodyDiagram() {
  return (
    <div className="diagram-panel">
      <svg viewBox="0 0 780 620" className="diagram-svg" aria-label="Annotated belt-on-body concept diagram">
        <ellipse cx="390" cy="310" rx="148" ry="188" fill="rgba(255,255,255,0.03)" />
        <ellipse cx="390" cy="310" rx="244" ry="88" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.24)" strokeWidth="1.5" />
        <ellipse cx="390" cy="310" rx="212" ry="60" fill="rgba(5,5,5,0.92)" stroke="rgba(255,255,255,0.12)" />

        <circle cx="250" cy="310" r="10" fill="rgba(215,163,93,0.95)" />
        <circle cx="390" cy="252" r="10" fill="rgba(215,163,93,0.95)" />
        <circle cx="530" cy="310" r="10" fill="rgba(215,163,93,0.95)" />
        <circle cx="390" cy="370" r="10" fill="rgba(215,163,93,0.95)" />

        <path d="M390 252 L390 160" stroke="rgba(215,163,93,0.55)" strokeWidth="1.2" strokeDasharray="4 5" />
        <text x="404" y="154" className="svg-label">FORWARD SENSOR ZONE</text>

        <path d="M530 310 L666 310" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
        <text x="672" y="314" className="svg-label">RIGHT HAPTIC ZONE</text>

        <path d="M250 310 L112 310" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
        <text x="18" y="314" className="svg-label">LEFT HAPTIC ZONE</text>

        <path d="M390 370 L390 476" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
        <text x="404" y="492" className="svg-label">CONTROL + BATTERY MODULE</text>
      </svg>
    </div>
  );
}

function ExplodedDiagram() {
  const items = [
    ["Proximity sensor", "Nearby obstacle detection"],
    ["Microcontroller", "Cue logic and calibration"],
    ["Haptic motor", "Directional body feedback"],
    ["Battery", "Daily wearable power"],
    ["Enclosure", "Fit, comfort, protection"],
    ["Setup app", "Optional configuration only"],
  ];

  return (
    <div className="exploded-diagram">
      {items.map(([title, text], index) => (
        <div key={title} className="exploded-part" style={{ animationDelay: `${index * 120}ms` }}>
          <span className="part-id">P0{index + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

function SystemModelDiagram() {
  const items = [
    ["Health challenge", "Safer, clearer spatial awareness"],
    ["Product innovation", "Wearable sensing + proximity feedback"],
    ["Process innovation", "Fit, calibrate, train, support"],
    ["Stakeholder system", "User, caregiver, O&M, partner network"],
    ["Target outcomes", "Confidence, reduced uncertainty, independence"],
  ];

  return (
    <div className="system-model">
      {items.map(([title, text], index) => (
        <div key={title} className="system-block">
          <span className="part-id">0{index + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

function StakeholderOrbit() {
  const items = [
    ["Caregiver", "14%", "34%"],
    ["O&M specialist", "72%", "22%"],
    ["Accessibility org", "80%", "74%"],
    ["Design team", "50%", "8%"],
    ["Hardware advisor", "20%", "76%"],
    ["Rehab partner", "52%", "88%"],
  ];

  return (
    <div className="orbit-panel">
      <div className="orbit-rings" />
      <div className="orbit-center">
        <span className="part-id">CORE</span>
        <h3>Theia user</h3>
        <p>Daily interaction, trust, confidence.</p>
      </div>
      {items.map(([label, left, top]) => (
        <div key={label} className="orbit-node" style={{ left, top }}>
          {label}
        </div>
      ))}
    </div>
  );
}

const Index = () => {
  return (
    <div className="theia-site">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="topbar">
        <div className="frame">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden />
            <div>
              <strong>THEIA</strong>
              <span>Spatial Awareness System</span>
            </div>
          </a>
          <nav className="topnav" aria-label="Primary">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero-section panel-section">
          <div className="frame hero-layout">
            <div className="hero-copy">
              <p className="micro-label">MODULE 01 / PRODUCT LAUNCH</p>
              <div className="hero-wordmark">THEIA</div>
              <h1 className="hero-heading">A second layer of spatial awareness.</h1>
              <p className="hero-sub">
                A wearable assistive belt designed to support blind and low-vision users with lightweight proximity feedback.
              </p>
              <p className="hero-disclaimer">Designed to support the white cane, not replace it.</p>
              <div className="hero-actions">
                <a href="#system" className="cta-primary">
                  View system model
                </a>
                <a href="#prototype" className="cta-secondary">
                  See prototype
                </a>
              </div>
            </div>

            <div className="hero-visuals">
              <HeroBeltGraphic />
              <div className="hero-photo-float">
                <img src={heroImage} alt="Theia concept product image" />
              </div>
            </div>
          </div>
        </section>

        <section id="challenge" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="02"
              label="Challenge"
              title="Mobility is not only direction. It is spatial confidence."
              sub="The core problem is uncertainty about nearby space."
            />
            <ChainDiagram />
          </div>
        </section>

        <section id="human" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="03"
              label="Human Experience"
              title="Questions that sit at body level."
              sub="Theia is designed around confidence, not automation."
            />
            <div className="quote-rail">
              {[
                "Is there something beside me?",
                "Am I too close?",
                "Can I move through this space confidently?",
              ].map((quote) => (
                <article key={quote} className="quote-slab">
                  <p>{quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="alternatives" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="04"
              label="Current Alternatives"
              title="Existing tools are valuable. Each leaves a different gap."
              sub="Theia is designed to complement, not replace."
            />
            <div className="matrix-shell">
              <table className="comparison-matrix">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>White cane</th>
                    <th>Guide dog</th>
                    <th>Phone apps</th>
                    <th>Camera devices</th>
                    <th className="accent-column">Theia</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) =>
                        index === 0 ? <th key={cell}>{cell}</th> : <td key={`${row[0]}-${cell}`}>{cell}</td>,
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="insight" className="statement-section">
          <div className="frame">
            <p className="micro-label">05 / KEY INSIGHT</p>
            <h2 className="statement-heading">
              The opportunity is not to replace mobility tools.
              <br />
              It is to add a second layer of spatial awareness.
            </h2>
          </div>
        </section>

        <section id="solution" className="panel-section">
          <div className="frame split-grid">
            <div>
              <SectionHeader
                index="06"
                label="Solution"
                title="A wearable sensing companion with simple feedback."
                sub="Less guessing. More environmental feedback."
              />
              <ArchitectureFlow />
            </div>
            <div className="spec-column">
              {[
                "Wearable belt module",
                "Nearby obstacle sensing",
                "Haptic or audio cue output",
                "Adjustable feedback intensity",
              ].map((item, index) => (
                <div key={item} className="spec-panel">
                  <span className="part-id">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="panel-section">
          <div className="frame wide-grid">
            <div>
              <SectionHeader
                index="07"
                label="Product Experience"
                title="Theia should feel like an engineered wearable."
                sub="Placement, sensing, and feedback need to read as one system."
              />
              <BeltBodyDiagram />
            </div>
            <div className="support-stack">
              <figure className="media-card media-tall">
                <img src={beltImage} alt="Theia belt concept worn on body" />
                <figcaption>Belt-on-body concept</figcaption>
              </figure>
              <figure className="media-card">
                <img src={contextImage} alt="Theia use context" />
                <figcaption>Spatial awareness in context</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="technology" className="panel-section">
          <div className="frame split-grid">
            <div>
              <SectionHeader
                index="08"
                label="Technology"
                title="Technical feasibility without overclaiming."
                sub="Detect nearby obstacles. Estimate proximity. Provide feedback."
              />
              <ExplodedDiagram />
            </div>
            <figure className="media-card media-tall right-lift">
              <img src={hapticImage} alt="Prototype electronics and haptic detail" />
              <figcaption>Prototype electronics detail</figcaption>
            </figure>
          </div>
        </section>

        <section id="prototype" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="09"
              label="Prototype"
              title="A design process board, not a feature list."
              sub="V01 to redesign in five clear steps."
            />
            <div className="prototype-board">
              {prototypeStages.map(([label, headline, outcome], index) => (
                <article key={label} className="prototype-stage">
                  <div className="prototype-placeholder">
                    <span>STAGE {index + 1}</span>
                  </div>
                  <div className="prototype-meta">
                    <span className="part-id">{label}</span>
                    <h3>{headline}</h3>
                    <p>{outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="system" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="10"
              label="System Model"
              title="Product innovation and process innovation must move together."
              sub="This is the core visual model of Theia."
            />
            <SystemModelDiagram />
          </div>
        </section>

        <section id="process" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="11"
              label="Process Innovation"
              title="Assistive technology fails when it is treated as an object purchase instead of an adoption system."
              sub="The service blueprint is part of the product."
            />
            <div className="process-timeline">
              {[
                "Recruit",
                "Assess",
                "Fit",
                "Calibrate",
                "Train",
                "Controlled test",
                "Supervised trial",
                "Feedback",
                "Redesign",
              ].map((step, index) => (
                <div key={step} className="process-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stakeholders" className="panel-section">
          <div className="frame split-grid">
            <div>
              <SectionHeader
                index="12"
                label="Stakeholder Engagement"
                title="Adoption depends on an ecosystem."
                sub="The user sits at the center. Support sits around the system."
              />
              <StakeholderOrbit />
            </div>
            <div className="spec-column">
              {[
                "User: useful cues",
                "Caregiver: clear boundaries",
                "O&M specialist: safe integration",
                "Accessibility org: real benefit",
              ].map((item, index) => (
                <div key={item} className="spec-panel">
                  <span className="part-id">S0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="business" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="13"
              label="Business + Sustainability"
              title="A pilot-driven assistive product, not a mass-market wearable."
              sub="Adoption should start where trust already exists."
            />
            <div className="business-board">
              {businessPanels.map(([title, text], index) => (
                <article key={title} className="business-panel">
                  <span className="part-id">B0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="safety" className="panel-section">
          <div className="frame split-grid">
            <div>
              <SectionHeader
                index="14"
                label="Safety / Ethics / Regulation"
                title="Guardrails are part of the concept."
                sub="Clear claims. Clear limits. Clear responsibility."
              />
              <div className="risk-grid">
                {riskPairs.map(([risk, guardrail]) => (
                  <div key={risk} className="risk-pair">
                    <strong>{risk}</strong>
                    <span>{guardrail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="guardrail-note">
              <p className="micro-label">CLAIM BOUNDARY</p>
              <h3>Theia supports spatial feedback. It does not replace the cane.</h3>
              <p>Keep language focused on assistive feedback, not guaranteed safety or autonomous navigation.</p>
            </div>
          </div>
        </section>

        <section id="team" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="15"
              label="Team"
              title="Product, process, experience, and adoption."
              sub="Role-based structure aligned to the innovation challenge."
            />
            <div className="team-board">
              {teamCards.map((member) => (
                <article key={member.name} className="team-panel">
                  <img src={member.image} alt={`${member.name} portrait`} />
                  <div className="team-meta">
                    <span className="part-id">{member.name}</span>
                    <h3>{member.role}</h3>
                    <p>{member.skill}</p>
                    <strong>{member.contribution}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="panel-section">
          <div className="frame">
            <SectionHeader
              index="16"
              label="Roadmap"
              title="Five next steps."
              sub="A clearer path from prototype to safer assistive companion."
            />
            <div className="roadmap-track">
              {[
                "Improve sensing reliability",
                "Refine haptic language",
                "Test fit and comfort",
                "Conduct guided user testing",
                "Build partner-supported pilot",
              ].map((item, index) => (
                <div key={item} className="roadmap-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="closing" className="statement-section">
          <div className="frame">
            <p className="micro-label">17 / CLOSING STATEMENT</p>
            <h2 className="statement-heading">
              Theia is not trying to replace the white cane or automate independence.
            </h2>
            <p className="closing-copy">
              It is designed to add a second layer of spatial awareness while keeping the human, the cane, and the mobility routine at the center.
            </p>
          </div>
        </section>

        <section id="references" className="references-section">
          <div className="frame">
            <SectionHeader
              index="18"
              label="References"
              title="Grouped, quiet, and presentation-friendly."
              sub="Detailed citations can continue to expand as the final deck is finalized."
            />
            <div className="reference-columns">
              {references.map((group) => (
                <article key={group.title} className="reference-group">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
