# Bhargav Patel — Portfolio

A responsive React + Vite portfolio for GitHub Pages, with a charcoal-and-lime visual design and light theme.

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173/portfolio/`).

## Content

Edit `src/config.js` for profile information, links, impact metrics, work highlights, experience, skills, education, and certifications. Work highlights describe professional accomplishments; the animated diagrams are illustrative, not live production telemetry. Keep claims and employment dates accurate when updating content.

- `highlights`: illustrated work cards with expandable engineering details
- `experience`: role summaries and achievement bullets; extra bullets expand on demand
- `skillCategories`: toolkit categories, descriptions, symbols, and skills; filters render automatically
- `profile.photo`: existing GitHub avatar URL, with an initials fallback on image failure

Layout and interactions live in `src/App.jsx`; responsive styles and animations live in `src/App.css`. The hero architecture playground contains illustrative node descriptions in `SystemMap`.

## Interactions and accessibility

- Click architecture nodes to explore backend responsibilities.
- Filter toolkit categories and expand contribution details.
- Switch between persistent light and dark themes.
- Use the mobile navigation, email link, copy-email button, and profile links.
- Keyboard focus indicators, skip navigation, semantic headings, and reduced-motion styles are included.
- Google Fonts and the GitHub avatar require connectivity; system fonts and initials provide fallbacks.

## Build and publish

```sh
npm run build
npm run preview
```

The existing Vite base is `/portfolio/`. Confirm it matches the GitHub Pages repository path before publishing. For an account-root site or custom domain, adjust the base accordingly.

To publish using the existing configured Git remote and `gh-pages` workflow:

```sh
npm run deploy
```

Deployment publishes `dist` to the `gh-pages` branch. In GitHub Pages settings, select that branch as the source. Local edits and builds alone do not change the hosted site.

## Adjust font sizes yourself

Open `src/App.css` and search for the selector you want to change:

- `.hero-description`: introductory paragraph
- `.work-content p`: work card descriptions
- `.job li`: experience bullets
- `.skill-card > p`: skill descriptions
- `.tags span`: skill and technology labels
- `.nav-links`: navigation text
- `h1`, `h2`, `h3`: headings

Increase or decrease `font-size`, for example `font-size: 14px` to `font-size: 16px`. Some styles use the shorthand `font: 11px/1.5 ui-monospace, monospace`; the first pixel value is the font size and `1.5` is line height. Check the `@media` sections near the bottom for mobile overrides of the same selector.

Preview with `npm run dev` and inspect both desktop and mobile widths. Then save the source to GitHub and publish:

```sh
cd /Users/bhargav/workspace/Portfolio/portfolio
npm run build
git add src/App.css
git commit -m "Adjust portfolio typography"
git push origin main
npm run deploy
```

If you changed other source files, add those specific files to the commit too. `git push` saves source changes; `npm run deploy` rebuilds and publishes the website. GitHub Pages can take a minute or two to update. Refresh the page after deployment.
