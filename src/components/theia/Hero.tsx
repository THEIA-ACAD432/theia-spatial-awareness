import deviceImg from "@/assets/theia-device-hero.jpg";
import contextImg from "@/assets/halobelt.png";
import diagramImg from "@/assets/theia-diagram.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" aria-hidden />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top meta strip */}
        <div className="flex items-center justify-between mb-12 lg:mb-16 animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="signal-dot" />
            <span className="font-mono-tag text-graphite-soft">Wearable spatial awareness</span>
          </div>
          <div className="font-mono-tag text-graphite-soft/60 hidden sm:block">
            N 40.7128° · W 74.0060° / FIELD UNIT 001
          </div>
        </div>

        {/* Headline grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8 animate-fade-up">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-graphite leading-[1.0] tracking-[-0.03em]">
              See what
              <br />
              the cane
              <br />
              <span className="text-signal italic font-light">can&apos;t.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty max-w-md">
              A belt-worn wearable that catches the hazards a white cane misses. Overhead, approaching, above the waist. Translated into <span className="text-signal font-medium">haptic vibration</span> in real time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#product"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-graphite text-ivory text-sm font-medium hover:bg-signal hover:text-graphite transition-all duration-300"
              >
                Meet Halo <span aria-hidden>&rarr;</span>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-graphite border border-graphite/20 hover:border-graphite transition-colors"
              >
                How it works
              </a>
            </div>
          </div>
        </div>

        {/* Image collage */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {/* Big context shot */}
          <figure className="col-span-12 md:col-span-7 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-ivory-deep group">
            <img
              src={contextImg}
              alt="Person using Halo belt device while walking with a white cane on an urban sidewalk"
              width={1280}
              height={1600}
              className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            />
            <figcaption className="absolute top-4 left-4 right-4 flex items-start justify-between font-mono-tag text-ivory mix-blend-difference">
              <span>FIG. 01 / IN SITU</span>
              <span className="opacity-70">35MM · GOLDEN HR</span>
            </figcaption>
            <figcaption className="absolute bottom-4 left-4 right-4 font-mono-tag text-ivory mix-blend-difference">
              Worn at the waist · invisible to onlookers
            </figcaption>
          </figure>

          {/* Right column stack */}
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-4">
            <figure className="relative aspect-square md:aspect-auto overflow-hidden bg-ivory-deep group">
              <img
                src={deviceImg}
                alt="Halo, a belt with sensors and haptic feedback built in, worn at the waist"
                width={1280}
                height={1280}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
              />
              <figcaption className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono-tag text-ivory mix-blend-difference">
                <span>FIG. 02 / DEVICE</span>
                <span className="opacity-70">42 × 58 MM</span>
              </figcaption>
            </figure>
            <figure className="relative aspect-square md:aspect-auto overflow-hidden bg-ivory-deep">
              <img
                src={diagramImg}
                alt="Diagram of upward-facing spatial awareness sensor cone"
                width={1280}
                height={1280}
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono-tag text-graphite-soft">
                <span>FIG. 03 / SENSOR FIELD</span>
                <span className="opacity-70">180° ARC</span>
              </figcaption>
              <figcaption className="absolute bottom-3 left-3 right-3 font-mono-tag text-graphite-soft">
                Forward + overhead detection
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
          {[
            { k: "180°", v: "Detection arc", n: "01" },
            { k: "<60ms", v: "Haptic latency", n: "02" },
            { k: "0", v: "Hands occupied", n: "03" },
            { k: "Silent", v: "No audio · no screens", n: "04" },
          ].map((s) => (
            <div key={s.v} className="bg-ivory p-5 md:p-7">
              <div className="font-mono-tag text-signal mb-3">{s.n}</div>
              <div className="font-display text-3xl md:text-4xl text-graphite">{s.k}</div>
              <div className="font-mono-tag text-graphite-soft mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
