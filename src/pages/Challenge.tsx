import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

const Citation = ({ quote, source }: { quote: string; source: string }) => (
  <blockquote className="border-l-2 border-signal pl-5 py-1">
    <p className="text-graphite-soft leading-relaxed text-pretty italic">&ldquo;{quote}&rdquo;</p>
    <cite className="font-mono-tag text-signal not-italic mt-3 block">{source}</cite>
  </blockquote>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-10">
    <span className="h-px w-8 bg-signal" />
    <span className="font-mono-tag text-signal">{children}</span>
  </div>
);

const problemChain = [
  "Vision impairment",
  "Reduced spatial awareness",
  "Mobility uncertainty",
  "Stress + safety risk",
  "Reduced independence",
];

const solutionTiles = [
  { n: "01", tag: "SENSE", title: "Sense", body: "Estimates nearby obstacles using waist-mounted proximity sensors." },
  { n: "02", tag: "TRANSLATE", title: "Translate", body: "Converts proximity into simple, calm haptic or audio feedback." },
  { n: "03", tag: "SUPPORT", title: "Support", body: "Helps users respond — without taking control away from them." },
];

const archNodes = ["Environment", "Sensors", "Logic", "Cue", "User response"];

const SpatialDiagram = () => (
  <div className="border border-hairline bg-ivory/40 p-6 relative overflow-hidden">
    <div className="flex items-center justify-between mb-5">
      <div className="micro-label">Sensing layers</div>
      <div className="font-mono-tag text-graphite-soft text-[10px] tracking-[0.18em] opacity-70">SIDE VIEW</div>
    </div>
    <svg viewBox="0 0 480 400" className="w-full h-auto" role="img" aria-label="Diagram comparing Theia's body-level sensing field with a white cane's ground-only reach">
      <defs>
        <radialGradient id="theia-field" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--signal))" stopOpacity="0.22" />
          <stop offset="55%" stopColor="hsl(var(--signal))" stopOpacity="0.06" />
          <stop offset="100%" stopColor="hsl(var(--signal))" stopOpacity="0" />
        </radialGradient>
        <pattern id="diagram-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="hsl(var(--signal))" strokeWidth="0.3" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="480" height="400" fill="url(#diagram-grid)" />

      {/* Ground reference */}
      <line x1="20" y1="340" x2="460" y2="340" stroke="hsl(var(--graphite-soft))" strokeWidth="0.5" opacity="0.5" />
      <text x="22" y="354" fontSize="8" fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono" letterSpacing="1.5" opacity="0.6">GROUND</text>

      {/* Theia body-level field — radial proximity rings */}
      <circle cx="180" cy="215" r="135" fill="url(#theia-field)" />
      <circle cx="180" cy="215" r="65" fill="none" stroke="hsl(var(--signal))" strokeWidth="0.6" opacity="0.55" />
      <circle cx="180" cy="215" r="100" fill="none" stroke="hsl(var(--signal))" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
      <circle cx="180" cy="215" r="130" fill="none" stroke="hsl(var(--signal))" strokeWidth="0.5" strokeDasharray="1 5" opacity="0.3" />

      {/* Range markers */}
      <text x="180" y="80" textAnchor="middle" fontSize="7" fill="hsl(var(--signal))" fontFamily="JetBrains Mono" opacity="0.65" letterSpacing="1.2">2.0 M</text>
      <text x="180" y="110" textAnchor="middle" fontSize="7" fill="hsl(var(--signal))" fontFamily="JetBrains Mono" opacity="0.65" letterSpacing="1.2">1.5 M</text>
      <text x="180" y="143" textAnchor="middle" fontSize="7" fill="hsl(var(--signal))" fontFamily="JetBrains Mono" opacity="0.65" letterSpacing="1.2">1.0 M</text>

      {/* Person — side silhouette */}
      <g>
        <circle cx="180" cy="158" r="11" fill="hsl(var(--foreground))" />
        <rect x="170" y="170" width="20" height="62" rx="3" fill="hsl(var(--foreground))" />
        <rect x="170" y="232" width="8" height="88" rx="2" fill="hsl(var(--foreground))" />
        <rect x="182" y="232" width="8" height="88" rx="2" fill="hsl(var(--foreground))" />
      </g>

      {/* Theia sensor (waist) with pulse */}
      <circle cx="180" cy="215" r="4" fill="hsl(var(--signal))" />
      <circle cx="180" cy="215" r="6" fill="none" stroke="hsl(var(--signal))" strokeWidth="0.8">
        <animate attributeName="r" values="6;16;6" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.85;0;0.85" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* White cane */}
      <line x1="192" y1="228" x2="275" y2="338" stroke="hsl(var(--foreground))" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="275" cy="338" r="2.5" fill="hsl(var(--foreground))" />
      {/* Cane sweep — limited ground arc */}
      <path d="M 240 338 Q 275 327 310 338" fill="none" stroke="hsl(var(--graphite-soft))" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.7" />

      {/* Overhead obstacle — tree branch (the canonical cane blind spot) */}
      <g>
        <path d="M 395 45 Q 350 75 320 115 Q 302 140 295 168" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <path d="M 345 80 L 328 98" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        <path d="M 322 108 L 302 122" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        <path d="M 308 138 L 288 150" stroke="hsl(var(--foreground))" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      </g>

      {/* Detection ping on branch */}
      <g>
        <circle cx="295" cy="168" r="3.5" fill="hsl(var(--signal))" />
        <circle cx="295" cy="168" r="6" fill="none" stroke="hsl(var(--signal))" strokeWidth="0.7">
          <animate attributeName="r" values="5;18;5" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0;0.9" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Detection vector from sensor to obstacle */}
      <line x1="184" y1="213" x2="292" y2="168" stroke="hsl(var(--signal))" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.65" />

      {/* Cane blind-zone callout (overhead range cane cannot reach) */}
      <g opacity="0.45">
        <rect x="235" y="178" width="80" height="14" fill="none" stroke="hsl(var(--graphite-soft))" strokeWidth="0.5" strokeDasharray="2 2" />
        <text x="275" y="188" textAnchor="middle" fontSize="7" fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono" letterSpacing="0.8">CANE BLIND ZONE</text>
      </g>

      {/* Label — Theia field */}
      <g>
        <line x1="48" y1="215" x2="115" y2="215" stroke="hsl(var(--signal))" strokeWidth="0.5" opacity="0.55" />
        <circle cx="48" cy="215" r="1.5" fill="hsl(var(--signal))" />
        <text x="44" y="212" textAnchor="end" fontSize="9" fill="hsl(var(--signal))" fontFamily="JetBrains Mono" letterSpacing="1.3">THEIA</text>
        <text x="44" y="224" textAnchor="end" fontSize="7" fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono" letterSpacing="0.6">body-level field</text>
      </g>

      {/* Label — detected obstacle */}
      <g>
        <line x1="295" y1="168" x2="395" y2="168" stroke="hsl(var(--signal))" strokeWidth="0.5" opacity="0.55" />
        <circle cx="395" cy="168" r="1.5" fill="hsl(var(--signal))" />
        <text x="400" y="165" fontSize="9" fill="hsl(var(--signal))" fontFamily="JetBrains Mono" letterSpacing="1.3">DETECTED</text>
        <text x="400" y="177" fontSize="7" fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono" letterSpacing="0.6">overhead obstacle</text>
      </g>

      {/* Label — cane */}
      <g>
        <line x1="285" y1="345" x2="395" y2="358" stroke="hsl(var(--graphite-soft))" strokeWidth="0.5" opacity="0.55" />
        <circle cx="395" cy="358" r="1.5" fill="hsl(var(--graphite-soft))" />
        <text x="400" y="356" fontSize="9" fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono" letterSpacing="1.3">CANE</text>
        <text x="400" y="368" fontSize="7" fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono" letterSpacing="0.6">ground contact only</text>
      </g>

      {/* Coverage comparison footer */}
      <g>
        <line x1="20" y1="380" x2="460" y2="380" stroke="hsl(var(--hairline))" strokeWidth="0.5" opacity="0.6" />
        <circle cx="30" cy="392" r="2.5" fill="hsl(var(--signal))" />
        <text x="40" y="395" fontSize="8" fill="hsl(var(--signal))" fontFamily="JetBrains Mono" letterSpacing="1">360° BODY-LEVEL</text>
        <circle cx="250" cy="392" r="2.5" fill="hsl(var(--graphite-soft))" />
        <text x="260" y="395" fontSize="8" fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono" letterSpacing="1">~1M GROUND ARC</text>
      </g>
    </svg>
  </div>
);

