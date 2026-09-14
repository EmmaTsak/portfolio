# Emmanouela Tsakalidou - Portfolio

Recruiter-focused software-development portfolio built with React, TypeScript and Vite. The site positions software development as the primary identity, with quality engineering and UI/UX as complementary, evidence-backed strengths.

## Highlights

- Flagship PriceWise bachelor-thesis case study with implemented application screenshots, research, UX process, architecture and testing distinctions
- Selected public GitHub projects rather than an unfiltered repository dump
- Responsive navigation and project filtering
- Custom 404, error boundary, offline notice, empty states, loading skeletons and broken-image fallback
- Accessibility-minded semantics, focus states and reduced-motion support
- Unit/component tests with Vitest + React Testing Library
- Playwright smoke tests
- GitHub Actions for CI and GitHub Pages deployment
- Dynamic sitemap/robots generation for the final Pages URL

## Tech

React · TypeScript · Vite · React Router · Lucide · Vitest · Testing Library · Playwright

## Local setup

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Optional browser smoke tests:

```bash
npx playwright install chromium
npm run test:e2e
```

## GitHub Pages deployment

1. Push this project to a GitHub repository whose default branch is `main`.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main` or run **Deploy to GitHub Pages** manually.
4. The Vite base path and `VITE_SITE_URL` are derived for the repository during GitHub Actions, so assets and React Router work from a repository subpath.
5. `public/404.html` preserves direct SPA routes on GitHub Pages by redirecting through the built entry page and restoring the requested path.

## Project structure

```text
src/
  app/          routing and application shell
  components/   reusable UI, navigation, error/loading states
  data/         profile and project content
  hooks/        online state and page metadata
  pages/        home, projects, case studies, resume, 404
  styles/       design system and responsive CSS
public/
  assets/       PriceWise implementation screenshots, thesis mockups and portfolio visuals
  404.html      GitHub Pages SPA fallback
.github/
  workflows/    CI + deployment
scripts/
  generate-seo.mjs
```

## Design system

Core palette:

- `#b06eda` — primary purple / interaction accent
- `#4d4352` — muted charcoal-purple surfaces
- `#b2a7b8` — lavender-grey secondary tone

The design intentionally avoids skill percentages, excessive neon, fake terminal decoration and fabricated product screenshots.

## Source integrity

Portfolio copy is based on the supplied CV, bachelor thesis and public repositories. PriceWise uses real screenshots of the implemented prototype for the main project presentation, while the earlier Figma work remains clearly labelled as design-process material. The portfolio does not describe Playwright scraping as automated UI testing, and it presents automated Jest testing for PriceWise as future work because that is how the thesis documents it.

## Accessibility

The site includes semantic landmarks, keyboard-accessible navigation, visible focus treatment, alt text, reduced-motion support, responsive layouts down to small mobile widths, and text labels in addition to colour cues.
