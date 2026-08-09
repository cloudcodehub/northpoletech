import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { Mark, Arrow } from "../lib/icons.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Counter from "../components/Counter.jsx";
import Faq from "../components/Faq.jsx";
import Marquee from "../components/Marquee.jsx";
import Cta from "../components/Cta.jsx";
import Footer from "../components/Footer.jsx";

const PRODUCTS = [
  {
    name: "Atlas",
    desc: "Every system you run, on one canvas.",
    tags: ["B2B", "Data Intelligence"],
    d: 0,
    glyph: (
      <>
        <path d="M22 5 L39 14 L22 23 L5 14 Z" />
        <path d="M5 22 L22 31 L39 22" />
        <path d="M5 30 L22 39 L39 30" />
      </>
    ),
  },
  {
    name: "Oracle",
    desc: "See the quarter before it arrives.",
    tags: ["B2B", "Forecasting"],
    d: 80,
    glyph: (
      <>
        <path d="M6 6 V38 H38" />
        <path d="M11 31 L18 24 L24 28 L30 17" />
        <path d="M30 17 L38 10" strokeDasharray="3 3" />
        <circle cx="30" cy="17" r="2.5" />
      </>
    ),
  },
  {
    name: "Sentinel",
    desc: "The error that never reaches production.",
    tags: ["B2B", "Autonomous Ops"],
    d: 160,
    glyph: (
      <>
        <path d="M22 5 L37 11 V22 C37 30 30 37 22 40 C14 37 7 30 7 22 V11 Z" />
        <path d="M16 22 L20 26 L29 16" />
      </>
    ),
  },
  {
    name: "Pulse",
    desc: "Enterprise-grade intelligence, pocket-sized.",
    tags: ["B2C", "Personal Finance"],
    d: 240,
    glyph: (
      <>
        <path d="M5 22 H13 L17 11 L24 33 L28 22 H39" />
        <circle cx="39" cy="22" r="2.5" />
      </>
    ),
  },
];

const STEPS = [
  { n: "01", name: "Discover", desc: "We audit what you run today and what it costs you.", d: 0 },
  { n: "02", name: "Map", desc: "Your data gets a single shape. Every source, one truth.", d: 60 },
  { n: "03", name: "Model", desc: "We train on your history, not a generic benchmark.", d: 120 },
  { n: "04", name: "Build", desc: "Interfaces your team adopts without a training manual.", d: 180 },
  { n: "05", name: "Deploy", desc: "Live in weeks. Your legacy stack keeps running underneath.", d: 240 },
  { n: "06", name: "Compound", desc: "The system sharpens every quarter it stays on.", d: 300 },
];

const QUOTES = [
  {
    text: "“We closed the quarter in two days. It used to take eleven.”",
    initials: "SR",
    name: "S. Rajbhandari",
    role: "CFO — Himal Logistics",
    d: 0,
  },
  {
    text: "“Oracle called our Q3 dip six weeks out. We were ready for it.”",
    initials: "AT",
    name: "A. Tamang",
    role: "VP Revenue — Meridian Retail",
    d: 80,
  },
  {
    text: "“Our analysts stopped building reports and started building strategy.”",
    initials: "DK",
    name: "D. Karki",
    role: "Head of Ops — Nexa Group",
    d: 160,
  },
];

