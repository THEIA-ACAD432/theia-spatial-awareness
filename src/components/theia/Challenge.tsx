const Challenge = () => {
  return (
    <section id="challenge" className="relative py-24 lg:py-32 border-t border-hairline bg-graphite text-ivory overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="font-mono-tag text-signal mb-4">03 / The why</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-[0.92] tracking-[-0.035em]">
              Above the waist,
              <br />
              <span className="italic font-light text-ivory/50">the world goes dark.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6 space-y-6">
            <p className="text-lg md:text-xl text-ivory/90 leading-relaxed text-pretty">
              The white cane is one of the most effective mobility tools ever
              designed. But it only protects from the ground up — leaving
              overhead obstacles, approaching people, and spatial hazards above
              waist height completely invisible.
            </p>
            <p className="text-base text-ivory/60 leading-relaxed text-pretty">
              Theia exists to close that gap. Not as a replacement, but as a
              quiet companion that gives users back the air above their reach.
            </p>
          </div>
        </div>

        {/* Stats / contrast row */}
        <div className="grid sm:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10">
          {[
            { k: "0%", v: "Of overhead hazards detected by a traditional cane" },
            { k: "Waist-high", v: "Maximum point-contact range of a cane" },
            { k: "Daily", v: "Frequency of overhead hazard encounters in urban areas" },
          ].map((s, i) => (
            <div key={i} className="bg-graphite p-7 lg:p-10">
              <div className="font-display text-5xl md:text-6xl text-signal tracking-[-0.03em] mb-4">
                {s.k}
              </div>
              <div className="text-sm text-ivory/60 leading-relaxed max-w-[20ch]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;
