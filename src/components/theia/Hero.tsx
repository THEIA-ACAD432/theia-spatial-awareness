import deviceImg from "@/assets/theia-device.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <span className="signal-dot" />
              <span className="font-mono-tag text-graphite-soft">Spatial awareness · v0.1</span>
            </div>

            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-graphite text-balance">
              See what the cane <span className="italic text-graphite-soft">can&apos;t.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-graphite-soft max-w-xl text-pretty leading-relaxed">
              Theia is a belt-worn wearable that detects overhead hazards and approaching objects —
              the persistent blind spot above the cane — and translates them into haptic vibration in real time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#challenge"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-graphite text-ivory text-sm font-medium hover:bg-graphite-soft transition-all duration-300 shadow-soft"
              >
                The challenge
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium text-graphite border-b border-graphite/30 hover:border-signal hover:text-signal transition-colors"
              >
                How it works
              </a>
            </div>

            {/* Stat strip */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "0°–180°", v: "Overhead arc" },
                { k: "<60ms", v: "Haptic latency" },
                { k: "Hands-free", v: "Belt-worn" },
              ].map((s) => (
                <div key={s.v} className="border-l border-hairline pl-3">
                  <div className="font-mono text-sm text-graphite">{s.k}</div>
                  <div className="font-mono-tag text-graphite-soft mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Device */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square max-w-xl mx-auto">
              {/* Radar rings */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                <div className="absolute w-2/3 h-2/3 rounded-full border border-signal/30 animate-radar-sweep" style={{ animationDelay: "0s" }} />
                <div className="absolute w-2/3 h-2/3 rounded-full border border-signal/30 animate-radar-sweep" style={{ animationDelay: "1s" }} />
                <div className="absolute w-2/3 h-2/3 rounded-full border border-signal/30 animate-radar-sweep" style={{ animationDelay: "2s" }} />
                <div className="absolute inset-0 bg-gradient-radar" />
              </div>

              <img
                src={deviceImg}
                alt="Theia belt-worn spatial awareness device"
                width={1536}
                height={1536}
                className="relative z-10 w-full h-full object-contain animate-float-gentle"
              />

              {/* Annotations */}
              <div className="hidden md:block absolute top-[28%] right-2 z-20 text-right">
                <div className="font-mono-tag text-graphite-soft">Sensor array</div>
                <div className="ml-auto mt-1 w-12 h-px bg-graphite/30" />
              </div>
              <div className="hidden md:block absolute bottom-[24%] left-2 z-20">
                <div className="font-mono-tag text-graphite-soft">Haptic module</div>
                <div className="mt-1 w-12 h-px bg-graphite/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
