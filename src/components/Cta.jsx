/** Closing call-to-action block. `title` and the action buttons are passed in. */
export default function Cta({ label, title, children }) {
  return (
    <div className="cta">
      <span className="label" data-reveal>
        {label}
      </span>
      <h2 className="cta__title" data-reveal style={{ "--d": "80ms" }}>
        {title}
      </h2>
      <div className="cta__actions" data-reveal style={{ "--d": "160ms" }}>
        {children}
      </div>
    </div>
  );
}
