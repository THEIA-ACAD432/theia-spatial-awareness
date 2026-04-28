const sections = [
  {
    label: "Project",
    links: ["Challenge", "Solution", "Technology", "Roadmap"],
  },
  {
    label: "Research",
    links: ["Citations", "User studies", "Field testing", "Publications"],
  },
  {
    label: "Team",
    links: ["About", "Advisors", "Acknowledgements", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-graphite text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full bg-signal" />
                <span className="absolute inset-0 rounded-full bg-signal animate-radar-sweep" />
              </div>
              <span className="font-serif-display text-2xl">Theia</span>
            </div>
            <p className="font-serif-display text-3xl md:text-4xl leading-tight text-ivory/90 text-balance max-w-md">
              A wearable for the space the cane can&apos;t reach.
            </p>
            <p className="mt-6 font-mono-tag text-ivory/40">
              Coming soon · Full site in development
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((sec) => (
              <div key={sec.label}>
                <div className="font-mono-tag text-signal mb-5">{sec.label}</div>
                <ul className="space-y-3">
                  {sec.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-ivory/70 hover:text-ivory transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span>{l}</span>
                        <span className="font-mono-tag opacity-0 group-hover:opacity-60 transition-opacity">soon</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-ivory/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-ivory/40 font-mono uppercase tracking-wider">
          <div>© 2026 Theia · Class project</div>
          <div className="flex items-center gap-2">
            <span className="signal-dot" /> System online
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
