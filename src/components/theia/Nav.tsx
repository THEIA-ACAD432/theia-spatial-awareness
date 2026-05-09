import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ivory/75 border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="group inline-flex flex-col items-center leading-none">
          <svg
            viewBox="0 0 64 12"
            className="w-[60px] h-[10px] -mb-[3px] text-signal transition-transform duration-500 group-hover:-translate-y-[2px]"
            aria-hidden
          >
            <path
              d="M 4 10 Q 32 -2 60 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="32" cy="3.4" r="1.4" fill="currentColor" />
          </svg>
          <span className="font-display text-2xl text-graphite italic font-semibold tracking-[-0.045em] leading-none group-hover:text-signal transition-colors duration-300">
            Halo
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-graphite-soft">
          {[
            { to: "/challenge", label: "Challenge" },
            { to: "/process", label: "Process" },
            { to: "/product", label: "Product" },
            { to: "/business", label: "Business" },
            { to: "/team", label: "Team" },
            { to: "/references", label: "References" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`hover:text-graphite transition-colors ${pathname === item.to ? "text-graphite font-medium" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
