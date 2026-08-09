/* NPTECH — interaction layer. Vanilla, no dependencies. */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Nav: frosted state once past the hero lip ---- */
  var nav = document.querySelector("[data-nav]");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile drawer ---- */
  var burger = document.querySelector("[data-burger]");
  var drawer = document.querySelector("[data-drawer]");

  if (burger && drawer) {
    var setDrawer = function (open) {
      burger.classList.toggle("is-open", open);
      drawer.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };

    burger.addEventListener("click", function () {
      setDrawer(!drawer.classList.contains("is-open"));
    });

    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) setDrawer(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setDrawer(false);
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealables = document.querySelectorAll("[data-reveal]");

  if (reduced || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.1 });

    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero intro ---- */
  var hero = document.querySelector("[data-hero]");
  if (hero) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { hero.classList.add("is-ready"); });
    });
  }

  /* ---- Metric counters ---- */
  var counters = document.querySelectorAll("[data-count]");

  var runCount = function (el) {
    var target = parseFloat(el.dataset.count);
    var decimals = (el.dataset.count.split(".")[1] || "").length;
    var duration = 1400;
    var start = null;

    var tick = function (now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast out of the gate, settles precisely
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (counters.length) {
    if (reduced || !("IntersectionObserver" in window)) {
      counters.forEach(function (el) { el.textContent = el.dataset.count; });
    } else {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          co.unobserve(entry.target);
        });
      }, { threshold: 0.6 });

      counters.forEach(function (el) { co.observe(el); });
    }
  }

  /* ---- FAQ accordion (one open at a time) ---- */
  var faqItems = document.querySelectorAll("[data-faq]");

  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq__q");
    var panel = item.querySelector(".faq__a");
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var b = other.querySelector(".faq__q");
        var p = other.querySelector(".faq__a");
        if (b) b.setAttribute("aria-expanded", "false");
        if (p) p.setAttribute("aria-hidden", "true");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        panel.setAttribute("aria-hidden", "false");
      }
    });
  });

  /* ---- Marquee: duplicate the track so the loop is seamless ---- */
  document.querySelectorAll("[data-marquee]").forEach(function (m) {
    var track = m.querySelector(".marquee__track");
    if (!track) return;
    var clone = track.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    m.appendChild(clone);
  });

  /* ---- Contact form: front-end only, no endpoint wired ---- */
  var form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("[data-submit]");
      if (!btn) return;
      var original = btn.innerHTML;
      btn.innerHTML = "Message sent ✓";
      btn.disabled = true;
      setTimeout(function () {
        form.reset();
        btn.innerHTML = original;
        btn.disabled = false;
      }, 2600);
    });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
