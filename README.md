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
