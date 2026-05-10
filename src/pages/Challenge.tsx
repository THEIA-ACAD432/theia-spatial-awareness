import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

const Citation = ({ quote, source }: { quote: string; source: string }) => (
  <blockquote className="border-l-2 border-signal pl-5 py-1">
    <p className="text-graphite-soft leading-relaxed text-pretty italic">&ldquo;{quote}&rdquo;</p>
    <cite className="font-mono-tag text-signal not-italic mt-3 block">{source}</cite>
  </blockquote>
);

const Overview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-28 lg:py-40 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Challenge / 01</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-graphite leading-[1.02] tracking-[-0.025em]">
                  The case
                  <br />
                  for <span className="text-signal italic font-light">Halo.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  The gap in the cane&rsquo;s reach. The evidence behind it. The opportunity above it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Challenge */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Challenge</div>

            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-graphite leading-[1.05] tracking-[-0.022em] mb-10">
                The cane only
                <br />
                sees the ground.
              </h2>

              <div className="space-y-7 text-base md:text-lg text-graphite leading-relaxed text-pretty">
                <p>
                  The white cane is the best mobility tool ever built. It has one ceiling: anything above the waist stays invisible to it. Katzschmann and the MIT ALVU team put the gap directly:
                </p>

                <Citation
                  quote="A key problem for white cane users is their inability to detect high obstacles hanging above the ground, e.g. tree branches."
                  source="Katzschmann et al., p. 10"
                />

                <p>
                  That&rsquo;s the problem worth solving. Touch covers the ground. Chest- and head-level obstacles don&rsquo;t get caught until contact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Problem Statement */}
        <section className="py-28 lg:py-40 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / Problem Statement</div>

            <div className="max-w-3xl">
              {/* Pull quote */}
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-graphite leading-[1.3] tracking-[-0.018em] font-light mb-12 pb-12 border-b border-hairline">
                &ldquo;The barrier isn&rsquo;t physical navigation. It&rsquo;s the{" "}
                <span className="text-signal italic">invisible layer of context</span>{" "}
                that surrounds every journey.&rdquo;
              </p>

              <div className="space-y-7 text-base md:text-lg text-graphite leading-relaxed text-pretty">
                <p>
                  Touch covers the ground. The context sighted people take for granted &mdash; uncertainty, dignity, cognitive load &mdash; is missing. The cap on independence isn&rsquo;t physical.
                </p>

                <p>
                  And whatever closes that gap has to feel okay to wear. Katzschmann&rsquo;s user study confirmed exactly that bar:
                </p>

                <Citation
                  quote="Subjects felt overall comfortable wearing the hands-free and discreet system (70%)."
                  source="Katzschmann et al., p. 10"
                />

                <p>
                  Discreet matters. The product can&rsquo;t read as medical. If it does, users won&rsquo;t wear it &mdash; and detection performance is irrelevant if the device sits in a drawer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Opportunity */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / Opportunity</div>

            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-graphite leading-[1.05] tracking-[-0.022em] mb-10">
                Complete it.
                <br />
                <span className="text-graphite-soft italic font-light">Don&rsquo;t replace it.</span>
              </h2>

              <div className="space-y-7 text-base md:text-lg text-graphite leading-relaxed text-pretty">
                <p>
                  The cane owns the ground. Theia builds for everything above it. The most direct evidence that this gap is worth solving comes from the same MIT ALVU paper:
                </p>

                <Citation
                  quote="Downward-pointing sensors see not just obstacles but also distinct changes in elevation, such as sidewalks and stairs, that are hard for white cane users to easily detect. In a similar manner, upward-pointing sensors see chest- and face-level obstacles, such as branches and overhanging ledges, that are even more of a danger to a blind person."
                  source="Katzschmann et al., p. 10"
                />

                <p>
                  The same study showed users picked up the haptic language quickly &mdash; 93% found it easy to understand and 91% familiarized themselves with the device almost immediately. The learning curve isn&rsquo;t the barrier some assume it to be.
                </p>

                <p>
                  Where to put the sensors is also settled by the literature. The waist is the right place &mdash; not for aesthetics, but for body mechanics:
                </p>

                <Citation
                  quote="The waist is located close to the body's center of mass and it functions like a hinge for the legs and the upper body, so it moves relatively little while a person is walking, unlike the legs or upper body."
                  source="Katzschmann et al., p. 4"
                />

                <p className="text-graphite font-medium border-l-2 border-signal pl-4 not-italic">
                  Halo doesn&rsquo;t replace the cane. It completes it.
                </p>
              </div>

              <Link
                to="/product"
                className="inline-flex items-center gap-2 mt-10 px-4 py-2.5 bg-graphite text-ivory text-sm font-medium hover:bg-signal hover:text-graphite transition-all duration-300"
              >
                See the device <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 04 / Solution */}
        <section className="relative py-28 lg:py-40 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Solution</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.05] tracking-[-0.022em] mb-8">
                  Three functions.
                  <br />
                  <span className="text-signal italic font-light">One system.</span>
                </h2>
                <p className="text-base md:text-lg text-ivory/70 leading-relaxed text-pretty max-w-xl">
                  A belt-worn wearable built around three functions. Each addresses a specific gap above the cane.
                </p>
              </div>
            </div>

            {/* Three function cards */}
            <div className="grid md:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10 mb-16">
              {[
                {
                  n: "01",
                  title: "Proximity Detection",
                  body: "Continuous scan for static, overhead, and approaching obstacles above the cane.",
                },
                {
                  n: "02",
                  title: "Haptic Intelligence",
                  body: "Vibration patterns carry direction and proximity. No audio, no screen, hands free.",
                },
                {
                  n: "03",
                  title: "Cane Compatible",
                  body: "Layers on top of the white cane. Worn alongside, never in place of it.",
                },
              ].map((s) => (
                <div key={s.n} className="group bg-graphite p-7 lg:p-10 hover:bg-graphite-soft/20 transition-colors duration-500">
                  <div className="flex items-start justify-between mb-10">
                    <span className="font-mono-tag text-signal">{s.n}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory mb-5 tracking-[-0.03em]">
                    {s.title}
                  </h3>
                  <p className="text-ivory/60 leading-relaxed text-pretty">
                    {s.body}
                  </p>
                  <div className="mt-8 h-px w-12 bg-ivory/20 group-hover:w-24 group-hover:bg-signal transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* Solution citations */}
            <div className="grid lg:grid-cols-2 gap-8 pt-8 border-t border-ivory/10">
              <div>
                <div className="font-mono-tag text-ivory/40 mb-4">DETECTION ACCURACY BENCHMARK</div>
                <blockquote className="border-l-2 border-signal pl-5 py-1">
                  <p className="text-ivory/60 leading-relaxed italic">&ldquo;The ground plane checking system succeeded in achieving an overall recognition rate of 93.10%, with an overall false positive rate of 2.72% and average false negative rate of 4.25%.&rdquo;</p>
                  <cite className="font-mono-tag text-signal not-italic mt-3 block">Chai and Lau, p. 1 (Abstract)</cite>
                </blockquote>
              </div>
              <div>
                <div className="font-mono-tag text-ivory/40 mb-4">CANE COMPATIBILITY CONFIRMED</div>
                <blockquote className="border-l-2 border-signal pl-5 py-1">
                  <p className="text-ivory/60 leading-relaxed italic">&ldquo;If a user desires direct haptic feedback from the ground in front, ALVU's design allows a white cane to be used simultaneously.&rdquo;</p>
                  <cite className="font-mono-tag text-signal not-italic mt-3 block">Katzschmann et al., p. 10</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Overview;
