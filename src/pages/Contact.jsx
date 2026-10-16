import { usePageMeta } from "../hooks/usePageMeta.js";
import { Arrow } from "../lib/icons.jsx";
import Marquee from "../components/Marquee.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Durga+Mandir%2C+Kapan-12%2C+Kathmandu%2C+Nepal";
const MAP_EMBED =
  "https://maps.google.com/maps?q=Durga+Mandir%2C+Kapan%2C+Kathmandu%2C+Nepal&z=16&output=embed";
const underline = { borderBottom: "1px solid var(--rule)" };

export default function Contact() {
  usePageMeta(
    "Contact — NPTECH",
    "Talk to North Pole Tech. Kapan-12, Durga Mandir Kathmandu, Nepal Kathmandu Bagmati. We answer every message within one business day."
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

              <div className="map map--embed" style={{ marginBottom: "2.5rem" }}>
                <iframe
                  className="map__frame"
                  title="North Pole Tech on Google Maps: Kapan-12, Durga Mandir Kathmandu"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
                <div className="map__bar">
                  <span className="label">Kapan-12, Kathmandu</span>
                  <a className="tlink" href={MAP_URL} target="_blank" rel="noopener">
                    Open in Maps
                    <Arrow size={11} className="" />
                  </a>
                </div>
              </div>

              <div>
                <div className="info-row">
                  <span className="label">Studio</span>
                  <p>Kapan-12, Durga Mandir Kathmandu,<br />Nepal Kathmandu Bagmati</p>
                </div>
                <div className="info-row">
                  <span className="label">General</span>
                  <p><a href="mailto:info.northpoletech@gmail.com" style={underline}>info.northpoletech@gmail.com</a></p>
                </div>
                <div className="info-row">
                  <span className="label">Sales</span>
                  <p><a href="mailto:info.northpoletech@gmail.com" style={underline}>info.northpoletech@gmail.com</a></p>
                </div>
                <div className="info-row">
                  <span className="label">Phone</span>
                  <p><a href="tel:+9779861497007" style={underline}>+977 9861497007</a></p>
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
