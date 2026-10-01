# Curri Architect v2

An editorial architecture portfolio with the original Curri vector logo, signature orange, neutral light/charcoal themes, English/Albanian content, project galleries and an email enquiry flow.

## Local preview

```bash
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Open [http://127.0.0.1:3001](http://127.0.0.1:3001).

Project text and images are editable in `src/data/projects.ts`. The existing project content and photography are illustrative, not independently verified studio projects. Replace them with the studio's real materials before representing them as built work.

The exact original logo geometry and drawn wordmark live in `src/components/LogoMark.tsx`. Draw-on effects use these paths, not a substitute font. The startup identity renders before hydration to prevent a flash of the page. Reduced-motion and no-JavaScript visitors receive static, readable alternatives.

## Publishing

Live site: [artkelmendi.github.io/curriarchitect-v2](https://artkelmendi.github.io/curriarchitect-v2/)

Pushes to `main` run `.github/workflows/github-pages.yml`. It builds the static export with `/curriarchitect-v2` as its base path and publishes the artifact through GitHub Pages. Pages must use **GitHub Actions** as its publishing source.

This repository is separate from `artkelmendi/curri-architect`; publishing v2 does not overwrite the original repository or site.

## Design and behavior

- Original orange `#ff6600` and exact icon/wordmark letterforms.
- Panoramic project boards, compact neutral footer and contact layout.
- Startup logo drawing, pathname transitions, masked titles, scroll entrances and restrained image movement.
- Keyboard-safe navigation and reduced-motion alternatives.
- Contact prepares an email in the visitor's own email app; it does not silently submit to a server.

See `DESIGN.md` for the design system and `LOCAL-PREVIEW.md` for implementation notes.
