import contextImg from "@/assets/halobelt.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={contextImg}
        alt="Person wearing the Halo belt while walking with a white cane"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" aria-hidden />

      <div className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-between pt-28 pb-12">
        <div className="flex items-center justify-between animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="signal-dot" />
            <span className="font-mono-tag text-ivory/80">Theia · Halo</span>
          </div>
          <div className="font-mono-tag text-ivory/50 hidden sm:block">
            FIELD UNIT 001
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl text-ivory leading-[0.95] tracking-[-0.03em] max-w-5xl">
            Spatial awareness,
            <br />
            <span className="text-signal italic font-light">worn.</span>
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/product"
              className="inline-flex items-center gap-2 px-5 py-3 bg-ivory text-graphite text-sm font-medium hover:bg-signal transition-all duration-300"
            >
              Meet Halo <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="/challenge"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ivory border border-ivory/40 hover:border-ivory hover:bg-ivory/10 transition-colors"
            >
              The challenge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
