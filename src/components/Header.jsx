import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Arrow } from "../lib/icons.jsx";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export default function Header({ overDark, drawerOpen, onToggleDrawer }) {
  const [stuck, setStuck] = useState(false);

  // Frosted state once past the hero lip.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = [
    "nav",
    overDark ? "nav--over-dark" : "",
    stuck ? "is-stuck" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="wrap">
        <div className="nav__inner">
          <Link className="logo" to="/" aria-label="NPTECH home">
            <span className="logo__img" role="img" aria-label="NPTech" />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink key={l.to} className="nav__link" to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link className="btn nav__cta" to="/contact">
            Start a project
            <Arrow />
          </Link>

          <button
            className={"burger" + (drawerOpen ? " is-open" : "")}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="drawer"
            onClick={onToggleDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
