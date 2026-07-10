# NileCore Solutions — Demo Gallery

[Live gallery](https://nilecore-solutions.github.io/demos) · [nilecore.net](https://nilecore.net) · [hello@nilecore.net](mailto:hello@nilecore.net)

---

Real, working demos of the services NileCore Solutions builds — published openly so clients (and other developers) can inspect the source before committing to a project.

Each demo is a standalone page of three clean files (HTML + CSS + JS) — no npm, no build step, no frameworks. Open `index.html` directly in a browser or visit the live gallery above.

---

## Why these exist

Most freelancers and small agencies show no demos at all — just claims and stock photography. NileCore only claims experience in services it can demonstrate. That means real code, published on GitHub, that clients can click through and developers can read.

---

## Demo status

| #   | Demo                                                | Service / Package                            | Price        | Status         |
| --- | --------------------------------------------------- | -------------------------------------------- | ------------ | -------------- |
| 01  | [Analytics Dashboard](analytics-dashboard/)         | Included in Business & Professional packages | Custom Quote | 🔜 Coming soon |
| 02  | [E-Commerce Store](ecommerce-store/)                | E-Commerce add-on                            | +AED 5,000   | 🔜 Coming soon |
| 03  | [SEO Dashboard](seo-dashboard/)                     | SEO Keyword Research add-on                  | AED 700      | 🔜 Coming soon |
| 04  | [WhatsApp Business](whatsapp-business/)             | WhatsApp Business Setup                      | AED 200      | 🔜 Coming soon |
| 05  | [Google Business Profile](google-business-profile/) | Google Business Setup                        | AED 300      | 🔜 Coming soon |
| 06  | [Business Website](business-website/)               | Business package (5 pages)                   | AED 5,000    | ✅ Live        |
| 07  | [Web App Dashboard](web-app-dashboard/)             | Custom Web Application                       | Custom Quote | 🔜 Coming soon |
| 08  | [API Documentation](api-documentation/)             | REST API Development                         | Custom Quote | 🔜 Coming soon |

New demos replace their "Coming soon" placeholder on [the gallery](index.html) as soon as they're built and polished — nothing unfinished or AI-made ever represents NileCore publicly.

---

## Website packages

| Package      | Dev Only  | + Consultation Bundle |
| ------------ | --------- | --------------------- |
| Launch       | AED 2,500 | AED 3,000             |
| Business     | AED 5,000 | AED 6,500             |
| Professional | AED 9,000 | AED 12,000            |

---

## Repository structure

```text
demos/
  index.html                      ← gallery homepage
  README.md
  .gitignore

  Docs/                           ← planning and design documents
    NileCore-Demos-Planning.md    ← per-demo build checklists and technical specs
    NileCore-Demo-Design-Brief.md ← colour palettes and aliveness techniques per demo
    NileCore_Logos_README.md      ← brand asset usage guide

  brand/                          ← logos, favicons, SVG sprite
    icon-color.svg                ← standalone lightbulb icon (hardcoded colours)
    icon-white.svg
    logo-color.svg                ← standalone wordmark (hardcoded colours)
    logo-white.svg
    logo-sprites.svg              ← inline SVG sprite (CSS-variable fills, themed)
    watermark-dark.svg            ← semi-transparent mark for light backgrounds
    watermark-light.svg           ← semi-transparent mark for dark backgrounds
    favicon.ico / favicon.svg / …

  styles/                         ← shared CSS
    base.css                      ← design tokens, typography, spacing, dark mode
    gallery.css                   ← gallery page styles

  scripts/                        ← shared JS
    theme.js                      ← light/dark toggle (reads localStorage + OS preference)
    redirect.js                   ← reads data-redirect on <html> and navigates (no meta refresh)
    demos.js                      ← shared DEMOS data array (loaded by gallery and coming-soon)
    gallery.js                    ← renders demo cards into #js-demos-grid

  coming-soon/                    ← universal placeholder for unbuilt demos
    index.html
    styles.css
    app.js

  business-website/               ← Demo 06 ✅ Live — Pinnacle Corporate Services
    index.html                    ← Home
    services.html                 ← Services (6 expanded cards + process + FAQ)
    about.html                    ← About (story, timeline, team, values, credentials)
    case-studies.html             ← Case Studies (4 client results)
    contact.html                  ← Contact (form + map)
    styles.css                    ← all demo styles (extends base.css)
    app.js                        ← nav scroll, slider, FAQ, form validation, animations
  analytics-dashboard/            ← Demo 01 (redirect stub)
    index.html
  ecommerce-store/                ← Demo 02 (redirect stub)
    index.html
  seo-dashboard/                  ← Demo 03 (redirect stub)
    index.html
  whatsapp-business/              ← Demo 04 (redirect stub)
    index.html
  google-business-profile/        ← Demo 05 (redirect stub)
    index.html
  web-app-dashboard/              ← Demo 07 (redirect stub)
    index.html
  api-documentation/              ← Demo 08 (redirect stub)
    index.html
```

Demo folders that are not yet built contain a redirect stub — a minimal `index.html` that reads a `data-redirect` attribute and forwards the visitor to the coming-soon page via `redirect.js`. No `<meta http-equiv="refresh">` tags are used.

---

## Tech stack

Vanilla HTML + CSS + minimal JavaScript only. No frameworks, no build tools, no npm.

Where needed: [Chart.js](https://www.chartjs.org/) or [ApexCharts](https://apexcharts.com/) for charts · [AOS](https://michaelosthege.github.io/animate-on-scroll-library/) for scroll animations · [CountUp.js](https://inorganik.github.io/countUp.js/) for number animations · [Lucide](https://lucide.dev/) for icons · Plus Jakarta Sans + DM Sans via Google Fonts.

---

## Standards every demo meets

- Separate HTML, CSS, and JS files — no inline styles or scripts
- NileCore brand palette (Void Black, Nile Electric, Pharaoh Gold, Frost White) via CSS custom properties
- Light and dark mode — toggled by `theme.js`, persisted in `localStorage`
- Mobile responsive — tested at 375 px, 768 px, and 1280 px
- `globalThis` over `window` (SonarQube compliant)
- Native semantic HTML — `<ul>` / `<li>` for lists, `<hr>` for separators, no ARIA role substitutes for built-in elements
- `defer` on all external scripts — no render-blocking JavaScript
- SVG logos rendered via inline sprite (`<use href="#id">`) — crisp at any DPI, no external file requests on `file://`
- All internal links use explicit `index.html` for `file://` protocol compatibility
- Realistic fictional data only — no real client data, no Lorem ipsum, no round numbers
- No build step — open any `index.html` directly in a browser

---

## License

All rights reserved — see [LICENSE](LICENSE). This code is public so it can be viewed and evaluated, not reused: no copying, redistribution, or adaptation into other projects without written permission from NileCore Solutions FZE LLC. All business data shown (names, reviews, pricing) is fictional.

---

© 2025 NileCore Solutions FZE LLC · Ajman, UAE
