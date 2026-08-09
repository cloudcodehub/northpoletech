import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { Arrow, Check } from "../lib/icons.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Faq from "../components/Faq.jsx";
import Cta from "../components/Cta.jsx";
import Footer from "../components/Footer.jsx";

const PLANS = [
  {
    kicker: "01 — Starter",
    muted: "For teams proving the case.",
    price: { amount: "$890", period: "/ month" },
    cta: { label: "Start free trial", solid: false },
    feature: false,
    features: [
      "Atlas, full access",
      "Up to 10 data sources",
      "Unlimited seats",
      "Email support, 1 business day",
      "30-day history",
    ],
    d: 0,
  },
  {
    kicker: "02 — Growth",
    chip: "Most chosen",
    muted: "For teams running on it daily.",
    price: { amount: "$2,400", period: "/ month" },
    cta: { label: "Book a demo", solid: true },
    feature: true,
    features: [
      "Atlas, Oracle and Sentinel",
      "Unlimited data sources",
      "Forecasting with backtests",
      "Autonomous workflows",
      "Named engineer on Slack",
      "Full history, no cap",
    ],
    d: 80,
  },
  {
    kicker: "03 — Enterprise",
    muted: "For the systems that can't go down.",
    price: { amount: "Custom" },
    cta: { label: "Talk to us", solid: false },
    feature: false,
    features: [
      "Everything in Growth",
      "On-premise or your cloud",
      "Models trained on your history",
      "Custom connectors, built by us",
      "99.99% SLA",
      "Quarterly review with our founders",
    ],
    d: 160,
  },
];

const FAQ_ITEMS = [
  {
    q: "Why don't you charge per seat?",
    a: "Because per-seat pricing punishes you for letting people see their own data. Add everyone. The system is worth more when the whole company can ask it questions.",
  },
  {
    q: "Is there a free trial?",
    a: "Fourteen days on Starter, no card. We'll connect two of your real sources during onboarding — a demo on fake data tells you nothing.",
  },
  {
    q: "What does implementation cost?",
    a: "Nothing on Starter and Growth — onboarding is included. Enterprise deployments are scoped case by case, and we quote before we start.",
  },
  {
    q: "Can we change plans later?",
    a: "Up or down, any time, prorated. No exit interview and no penalty. If you're leaving, we'd rather know why than hold you.",
  },
  {
    q: "Do you price differently in Nepal?",
    a: "Yes. We run regional pricing for South Asian businesses and a standing discount for local startups under three years old. Ask us.",
  },
];

export default function Pricing() {
  usePageMeta(
    "Pricing — NPTECH",
    "Three ways to work with NPTECH. Priced per decision made, not per seat filled."
  );

  return (
    <>
      <section className="phead">
        <div className="phead__grid" aria-hidden="true"></div>
        <div className="wrap phead__inner">
          <div className="crumb" data-reveal>
            <span className="label">004</span><span className="label">/</span>
            <span className="label" style={{ color: "var(--fg)" }}>Pricing</span>
          </div>
          <h1 className="display caps" style={{ maxWidth: "13ch" }} data-reveal>
            Priced by outcome, not by seat.
          </h1>
          <p className="lead" style={{ marginTop: "2rem", "--d": "80ms" }} data-reveal>
            Add your whole team. We charge for what the system decides, not who logs in.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--sec-y)" }}>
        <div className="wrap">
          <div className="plans">
            {PLANS.map((plan) => (
              <article
                className={"plan" + (plan.feature ? " plan--feature" : "")}
                key={plan.kicker}
                data-reveal
                style={plan.d ? { "--d": `${plan.d}ms` } : undefined}
              >
                <div>
                  <div className="plan__kicker">
                    <span className="label">{plan.kicker}</span>
                    {plan.chip && <span className="chip">{plan.chip}</span>}
                  </div>
                  <p className="muted" style={{ marginTop: "0.75rem" }}>{plan.muted}</p>
                </div>
                <div className="plan__price">
                  {plan.price.amount}{" "}
                  {plan.price.period && <span>{plan.price.period}</span>}
                </div>
                <Link
                  className={"btn" + (plan.cta.solid ? " btn--solid" : "")}
                  to="/contact"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {plan.cta.label}
                </Link>
                <ul className="plan__list">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="label" style={{ textAlign: "center", marginTop: "2rem" }} data-reveal>
            All plans billed annually · Pulse is free on mobile for everyone
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section inv">
        <div className="wrap">
          <SectionHead num="002" tag="FAQ" />
          <div className="split split--wide">
            <div className="stack">
              <h2 className="h1 caps" data-reveal>Before<br />you ask.</h2>
              <p className="measure muted" data-reveal style={{ "--d": "80ms" }}>
                The five questions every buyer sends us.
              </p>
              <div data-reveal style={{ "--d": "160ms" }}>
                <Link className="tlink" to="/contact">
                  Ask a sixth
                  <Arrow size={11} className="" />
                </Link>
              </div>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="inv" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="wrap">
          <Cta label="003 — Start here" title={<>Try it on<br />real data.</>}>
            <Link className="btn btn--solid" to="/contact">
              Start free trial
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
