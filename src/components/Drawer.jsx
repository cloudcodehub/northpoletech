import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export default function Drawer({ open, onClose }) {
  return (
    <div className={"drawer" + (open ? " is-open" : "")} id="drawer">
      <nav className="drawer__links" aria-label="Mobile">
        {LINKS.map((l, i) => (
          <Link key={l.to} className="drawer__link" to={l.to} onClick={onClose}>
            {l.label} <span>{String(i + 1).padStart(2, "0")}</span>
          </Link>
        ))}
      </nav>
      <div className="drawer__foot">
        <span className="label">Kathmandu, Nepal</span>
        <a className="label" href="mailto:hello@nptech.io">
          hello@nptech.io
        </a>
      </div>
    </div>
  );
}
