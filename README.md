# Samuel Librelon — Data, Analytics & Automation Portfolio

[![Live portfolio](https://img.shields.io/badge/live-samuellibrelon.github.io-2557d6)](https://samuellibrelon.github.io/)

![Portfolio preview](public/og.png)

## Objective

This portfolio positions Samuel Librelon for international Data Analyst,
Business Intelligence, Operations Analytics and Data Automation opportunities.
It leads with sanitized professional case studies, measurable impact and the
connection between technical execution and business decisions.

## Stack

- Vite
- React
- TypeScript
- Plain CSS with design tokens
- GitHub Pages

The site has no backend, UI framework, tracking script or runtime dependency on
external image and font services.

## Architecture

Portfolio content is separated from presentation components:

- `src/data/content.ts` contains bilingual site copy, configuration, impact
  metrics, case studies, skills, education and contact content.
- `src/data/projects.ts` contains the selected public technical projects.
- `src/data/experience.ts` contains the professional timeline.
- `src/components/` contains reusable page sections and conceptual workflow
  visuals.
- `src/styles/` contains tokens, global rules and component styles.
- `public/` contains the résumé, social preview, metadata files and optional
  image locations.

English is the default language. The `EN | PT` control updates all major copy
from the same typed data source and stores the visitor's preference in
`localStorage`.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Validation and production build

```bash
npm run typecheck
npm run build
npm run preview
```

Vite uses `base: '/'`, which is correct for the GitHub Pages user domain
`https://samuellibrelon.github.io/`.

## Project structure

```text
src/
  components/        Reusable portfolio sections
  data/              Typed bilingual content and configuration
  styles/            Tokens, global rules and component styles
  App.tsx             Language state and page composition
  main.tsx            React entry point
public/
  favicon/            Site icon
  images/             Optional profile, impact and project media
  resume/             Current international Data Analyst résumé
  og.png              Branded social preview card
  robots.txt
  sitemap.xml
.github/workflows/    GitHub Pages workflow (not executed locally)
```

## Accessibility and performance

- Semantic navigation, sections, lists, headings and timeline content
- Skip link, keyboard-visible focus styles and accessible mobile menu state
- Reduced-motion support and touch-friendly controls
- Responsive layouts tested from mobile through large desktop widths
- Local assets, explicit optional image dimensions and no unnecessary UI library
- SEO metadata, canonical URL, Open Graph/X metadata, Person JSON-LD, robots and sitemap

## Production image handling

The first professional case study uses the privacy-reviewed real presentation
photo at `public/images/impact/kaizen-presentation.webp`. Its projected screen
and employee badge are locally blurred, and the production asset contains no
EXIF metadata. The untouched high-resolution source is intentionally excluded
from the production tree and ignored by Git.

The optional profile-photo slot remains disabled. Never publish internal
dashboards, SAP screens, identifiers, supplier details, production data or
confidential slides.

## Deployment

The workflow at `.github/workflows/deploy.yml` is ready for GitHub Pages. It is
intentionally not run as part of local development. Enable GitHub Pages with
GitHub Actions as the source, review the final diff, then push only when the
portfolio has been approved for publication.
