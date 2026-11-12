# Beacon Locksmith

Mobile locksmith site for Greater Boston. Real React + Vite project (not an HTML prototype).

## Stack

| Layer | Tech |
|-------|------|
| Build | Vite 5 |
| Framework | React 18 + React Router 6 |
| Animation | Framer Motion (page transitions, reveal) |
| Scroll scenes | GSAP + ScrollTrigger |
| 3D | React Three Fiber + drei + three.js (brass key on home hero) |
| Maps | Leaflet + react-leaflet (OpenStreetMap / CARTO Voyager tiles) |
| Styling | CSS custom properties + global.css (no CSS-in-JS at build time) |

## Commands

```bash
npm install
npm run dev     # http://localhost:5174
npm run build
npm run preview
```

## Routes

- `/` — home with 3D brass key, Leaflet coverage map, services, work strip
- `/services` + `/services/:slug` — 6 services with detail pages
- `/work` + `/work/:slug` — filterable case grid with animated transitions
- `/areas` + `/areas/:slug` — real coverage map of Greater Boston
- `/pricing`, `/emergency`, `/contact`, `/about`

## Interactive highlights

- **3D brass key** on home hero rotates on scroll (framer-motion `useScroll` → R3F `useFrame`). Procedural geometry: cylinder shaft, 5 bitting teeth with real 5-3-7-4-6 pattern, torus bow. Studio environment + contact shadows.
- **Real Leaflet map** of Greater Boston with Route 128 belt polygon, service pins as pulsing circle markers, click to navigate to area page. CARTO Voyager raster tiles — no Mapbox token needed.
- **Page transitions** via `AnimatePresence` + Framer Motion — pages fade + blur on exit, slide + unblur on enter.
- **GSAP ScrollTrigger** — hero key stage parallax, service card stagger reveals.
- **Scroll progress bar** — top red bar driven by `useScroll` spring.

## Data

`src/data/services.js` — services, cases, areas with real lat/lng coordinates (Boston, Cambridge, Brookline, Somerville, Newton, Quincy, …).
