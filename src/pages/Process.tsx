import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

const stakeholders = [
  {
    role: "End Users",
    label: "Visually impaired patients",
    detail: "Day-to-day usability, dignity, cognitive load, independence.",
    primary: true,
  },
  {
    role: "Providers",
    label: "Clinicians & mobility specialists",
    detail: "Prescription, clinical outcomes, fitting, training.",
    primary: false,
  },
  {
    role: "Payers",
    label: "Insurance & reimbursement bodies",
    detail: "Coverage criteria, cost-benefit analysis, billing codes.",
    primary: false,
  },
  {
    role: "Innovators",
    label: "Designers & engineers",
    detail: "Technical feasibility, form factor, manufacturing constraints.",
    primary: false,
  },
];

const testingPlan = [
  "Wizard-of-Oz testing — simulating responses pre-hardware",
  "Cognitive load testing",
  "Alert usefulness validation",
  "Wearability — stairs, crowds, sitting",
  "Real-world route completion test",
];

const matrix = [
  {
    n: "01",
    element: "Obstacles at head/torso height",
    examples: "Signs, branches, shelves",
    relation: [
      "Height: above waist",
      "Direction: ahead / lateral",
      "Velocity: 0 (static)",
      "Distance: 0–2m",
      "Depth: N/A",
    ],
    event: "Static obstacle detected within ~2m in walking path",
    feedback: "Haptic alert indicating direction and urgency (stronger = closer)",
  },
  {
    n: "02",
    element: "Ground-level hazards",
    examples: "Curbs, steps, potholes, uneven surfaces",
    relation: [
      "Height: ground level",
      "Direction: ahead",
      "Velocity: 0",
      "Distance: 0–2m",
      "Depth: depth of change (10–20cm)",
    ],
    event: "Elevation change detected in walking path",
    feedback: "Distinct haptic pattern for \"step up\" vs \"step down\" vs \"uneven\"",
  },
  {
    n: "03",
    element: "Moving objects",
    examples: "People, bikes, cars",
    relation: [
      "Height: variable",
      "Direction: any relative to user",
      "Velocity: >0 (tracking speed + trajectory)",
      "Distance: 0–5m",
      "Depth: N/A",
    ],
    event: "Moving object on collision course within ~3–10m",
    feedback: "Directional haptic pulse tracking the object's approach side",
  },
  {
    n: "04",
    element: "Open spaces / doorways / passageways",
    examples: "",
    relation: [
      "Height: user height or taller",
      "Direction: relative to heading",
      "Velocity: 0",
      "Distance: 0–3m",
      "Depth: gap width",
    ],
    event: "Navigable opening detected while user is scanning",
    feedback: "Gentle confirmation buzz guiding toward the opening",
  },
  {
    n: "05",
    element: "Walls / large static boundaries",
    examples: "",
    relation: [
      "Height: variable",
      "Direction: left / right / ahead",
      "Velocity: 0",
      "Distance: 0–1m",
      "Depth: N/A",
    ],
    event: "User approaching boundary within ~1m",
    feedback: "Sustained low vibration on nearest side",
  },
];

