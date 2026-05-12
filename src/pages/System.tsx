import { Link, useNavigate } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-10">
    <span className="h-px w-8 bg-signal" />
    <span className="font-mono-tag text-signal">{children}</span>
  </div>
);

const teamAlignment = [
  { domain: "Translating user dignity into design", member: "Brian Camilo", role: "Product Manager", links: "Problem / Process / Business" },
  { domain: "Form factor that disappears into daily wear", member: "Ken Chin", role: "Physical Product Design", links: "Product / Design" },
  { domain: "Cane-first cognitive load + haptic mapping", member: "Kenzie Gill", role: "Software Developer & UX Designer", links: "Product / Process" },
  { domain: "Multi-sensor architecture that proves the concept", member: "Jose Hernandez", role: "Electrical Engineer & Systems Integration", links: "Product / Hardware Architecture" },
  { domain: "Stakeholder + market validation across the system", member: "Esther Ji", role: "Business Strategy", links: "Process / Business" },
  { domain: "Ergonomics that survive real-world conditions", member: "Christine Lai", role: "Design Engineer", links: "Product / Design" },
];

const SystemDiagram = () => {
  const navigate = useNavigate();
  const W = 1100;
  const H = 620;
  const mono = "'JetBrains Mono', monospace";
  const signal = "hsl(212 95% 62%)";
  const signalSoft = "hsl(212 95% 62% / 0.55)";
  const signalDim = "hsl(212 95% 62% / 0.2)";
  const fg = "hsl(220 5% 96%)";
  const fgSoft = "hsl(220 8% 65%)";
  const fgFaint = "hsl(220 8% 65% / 0.5)";
  const surface = "hsl(220 15% 12%)";
  const surfaceEl = "hsl(220 15% 16%)";

  const nodeClass = "cursor-pointer transition-opacity hover:opacity-80 focus:outline-none focus:opacity-80";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="Theia systems model: integration of challenge, product, process, and team">
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="hsl(212 95% 62%)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(212 95% 62%)" stopOpacity="0" />
        </radialGradient>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={signalSoft} />
        </marker>
      </defs>

      <rect width={W} height={H} fill="url(#centerGlow)" />

      {/* Connector lines */}
      <line x1={350} y1={140} x2={750} y2={140} stroke={signalSoft} strokeWidth={1.2} strokeDasharray="6 6" markerEnd="url(#arrow)" />
      <line x1={250} y1={210} x2={250} y2={420} stroke={signalSoft} strokeWidth={1.2} strokeDasharray="6 6" markerEnd="url(#arrow)" />
      <line x1={750} y1={480} x2={750} y2={210} stroke={signalSoft} strokeWidth={1.2} strokeDasharray="6 6" markerEnd="url(#arrow)" />
      <line x1={850} y1={210} x2={850} y2={480} stroke={signalDim} strokeWidth={1} strokeDasharray="3 5" />
      <line x1={550} y1={520} x2={250} y2={210} stroke={signalDim} strokeWidth={1} />
      <line x1={550} y1={520} x2={800} y2={210} stroke={signalDim} strokeWidth={1} />
      <line x1={550} y1={520} x2={250} y2={490} stroke={signalDim} strokeWidth={1} />
      <line x1={550} y1={520} x2={800} y2={490} stroke={signalDim} strokeWidth={1} />

      {/* Relationship labels */}
      <text x={550} y={132} fontSize={9} fontFamily={mono} fill={fgFaint} textAnchor="middle" letterSpacing="0.15em">INFORMS</text>
      <text x={262} y={320} fontSize={9} fontFamily={mono} fill={fgFaint} textAnchor="start" letterSpacing="0.15em">SHAPES</text>
      <text x={762} y={350} fontSize={9} fontFamily={mono} fill={fgFaint} textAnchor="start" letterSpacing="0.15em">VALIDATES</text>

      {/* === NODE 1: CHALLENGE (top-left) === */}
      <g
        className={nodeClass}
        onClick={() => navigate("/challenge")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("/challenge"); }}
        aria-label="Go to Problem page"
      >
        <rect x={70} y={70} width={360} height={150} rx={4} fill={surface} stroke={signal} strokeWidth={1.2} />
        <text x={90} y={100} fontSize={11} fontFamily={mono} fill={signal} letterSpacing="0.2em">01 / CHALLENGE</text>
        <text x={90} y={138} fontSize={26} fontFamily="Space Grotesk, sans-serif" fill={fg} fontWeight={500} letterSpacing="-0.02em">The cane&apos;s blind spot</text>
        <text x={90} y={170} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>Hazards above the waist, social</text>
        <text x={90} y={188} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>stigma, cognitive load.</text>
        <text x={90} y={208} fontSize={10} fontFamily={mono} fill={signalSoft} letterSpacing="0.1em">&rarr; /challenge</text>
      </g>

      {/* === NODE 2: PRODUCT (top-right) === */}
      <g
        className={nodeClass}
        onClick={() => navigate("/product")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("/product"); }}
        aria-label="Go to Product page"
      >
        <rect x={680} y={70} width={360} height={150} rx={4} fill={surface} stroke={signal} strokeWidth={1.2} />
        <text x={700} y={100} fontSize={11} fontFamily={mono} fill={signal} letterSpacing="0.2em">02 / PRODUCT INNOVATION</text>
        <text x={700} y={138} fontSize={26} fontFamily="Space Grotesk, sans-serif" fill={fg} fontWeight={500} letterSpacing="-0.02em">The belt as artifact</text>
        <text x={700} y={170} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>Sensors + haptics + microcontroller.</text>
        <text x={700} y={188} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>Fashion-grade form factor.</text>
        <text x={700} y={208} fontSize={10} fontFamily={mono} fill={signalSoft} letterSpacing="0.1em">&rarr; /product</text>
      </g>

      {/* === NODE 3: PROCESS (bottom-left) === */}
      <g
        className={nodeClass}
        onClick={() => navigate("/process")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("/process"); }}
        aria-label="Go to Process page"
      >
        <rect x={70} y={420} width={360} height={150} rx={4} fill={surface} stroke={signal} strokeWidth={1.2} />
        <text x={90} y={450} fontSize={11} fontFamily={mono} fill={signal} letterSpacing="0.2em">03 / PROCESS INNOVATION</text>
        <text x={90} y={488} fontSize={26} fontFamily="Space Grotesk, sans-serif" fill={fg} fontWeight={500} letterSpacing="-0.02em">How we build &amp; validate</text>
        <text x={90} y={520} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>Stakeholder mapping, user research,</text>
        <text x={90} y={538} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>iterative prototyping, trade-offs.</text>
        <text x={90} y={558} fontSize={10} fontFamily={mono} fill={signalSoft} letterSpacing="0.1em">&rarr; /process</text>
      </g>

      {/* === NODE 4: BUSINESS (bottom-right) === */}
      <g
        className={nodeClass}
        onClick={() => navigate("/business")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("/business"); }}
        aria-label="Go to Business page"
      >
        <rect x={680} y={420} width={360} height={150} rx={4} fill={surface} stroke={signal} strokeWidth={1.2} />
        <text x={700} y={450} fontSize={11} fontFamily={mono} fill={signal} letterSpacing="0.2em">04 / COMMERCIAL & SOCIETAL</text>
        <text x={700} y={488} fontSize={26} fontFamily="Space Grotesk, sans-serif" fill={fg} fontWeight={500} letterSpacing="-0.02em">How it reaches users</text>
        <text x={700} y={520} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>Market, roadmap, cost,</text>
        <text x={700} y={538} fontSize={13} fontFamily="Inter, sans-serif" fill={fgSoft}>societal sustainability.</text>
        <text x={700} y={558} fontSize={10} fontFamily={mono} fill={signalSoft} letterSpacing="0.1em">&rarr; /business</text>
      </g>

      {/* === CENTER NODE: TEAM === */}
      <g
        className={nodeClass}
        onClick={() => navigate("/team")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("/team"); }}
        aria-label="Go to Team page"
      >
        <circle cx={550} cy={320} r={88} fill={surfaceEl} stroke={signal} strokeWidth={1.5} />
        <circle cx={550} cy={320} r={88} fill="url(#centerGlow)" />
        <text x={550} y={296} fontSize={10} fontFamily={mono} fill={signal} textAnchor="middle" letterSpacing="0.2em">TEAM</text>
        <text x={550} y={322} fontSize={22} fontFamily="Space Grotesk, sans-serif" fill={fg} fontWeight={500} textAnchor="middle" letterSpacing="-0.02em">6 disciplines</text>
        <text x={550} y={342} fontSize={11} fontFamily="Inter, sans-serif" fill={fgSoft} textAnchor="middle">aligned to the system</text>
        <text x={550} y={362} fontSize={10} fontFamily={mono} fill={signalSoft} textAnchor="middle" letterSpacing="0.1em">&rarr; /team</text>
      </g>
    </svg>
  );
};

