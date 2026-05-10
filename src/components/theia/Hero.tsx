import { Link } from "react-router-dom";

const tiles = [
  ["01", "Proximity sensing"],
  ["02", "Haptic zones"],
  ["03", "Control module"],
  ["04", "Cane-compatible"],
];

const Hero = () => {
  return (
    <section
      id="overview"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--signal) / 0.12), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Top meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-signal" />
            <span>Spatial awareness companion</span>
          </div>
          <div className="flex items-center gap-6">
            <span>v0.2 &mdash; prototype</span>
            <span className="hidden md:inline">2026 &mdash; pilot phase</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display font-medium tracking-[-0.03em] text-[clamp(3rem,8.5vw,7rem)] leading-[0.96] max-w-[14ch] text-foreground">
          A second layer
          <br />
          of <span className="text-signal">spatial</span> awareness.
        </h1>

        {/* Body + tiles */}
        <div className="mt-12 grid md:grid-cols-12 gap-10 items-end">
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

          {/* 4-tile grid */}
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
    </section>
  );
};

export default Hero;
