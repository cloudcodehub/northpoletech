import { Link } from "react-router-dom";

const MAP_URL =
  "https://maps.google.com/?q=P9M6%2BR65,+Budhanilkantha+44600,+Nepal";

/** Site footer. `flush` drops the top rule/padding (used on the contact page). */
export default function Footer({ flush = false }) {
  return (
    <footer
      className="foot"
      style={flush ? { paddingTop: "clamp(3rem,6vw,5rem)" } : undefined}
    >
      <div className="foot__grid" style={flush ? { borderTop: 0 } : undefined}>
        <div className="foot__col">
          <Link className="logo" to="/" aria-label="NPTECH home">
            <span className="logo__img" role="img" aria-label="NPTech" />
          </Link>
          <p className="muted" style={{ maxWidth: "34ch" }}>
            North Pole Tech. AI-native software, built from Kathmandu for the
            world.
          </p>
        </div>

        <div className="foot__col">
          <span className="label">Sitemap</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="foot__col">
          <span className="label">Products</span>
          <Link to="/products">Atlas</Link>
          <Link to="/products">Oracle</Link>
          <Link to="/products">Sentinel</Link>
          <Link to="/products">Pulse</Link>
        </div>

        <div className="foot__col">
          <span className="label">Find us</span>
          <a href={MAP_URL} target="_blank" rel="noopener">
            P9M6+R65, Budhanilkantha
            <br />
            Kathmandu 44600, Nepal
          </a>
          <a href="mailto:hello@nptech.io">hello@nptech.io</a>
          <a href="tel:+97714567890">+977 1 456 7890</a>
        </div>
      </div>

      <div className="foot__wordmark" aria-hidden="true">
        NPTECH
      </div>

      <div className="foot__bottom">
        <span className="label">
          © {new Date().getFullYear()} North Pole Tech Pvt. Ltd.
        </span>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <a className="label" href="#">
            LinkedIn
          </a>
          <a className="label" href="#">
            X
          </a>
          <a className="label" href="#">
            GitHub
          </a>
        </div>
        <span className="label">True north for every decision</span>
      </div>
    </footer>
  );
}
