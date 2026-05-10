import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-10">
    <span className="h-px w-8 bg-signal" />
    <span className="font-mono-tag text-signal">{children}</span>
  </div>
);

const stakeholders = [
  {
    role: "End Users",
    label: "Visually impaired users",
    interest: "Day-to-day usability, dignity, cognitive load, independence.",
    engagement: "Cane-first. Augments existing behavior. Haptics inform, never overwhelm.",
    primary: true,
  },
  {
    role: "Providers",
    label: "Clinicians & mobility specialists",
    interest: "Prescription, clinical outcomes, fitting, training.",
    engagement: "Supports clinical expertise. A product providers can confidently recommend.",
    primary: false,
  },
  {
    role: "Payers",
    label: "Insurance & reimbursement bodies",
    interest: "Coverage criteria, cost-benefit analysis, billing codes.",
    engagement: "Preventive infrastructure. Fewer collisions, lower long-term healthcare costs.",
    primary: false,
  },
  {
    role: "Innovators",
    label: "Designers & engineers",
    interest: "Technical feasibility, form factor, manufacturing constraints.",
    engagement: "Modular architecture. Buildable now, expandable later. Fixed core, evolving shell.",
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

const validationTargets = [
  {
    category: "Detection",
    items: [
      "Obstacle detection accuracy ≥ 90%",
      "False positive rate ≤ 2 per minute",
      "Hazard warning ≥ 2 seconds before potential contact",
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

const tensions = [
  { tension: "Autonomy vs. Safety", response: "Theia assists, it doesn't control. Users stay in charge." },
  { tension: "Cost vs. Functionality", response: "The MVP prioritizes essential sensors and haptics. Nothing extraneous at launch." },
  { tension: "Innovation vs. Adoption", response: "The product aligns with existing cane behavior. No new habits required." },
  { tension: "Clinical Liability vs. Utility", response: "No real-time decision-making. Theia issues alerts only. The user acts." },
  { tension: "Validation vs. Speed to Market", response: "Incremental validation allows early deployment while evidence builds over time." },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* 01 / Stakeholders */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Stakeholder engagement</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02]">
                  Built for the user first,
                  <br />
                  with the <span className="text-signal">support system</span> in mind.
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                Four groups surround visually impaired mobility. Users, clinicians, payers, designers. We mapped all four &mdash; and decided how to engage each &mdash; before drawing a single line.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
              {stakeholders.map((s) => (
                <div
                  key={s.role}
                  className={`p-7 lg:p-8 ${s.primary ? "bg-ivory-deep" : "bg-ivory"}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="font-display text-xl text-graphite tracking-[-0.02em]">
                      {s.label}
                    </div>
                    <span className="font-mono-tag text-signal shrink-0">
                      {s.primary ? "PRIMARY" : s.role.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="font-mono-tag text-graphite-soft/60 mb-2">
                        THEIR INTEREST
                      </div>
                      <p className="text-sm text-graphite-soft leading-relaxed text-pretty">
                        {s.interest}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono-tag text-graphite-soft/60 mb-2">
                        OUR ENGAGEMENT
                      </div>
                      <p className="text-sm text-graphite leading-relaxed text-pretty">
                        {s.engagement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 / User Research & Validation */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>User research & validation</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02]">
                  Dignity is
                  <br />
                  <span className="text-signal">load-bearing.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                One user said outright they wouldn&rsquo;t wear a harness. That sentence shifted the brief. Dignity isn&rsquo;t a soft requirement &mdash; it&rsquo;s as load-bearing as the detection system.
              </p>
            </div>

            {/* Pull quote */}
            <div className="border-l-2 border-signal pl-6 mb-16 max-w-3xl">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-graphite leading-[1.3] tracking-[-0.018em] font-light italic">
                &ldquo;Sometimes it isn&rsquo;t about a device. It&rsquo;s about{" "}
                <span className="text-signal">feeling normal.</span>&rdquo;
              </p>
              <div className="mt-4 font-mono-tag text-graphite-soft/60">User interview &mdash; direct quote</div>
            </div>

            {/* Planned testing + Benchmark */}
            <div className="grid lg:grid-cols-12 gap-10 mb-20">
              <div className="lg:col-span-7">
                <div className="micro-label mb-6">Planned testing</div>
                <ul className="space-y-3">
                  {testingPlan.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 border-b border-hairline pb-3">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-graphite leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 lg:pt-12">
                <div className="border border-hairline bg-ivory p-7">
                  <div className="micro-label text-signal mb-3">Benchmark</div>
                  <p className="text-graphite leading-relaxed text-[15px]">
                    93% of ALVU users found vibratory feedback easy to understand. 91% familiarized quickly. The bar Theia is designed to meet.
                  </p>
                </div>
              </div>
            </div>

            {/* Validation targets */}
            <div>
              <div className="micro-label mb-6">Validation targets</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
                {validationTargets.map((group) => (
                  <div key={group.category} className="bg-background p-6 lg:p-7">
                    <div className="font-mono-tag text-signal mb-5">{group.category.toUpperCase()}</div>
                    <ul className="space-y-3">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-graphite leading-relaxed">
                          <span className="text-signal shrink-0 mt-0.5">/</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Process Innovation */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Process innovation</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02]">
                  Managing
                  <br />
                  <span className="text-signal">competing needs.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                Every product decision sits between two pressures. These are the trade-offs Theia chose, and how the design resolves them.
              </p>
            </div>

            <div className="border border-hairline">
              {tensions.map((row, i) => (
                <div key={row.tension} className={`grid md:grid-cols-12 gap-0 ${i < tensions.length - 1 ? "border-b border-hairline" : ""}`}>
                  <div className="md:col-span-2 px-5 py-5 border-r border-hairline">
                    <span className="text-signal font-mono text-[11px]">0{i + 1}</span>
                  </div>
                  <div className="md:col-span-4 px-5 py-5 border-r border-hairline">
                    <p className="font-display text-lg text-graphite leading-snug tracking-[-0.02em]">{row.tension}</p>
                  </div>
                  <div className="md:col-span-6 px-5 py-5">
                    <p className="text-graphite-soft leading-relaxed">{row.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / Research & Findings */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Research & findings</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02]">
                  The literature
                  <br />
                  <span className="text-signal">behind Theia.</span>
                </h2>
                <p className="mt-8 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed max-w-2xl">
                  Every quote traces back to a peer-reviewed source. Full bibliography in MLA.
                </p>
              </div>
              <div className="lg:col-span-5 flex lg:justify-end">
                <Link
                  to="/references"
                  className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 text-[12px] font-mono uppercase tracking-[0.2em] hover:bg-signal hover:text-background transition-colors"
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
