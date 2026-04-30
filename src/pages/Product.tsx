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
  const W = 520, H = 285;
  const cx = W / 2;
  const cy = H - 28;
  const s = 25;

  const polar = (deg: number, r: number) => {
    const rad = (deg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const fan = (a0: number, a1: number, r: number, n = 60) => {
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const { x, y } = polar(a0 + (a1 - a0) * i / n, r);
      return `${x},${y}`;
    });
    return `M ${cx},${cy} L ${pts.join(" L ")} Z`;
  };

  const arc = (a0: number, a1: number, r: number, n = 60) => {
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const { x, y } = polar(a0 + (a1 - a0) * i / n, r);
      return `${x},${y}`;
    });
    return `M ${pts.join(" L ")}`;
  };

  const lbl8x8  = polar(0, 4 * s + 18);
  const lblLeft  = polar(-67.5, 6 * s + 14);
  const lblRight = polar( 67.5, 6 * s + 14);
  const lbl90   = polar(0, 2 * s);
  const lbl45L  = polar(-67.5, 4.6 * s);
  const lbl45R  = polar( 67.5, 4.6 * s);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      aria-label="Sensor field coverage diagram — top-down view at hip level"
    >
      {/* Range rings */}
      {([2, 4, 6, 8] as const).map(m => (
        <path
          key={m}
          d={arc(-90, 90, m * s)}
          fill="none"
          stroke={m === 4 ? "hsl(35 95% 52% / 0.35)" : "hsl(220 15% 14% / 0.1)"}
          strokeWidth={m === 4 ? 1.5 : 1}
          strokeDasharray={m === 4 ? "5 3" : "3 5"}
        />
      ))}

      {/* Side sensor fill zones */}
      <path d={fan(-90, -45, 6 * s)} fill="hsl(220 15% 14% / 0.05)" />
      <path d={fan( 45,  90, 6 * s)} fill="hsl(220 15% 14% / 0.05)" />

      {/* 8×8 fill zone */}
      <path d={fan(-45, 45, 4 * s)} fill="hsl(35 95% 52% / 0.1)" />

      {/* ±45° divider lines */}
      {([-45, 45] as const).map(deg => {
        const p = polar(deg, 6 * s);
        return <line key={deg} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="hsl(35 95% 52% / 0.4)" strokeWidth={1} strokeDasharray="4 3" />;
      })}

      {/* ±90° boundary lines */}
      {([-90, 90] as const).map(deg => {
        const p = polar(deg, 6 * s);
        return <line key={deg} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="hsl(220 15% 14% / 0.2)" strokeWidth={1} strokeDasharray="3 4" />;
      })}

      {/* 8×8 arc */}
      <path d={arc(-45, 45, 4 * s)} fill="none" stroke="hsl(35 95% 52% / 0.9)" strokeWidth={2} />

      {/* Side sensor arcs */}
      <path d={arc(-90, -45, 6 * s)} fill="none" stroke="hsl(220 15% 14% / 0.4)" strokeWidth={1.5} />
      <path d={arc( 45,  90, 6 * s)} fill="none" stroke="hsl(220 15% 14% / 0.4)" strokeWidth={1.5} />

      {/* Device */}
      <circle cx={cx} cy={cy} r={10} fill="hsl(35 95% 52% / 0.15)" />
      <circle cx={cx} cy={cy} r={4}  fill="hsl(35 95% 52%)" />

      {/* Distance labels */}
      {([2, 4, 6, 8] as const).map(m => {
        const { x, y } = polar(7, m * s);
        return (
          <text key={m} x={x + 4} y={y + 3} fontSize={8} fontFamily="'JetBrains Mono', monospace" fill="hsl(220 12% 28% / 0.5)" letterSpacing="0.08em">
            {m}M
          </text>
        );
      })}

      {/* Angle labels */}
      <text x={lbl90.x} y={lbl90.y + 3} fontSize={8} fontFamily="'JetBrains Mono', monospace" fill="hsl(35 95% 52% / 0.9)" textAnchor="middle" letterSpacing="0.06em">90°</text>
      <text x={lbl45L.x} y={lbl45L.y + 3} fontSize={7} fontFamily="'JetBrains Mono', monospace" fill="hsl(220 12% 28% / 0.6)" textAnchor="middle" letterSpacing="0.06em">45°</text>
      <text x={lbl45R.x} y={lbl45R.y + 3} fontSize={7} fontFamily="'JetBrains Mono', monospace" fill="hsl(220 12% 28% / 0.6)" textAnchor="middle" letterSpacing="0.06em">45°</text>

      {/* Sensor labels */}
      <text x={lbl8x8.x}  y={lbl8x8.y}  fontSize={8} fontFamily="'JetBrains Mono', monospace" fill="hsl(35 95% 52%)"           textAnchor="middle" letterSpacing="0.07em">VL53L8CX 8×8</text>
      <text x={lblLeft.x} y={lblLeft.y}  fontSize={7} fontFamily="'JetBrains Mono', monospace" fill="hsl(220 12% 28% / 0.65)"   textAnchor="middle" letterSpacing="0.06em">VL53L1X</text>
      <text x={lblRight.x} y={lblRight.y} fontSize={7} fontFamily="'JetBrains Mono', monospace" fill="hsl(220 12% 28% / 0.65)"  textAnchor="middle" letterSpacing="0.06em">VL53L1X</text>

      <text x={cx} y={cy + 20} fontSize={7} fontFamily="'JetBrains Mono', monospace" fill="hsl(35 95% 52%)" textAnchor="middle" letterSpacing="0.08em">DEVICE</text>
    </svg>
  );
};

