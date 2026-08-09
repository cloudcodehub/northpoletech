import { Mark } from "../lib/icons.jsx";

/**
 * Seamless scrolling marquee. The track is rendered twice so the loop has no
 * visible seam (the original did this by cloning the node at runtime).
 */
export default function Marquee({ text = "Let's build together" }) {
  const track = (
    <div className="marquee__track">
      {[0, 1, 2].map((i) => (
        <span className="marquee__item" key={i}>
          {text}
          <Mark />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      {track}
      {track}
    </div>
  );
}
