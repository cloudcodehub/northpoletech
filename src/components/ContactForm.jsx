import { useState } from "react";
import { Arrow } from "../lib/icons.jsx";

/**
 * Front-end only — there is no endpoint wired. Submit fakes a success state,
 * then resets. Point this at Formspree, Basin, or your own endpoint on launch.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSent(true);
    setTimeout(() => {
      form.reset();
      setSent(false);
    }, 2600);
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field">
        <label className="label" htmlFor="name">
          Your name
        </label>
        <input id="name" name="name" type="text" placeholder="Your full name" required />
      </div>

      <div className="field">
        <label className="label" htmlFor="email">
          Work email
        </label>
        <input id="email" name="email" type="email" placeholder="you@company.com" required />
      </div>

      <div className="field">
        <label className="label" htmlFor="company">
          Company
        </label>
        <input id="company" name="company" type="text" placeholder="Company name" />
      </div>

      <div className="field">
        <label className="label" htmlFor="interest">
          What do you need?
        </label>
        <select id="interest" name="interest" defaultValue="Atlas — data intelligence">
          <option>Atlas — data intelligence</option>
          <option>Oracle — forecasting</option>
          <option>Sentinel — autonomous ops</option>
          <option>Pulse — consumer app</option>
          <option>Something custom</option>
          <option>Just exploring</option>
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="message">
          The problem, in a sentence
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Our forecasting lives in nine spreadsheets and nobody trusts it."
          required
        ></textarea>
      </div>

      <button
        className="btn btn--solid"
        type="submit"
        disabled={sent}
        style={{ marginTop: "0.5rem" }}
      >
        {sent ? "Message sent ✓" : "Send message"}
        {!sent && <Arrow />}
      </button>

      <p className="label" style={{ marginTop: "1.25rem" }}>
        We reply within one business day. Always a person.
      </p>
    </form>
  );
}
