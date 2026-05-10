import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/challenge", label: "Overview" },
  { to: "/process", label: "Process" },
  { to: "/product", label: "Product" },
  { to: "/business", label: "Business" },
  { to: "/team", label: "Team" },
  { to: "/system", label: "System" },
  { to: "/references", label: "References" },
];

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3">
          <span className="block w-2.5 h-2.5 rounded-full bg-signal transition-transform duration-300 group-hover:scale-125" />
          <span className="font-display text-xl font-medium tracking-tight text-foreground group-hover:text-signal transition-colors">
            theia<span className="text-signal">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[12px] font-mono uppercase tracking-[0.2em]">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  active
                    ? "text-foreground border-b-2 border-signal pb-1 -mb-[2px]"
                    : "text-muted-foreground hover:text-foreground transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
