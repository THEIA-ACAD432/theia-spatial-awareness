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
      "Lock down hardware. First user testing. Pass the dignity test before anything else.",
  },
  {
    n: "02",
    years: "2027 / 2030",
    name: "Clinical Validation",
    description:
      "Move from prototype to medical device. Longitudinal study. FDA and EU pathways.",
  },
  {
    n: "03",
    years: "2030 / 2035",
    name: "Go to Market",
    description:
      "Launch through rehab centers, schools, VA programs. Insurance reimbursement. Ship Gen 2. Open the API.",
  },
  {
    n: "04",
    years: "2035 / 2043",
    name: "Mainstream",
    description:
      "Standard-of-care recommendation. Consumer line that reads as accessory. AI-augmented scene understanding.",
  },
  {
    n: "05",
    years: "2043 / 2051",
    name: "Globalize",
    description:
      "Sub-$150 device. Community health worker distribution. WHO procurement. Largest open-access mobility dataset ever assembled.",
  },
];

const risks = [
  { risk: "Adoption barriers", mitigation: "Institutional deployment through clinicians, OTs, and rehab centers. Subscription absorbs upfront cost." },
  { risk: "Reimbursement timeline", mitigation: "Phased FDA + EU pathway. Direct-pay early, insurance reimbursement post-validation." },
  { risk: "Pricing pressure", mitigation: "Subscription model amortizes hardware cost. Hardware refreshes baked into membership." },
  { risk: "Distribution scale", mitigation: "Start with rehab + VA channels. Expand to schools and consumer once unit economics prove out." },
];

