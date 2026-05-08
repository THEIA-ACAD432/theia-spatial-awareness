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
        <section className="relative py-20 lg:py-28 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Overview / 00</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[11vw] sm:text-[8vw] lg:text-[6.5vw] text-graphite leading-[0.88] tracking-[-0.04em]">
                  The case
                  <br />
                  for <span className="text-signal italic font-light">Theia.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  From the gap in the cane's reach to a belt-worn solution — the problem, the evidence, and the opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Challenge */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Challenge</div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-graphite leading-[0.92] tracking-[-0.035em] mb-8">
                  The cane has
                  <br />
                  <span className="text-graphite-soft italic font-light">a hard ceiling.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-5">
                  The white cane is one of the most effective mobility tools ever designed — real-time tactile feedback, trusted for decades. But it has a hard ceiling, literally. Everything above waist height is invisible to it.
                </p>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-5">
                  The cane also occupies one hand, requires direct contact with the environment, and carries social stigma — and the stigma matters. User comfort and integration into daily routines determine whether assistive tech actually gets used.
                </p>
                <p className="text-base text-graphite-soft leading-relaxed text-pretty">
                  The gap isn't only physical. Navigating public spaces blind means missing the social and environmental context sighted people absorb automatically — who's nearby, what's approaching, where hazards are forming. What users want from assistive tools isn't just safer movement. It's independence, dignity, and inclusion.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="font-mono-tag text-graphite-soft/60 mb-4">EVIDENCE — THE FULL GAP</div>
                <Citation
                  quote="Upward-pointing sensors see chest- and face-level obstacles, such as branches and overhanging ledges, that are even more of a danger to a blind person."
                  source="Katzschmann et al., p. 10"
                />
                <Citation
                  quote="White canes are unable to detect obstacles beyond their range."
                  source="Xu et al., p. 1"
                />
                <Citation
                  quote="User comfort and ease of integration into daily routines significantly impact usability and adoption."
                  source="Naidoo & Ghaziasgar, 2025"
                />
                <Citation
                  quote="Solutions must respect users' individuality and contribute to empowerment and inclusion."
                  source="Duckett & Pratt, 2001"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Problem Statement */}
        <section className="py-20 lg:py-28 border-b border-hairline bg-ivory-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">02 / Problem Statement</div>

            {/* Full-width pull quote */}
            <div className="mb-16 pb-16 border-b border-hairline">
              <p className="font-display text-[5.5vw] sm:text-[4vw] lg:text-[3vw] text-graphite leading-[1.15] tracking-[-0.03em] max-w-5xl">
                "The barrier isn't physical navigation — it's the{" "}
                <span className="text-signal italic font-light">invisible layer of context</span>{" "}
                that surrounds every journey."
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6 lg:col-start-1">
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-6">
                  Blind cane users can physically navigate their environment using tactile feedback, but they lack access to the visual and social context that sighted people rely on. This gap creates uncertainty in public spaces, diminishes social dignity, and increases cognitive load — ultimately limiting true independence in everyday life.
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <div className="bg-ivory border border-hairline p-6 lg:p-8">
                  <div className="font-mono-tag text-signal mb-6">DIGNITY + SOCIAL STIGMA</div>
                  <div className="space-y-6">
                    <Citation
                      quote="White canes have several flaws. They are often stigmatized."
                      source="Katzschmann et al., p. 1"
                    />
                    <Citation
                      quote="Subjects felt overall comfortable wearing the hands-free and discreet system (70%)."
                      source="Katzschmann et al., p. 10"
                    />
                    <Citation
                      quote="User comfort and ease of integration into daily routines significantly impact usability and adoption."
                      source="Naidoo & Ghaziasgar, 2025, p. 21"
                    />
                    <Citation
                      quote="The assistive device should be light and easy to use."
                      source="Bouteraa, 2021, p. 5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Opportunity */}
        <section className="py-20 lg:py-28 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">03 / Opportunity</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-graphite leading-[0.92] tracking-[-0.035em] mb-8">
                  The cane owns
                  <br />
                  <span className="text-graphite-soft italic font-light">the ground.</span>
                </h2>
                <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty mb-6">
                  That role is settled and irreplaceable. The opportunity is everything above it. A belt-worn wearable that detects above-waist hazards and communicates them passively — without disrupting existing habits or requiring a new behavior to learn — fills that gap directly.
                </p>
                <p className="text-lg md:text-xl text-graphite font-medium leading-relaxed border-l-2 border-signal pl-4">
                  Theia doesn't replace the cane. It completes it.
                </p>
                <Link
                  to="/product"
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 bg-graphite text-ivory text-sm font-medium hover:bg-signal hover:text-graphite transition-all duration-300"
                >
                  See the device <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 space-y-6">
                <div>
                  <div className="font-mono-tag text-graphite-soft/60 mb-4">OVERHEAD HAZARDS ARE THE REAL GAP</div>
                  <Citation
                    quote="Downward-pointing sensors see not just obstacles but also distinct changes in elevation, such as sidewalks and stairs, that are hard for white cane users to easily detect. In a similar manner, upward-pointing sensors see chest- and face-level obstacles, such as branches and overhanging ledges, that are even more of a danger to a blind person."
                    source="Katzschmann et al., p. 10"
                  />
                </div>

                <div>
                  <div className="font-mono-tag text-graphite-soft/60 mb-4">HAPTIC FEEDBACK IS INTUITIVE AND FAST TO LEARN</div>
                  <Citation
                    quote="93% of the subjects viewed ALVU's vibratory feedback easy to understand... They were able to quickly familiarize themselves with ALVU (91%)."
                    source="Katzschmann et al., p. 10"
                  />
                </div>

                <div className="bg-ivory-deep border border-hairline p-6">
                  <div className="font-mono-tag text-signal mb-5">BELT PLACEMENT RATIONALE</div>
                  <div className="space-y-5">
                    <Citation
                      quote="The waist is located close to the body's center of mass and it functions like a hinge for the legs and the upper body, so it moves relatively little while a person is walking, unlike the legs or upper body."
                      source="Katzschmann et al., p. 4"
                    />
                    <Citation
                      quote="Fitting more than three sensors in a discreet manner into a gender-neutral hat was not possible."
                      source="Katzschmann et al., p. 4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / Solution */}
        <section className="relative py-20 lg:py-28 bg-graphite text-ivory overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">04 / Solution</div>

            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[0.92] tracking-[-0.035em] mb-8">
                  Three functions.
                  <br />
                  <span className="text-signal italic font-light">One system.</span>
                </h2>
                <p className="text-base md:text-lg text-ivory/70 leading-relaxed text-pretty">
                  Theia is a belt-worn wearable built around three core functions, each addressing a distinct failure mode of the white cane in the spatial layer above the ground.
                </p>
              </div>
            </div>

            {/* Three function cards with embedded evidence */}
            <div className="grid md:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10 mb-16">
              {[
                {
                  n: "01",
                  title: "Proximity Detection",
                  body: "Onboard cameras and ToF sensors scan continuously for static, overhead, and approaching obstacles above the cane's reach.",
                  stat: "93.1%",
                  statLabel: "RECOGNITION ACCURACY · FP RATE < 3%",
                  cite: "Chai & Lau",
                },
                {
                  n: "02",
                  title: "Haptic Intelligence",
                  body: "Vibration patterns communicate hazard direction and proximity in real time. No audio distraction, no screen, no second tool to manage.",
                  stat: "70%",
                  statLabel: "FELT COMFORTABLE WEARING A HANDS-FREE, DISCREET SYSTEM",
                  cite: "Katzschmann et al.",
                },
                {
                  n: "03",
                  title: "Cane Compatibility",
                  body: "Theia doesn't replace the cane. It layers on top of the existing white cane ecosystem without changing how users already move.",
                  stat: "Both",
                  statLabel: "BELT-WORN HAPTIC DESIGNED FOR SIMULTANEOUS CANE USE",
                  cite: "Katzschmann et al.",
                },
              ].map((s) => (
                <div key={s.n} className="group bg-graphite p-7 lg:p-10 hover:bg-graphite-soft/20 transition-colors duration-500 flex flex-col">
                  <div className="flex items-start justify-between mb-10">
                    <span className="font-mono-tag text-signal">{s.n}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory mb-5 tracking-[-0.03em]">
                    {s.title}
                  </h3>
                  <p className="text-ivory/60 leading-relaxed text-pretty mb-8">
                    {s.body}
                  </p>
                  <div className="mt-auto pt-6 border-t border-ivory/10">
                    <div className="font-display text-3xl text-signal tracking-[-0.03em] leading-none mb-2">{s.stat}</div>
                    <div className="font-mono-tag text-ivory/40 leading-relaxed mb-2">{s.statLabel}</div>
                    <div className="font-mono-tag text-ivory/30">— {s.cite}</div>
                  </div>
                  <div className="mt-6 h-px w-12 bg-ivory/20 group-hover:w-24 group-hover:bg-signal transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* Closing line */}
            <div className="pt-12 border-t border-ivory/10">
              <p className="font-display text-[6vw] sm:text-[4.5vw] lg:text-[3.5vw] text-ivory leading-[1.05] tracking-[-0.03em] max-w-5xl">
                The white cane owns the ground.
                <br />
                <span className="text-signal italic font-light">Theia owns everything else.</span>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Overview;
