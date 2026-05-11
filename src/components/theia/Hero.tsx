import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const beltFrameModules = import.meta.glob<string>("../../assets/BeltFramesWebp/*.webp", {
  eager: true,
  import: "default",
});

const BELT_FRAME_URLS = Object.entries(beltFrameModules)
  .sort(([pathA], [pathB]) => {
    // Expected filename: "Belt Animation.469.226.webp" → sort key = 226
    const na = parseInt(pathA.match(/\.([0-9]+)\.webp$/i)?.[1] ?? "0", 10);
    const nb = parseInt(pathB.match(/\.([0-9]+)\.webp$/i)?.[1] ?? "0", 10);
    return na - nb;
  })
  .map(([, url]) => url);

const tiles = [
  ["01", "Proximity sensing"],
  ["02", "Haptic zones"],
  ["03", "Control module"],
  ["04", "Cane-compatible"],
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/** Scroll progress [0,1] → adjacent frame indices + blend weights (only two images drawn). */
const beltFrameBlend = (scrollProgress: number, count: number) => {
  if (count <= 0) return { i0: 0, i1: 0, w0: 1, w1: 0 };
  if (count === 1) return { i0: 0, i1: 0, w0: 1, w1: 0 };
  const u = Math.min(1, Math.max(0, scrollProgress));
  const floatIndex = u * (count - 1);
  const i0 = Math.floor(floatIndex);
  const i1 = Math.min(count - 1, i0 + 1);
  const w1 = floatIndex - i0;
  const w0 = 1 - w1;
  return { i0, i1, w0, w1 };
};

const MetaStrip = () => (
  <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-signal" />
      <span>Spatial awareness companion</span>
    </div>
    <div className="flex items-center gap-6">
      <span>v0.2 &mdash; prototype</span>
      <span className="hidden md:inline">2026 &mdash; pilot phase</span>
    </div>
  </div>
);

const Hero = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef(0);
  const animatingRef = useRef(false);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const measureTarget = () => {
      const rect = el.getBoundingClientRect();
      const range = Math.max(1, el.offsetHeight - window.innerHeight);
      const scrolled = Math.min(range, Math.max(0, -rect.top));
      targetProgressRef.current = scrolled / range;
    };

    const tick = () => {
      animatingRef.current = true;
      // Low-pass filter to smooth scroll spikes but still track closely.
      const alpha = 0.18;
      const next = smoothProgressRef.current + (targetProgressRef.current - smoothProgressRef.current) * alpha;
      smoothProgressRef.current = next;

      // Avoid excessive React work: only commit when delta is meaningful.
      setProgress((prev) => (Math.abs(prev - next) > 0.0005 ? next : prev));

      // Keep animating until we're effectively caught up.
      if (Math.abs(targetProgressRef.current - smoothProgressRef.current) > 0.0006) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        animatingRef.current = false;
      }
    };

    const onScroll = () => {
      if (reduceMotion) return;
      measureTarget();
      if (!animatingRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (reduceMotion) {
      targetProgressRef.current = 0;
      smoothProgressRef.current = 0;
      setProgress(0);
    } else {
      onScroll();
    }
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion]);

  const frameCount = BELT_FRAME_URLS.length;
  const { i0, i1, w0, w1 } = reduceMotion
    ? { i0: 0, i1: 0, w0: 1, w1: 0 }
    : beltFrameBlend(progress, frameCount);

  useEffect(() => {
    for (const src of BELT_FRAME_URLS) {
      const img = new Image();
      img.src = src;
    }
  }, []);

  const t = easeOutCubic(progress);

  const headlineStyle = reduceMotion
    ? undefined
    : {
        opacity: lerp(1, 0.45, t),
        transform: `translate3d(0, ${lerp(0, -36, t)}px, 0)`,
      };

  const productStyle = reduceMotion
    ? undefined
    : {
        transform: [
          `translate3d(${lerp(6, -4, t)}%, ${lerp(4, -10, t)}vh, 0)`,
          `scale(${lerp(1.38, 1.08, t)})`,
        ].join(" "),
      };

  const hintOpacity = reduceMotion ? 0 : lerp(0.55, 0, Math.min(1, t * 2.2));

  return (
    <section id="overview" className="relative bg-background text-foreground">
      {/* Scroll runway + sticky stage — black canvas for belt sequence only */}
      <div ref={stageRef} className="relative min-h-[210vh] bg-background text-foreground">
        <div className="sticky top-0 h-[100dvh] overflow-x-clip bg-background">
          <div className="relative mx-auto flex h-full max-w-[1400px] flex-col px-6 pt-28 pb-10 md:pt-32 lg:px-10">
            <div className="mb-8 md:mb-10">
              <MetaStrip />
            </div>

            <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-6" style={headlineStyle}>
                <h1 className="font-display font-medium tracking-[-0.03em] text-[clamp(2.5rem,7.5vw,6.25rem)] leading-[0.96] text-foreground max-w-[14ch]">
                  A second layer
                  <br />
                  of <span className="text-signal">spatial</span> awareness.
                </h1>
              </div>

              <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
                <div
                  className="relative w-full max-w-[min(100%,720px)] sm:max-w-[44rem] lg:max-w-[min(100%,880px)] xl:max-w-[min(1100px,92vw)] will-change-transform"
                  style={productStyle}
                >
                  <div className="relative z-[1] aspect-square w-full">
                    {frameCount > 0 && (
                      <>
                        <img
                          src={BELT_FRAME_URLS[i0]}
                          alt="Theia belt prototype — scroll to rotate through frames"
                          className="absolute inset-0 h-full w-full object-contain object-center select-none"
                          style={{ opacity: w0 }}
                          draggable={false}
                          decoding="async"
                          loading="eager"
                        />
                        {i0 !== i1 && (
                          <img
                            src={BELT_FRAME_URLS[i1]}
                            alt=""
                            className="absolute inset-0 h-full w-full object-contain object-center select-none"
                            style={{ opacity: w1 }}
                            draggable={false}
                            decoding="async"
                            loading="eager"
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-auto flex justify-center pb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground"
              style={{ opacity: hintOpacity }}
              aria-hidden
            >
              Scroll
            </div>
          </div>
        </div>
      </div>

      {/* Rest of overview — scrolls in after the scrub stage */}
      <div className="relative overflow-x-clip border-t border-hairline bg-background pb-24 pt-16 md:pb-32 md:pt-20">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, hsl(var(--signal) / 0.08), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mt-2 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="text-[20px] md:text-[22px] leading-relaxed text-muted-foreground max-w-2xl">
                Theia is a wearable assistive belt that helps blind and low-vision
                users sense nearby obstacles through lightweight haptic or audio
                feedback.
              </p>
              <p className="mt-5 text-sm font-mono uppercase tracking-[0.18em] text-foreground/80">
                Designed to support the white cane &mdash; not replace it.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/product"
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 text-[12px] font-mono uppercase tracking-[0.2em] hover:bg-signal hover:text-background transition-colors"
                >
                  See how it works
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center gap-3 border border-hairline px-6 py-4 text-[12px] font-mono uppercase tracking-[0.2em] hover:border-signal hover:text-signal transition-colors"
                >
                  View prototype
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-px bg-hairline border border-hairline">
              {tiles.map(([n, t]) => (
                <div key={n} className="bg-background p-5">
                  <div className="text-signal micro-label mb-2">{n}</div>
                  <div className="text-sm font-display">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
