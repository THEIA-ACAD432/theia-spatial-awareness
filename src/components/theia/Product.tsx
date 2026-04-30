import deviceImg from "@/assets/theia-device-hero.jpg";

const features = [
  {
    n: "A",
    title: "Ultrasonic sensor array",
    body: "Forward and upward-facing sensors continuously scan the volume above the cane's reach — chest, face, and overhead.",
  },
  {
    n: "B",
    title: "On-device interpretation",
    body: "Proximity, velocity, and elevation are classified locally. Only relevant threats produce a signal — never noise.",
  },
  {
    n: "C",
    title: "Directional haptic motor",
    body: "Pulses at the waist communicate hazard location through a language the body already understands: touch.",
  },
  {
    n: "D",
    title: "All-day battery",
    body: "Designed to disappear into routine. Wear it from morning commute to evening walk without thinking about it.",
  },
];

const Product = () => {
  return (
    <section id="product" className="relative py-24 lg:py-32 border-t border-hairline bg-ivory-deep">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <div className="font-mono-tag text-signal mb-4">01 / The product</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-graphite leading-[0.92] tracking-[-0.035em]">
              A second sense,
              <br />
              <span className="italic font-light text-graphite-soft">worn at the waist.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="text-lg md:text-xl text-graphite leading-relaxed text-pretty">
              Halo clips to a belt and sits where the body naturally carries weight.
              No screens. No earpieces. No additional cognitive load. Just a quiet
              extension of the user&apos;s own spatial awareness.
            </p>
          </div>
        </div>

        {/* Feature grid with image */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Image column */}
          <div className="lg:col-span-6 lg:row-span-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory sticky top-24">
              <img
                src={deviceImg}
                alt="Detail view of the Halo device showing sensor array and amber indicator"
                width={1280}
                height={1600}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Annotation pins */}
              <div className="absolute top-[28%] left-[42%] flex items-center gap-3 group">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-signal" />
                </span>
                <div className="font-mono-tag text-ivory bg-graphite px-2 py-1">SENSOR ARRAY</div>
              </div>
              <div className="absolute top-[55%] left-[38%] flex items-center gap-3">
                <span className="w-3 h-3 rounded-full border-2 border-signal" />
                <div className="font-mono-tag text-ivory bg-graphite px-2 py-1">STATUS LED</div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono-tag text-ivory mix-blend-difference">
                <span>HALO / UNIT 001</span>
                <span className="opacity-70">SCALE 1:1</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-hairline border border-hairline self-start">
            {features.map((f) => (
              <div key={f.n} className="bg-ivory p-6 lg:p-8 group hover:bg-ivory-deep transition-colors duration-500">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono-tag text-signal">POINT {f.n}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-graphite-soft/30 group-hover:bg-signal transition-colors" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-graphite mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-graphite-soft leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