const System = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* 01 / Systems Model */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Systems model of innovation</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  Theia as a system,
                  <br />
                  <span className="text-signal">not just a device.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                The innovation isn&rsquo;t one belt. It&rsquo;s how the challenge, the product, the process, and the team connect into a single working system.
              </p>
            </div>

            <div className="bg-ivory border border-hairline p-6 lg:p-10">
              <SystemDiagram />
            </div>

            <p className="font-mono-tag text-graphite-soft/60 mt-4">FIG. / SYSTEMS MODEL &middot; INTEGRATION OF CHALLENGE &middot; PRODUCT &middot; PROCESS &middot; TEAM</p>
          </div>
        </section>

        {/* 02 / Components & Relationships */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Components & relationships</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  Four nodes,
                  <br />
                  <span className="text-signal">one loop.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                Each component feeds the next. None of them stand alone. The arrows in the diagram show direction, but the system runs as a continuous feedback loop.
              </p>
            </div>

            <div className="space-y-px bg-hairline border border-hairline">
              {[
                {
                  from: "Challenge",
                  to: "Product",
                  relation: "INFORMS",
                  body: "The cane's blind spot above the waist (Katzschmann et al.) directly shapes which sensors we pick, where we mount them, and how the haptic alerts behave. The product spec falls out of the challenge — not the other way around.",
                  link: "/product",
                  linkLabel: "See the product",
                },
                {
                  from: "Challenge",
                  to: "Process",
                  relation: "SHAPES",
                  body: "Because the challenge centers on dignity and cognitive load, the process leads with user research, dignity as a primary validation target, and cane-compatible testing — not just sensor benchmarks.",
                  link: "/process",
                  linkLabel: "See the process",
                },
                {
                  from: "Product",
                  to: "Process",
                  relation: "VALIDATES ↔ ITERATES",
                  body: "Prototype evidence (V01 → V03) feeds back into stakeholder reviews. Process findings (testing, dignity feedback) feed back into product redesign. The QBTRD framework formalizes that loop.",
                  link: "/process",
                  linkLabel: "Prototype + QBTRD",
                },
                {
                  from: "Team",
                  to: "All four",
                  relation: "ENABLES",
                  body: "Each team member maps to a specific innovation domain — hardware to product, UX to process, business strategy to commercial viability. The team structure mirrors the systems model.",
                  link: "/team",
                  linkLabel: "See team alignment",
                },
              ].map((row) => (
                <div key={`${row.from}-${row.to}`} className="bg-ivory p-6 lg:p-8">
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tag text-graphite-soft/60">{row.from.toUpperCase()}</span>
                        <span className="text-signal text-xs">&rarr;</span>
                        <span className="font-mono-tag text-graphite-soft/60">{row.to.toUpperCase()}</span>
                      </div>
                      <span className="font-mono-tag text-signal">{row.relation}</span>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-base text-graphite leading-relaxed">{row.body}</p>
                    </div>
                    <div className="md:col-span-2 md:text-right">
                      <Link to={row.link} className="text-sm text-signal hover:underline underline-offset-2 transition-colors">
                        {row.linkLabel} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 / Team alignment */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Challenge → team alignment</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.1] text-graphite">
                  <span className="block whitespace-nowrap">Every challenge domain</span>
                  <span className="block whitespace-nowrap">has <span className="text-signal">a name on it.</span></span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                The team isn&rsquo;t generalist coverage. Each member owns a piece of the innovation challenge that matches their discipline.
              </p>
            </div>

            <div className="border border-hairline">
              {teamAlignment.map((row, i) => (
                <div
                  key={row.member}
                  className={`grid md:grid-cols-12 gap-6 px-6 py-5 ${i < teamAlignment.length - 1 ? "border-b border-hairline" : ""}`}
                >
                  <div className="md:col-span-1">
                    <span className="font-mono-tag text-signal">0{i + 1}</span>
                  </div>
                  <div className="md:col-span-5">
                    <p className="font-display text-lg text-graphite tracking-[-0.02em] leading-snug">{row.domain}</p>
                  </div>
                  <div className="md:col-span-4">
                    <div className="text-base text-graphite font-medium">{row.member}</div>
                    <div className="text-sm text-graphite-soft">{row.role}</div>
                  </div>
                  <div className="md:col-span-2 md:text-right font-mono-tag text-graphite-soft/60">
                    {row.links}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-graphite-soft leading-relaxed max-w-3xl">
              The mapping isn&rsquo;t coincidence. The team was built around the shape of the challenge &mdash; not the other way around.
            </p>
          </div>
        </section>

        {/* 04 / Hyperlinked overview */}
        <section className="py-28 lg:py-40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Walk the system</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  Each page is a node
                  <br />
                  in this <span className="text-signal">model.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                You can walk the case in order, or jump to a node directly. The systems model is the map; the pages are the territory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
              {[
                { n: "01", title: "Problem", body: "The challenge and the solution, with citations woven in.", to: "/challenge" },
                { n: "02", title: "Process", body: "Stakeholders, research, prototyping, trade-offs.", to: "/process" },
                { n: "03", title: "Product", body: "Walkthrough, prototype evidence, design, hardware, haptic feedback, future evolution.", to: "/product" },
                { n: "04", title: "Business", body: "Value, market, 25-year roadmap, cost, societal sustainability.", to: "/business" },
                { n: "05", title: "Team", body: "Six members mapped to challenge domains.", to: "/team" },
                { n: "06", title: "References", body: "Every quote on the site traces back to a peer-reviewed source.", to: "/references" },
              ].map((node) => (
                <Link
                  key={node.n}
                  to={node.to}
                  className="bg-ivory p-7 lg:p-8 group hover:bg-ivory-deep transition-colors"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono-tag text-signal">{node.n}</span>
                    <span className="font-mono-tag text-graphite-soft/40 group-hover:text-signal transition-colors">&rarr;</span>
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-graphite tracking-[-0.025em] mb-3">
                    {node.title}
                  </div>
                  <p className="text-sm text-graphite-soft leading-relaxed text-pretty">
                    {node.body}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default System;
