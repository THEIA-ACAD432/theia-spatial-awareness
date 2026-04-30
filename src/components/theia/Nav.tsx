import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ivory/75 border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-signal" />
            <span className="absolute inset-0 rounded-full bg-signal animate-radar-sweep" />
          </div>
          <span className="font-display text-lg text-graphite">Halo</span>
          <span className="font-mono-tag text-graphite-soft/60 ml-1 hidden sm:inline">/ v0.1</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-graphite-soft">
          <Link
            to="/product"
            className={`hover:text-graphite transition-colors ${pathname === "/product" ? "text-graphite font-medium" : ""}`}
          >
            Product
          </Link>
          <Link
            to="/process"
            className={`hover:text-graphite transition-colors ${pathname === "/process" ? "text-graphite font-medium" : ""}`}
          >
            Process
          </Link>
          <Link
            to="/team"
            className={`hover:text-graphite transition-colors ${pathname === "/team" ? "text-graphite font-medium" : ""}`}
          >
            Team
          </Link>
          <Link
            to="/business"
            className={`hover:text-graphite transition-colors ${pathname === "/business" ? "text-graphite font-medium" : ""}`}
          >
            Business
          </Link>
          <Link
            to="/challenge"
            className={`hover:text-graphite transition-colors ${pathname === "/challenge" ? "text-graphite font-medium" : ""}`}
          >
            Research
          </Link>
        </nav>
        <Link
          to="/challenge"
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium font-mono uppercase tracking-wider text-ivory bg-graphite hover:bg-signal hover:text-graphite transition-all duration-300"
        >
          Read the case
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
