# NPTECH — North Pole Tech

Marketing site for North Pole Tech (NPTech). **React + Vite** single-page app.
The former hand-maintained static HTML site lives in [`legacy/`](legacy/) for
reference; the React app is the current source of truth.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve the built bundle locally
```

No config beyond `vite.config.js`. Deploy `dist/` to any static host (Netlify,
Vercel, GitHub Pages, S3). For clean URLs on a static host, add an SPA fallback
so unknown paths serve `index.html` (Vite preview does this automatically).

## Structure

```
index.html              Vite entry — fonts, favicon, <div id="root">
src/
├── main.jsx            App bootstrap (BrowserRouter)
├── App.jsx             Routes → one Layout wrapping six pages
├── styles/style.css    Design system + all components (single global sheet)
├── lib/icons.jsx       Shared inline SVG marks (Mark, Arrow, Check)
├── hooks/
│   ├── useReveal.js    Scroll-reveal via IntersectionObserver, per route
│   └── usePageMeta.js  Per-route <title> + meta description
├── components/         Shared chrome & widgets
│   ├── Layout.jsx      Header + Drawer + <Outlet>; drawer + scroll state
│   ├── Header.jsx      Sticky nav (NavLink sets active state)
│   ├── Drawer.jsx      Mobile menu
│   ├── Footer.jsx      Footer (one source of truth for all pages)
│   ├── Marquee.jsx     Seamless scrolling band
│   ├── Cta.jsx         Closing call-to-action block
│   ├── SectionHead.jsx Numbered section header
│   ├── Counter.jsx     Count-up metric (IntersectionObserver + rAF)
│   ├── Faq.jsx         Accordion (one panel open at a time)
│   └── ContactForm.jsx Front-end-only form (fakes success)
└── pages/              Home · About · Products · Pricing · Insights · Contact
public/nptech.svg       Standalone logo asset
legacy/                 The original static HTML site, archived
```

### Why this shape

The old site copy-pasted the header, mobile drawer, and footer into all six
HTML files — a nav change meant editing six places. Those are now single
components in `src/components/`, and the six pages hold only their own content.
Page-specific styles that used to live in inline `<style>` blocks (products,
insights) were merged into `src/styles/style.css`.

## Design system

**Colour** — black and white only. No greys beyond neutral tints derived from
the two brand values. Components never hardcode a colour; they read semantic
tokens (`--bg`, `--fg`, `--fg-muted`, `--rule`, `--surface`, `--btn-bg`,
`--btn-fg`), so **any block inverts by adding `.inv`** — that single class flips
the whole token set.

**Type**
| Role | Face | Treatment |
|---|---|---|
| Display / headings | Inter Tight 600 | Uppercase, tracking `-0.045em` |
| Body | Inter 400 | Sentence case |
| Labels, numbers, meta | JetBrains Mono 500 | Uppercase, tracking `0.14em` |

All sizes are fluid via `clamp()`. **Layout** — 1440px max width, fluid gutters,
hairline (1px) rules instead of boxes and shadows.

## The mark

The company is *North Pole* Tech, so the logo is a **polar projection** —
concentric rings with meridian crosshairs, a compass rose seen from directly
above the pole. **There is no photography anywhere on this site.** Every visual —
hero, product glyphs, capability diagrams, article thumbnails, the contact map —
is inline SVG.

## Content notes

Copy is deliberately short: headlines under ~8 words, one sentence per idea,
single-word category labels. Sections are numbered as navigational scaffolding.

**Placeholders to replace before launch:**
- Metrics (6 products, 140+ teams, 12 markets, 99.9% uptime, 4.9 rating, 61%)
- All testimonials, client names and leadership names
- Pricing figures
- Article titles and dates (Insights links are placeholders — no article pages)
- `hello@nptech.io`, `+977 1 456 7890`, and the social links (currently `#`)

The address and Google Maps link are real: P9M6+R65, Budhanilkantha 44600, Nepal.

**The contact form has no backend.** `ContactForm.jsx` intercepts submit and
fakes a success state. Wire it to Formspree, Basin, or your own endpoint before
launch.

## Accessibility

Skip link, focus-visible rings, `aria-expanded` on the accordion and burger,
`aria-current` on the active nav item (via `NavLink`), semantic landmarks, and a
full `prefers-reduced-motion` path that disables every animation and reveal.

## Browser support

Modern evergreen browsers. Uses `clamp()`, CSS custom properties,
`grid-template-rows` transitions (the accordion), `backdrop-filter`, and
`IntersectionObserver` — with a reduced-motion fallback that renders all content
visible.
