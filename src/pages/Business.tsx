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

            {/* Revenue model from slide */}
            <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
              <div className="bg-ivory p-6 lg:p-8">
                <div className="font-mono-tag text-signal mb-4">PRIMARY USERS</div>
                <p className="text-graphite leading-relaxed">Blind and visually impaired white cane users</p>
              </div>
              <div className="bg-ivory p-6 lg:p-8">
                <div className="font-mono-tag text-signal mb-4">PRIMARY REVENUE</div>
                <p className="text-graphite leading-relaxed">One-time assistive device purchase</p>
              </div>
              <div className="bg-ivory p-6 lg:p-8">
                <div className="font-mono-tag text-signal mb-4">SECONDARY (OPTIONAL)</div>
                <ul className="space-y-1 text-graphite-soft text-sm leading-relaxed">
                  <li>Companion app — free core features</li>
                  <li>Paid advanced configuration (non-essential)</li>
                  <li>Accessories / hardware upgrades</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Business Model */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / Business Model</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em] mb-6">
                  Membership,
                  <br />
                  <span className="text-graphite-soft italic font-light">not a transaction.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-4">
                  Theia follows the Whoop model: the hardware is included with the membership. No large upfront purchase, no obsolete device sitting in a drawer two years later — the relationship is ongoing.
                </p>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty">
                  Subscription aligns the business with the user's outcome. As long as Theia keeps earning the wear, the membership renews. If it stops being useful, it stops being paid for. That's the discipline assistive health deserves.
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <div className="bg-graphite text-ivory border border-hairline p-8 lg:p-9 h-full flex flex-col">
                  <div className="font-mono-tag text-signal mb-5">MEMBERSHIP MODEL</div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display text-6xl md:text-7xl text-ivory tracking-[-0.03em] leading-none">$</span>
                    <span className="font-display text-6xl md:text-7xl text-ivory tracking-[-0.03em] leading-none">—</span>
                    <span className="font-display text-3xl text-signal italic font-light leading-none ml-1">/mo</span>
                  </div>
                  <div className="font-mono-tag text-ivory/40 mb-4">PRICE TBD · TIERED BY CHANNEL</div>
                  <p className="text-sm text-ivory/60 leading-relaxed text-pretty">
                    Recurring membership includes the device, software, replacements, and ongoing clinician support. Cancel and the hardware returns — no stranded users, no e-waste.
                  </p>
                  <div className="mt-auto pt-6 border-t border-ivory/10">
                    <div className="font-mono-tag text-ivory/30">
                      MODEL REFERENCE — WHOOP, MEMBERSHIP INCLUDES HARDWARE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why subscription */}
            <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline mb-16">
              {[
                {
                  n: "01",
                  title: "Lower entry barrier",
                  body: "A monthly fee makes the device accessible to users who'd never sign off on a four-figure purchase — and to insurers who prefer recurring billing codes.",
                },
                {
                  n: "02",
                  title: "Always-current hardware",
                  body: "Members get hardware refreshes as the platform improves. No one is stuck on Gen 1 sensors three years into the relationship.",
                },
                {
                  n: "03",
                  title: "Continuous software value",
                  body: "Detection models, haptic patterns, and clinician dashboards keep evolving — paid for by the recurring revenue they're funded by.",
                },
              ].map((item) => (
                <div key={item.n} className="bg-ivory p-6 lg:p-7">
                  <div className="font-mono-tag text-signal mb-4">{item.n}</div>
                  <div className="font-display text-lg text-graphite tracking-[-0.02em] mb-2">{item.title}</div>
                  <p className="text-sm text-graphite-soft leading-relaxed text-pretty">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Distribution channels */}
            <div className="font-mono-tag text-graphite-soft/60 mb-4">DISTRIBUTION CHANNELS</div>
            <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
              <div className="bg-ivory p-7 lg:p-9">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tag text-signal">PRIMARY</span>
                  <span className="font-mono-tag text-graphite-soft/40">01</span>
                </div>
                <h3 className="font-display text-2xl text-graphite tracking-[-0.025em] mb-3 leading-tight">
                  Direct memberships via
                  <br />
                  <span className="text-graphite-soft italic font-light">healthcare providers.</span>
                </h3>
                <p className="text-sm text-graphite-soft leading-relaxed mb-5 text-pretty">
                  Memberships are introduced prescriptively — the user enrolls through the clinician already coaching them on mobility, with the subscription billed individually or through insurance.
                </p>
                <ul className="space-y-2 text-sm text-graphite leading-relaxed">
                  <li className="flex gap-3"><span className="text-signal shrink-0">—</span> Rehabilitation centers</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">—</span> Occupational therapists</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">—</span> Mobility specialists</li>
                </ul>
              </div>
              <div className="bg-ivory-deep/40 p-7 lg:p-9">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tag text-signal">SECONDARY</span>
                  <span className="font-mono-tag text-graphite-soft/40">02</span>
                </div>
                <h3 className="font-display text-2xl text-graphite tracking-[-0.025em] mb-3 leading-tight">
                  Bulk seat licenses for
                  <br />
                  <span className="text-graphite-soft italic font-light">institutions.</span>
                </h3>
                <p className="text-sm text-graphite-soft leading-relaxed mb-5 text-pretty">
                  Volume membership contracts — institutions pay per active user per month, putting the device in the hands of users who'd otherwise be priced out of assistive innovation.
                </p>
                <ul className="space-y-2 text-sm text-graphite leading-relaxed">
                  <li className="flex gap-3"><span className="text-signal shrink-0">—</span> Schools for the blind</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">—</span> VA programs</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">—</span> Insurers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Market Landscape */}
        <section className="py-20 lg:py-28 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-4">03 / Market Landscape</div>
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

        {/* 04 / Roadmap */}
        <section className="relative py-20 lg:py-28 border-b border-hairline bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / 25-Year Roadmap</div>

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

        {/* 05 / Success Metrics */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">05 / Success Metrics</div>

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

        {/* 06 / Feasibility & Risks */}
        <section className="py-20 lg:py-28 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">06 / Feasibility & Risks</div>

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

        {/* 07 / Future Iterations */}
        <section className="relative py-20 lg:py-28 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">07 / Future Iterations</div>

            {/* Header */}
            <div className="grid lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[0.92] tracking-[-0.035em] mb-6">
                  A foundation,
                  <br />
                  <span className="text-signal italic font-light">not a finish line.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-4">
                <p className="text-base md:text-lg text-ivory/70 leading-relaxed text-pretty">
                  The first iteration of Theia is a strong foundation — but it's just that. The roadmap below is what turns the device from a reactive assistant into a system that reads the environment the way a cat navigates a dark room.
                </p>
              </div>
            </div>

            {/* Four future pillars */}
            <div className="font-mono-tag text-ivory/40 mb-4">FUTURE PILLARS</div>
            <div className="grid md:grid-cols-2 gap-px bg-ivory/10 border border-ivory/10 mb-20">
              {[
                {
                  n: "01",
                  title: "Full 360° coverage",
                  tag: "FROM 180° → 360°",
                  body: "The current build covers 180 degrees. Full 360 wraps the user completely, closing the blind spot behind them — where a lot of real-world hazards actually come from.",
                },
                {
                  n: "02",
                  title: "Layered output channels",
                  tag: "HAPTIC + BONE CONDUCTION",
                  body: "Haptics remain the primary feedback — silent, private, no learning curve. Bone conduction as a paired wearable adds a second layer for nuanced alerts without blocking ambient sound. The user hears the world and Theia at the same time.",
                },
                {
                  n: "03",
                  title: "Spatial intelligence",
                  tag: "REACTION → COMPREHENSION",
                  body: "LiDAR + ToF generates a continuous 3D point cloud around the user. A cloud-assisted ML model trained on millions of pedestrian samples labels that geometry — not just \"obstacle close, left,\" but \"person approaching from behind\" or \"doorway ahead, step up.\"",
                },
                {
                  n: "04",
                  title: "Modular design philosophy",
                  tag: "FIXED CORE / EVOLVING SHELL",
                  body: "Sensors, compute, and haptics live in a fixed core layer. The outer shell sits on top and evolves independently. Pockets, materials, fashion finishes — the belt starts looking like something you'd wear anyway, not something you have to wear.",
                },
              ].map((p) => (
                <div key={p.n} className="bg-graphite p-7 lg:p-9">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono-tag text-signal">{p.n}</span>
                    <span className="font-mono-tag text-ivory/30">{p.tag}</span>
                  </div>
                  <h3 className="font-display text-2xl text-ivory tracking-[-0.025em] mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ivory/65 leading-relaxed text-pretty">{p.body}</p>
                </div>
              ))}
            </div>

            {/* System architecture diagram */}
            <div className="font-mono-tag text-ivory/40 mb-4">SYSTEM ARCHITECTURE</div>
            <h3 className="font-display text-2xl md:text-3xl text-ivory tracking-[-0.025em] mb-10 leading-tight">
              How all the pieces
              <span className="text-signal italic font-light"> connect.</span>
            </h3>

            <div className="space-y-2 mb-20">
              {/* Cloud layer */}
              <div className="border border-ivory/15 bg-ivory/[0.02] p-6 lg:p-7">
                <div className="font-mono-tag text-signal mb-5">CLOUD INTELLIGENCE LAYER</div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { name: "Spatial ML model", detail: "Scene understanding" },
                    { name: "Federated learning", detail: "Model weights only" },
                    { name: "Pedestrian dataset", detail: "Millions of samples" },
                  ].map((item) => (
                    <div key={item.name} className="border border-ivory/10 bg-graphite/60 p-4">
                      <div className="font-display text-sm md:text-base text-ivory tracking-[-0.02em] mb-1">{item.name}</div>
                      <div className="text-xs text-ivory/50">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-4 bg-ivory/30" />
                <span className="font-mono-tag text-ivory/40 my-1">SEMANTIC MAP ↕ WEIGHT UPDATES</span>
                <div className="w-px h-4 bg-ivory/30" />
              </div>

              {/* Belt layer */}
              <div className="border border-signal/40 bg-signal/[0.04] p-6 lg:p-7">
                <div className="font-mono-tag text-signal mb-5">THEIA BELT — INFRASTRUCTURE LAYER</div>
                <div className="grid md:grid-cols-3 gap-4 items-stretch">
                  {[
                    { name: "360° LiDAR + ToF", detail: "Full surround sensing" },
                    { name: "On-device compute", detail: "Preprocess, compress" },
                    { name: "Haptic motor array", detail: "Directional + intensity" },
                  ].map((item, i, arr) => (
                    <div key={item.name} className="relative border border-signal/30 bg-graphite/70 p-4">
                      <div className="font-display text-sm md:text-base text-ivory tracking-[-0.02em] mb-1">{item.name}</div>
                      <div className="text-xs text-ivory/50">{item.detail}</div>
                      {i < arr.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-signal text-sm">→</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-4 bg-ivory/30" />
                <span className="font-mono-tag text-ivory/40 my-1">BLUETOOTH LE</span>
                <div className="w-px h-4 bg-ivory/30" />
              </div>

              {/* Bone conduction (optional) */}
              <div className="grid md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-7 border border-ivory/15 bg-ivory/[0.02] p-6 lg:p-7">
                  <div className="font-mono-tag text-ivory/50 mb-3">BONE CONDUCTION — PAIRED WEARABLE</div>
                  <p className="text-sm text-ivory/70">High-priority alerts, directional audio cues.</p>
                </div>
                <div className="md:col-span-5 px-1">
                  <div className="font-mono-tag text-ivory/30 mb-2">OPTIONAL — USER'S CHOICE</div>
                  <p className="text-xs text-ivory/40 leading-relaxed">No ambient sound blocked.</p>
                </div>
              </div>
            </div>

            {/* Belt anatomy */}
            <div className="font-mono-tag text-ivory/40 mb-4">BELT ANATOMY</div>
            <h3 className="font-display text-2xl md:text-3xl text-ivory tracking-[-0.025em] mb-12 leading-tight">
              The 360° sensor ring
              <span className="text-signal italic font-light"> + layered construction.</span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              {/* Top-down sensor ring */}
              <div>
                <div className="font-mono-tag text-ivory/30 mb-6">TOP-DOWN VIEW — 360° SENSOR RING</div>
                <div className="relative aspect-[4/3] bg-ivory/[0.02] border border-ivory/10 p-4">
                  <svg viewBox="0 0 400 300" className="w-full h-full" aria-hidden>
                    <ellipse cx="200" cy="150" rx="160" ry="80" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.45)" strokeWidth="1.5" />
                    <ellipse cx="200" cy="150" rx="55" ry="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 3" />
                    <rect x="195" y="146" width="10" height="10" fill="rgba(245,158,11,0.75)" />
                    <text x="200" y="142" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="ui-monospace, monospace">user</text>
                    <text x="200" y="172" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="ui-monospace, monospace">waist</text>

                    <circle cx="200" cy="70" r="7" fill="#3b82f6" />
                    <circle cx="200" cy="230" r="7" fill="#3b82f6" />
                    <circle cx="40" cy="150" r="7" fill="#3b82f6" />
                    <circle cx="360" cy="150" r="7" fill="#3b82f6" />

                    <circle cx="85" cy="95" r="6" fill="#f59e0b" />
                    <circle cx="315" cy="95" r="6" fill="#f59e0b" />
                    <circle cx="85" cy="205" r="6" fill="#f59e0b" />
                    <circle cx="315" cy="205" r="6" fill="#f59e0b" />

                    <text x="200" y="55" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="ui-monospace, monospace">front — LiDAR 8×8</text>
                    <text x="200" y="258" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="ui-monospace, monospace">rear — LiDAR</text>
                    <text x="370" y="135" textAnchor="end" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="ui-monospace, monospace">right — ToF</text>
                    <text x="30" y="135" textAnchor="start" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="ui-monospace, monospace">left — ToF</text>
                    <text x="345" y="80" textAnchor="end" fill="rgba(245,158,11,0.7)" fontSize="9" fontFamily="ui-monospace, monospace">diagonal ToF ×4</text>
                  </svg>
                </div>
              </div>

              {/* Cross-section */}
              <div>
                <div className="font-mono-tag text-ivory/30 mb-6">CROSS-SECTION — LAYERED CONSTRUCTION</div>
                <div className="space-y-1">
                  <div className="bg-graphite border border-ivory/25 p-5">
                    <div className="font-display text-base md:text-lg text-ivory tracking-[-0.02em]">Design shell — swappable outer layer</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="bg-signal/10 border border-signal/40 p-4">
                      <div className="font-display text-xs md:text-sm text-ivory tracking-[-0.02em] mb-1 leading-tight">Sensor + compute core</div>
                      <div className="text-[10px] md:text-xs text-ivory/55">LiDAR, ToF, ESP32-S3+</div>
                    </div>
                    <div className="bg-ivory/[0.06] border border-ivory/20 p-4">
                      <div className="font-display text-xs md:text-sm text-ivory tracking-[-0.02em] mb-1 leading-tight">Power + comms</div>
                      <div className="text-[10px] md:text-xs text-ivory/55">LiPo, BLE, USB-C</div>
                    </div>
                    <div className="bg-signal/20 border border-signal/50 p-4">
                      <div className="font-display text-xs md:text-sm text-ivory tracking-[-0.02em] mb-1 leading-tight">Haptic array</div>
                      <div className="text-[10px] md:text-xs text-ivory/55">5+ motors, 360° mapped</div>
                    </div>
                  </div>
                  <div className="font-mono-tag text-ivory/30 pt-4 text-center">
                    INFRASTRUCTURE FIXED — SHELL SWAPS INDEPENDENTLY
                  </div>
                </div>
              </div>
            </div>

            {/* Open edge cases — subordinate */}
            <div className="border-t border-ivory/10 pt-16">
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                  <div className="font-mono-tag text-ivory/40 mb-4">STILL OPEN</div>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory leading-[0.95] tracking-[-0.03em] mb-6">
                    What we haven't
                    <br />
                    <span className="text-signal italic font-light">solved yet.</span>
                  </h3>
                  <p className="text-base text-ivory/70 leading-relaxed text-pretty">
                    Even with the architecture above, real-world navigation stays full of contextual ambiguity. Objects the user wants to interact with vs. objects to avoid — these remain open design problems.
                  </p>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="font-mono-tag text-ivory/40 mb-5">OPEN EDGE CASES</div>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Intentional objects",
                        body: "How does the system distinguish a chair the user wants to sit in from an obstacle to avoid? Proximity alone is insufficient.",
                      },
                      {
                        title: "Crosswalk crowds",
                        body: "Dense pedestrian environments create sensor noise. Multiple moving objects at varying velocities can produce conflicting alerts.",
                      },
                      {
                        title: "Semantic context",
                        body: "Rule-based alerts don't understand intent or environment. A doorway is an opening, not an obstacle — but the sensor doesn't know the difference yet.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="border-l-2 border-signal/40 pl-5 py-1">
                        <div className="font-mono-tag text-signal/80 mb-1">{item.title}</div>
                        <p className="text-sm text-ivory/60 leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Business;
