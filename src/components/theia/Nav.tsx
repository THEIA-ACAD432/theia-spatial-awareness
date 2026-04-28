const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ivory/70 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-signal" />
            <span className="absolute inset-0 rounded-full bg-signal animate-radar-sweep" />
          </div>
          <span className="font-serif-display text-xl tracking-tight text-graphite">Theia</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-graphite-soft">
          <a href="#challenge" className="hover:text-graphite transition-colors">Challenge</a>
          <a href="#how" className="hover:text-graphite transition-colors">How it works</a>
          <a href="#" className="hover:text-graphite transition-colors opacity-50 cursor-not-allowed">Solution</a>
          <a href="#" className="hover:text-graphite transition-colors opacity-50 cursor-not-allowed">Team</a>
        </nav>
        <a
          href="#challenge"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium font-mono uppercase tracking-wider text-graphite border border-graphite/20 hover:border-graphite hover:bg-graphite hover:text-ivory transition-all duration-300"
        >
          Read more
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
};

export default Nav;
