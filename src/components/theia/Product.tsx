import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";
import deviceHeroImg from "@/assets/theia-device-hero.jpg";
import contextImg from "@/assets/halobelt.png";
import beltAnimationSrc from "@/assets/Belt Animation.12.mov?url";
import proto1Img from "@/assets/prototimeline1.jpeg";
import proto3Img from "@/assets/prototimeline3.jpeg";
import proto4Img from "@/assets/prototimeline4.jpeg";
import proto5Img from "@/assets/prototimeline5.jpeg";

type Callout = {
  id: string;
  x: number; y: number;     // dot position, % of stage
  lx: number; ly: number;   // label anchor, % of stage
  anchor: "left" | "right";
  label: string;
  sub: string;
  toggleable?: boolean;
};

const beltCallouts: Callout[] = [
  { id: "luna1",   x: 26, y: 47, lx: 15,  ly: 70, anchor: "right",  label: "LUNA-TF",     sub: "" },
  { id: "luna2",   x: 74, y: 47, lx: 84,  ly: 70, anchor: "left",  label: "LUNA-TF",     sub: "" },
  { id: "luna2",   x: 50, y: 51, lx: 52,  ly: 85, anchor: "left",  label: "LUNA-TF",     sub: "" },
  { id: "ml88",   x: 49, y: 56, lx: 46, ly: 85, anchor: "right", label: "8×8 TOF",     sub: "" },
  { id: "linear1", x: 63, y: 50, lx: 64, ly: 77, anchor: "left", label: "TOF LINEAR",  sub: "" },
  { id: "linear2", x: 36, y: 50, lx: 34, ly: 77, anchor: "right", label: "TOF LINEAR",  sub: "" },

];

// Motor positions on the BACK of the belt (visible only with X-RAY toggled on).
// 4 around the front 8×8 + center Luna-TF zone (2 left, 2 right of center back)
// 2 under the ToF Linear ±45° pair
// 2 under the side Luna-TF pair
const motorMarkers = [
  { x: 43, y: 48 }, { x: 55, y: 48 },  // 8×8 + center Luna, upper pair
  { x: 43, y: 58 }, { x: 55, y: 58 },  // 8×8 + center Luna, lower pair
  { x: 35, y: 52 }, { x: 63, y: 52 },  // ToF Linear ±45°
  { x: 26, y: 52 }, { x: 74, y: 52 },  // Luna-TF sides
];