const Product = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-20 lg:py-28 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Product / 02</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[11vw] sm:text-[8vw] lg:text-[6.5vw] text-graphite leading-[0.88] tracking-[-0.04em]">
                  Designed to
                  <br />
                  <span className="text-signal italic font-light">disappear.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  A belt-worn wearable engineered around discretion, reliability, and the body's natural sense of touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Design */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Design</div>

            {/* Primary image grid */}
            <div className="grid grid-cols-12 gap-3 md:gap-4 mb-6">
              <figure className="col-span-12 md:col-span-8 relative aspect-[4/3] overflow-hidden bg-ivory-deep group">
                <img
                  src={contextImg}
                  alt="Halo worn in context — belt device on person walking with white cane"
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
                    alt="Halo belt — sensor array front view"
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
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-4">
                  The design brief was simple: something you'd forget you were wearing. Halo is the belt — sensors and haptic motors are built directly into the band, which wraps the waist and fastens with a buckle. No add-ons, no clip points, nothing to mount or remove.
                </p>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty">
                  Form followed function at every stage. The enclosure was sized around the sensor array and PCB footprint, with the haptic motors distributed to provide directional clarity across the waist.
                </p>
                <Link
                  to="/challenge"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-signal hover:underline underline-offset-2 transition-colors"
                >
                  Why this device exists <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Hardware Architecture */}
        <section className="py-20 lg:py-28 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / Hardware Architecture</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
              {/* MCU overview */}
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl text-graphite leading-[0.92] tracking-[-0.035em] mb-6">
                  ESP32-S3
                  <br />
                  <span className="text-graphite-soft italic font-light">at the core.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-5">
                  Built on an ESP32-S3 microcontroller with dual I²C buses and 5× PWM outputs. The dual-bus architecture allows sensors to run independently, preventing I²C contention under load.
                </p>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty mb-8">
                  I²C address conflicts — a common problem when stacking multiple sensors of the same type — were resolved by waking sensors sequentially at boot and assigning each a unique address before normal operation begins.
                </p>

                {/* Software mapping */}
                <div className="bg-ivory border border-hairline p-6">
                  <div className="font-mono-tag text-signal mb-4">SOFTWARE LOGIC</div>
                  <p className="text-sm text-graphite-soft leading-relaxed mb-5">
                    Sensor distance readings are translated directly into haptic intensity. Each motor maps 1:1 to its paired sensor — no shared state, no latency stacking.
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "Near object", value: "Strong motor response", fill: "w-full" },
                      { label: "Mid-range", value: "Moderate buzz", fill: "w-3/5" },
                      { label: "Out of range", value: "Low / no signal", fill: "w-1/5" },
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
                      <div>
                        <div className="font-display text-xl text-graphite tracking-[-0.02em] mb-1">Vibration Motor Drivers</div>
                        <p className="text-sm text-graphite-soft leading-relaxed">ERM motors + 2N2222 transistor + 1N4001 flyback diode. Each independently PWM-controlled for variable intensity.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">2×</span>
                      <div>
                        <div className="font-display text-xl text-graphite tracking-[-0.02em] mb-1">VL53L1X — Single-Zone ToF</div>
                        <p className="text-sm text-graphite-soft leading-relaxed mb-4">Left and right sensors. Detects objects in a narrow cone at hip level, covering lateral approach vectors.</p>
                        <Citation
                          quote="Time-of-Flight sensors are more precise and quicker in measuring the distances."
                          source="Bala et al., 2023, p. 7"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">1×</span>
                      <div>
                        <div className="font-display text-xl text-graphite tracking-[-0.02em] mb-1">VL53L8CX — 8×8 Multi-Zone ToF</div>
                        <p className="text-sm text-graphite-soft leading-relaxed mb-4">Front/center sensor with an 8×8 zone matrix. Covers forward, above, and below at hip level — the primary overhead hazard detector.</p>
                        <div className="space-y-4">
                          <Citation
                            quote="A single sensor configuration from one vantage point is insufficient to gather the necessary environmental information."
                            source="Naidoo & Ghaziasgar, 2025, p. 17"
                          />
                          <Citation
                            quote="An effective ETA solution must incorporate multiple sensor modalities strategically distributed across different regions of the body."
                            source="Naidoo & Ghaziasgar, 2025, p. 17"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sensor field diagram */}
            <div className="mb-12">
              <div className="font-mono-tag text-graphite-soft/60 mb-4">FIG. / SENSOR COVERAGE — TOP-DOWN VIEW AT HIP LEVEL</div>
              <div className="bg-ivory border border-hairline p-6 lg:p-8">
                <SensorField />
              </div>
            </div>

            {/* Power chain */}
            <div>
              <div className="font-mono-tag text-graphite-soft/60 mb-6">POWER CHAIN</div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0">
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
            </div>

          </div>
        </section>

        {/* 03 / Haptic Feedback */}
        <section className="relative py-20 lg:py-28 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / Haptic Feedback</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[0.92] tracking-[-0.035em]">
                  Three modes.
                  <br />
                  <span className="text-signal italic font-light">One language.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
                <p className="text-base text-ivory/60 leading-relaxed">
                  Each hazard type produces a distinct haptic pattern — learned intuitively through use, without instruction.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10">

              {/* Mode 1: Forward Static */}
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
                  Sustained pulsing at an intensity proportional to object proximity. Slow, even rhythm — no urgency, just presence.
                </p>
                {/* Visualization: 5 bars pulsing in unison */}
                <div className="flex items-end gap-2 h-12">
                  {[36, 28, 44, 28, 36].map((h, i) => (
                    <HapticBar key={i} height={h} duration={900} delay={0} />
                  ))}
                </div>
                <div className="mt-4 font-mono-tag text-ivory/30">PULSE — UNIFORM</div>
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
                <p className="text-sm text-ivory/50 mb-2">proximity-triggered</p>
                <p className="text-ivory/60 leading-relaxed text-sm mb-10">
                  Haptic frequency accelerates as an object closes distance. The faster the approach, the faster the buzz — an instinctive urgency signal.
                </p>
                {/* Visualization: same pattern as forward, faster */}
                <div className="flex items-end gap-2 h-12">
                  {[36, 28, 44, 28, 36].map((h, i) => (
                    <HapticBar key={i} height={h} duration={420} delay={0} />
                  ))}
                </div>
                <div className="mt-4 font-mono-tag text-ivory/30">PULSE — FAST</div>
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
                  8×8 multi-zone ToF identifies objects in the upper arc. The two center-top motors activate, localizing the signal to the upper belt.
                </p>
                {/* Visualization: belt motor map */}
                <div className="space-y-3">
                  <div className="font-mono-tag text-ivory/30 mb-2">MOTOR MAP — BELT VIEW</div>
                  <div className="flex items-center gap-2">
                    {[false, true, true, false, false].map((active, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5">
                        <div
                          className={`w-5 h-5 rounded-full border transition-colors ${
                            active
                              ? "bg-signal border-signal"
                              : "bg-transparent border-ivory/20"
                          }`}
                          style={active ? { animation: "haptic-bar 700ms ease-in-out infinite", animationName: "signal-pulse" } : undefined}
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

      </main>
      <Footer />
    </div>
  );
};

export default Product;
