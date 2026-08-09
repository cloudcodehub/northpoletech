import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { Arrow } from "../lib/icons.jsx";
import Marquee from "../components/Marquee.jsx";
import Cta from "../components/Cta.jsx";
import Footer from "../components/Footer.jsx";

const PRODUCTS = [
  {
    idx: "01 / 04",
    name: "Atlas",
    lead: "Every system you run, on one canvas.",
    chips: ["B2B", "Data Intelligence", "From $890/mo"],
    desc:
      "Atlas connects to everything you already own and gives it one shape. Ask a question in plain language, get an answer with its sources attached.",
    glyph: (
      <>
        <path d="M22 5 L39 14 L22 23 L5 14 Z" />
        <path d="M5 22 L22 31 L39 22" />
        <path d="M5 30 L22 39 L39 30" />
      </>
    ),
    viz: (
      <>
        <rect x="20" y="20" width="160" height="90" />
        <rect x="220" y="20" width="160" height="90" />
        <rect x="20" y="130" width="160" height="90" />
        <rect x="220" y="130" width="160" height="90" />
        <path d="M40 90 L70 60 L95 72 L130 40 L160 52" />
        <path d="M240 95 h20 v-40 h20 v25 h20 v-45 h20 v60 h20 v-30 h20 v30" />
        <circle cx="100" cy="175" r="34" />
        <path d="M100 141 A34 34 0 0 1 130 192 L100 175 Z" />
        <path d="M240 200 h140 M240 175 h100 M240 150 h120" />
      </>
    ),
    feats: [
      { label: "Connect", text: "180+ native connectors. Your ERP included, however old it is." },
      { label: "Ask", text: "Plain-language queries. No SQL, no ticket to the data team." },
      { label: "Trust", text: "Every answer cites the rows it came from." },
      { label: "Share", text: "Live boards that update themselves and never drift." },
    ],
  },
  {
    idx: "02 / 04",
    name: "Oracle",
    lead: "See the quarter before it arrives.",
    chips: ["B2B", "Forecasting", "From $1,400/mo"],
    desc:
      "Oracle trains on your history — not a generic benchmark — and forecasts revenue, churn and loss with intervals you can actually plan against.",
    glyph: (
      <>
        <path d="M6 6 V38 H38" />
        <path d="M11 31 L18 24 L24 28 L30 17" />
        <path d="M30 17 L38 10" strokeDasharray="3 3" />
        <circle cx="30" cy="17" r="2.5" />
      </>
    ),
    viz: (
      <>
        <path d="M30 220 V20 M30 220 H380" opacity="0.4" />
        <path d="M30 200 H380" strokeDasharray="2 6" opacity="0.4" />
        <path d="M30 140 H380" strokeDasharray="2 6" opacity="0.4" />
        <path d="M30 80 H380" strokeDasharray="2 6" opacity="0.4" />
        <path d="M45 185 L90 150 L135 165 L180 110 L215 125" />
        <circle cx="215" cy="125" r="5" />
        <path d="M215 125 L378 40" strokeDasharray="5 5" />
        <path d="M215 125 L378 150" strokeDasharray="5 5" />
        <path d="M215 125 L378 95" />
        <path d="M215 20 V220" strokeDasharray="4 4" opacity="0.5" />
        <path d="M282 62 L282 132" opacity="0.3" />
        <path d="M345 50 L345 142" opacity="0.3" />
      </>
    ),
    feats: [
      { label: "Forecast", text: "Revenue, demand and churn, 90 days out." },
      { label: "Interval", text: "Every prediction ships with its confidence band." },
      { label: "Backtest", text: "Replayed against your own history before you trust it." },
      { label: "Scenario", text: "Move one input, watch the whole quarter respond." },
    ],
  },
  {
    idx: "03 / 04",
    name: "Sentinel",
    lead: "The error that never reaches production.",
    chips: ["B2B", "Autonomous Ops", "From $1,100/mo"],
    desc:
      "Sentinel watches every workflow you run and catches the mistake before it lands. It acts on its own. You keep the veto, always.",
    glyph: (
      <>
        <path d="M22 5 L37 11 V22 C37 30 30 37 22 40 C14 37 7 30 7 22 V11 Z" />
        <path d="M16 22 L20 26 L29 16" />
      </>
    ),
    viz: (
      <>
        <path d="M20 120 H120" />
        <circle cx="20" cy="120" r="5" />
        <path d="M170 70 L215 120 L170 170 L125 120 Z" />
        <path d="M155 118 L167 130 L188 104" />
        <path d="M220 120 H280 M280 120 V60 H370 M280 120 V180 H370" />
        <path d="M362 54 L370 60 L362 66" />
        <path d="M340 174 L370 180 L340 186" strokeDasharray="3 3" />
        <rect x="300" y="40" width="70" height="40" rx="4" strokeDasharray="0" />
        <rect x="300" y="160" width="70" height="40" rx="4" strokeDasharray="3 3" />
        <path d="M320 60 h30 M320 180 h30" opacity="0.5" />
        <path d="M40 100 h60 M40 140 h60" opacity="0.35" />
      </>
    ),
    feats: [
      { label: "Watch", text: "Every transaction, invoice and handoff, continuously." },
      { label: "Catch", text: "Anomalies flagged before they clear, not after." },
      { label: "Act", text: "Routine fixes execute themselves inside your rules." },
      { label: "Rollback", text: "One click undoes anything it did. Full audit trail." },
    ],
  },
  {
    idx: "04 / 04",
    name: "Pulse",
    lead: "Enterprise-grade intelligence, pocket-sized.",
    chips: ["B2C", "Personal Finance", "Free — $9/mo"],
    desc:
      "The same engine our enterprises run, pointed at one person's money. Pulse learns how you earn and spend, then tells you what's coming.",
    glyph: (
      <>
        <path d="M5 22 H13 L17 11 L24 33 L28 22 H39" />
        <circle cx="39" cy="22" r="2.5" />
      </>
    ),
    viz: (
      <>
        <rect x="140" y="15" width="120" height="210" rx="16" />
        <path d="M180 15 h40" strokeWidth="2" />
        <path d="M158 70 h84" opacity="0.4" />
        <path d="M158 55 h50" />
        <path d="M160 130 h14 L182 100 L196 160 L204 130 h36" />
        <circle cx="240" cy="130" r="3.5" />
        <path d="M158 185 h84 M158 200 h60" opacity="0.4" />
        <path d="M60 90 C 100 90, 110 120, 138 120" strokeDasharray="3 3" opacity="0.5" />
        <path d="M60 160 C 100 160, 110 130, 138 130" strokeDasharray="3 3" opacity="0.5" />
        <circle cx="55" cy="90" r="5" opacity="0.5" />
        <circle cx="55" cy="160" r="5" opacity="0.5" />
        <path d="M262 120 C 290 120, 300 90, 340 90" strokeDasharray="3 3" opacity="0.5" />
        <circle cx="345" cy="90" r="5" opacity="0.5" />
      </>
    ),
    feats: [
      { label: "Connect", text: "Every account in one place, updated live." },
      { label: "Predict", text: "Knows your shortfall three weeks before you feel it." },
      { label: "Nudge", text: "One suggestion at a time. Never a lecture." },
      { label: "Private", text: "Your data is never sold, shared, or trained on." },
    ],
  },
];

