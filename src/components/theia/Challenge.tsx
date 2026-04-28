const Challenge = () => {
  return (
    <section id="challenge" className="relative py-28 lg:py-36 border-t border-hairline bg-ivory-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="font-mono-tag text-signal mb-4">01 — The challenge</div>
              <h2 className="font-serif-display text-4xl md:text-5xl text-graphite leading-tight text-balance">
                Above the waist, the world goes dark.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <p className="text-xl md:text-2xl text-graphite leading-relaxed font-serif-display">
              The white cane is one of the most effective mobility tools ever designed — providing essential tactile navigation and physical obstacle detection. But it only protects from the ground up.
            </p>
            <p className="text-base md:text-lg text-graphite-soft leading-relaxed text-pretty">
              Overhead obstacles, approaching people, and spatial hazards above waist height remain completely invisible. Beyond physical navigation, users also lack access to social interpretation, digital interaction, and environmental context.
            </p>

            {/* Citation card */}
            <figure className="relative mt-12 p-8 md:p-10 bg-ivory border border-hairline shadow-soft">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-signal" />
              <div className="font-mono-tag text-graphite-soft mb-6">Citation · Katzschmann et al.</div>

              <blockquote className="font-serif-display text-2xl md:text-3xl text-graphite leading-snug mb-8 text-balance">
                &ldquo;Overhead hazards are the real gap.&rdquo;
              </blockquote>

              <div className="space-y-5 text-sm md:text-base text-graphite-soft leading-relaxed border-l-2 border-signal pl-5">
                <p>
                  &ldquo;Upward-pointing sensors see chest- and face-level obstacles, such as branches and overhanging ledges, that are even more of a danger to a blind person.&rdquo;
                  <span className="block font-mono-tag mt-2 text-graphite/50">— Page 10</span>
                </p>
                <p>
                  &ldquo;White canes have several flaws. They are often stigmatized, require physical exertion, occupy one hand, need physical contact with the environment, and can only detect obstacles by point contact at heights up to the users&apos; chests.&rdquo;
                  <span className="block font-mono-tag mt-2 text-graphite/50">— Page 1</span>
                </p>
                <p>
                  &ldquo;A key problem for white cane users is their inability to detect high obstacles hanging above the ground, e.g. tree branches.&rdquo;
                  <span className="block font-mono-tag mt-2 text-graphite/50">— Page 10</span>
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
