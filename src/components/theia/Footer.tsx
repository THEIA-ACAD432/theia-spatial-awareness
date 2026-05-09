import { Link } from "react-router-dom";

const sections = [
  {
    label: "Case Study",
    links: [
      { label: "Challenge", to: "/challenge" },
      { label: "Process", to: "/process" },
      { label: "Product", to: "/product" },
      { label: "Business", to: "/business" },
    ],
  },
  {
    label: "Project",
    links: [
      { label: "Team", to: "/team" },
      { label: "References", to: "/references" },
      { label: "Home", to: "/" },
    ],
  },
  {
    label: "Team",
    links: [
      { label: "Brian Camilo", to: "/team" },
      { label: "Ken Chin", to: "/team" },
      { label: "Kenzie Gill", to: "/team" },
      { label: "Jose Hernandez", to: "/team" },
      { label: "Esther Ji", to: "/team" },
      { label: "Christine Lai", to: "/team" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-ivory-deep text-graphite border-t border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Big closing statement */}
        <div className="mb-20">
          <div className="font-mono-tag text-signal mb-6">END / 07</div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-graphite leading-[1.02] tracking-[-0.025em] max-w-6xl">
            The cane gives the ground.
            <br />
            <span className="text-signal italic font-light">Halo gives the air.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3 mb-5">
              <div className="relative w-2.5 h-2.5 self-center">
                <span className="absolute inset-0 rounded-full bg-signal" />
                <span className="absolute inset-0 rounded-full bg-signal animate-radar-sweep" />
              </div>
              <span className="font-display text-xl text-graphite italic font-light tracking-[-0.02em] leading-none">
                halo<span className="text-signal not-italic">&middot;</span>
              </span>
            </div>
            <p className="text-graphite-soft text-sm leading-relaxed max-w-md">
              A wearable spatial awareness system that augments the white cane.
            </p>
            <p className="mt-4 font-mono-tag text-graphite-soft/60">
              USC ACAD-432 · Spring 2026
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-6 px-3.5 py-1.5 text-xs font-medium font-mono uppercase tracking-wider text-ivory bg-graphite hover:bg-signal hover:text-graphite transition-all duration-300"
            >
              Back to home <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((sec) => (
              <div key={sec.label}>
                <div className="font-mono-tag text-graphite mb-5">{sec.label}</div>
                <ul className="space-y-3">
                  {sec.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-graphite-soft hover:text-signal transition-colors text-sm"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between gap-4 text-xs text-graphite-soft/60 font-mono uppercase tracking-wider">
          <div>© 2026 Halo · USC Class Project</div>
          <div className="flex items-center gap-2">
            <span className="signal-dot" /> System online
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
