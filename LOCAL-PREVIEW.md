# Architecture portfolio — local preview

This checkout is the Curri Architect portfolio, with the architecture homepage, project galleries and contact page. The separate `Documents/Curri-Architect` folder currently contains the estimating workspace; it is not the target of these portfolio improvements.

From this directory, run:

```powershell
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Open http://127.0.0.1:3001/.

## Current full redesign

- Full-width panoramic opening photograph above one orange signature band.
- Original Curri icon and drawn wordmark preserved; the logo orange remains `#ff6600`.
- Site-board project chapters replace the staggered card grid; category filtering remains available in the archive.
- Barlow Condensed architectural display type and Manrope body text; logo letterforms remain the original vectors.
- Scroll-driven image movement on desktop and phones, with continuous photographic apertures on desktop.
- Static stacked chapters on phones and a full reduced-motion alternative.
- Compact neutral footer and neutral contact layout, following the user's correction that orange was too dominant.
- Pure neutral grays replace the former green-tinted paper; dark mode uses lighter charcoal (`#242424` / `#303030`). Theme selection is preserved and available on phones.
- Full-path page shutters, masked word reveals, staggered text/panel arrivals and photograph openings run throughout all pages. Reduced-motion and no-JavaScript alternatives remain readable.
- Contact prepares an email in the visitor's email application; it does not transmit the form to a backend.
- Mobile navigation includes keyboard dismissal, protected background content and focus restoration.

The project names, descriptions and Unsplash image URLs are the existing repository content, not newly verified studio projects. Replace them in `src/data/projects.ts` when the studio's actual project material is available.

This version is published separately as `artkelmendi/curriarchitect-v2`, following the user's explicit publishing request. The original `artkelmendi/curri-architect` repository is not overwritten. GitHub Actions builds the static site using `/curriarchitect-v2` as its base path and publishes to GitHub Pages. Local development uses no base path.

The original vector logo draws its outlines and resolves to the solid icon/wordmark on first appearance. A short startup identity moment introduces the studio; scroll and page arrivals follow it. Reduced-motion visitors see the complete logo immediately.
