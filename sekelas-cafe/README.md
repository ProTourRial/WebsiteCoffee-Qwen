# SEKELAS CAFE — single-page site

Dark, developer-portfolio-inspired specialty coffee cafe website.

**Stack:** React 18 + Vite · Tailwind CSS · Framer Motion · Lucide React

## Run

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the production build
```

## Structure

- `src/data.js` — all content (cafe info, menu, gallery, testimonials) in one editable file
- `src/motion.js` — Framer Motion variants + `usePrefersReducedMotion` + live open/closed hook
- `src/components/ui.jsx` — Button, Card, SectionLabel, Input primitives
- `src/components/*` — one component per section (Navbar, Hero, About, Menu, Gallery,
  Testimonials, Visit, Newsletter, StyleGuide, Footer)
- `tailwind.config.js` — custom color/font/shadow/keyframe tokens

## Notes

- Gallery "photos" are inline SVG scenes (zero image bytes shipped). Swap the `Scene`
  components in `Gallery.jsx` for `<img loading="lazy">` when real photography is ready.
- The map is a dark-styled SVG placeholder; replace with a real iframe embed if desired.
- Accessibility: WCAG AA contrast, keyboard navigable, ARIA labels, skip link,
  `prefers-reduced-motion` respected globally and per-animation.
