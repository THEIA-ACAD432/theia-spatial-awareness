import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

import brianImg from "@/assets/team-brian.jpg";
import kenImg from "@/assets/team-ken.jpg";
import kenzieImg from "@/assets/team-kenzie.jpg";
import joseImg from "@/assets/team-jose.jpg";
import estherImg from "@/assets/team-esther.jpg";
import christineImg from "@/assets/team-christine.png";

const members = [
  {
    n: "01",
    name: "Brian Camilo",
    role: "Product Manager",
    initials: "B",
    img: brianImg,
    bio: [
      "Conducted foundational user research with a visually impaired individual, synthesizing insights that shaped the product’s core direction around wearability, social inclusion, and real-world navigation gaps. Served as the primary test subject for the wearable, informing usability and form factor decisions from firsthand experience. Built out the majority of the website’s content structure and research foundation.",
      "Holds a B.S. in Computer Science and is currently completing an M.S. in Integrated Design, Business, and Technology at USC, with two years of PM experience focused on 0-to-1 product development.",
    ],
  },
  {
    n: "02",
    name: "Ken Chin",
    role: "Physical Product Design",
    initials: "K",
    img: kenImg,
    bio: [
      "Led the product design, form development, and presentation website structure for THEIA. Translated the electronic architecture into a refined wearable form through CAD modeling, ergonomic iteration, internal component packaging, and fabrication planning. Balanced sensor placement, belt construction, wearability, manufacturability, and visual communication while producing high-fidelity 3D renderings that helped move THEIA from concept into a buildable prototype and presentation-ready product system.",
      "Holds a B.S. in Product Design from ArtCenter College of Design and is currently completing an M.S. in Integrated Design, Business, and Technology at USC’s Iovine and Young Academy. His work focuses on the intersection of product design, hardware prototyping, brand strategy, and health innovation, with an emphasis on translating technical concepts into human-centered, manufacturable product experiences.",
    ],
  },
  {
    n: "03",
    name: "Kenzie Gill",
    role: "Software Developer & UX Designer",
    initials: "K",
    img: kenzieImg,
    bio: [
      "Led software for the product and the website. Owned the coding and code hierarchy decisions for THEIA, defining what each haptic signal communicates to the user across four dimensions (pulse, intensity, location, and velocity) so every cue maps to a specific spatial meaning the user can interpret without cognitive load.",
      "Currently completing a B.S. in Art, Technology, and the Business of Innovation at USC, where her work focuses on accessible user experience design.",
    ],
  },
  {
    n: "04",
    name: "Jose Hernandez",
    role: "Electrical Engineer & Systems Integration",
    initials: "J",
    img: joseImg,
    bio: [
      "Led the electrical design and hardware integration for THEIA. Architected the full system in KiCad — power distribution, sensor bus topology, motor driver circuits, and microcontroller integration. Schematic capture, component selection, soldering of the wearable assembly, and end-to-end bring-up testing of the six time-of-flight and LiDAR sensors and eight haptic motors that drive THEIA’s perception and feedback.",
      "Holds a B.S. in Computer Engineering from Cal Poly Pomona and is currently completing an M.S. in Medical Device and Diagnostic Engineering at USC Viterbi, where his work focuses on the intersection of hardware engineering and assistive medical technology.",
    ],
  },
  {
    n: "05",
    name: "Esther Ji",
    role: "Business Strategy",
    initials: "E",
    img: estherImg,
    bio: [
      "Led UX research and supported business strategy. Locked in positioning around augmentation, not automation.",
      "Drove growth and operational planning. TAM/SAM/SOM and the business model framework.",
    ],
  },
  {
    n: "06",
    name: "Christine Lai",
    role: "Design Engineer",
    initials: "C",
    img: christineImg,
    bio: [
      "Owned the physical user experience. Belt ergonomics, weight, balance, grip.",
      "Iterated low-fi mockups into the final enclosure. Holds up to daily use without sacrificing form.",
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Team members */}
        {members.map((member, i) => {
          const photoLeft = i % 2 === 0;
          return (
            <section
              key={member.n}
              className={`py-24 lg:py-32 border-b border-hairline ${i % 2 === 1 ? "bg-ivory-deep/40" : ""}`}
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                  {photoLeft ? (
                    <>
                      {/* Photo on left */}
                      <div className="lg:col-span-4">
                        <div className="relative aspect-square overflow-hidden bg-ivory-deep border border-hairline">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      </div>

                      {/* Text on right */}
                      <div className="lg:col-span-7 lg:col-start-6">
                        <div className="font-mono-tag text-signal mb-3">{member.n} / {member.role}</div>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-graphite leading-[1.05] tracking-[-0.022em] mb-8">
                          {member.name}
                        </h2>
                        <div className="space-y-4">
                          <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                            {member.bio[0]}
                          </p>
                          <p className="text-base md:text-lg text-graphite-soft leading-relaxed text-pretty">
                            {member.bio[1]}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text on left */}
                      <div className="lg:col-span-7">
                        <div className="font-mono-tag text-signal mb-3">{member.n} / {member.role}</div>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-graphite leading-[1.05] tracking-[-0.022em] mb-8">
                          {member.name}
                        </h2>
                        <div className="space-y-4">
                          <p className="text-base md:text-lg text-graphite leading-relaxed text-pretty">
                            {member.bio[0]}
                          </p>
                          <p className="text-base md:text-lg text-graphite-soft leading-relaxed text-pretty">
                            {member.bio[1]}
                          </p>
                        </div>
                      </div>

                      {/* Photo on right */}
                      <div className="lg:col-span-4 lg:col-start-9">
                        <div className="relative aspect-square overflow-hidden bg-ivory-deep border border-hairline">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </section>
          );
        })}

      </main>
      <Footer />
    </div>
  );
};

export default Team;