const ArchitectureDiagram = () => (
  <div className="overflow-x-auto">
    <svg viewBox="0 0 1100 180" className="w-full min-w-[800px] h-auto">
      {archNodes.map((n, i) => {
        const x = 80 + i * 240;
        return (
          <g key={n}>
            {i < archNodes.length - 1 && (
              <line
                x1={x + 70} y1="90" x2={x + 240 - 70} y2="90"
                stroke="hsl(var(--signal))" strokeWidth="1"
                className="animate-dash"
              />
            )}
            <circle
              cx={x} cy="90" r="36"
              fill="hsl(var(--ivory))" stroke="hsl(var(--signal))" strokeWidth="1"
            />
            <circle cx={x} cy="90" r="4" fill="hsl(var(--signal))" />
            <text
              x={x} y="160" textAnchor="middle" fontSize="12"
              fill="hsl(var(--foreground))" fontFamily="Space Grotesk, sans-serif"
            >
              {n}
            </text>
            <text
              x={x} y="36" textAnchor="middle" fontSize="9"
              fill="hsl(var(--graphite-soft))" fontFamily="JetBrains Mono"
            >
              0{i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  </div>
);

const Overview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* 01 / Health Innovation Challenge */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Health innovation challenge</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.1]">
                  <span className="block whitespace-nowrap">Mobility is not only direction.</span>
                  <span className="block whitespace-nowrap text-graphite-soft">It is spatial confidence.</span>
                </h2>
                <p className="mt-8 text-[18px] md:text-[20px] leading-relaxed text-graphite-soft max-w-2xl">
                  For blind and low-vision users, moving through space often means managing uncertainty: what is beside me, how close is the obstacle, and whether the environment has changed.
                </p>

                <div className="mt-10 max-w-2xl">
                  <Citation
                    quote="A key problem for white cane users is their inability to detect high obstacles hanging above the ground, e.g. tree branches."
                    source="Katzschmann et al., p. 10"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <SpatialDiagram />
              </div>
            </div>

            {/* Problem chain */}
            <div className="mt-20 border-t border-hairline pt-10">
              <div className="micro-label mb-6">Problem chain</div>
              <ol className="grid md:grid-cols-5 gap-px bg-hairline border border-hairline">
                {problemChain.map((step, i) => (
                  <li key={step} className="bg-background p-5 relative">
                    <div className="text-signal micro-label mb-3">0{i + 1}</div>
                    <div className="font-display text-lg leading-tight">{step}</div>
                    {i < problemChain.length - 1 && (
                      <span className="hidden md:block absolute top-1/2 -right-2 text-signal text-xs">&rarr;</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 02 / Problem Statement */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Problem statement</SectionLabel>

            <div className="max-w-3xl">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-graphite leading-[1.3] tracking-[-0.018em] font-light mb-12 pb-12 border-b border-hairline">
                &ldquo;The barrier isn&rsquo;t physical navigation. It&rsquo;s the{" "}
                <span className="text-signal italic">invisible layer of context</span>{" "}
                that surrounds every journey.&rdquo;
              </p>

              <div className="space-y-7 text-base md:text-lg text-graphite leading-relaxed text-pretty">
                <p>
                  Touch covers the ground. The context sighted people take for granted &mdash; uncertainty, dignity, cognitive load &mdash; is missing. The cap on independence isn&rsquo;t physical.
                </p>

                <p>
                  And whatever closes that gap has to feel okay to wear. Katzschmann&rsquo;s user study confirmed exactly that bar:
                </p>

                <Citation
                  quote="Subjects felt overall comfortable wearing the hands-free and discreet system (70%)."
                  source="Katzschmann et al., p. 10"
                />

                <p>
                  Discreet matters. The product can&rsquo;t read as medical. If it does, users won&rsquo;t wear it &mdash; and detection performance is irrelevant if the device sits in a drawer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Key Insight */}
        <section className="relative border-t border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--signal) / 0.14), transparent)",
            }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-32 md:py-44">
            <SectionLabel>Key insight</SectionLabel>

            <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] max-w-[20ch]">
              The opportunity is not to{" "}
              <span className="text-graphite-soft">replace mobility tools.</span>{" "}
              It is to add a{" "}
              <span className="text-signal">second layer</span> of spatial awareness.
            </h2>

            <p className="mt-12 max-w-2xl text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
              Theia keeps the human, the cane, and the mobility routine at the center. The product adds a wearable feedback layer that helps users understand nearby space with less guessing.
            </p>

            <div className="mt-12 max-w-2xl">
              <Citation
                quote="The waist is located close to the body's center of mass and it functions like a hinge for the legs and the upper body, so it moves relatively little while a person is walking, unlike the legs or upper body."
                source="Katzschmann et al., p. 4"
              />
            </div>
          </div>
        </section>

        {/* 04 / Product Innovation */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <SectionLabel>Product innovation</SectionLabel>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02]">
                  Theia turns nearby space
                  <br />
                  into <span className="text-signal">simple feedback.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                Theia is a smart belt that detects nearby obstacles and communicates proximity through haptic or audio cues. It supports the tools people already use, especially the white cane, by adding awareness around the body rather than only at ground contact.
              </p>
            </div>

            {/* 3 tiles */}
            <div className="mt-20 grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
              {solutionTiles.map((s) => (
                <div key={s.n} className="bg-background p-7 lg:p-10">
                  <div className="micro-label text-signal mb-8">{s.n} / {s.tag}</div>
                  <h3 className="font-display text-3xl md:text-4xl mb-5 tracking-[-0.025em]">
                    {s.title}
                  </h3>
                  <p className="text-graphite-soft leading-relaxed text-pretty">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Architecture diagram */}
            <div className="mt-20 border border-hairline bg-ivory/30 p-8 md:p-12">
              <div className="micro-label mb-8">Product architecture</div>
              <ArchitectureDiagram />
            </div>

            {/* Solution citations */}
            <div className="mt-16 grid lg:grid-cols-2 gap-8 pt-8 border-t border-hairline">
              <div>
                <div className="micro-label mb-4">Detection accuracy benchmark</div>
                <Citation
                  quote="The ground plane checking system succeeded in achieving an overall recognition rate of 93.10%, with an overall false positive rate of 2.72% and average false negative rate of 4.25%."
                  source="Chai and Lau, p. 1 (Abstract)"
                />
              </div>
              <div>
                <div className="micro-label mb-4">Cane compatibility confirmed</div>
                <Citation
                  quote="If a user desires direct haptic feedback from the ground in front, ALVU's design allows a white cane to be used simultaneously."
                  source="Katzschmann et al., p. 10"
                />
              </div>
            </div>

            <div className="mt-12">
              <Link
                to="/product"
                className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 text-[12px] font-mono uppercase tracking-[0.2em] hover:bg-signal hover:text-background transition-colors"
              >
                See the device <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Overview;
