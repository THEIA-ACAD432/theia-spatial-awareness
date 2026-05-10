import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";
import deviceImg from "@/assets/theia-device.jpg";
import deviceHeroImg from "@/assets/theia-device-hero.jpg";
import hapticImg from "@/assets/theia-haptic.jpg";
import diagramImg from "@/assets/theia-diagram.jpg";
import contextImg from "@/assets/halobelt.png";

const Citation = ({ quote, source }: { quote: string; source: string }) => (
  <blockquote className="border-l-2 border-signal pl-4 py-0.5">
    <p className="text-sm text-graphite-soft leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
    <cite className="font-mono-tag text-signal not-italic mt-2 block">{source}</cite>
  </blockquote>
);

const powerChain = [
  { label: "LiPo Battery", sub: "3.7V cell" },
  { label: "TP4056", sub: "USB-C charging" },
  { label: "MT3608", sub: "Boost converter" },
  { label: "5V Rail", sub: "System power" },
];

const detectionMatrix = [
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

const HapticBar = ({ duration, delay, height }: { duration: number; delay: number; height: number }) => (
  <div
    className="w-2.5 rounded-sm bg-signal origin-bottom"
    style={{
      height: `${height}px`,
      animation: `haptic-bar ${duration}ms ease-in-out ${delay}ms infinite`,
    }}
  />
);

const SensorField = () => {
  const W = 700, H = 312;
  const cy = 252; // belt y
  const s  = 20;  // px per meter

  const fan = (ox: number, oy: number, deg: number, half: number, r: number, n = 60) => {
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const a = ((deg - half) + 2 * half * i / n - 90) * Math.PI / 180;
      return `${(ox + r * Math.cos(a)).toFixed(1)},${(oy + r * Math.sin(a)).toFixed(1)}`;
    });
    return `M ${ox},${oy} L ${pts.join(" L ")} Z`;
  };

  const arc = (ox: number, oy: number, deg: number, half: number, r: number, n = 60) => {
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const a = ((deg - half) + 2 * half * i / n - 90) * Math.PI / 180;
      return `${(ox + r * Math.cos(a)).toFixed(1)},${(oy + r * Math.sin(a)).toFixed(1)}`;
    });
    return `M ${pts.join(" L ")}`;
  };

  const mono = "'JetBrains Mono', monospace";
  const fgFaint  = "hsl(220 12% 28% / 0.38)";
  const fgMid    = "hsl(220 12% 28% / 0.62)";
  const amber    = "hsl(35 95% 52%)";
  const amberMid = "hsl(35 95% 52% / 0.65)";
  const graphite = "hsl(220 15% 14%)";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="Sensor field coverage, top-down belt view">

      {/* DETECTION FILLS */}
      {/* Side lunas: 90° left / right along belt */}
      <path d={fan(72,  cy, -90, 8, 8 * s)} fill="hsl(220 15% 14% / 0.04)" />
      <path d={fan(628, cy,  90, 8, 8 * s)} fill="hsl(220 15% 14% / 0.04)" />
      {/* Angled ToF linears: ±45° forward */}
      <path d={fan(196, cy, -45, 14, 2 * s)} fill="hsl(220 15% 14% / 0.08)" />
      <path d={fan(504, cy,  45, 14, 2 * s)} fill="hsl(220 15% 14% / 0.08)" />
      {/* Center 8×8: 45° FOV, 4 m */}
      <path d={fan(350, cy, 0, 22.5, 4 * s)} fill="hsl(35 95% 52% / 0.10)" />
      {/* Center Luna-tf: narrow forward, 8 m */}
      <path d={fan(350, cy, 0,    8, 8 * s)} fill="hsl(35 95% 52% / 0.06)" />

      {/* ARC OUTLINES */}
      <path d={arc(72,  cy, -90,  8, 8 * s)} fill="none" stroke="hsl(220 15% 14% / 0.28)" strokeWidth={1.5} />
      <path d={arc(628, cy,  90,  8, 8 * s)} fill="none" stroke="hsl(220 15% 14% / 0.28)" strokeWidth={1.5} />
      <path d={arc(196, cy, -45, 14, 2 * s)} fill="none" stroke="hsl(220 15% 14% / 0.48)" strokeWidth={1.5} />
      <path d={arc(504, cy,  45, 14, 2 * s)} fill="none" stroke="hsl(220 15% 14% / 0.48)" strokeWidth={1.5} />
      <path d={arc(350, cy,   0, 22.5, 4 * s)} fill="none" stroke={amber} strokeWidth={2} />
      <path d={arc(350, cy,   0,  8,   8 * s)} fill="none" stroke={amberMid} strokeWidth={1.5} strokeDasharray="5 3" />

      {/* RANGE LABELS near each arc tip */}
      {/* Luna-tf forward: tip at y = 252-160 = 92 */}
      <text x={358} y={98}  fontSize={7.5} fontFamily={mono} fill={amberMid} letterSpacing="0.07em">8M</text>
      {/* 8×8 forward: tip at y = 252-80 = 172 */}
      <text x={358} y={178} fontSize={7.5} fontFamily={mono} fill={amber}    letterSpacing="0.07em">4M</text>
      {/* Left linear: arc tip ≈ (168, 224) */}
      <text x={155} y={221} fontSize={7}   fontFamily={mono} fill={fgMid}    letterSpacing="0.06em">2M</text>
      {/* Right linear: arc tip ≈ (532, 224) */}
      <text x={537} y={221} fontSize={7}   fontFamily={mono} fill={fgMid}    letterSpacing="0.06em">2M</text>

      {/* BELT LINE */}
      <line x1={22} y1={cy} x2={W - 22} y2={cy} stroke="hsl(220 15% 14% / 0.4)" strokeWidth={2.5} />

      {/* SENSOR DOTS */}
      <circle cx={72}  cy={cy} r={5}   fill={graphite} />
      <circle cx={196} cy={cy} r={4.5} fill="hsl(220 15% 14% / 0.65)" />
      <circle cx={350} cy={cy} r={6}   fill={amber} />
      <circle cx={504} cy={cy} r={4.5} fill="hsl(220 15% 14% / 0.65)" />
      <circle cx={628} cy={cy} r={5}   fill={graphite} />

      {/* FORWARD LABEL */}
      <text x={350} y={13} fontSize={7} fontFamily={mono} fill={fgFaint} textAnchor="middle" letterSpacing="0.1em">↑ FORWARD</text>

      {/* SENSOR LABELS BELOW BELT */}
      {/* Luna Left */}
      <text x={72}  y={cy + 15} fontSize={7}   fontFamily={mono} fill={fgMid}   textAnchor="middle" letterSpacing="0.06em">LUNA-TF</text>
      <text x={72}  y={cy + 25} fontSize={6.5} fontFamily={mono} fill={fgFaint} textAnchor="middle" letterSpacing="0.06em">8M · ← SIDE</text>
      {/* Linear Left */}
      <text x={196} y={cy + 15} fontSize={7}   fontFamily={mono} fill={fgMid}   textAnchor="middle" letterSpacing="0.06em">TOF LINEAR</text>
      <text x={196} y={cy + 25} fontSize={6.5} fontFamily={mono} fill={fgFaint} textAnchor="middle" letterSpacing="0.06em">2M · -45°</text>
      {/* Center */}
      <text x={350} y={cy + 15} fontSize={7}   fontFamily={mono} fill={amber}   textAnchor="middle" letterSpacing="0.06em">8×8 · 4M + LUNA-TF · 8M</text>
      <text x={350} y={cy + 25} fontSize={6.5} fontFamily={mono} fill={amberMid} textAnchor="middle" letterSpacing="0.06em">FORWARD</text>
      {/* Linear Right */}
      <text x={504} y={cy + 15} fontSize={7}   fontFamily={mono} fill={fgMid}   textAnchor="middle" letterSpacing="0.06em">TOF LINEAR</text>
      <text x={504} y={cy + 25} fontSize={6.5} fontFamily={mono} fill={fgFaint} textAnchor="middle" letterSpacing="0.06em">2M · +45°</text>
      {/* Luna Right */}
      <text x={628} y={cy + 15} fontSize={7}   fontFamily={mono} fill={fgMid}   textAnchor="middle" letterSpacing="0.06em">LUNA-TF</text>
      <text x={628} y={cy + 25} fontSize={6.5} fontFamily={mono} fill={fgFaint} textAnchor="middle" letterSpacing="0.06em">8M · SIDE →</text>

    </svg>
  );
};

