import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { Arrow } from "../lib/icons.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Counter from "../components/Counter.jsx";
import Marquee from "../components/Marquee.jsx";
import Cta from "../components/Cta.jsx";
import Footer from "../components/Footer.jsx";

const VALUES = [
  { n: "01", title: "Clarity over cleverness", desc: "If it needs a manual, we built it wrong.", d: 0 },
  { n: "02", title: "Evidence over opinion", desc: "Every number shows its work, or it doesn't ship.", d: 80 },
  { n: "03", title: "Autonomy with a veto", desc: "The machine acts. The human always decides.", d: 160 },
];

const NUMBERS = [
  { value: 2019, label: "Founded in Kathmandu" },
  { value: 48, label: "Engineers & designers" },
  { value: 140, suffix: "+", label: "Teams onboard" },
  { value: 0, label: "Clients lost to churn" },
];

const LEADERSHIP = [
  { n: "01", name: "R. Shrestha", desc: "Founder & CEO — spent a decade untangling enterprise systems before deciding to replace them.", d: 0 },
  { n: "02", name: "P. Gurung", desc: "Chief Technology Officer — builds the reasoning layer every product stands on.", d: 60 },
  { n: "03", name: "M. Adhikari", desc: "Head of Product — decides what we don't build, which is most of it.", d: 120 },
  { n: "04", name: "S. Bhattarai", desc: "Head of Research — makes sure the forecast can survive its own backtest.", d: 180 },
];

export default function About() {
  usePageMeta(
    "About — NPTECH",
    "North Pole Tech builds AI-native software from Kathmandu. Clarity over cleverness, evidence over opinion."
  );

  return (
    <>
      <section className="phead">
        <div className="phead__grid" aria-hidden="true"></div>
        <div className="wrap phead__inner">
          <div className="crumb" data-reveal>
            <span className="label">002</span>
            <span className="label">/</span>
            <span className="label" style={{ color: "var(--fg)" }}>About</span>
          </div>
          <h1 className="display caps" style={{ maxWidth: "14ch" }} data-reveal>
            We build from the top of the world.
          </h1>
          <p className="lead" style={{ marginTop: "2rem", "--d": "80ms" }} data-reveal>
            Kathmandu is where we are. The frontier is what we build toward.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead num="001" tag="Story" />
          <div className="split split--wide">
            <h2 className="h1 caps" data-reveal>Founded on one frustration.</h2>
            <div className="stack">
              <p className="lead" data-reveal>Software got powerful. It never got easier.</p>
              <p className="measure muted" data-reveal style={{ "--d": "80ms" }}>
                We spent years inside enterprise systems that could answer any question — as long as
                someone spent three weeks learning how to ask it. The intelligence was there. The
                translation layer was missing, and it was costing businesses their best decisions.
              </p>
              <p className="measure muted" data-reveal style={{ "--d": "160ms" }}>
                So in 2019 we started North Pole Tech to rebuild that layer. Not another dashboard.
                A system that reads the data, finds the pattern, explains itself, and gets out of
                the way. Six products later, we're still building toward the same thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section inv">
        <div className="wrap">
          <SectionHead num="002" tag="Principles" />
          <h2 className="h1 caps" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)", maxWidth: "16ch" }} data-reveal>
            Three rules we don't bend.
          </h2>
          <div className="values">
            {VALUES.map((v) => (
              <article className="value" key={v.n} data-reveal style={v.d ? { "--d": `${v.d}ms` } : undefined}>
                <span className="label">{v.n}</span>
                <h3 className="h3 caps">{v.title}</h3>
                <p className="muted">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section">
        <div className="wrap">
          <SectionHead num="003" tag="By the numbers" />
          <div className="split split--wide" style={{ marginBottom: "clamp(2.5rem,5vw,3.5rem)" }}>
            <h2 className="h1 caps" data-reveal>Seven years,<br />counting.</h2>
            <p className="lead" data-reveal style={{ "--d": "80ms" }}>
              We grew slowly on purpose. Every client stayed.
            </p>
          </div>
          <div className="metrics" data-reveal>
            {NUMBERS.map((m) => (
              <div className="metric" key={m.label}>
                <div className="metric__val"><Counter value={m.value} />{m.suffix}</div>
                <div className="metric__lab label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead num="004" tag="Leadership" />
          <div className="split split--wide" style={{ marginBottom: "clamp(2.5rem,5vw,3.5rem)" }}>
            <h2 className="h1 caps" data-reveal>The people<br />accountable.</h2>
            <p className="lead" data-reveal style={{ "--d": "80ms" }}>
              Small team. Short chain. You'll meet whoever owns your build.
            </p>
          </div>
          <div className="steps">
            {LEADERSHIP.map((p) => (
              <div className="step" key={p.n} data-reveal style={p.d ? { "--d": `${p.d}ms` } : undefined}>
                <span className="label">{p.n}</span>
                <h3 className="step__name">{p.name}</h3>
                <p className="step__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="inv">
        <Marquee />
        <div className="wrap">
          <Cta label="005 — Start here" title={<>Bring us your<br />hardest system.</>}>
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
