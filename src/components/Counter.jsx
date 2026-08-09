import { useEffect, useRef, useState } from "react";

/**
 * Metric counter that animates from 0 to `value` once it scrolls into view.
 * easeOutExpo — fast out of the gate, settles precisely. Preserves the number
 * of decimals implied by `value` (e.g. 99.9 counts to one decimal place).
 */
export default function Counter({ value }) {
  const ref = useRef(null);
  const str = String(value);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const decimals = (str.split(".")[1] || "").length;
    const target = parseFloat(str);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      setDisplay(str);
      return;
    }

    let raf;
    const run = () => {
      const duration = 1400;
      let start = null;
      const tick = (now) => {
        if (start === null) start = now;
        const p = Math.min((now - start) / duration, 1);
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setDisplay((target * eased).toFixed(decimals));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          run();
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [str]);

  return <span ref={ref}>{display}</span>;
}
