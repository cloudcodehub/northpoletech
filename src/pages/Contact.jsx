import { usePageMeta } from "../hooks/usePageMeta.js";
import { Arrow } from "../lib/icons.jsx";
import Marquee from "../components/Marquee.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

const MAP_URL =
  "https://maps.google.com/?q=P9M6%2BR65,+Budhanilkantha+44600,+Nepal";
const underline = { borderBottom: "1px solid var(--rule)" };

export default function Contact() {
  usePageMeta(
    "Contact — NPTECH",
    "Talk to North Pole Tech. Budhanilkantha, Kathmandu 44600, Nepal. We answer every message within one business day."
  );

  return (
    <>
      <section className="phead">
        <div className="phead__grid" aria-hidden="true"></div>
        <div className="wrap phead__inner">
          <div className="crumb" data-reveal>
            <span className="label">006</span><span className="label">/</span>
            <span className="label" style={{ color: "var(--fg)" }}>Contact</span>
          </div>
          <h1 className="display caps" style={{ maxWidth: "11ch" }} data-reveal>
            Let's build together.
          </h1>
          <p className="lead" style={{ marginTop: "2rem", "--d": "80ms" }} data-reveal>
            One message, one business day, one real engineer. No forms that go nowhere.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--sec-y)" }} id="form">
        <div className="wrap">
          <div className="contact-grid">
            {/* FORM */}
            <div data-reveal>
              <div className="sechead">
                <span className="sechead__num">001</span>
                <span className="sechead__rule"></span>
                <span className="sechead__tag">Tell us</span>
              </div>
              <ContactForm />
            </div>

            {/* INFO + MAP */}
            <div data-reveal style={{ "--d": "80ms" }}>
              <div className="sechead">
                <span className="sechead__num">002</span>
                <span className="sechead__rule"></span>
                <span className="sechead__tag">Find us</span>
              </div>

              <div className="map" style={{ marginBottom: "2.5rem" }}>
                {/* Contour motif: the Kathmandu valley, abstracted. No map tile, no colour. */}
                <svg className="map__lines" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <path d="M-20 60 C 60 40, 120 90, 200 70 C 280 50, 340 100, 420 80" />
                  <path d="M-20 100 C 60 80, 130 130, 200 110 C 270 90, 350 140, 420 120" />
                  <path d="M-20 140 C 70 120, 130 170, 200 150 C 270 130, 350 180, 420 160" />
                  <path d="M-20 180 C 60 160, 140 210, 200 190 C 260 170, 350 220, 420 200" />
                  <path d="M-20 220 C 70 200, 130 250, 200 230 C 270 210, 340 260, 420 240" />
                  <path d="M-20 20 C 70 0, 130 50, 200 30 C 270 10, 340 60, 420 40" />
                  <path d="M60 -20 V300 M140 -20 V300 M220 -20 V300 M300 -20 V300" opacity="0.35" />
                </svg>

                <div className="map__pin">
                  <span className="map__dot" aria-hidden="true"></span>
                  <span className="label" style={{ color: "var(--fg)" }}>NPTech HQ</span>
                  <span className="label">27.7772° N · 85.3620° E</span>
                  <a className="tlink" href={MAP_URL} target="_blank" rel="noopener" style={{ marginTop: "0.5rem" }}>
                    Open in Maps
                    <Arrow size={11} className="" />
                  </a>
                </div>
              </div>

              <div>
                <div className="info-row">
                  <span className="label">Studio</span>
                  <p>P9M6+R65, Budhanilkantha<br />Kathmandu 44600, Nepal</p>
                </div>
                <div className="info-row">
                  <span className="label">General</span>
                  <p><a href="mailto:hello@nptech.io" style={underline}>hello@nptech.io</a></p>
                </div>
                <div className="info-row">
                  <span className="label">Sales</span>
                  <p><a href="mailto:sales@nptech.io" style={underline}>sales@nptech.io</a></p>
                </div>
                <div className="info-row">
                  <span className="label">Phone</span>
                  <p><a href="tel:+97714567890" style={underline}>+977 1 456 7890</a></p>
                </div>
                <div className="info-row">
                  <span className="label">Hours</span>
                  <p>Sun — Fri, 09:00 — 18:00 NPT<br /><span className="muted">We overlap with every client we take on.</span></p>
                </div>
                <div className="info-row" style={{ borderBottom: 0 }}>
                  <span className="label">Social</span>
                  <p style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                    <a href="#" style={underline}>LinkedIn</a>
                    <a href="#" style={underline}>X</a>
                    <a href="#" style={underline}>GitHub</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="inv">
        <Marquee />
        <div className="wrap">
          <Footer flush />
        </div>
      </section>
    </>
  );
}
