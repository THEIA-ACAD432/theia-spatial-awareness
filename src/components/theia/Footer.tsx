const sections = [
  { label: "Project", links: ["Product", "How it works", "Why Theia", "Roadmap"] },
  { label: "Research", links: ["Background", "User studies", "Field testing", "Citations"] },
  { label: "Team", links: ["About", "Advisors", "Acknowledgements", "Contact"] },
];

const Footer = () => {
  return (
    <footer className="relative bg-ivory-deep text-graphite border-t border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Big closing statement */}
        <div className="mb-20">
          <div className="font-mono-tag text-signal mb-6">END / 04</div>
          <h2 className="font-display text-[12vw] sm:text-[9vw] lg:text-[7.5vw] text-graphite leading-[0.88] tracking-[-0.04em] max-w-6xl">
            The cane gives the ground.
            <br />
            <span className="text-signal italic font-light">Theia gives the air.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full bg-signal" />
                <span className="absolute inset-0 rounded-full bg-signal animate-radar-sweep" />
              </div>
              <span className="font-display text-xl">Theia</span>
            </div>
            <p className="text-graphite-soft text-sm leading-relaxed max-w-md">
              A wearable spatial awareness system designed to augment white cane
              use for visually impaired users.
            </p>
            <p className="mt-6 font-mono-tag text-graphite-soft/60">
              Coming soon · Full site in development
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((sec) => (
              <div key={sec.label}>
                <div className="font-mono-tag text-graphite mb-5">{sec.label}</div>
                <ul className="space-y-3">
                  {sec.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-graphite-soft hover:text-signal transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span>{l}</span>
                        <span className="font-mono-tag opacity-0 group-hover:opacity-60 transition-opacity">
                          soon
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between gap-4 text-xs text-graphite-soft/60 font-mono uppercase tracking-wider">
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