const POSTS = [
  {
    date: "12 Jun 2026",
    read: "6 min read",
    title: "Why your forecast is wrong, and your data isn't to blame",
    d: 0,
    thumb: (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M20 170 L80 130 L140 145 L200 90" />
        <path d="M200 90 L310 40" strokeDasharray="5 5" />
        <path d="M200 90 L310 120" strokeDasharray="5 5" />
        <path d="M200 90 L310 78" />
        <circle cx="200" cy="90" r="5" />
        <path d="M20 20 V180 H310" opacity="0.4" />
      </svg>
    ),
  },
  {
    date: "28 May 2026",
    read: "4 min read",
    title: "The hidden tax of software nobody knows how to use",
    d: 80,
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
    d: 160,
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
];

const CAPS = [
  {
    name: "Ingest",
    idx: "01 / 04",
    desc: "Every source, one schema. No pipelines to babysit.",
    tools: ["Streaming", "Warehouse", "Legacy ERP"],
    d: 0,
    diagram: (
      <svg className="cap__diagram" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M10 18 C 90 18, 110 60, 175 60" />
        <path d="M10 46 C 90 46, 125 60, 175 60" />
        <path d="M10 74 C 90 74, 125 60, 175 60" />
        <path d="M10 102 C 90 102, 110 60, 175 60" />
        <circle cx="180" cy="60" r="7" />
        <path d="M190 60 H 290" />
        <path d="M282 54 L290 60 L282 66" />
      </svg>
    ),
  },
  {
    name: "Reason",
    idx: "02 / 04",
    desc: "Models that explain themselves, not just answer.",
    tools: ["Reasoning", "Audit Trail", "Citations"],
    d: 80,
    diagram: (
      <svg className="cap__diagram" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M40 60 L110 25 M40 60 L110 60 M40 60 L110 95" />
        <path d="M110 25 L190 60 M110 60 L190 60 M110 95 L190 60" />
        <path d="M190 60 L260 60" />
        <circle cx="40" cy="60" r="6" />
        <circle cx="110" cy="25" r="6" />
        <circle cx="110" cy="60" r="6" />
        <circle cx="110" cy="95" r="6" />
        <circle cx="190" cy="60" r="6" />
        <circle cx="260" cy="60" r="9" strokeDasharray="2 4" />
      </svg>
    ),
  },
  {
    name: "Predict",
    idx: "03 / 04",
    desc: "Revenue, churn and loss — forecast with confidence intervals.",
    tools: ["Scenarios", "Backtesting", "Alerts"],
    d: 160,
    diagram: (
      <svg className="cap__diagram" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M10 110 V10 M10 110 H290" opacity="0.4" />
        <path d="M22 92 L60 74 L100 82 L145 48" />
        <circle cx="145" cy="48" r="4" />
        <path d="M145 48 L288 16" strokeDasharray="4 4" />
        <path d="M145 48 L288 62" strokeDasharray="4 4" />
        <path d="M145 48 L288 38" />
      </svg>
    ),
  },
  {
    name: "Act",
    idx: "04 / 04",
    desc: "Decisions execute themselves. You keep the veto.",
    tools: ["Workflows", "Approvals", "Rollback"],
    d: 240,
    diagram: (
      <svg className="cap__diagram" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M10 60 H110" />
        <path d="M150 25 L185 60 L150 95 L115 60 Z" />
        <path d="M190 60 H250 M250 60 L250 28 H290 M250 60 L250 92 H290" />
        <path d="M282 22 L290 28 L282 34" />
        <path d="M282 86 L290 92 L282 98" />
        <circle cx="10" cy="60" r="5" />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: "Do we have to replace our current systems?",
    a: "No. We sit on top of what you already run. Your ERP, warehouse and spreadsheets keep working — we read from them, and over time your team simply stops opening them.",
  },
  {
    q: "How long until we see something real?",
    a: "First working dashboard in three weeks. Full deployment typically lands between eight and twelve weeks, depending on how many sources we're mapping.",
  },
  {
    q: "Where does our data live?",
    a: "Wherever you need it to. Our cloud, your cloud, or fully on-premise. We never train shared models on your data — your history stays yours.",
  },
  {
    q: "Can we trust an AI forecast?",
    a: "Only if it shows its work. Every number Oracle produces ships with its confidence interval, the inputs that drove it, and a backtest against your own history. You audit it before you act on it.",
  },
  {
    q: "Do you work with companies outside Nepal?",
    a: "We're building from Kathmandu for twelve markets. Time zones have never been the hard part — we run overlapping hours with every client we take on.",
  },
];

export default function Home() {
  usePageMeta(
    "NPTECH — Complex software, made obvious.",
    "North Pole Tech builds AI-native SaaS that turns operational noise into decisions you can defend. Kathmandu, Nepal."
  );

  const [ready, setReady] = useState(false);
  useEffect(() => {
    const r = requestAnimationFrame(() =>
      requestAnimationFrame(() => setReady(true))
    );
    return () => cancelAnimationFrame(r);
  }, []);

  return (
    <>
      {/* 001 — HERO */}
      <section className={"hero inv" + (ready ? " is-ready" : "")}>
        <div className="hero__grid" aria-hidden="true"></div>

        <div className="hero__polar" aria-hidden="true">
          <svg className="polar" viewBox="0 0 400 400">
            <g className="polar__spin">
              <circle className="polar__ring" cx="200" cy="200" r="192" strokeDasharray="2 7" />
            </g>
            <circle className="polar__ring" cx="200" cy="200" r="162" />
            <circle className="polar__ring" cx="200" cy="200" r="122" />
            <circle className="polar__ring" cx="200" cy="200" r="82" />
            <circle className="polar__ring" cx="200" cy="200" r="42" />
            <g className="polar__mer polar__spin polar__spin--rev">
              <line x1="200" y1="38" x2="200" y2="362" />
              <line x1="200" y1="38" x2="200" y2="362" transform="rotate(30 200 200)" />
              <line x1="200" y1="38" x2="200" y2="362" transform="rotate(60 200 200)" />
              <line x1="200" y1="38" x2="200" y2="362" transform="rotate(90 200 200)" />
              <line x1="200" y1="38" x2="200" y2="362" transform="rotate(120 200 200)" />
              <line x1="200" y1="38" x2="200" y2="362" transform="rotate(150 200 200)" />
            </g>
            <circle className="polar__dot" cx="200" cy="200" r="3.5" />
            <circle className="polar__dot" cx="200" cy="38" r="5" />
          </svg>
        </div>

        <div className="wrap hero__inner">
          <div className="hero__eyebrow hero__fade" style={{ "--d": "120ms" }}>
            <svg className="mark" viewBox="0 0 24 24" aria-hidden="true" style={{ width: "14px", height: "14px" }}>
              <circle cx="12" cy="12" r="10.5" />
              <path d="M12 1.5V22.5M1.5 12H22.5" />
            </svg>
            <span className="label" style={{ color: "#fff" }}>North Pole Tech</span>
            <span className="label">— Kathmandu, Nepal</span>
          </div>

          <h1 className="display caps hero__title">
            <span className="ln"><span style={{ "--d": "200ms" }}>Complex</span></span>
            <span className="ln"><span style={{ "--d": "300ms" }}>software,</span></span>
            <span className="ln"><span style={{ "--d": "400ms" }}>made obvious.</span></span>
          </h1>

          <div className="hero__row">
            <p className="lead hero__fade" style={{ "--d": "620ms" }}>
              AI-native SaaS that turns operational noise into decisions you can defend.
            </p>
            <div className="hero__actions hero__fade" style={{ "--d": "720ms" }}>
              <Link className="btn btn--solid" to="/products">
                Explore products
                <Arrow />
              </Link>
              <Link className="btn" to="/contact">Talk to us</Link>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="hero__strip hero__fade" style={{ "--d": "840ms" }}>
            <div className="hero__cell"><span className="label">01</span><b>Data Intelligence</b></div>
            <div className="hero__cell"><span className="label">02</span><b>Predictive Forecasting</b></div>
            <div className="hero__cell"><span className="label">03</span><b>Decision Systems</b></div>
            <div className="hero__cell"><span className="label">04</span><b>Autonomous Operations</b></div>
          </div>
        </div>
      </section>

      {/* 002 — ABOUT */}
      <section className="section">
        <div className="wrap">
          <SectionHead num="002" tag="About" />
          <div className="split split--wide">
            <h2 className="h1 caps" data-reveal>We replace complexity with intelligence.</h2>
            <div className="stack">
              <p className="lead" data-reveal style={{ "--d": "80ms" }}>
                Legacy software asks you to learn it. Ours learns you.
              </p>
              <p className="measure muted" data-reveal style={{ "--d": "160ms" }}>
                Every tool your business runs on was built for a world without machine intelligence.
                We rebuild that layer from the ground up — so the software reads the data, finds the
                pattern, and hands you the decision. Not the spreadsheet.
              </p>
              <div data-reveal style={{ "--d": "240ms" }}>
                <Link className="tlink" to="/about">
                  Our story
                  <Arrow size={11} className="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="metrics" style={{ marginTop: "clamp(3rem,6vw,5rem)" }} data-reveal>
            <div className="metric">
              <div className="metric__val"><Counter value={6} /></div>
              <div className="metric__lab label">Products in market</div>
            </div>
            <div className="metric">
              <div className="metric__val"><Counter value={140} />+</div>
              <div className="metric__lab label">Teams onboard</div>
            </div>
            <div className="metric">
              <div className="metric__val"><Counter value={12} /></div>
              <div className="metric__lab label">Markets served</div>
            </div>
            <div className="metric">
              <div className="metric__val"><Counter value={99.9} />%</div>
              <div className="metric__lab label">Platform uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* 003 — PRODUCTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead num="003" tag="Products" />
          <div className="split split--wide" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <h2 className="h1 caps" data-reveal>Four products. One brain.</h2>
            <p className="lead" data-reveal style={{ "--d": "80ms" }}>
              Built to stand alone. Designed to compound together.
            </p>
          </div>

          <div className="products">
            {PRODUCTS.map((p) => (
              <Link className="product" to="/products" key={p.name} data-reveal style={p.d ? { "--d": `${p.d}ms` } : undefined}>
                <div className="product__id">
                  <svg className="product__glyph" viewBox="0 0 44 44" aria-hidden="true">
                    {p.glyph}
                  </svg>
                  <span className="product__name">{p.name}</span>
                </div>
                <p className="product__desc">{p.desc}</p>
                <div className="product__meta">
                  {p.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
                <span className="product__go" aria-hidden="true">
                  <Arrow size={13} className="" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 004 — PLATFORM */}
      <section className="section inv">
        <div className="wrap">
          <SectionHead num="004" tag="Platform" />
          <div className="split split--wide" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <h2 className="h1 caps" data-reveal>One platform underneath all of it.</h2>
            <p className="lead" data-reveal style={{ "--d": "80ms" }}>
              Four layers. Every product stands on the same ground.
            </p>
          </div>

          <div className="caps-grid">
            {CAPS.map((c) => (
              <article className="cap" key={c.name} data-reveal style={c.d ? { "--d": `${c.d}ms` } : undefined}>
                <div className="cap__top">
                  <h3 className="h3 caps">{c.name}</h3>
                  <span className="label">{c.idx}</span>
                </div>
                {c.diagram}
                <p className="muted">{c.desc}</p>
                <div className="cap__tools">
                  {c.tools.map((t) => (
                    <span className="label" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 005 — PROCESS */}
      <section className="section">
        <div className="wrap">
          <SectionHead num="005" tag="Process" />
          <div className="split split--wide" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <h2 className="h1 caps" data-reveal>Six steps. No surprises.</h2>
            <p className="lead" data-reveal style={{ "--d": "80ms" }}>
              From first call to compounding returns, you always know where you stand.
            </p>
          </div>

          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n} data-reveal style={s.d ? { "--d": `${s.d}ms` } : undefined}>
                <span className="label">Step {s.n}</span>
                <h3 className="step__name">{s.name}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 006 — TESTIMONIALS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead num="006" tag="Clients" />
          <h2 className="h1 caps" data-reveal style={{ marginBottom: "clamp(2.5rem,5vw,3.5rem)", maxWidth: "18ch" }}>
            Trusted by teams who outgrew their tools.
          </h2>

          <div className="rating" data-reveal>
            <span className="rating__score">4.9</span>
            <span className="label">Average rating<br />across 140+ teams</span>
            <span className="sechead__rule" style={{ minWidth: "40px" }}></span>
            <span className="rating__score">61%</span>
            <span className="label">Median drop in<br />manual reporting hours</span>
          </div>

          <div className="quotes">
            {QUOTES.map((q) => (
              <figure className="quote" key={q.initials} data-reveal style={q.d ? { "--d": `${q.d}ms` } : undefined}>
                <blockquote className="quote__text">{q.text}</blockquote>
                <figcaption className="quote__by">
                  <span className="avatar" aria-hidden="true">{q.initials}</span>
                  <span>
                    <b style={{ fontWeight: 500 }}>{q.name}</b><br />
                    <span className="label">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 007 — INSIGHTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead num="007" tag="Insights" />
          <div className="split split--wide" style={{ marginBottom: "clamp(2.5rem,5vw,3.5rem)" }}>
            <h2 className="h1 caps" data-reveal>Notes from the frontier.</h2>
            <p className="lead" data-reveal style={{ "--d": "80ms" }}>
              What we're learning while we build it.
            </p>
          </div>

          <div className="posts">
            {POSTS.map((p) => (
              <Link className="post" to="/insights" key={p.title} data-reveal style={p.d ? { "--d": `${p.d}ms` } : undefined}>
                <div className="post__meta">
                  <span className="label">{p.date}</span><span className="label">{p.read}</span>
                </div>
                <h3 className="post__title">{p.title}</h3>
                <div className="post__thumb">{p.thumb}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 008 — FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead num="008" tag="FAQ" />
          <div className="split split--wide">
            <div className="stack">
              <h2 className="h1 caps" data-reveal>Questions,<br />answered.</h2>
              <p className="measure muted" data-reveal style={{ "--d": "80ms" }}>
                Still stuck? We answer every email within one business day.
              </p>
              <div data-reveal style={{ "--d": "160ms" }}>
                <Link className="tlink" to="/contact">
                  Ask us directly
                  <Arrow size={11} className="" />
                </Link>
              </div>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* 009 — CTA + FOOTER */}
      <section className="inv">
        <Marquee />
        <div className="wrap">
          <Cta
            label="009 — Start here"
            title={<>Bring us your<br />hardest system.</>}
          >
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
