import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

const marketRows = [
  {
    substitute: "White canes",
    strengths: "Reliable, low-cost, intuitive, user-controlled",
    weaknesses: "Limited to physical obstacle detection in small immediate radius",
  },
  {
    substitute: "Guide dogs",
    strengths: "Context-aware navigation, can dynamically adapt",
    weaknesses: "High cost, long training, limited availability, lifestyle constraints",
  },
  {
    substitute: "Smart glasses",
    strengths: "Object recognition, text reading, voice assistance",
    weaknesses: "High cognitive load, active interaction required, socially intrusive",
  },
  {
    substitute: "Seeing AI app",
    strengths: "Digital navigation and wayfinding, voice assistant",
    weaknesses: "Device/screen reliant, low real-time spatial context, interferes with cane use",
  },
  {
    substitute: "Smart canes (WeWALK)",
    strengths: "Obstacle alerts, route guidance",
    weaknesses: "Limited contextual information, relies on active smartphone interaction",
  },
];

const roadmap = [
  {
    n: "01",
    years: "2026",
    name: "Prove It",
    description:
      "Build and validate the core product. Lock down hardware, run first user testing, and confirm that haptic spatial awareness meaningfully increases navigation confidence without disrupting cane-based routines. Form factor must pass the dignity test — it has to blend in socially before it can scale anywhere.",
  },
  {
    n: "02",
    years: "2027–2030",
    name: "Clinical Validation",
    description:
      "Transition from prototype to evidence-based medical device. Run a longitudinal real-world study, build the clinician dashboard, and initiate FDA and EU regulatory pathways. This is the era of proof — building the evidence stack that earns trust from health systems, OTs, and insurers.",
  },
  {
    n: "03",
    years: "2030–2035",
    name: "Go to Market",
    description:
      "First commercial launch through institutional channels — rehab centers, schools for the blind, VA programs. Pursue insurance reimbursement. Ship Gen 2 hardware with improved battery life and reduced false positives. Begin opening a developer API so the broader ecosystem can build on top of Halo's sensing layer.",
  },
  {
    n: "04",
    years: "2035–2043",
    name: "Mainstream",
    description:
      "Halo becomes a standard-of-care recommendation for newly diagnosed patients. Launch a consumer line that looks like an accessory, not an aid. Expand into pediatric and aging populations. Introduce AI-augmented sensing for semantic scene understanding — moving from rule-based alerts to contextually intelligent awareness.",
  },
  {
    n: "05",
    years: "2043–2051",
    name: "Globalize",
    description:
      "Over 80% of visually impaired people live in low- and middle-income countries with near-zero access to assistive tech. Engineer a sub-$150 device, train community health workers as the distribution layer, and partner with WHO for procurement. Close the decade by embedding Halo into smart city infrastructure and publishing the largest real-world mobility outcomes dataset ever assembled — 500,000+ users, open-access.",
  },
];

const metrics = [
  {
    category: "Detection",
    items: [
      "Obstacle detection accuracy ≥ 90%",
      "False positive rate ≤ 2 per minute",
      "Hazard warning delivered ≥ 2 seconds before potential contact",
    ],
  },
  {
    category: "Comprehension",
    items: [
      "Users correctly interpret haptic cues ≥ 80% of the time",
      "Users reach that threshold within 15 minutes of first use",
    ],
  },
  {
    category: "Wearability",
    items: [
      "Users wear the belt for full session without removing it (≥ 30 min)",
      "80% of testers rate fit and comfort as acceptable or better",
    ],
  },
  {
    category: "Real-World Navigation",
    items: [
      "Users successfully complete a test route with product assistance",
      "≥ 75% report feeling more confident navigating unfamiliar spaces",
    ],
  },
];

