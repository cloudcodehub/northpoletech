import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { Arrow } from "../lib/icons.jsx";
import Marquee from "../components/Marquee.jsx";
import Cta from "../components/Cta.jsx";
import Footer from "../components/Footer.jsx";

// Article links are placeholders (no article pages yet), so they don't navigate.
const noop = (e) => e.preventDefault();

const POSTS = [
  {
    date: "28 May 2026",
    read: "4 min read",
    title: "The hidden tax of software nobody knows how to use",
    d: 0,
    thumb: (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect x="30" y="30" width="60" height="60" />
        <rect x="110" y="30" width="60" height="60" />
        <rect x="190" y="30" width="60" height="60" />
        <rect x="30" y="110" width="60" height="60" />
        <rect x="110" y="110" width="60" height="60" />
        <path d="M190 110 L250 170 M250 110 L190 170" />
      </svg>
    ),
  },
  {
    date: "09 May 2026",
    read: "8 min read",
    title: "Building AI infrastructure from Kathmandu",
    d: 80,
    thumb: (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="160" cy="100" r="85" />
        <circle cx="160" cy="100" r="58" />
        <circle cx="160" cy="100" r="30" />
        <path d="M160 15 V185 M75 100 H245" />
        <path d="M100 40 L220 160 M220 40 L100 160" opacity="0.5" />
      </svg>
    ),
  },
  {
    date: "21 Apr 2026",
    read: "5 min read",
    title: "An AI that can't explain itself is just a rumour",
    d: 160,
    thumb: (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M50 100 L120 45 M50 100 L120 100 M50 100 L120 155" />
        <path d="M120 45 L200 100 M120 100 L200 100 M120 155 L200 100" />
        <path d="M200 100 L270 100" />
        <circle cx="50" cy="100" r="8" />
        <circle cx="120" cy="45" r="8" />
        <circle cx="120" cy="100" r="8" />
        <circle cx="120" cy="155" r="8" />
        <circle cx="200" cy="100" r="8" />
        <circle cx="270" cy="100" r="12" strokeDasharray="3 4" />
      </svg>
    ),
  },
  {
    date: "02 Apr 2026",
    read: "7 min read",
    title: "We deleted 60% of our dashboard. Usage doubled.",
    d: 0,
    thumb: (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect x="30" y="30" width="120" height="140" strokeDasharray="4 4" opacity="0.5" />
        <path d="M45 60 h90 M45 80 h70 M45 100 h90 M45 120 h60 M45 140 h80" opacity="0.5" />
        <rect x="180" y="30" width="110" height="140" />
        <path d="M200 90 h70" strokeWidth="2" />
        <path d="M200 115 h40" opacity="0.6" />
        <circle cx="235" cy="60" r="12" />
      </svg>
    ),
  },
  {
    date: "18 Mar 2026",
    read: "6 min read",
    title: "Human error is a design failure, not a people problem",
    d: 80,
    thumb: (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M30 100 H110" />
        <path d="M160 55 L205 100 L160 145 L115 100 Z" />
        <path d="M145 98 L157 110 L178 84" />
        <path d="M210 100 H290" />
        <path d="M280 92 L290 100 L280 108" />
        <path d="M60 70 h30 M60 130 h30" opacity="0.4" />
      </svg>
    ),
  },
  {
    date: "04 Mar 2026",
    read: "9 min read",
    title: "What 140 deployments taught us about legacy systems",
    d: 160,
    thumb: (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M40 40 C 120 40, 140 100, 220 100" opacity="0.7" />
        <path d="M40 70 C 120 70, 150 100, 220 100" opacity="0.7" />
        <path d="M40 130 C 120 130, 150 100, 220 100" opacity="0.7" />
        <path d="M40 160 C 120 160, 140 100, 220 100" opacity="0.7" />
        <circle cx="228" cy="100" r="12" />
        <path d="M245 100 H290" />
        <path d="M282 93 L290 100 L282 107" />
      </svg>
    ),
  },
];

export default function Insights() {
  usePageMeta(
    "Insights — NPTECH",
    "Notes from the frontier. What we're learning while we build AI-native software in Kathmandu."
  );

  return (
    <>
      <section className="phead">
        <div className="phead__grid" aria-hidden="true"></div>
        <div className="wrap phead__inner">
          <div className="crumb" data-reveal>
            <span className="label">005</span><span className="label">/</span>
            <span className="label" style={{ color: "var(--fg)" }}>Insights</span>
          </div>
          <h1 className="display caps" style={{ maxWidth: "12ch" }} data-reveal>
            Notes from the frontier.
          </h1>
          <p className="lead" style={{ marginTop: "2rem", "--d": "80ms" }} data-reveal>
            What we're learning while we build it. No thought leadership, just field notes.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--sec-y)" }}>
        <div className="wrap">
          {/* FEATURED */}
          <a className="feature" href="#" onClick={noop} data-reveal>
            <div>
              <div className="post__meta" style={{ marginBottom: "1.25rem" }}>
                <span className="label" style={{ color: "var(--fg)" }}>Featured</span>
                <span className="label">12 Jun 2026</span>
                <span className="label">6 min read</span>
              </div>
              <h2 className="feature__title">
                Why your forecast is wrong, and your data isn't to blame
              </h2>
              <p className="muted measure" style={{ marginTop: "1.25rem" }}>
                Most forecasting failures aren't data problems. They're confidence problems — a single
                number presented as certainty, with the error bars quietly deleted.
              </p>
              <span className="tlink" style={{ marginTop: "1.5rem" }}>
                Read article
                <Arrow size={11} className="" />
              </span>
            </div>
            <div className="feature__thumb">
              <svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path d="M40 240 V30 M40 240 H450" opacity="0.4" />
                <path d="M40 200 H450 M40 140 H450 M40 80 H450" strokeDasharray="2 8" opacity="0.35" />
                <path d="M60 210 L120 170 L180 185 L240 120" />
                <circle cx="240" cy="120" r="6" />
                <path d="M240 120 L448 40" strokeDasharray="6 6" />
                <path d="M240 120 L448 165" strokeDasharray="6 6" />
                <path d="M240 120 L448 100" />
                <path d="M240 30 V240" strokeDasharray="5 5" opacity="0.5" />
                <path d="M344 70 V132" opacity="0.3" />
                <path d="M448 40 V165" opacity="0.3" />
              </svg>
            </div>
          </a>

          {/* GRID */}
          <div className="posts">
            {POSTS.map((p) => (
              <a
                className="post"
                href="#"
                onClick={noop}
                key={p.title}
                data-reveal
                style={p.d ? { "--d": `${p.d}ms` } : undefined}
              >
                <div className="post__meta">
                  <span className="label">{p.date}</span>
                  <span className="label">{p.read}</span>
                </div>
                <h3 className="post__title">{p.title}</h3>
                <div className="post__thumb">{p.thumb}</div>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(3rem,5vw,4rem)" }} data-reveal>
            <button className="btn">Load more</button>
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="inv">
        <Marquee />
        <div className="wrap">
          <Cta label="Start here" title={<>Bring us your<br />hardest system.</>}>
            <Link className="btn btn--solid" to="/contact">
              Start a project
              <Arrow />
            </Link>
            <a className="btn" href="mailto:hello@nptech.io">hello@nptech.io</a>
          </Cta>
          <Footer />
        </div>
      </section>
    </>
  );
}
