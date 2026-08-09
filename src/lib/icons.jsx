// Shared inline SVG icons. No photography anywhere on the site — every
// visual is pure geometry, per the brand.

/** Polar-projection compass mark used in the logo, footer and marquee. */
export function Mark({ className = "mark", style }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" style={style}>
      <circle cx="12" cy="12" r="10.5" />
      <circle cx="12" cy="12" r="5.5" />
      <path d="M12 1.5V22.5M1.5 12H22.5" />
    </svg>
  );
}

/** The small diagonal "go" arrow that sits inside buttons and text links. */
export function Arrow({ size = 12, className = "btn__arrow" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 10L10 2M10 2H4M10 2v6" />
    </svg>
  );
}

/** Checkmark used in the pricing plan feature lists. */
export function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6.5L4.5 9L10 3" />
    </svg>
  );
}
