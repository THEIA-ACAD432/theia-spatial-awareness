import Nav from "@/components/theia/Nav";
import Footer from "@/components/theia/Footer";

type Reference = {
  n: string;
  authors: string;
  year: string;
  title: string;
  source: string;
  details: string;
  url: string;
  kind: "doi" | "arxiv";
};

const references: Reference[] = [
  {
    n: "01",
    authors: "Bala, Myneni Madhu, et al.",
    year: "2023",
    title: "Design, Development and Performance Analysis of Cognitive Assisting Aid with Multi Sensor Fused Navigation for Visually Impaired People",
    source: "Journal of Big Data",
    details: "vol. 10, article 21",
    url: "https://doi.org/10.1186/s40537-023-00689-5",
    kind: "doi",
  },
  {
    n: "02",
    authors: "Bouteraa, Yassine",
    year: "2021",
    title: "Design and Development of a Wearable Assistive Device Integrating a Fuzzy Decision Support System for Blind and Visually Impaired People",
    source: "Micromachines",
    details: "vol. 12, no. 9, p. 1082",
    url: "https://doi.org/10.3390/mi12091082",
    kind: "doi",
  },
  {
    n: "03",
    authors: "Chai, A.B.C., and B.T. Lau",
    year: "2020",
    title: "Exploring the Outdoor Performance of a LiDAR-Based Ground Plane Checking System for the Visually Impaired",
    source: "EAI Endorsed Transactions on Pervasive Health and Technology",
    details: "vol. 6, no. 23, p. e2",
    url: "https://doi.org/10.4108/eai.13-7-2018.165498",
    kind: "doi",
  },
  {
    n: "04",
    authors: "Duckett, Paul S., and Rebekah Pratt",
    year: "2001",
    title: "The Researched Opinions on Research: Visually Impaired People and Visual Impairment Research",
    source: "Disability & Society",
    details: "vol. 16, no. 6, pp. 815–835",
    url: "https://doi.org/10.1080/09687590120083976",
    kind: "doi",
  },
  {
    n: "05",
    authors: "Dursin, Arzu Gürdal",
    year: "2012",
    title: "Information Design and Education for Visually Impaired and Blind People",
    source: "Procedia – Social and Behavioral Sciences",
    details: "vol. 46, pp. 5568–5572",
    url: "https://doi.org/10.1016/j.sbspro.2012.06.477",
    kind: "doi",
  },
  {
    n: "06",
    authors: "Jain, Mayuri, and Warish Patel",
    year: "2023",
    title: "Review on LiDAR-Based Navigation Systems for the Visually Impaired",
    source: "SN Computer Science",
    details: "vol. 4, no. 323, pp. 1–12",
    url: "https://doi.org/10.1007/s42979-023-01735-y",
    kind: "doi",
  },
  {
    n: "07",
    authors: "Katzschmann, Robert K., et al.",
    year: "2018",
    title: "Safe Local Navigation for Visually Impaired Users with a Time-of-Flight and Haptic Feedback Device",
    source: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
    details: "vol. 26, no. 3, pp. 583–593",
    url: "https://doi.org/10.1109/TNSRE.2018.2800665",
    kind: "doi",
  },
  {
    n: "08",
    authors: "Liu, Huayao, et al.",
    year: "2021",
    title: "HIDA: Towards Holistic Indoor Understanding for the Visually Impaired via Semantic Instance Segmentation with a Wearable Solid-State LiDAR Sensor",
    source: "arXiv",
    details: "preprint, 7 Jul. 2021",
    url: "https://arxiv.org/abs/2107.03180",
    kind: "arxiv",
  },
  {
    n: "09",
    authors: "Mai, Chunming, et al.",
    year: "2024",
    title: "A Smart Cane Based on 2D LiDAR and RGB-D Camera Sensor — Realizing Navigation and Obstacle Recognition",
    source: "Sensors",
    details: "vol. 24, no. 3, p. 870",
    url: "https://doi.org/10.3390/s24030870",
    kind: "doi",
  },
  {
    n: "10",
    authors: "Naidoo, Nathan, and Mehrdad Ghaziasgar",
    year: "2025",
    title: "A Multi-Platform Electronic Travel Aid Integrating Proxemic Sensing for the Visually Impaired",
    source: "Technologies",
    details: "vol. 13, no. 12, p. 550",
    url: "https://doi.org/10.3390/technologies13120550",
    kind: "doi",
  },
  {
    n: "11",
    authors: "Santos, Aline Darc Piculo dos, et al.",
    year: "2025",
    title: "NavWear: Design and Evaluation of a Wearable Device for Obstacle Detection for Blind and Visually Impaired People",
    source: "Disability and Rehabilitation: Assistive Technology",
    details: "vol. 20, no. 6, pp. 1800–1814",
    url: "https://doi.org/10.1080/17483107.2025.2477681",
    kind: "doi",
  },
  {
    n: "12",
    authors: "Xu, Peijie, et al.",
    year: "2023",
    title: "Intelligent Head-Mounted Obstacle Avoidance Wearable for the Blind and Visually Impaired",
    source: "Sensors",
    details: "vol. 23, no. 23, p. 9598",
    url: "https://doi.org/10.3390/s23239598",
    kind: "doi",
  },
];

