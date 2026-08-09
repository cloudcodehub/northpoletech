import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll-reveal for any element carrying a `data-reveal` attribute.
 * Re-runs on every route change so freshly-mounted page content animates in.
 * Honours `prefers-reduced-motion` by revealing everything immediately.
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll("[data-reveal]:not(.is-in)");

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}
