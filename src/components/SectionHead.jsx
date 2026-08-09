/** Numbered section header: `002 —————— About`. */
export default function SectionHead({ num, tag }) {
  return (
    <div className="sechead" data-reveal>
      <span className="sechead__num">{num}</span>
      <span className="sechead__rule"></span>
      <span className="sechead__tag">{tag}</span>
    </div>
  );
}