const risks = [
  { risk: "Over-reliance on automation", mitigation: "Cane-first design — Halo augments, never leads" },
  { risk: "Privacy concerns", mitigation: "Sensor-only detection — no cameras, no data stored or transmitted" },
  { risk: "Clinical liability", mitigation: "No real-time decision-making — alerts only, user acts" },
  { risk: "Adoption barriers", mitigation: "Institutional deployment through clinicians and OTs" },
];

const Business = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-20 lg:py-28 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Business / 05</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[11vw] sm:text-[8vw] lg:text-[6.5vw] text-graphite leading-[0.88] tracking-[-0.04em]">
                  Strategy &
                  <br />
                  <span className="text-signal italic font-light">long game.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  Value proposition, market position, a 25-year roadmap, and the metrics that define success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Value Proposition */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Value Proposition</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em] mb-6">
                  A health innovation,
                  <br />
                  <span className="text-graphite-soft italic font-light">not a gadget.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-4">
                  This is an assistive health innovation that prioritizes safety, dignity, and long-term adoption. A wearable mobility aid that augments white cane use with passive spatial awareness — reducing uncertainty while preserving user control.
                </p>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty">
                  The value proposition is not more technology. It's less friction, less fear, and more of the world accessible on the user's own terms.
                </p>
                <Link
                  to="/challenge"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-signal hover:underline underline-offset-2 transition-colors"
                >
                  Read the research case <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 space-y-4">
                {[
                  {
                    n: "01",
                    title: "Situational awareness",
                    body: "Extends spatial sensing beyond what tactile feedback alone can provide — the air above the cane's reach.",
                  },
                  {
                    n: "02",
                    title: "Reduced cognitive load",
                    body: "Passive, ambient alerts reduce the mental overhead of navigating unfamiliar environments.",
                  },
                  {
                    n: "03",
                    title: "Independence preserved",
                    body: "No automation takeover. The user always decides — Halo informs, never instructs.",
                  },
                ].map((item) => (
                  <div key={item.n} className="bg-ivory border border-hairline p-6 flex gap-5">
                    <span className="font-mono-tag text-signal shrink-0 mt-0.5">{item.n}</span>
                    <div>
                      <div className="font-display text-lg text-graphite tracking-[-0.02em] mb-1">{item.title}</div>
                      <p className="text-sm text-graphite-soft leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Model */}
            <div className="border border-hairline bg-ivory p-6 lg:p-10 mb-px">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-5">
                  <div className="font-mono-tag text-signal mb-4">BUSINESS MODEL</div>
                  <h3 className="font-display text-3xl md:text-4xl text-graphite tracking-[-0.03em] leading-[0.95] mb-5">
                    Subscription, not <span className="italic font-light text-graphite-soft">one-and-done.</span>
                  </h3>
                  <p className="text-base text-graphite leading-relaxed text-pretty mb-4">
                    Theia runs on a subscription model. Like Whoop, the hardware is the entry point and the membership is the relationship.
                  </p>
                  <p className="text-sm text-graphite-soft leading-relaxed text-pretty">
                    Mobility aids are lived in, not bought once. Sensors drift, firmware needs updates, components wear, and the spatial intelligence layer only gets smarter as the model retrains. A subscription keeps the device current, keeps software and detection improvements flowing to existing users, and lets us replace hardware on a service cadence instead of asking people to repurchase. It also lowers the upfront barrier for users and creates predictable revenue for the longitudinal evidence work that earns reimbursement later.
                  </p>
                </div>

                <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-hairline border border-hairline">
                  <div className="bg-ivory p-5 lg:p-6">
                    <div className="font-mono-tag text-signal mb-3">PRIMARY USERS</div>
                    <p className="text-sm text-graphite leading-relaxed">Blind and visually impaired white cane users.</p>
                  </div>
                  <div className="bg-ivory p-5 lg:p-6">
                    <div className="font-mono-tag text-signal mb-3">PRIMARY CHANNEL</div>
                    <p className="text-sm text-graphite leading-relaxed">Direct sales through healthcare providers: rehab centers, occupational therapists, mobility specialists.</p>
                  </div>
                  <div className="bg-ivory p-5 lg:p-6">
                    <div className="font-mono-tag text-signal mb-3">SECONDARY CHANNEL</div>
                    <p className="text-sm text-graphite leading-relaxed">Bulk purchasing by schools for the blind, VA programs, and insurers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Market Landscape */}
        <section className="py-20 lg:py-28 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-4">02 / Market Landscape</div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em]">
                What exists,
                <br />
                <span className="text-graphite-soft italic font-light">and where it falls short.</span>
              </h2>
              <p className="text-sm text-graphite-soft max-w-xs leading-relaxed">
                As of today, nothing in the market effectively addresses spatial and contextual awareness for visually impaired users.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse border border-hairline bg-ivory text-sm">
                <thead>
                  <tr className="bg-graphite text-ivory">
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-ivory/10 w-[25%]">Substitute</th>
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-ivory/10 w-[37%]">What it does well</th>
                    <th className="font-mono-tag text-left px-5 py-4 font-normal">Weaknesses & limitations</th>
                  </tr>
                </thead>
                <tbody>
                  {marketRows.map((row, i) => (
                    <tr key={row.substitute} className={`border-t border-hairline align-top ${i % 2 === 1 ? "bg-ivory-deep/50" : "bg-ivory"}`}>
                      <td className="px-5 py-5 border-r border-hairline font-medium text-graphite">{row.substitute}</td>
                      <td className="px-5 py-5 border-r border-hairline text-graphite-soft leading-relaxed">{row.strengths}</td>
                      <td className="px-5 py-5 text-graphite-soft leading-relaxed">{row.weaknesses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 03 / Roadmap */}
        <section className="relative py-20 lg:py-28 border-b border-hairline bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / 25-Year Roadmap</div>

            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[0.92] tracking-[-0.035em]">
                Five segments.
                <br />
                <span className="text-signal italic font-light">One direction.</span>
              </h2>
            </div>

            {/* Timeline track (desktop) */}
            <div className="hidden lg:block relative mb-12">
              <div className="absolute top-[9px] left-0 right-0 h-px bg-ivory/15" />
              <div className="flex">
                {roadmap.map((seg) => (
                  <div key={seg.n} className="flex-1 relative">
                    <div className="w-4 h-4 rounded-full border-2 border-signal bg-graphite relative z-10 mb-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Segment columns */}
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
              {roadmap.map((seg) => (
                <div key={seg.n} className="border-t border-ivory/10 pt-6 lg:border-t-0 lg:pt-0">
                  <div className="font-mono-tag text-signal mb-2">{seg.n}</div>
                  <div className="font-mono-tag text-ivory/40 mb-3">{seg.years}</div>
                  <h3 className="font-display text-2xl text-ivory tracking-[-0.025em] mb-4 leading-tight">
                    {seg.name}
                  </h3>
                  <p className="text-ivory/55 text-sm leading-relaxed text-pretty">
                    {seg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / Success Metrics */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Success Metrics</div>

            <div className="grid lg:grid-cols-12 gap-8 mb-12">
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em]">
                  What
                  <br />
                  <span className="text-graphite-soft italic font-light">winning looks like.</span>
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
              {metrics.map((group) => (
                <div key={group.category} className="bg-ivory p-6 lg:p-7">
                  <div className="font-mono-tag text-signal mb-5">{group.category.toUpperCase()}</div>
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-graphite leading-relaxed">
                        <span className="text-signal shrink-0 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 / Feasibility & Risks */}
        <section className="py-20 lg:py-28 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">05 / Feasibility & Risks</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em] mb-8">
                  Known risks,
                  <br />
                  <span className="text-graphite-soft italic font-light">deliberate responses.</span>
                </h2>
                <div>
                  <div className="font-mono-tag text-signal mb-4">HIGH-LEVEL COST DRIVERS</div>
                  <ul className="space-y-2 text-graphite-soft leading-relaxed">
                    {[
                      "Hardware manufacturing",
                      "Sensors & embedded microcontroller",
                      "Testing & validation",
                      "Accessibility compliance",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="text-signal shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <div className="font-mono-tag text-graphite-soft/60 mb-4">RISK → MITIGATION</div>
                <div className="border border-hairline bg-ivory divide-y divide-hairline">
                  {risks.map((r) => (
                    <div key={r.risk} className="grid grid-cols-2 gap-0">
                      <div className="px-5 py-5 border-r border-hairline">
                        <div className="font-mono-tag text-graphite-soft/50 mb-2">RISK</div>
                        <p className="text-sm text-graphite leading-relaxed">{r.risk}</p>
                      </div>
                      <div className="px-5 py-5">
                        <div className="font-mono-tag text-signal mb-2">MITIGATION</div>
                        <p className="text-sm text-graphite-soft leading-relaxed">{r.mitigation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 / Future of the Product */}
        <section className="relative py-20 lg:py-28 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">06 / Future of the Product</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[0.92] tracking-[-0.035em] mb-8">
                  A foundation,
                  <br />
                  <span className="text-signal italic font-light">not a finish line.</span>
                </h2>
                <p className="text-base md:text-lg text-ivory/70 leading-relaxed text-pretty mb-5">
                  The first iteration of Theia is a strong foundation, but it&rsquo;s just that. A foundation. Every layer above this version is already mapped, and each one moves the product closer to behaving less like a sensor and more like a sense.
                </p>
                <p className="text-base text-ivory/55 leading-relaxed text-pretty">
                  These aren&rsquo;t ideas for someday. They&rsquo;re the next builds.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-ivory/10 border border-ivory/10">
              {[
                {
                  n: "01",
                  tag: "COVERAGE",
                  title: "180° to 360°",
                  body: "The current build covers 180 degrees in front of the user. Full 360 wraps the user completely, closing the blind spot behind them where a lot of real-world hazards actually come from.",
                },
                {
                  n: "02",
                  tag: "OUTPUT CHANNEL",
                  title: "Paired bone conduction",
                  body: "Haptics stay the primary feedback. Silent, private, no learning curve. Bone conduction adds a second layer for richer, more nuanced alerts without blocking ambient sound. The user hears the world and Theia at the same time.",
                },
                {
                  n: "03",
                  tag: "SPATIAL INTELLIGENCE",
                  title: "From reaction to understanding",
                  body: "Right now Theia reacts to proximity. The future version understands space. LiDAR combined with ToF generates a continuous 3D point cloud around the user. A cloud-assisted ML model trained on millions of pedestrian environment samples learns to label that geometry. Not just “obstacle close, left,” but “person approaching from behind” or “doorway ahead, step up.” Like a cat reading a dark room from an internalized, constantly updated spatial model.",
                },
                {
                  n: "04",
                  tag: "DESIGN PHILOSOPHY",
                  title: "Fixed core, evolving shell",
                  body: "Theia’s infrastructure (sensors, compute, haptics) lives in a fixed core layer. The outer shell sits on top of that and evolves independently. That separation means the design can grow without touching the hardware. Pockets, different materials, fashion finishes. The belt starts looking like something you’d wear anyway, not something you have to wear.",
                },
              ].map((item) => (
                <div key={item.n} className="bg-graphite p-7 lg:p-10">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono-tag text-signal">{item.n}</span>
                    <span className="font-mono-tag text-ivory/30">{item.tag}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4 tracking-[-0.025em] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-ivory/60 leading-relaxed text-pretty">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-ivory/10">
              <p className="font-display text-2xl md:text-3xl text-ivory/90 leading-snug tracking-[-0.025em] max-w-3xl">
                Today Theia detects. Tomorrow it&rsquo;ll <span className="text-signal italic font-light">read the room.</span>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Business;