export default function Products() {
  usePageMeta(
    "Products — NPTECH",
    "Atlas, Oracle, Sentinel and Pulse. Four AI-native SaaS products built to stand alone and designed to compound together."
  );

  return (
    <>
      <section className="phead">
        <div className="phead__grid" aria-hidden="true"></div>
        <div className="wrap phead__inner">
          <div className="crumb" data-reveal>
            <span className="label">003</span><span className="label">/</span>
            <span className="label" style={{ color: "var(--fg)" }}>Products</span>
          </div>
          <h1 className="display caps" style={{ maxWidth: "12ch" }} data-reveal>
            Four products. One brain.
          </h1>
          <p className="lead" style={{ marginTop: "2rem", "--d": "80ms" }} data-reveal>
            Built to stand alone. Designed to compound together.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--sec-y)" }}>
        <div className="wrap">
          {PRODUCTS.map((p) => (
            <article className="pblock" key={p.name} data-reveal>
              <div className="pblock__head">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <svg className="pblock__glyph" viewBox="0 0 44 44" aria-hidden="true">
                    {p.glyph}
                  </svg>
                  <span className="label">{p.idx}</span>
                </div>
                <h2 className="pblock__name">{p.name}</h2>
                <p className="lead">{p.lead}</p>
                <div className="product__meta">
                  {p.chips.map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                </div>
                <p className="measure muted">{p.desc}</p>
              </div>

              <div>
                <svg className="pblock__viz" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  {p.viz}
                </svg>
                <div className="feat">
                  {p.feats.map((f) => (
                    <div className="feat__row" key={f.label}>
                      <span className="label">{f.label}</span>
                      <p className="muted">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="inv">
        <Marquee />
        <div className="wrap">
          <Cta label="Start here" title={<>See it on<br />your own data.</>}>
            <Link className="btn btn--solid" to="/contact">
              Book a demo
              <Arrow />
            </Link>
            <Link className="btn" to="/pricing">View pricing</Link>
          </Cta>
          <Footer />
        </div>
      </section>
    </>
  );
}