const ScrollScrubVideo = ({ src, label }: { src: string; label: string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef(0);
  const targetRef = useRef(0);
  const smoothRef = useRef(0);
  const animatingRef = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [xray, setXray] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const range = Math.max(1, el.offsetHeight - window.innerHeight);
      const scrolled = Math.min(range, Math.max(0, -rect.top));
      targetRef.current = scrolled / range;
    };

    const tick = () => {
      animatingRef.current = true;
      const alpha = 0.18;
      const next = smoothRef.current + (targetRef.current - smoothRef.current) * alpha;
      smoothRef.current = next;

      // Scrub completes at 0.85, leaving the tail of the runway for callouts.
      const scrubU = Math.min(1, Math.max(0, next / 0.85));
      const dur = video.duration;
      if (!isNaN(dur) && isFinite(dur) && dur > 0) {
        try {
          video.currentTime = dur * scrubU;
        } catch {
          /* seek can throw before metadata is ready — ignored */
        }
      }

      setProgress((prev) => (Math.abs(prev - next) > 0.0005 ? next : prev));

      if (Math.abs(targetRef.current - smoothRef.current) > 0.0006) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        animatingRef.current = false;
      }
    };

    const onScroll = () => {
      if (reduceMotion) return;
      measure();
      if (!animatingRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onLoaded = () => setReady(true);
    video.addEventListener("loadedmetadata", onLoaded);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", onLoaded);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion]);

  // Callouts fade in from progress 0.85 → 0.95, fully visible until end.
  const baseCalloutOpacity = reduceMotion
    ? 1
    : Math.min(1, Math.max(0, (progress - 0.85) / 0.10));
  // Sensor callouts hide when motors x-ray is on, and vice versa.
  const sensorCalloutOpacity = xray ? 0 : baseCalloutOpacity;
  const sensorCalloutsInteractive = sensorCalloutOpacity > 0.5;
  const motorsButtonInteractive = baseCalloutOpacity > 0.5;
  const videoOpacity = !ready ? 0 : xray ? 0.22 : 1;

  return (
    <section ref={sectionRef} className="relative min-h-[280vh] bg-background border-b border-hairline">
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-background">
        <div className="absolute top-6 left-6 lg:top-10 lg:left-10 font-mono-tag text-graphite-soft/60 z-20">{label}</div>

        {/* Video */}
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            opacity: videoOpacity,
            transition: "opacity 300ms ease",
            transform: "scale(0.78)",
            transformOrigin: "center center",
          }}
        />

        {/* Motor X-ray markers (visible only when toggled) */}
        {xray && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {motorMarkers.map((m, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${m.x}%`,
                  top: `${m.y}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${i * 120}ms`,
                }}
              >
                <div className="relative flex items-center justify-center">
                  {/* Outer soft halo */}
                  <div className="absolute w-20 h-20 rounded-full bg-signal/15 blur-2xl" />
                  {/* Mid halo */}
                  <div className="absolute w-10 h-10 rounded-full bg-signal/35 blur-md animate-pulse" />
                  {/* Pulsing ring */}
                  <div
                    className="absolute w-6 h-6 rounded-full border border-signal/80"
                    style={{ animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite", animationDelay: `${i * 120}ms` }}
                  />
                  {/* Solid core */}
                  <div
                    className="relative w-3.5 h-3.5 rounded-full bg-signal"
                    style={{
                      boxShadow:
                        "0 0 12px hsl(var(--signal)), 0 0 28px hsl(var(--signal) / 0.7), 0 0 48px hsl(var(--signal) / 0.35)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sensor callouts overlay — hidden when MOTORS toggle is active */}
        <div
          className="absolute inset-0 z-20"
          style={{
            opacity: sensorCalloutOpacity,
            transition: "opacity 200ms ease",
            pointerEvents: sensorCalloutsInteractive ? "auto" : "none",
          }}
        >
          {/* Leader lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden
          >
            {beltCallouts.map((c) => (
              <line
                key={c.id}
                x1={c.x} y1={c.y} x2={c.lx} y2={c.ly}
                stroke="hsl(var(--signal))"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                opacity="0.55"
              />
            ))}
          </svg>

          {/* Dots at part positions */}
          {beltCallouts.map((c) => (
            <div
              key={`dot-${c.id}`}
              className="absolute pointer-events-none"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 rounded-full bg-signal" />
                <div className="absolute -inset-1.5 rounded-full border border-signal/50" />
              </div>
            </div>
          ))}

          {/* Labels */}
          {beltCallouts.map((c) => (
            <div
              key={`lbl-${c.id}`}
              className="absolute"
              style={{
                left: c.anchor === "left" ? `${c.lx}%` : "auto",
                right: c.anchor === "right" ? `${100 - c.lx}%` : "auto",
                top: `${c.ly}%`,
                transform: "translateY(-50%)",
                pointerEvents: sensorCalloutsInteractive ? "auto" : "none",
              }}
            >
              <div className={c.anchor === "left" ? "text-left" : "text-right"}>
                <div className="font-mono-tag text-signal text-[11px] tracking-[0.18em]">{c.label}</div>
                {c.sub && (
                  <div className="font-mono-tag text-graphite-soft/70 text-[9px] tracking-[0.15em] mt-1">{c.sub}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Standalone MOTORS toggle — stays visible whether the sensor callouts are on or hidden */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 lg:bottom-5 z-30"
          style={{
            opacity: baseCalloutOpacity,
            transition: "opacity 200ms ease",
            pointerEvents: motorsButtonInteractive ? "auto" : "none",
          }}
        >
          <button
            type="button"
            onClick={() => setXray((v) => !v)}
            aria-pressed={xray}
            className={`px-5 py-2.5 text-[11px] font-mono tracking-[0.22em] border transition-colors backdrop-blur-sm ${
              xray
                ? "bg-signal text-background border-signal"
                : "border-signal/60 text-signal bg-background/40 hover:bg-signal/10"
            }`}
          >
            {xray ? "× HIDE MOTORS" : "MOTORS"}
          </button>
        </div>
      </div>
    </section>
  );
};

const Citation = ({ quote, source }: { quote: string; source: string }) => (
  <blockquote className="border-l-2 border-signal pl-4 py-0.5">
    <p className="text-sm text-graphite-soft leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
    <cite className="font-mono-tag text-signal not-italic mt-2 block">{source}</cite>
  </blockquote>
);

const prototypeStages = [
  { v: "V01",    label: "Materials selection",         note: "Sourcing components + fabric",            img: proto1Img },
  { v: "TEST",   label: "Placement validation",        note: "Placement locked — sewn into fabric",     img: proto3Img },
  { v: "RESULT", label: "Wiring",                      note: "Full wiring — haptics + sensors integrated", img: proto5Img },
  { v: "V03",    label: "Final assembly + calibration", note: "Live system — bring-up + calibration",   img: proto4Img },
];

const qbtrd: [string, string][] = [
  ["Question", "Can a waist-level wearable detect nearby obstacles clearly enough to support spatial awareness?"],
  ["Build", "Belt-mounted sensor module with haptic or audio feedback."],
  ["Test", "Controlled obstacle detection, fit testing, feedback clarity, walking scenarios."],
  ["Result", "Detection accuracy, false alerts, missed obstacles, comfort, latency, user interpretation."],
  ["Decision", "Refine sensor angle, feedback pattern, belt placement, enclosure, and onboarding flow."],
];

const powerChain = [
  { label: "LiPo Battery", sub: "3.7V cell" },
  { label: "PiSugarS+", sub: "Charging + boost" },
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
  const W = 800;
  const H = 480;
  const mono = "'JetBrains Mono', monospace";

  const signal     = "hsl(211 70% 46%)";
  const signalSoft = "hsl(211 70% 46% / 0.5)";
  const signalDim  = "hsl(211 70% 46% / 0.22)";
  const fg         = "hsl(220 22% 16%)";
  const fgSoft     = "hsl(220 11% 40%)";
  const fgFaint    = "hsl(220 11% 40% / 0.45)";
  const surface    = "hsl(220 14% 96%)";

  // Sensor positions along curved belt (computed from quadratic bezier)
  const sensors = [
    { x: 112, y: 403, dir: -90, range: 8, half: 6,  fill: 0.04, label: "LUNA-TF",  sub: "8M ← SIDE",  rangeLabelX: 50,  rangeLabelY: 405 },
    { x: 256, y: 382, dir: -45, range: 2, half: 14, fill: 0.10, label: "TOF LINEAR", sub: "4M · −45°", rangeLabelX: 218, rangeLabelY: 348 },
    { x: 400, y: 375, dir:   0, range: 4, half: 22, fill: 0.18, label: "8×8 + LUNA-TF", sub: "FORWARD", rangeLabelX: 410, rangeLabelY: 305 },
    { x: 544, y: 382, dir:  45, range: 2, half: 14, fill: 0.10, label: "TOF LINEAR", sub: "4M · +45°", rangeLabelX: 568, rangeLabelY: 348 },
    { x: 688, y: 403, dir:  90, range: 8, half: 6,  fill: 0.04, label: "LUNA-TF",  sub: "8M · SIDE →", rangeLabelX: 720, rangeLabelY: 405 },
  ];
  const s = 18; // px per meter

  const fan = (ox: number, oy: number, deg: number, half: number, r: number, n = 60) => {
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const a = ((deg - half) + (2 * half * i) / n - 90) * Math.PI / 180;
      return `${(ox + r * Math.cos(a)).toFixed(1)},${(oy + r * Math.sin(a)).toFixed(1)}`;
    });
    return `M ${ox},${oy} L ${pts.join(" L ")} Z`;
  };
  const arc = (ox: number, oy: number, deg: number, half: number, r: number, n = 60) => {
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const a = ((deg - half) + (2 * half * i) / n - 90) * Math.PI / 180;
      return `${(ox + r * Math.cos(a)).toFixed(1)},${(oy + r * Math.sin(a)).toFixed(1)}`;
    });
    return `M ${pts.join(" L ")}`;
  };

  const beltPath = "M 80 410 Q 400 340 720 410";

  return (
    <svg viewBox={`0 170 ${W} 295`} className="w-full h-auto" aria-label="Sensor field coverage, top-down view of belt">
      <defs>
        <radialGradient id="beltGlow" cx="50%" cy="78%" r="55%">
          <stop offset="0%" stopColor="hsl(211 70% 46%)" stopOpacity="0.14" />
          <stop offset="60%" stopColor="hsl(211 70% 46%)" stopOpacity="0.03" />
          <stop offset="100%" stopColor="hsl(211 70% 46%)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beltStrip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(220 12% 88%)" />
          <stop offset="100%" stopColor="hsl(220 10% 78%)" />
        </linearGradient>
      </defs>

      {/* Ambient radial glow */}
      <rect width={W} height={H} fill="url(#beltGlow)" />

      {/* FORWARD label */}
      <text x={W / 2} y={188} fontSize={9} fontFamily={mono} fill={fgFaint} textAnchor="middle" letterSpacing="0.25em">↑ FORWARD</text>

      {/* SENSOR FIELDS (below belt visually because z order) */}
      {/* Center: 8×8 wide cone (4m) + Luna-tf narrow beam (8m) */}
      <path d={fan(400, 375, 0, 8,  8 * s)} fill="hsl(211 70% 46% / 0.05)" />
      <path d={fan(400, 375, 0, 22, 4 * s)} fill="hsl(211 70% 46% / 0.12)" />
      <path d={arc(400, 375, 0, 8,  8 * s)} fill="none" stroke={signalSoft} strokeWidth={1.2} strokeDasharray="5 4" />
      <path d={arc(400, 375, 0, 22, 4 * s)} fill="none" stroke={signal}     strokeWidth={2} />

      {/* Side and angled sensors */}
      {sensors.filter((s) => s.dir !== 0).map((sn) => (
        <g key={`field-${sn.x}`}>
          <path d={fan(sn.x, sn.y, sn.dir, sn.half, sn.range * s)} fill={`hsl(212 95% 62% / ${sn.fill})`} />
          <path d={arc(sn.x, sn.y, sn.dir, sn.half, sn.range * s)} fill="none" stroke={signalSoft} strokeWidth={1} />
        </g>
      ))}

      {/* Range labels */}
      <text x={420} y={225} fontSize={9} fontFamily={mono} fill={signalSoft} letterSpacing="0.1em">8M</text>
      <text x={418} y={275} fontSize={9} fontFamily={mono} fill={signal}     letterSpacing="0.1em">4M</text>
      <text x={218} y={348} fontSize={8} fontFamily={mono} fill={signalSoft} letterSpacing="0.08em">4M</text>
      <text x={568} y={348} fontSize={8} fontFamily={mono} fill={signalSoft} letterSpacing="0.08em">4M</text>

      {/* CURVED BELT STRIP */}
      <path d={beltPath} fill="none" stroke="hsl(220 12% 82%)" strokeWidth={36} strokeLinecap="round" />
      <path d={beltPath} fill="none" stroke="url(#beltStrip)" strokeWidth={30} strokeLinecap="round" />
      <path d={beltPath} fill="none" stroke={signalDim} strokeWidth={0.8} strokeDasharray="3 5" />

      {/* SENSOR MODULES on belt */}
      {sensors.map((sn) => {
        const isMain = sn.dir === 0;
        const w = isMain ? 36 : 24;
        const h = isMain ? 22 : 16;
        return (
          <g key={`mod-${sn.x}`}>
            {/* glow under module */}
            <circle cx={sn.x} cy={sn.y} r={isMain ? 14 : 10} fill={signal} opacity={0.25} />
            {/* module body */}
            <rect
              x={sn.x - w / 2} y={sn.y - h / 2}
              width={w} height={h}
              rx={3}
              fill={surface}
              stroke={signal}
              strokeWidth={1}
            />
            {/* sensor dot */}
            <circle cx={sn.x} cy={sn.y} r={isMain ? 3 : 2.4} fill={signal} />
            {/* highlight rim */}
            <circle cx={sn.x} cy={sn.y} r={isMain ? 3 : 2.4} fill="none" stroke={signal} strokeWidth={0.6} opacity={0.6} />
          </g>
        );
      })}

      {/* SENSOR LABELS below belt */}
      {sensors.map((sn) => (
        <g key={`lbl-${sn.x}`}>
          <text x={sn.x} y={sn.y + 38} fontSize={8} fontFamily={mono} fill={fg} textAnchor="middle" letterSpacing="0.08em">{sn.label}</text>
          <text x={sn.x} y={sn.y + 50} fontSize={7.5} fontFamily={mono} fill={fgSoft} textAnchor="middle" letterSpacing="0.06em">{sn.sub}</text>
        </g>
      ))}
    </svg>
  );
};

const Product = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* 00 / Scroll-scrubbed belt animation */}
        <ScrollScrubVideo src={beltAnimationSrc} label="FIG. 00 / BELT ANIMATION" />

        {/* 01 / Hardware Architecture */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Hardware Architecture</div>

            {/* BLOCK 1: Sensor field diagram (belt 180° coverage) */}
            <div className="mb-20">
              <div className="font-mono-tag text-graphite-soft/60 mb-4">FIG. / SENSOR COVERAGE / TOP-DOWN VIEW AT HIP LEVEL</div>
              <div className="bg-ivory border border-hairline p-6 lg:p-8">
                <SensorField />
              </div>
            </div>

            {/* BLOCK 2: Software Logic */}
            <div className="mb-20">
              <div className="bg-ivory border border-hairline p-6 lg:p-8">
                <div className="font-mono-tag text-signal mb-4">SOFTWARE LOGIC</div>
                <p className="text-sm text-graphite-soft leading-relaxed mb-6">
                  Sensor distance translates directly into pulse speed. Each motor maps 1:1 to its paired sensor. No shared state, no latency stacking.
                </p>
                <div className="space-y-3">
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

            {/* BLOCK 3: Sensor suite cards (2×2 grid below diagram) */}
            <div>
              <div className="font-mono-tag text-graphite-soft/60 mb-4">SENSOR + ACTUATOR SUITE</div>
              <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
                {[
                  {
                    count: "8×",
                    name: "NFP-FLAT-C1030 Coin Motors",
                    desc: "Independently PWM-controlled. Each motor maps 1:1 to a sensor zone. Driven by P2N2222A + 1kΩ resistor + 1N4001 flyback diode so they fire simultaneously without rail sag.",
                    why: "Same form factor MIT's ALVU used on the abdomen — 80%+ satisfaction in minutes.",
                  },
                  {
                    count: "3×",
                    name: "Benewake TF-Luna LiDAR",
                    desc: "Two on the far ends of the belt pointing sideways (8m lateral). One at center pointing forward alongside the 8×8 for long-range detection.",
                    why: "Our reflex layer. 250 Hz catches the fast close-range threats the wide-FOV sensor is too slow to see.",
                  },
                  {
                    count: "2x",
                    name: "VL53L1X TOF Linear",
                    desc: "Positioned at ±45° from center. Short-range (2m) angled coverage bridging between the forward sensors and the side-facing Lunas.",
                    why: "Bridges forward and side coverage. ToF beats ultrasonic on speed and precision indoors (Bala et al., 2023).",
                  },
                  {
                    count: "1×",
                    name: "VL53L8CX 8×8 Multi-Zone ToF",
                    desc: "Front-center sensor with an 8×8 zone matrix at 60 Hz. Covers forward, above, and below at hip level. The primary overhead hazard detector.",
                    why: "The brain of the sensing layer. 64 zones at 60 Hz delivers multi-height, real-time detection no existing device offers.",
                  },
                ].map((s) => (
                  <div key={s.name} className="bg-ivory p-6 lg:p-7">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-mono-tag text-signal shrink-0 mt-0.5">{s.count}</span>
                      <div className="font-display text-xl text-graphite tracking-[-0.02em]">{s.name}</div>
                    </div>
                    <p className="text-sm text-graphite-soft leading-relaxed mb-4">{s.desc}</p>
                    <p className="text-xs text-graphite leading-relaxed">
                      <span className="font-mono-tag text-signal mr-2">WHY</span>{s.why}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 02 / Haptic Feedback */}
        <section className="relative py-28 lg:py-40 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / Haptic Feedback</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] tracking-[-0.022em]">
                  Three modes.
                  <br />
                  <span className="text-signal italic font-light">One language.</span>
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">

              {/* Mode 1: Forward / Static */}
              <div className="bg-ivory p-7 lg:p-10 group hover:bg-ivory-deep transition-colors duration-500">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-tag text-signal">01</span>
                  <span className="font-mono-tag text-foreground/30">STATIC</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-[-0.03em] mb-3">
                  Forward Object
                </h3>
                <p className="text-sm text-foreground/50 mb-2">e.g. wall, post, door</p>
                <p className="text-foreground/60 leading-relaxed text-sm mb-10">
                  Pulse speed tracks distance. Slow for far, faster as it closes. The forward-center sensor activates the center motor only.
                </p>
                <div className="flex items-end gap-1.5 h-12">
                  {[28, 44, 28].map((h, i) => (
                    <HapticBar key={i} height={h} duration={1000} delay={0} />
                  ))}
                  <span className="font-mono-tag text-foreground/20 self-center px-1.5">&rarr;</span>
                  {[28, 44, 28].map((h, i) => (
                    <HapticBar key={`f${i}`} height={h} duration={380} delay={0} />
                  ))}
                </div>
                <div className="mt-4 font-mono-tag text-foreground/30">FAR / SLOW &nbsp;&rarr;&nbsp; NEAR / FAST</div>
              </div>

              {/* Mode 2: Approaching */}
              <div className="bg-ivory p-7 lg:p-10 group hover:bg-ivory-deep transition-colors duration-500">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-tag text-signal">02</span>
                  <span className="font-mono-tag text-foreground/30">DYNAMIC</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-[-0.03em] mb-3">
                  Approaching Object
                </h3>
                <p className="text-sm text-foreground/50 mb-2">speed-aware</p>
                <p className="text-foreground/60 leading-relaxed text-sm mb-10">
                  Pulse rate escalates as the object closes. If approach speed crosses the threshold, pulsing gives way to a sustained hold at maximum. A continuous signal that demands attention.
                </p>
                <div className="flex items-end gap-1.5 h-12">
                  {[28, 44, 28].map((h, i) => (
                    <HapticBar key={i} height={h} duration={260} delay={0} />
                  ))}
                  <span className="font-mono-tag text-foreground/20 self-center px-1.5">&rarr;</span>
                  {[44, 44, 44].map((h, i) => (
                    <div key={`s${i}`} className="w-2.5 rounded-sm bg-signal" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <div className="mt-4 font-mono-tag text-foreground/30">FAST PULSE &nbsp;&rarr;&nbsp; HOLD / MAX</div>
              </div>

              {/* Mode 3: Overhead */}
              <div className="bg-ivory p-7 lg:p-10 group hover:bg-ivory-deep transition-colors duration-500">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-tag text-signal">03</span>
                  <span className="font-mono-tag text-foreground/30">OVERHEAD</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-[-0.03em] mb-3">
                  Overhead Hazard
                </h3>
                <p className="text-sm text-foreground/50 mb-2">e.g. branch, awning, beam</p>
                <p className="text-foreground/60 leading-relaxed text-sm mb-10">
                  The 8&times;8 multi-zone sensor detects objects above waist height. The center motors are physically elevated on the belt and activate together to signal vertical position, distinct from forward or side detections.
                </p>
                <div className="space-y-3">
                  <div className="font-mono-tag text-foreground/30 mb-2">MOTOR MAP / BELT VIEW</div>
                  <div className="flex items-center gap-2">
                    {[false, false, true, true, false].map((active, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5">
                        <div
                          className={`w-5 h-5 rounded-full border transition-colors ${
                            active
                              ? "bg-signal border-signal"
                              : "bg-transparent border-foreground/20"
                          }`}
                          style={active ? { animationName: "signal-pulse", animationDuration: "700ms", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" } : undefined}
                        />
                        <span className="font-mono-tag text-foreground/20" style={{ fontSize: "0.55rem" }}>
                          {["L", "ML", "C", "MR", "R"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="font-mono-tag text-signal/60 text-[0.6rem] tracking-wider">&bull; ACTIVE &nbsp; &#9675; STANDBY</div>
                </div>
              </div>

            </div>

            {/* Spatial mapping principle */}
            <div className="border border-t-0 border-hairline bg-ivory/40 px-7 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <div className="font-mono-tag text-signal shrink-0">SPATIAL MAPPING</div>
              <div className="w-px h-4 bg-hairline shrink-0 hidden sm:block" />
              <p className="text-foreground/55 text-sm leading-relaxed">
                Each sensor maps directly to the motor at its belt position. A right-side detection activates only the right motor. An overhead detection activates only the elevated center motors. Direction is felt, not interpreted.
              </p>
            </div>

          </div>
        </section>

        {/* 03 / Power Chain */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / Power Chain</div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 mb-6">
              {powerChain.map((node, i) => (
                <div key={node.label} className="flex flex-col sm:flex-row items-stretch sm:items-center flex-1">
                  <div className="flex-1 bg-ivory border border-hairline p-5 lg:p-6">
                    <div className="font-display text-base text-graphite tracking-[-0.02em]">{node.label}</div>
                    <div className="font-mono-tag text-graphite-soft/60 mt-1">{node.sub}</div>
                  </div>
                  {i < powerChain.length - 1 && (
                    <div className="flex items-center justify-center w-8 h-8 sm:h-auto shrink-0 self-center">
                      <span className="font-mono-tag text-signal text-base rotate-90 sm:rotate-0">&rarr;</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-graphite leading-relaxed max-w-3xl">
              <span className="font-mono-tag text-signal mr-2">WHY</span>3 hr runtime under peak load, 4–6 hr typical use with wifi on, load-sharing so it charges while in use. PiSugarS+ keeps the 5V rail stable when motors fire together. 12 hr idle with wifi off, 40 hr fully off.
            </p>
          </div>
        </section>

        {/* 04 / Walkthrough */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Walkthrough</div>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  See it
                  <br />
                  in <span className="text-signal">motion.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                A short walkthrough of the belt &mdash; how it sits, how it senses, how it speaks back to the body.
              </p>
            </div>

            <div className="relative aspect-video border border-hairline bg-ivory-deep/40 grid-bg flex items-center justify-center group cursor-pointer">
              <div className="absolute top-4 left-4 font-mono-tag text-graphite-soft/60">FIG. 00 / WALKTHROUGH</div>
              <div className="absolute top-4 right-4 font-mono-tag text-graphite-soft/40">VIDEO PENDING</div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-signal/40 bg-background/60 flex items-center justify-center group-hover:border-signal group-hover:bg-signal/10 transition-colors">
                  <span className="font-display text-2xl text-signal ml-1">&#9654;</span>
                </div>
                <div className="font-mono-tag text-graphite-soft/60">PLACEHOLDER &middot; 16:9</div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 / Considerations */}
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
                      <span className="text-graphite font-medium">Mitigation:</span> Cane-first design. Theia augments, never leads. Alerts inform; the user always acts. The device is silent by default and never instructs a turn or step.
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

        {/* 06 / Design */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">06 / Design</div>

            <div className="grid lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  A belt people
                  <br />
                  would <span className="text-signal">actually wear.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[18px] md:text-[20px] text-graphite-soft leading-relaxed">
                Sensors and haptic motors built into the band &mdash; no add-ons, no clip points, nothing that reads as medical. Confidence, worn at the waist.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <figure className="col-span-12 md:col-span-8 relative aspect-[4/3] overflow-hidden bg-ivory-deep group">
                <img
                  src={contextImg}
                  alt="Theia worn in context"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                />
                <figcaption className="absolute top-4 left-4 right-4 flex items-start justify-between font-mono-tag text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
                  <span>FIG. 01 / IN SITU</span>
                  <span className="opacity-70">WORN AT WAIST</span>
                </figcaption>
              </figure>

              <figure className="col-span-12 md:col-span-4 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-ivory-deep group">
                <img
                  src={deviceHeroImg}
                  alt="Theia belt sensor array"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                />
                <figcaption className="absolute top-3 left-3 right-3 flex justify-between font-mono-tag text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
                  <span>FIG. 02 / DEVICE</span>
                  <span className="opacity-70">42 &times; 58MM</span>
                </figcaption>
              </figure>
            </div>

            <Link
              to="/challenge"
              className="inline-flex items-center gap-2 mt-10 text-sm text-signal hover:underline underline-offset-2 transition-colors"
            >
              Why this device exists <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </section>

        {/* 07 / Prototype Evidence */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">07 / Prototype Evidence</div>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-graphite">
                  From concept
                  <br />
                  to <span className="text-signal">physical testing.</span>
                </h2>
                <p className="mt-8 text-[18px] md:text-[20px] leading-relaxed text-graphite-soft max-w-2xl">
                  Theia is being developed through iterative prototyping: building, testing, observing failure points, and redesigning around what the prototype reveals.
                </p>
              </div>
            </div>

            {/* Process timeline */}
            <div className="mt-20">
              <div className="micro-label mb-6">Process timeline</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
                {prototypeStages.map((s) => (
                  <div key={s.v} className="bg-background p-5">
                    <div className="aspect-[4/3] border border-hairline mb-4 overflow-hidden bg-ivory-deep">
                      <img src={s.img} alt={s.label} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-signal font-mono text-[11px] mb-1">{s.v}</div>
                    <div className="font-display text-[15px] leading-tight text-graphite">{s.label}</div>
                    <div className="text-[12px] text-graphite-soft mt-1">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* QBTRD */}
            <div className="mt-16 grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
              {qbtrd.map(([k, v], i) => (
                <div key={k} className="bg-background p-7">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-signal font-mono text-[11px]">0{i + 1}</span>
                    <span className="micro-label">{k}</span>
                  </div>
                  <p className="text-[16px] leading-relaxed text-graphite">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 / Scalability */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">08 / Scalability</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6">
                <h2 className="font-display font-medium tracking-[-0.025em] text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.05] text-foreground mb-8">
                  Scalability
                  <br />
                  <span className="text-signal italic font-light">first.</span>
                </h2>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed text-pretty max-w-xl">
                  The next build closes the blind spot behind the user &mdash; coverage from 180° to a full 360°.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="border border-hairline bg-ivory p-7 lg:p-10">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono-tag text-signal">01</span>
                    <span className="font-mono-tag text-foreground/30">COVERAGE</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-[-0.025em] leading-tight">
                    180° to 360°
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-pretty">
                    Wrap the user completely. Close the blind spot behind them.
                  </p>
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

export default Product;
