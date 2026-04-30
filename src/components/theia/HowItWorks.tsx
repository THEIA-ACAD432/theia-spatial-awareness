import hapticImg from "@/assets/theia-haptic.jpg";
import diagramImg from "@/assets/theia-diagram.jpg";

const steps = [
  {
    n: "01",
    title: "Sense",
    body: "Upward and forward-facing sensors scan the volume above the cane — the chest, face, and overhead arc.",
  },
  {
    n: "02",
    title: "Interpret",
    body: "On-device processing classifies threats by proximity, velocity, and elevation. Signal — not noise.",
  },
  {
    n: "03",
    title: "Vibrate",
    body: "Directional haptic pulses at the waist communicate hazard location in under 60 milliseconds.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 lg:py-32 border-t border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <div className="font-mono-tag text-signal mb-4">02 / How it works</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-graphite leading-[0.92] tracking-[-0.035em]">
              Built around how
              <br />
              people <span className="italic font-light text-graphite-soft">already</span> move.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
              Halo doesn&apos;t replace the cane. It extends it — silently, in the
              background, through the language the body already understands.
            </p>
          </div>
        </div>

        {/* Three step row */}
        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline mb-20">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-ivory p-7 lg:p-10 transition-colors duration-500 hover:bg-ivory-deep"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-mono-tag text-signal">{s.n}</span>
                <span className="font-mono-tag text-graphite-soft/40">
                  STEP {i + 1} / 3
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-graphite mb-5 tracking-[-0.03em]">
                {s.title}
              </h3>
              <p className="text-graphite-soft leading-relaxed text-pretty max-w-xs">
                {s.body}
              </p>
              <div className="mt-8 h-px w-12 bg-graphite-soft/20 group-hover:w-24 group-hover:bg-signal transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Mixed-media layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <figure className="lg:col-span-5 relative aspect-square overflow-hidden bg-ivory-deep">
            <img
              src={hapticImg}
              alt="Macro detail of haptic vibration motor module"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono-tag text-ivory mix-blend-difference">
              <span>FIG. 04 / HAPTIC MODULE</span>
              <span className="opacity-70">CUTAWAY</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-3">
            <div className="font-mono-tag text-signal mb-4">PRINCIPLE</div>
            <p className="font-display text-2xl md:text-3xl text-graphite leading-tight tracking-[-0.025em]">
              Augment, never replace.
              <br />
              <span className="text-graphite-soft italic font-light">Inform, never instruct.</span>
            </p>
          </div>

          <figure className="lg:col-span-4 relative aspect-square overflow-hidden bg-ivory-deep">
            <img
              src={diagramImg}
              alt="Sensor field cone diagram"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono-tag text-graphite-soft">
              <span>FIG. 05 / FIELD</span>
              <span className="opacity-70">180° ARC</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