const references = [
  {
    n: "01",
    authors: "Katzschmann, Araki, & Rus",
    year: "2018",
    title: "Safe Local Navigation for Visually Impaired Users With a Time-of-Flight and Haptic Feedback Device",
    journal: "IEEE Trans. Neural Syst. Rehabil. Eng.",
    volume: "26(3), 583–593",
  },
  {
    n: "02",
    authors: "Bala, Vasundhara, Haritha, & Moorthy",
    year: "2023",
    title: "Design, Development and Performance Analysis of Cognitive Assisting Aid with Multi Sensor Fused Navigation",
    journal: "Journal of Big Data",
    volume: "10, Article 28",
  },
  {
    n: "03",
    authors: "Xu et al.",
    year: "2023",
    title: "Intelligent Head-Mounted Obstacle Avoidance Wearable for the Blind and Visually Impaired",
    journal: "Sensors",
    volume: "23(23), 9598",
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-20 lg:py-28 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Process / 03</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[11vw] sm:text-[8vw] lg:text-[6.5vw] text-graphite leading-[0.88] tracking-[-0.04em]">
                  How we
                  <br />
                  <span className="text-signal italic font-light">got here.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  Stakeholder mapping, user research, detection scenarios, and the literature that shaped every decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Discern Stakeholders */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Discern Stakeholders</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em] mb-8">
                  Map the system
                  <br />
                  <span className="text-graphite-soft italic font-light">before building in it.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-5">
                  In the discern phase, we identified and mapped key stakeholders to understand the broader system surrounding visually impaired mobility before moving into user testing and validation.
                </p>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty mb-5">
                  We categorized stakeholders into four primary groups to capture different perspectives on needs, constraints, and incentives — from day-to-day usability to reimbursement and adoption.
                </p>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty">
                  By engaging with a range of stakeholders early, we established a clear problem space and ensured that our project direction was grounded in real-world context rather than assumptions.
                </p>

                <div className="border-l-2 border-signal pl-5 py-1 mt-8">
                  <p className="text-graphite-soft italic leading-relaxed text-pretty">
                    "User comfort and ease of integration into daily routines significantly impact usability and adoption."
                  </p>
                  <div className="mt-3 font-mono-tag text-graphite-soft/50">
                    NAIDOO & GHAZIASGAR · 2025
                  </div>
                </div>
              </div>

              {/* Stakeholder grid */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="font-mono-tag text-graphite-soft/60 mb-4">STAKEHOLDER MAP</div>
                <div className="grid grid-cols-2 gap-px bg-hairline border border-hairline">
                  {stakeholders.map((s) => (
                    <div
                      key={s.role}
                      className={`p-6 lg:p-7 ${s.primary ? "bg-graphite text-ivory" : "bg-ivory"}`}
                    >
                      <div className={`font-mono-tag mb-3 ${s.primary ? "text-signal" : "text-signal"}`}>
                        {s.role}
                      </div>
                      <div className={`font-display text-lg tracking-[-0.02em] mb-2 ${s.primary ? "text-ivory" : "text-graphite"}`}>
                        {s.label}
                      </div>
                      <p className={`text-xs leading-relaxed ${s.primary ? "text-ivory/60" : "text-graphite-soft"}`}>
                        {s.detail}
                      </p>
                      {s.primary && (
                        <div className="mt-4 font-mono-tag text-signal/70">PRIMARY</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stakeholder Engagement deep-dive */}
            <div className="mt-20 lg:mt-24 pt-16 border-t border-hairline">
              <div className="grid lg:grid-cols-12 gap-8 mb-12">
                <div className="lg:col-span-5">
                  <div className="font-mono-tag text-graphite-soft/60 mb-4">STAKEHOLDER ENGAGEMENT</div>
                  <h3 className="font-display text-3xl md:text-4xl text-graphite leading-[0.95] tracking-[-0.03em]">
                    Different needs,
                    <br />
                    <span className="text-graphite-soft italic font-light">engaged on their terms.</span>
                  </h3>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                  <p className="text-base text-graphite-soft leading-relaxed text-pretty">
                    The map above names the players. This is how Theia actually meets each one — what they need, and the design choice that earns their trust.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
                {[
                  {
                    role: "Visually Impaired Users",
                    tier: "PRIMARY",
                    needs: "Safety, independence, low cognitive load.",
                    response: "Theia is built cane-first — it augments existing behavior rather than introducing new complexity. Haptic alerts inform, never overwhelm.",
                    primary: true,
                  },
                  {
                    role: "Clinicians & Mobility Specialists",
                    tier: "PROVIDERS",
                    needs: "Clinical validity and workflow fit.",
                    response: "Theia supports — not replaces — clinical expertise. The goal is a product providers can confidently recommend without undermining their role in care.",
                    primary: false,
                  },
                  {
                    role: "Insurance & Payers",
                    tier: "PAYERS",
                    needs: "Cost containment and outcome evidence.",
                    response: "Fewer collisions means fewer injury-related healthcare costs. Reduced caregiver dependency lowers long-term utilization. Theia frames itself as preventive infrastructure, not elective technology.",
                    primary: false,
                  },
                  {
                    role: "Designers & Innovators",
                    tier: "INNOVATORS",
                    needs: "Buildability now, expandability later.",
                    response: "Modular architecture and realistic material costs make Theia buildable today and extensible as the platform matures.",
                    primary: false,
                  },
                ].map((s) => (
                  <div key={s.role} className={`p-7 lg:p-9 ${s.primary ? "bg-graphite text-ivory" : "bg-ivory"}`}>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono-tag text-signal">{s.tier}</span>
                      {s.primary && <span className="font-mono-tag text-signal/70">PRIMARY</span>}
                    </div>
                    <h4 className={`font-display text-xl tracking-[-0.025em] mb-5 leading-tight ${s.primary ? "text-ivory" : "text-graphite"}`}>
                      {s.role}
                    </h4>
                    <div className={`font-mono-tag mb-2 ${s.primary ? "text-ivory/40" : "text-graphite-soft/50"}`}>
                      WHAT THEY NEED
                    </div>
                    <p className={`text-sm leading-relaxed mb-5 ${s.primary ? "text-ivory/70" : "text-graphite-soft"}`}>
                      {s.needs}
                    </p>
                    <div className={`font-mono-tag mb-2 ${s.primary ? "text-ivory/40" : "text-graphite-soft/50"}`}>
                      HOW THEIA RESPONDS
                    </div>
                    <p className={`text-sm leading-relaxed text-pretty ${s.primary ? "text-ivory/85" : "text-graphite"}`}>
                      {s.response}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 / User Research & Validation */}
        <section className="relative py-20 lg:py-28 border-b border-hairline bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / User Research & Validation</div>

            {/* Pull quote */}
            <div className="mb-16 pb-16 border-b border-ivory/10">
              <p className="font-display text-[5.5vw] sm:text-[4vw] lg:text-[3vw] text-ivory leading-[1.1] tracking-[-0.03em] max-w-5xl">
                "Sometimes it's not about a device —
                <br />it's about{" "}
                <span className="text-signal italic font-light">feeling normal.</span>"
              </p>
              <div className="mt-6 font-mono-tag text-ivory/30">USER INTERVIEW — DIRECT QUOTE</div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="font-mono-tag text-ivory/40 mb-5">KEY INSIGHT</div>
                <p className="text-base md:text-lg text-ivory/80 leading-relaxed text-pretty mb-6">
                  One user directly said they wouldn't wear a harness. The team's takeaway: the product must combine fashion and technology so visually impaired users blend in — dignity and social normalcy are as important as function.
                </p>
                <div className="border-l-2 border-signal pl-5 py-1 mt-8">
                  <p className="text-ivory/60 italic leading-relaxed">
                    "The barrier isn't physical navigation — it's the invisible layer of context that surrounds every journey."
                  </p>
                  <div className="mt-3 font-mono-tag text-ivory/30">
                    INTERNAL — DESIGN BRIEF
                  </div>
                </div>

                <div className="border-l-2 border-signal/40 pl-5 py-1 mt-5">
                  <p className="text-ivory/60 italic leading-relaxed">
                    "Solutions must respect users' individuality and contribute to empowerment and inclusion."
                  </p>
                  <div className="mt-3 font-mono-tag text-ivory/30">
                    DUCKETT & PRATT
                  </div>
                </div>

                <div className="border-l-2 border-signal/40 pl-5 py-1 mt-5">
                  <p className="text-ivory/60 italic leading-relaxed">
                    "The assistive device should be light and easy to use."
                  </p>
                  <div className="mt-3 font-mono-tag text-ivory/30">
                    BOUTERAA · 2021
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <div className="font-mono-tag text-ivory/40 mb-5">PLANNED TESTING</div>
                <ul className="space-y-4">
                  {testingPlan.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ivory/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Detection Matrix */}
        <section className="py-20 lg:py-28 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-4">03 / Detection Matrix</div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em]">
                Full detection
                <br />
                <span className="text-graphite-soft italic font-light">scenario mapping.</span>
              </h2>
              <p className="text-sm text-graphite-soft max-w-xs leading-relaxed">
                Every class of real-world hazard, its sensor properties, the triggering event, and the haptic response.
              </p>
            </div>

            {/* Table — scrolls on mobile */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse border border-hairline bg-ivory text-sm">
                <thead>
                  <tr className="bg-graphite text-ivory">
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-ivory/10 w-8">#</th>
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-ivory/10 w-[22%]">Element</th>
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-ivory/10 w-[26%]">Sensor Properties</th>
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-ivory/10 w-[24%]">Trigger Event</th>
                    <th className="font-mono-tag text-left px-5 py-4 font-normal">Haptic Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((row, i) => (
                    <tr key={row.n} className={`border-t border-hairline align-top ${i % 2 === 1 ? "bg-ivory-deep/50" : "bg-ivory"}`}>
                      <td className="px-5 py-5 border-r border-hairline">
                        <span className="font-mono-tag text-signal">{row.n}</span>
                      </td>
                      <td className="px-5 py-5 border-r border-hairline">
                        <div className="text-graphite font-medium leading-snug mb-1">{row.element}</div>
                        {row.examples && (
                          <div className="font-mono-tag text-graphite-soft/60 mt-1">{row.examples}</div>
                        )}
                      </td>
                      <td className="px-5 py-5 border-r border-hairline">
                        <ul className="space-y-1">
                          {row.relation.map((r) => (
                            <li key={r} className="text-graphite-soft leading-snug">{r}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-5 py-5 border-r border-hairline text-graphite leading-relaxed">
                        {row.event}
                      </td>
                      <td className="px-5 py-5 text-graphite leading-relaxed">
                        {row.feedback}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 max-w-3xl border-l-2 border-signal pl-5 py-2">
              <p className="text-graphite italic leading-relaxed text-pretty">
                "93.1% recognition accuracy with a false positive rate under 3%."
              </p>
              <div className="mt-3 font-mono-tag text-graphite-soft/60">
                CHAI & LAU — VALIDATING SCENARIO-SPECIFIC DETECTION IS ACHIEVABLE IN PRACTICE
              </div>
            </div>
          </div>
        </section>

        {/* 04 / Process Innovation Analysis */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Process Innovation Analysis</div>

            {/* Framework + Sigma formula */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em] mb-8">
                  The framework
                  <br />
                  <span className="text-graphite-soft italic font-light">behind every decision.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-5">
                  Theia's process innovation is measured across four variables — every design and business decision is held against the same equation.
                </p>
                <div className="border-l-2 border-signal pl-5 py-1 mt-6">
                  <p className="font-display text-xl text-graphite italic leading-snug tracking-[-0.02em]">
                    Does Theia improve health outcomes faster than it adds cost?
                  </p>
                  <div className="mt-3 font-mono-tag text-graphite-soft/50">
                    THE CORE QUESTION
                  </div>
                </div>
              </div>

              {/* Formula display */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="font-mono-tag text-graphite-soft/60 mb-5">VALUE FUNCTION</div>
                <div className="bg-ivory border border-hairline p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-5xl md:text-6xl text-signal leading-none mt-1">Σ</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-display text-lg text-graphite tracking-[-0.02em]">
                          ( Δ health outcomes )
                        </span>
                        <span className="font-display text-2xl text-graphite-soft">−</span>
                        <span className="font-display text-lg text-graphite tracking-[-0.02em]">
                          ( Δ cost )
                        </span>
                      </div>
                      <div className="border-t-2 border-graphite/30 my-3" />
                      <div className="font-display text-lg text-graphite tracking-[-0.02em]">
                        Δ ( 1 grocery store trip )
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-graphite-soft/60 font-mono-tag mt-8 leading-relaxed">
                    A proxy measure of functional independence — the net benefit per unit of everyday-life improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Four variables */}
            <div className="font-mono-tag text-graphite-soft/60 mb-4">FOUR VARIABLES</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline mb-20">
              {[
                { n: "01", label: "Users", body: "Visually impaired individuals — the primary unit of study." },
                { n: "02", label: "Stakeholder Classes", body: "VI users, clinicians and mobility specialists, insurance and payers, designers and innovators." },
                { n: "03", label: "Unit of Service", body: "One mobility event — a single trip to the grocery store." },
                { n: "04", label: "Success Signal", body: "Fewer collisions, reduced injury costs, less caregiver dependency over time." },
              ].map((v) => (
                <div key={v.n} className="bg-ivory p-6 lg:p-7">
                  <div className="font-mono-tag text-signal mb-4">{v.n}</div>
                  <div className="font-display text-xl text-graphite tracking-[-0.025em] mb-3 leading-tight">{v.label}</div>
                  <p className="text-sm text-graphite-soft leading-relaxed text-pretty">{v.body}</p>
                </div>
              ))}
            </div>

            {/* Managing Competing Needs */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="font-mono-tag text-graphite-soft/60 mb-4">MANAGING COMPETING NEEDS</div>
                <h3 className="font-display text-3xl md:text-4xl text-graphite leading-[0.95] tracking-[-0.03em]">
                  Every tradeoff
                  <br />
                  <span className="text-graphite-soft italic font-light">is a stated choice.</span>
                </h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="border border-hairline bg-ivory divide-y divide-hairline">
                  {[
                    { left: "Autonomy", right: "Safety", body: "Theia assists, it doesn't control. The user stays in charge." },
                    { left: "Cost", right: "Functionality", body: "MVP prioritizes essential sensors and haptics. Nothing extraneous at launch." },
                    { left: "Innovation", right: "Adoption", body: "Aligns with existing cane behavior. No new habits required." },
                    { left: "Clinical Validation", right: "Speed to Market", body: "Incremental validation allows early deployment while evidence builds over time." },
                  ].map((t, i) => (
                    <div key={i} className="px-6 py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      <div className="md:w-[44%] flex items-center gap-3 shrink-0">
                        <span className="font-display text-lg text-graphite tracking-[-0.02em]">{t.left}</span>
                        <span className="font-mono-tag text-signal">VS</span>
                        <span className="font-display text-lg text-graphite tracking-[-0.02em]">{t.right}</span>
                      </div>
                      <p className="text-sm text-graphite-soft leading-relaxed flex-1 text-pretty">{t.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 / Research & Findings */}
        <section className="relative py-20 lg:py-28 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">05 / Research & Findings</div>

            <div className="grid lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[0.92] tracking-[-0.035em]">
                  The literature
                  <br />
                  <span className="text-signal italic font-light">behind Halo.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-base md:text-lg text-ivory/70 leading-relaxed text-pretty">
                  Every scenario, threshold, and feedback pattern in this system is anchored to peer-reviewed work — the bar Theia's validation is designed to meet or exceed.
                </p>
              </div>
            </div>

            {/* Benchmark callout */}
            <div className="grid md:grid-cols-2 gap-px bg-ivory/10 border border-ivory/10 mb-4">
              <div className="bg-graphite p-7 lg:p-9">
                <div className="font-display text-5xl md:text-6xl text-signal mb-3 tracking-[-0.03em]">93%</div>
                <p className="text-ivory/70 text-sm leading-relaxed text-pretty">
                  of users found vibratory feedback easy to understand.
                </p>
              </div>
              <div className="bg-graphite p-7 lg:p-9">
                <div className="font-display text-5xl md:text-6xl text-signal mb-3 tracking-[-0.03em]">91%</div>
                <p className="text-ivory/70 text-sm leading-relaxed text-pretty">
                  familiarized themselves with the system quickly.
                </p>
              </div>
            </div>
            <div className="font-mono-tag text-ivory/30 mb-16">
              KATZSCHMANN ET AL. — VALIDATION BENCHMARK
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10">
              {references.map((ref) => (
                <div key={ref.n} className="bg-graphite p-7 lg:p-10">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono-tag text-signal">[{ref.n}]</span>
                    <span className="font-mono-tag text-ivory/30">{ref.year}</span>
                  </div>
                  <div className="font-mono-tag text-ivory/40 mb-3">{ref.authors}</div>
                  <p className="text-ivory/90 leading-snug font-medium mb-5 text-pretty">
                    {ref.title}
                  </p>
                  <div className="mt-auto pt-5 border-t border-ivory/10">
                    <div className="font-mono-tag text-signal/70">{ref.journal}</div>
                    <div className="font-mono-tag text-ivory/30 mt-1">{ref.volume}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Process;