const Business = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* 01 / Value Proposition */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Value Proposition</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em] mb-10">
                  A health innovation,
                  <br />
                  <span className="text-graphite-soft italic font-light">not a gadget.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                  Less friction. Less fear. More of the world on the user&rsquo;s own terms.
                </p>
                <Link
                  to="/challenge"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-signal hover:underline underline-offset-2 transition-colors"
                >
                  Read the research case <span aria-hidden>&rarr;</span>
                </Link>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 space-y-4">
                {[
                  {
                    n: "01",
                    title: "Situational awareness",
                    body: "Extends sensing beyond what touch can reach. The air above the cane.",
                  },
                  {
                    n: "02",
                    title: "Lower cognitive load",
                    body: "Passive, ambient alerts. Less mental overhead in unfamiliar environments.",
                  },
                  {
                    n: "03",
                    title: "Independence preserved",
                    body: "The user always decides. Theia informs, never instructs.",
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
            <div className="border border-hairline bg-ivory p-8 lg:p-12 mb-px">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <div className="font-mono-tag text-signal mb-5">BUSINESS MODEL</div>
                  <h3 className="font-display text-3xl md:text-4xl text-graphite tracking-[-0.03em] leading-[0.95] mb-6">
                    Subscription, not <span className="italic font-light text-graphite-soft">one-and-done.</span>
                  </h3>
                  <p className="text-base text-graphite leading-relaxed text-pretty">
                    Like Whoop. Hardware is the entry point. Membership is the relationship. Software, sensor calibration, and hardware refreshes all flow through the subscription.
                  </p>
                </div>

                <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-hairline border border-hairline">
                  <div className="bg-ivory p-6">
                    <div className="font-mono-tag text-signal mb-3">USERS</div>
                    <p className="text-sm text-graphite leading-relaxed">Blind and visually impaired cane users.</p>
                  </div>
                  <div className="bg-ivory p-6">
                    <div className="font-mono-tag text-signal mb-3">PRIMARY</div>
                    <p className="text-sm text-graphite leading-relaxed">Direct sales through rehab centers, OTs, and mobility specialists.</p>
                  </div>
                  <div className="bg-ivory p-6">
                    <div className="font-mono-tag text-signal mb-3">SECONDARY</div>
                    <p className="text-sm text-graphite leading-relaxed">Schools for the blind, VA programs, and insurers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Market Landscape */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-4">02 / Market Landscape</div>
            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em]">
                What exists,
                <br />
                <span className="text-graphite-soft italic font-light">and where it falls short.</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse border border-hairline bg-ivory text-sm">
                <thead>
                  <tr className="bg-ivory-deep text-foreground">
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-hairline w-[25%]">Substitute</th>
                    <th className="font-mono-tag text-left px-5 py-4 font-normal border-r border-hairline w-[37%]">What it does well</th>
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
        <section className="relative py-28 lg:py-40 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / 25-Year Roadmap</div>

            <div className="mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] tracking-[-0.022em]">
                Five segments.
                <br />
                <span className="text-signal italic font-light">One direction.</span>
              </h2>
            </div>

            {/* Timeline track (desktop) */}
            <div className="hidden lg:block relative mb-12">
              <div className="absolute top-[9px] left-0 right-0 h-px bg-hairline" />
              <div className="flex">
                {roadmap.map((seg) => (
                  <div key={seg.n} className="flex-1 relative">
                    <div className="w-4 h-4 rounded-full border-2 border-signal bg-background relative z-10 mb-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Segment columns */}
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
              {roadmap.map((seg) => (
                <div key={seg.n} className="border-t border-hairline pt-6 lg:border-t-0 lg:pt-0">
                  <div className="font-mono-tag text-signal mb-2">{seg.n}</div>
                  <div className="font-mono-tag text-foreground/40 mb-3">{seg.years}</div>
                  <h3 className="font-display text-2xl text-foreground tracking-[-0.025em] mb-4 leading-tight">
                    {seg.name}
                  </h3>
                  <p className="text-foreground/55 text-sm leading-relaxed text-pretty">
                    {seg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / Cost Drivers & Commercial Risks */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Cost Drivers & Commercial Risks</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em] mb-8">
                  Where the money
                  <br />
                  <span className="text-graphite-soft italic font-light">comes and goes.</span>
                </h2>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty mb-10">
                  Hardware is the entry point. The subscription absorbs cost over time and funds clinical validation, distribution, and refresh cycles.
                </p>
                <div>
                  <div className="font-mono-tag text-signal mb-4">HIGH-LEVEL COST DRIVERS</div>
                  <ul className="space-y-2 text-graphite-soft leading-relaxed">
                    {[
                      "Hardware manufacturing",
                      "Sensors & embedded microcontroller",
                      "Clinical testing & validation",
                      "Accessibility compliance",
                      "Channel partnerships (rehab, VA)",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="text-signal shrink-0">/</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <div className="font-mono-tag text-graphite-soft/60 mb-4">COMMERCIAL RISK &rarr; MITIGATION</div>
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
                <p className="text-xs text-graphite-soft/60 mt-4 leading-relaxed">
                  Product-level risks (privacy, over-reliance) are addressed on the <Link to="/product" className="text-signal underline decoration-signal/40 underline-offset-2">Product page</Link>. Clinical and regulatory considerations live in <Link to="/process" className="text-signal underline decoration-signal/40 underline-offset-2">Process</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 / Partnerships & Future Support */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">05 / Partnerships & Future Support</div>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  Theia doesn&rsquo;t
                  <br />
                  ship <span className="text-signal">alone.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                Adoption depends on the support system around the device. Below is an honest snapshot of who&rsquo;s currently engaged, who we&rsquo;re in conversation with, and who we&rsquo;re targeting next.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline mb-12">

              {/* ENGAGED */}
              <div className="bg-ivory p-6 lg:p-7">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  <span className="font-mono-tag text-signal">ENGAGED</span>
                </div>
                <ul className="space-y-5">
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">USC ACAD-432 Faculty</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Course advisor providing innovation systems guidance, rubric review, and project feedback.</p>
                  </li>
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">USC Viterbi (MDDE)</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Medical Device & Diagnostic Engineering program supporting Jose&rsquo;s hardware integration work and electrical bench testing.</p>
                  </li>
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">USC Iovine and Young Academy</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Design and prototyping infrastructure &mdash; CAD, fabrication, soldering, iteration cycles.</p>
                  </li>
                </ul>
              </div>

              {/* IN CONVERSATION */}
              <div className="bg-ivory p-6 lg:p-7">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal/50" />
                  <span className="font-mono-tag text-signal/70">IN CONVERSATION</span>
                </div>
                <ul className="space-y-5">
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">Mobility & Orientation specialists</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Early user research interviews on cane-first design and where the device should not interfere with training.</p>
                  </li>
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">Local low-vision community</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Recruiting test users for Wizard-of-Oz sessions and wearability validation through USC accessibility networks.</p>
                  </li>
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">Occupational therapy advisors</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Informal review of haptic alert patterns and cognitive load thresholds before structured pilots.</p>
                  </li>
                </ul>
              </div>

              {/* TARGETED */}
              <div className="bg-ivory p-6 lg:p-7">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-graphite-soft/40" />
                  <span className="font-mono-tag text-graphite-soft/70">TARGETED NEXT</span>
                </div>
                <ul className="space-y-5">
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">VA Blind Rehabilitation Service</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Federal channel for veteran vision-loss populations. Clear procurement pathway once clinical validation lands.</p>
                  </li>
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">American Foundation for the Blind</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Distribution + advocacy partner. Validates user-centered evidence for downstream institutional adoption.</p>
                  </li>
                  <li>
                    <div className="font-display text-base text-graphite tracking-[-0.02em] mb-1">Schools for the Blind (state-level)</div>
                    <p className="text-xs text-graphite-soft leading-relaxed">Early-career user cohort. Long-term relationship value as users transition from training to independent mobility.</p>
                  </li>
                </ul>
              </div>

            </div>

            {/* Future support tracks */}
            <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
              <div className="bg-ivory p-6 lg:p-7">
                <div className="font-mono-tag text-signal mb-4">FUTURE FUNDING PATHS</div>
                <ul className="space-y-2 text-sm text-graphite-soft leading-relaxed">
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>USC student-research grants for prototype iteration</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>Accessibility-focused foundations (Lavelle Fund, Lighthouse Guild)</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>SBIR Phase I (assistive tech medical device track)</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>Strategic corporate partners in mobility / wearables</li>
                </ul>
              </div>
              <div className="bg-ivory p-6 lg:p-7">
                <div className="font-mono-tag text-signal mb-4">LONG-TERM SUPPORT</div>
                <ul className="space-y-2 text-sm text-graphite-soft leading-relaxed">
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>Insurance reimbursement (post-FDA pathway)</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>WHO assistive technology procurement (global tier)</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>Community health worker distribution networks</li>
                  <li className="flex gap-3"><span className="text-signal shrink-0">/</span>Open API for third-party haptic / sensor integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 06 / Societal Sustainability */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">06 / Societal Sustainability</div>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  A product that earns
                  <br />
                  its <span className="text-signal">place over time.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                Sustainability for Theia means more than runtime hours. It means a device that respects dignity, scales equitably, and lowers the long-term cost of vision-related healthcare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
              {[
                {
                  n: "01",
                  tag: "DIGNITY",
                  title: "Non-stigmatizing by design",
                  body: "The belt reads as fashion, not medical equipment. Sensors and motors live inside the band. Users get spatial awareness without signaling disability to bystanders.",
                },
                {
                  n: "02",
                  tag: "EQUITY",
                  title: "Accessible at every income tier",
                  body: "Roadmap targets a sub-$150 device by 2043 distributed through community health workers and WHO procurement. Premium tier funds the accessible tier.",
                },
                {
                  n: "03",
                  tag: "HEALTH SYSTEM",
                  title: "Preventive infrastructure",
                  body: "Fewer collisions and falls means fewer ER visits, lower fracture rates, and reduced long-term care costs. Theia pays back the health system over years, not transactions.",
                },
                {
                  n: "04",
                  tag: "LIFECYCLE",
                  title: "Fixed core, evolving shell",
                  body: "The electronics core stays. The shell (fabric, color, fit) evolves separately. Reduces e-waste, extends device lifespan, and lets users update aesthetics without buying new hardware.",
                },
              ].map((s) => (
                <div key={s.n} className="bg-ivory p-6 lg:p-7">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono-tag text-signal">{s.n}</span>
                    <span className="font-mono-tag text-graphite-soft/40">{s.tag}</span>
                  </div>
                  <h3 className="font-display text-xl text-graphite mb-3 tracking-[-0.02em] leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-graphite-soft leading-relaxed text-pretty">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-hairline max-w-3xl">
              <p className="font-display text-2xl md:text-3xl text-graphite leading-snug tracking-[-0.025em]">
                Independence is the metric. <span className="text-signal italic font-light">Not units sold.</span>
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
