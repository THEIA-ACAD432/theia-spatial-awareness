import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

const roadmap = [
  {
    n: "01",
    name: "Visually Impaired Patients",
    description:
      "Patients prioritize safety, independence, and low cognitive load. Our design responds by using “cane-first” principles, ensuring the product augments existing mobility behaviors rather than introducing complexity. We also emphasize intuitive alert systems (haptic/audio hierarchy) to support real-time decision-making without overwhelming the user.",
  },
  {
    n: "02",
    name: "Providers (Clinicians & Mobility Specialists)",
    description:
      "Providers focus on patient safety, clinical validity, and ease of integration into care workflows. We address this by designing a system that supports—not replaces—clinical expertise, allowing providers to trust and recommend the product while maintaining their role in care delivery.",
  },
  {
    n: "03",
    name: "Insurance and Payers",
    description:
      "Payers prioritize cost-effectiveness, scalability, and measurable outcomes. Our approach frames value through reduced injury risk (e.g., falls, collisions) and improved independence, which can lower long-term healthcare costs. We align with payer incentives by demonstrating potential cost savings relative to preventable incidents and care utilization.",
  },
  {
    n: "04",
    name: "Designers and Innovators",
    description:
      "Prioritizes feasibility, technical performance, and scalability. We address these needs by grounding the design in realistic material costs, modular architecture, and interoperable systems that can evolve over time.",
  },
];

const risks = [
  { risk: "Adoption barriers", mitigation: "Institutional deployment through clinicians, OTs, and rehab centers. Reimbursement absorbs upfront cost for end users." },
  { risk: "Reimbursement timeline", mitigation: "Phased FDA + EU pathway. Direct-pay early, insurance reimbursement post-validation." },
  { risk: "Pricing pressure", mitigation: "Volume manufacturing and clinical reimbursement bring per-unit costs down. Tiered hardware lineup serves premium and accessible price points." },
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

            <div className="grid lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.05] text-graphite mb-8">
                  A health innovation,
                  <br />
                  <span className="text-graphite-soft italic font-light">not a gadget.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty max-w-xl">
                  Less friction. Less fear. More of the world on the user&rsquo;s own terms.
                </p>
                <Link
                  to="/challenge"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-signal hover:underline underline-offset-2 transition-colors"
                >
                  Read the research case <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline mb-16">
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
                <div key={item.n} className="bg-ivory p-6 lg:p-7 flex flex-col">
                  <span className="font-mono-tag text-signal mb-5">{item.n}</span>
                  <div className="font-display text-lg text-graphite tracking-[-0.02em] mb-2 leading-tight">{item.title}</div>
                  <p className="text-sm text-graphite-soft leading-relaxed text-pretty">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Business Model */}
            <div className="border border-hairline bg-ivory p-8 lg:p-12 mb-px">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <div className="font-mono-tag text-signal mb-5">BUSINESS MODEL</div>
                  <h3 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] text-graphite mb-6">
                    Buy once.
                    <br />
                    <span className="italic font-light text-graphite-soft">Own it outright.</span>
                  </h3>
                  <p className="text-base text-graphite leading-relaxed text-pretty">
                    A single hardware purchase. Software updates and sensor calibration are bundled in. The device belongs to the user from day one.
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

        {/* 02 / Roadmap */}
        <section className="relative py-28 lg:py-40 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / Stakeholder Engagement</div>

            <div className="mb-16">
              <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.05] text-foreground">
                Stakeholder Engagement
                <br />
                <span className="text-signal italic font-light">Four Key Groups</span>
              </h2>
            </div>

            {/* Timeline track (desktop) — dots at line ends + even spacing (no empty tail) */}
            <div className="hidden lg:block relative mb-12">
              <div
                className="absolute top-[7px] left-[7px] right-[7px] h-px bg-hairline"
                aria-hidden
              />
              <div className="relative flex justify-between">
                {roadmap.map((seg) => (
                  <div key={seg.n} className="flex flex-col items-center">
                    <div className="h-4 w-4 shrink-0 rounded-full border-2 border-signal bg-background relative z-10" />
                  </div>
                ))}
              </div>
            </div>

            {/* Segment columns — four groups across full width */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {roadmap.map((seg) => (
                <div key={seg.n} className="border-t border-hairline pt-6 lg:border-t-0 lg:pt-0">
                  <div className="font-mono-tag text-signal mb-2">{seg.n}</div>
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

        {/* 03 / Cost Drivers & Commercial Risks */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / Financial Plan and Cost Drivers</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.05] text-graphite mb-8">
                  Where the money
                  <br />
                  <span className="text-graphite-soft italic font-light">comes and goes.</span>
                </h2>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty mb-10">
                  A single hardware purchase funded by reimbursement, institutional channels, and direct sales. Manufacturing scale and clinical reimbursement determine whether unit economics hold.
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

        {/* 04 / Societal Sustainability */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Societal Sustainability</div>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.05] text-graphite">
                  A product that earns
                  <br />
                  <span className="text-graphite-soft italic font-light">its place over time.</span>
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
                  body: "An accessible hardware tier, subsidized through WHO procurement and community health worker programs, reaches users premium markets cannot. Premium tier funds the accessible one.",
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
