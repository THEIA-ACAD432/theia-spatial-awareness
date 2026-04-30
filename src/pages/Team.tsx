import { Link } from "react-router-dom";
import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

import brianImg from "@/assets/team-brian.jpg";
import kenImg from "@/assets/team-ken.jpg";
import kenzieImg from "@/assets/team-kenzie.jpg";
import joseImg from "@/assets/team-jose.jpg";
import estherImg from "@/assets/team-esther.jpg";
import christineImg from "@/assets/team-christine.png";

const lnk = "text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal transition-colors";

const members = [
  {
    n: "01",
    name: "Brian Camilo",
    role: "Product Manager",
    initials: "B",
    img: brianImg,
    bio: [
      <>Brian led product strategy, defining the MVP scope and shaping the overall <Link to="/business" className={lnk}>business model</Link>. He ensured alignment between user autonomy, clinical safety, and institutional feasibility, positioning the product as an augmentation tool rather than a replacement for existing mobility practices. His work included developing the <Link to="/business" className={lnk}>value proposition</Link>, conducting competitive analysis of existing smart canes, and defining <Link to="/business" className={lnk}>success metrics</Link> to guide product decisions.</>,
      <>He also focused on market and financial viability, refining the target early adopter persona, building a pricing hypothesis, and conducting cost-benefit and risk analyses across technical, adoption, and ethical dimensions. Brian developed the <Link to="/business" className={lnk}>TAM/SAM/SOM estimates and business model framework</Link>, helping translate the team's concept into a scalable and investable opportunity.</>,
    ],
  },
  {
    n: "02",
    name: "Ken Chin",
    role: "Physical Product Design",
    initials: "K",
    img: kenImg,
    bio: [
      <>Ken was responsible for translating early concepts into precise, manufacturable designs through <Link to="/product" className={lnk}>3D modeling and iteration</Link>. He refined the product's physical form to ensure it could be effectively prototyped and fabricated, balancing functionality, ergonomics, and integration of internal components.</>,
      <>His work bridged concept and execution, creating accurate digital models that informed both engineering constraints and industrial design decisions. By iterating on form and structure, Ken helped ensure the product could move from idea to a realistic, <Link to="/product" className={lnk}>buildable prototype</Link>.</>,
    ],
  },
  {
    n: "03",
    name: "Kenzie Gill",
    role: "Software Developer & UX Designer",
    initials: "K",
    img: kenzieImg,
    bio: [
      <>Kenzie led the software development of both the product and the website, while also shaping the user experience of the system. She mapped the current cane user journey to identify <Link to="/challenge" className={lnk}>gaps in spatial awareness</Link> — such as overhead hazards, static obstacles, and dynamic movement — and used these insights to inform interaction design.</>,
      <>She developed key UX frameworks including "cane-first" safety principles, alert hierarchies, and modality exploration (<Link to="/product" className={lnk}>haptic vs. audio</Link>) to reduce cognitive load. Through scenario development and system logic, Kenzie ensured that the software experience was intuitive, responsive, and aligned with how users naturally navigate their environment.</>,
    ],
  },
  {
    n: "04",
    name: "Jose Hernandez",
    role: "Electrical Engineer & Systems Integration",
    initials: "J",
    img: joseImg,
    bio: [
      <>Jose designed and integrated the <Link to="/product" className={lnk}>core hardware systems</Link>, focusing on sensing, circuitry, and power management. He explored sensing options and developed a rough system architecture, ensuring that all electrical components could function cohesively within the product.</>,
      <>He also led early prototyping and validation, building <Link to="/product" className={lnk}>sensor setups for bench testing</Link> and implementing basic distance detection logic. By testing detection range and latency, Jose helped establish the technical feasibility of real-time environmental awareness, ensuring the system could reliably support user safety.</>,
    ],
  },
  {
    n: "05",
    name: "Esther Ji",
    role: "Business Strategy",
    initials: "E",
    img: estherImg,
    bio: [
      <>Esther led user experience research while supporting overall <Link to="/business" className={lnk}>business strategy</Link> and planning. She helped define the MVP scope and <Link to="/business" className={lnk}>value proposition</Link>, grounding the product in real user needs and ensuring alignment with broader market opportunities. Her work included <Link to="/business" className={lnk}>competitive analysis</Link>, defining success metrics, and refining positioning around augmentation rather than automation.</>,
      <>She also contributed to growth and operational planning, including pricing strategy, early adopter targeting, cost-benefit analysis, and risk assessment. By developing <Link to="/business" className={lnk}>market sizing (TAM/SAM/SOM) and business model frameworks</Link>, Esther helped ensure the product was not only user-centered but also scalable and strategically viable.</>,
    ],
  },
  {
    n: "06",
    name: "Christine Lai",
    role: "Design Engineer",
    initials: "C",
    img: christineImg,
    bio: [
      <>Christine focused on the <Link to="/product" className={lnk}>physical user experience</Link>, analyzing belt ergonomics such as weight distribution, balance, and grip to ensure comfort and usability. She identified key integration zones within the cane — handle, shaft, and tip — and defined the physical constraints that shaped how components could be embedded.</>,
      <>Through low-fidelity mockups and iterative prototyping, she explored modular attachment concepts and evaluated durability in real-world conditions. Her work led to an improved <Link to="/product" className={lnk}>enclosure design</Link> that balanced function, usability, and manufacturability, ensuring the product could withstand everyday use while maintaining a seamless form.</>,
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-20 lg:py-28 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">Team / 04</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[11vw] sm:text-[8vw] lg:text-[6.5vw] text-graphite leading-[0.88] tracking-[-0.04em]">
                  The people
                  <br />
                  <span className="text-signal italic font-light">behind it.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  Six students from USC. Design, engineering, strategy, and software — built around one shared problem.
                </p>
                <p className="font-mono-tag text-graphite-soft/50 mt-4">USC ACAD-432 · Spring 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team members */}
        {members.map((member, i) => {
          const photoLeft = i % 2 === 0;
          return (
            <section
              key={member.n}
              className={`py-16 lg:py-24 border-b border-hairline ${i % 2 === 1 ? "bg-ivory-deep/40" : ""}`}
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                  {photoLeft ? (
                    <>
                      {/* Photo — left */}
                      <div className="lg:col-span-4">
                        <div className="relative aspect-square overflow-hidden bg-ivory-deep border border-hairline">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      </div>

                      {/* Text — right */}
                      <div className="lg:col-span-7 lg:col-start-6">
                        <div className="font-mono-tag text-signal mb-3">{member.n} / {member.role}</div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-graphite leading-[0.92] tracking-[-0.035em] mb-8">
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
                      {/* Text — left */}
                      <div className="lg:col-span-7">
                        <div className="font-mono-tag text-signal mb-3">{member.n} / {member.role}</div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-graphite leading-[0.92] tracking-[-0.035em] mb-8">
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

                      {/* Photo — right */}
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