const Product = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-28 lg:py-40 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Product / 03</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-graphite leading-[1.02] tracking-[-0.025em]">
                  A belt that
                  <br />
                  <span className="text-signal italic font-light">walks with you.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  A wearable that looks like fashion and works like infrastructure. Built to give blind users confidence in public &mdash; not single them out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Design */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Design</div>

            {/* Primary image grid */}
            <div className="grid grid-cols-12 gap-3 md:gap-4 mb-6">
              <figure className="col-span-12 md:col-span-8 relative aspect-[4/3] overflow-hidden bg-ivory-deep group">
                <img
                  src={contextImg}
                  alt="Halo worn in context. Belt device on person walking with white cane."
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                />
                <figcaption className="absolute top-4 left-4 right-4 flex items-start justify-between font-mono-tag text-ivory mix-blend-difference">
                  <span>FIG. 01 / IN SITU</span>
                  <span className="opacity-70">WORN AT WAIST</span>
                </figcaption>
              </figure>

              <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-3 md:gap-4">
                <figure className="relative aspect-square md:aspect-auto overflow-hidden bg-ivory-deep group">
                  <img
                    src={deviceHeroImg}
                    alt="Halo belt sensor array, front view"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute top-3 left-3 right-3 flex justify-between font-mono-tag text-ivory mix-blend-difference">
                    <span>FIG. 02 / DEVICE</span>
                    <span className="opacity-70">42 × 58MM</span>
                  </figcaption>
                </figure>
                <figure className="relative aspect-square md:aspect-auto overflow-hidden bg-ivory-deep group">
                  <img
                    src={deviceImg}
                    alt="Halo device detail"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute top-3 left-3 right-3 flex justify-between font-mono-tag text-ivory mix-blend-difference">
                    <span>FIG. 03 / DETAIL</span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Placeholder row for 3D model + physical photos */}
            <div className="grid grid-cols-12 gap-3 md:gap-4 mb-16">
              <div className="col-span-12 md:col-span-5 aspect-[4/3] border border-dashed border-hairline bg-ivory-deep/40 flex flex-col items-center justify-center gap-3 p-8">
                <span className="font-mono-tag text-graphite-soft/40">FIG. 04 / 3D MODEL</span>
                <span className="font-mono-tag text-graphite-soft/30">RENDER PENDING</span>
              </div>
              <div className="col-span-12 md:col-span-7 aspect-[4/3] border border-dashed border-hairline bg-ivory-deep/40 flex flex-col items-center justify-center gap-3 p-8">
                <span className="font-mono-tag text-graphite-soft/40">FIG. 05 / PHYSICAL PRODUCT</span>
                <span className="font-mono-tag text-graphite-soft/30">PHOTOGRAPHY PENDING</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6">
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                  The brief: a belt people would actually want to wear. Sensors and haptic motors built into the band &mdash; no add-ons, no clip points, nothing that reads as medical. Confidence, worn at the waist.
                </p>
                <Link
                  to="/challenge"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-signal hover:underline underline-offset-2 transition-colors"
                >
                  Why this device exists <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Hardware Architecture */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / Hardware Architecture</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
              {/* MCU overview */}
              <div className="lg:col-span-5">
                <h3 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em] mb-6">
                  ESP32-S3
                  <br />
                  <span className="text-graphite-soft italic font-light">at the core.</span>
                </h3>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-3">
                  ESP32-S3 with dual I²C buses and 5× PWM outputs. Sensors run independently. No contention under load.
                </p>
                <p className="text-sm text-graphite-soft leading-relaxed text-pretty mb-8">
                  <span className="font-mono-tag text-signal mr-2">WHY</span>Headroom for v2, plus built-in BLE so the companion app costs us nothing extra.
                </p>

                {/* Software mapping */}
                <div className="bg-ivory border border-hairline p-6">
                  <div className="font-mono-tag text-signal mb-4">SOFTWARE LOGIC</div>
                  <p className="text-sm text-graphite-soft leading-relaxed mb-5">
                    Sensor distance translates directly into pulse speed. Each motor maps 1:1 to its paired sensor. No shared state, no latency stacking.
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "Near object", value: "Fast pulse", fill: "w-full" },
                      { label: "Mid-range", value: "Moderate pulse", fill: "w-3/5" },
                      { label: "Out of range", value: "Slow / silent", fill: "w-1/5" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-4">
                        <span className="font-mono-tag text-graphite-soft/60 w-24 shrink-0">{row.label}</span>
                        <div className="flex-1 h-1.5 bg-hairline rounded-full overflow-hidden">
                          <div className={`${row.fill} h-full bg-signal rounded-full`} />
                        </div>
                        <span className="font-mono-tag text-graphite-soft/60 text-right w-32 shrink-0 hidden sm:block">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sensor suite */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="font-mono-tag text-graphite-soft/60 mb-4">SENSOR + ACTUATOR SUITE</div>
                <div className="border border-hairline bg-ivory divide-y divide-hairline">

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">5×</span>
                      <div className="flex-1">
                        <div className="font-display text-xl text-graphite tracking-[-0.02em] mb-1">NFP-FLAT-C1030 Coin Motors</div>
                        <p className="text-sm text-graphite-soft leading-relaxed mb-3">Independently PWM-controlled. Each motor maps 1:1 to a sensor zone. Driven by P2N2222A + 1k&Omega; resistor + 1N4001 flyback diode so they fire simultaneously without rail sag.</p>
                        <p className="text-xs text-graphite leading-relaxed">
                          <span className="font-mono-tag text-signal mr-2">WHY</span>Same form factor MIT&rsquo;s ALVU used on the abdomen &mdash; 80%+ satisfaction in minutes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">3×</span>
                      <div className="flex-1">
                        <div className="font-display text-xl text-graphite tracking-[-0.02em] mb-1">Benewake TF-Luna LiDAR</div>
                        <p className="text-sm text-graphite-soft leading-relaxed mb-3">Two on the far ends of the belt pointing sideways (8m lateral). One at center pointing forward alongside the 8&times;8 for long-range detection.</p>
                        <p className="text-xs text-graphite leading-relaxed">
                          <span className="font-mono-tag text-signal mr-2">WHY</span>Our reflex layer. 250 Hz catches the fast close-range threats the wide-FOV sensor is too slow to see.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">2×</span>
                      <div className="flex-1">
                        <div className="font-display text-xl text-graphite tracking-[-0.02em] mb-1">VL53L1X TOF Linear</div>
                        <p className="text-sm text-graphite-soft leading-relaxed mb-3">Positioned at &plusmn;45&deg; from center. Short-range (2m) angled coverage bridging between the forward sensors and the side-facing Lunas.</p>
                        <p className="text-xs text-graphite leading-relaxed">
                          <span className="font-mono-tag text-signal mr-2">WHY</span>Bridges forward and side coverage. ToF beats ultrasonic on speed and precision indoors (Bala et al., 2023).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">1×</span>
                      <div className="flex-1">
                        <div className="font-display text-xl text-graphite tracking-[-0.02em] mb-1">VL53L8CX 8&times;8 Multi-Zone ToF</div>
                        <p className="text-sm text-graphite-soft leading-relaxed mb-3">Front-center sensor with an 8&times;8 zone matrix at 60 Hz. Covers forward, above, and below at hip level. The primary overhead hazard detector.</p>
                        <p className="text-xs text-graphite leading-relaxed mb-3">
                          <span className="font-mono-tag text-signal mr-2">WHY</span>The brain of the sensing layer. 64 zones at 60 Hz delivers the multi-height, real-time detection no existing device offers.
                        </p>
                        <Citation
                          quote="A single sensor configuration from one vantage point is insufficient to gather the necessary environmental information."
                          source="Naidoo & Ghaziasgar, 2025, p. 17"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sensor field diagram */}
            <div className="mb-12">
              <div className="font-mono-tag text-graphite-soft/60 mb-4">FIG. / SENSOR COVERAGE / TOP-DOWN VIEW AT HIP LEVEL</div>
              <div className="bg-ivory border border-hairline p-6 lg:p-8">
                <SensorField />
              </div>
            </div>

            {/* Power chain */}
            <div>
              <div className="font-mono-tag text-graphite-soft/60 mb-6">POWER CHAIN</div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 mb-6">
                {powerChain.map((node, i) => (
                  <div key={node.label} className="flex flex-col sm:flex-row items-stretch sm:items-center flex-1">
                    <div className="flex-1 bg-ivory border border-hairline p-5 lg:p-6">
                      <div className="font-display text-base text-graphite tracking-[-0.02em]">{node.label}</div>
                      <div className="font-mono-tag text-graphite-soft/60 mt-1">{node.sub}</div>
                    </div>
                    {i < powerChain.length - 1 && (
                      <div className="flex items-center justify-center w-8 h-8 sm:h-auto shrink-0 self-center">
                        <span className="font-mono-tag text-signal text-base rotate-90 sm:rotate-0">→</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-graphite leading-relaxed max-w-3xl">
                <span className="font-mono-tag text-signal mr-2">WHY</span>4&ndash;6 hr runtime, load-sharing so it charges while in use, MT3608 keeps the rail stable when motors fire together.
              </p>
            </div>

          </div>
        </section>

        {/* 03 / Haptic Feedback */}
        <section className="relative py-28 lg:py-40 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / Haptic Feedback</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.05] tracking-[-0.022em]">
                  Three modes.
                  <br />
                  <span className="text-signal italic font-light">One language.</span>
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10">

              {/* Mode 1: Forward / Static */}
              <div className="bg-graphite p-7 lg:p-10 group hover:bg-graphite-soft/20 transition-colors duration-500">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-tag text-signal">01</span>
                  <span className="font-mono-tag text-ivory/30">STATIC</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-ivory tracking-[-0.03em] mb-3">
                  Forward Object
                </h3>
                <p className="text-sm text-ivory/50 mb-2">e.g. wall, post, door</p>
                <p className="text-ivory/60 leading-relaxed text-sm mb-10">
                  Pulse speed tracks distance. Slow for far, faster as it closes. The forward-center sensor activates the center motor only.
                </p>
                {/* Visualization: slow pulse (far) → fast pulse (near) */}
                <div className="flex items-end gap-1.5 h-12">
                  {[28, 44, 28].map((h, i) => (
                    <HapticBar key={i} height={h} duration={1000} delay={0} />
                  ))}
                  <span className="font-mono-tag text-ivory/20 self-center px-1.5">→</span>
                  {[28, 44, 28].map((h, i) => (
                    <HapticBar key={`f${i}`} height={h} duration={380} delay={0} />
                  ))}
                </div>
                <div className="mt-4 font-mono-tag text-ivory/30">FAR / SLOW &nbsp;&rarr;&nbsp; NEAR / FAST</div>
              </div>

              {/* Mode 2: Approaching */}
              <div className="bg-graphite p-7 lg:p-10 group hover:bg-graphite-soft/20 transition-colors duration-500">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-tag text-signal">02</span>
                  <span className="font-mono-tag text-ivory/30">DYNAMIC</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-ivory tracking-[-0.03em] mb-3">
                  Approaching Object
                </h3>
                <p className="text-sm text-ivory/50 mb-2">speed-aware</p>
                <p className="text-ivory/60 leading-relaxed text-sm mb-10">
                  Pulse rate escalates as the object closes. If approach speed crosses the threshold, pulsing gives way to a sustained hold at maximum. A continuous signal that demands attention.
                </p>
                {/* Visualization: fast pulse → sustained hold */}
                <div className="flex items-end gap-1.5 h-12">
                  {[28, 44, 28].map((h, i) => (
                    <HapticBar key={i} height={h} duration={260} delay={0} />
                  ))}
                  <span className="font-mono-tag text-ivory/20 self-center px-1.5">&rarr;</span>
                  {[44, 44, 44].map((h, i) => (
                    <div key={`s${i}`} className="w-2.5 rounded-sm bg-signal" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <div className="mt-4 font-mono-tag text-ivory/30">FAST PULSE &nbsp;&rarr;&nbsp; HOLD / MAX</div>
              </div>

              {/* Mode 3: Overhead */}
              <div className="bg-graphite p-7 lg:p-10 group hover:bg-graphite-soft/20 transition-colors duration-500">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-tag text-signal">03</span>
                  <span className="font-mono-tag text-ivory/30">OVERHEAD</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-ivory tracking-[-0.03em] mb-3">
                  Overhead Hazard
                </h3>
                <p className="text-sm text-ivory/50 mb-2">e.g. branch, awning, beam</p>
                <p className="text-ivory/60 leading-relaxed text-sm mb-10">
                  The 8×8 multi-zone sensor detects objects above waist height. The center motors are physically elevated on the belt and activate together to signal vertical position, distinct from forward or side detections.
                </p>
                {/* Visualization: belt motor map */}
                <div className="space-y-3">
                  <div className="font-mono-tag text-ivory/30 mb-2">MOTOR MAP / BELT VIEW</div>
                  <div className="flex items-center gap-2">
                    {[false, false, true, true, false].map((active, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5">
                        <div
                          className={`w-5 h-5 rounded-full border transition-colors ${
                            active
                              ? "bg-signal border-signal"
                              : "bg-transparent border-ivory/20"
                          }`}
                          style={active ? { animationName: "signal-pulse", animationDuration: "700ms", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" } : undefined}
                        />
                        <span className="font-mono-tag text-ivory/20" style={{ fontSize: "0.55rem" }}>
                          {["L", "ML", "C", "MR", "R"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="font-mono-tag text-signal/60 text-[0.6rem] tracking-wider">● ACTIVE &nbsp; ○ STANDBY</div>
                </div>
              </div>

            </div>

            {/* Spatial mapping principle */}
            <div className="border border-t-0 border-ivory/10 bg-ivory/5 px-7 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <div className="font-mono-tag text-signal shrink-0">SPATIAL MAPPING</div>
              <div className="w-px h-4 bg-ivory/10 shrink-0 hidden sm:block" />
              <p className="text-ivory/45 text-sm leading-relaxed">
                Each sensor maps directly to the motor at its belt position. A right-side detection activates only the right motor. An overhead detection activates only the elevated center motors. Direction is felt, not interpreted.
              </p>
            </div>

            {/* Haptic image + principle */}
            <div className="grid lg:grid-cols-12 gap-6 mt-12">
              <figure className="lg:col-span-4 relative aspect-square overflow-hidden bg-ivory-deep/10">
                <img
                  src={hapticImg}
                  alt="Macro detail of vibration motor module"
                  className="w-full h-full object-cover"
                />
                <figcaption className="absolute top-3 left-3 right-3 flex justify-between font-mono-tag text-ivory mix-blend-difference">
                  <span>FIG. 06 / HAPTIC MODULE</span>
                  <span className="opacity-70">ERM CUTAWAY</span>
                </figcaption>
              </figure>
              <figure className="lg:col-span-4 relative aspect-square overflow-hidden bg-ivory-deep/10">
                <img
                  src={diagramImg}
                  alt="Sensor field cone diagram"
                  className="w-full h-full object-cover"
                />
                <figcaption className="absolute top-3 left-3 right-3 flex justify-between font-mono-tag text-graphite-soft">
                  <span>FIG. 07 / SENSOR FIELD</span>
                  <span className="opacity-70">180° ARC</span>
                </figcaption>
              </figure>
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="font-mono-tag text-signal mb-4">DESIGN PRINCIPLE</div>
                <p className="font-display text-2xl md:text-3xl text-ivory leading-tight tracking-[-0.025em]">
                  Augment, never replace.
                  <br />
                  <span className="text-ivory/40 italic font-light">Inform, never instruct.</span>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 05 / Detection Matrix */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-4">04 / Detection Matrix</div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-graphite leading-[1.05] tracking-[-0.022em]">
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
                  {detectionMatrix.map((row, i) => (
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

        {/* 06 / Product Considerations */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">05 / Considerations</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl text-graphite leading-[1.05] tracking-[-0.022em] mb-6">
                  Designed around
                  <br />
                  <span className="text-graphite-soft italic font-light">trust.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                  Two design risks that shaped the architecture from day one. Both are answered in the product itself, not in policy.
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <div className="border border-hairline bg-ivory divide-y divide-hairline">
                  <div className="p-6 lg:p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-display text-xl text-graphite tracking-[-0.02em]">Over-reliance on automation</div>
                      <span className="font-mono-tag text-signal">UX RISK</span>
                    </div>
                    <p className="text-sm text-graphite-soft leading-relaxed text-pretty">
                      <span className="text-graphite font-medium">Mitigation:</span> Cane-first design. Halo augments, never leads. Alerts inform; the user always acts. The device is silent by default and never instructs a turn or step.
                    </p>
                  </div>
                  <div className="p-6 lg:p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-display text-xl text-graphite tracking-[-0.02em]">Privacy concerns</div>
                      <span className="font-mono-tag text-signal">DATA RISK</span>
                    </div>
                    <p className="text-sm text-graphite-soft leading-relaxed text-pretty">
                      <span className="text-graphite font-medium">Mitigation:</span> Sensor-only detection. No cameras, no microphones. ToF and LiDAR return distance values only &mdash; never images of bystanders or environments. Nothing stored or transmitted off-device by default.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-graphite-soft/60 mt-4 leading-relaxed">
                  Commercial risks (adoption, reimbursement, pricing) live on the <Link to="/business" className="text-signal underline decoration-signal/40 underline-offset-2">Business page</Link>. Clinical &amp; regulatory considerations are in <Link to="/process" className="text-signal underline decoration-signal/40 underline-offset-2">Process</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Product;
