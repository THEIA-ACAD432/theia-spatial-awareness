import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

type Reference = {
  authors: string;
  year: string;
  title: string;
  journal: string;
  volume: string;
  doi: string;
};

const references: Reference[] = [
  {
    authors: "Bala, Myneni Madhu, et al.",
    year: "2023",
    title:
      "Design, Development and Performance Analysis of Cognitive Assisting Aid with Multi Sensor Fused Navigation for Visually Impaired People.",
    journal: "Journal of Big Data",
    volume: "vol. 10, article 21",
    doi: "10.1186/s40537-023-00689-5",
  },
  {
    authors: "Bouteraa, Yassine.",
    year: "2021",
    title:
      "Design and Development of a Wearable Assistive Device Integrating a Fuzzy Decision Support System for Blind and Visually Impaired People.",
    journal: "Micromachines",
    volume: "vol. 12, no. 9, p. 1082",
    doi: "10.3390/mi12091082",
  },
  {
    authors: "Chai, A.B.C., and B.T. Lau.",
    year: "2020",
    title:
      "Exploring the Outdoor Performance of a LiDAR-Based Ground Plane Checking System for the Visually Impaired.",
    journal: "EAI Endorsed Transactions on Pervasive Health and Technology",
    volume: "vol. 6, no. 23, p. e2",
    doi: "10.4108/eai.13-7-2018.165498",
  },
  {
    authors: "Duckett, Paul S., and Rebekah Pratt.",
    year: "2001",
    title:
      "The Researched Opinions on Research: Visually Impaired People and Visual Impairment Research.",
    journal: "Disability & Society",
    volume: "vol. 16, no. 6, pp. 815–835",
    doi: "10.1080/09687590120083976",
  },
  {
    authors: "Dursin, Arzu Gürdal.",
    year: "2012",
    title:
      "Information Design and Education for Visually Impaired and Blind People.",
    journal: "Procedia - Social and Behavioral Sciences",
    volume: "vol. 46, pp. 5568–5572",
    doi: "10.1016/j.sbspro.2012.06.477",
  },
  {
    authors: "Jain, Mayuri, and Warish Patel.",
    year: "2023",
    title:
      "Review on LiDAR-Based Navigation Systems for the Visually Impaired.",
    journal: "SN Computer Science",
    volume: "vol. 4, no. 323, pp. 1–12",
    doi: "10.1007/s42979-023-01735-y",
  },
  {
    authors: "Katzschmann, Robert K., et al.",
    year: "2018",
    title:
      "Safe Local Navigation for Visually Impaired Users with a Time-of-Flight and Haptic Feedback Device.",
    journal:
      "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
    volume: "vol. 26, no. 3, March, pp. 583–593",
    doi: "10.1109/TNSRE.2018.2800665",
  },
  {
    authors: "Liu, Huayao, et al.",
    year: "2021",
    title:
      "HIDA: Towards Holistic Indoor Understanding for the Visually Impaired via Semantic Instance Segmentation with a Wearable Solid-State LiDAR Sensor.",
    journal: "arXiv",
    volume: "7 July",
    doi: "arxiv.org/abs/2107.03180",
  },
  {
    authors: "Mai, Chunming, et al.",
    year: "2024",
    title:
      "A Smart Cane Based on 2D LiDAR and RGB-D Camera Sensor: Realizing Navigation and Obstacle Recognition.",
    journal: "Sensors",
    volume: "vol. 24, no. 3, p. 870",
    doi: "10.3390/s24030870",
  },
  {
    authors: "Naidoo, Nathan, and Mehrdad Ghaziasgar.",
    year: "2025",
    title:
      "A Multi-Platform Electronic Travel Aid Integrating Proxemic Sensing for the Visually Impaired.",
    journal: "Technologies",
    volume: "vol. 13, no. 12, p. 550",
    doi: "10.3390/technologies13120550",
  },
  {
    authors: "Santos, Aline Darc Piculo dos, et al.",
    year: "2025",
    title:
      "NavWear: Design and Evaluation of a Wearable Device for Obstacle Detection for Blind and Visually Impaired People.",
    journal: "Disability and Rehabilitation: Assistive Technology",
    volume: "vol. 20, no. 6, pp. 1800–1814",
    doi: "10.1080/17483107.2025.2477681",
  },
  {
    authors: "Xu, Peijie, et al.",
    year: "2023",
    title:
      "Intelligent Head-Mounted Obstacle Avoidance Wearable for the Blind and Visually Impaired.",
    journal: "Sensors",
    volume: "vol. 23, no. 23, 4 December, p. 9598",
    doi: "10.3390/s23239598",
  },
];

const References = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">
        {/* Page Header */}
        <section className="relative py-28 lg:py-40 border-b border-hairline overflow-hidden">
          <div
            className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]"
            aria-hidden
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">References / 06</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-graphite leading-[1.02] tracking-[-0.025em]">
                  Works
                  <br />
                  <span className="text-signal italic font-light">cited.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  Every source that shaped Theia. MLA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* References list */}
        <section className="py-28 lg:py-40 border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <div className="font-mono-tag text-signal mb-4">SOURCES</div>
                <p className="text-sm text-graphite-soft leading-relaxed">
                  {references.length} peer-reviewed sources spanning sensor design, user research, navigation systems, and assistive technology adoption.
                </p>
              </div>

              <div className="lg:col-span-9">
                <ol className="divide-y divide-hairline border-y border-hairline">
                  {references.map((ref, i) => (
                    <li key={ref.doi} className="py-7 grid grid-cols-12 gap-4 lg:gap-6">
                      <div className="col-span-2 sm:col-span-1">
                        <span className="font-mono-tag text-signal">
                          [{String(i + 1).padStart(2, "0")}]
                        </span>
                      </div>
                      <div className="col-span-10 sm:col-span-11">
                        <p className="text-base text-graphite leading-relaxed text-pretty">
                          <span className="font-medium">{ref.authors}</span>{" "}
                          &ldquo;{ref.title}&rdquo;{" "}
                          <span className="italic text-graphite-soft">
                            {ref.journal}
                          </span>
                          , {ref.volume}, {ref.year}.
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                          <span className="font-mono-tag text-graphite-soft/60">
                            {ref.year}
                          </span>
                          <span className="font-mono-tag text-signal/80 break-all">
                            doi: {ref.doi}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <section className="py-16 bg-graphite text-ivory">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="font-display text-2xl md:text-3xl text-ivory leading-snug tracking-[-0.025em]">
                  Every quote on this site traces back to one of these sources.
                  <br />
                  <span className="text-signal italic font-light">
                    The work is grounded.
                  </span>
                </p>
              </div>
              <div className="lg:col-span-4">
                <p className="text-sm text-ivory/55 leading-relaxed">
                  Citations are formatted in MLA 9. DOIs link to the publisher of record.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default References;