const References = () => {
  const yearStart = references.reduce((min, r) => Math.min(min, parseInt(r.year, 10)), Infinity);
  const yearEnd = references.reduce((max, r) => Math.max(max, parseInt(r.year, 10)), 0);
  const venues = new Set(references.map((r) => r.source)).size;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-14">

        {/* Page Header */}
        <section className="relative py-20 lg:py-28 border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]" aria-hidden />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-8">References / 06</div>
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[11vw] sm:text-[8vw] lg:text-[6.5vw] text-graphite leading-[0.88] tracking-[-0.04em]">
                  Works
                  <br />
                  <span className="text-signal italic font-light">cited.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base md:text-lg text-graphite-soft leading-relaxed">
                  Every claim, benchmark, and design choice in Theia traces back to the literature below — peer-reviewed work from the last 25 years of assistive navigation research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-hairline">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline">
              <div className="bg-ivory p-6 lg:p-8">
                <div className="font-display text-4xl md:text-5xl text-graphite tracking-[-0.03em] leading-none mb-2">{references.length}</div>
                <div className="font-mono-tag text-graphite-soft/60">CITATIONS</div>
              </div>
              <div className="bg-ivory p-6 lg:p-8">
                <div className="font-display text-4xl md:text-5xl text-graphite tracking-[-0.03em] leading-none mb-2">{yearStart}–{String(yearEnd).slice(-2)}</div>
                <div className="font-mono-tag text-graphite-soft/60">PUBLICATION SPAN</div>
              </div>
              <div className="bg-ivory p-6 lg:p-8">
                <div className="font-display text-4xl md:text-5xl text-graphite tracking-[-0.03em] leading-none mb-2">{venues}</div>
                <div className="font-mono-tag text-graphite-soft/60">VENUES</div>
              </div>
              <div className="bg-ivory p-6 lg:p-8">
                <div className="font-display text-4xl md:text-5xl text-graphite tracking-[-0.03em] leading-none mb-2">MLA 9</div>
                <div className="font-mono-tag text-graphite-soft/60">CITATION FORMAT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bibliography */}
        <section className="py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="font-mono-tag text-signal mb-12">01 / Bibliography</div>

            <ul className="border-t border-hairline">
              {references.map((ref) => (
                <li key={ref.n} className="border-b border-hairline">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-7 lg:py-8 px-2 -mx-2 hover:bg-ivory-deep/40 transition-colors group"
                  >
                    <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                      <div className="lg:col-span-1">
                        <span className="font-mono-tag text-signal">[{ref.n}]</span>
                      </div>

                      <div className="lg:col-span-8">
                        <div className="font-mono-tag text-graphite-soft/60 mb-2">
                          {ref.authors} · {ref.year}
                        </div>
                        <h3 className="font-display text-lg md:text-xl text-graphite tracking-[-0.02em] leading-snug mb-2 text-pretty group-hover:text-signal transition-colors">
                          {ref.title}
                        </h3>
                        <p className="text-sm text-graphite-soft leading-relaxed">
                          <span className="italic">{ref.source}</span>
                          <span className="text-graphite-soft/50"> · {ref.details}</span>
                        </p>
                      </div>

                      <div className="lg:col-span-3 lg:text-right">
                        <span className="inline-flex items-center gap-2 font-mono-tag text-signal/70 group-hover:text-signal transition-colors">
                          {ref.kind === "arxiv" ? "arXiv" : "DOI"}
                          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-sm text-graphite-soft/60 leading-relaxed mt-8 max-w-2xl">
              Citations follow MLA 9th edition format. Click any entry to open the source via DOI or preprint link.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default References;
