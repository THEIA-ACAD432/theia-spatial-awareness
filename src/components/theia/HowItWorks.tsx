const steps = [
  {
    n: "01",
    title: "Sense",
    body: "Upward and forward-facing sensors continuously scan the spatial volume above the cane's reach — the chest, face, and overhead arc.",
  },
  {
    n: "02",
    title: "Interpret",
    body: "On-device processing classifies threats by proximity, velocity, and elevation. Signal — not noise — only what matters reaches the user.",
  },
  {
    n: "03",
    title: "Vibrate",
    body: "Directional haptic pulses at the waist communicate hazard location in under 60ms. No audio, no screens, no learning curve.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-28 lg:py-36 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <div className="font-mono-tag text-signal mb-4">02 — How Theia works</div>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-graphite leading-tight text-balance">
            Built around how people <span className="italic text-graphite-soft">already</span> move.
          </h2>
          <p className="mt-6 text-lg text-graphite-soft text-pretty leading-relaxed">
            Theia doesn&apos;t replace the cane. It extends it — silently, in the background, through the language the body already understands: touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative bg-ivory p-8 lg:p-10 transition-colors duration-500 hover:bg-ivory-deep"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-mono-tag text-graphite-soft">{s.n}</span>
                <span className="w-2 h-2 rounded-full bg-signal/30 group-hover:bg-signal transition-colors duration-500" />
              </div>
              <h3 className="font-serif-display text-3xl text-graphite mb-4">{s.title}</h3>
              <p className="text-graphite-soft leading-relaxed text-pretty">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Principle row */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center pt-16 border-t border-hairline">
          <div>
            <div className="font-mono-tag text-graphite-soft mb-3">Design principle</div>
            <p className="font-serif-display text-3xl md:text-4xl text-graphite leading-tight text-balance">
              Augment, never replace. Inform, never instruct.
            </p>
          </div>
          <div className="space-y-4 text-graphite-soft text-pretty">
            <p>
              The cane gives the ground. Theia gives the air. Together they form a complete picture of the space ahead — without occupying a hand, requiring focus, or producing sound that masks the environment.
            </p>
            <p>
              Worn at the waist, it disappears into routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
