const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ivory/75 border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-signal" />
            <span className="absolute inset-0 rounded-full bg-signal animate-radar-sweep" />
          </div>
          <span className="font-display text-lg text-graphite">Theia</span>
          <span className="font-mono-tag text-graphite-soft/60 ml-1 hidden sm:inline">/ v0.1</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-graphite-soft">
          <a href="#product" className="hover:text-graphite transition-colors">Product</a>
          <a href="#how" className="hover:text-graphite transition-colors">How it works</a>
          <a href="#challenge" className="hover:text-graphite transition-colors">Why</a>
          <a href="#" className="hover:text-graphite transition-colors opacity-40 cursor-not-allowed">Research</a>
        </nav>
        <a
          href="#product"
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium font-mono uppercase tracking-wider text-ivory bg-graphite hover:bg-signal hover:text-graphite transition-all duration-300"
        >
          See the device
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
};

export default Nav;
