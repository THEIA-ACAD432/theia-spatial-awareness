import { Link } from "react-router-dom";
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
  "Wizard-of-Oz testing",
  "Cognitive load testing",
  "Alert usefulness validation",
  "Wearability in real conditions: stairs, crowds, sitting",
  "End-to-end route completion in an uncontrolled environment",
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

const Process = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-28 lg:py-40 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Process / 02</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-graphite leading-[1.02] tracking-[-0.025em]">
                  How we
                  <br />
                  <span className="text-signal italic font-light">got here.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  Stakeholders, research, scenarios, literature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Discern Stakeholders */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Discern Stakeholders</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em] mb-10">
                  Map the system
                  <br />
                  <span className="text-graphite-soft italic font-light">before building in it.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                  Four groups surround visually impaired mobility. Users, clinicians, payers, designers. Each carries different incentives. We mapped all four before drawing a single line.
                </p>
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
          </div>
        </section>

        {/* 02 / User Research & Validation */}
        <section className="relative py-28 lg:py-40 border-b border-hairline bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / User Research & Validation</div>

            {/* Pull quote */}
            <div className="mb-16 pb-16 border-b border-ivory/10">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ivory leading-[1.3] tracking-[-0.018em] max-w-4xl font-light">
                &ldquo;Sometimes it isn&rsquo;t about a device.
                <br />It&rsquo;s about{" "}
                <span className="text-signal italic">feeling normal.</span>&rdquo;
              </p>
              <div className="mt-6 font-mono-tag text-ivory/30">USER INTERVIEW / DIRECT QUOTE</div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="font-mono-tag text-ivory/40 mb-5">KEY INSIGHT</div>
                <p className="text-base md:text-lg text-ivory/80 leading-relaxed text-pretty">
                  One user said outright they wouldn&rsquo;t wear a harness. That sentence shifted the brief. Dignity isn&rsquo;t a soft requirement. It&rsquo;s as load-bearing as the detection system.
                </p>
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
                <div className="mt-8 pt-6 border-t border-ivory/10">
                  <p className="text-sm text-ivory/50 leading-relaxed">
                    Benchmark: 93% of ALVU users found vibratory feedback easy to understand. 91% familiarized quickly. The bar Theia is designed to meet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Detection Matrix */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-4">03 / Detection Matrix</div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em]">
                Full detection
                <br />
                <span className="text-graphite-soft italic font-light">scenario mapping.</span>
              </h2>
              <p className="text-sm text-graphite-soft max-w-xs leading-relaxed">
                Hazard, sensor profile, trigger, response.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
              <div className="lg:col-span-7">
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                  Every hazard type mapped to a spatial profile and a distinct haptic response. Built around real navigation, not lab conditions.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="font-mono-tag text-graphite-soft/60 mb-4">DETECTION BENCHMARK</div>
                <blockquote className="border-l-2 border-signal pl-5 py-1">
                  <p className="text-graphite-soft leading-relaxed text-pretty italic">
                    &ldquo;Overall recognition rate of 93.10%, false positive rate 2.72%, false negative 4.25%.&rdquo;
                  </p>
                  <cite className="font-mono-tag text-signal not-italic mt-3 block">Chai and Lau, p. 1</cite>
                </blockquote>
              </div>
            </div>

            {/* Table scrolls on mobile */}
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
          </div>
        </section>

        {/* 04 / Process Innovation Analysis */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Process Innovation Analysis</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em] mb-10">
                  Measuring
                  <br />
                  <span className="text-graphite-soft italic font-light">what matters.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                  Does Theia improve health outcomes faster than it adds cost? Every decision held against that bar.
                </p>
                <div className="mt-10 space-y-6">
                  <div>
                    <div className="font-mono-tag text-signal mb-3">INPUT VARIABLES</div>
                    <ul className="space-y-2 text-graphite-soft leading-relaxed">
                      <li className="flex gap-3"><span className="font-mono-tag text-graphite-soft/40 shrink-0">·</span> Number of users</li>
                      <li className="flex gap-3"><span className="font-mono-tag text-graphite-soft/40 shrink-0">·</span> Classes of stakeholders (CS)</li>
                      <li className="flex gap-3"><span className="font-mono-tag text-graphite-soft/40 shrink-0">·</span> Number of sessions</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono-tag text-signal mb-3">POPULATION FACTORS</div>
                    <ul className="space-y-2 text-graphite-soft leading-relaxed">
                      <li className="flex gap-3"><span className="font-mono-tag text-graphite-soft/40 shrink-0">·</span> Individual readiness</li>
                      <li className="flex gap-3"><span className="font-mono-tag text-graphite-soft/40 shrink-0">·</span> Interoperability</li>
                      <li className="flex gap-3"><span className="font-mono-tag text-graphite-soft/40 shrink-0">·</span> Market penetration</li>
                      <li className="flex gap-3"><span className="font-mono-tag text-graphite-soft/40 shrink-0">·</span> Population</li>
                    </ul>
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
                    A proxy measure of functional independence. The net benefit per unit of everyday-life improvement.
                  </p>
                </div>

                {/* Managing competing needs */}
                <div className="mt-10">
                  <div className="font-mono-tag text-graphite-soft/60 mb-5">MANAGING COMPETING NEEDS</div>
                  <div className="border border-hairline bg-ivory divide-y divide-hairline">
                    {[
                      { tension: "Autonomy vs. Safety", response: "Theia assists, it doesn't control. Users stay in charge." },
                      { tension: "Cost vs. Functionality", response: "The MVP prioritizes essential sensors and haptics. Nothing extraneous at launch." },
                      { tension: "Innovation vs. Adoption", response: "The product aligns with existing cane behavior. No new habits required." },
                      { tension: "Clinical Validation vs. Speed to Market", response: "Incremental validation allows early deployment while evidence builds over time." },
                    ].map((row) => (
                      <div key={row.tension} className="grid grid-cols-5 gap-0">
                        <div className="col-span-2 px-5 py-4 border-r border-hairline">
                          <p className="text-sm text-graphite font-medium leading-snug">{row.tension}</p>
                        </div>
                        <div className="col-span-3 px-5 py-4">
                          <p className="text-sm text-graphite-soft leading-relaxed">{row.response}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stakeholder Engagement */}
            <div className="pt-12 border-t border-hairline">
              <div className="font-mono-tag text-signal mb-8">STAKEHOLDER ENGAGEMENT</div>
              <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
                {[
                  {
                    group: "Visually Impaired Users",
                    role: "PRIMARY",
                    body: "Cane-first. Augments existing behavior. Haptics inform, never overwhelm.",
                  },
                  {
                    group: "Clinicians & Mobility Specialists",
                    role: "PROVIDERS",
                    body: "Supports clinical expertise. A product providers can confidently recommend.",
                  },
                  {
                    group: "Insurance & Payers",
                    role: "PAYERS",
                    body: "Preventive infrastructure. Fewer collisions, lower long-term healthcare costs.",
                  },
                  {
                    group: "Designers & Innovators",
                    role: "INNOVATORS",
                    body: "Modular architecture. Buildable now, expandable later. Fixed core, evolving shell.",
                  },
                ].map((s) => (
                  <div key={s.group} className="bg-ivory p-6 lg:p-7">
                    <div className="flex items-start justify-between mb-4">
                      <div className="font-display text-xl text-graphite tracking-[-0.02em]">{s.group}</div>
                      <span className="font-mono-tag text-signal">{s.role}</span>
                    </div>
                    <p className="text-sm text-graphite-soft leading-relaxed text-pretty">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 / Research & Findings */}
        <section className="relative py-28 lg:py-40 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">05 / Research & Findings</div>

            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.05] tracking-[-0.022em] mb-6">
                  The literature
                  <br />
                  <span className="text-signal italic font-light">behind Theia.</span>
                </h2>
                <p className="text-base md:text-lg text-ivory/65 leading-relaxed text-pretty max-w-2xl">
                  Every quote traces back to a peer-reviewed source. Full bibliography in MLA.
                </p>
              </div>
              <div className="lg:col-span-5 flex lg:justify-end">
                <Link
                  to="/references"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-signal text-graphite text-sm font-medium hover:bg-ivory transition-all duration-300"
                >
                  See full Works Cited <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Process;
