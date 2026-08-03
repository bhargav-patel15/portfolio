# Bhargav Patel — Portfolio

A clean, dark-themed personal portfolio built with React + Vite, ready to deploy to GitHub Pages.

---

## 🚀 Quick Start (Local Preview)

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev
# Open http://localhost:5173
```

---

## ✏️ How to Edit Your Portfolio

**All editable content is in one file: `src/config.js`**

Open `src/config.js` and update:
- Your name, title, bio, status badge
- `taglines` — phrases that cycle in the hero typewriter effect
- `stats` — the animated counters shown under the bio (ARR, incident scale, etc.)
- Your photo URL
- GitHub, LinkedIn, LeetCode, email links
- `experience` — work history bullets
- `education` — school, degree, dates, score
- `skillCategories` — skills grouped by category (also drives the filter tabs on the Skills section)
- `certifications`

## ✨ What's new in this version
- Light mode is now the default (toggle still available; your choice is remembered via `localStorage`)
- Education section
- Scroll-reveal animations on every section
- Animated stat counters in the hero
- Typewriter effect cycling through `profile.taglines`
- Skill category filter tabs
- Active-section highlighting in the nav bar as you scroll
- Click-to-copy email button in Contact

---

## 🌐 Deploy to GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Create a new repo, e.g. `portfolio` (can be private or public)
3. Copy the repo URL

### Step 2: Push your code
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
git push -u origin main
```

### Step 3: Update vite.config.js
Open `vite.config.js` and change the base to match your repo name:
```js
base: '/YOURREPO/',   // e.g. '/portfolio/'
```

### Step 4: Install gh-pages and deploy
```bash
npm install
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch automatically.

### Step 5: Enable GitHub Pages
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** / root
5. Save

Your portfolio will be live at:
**https://YOURUSERNAME.github.io/YOURREPO/**

---

## 📸 Adding Your Profile Photo

Option A — Use your GitHub avatar:
```js
// In src/config.js
photo: "https://avatars.githubusercontent.com/u/YOUR_GITHUB_USER_ID",
```

Option B — Upload a photo to your repo:
1. Add your photo to the `public/` folder (e.g. `public/photo.jpg`)
2. Set `photo: "/YOURREPO/photo.jpg"` in config.js

---

## 🔄 Updating Your Portfolio Later

1. Edit `src/config.js` (or any component)
2. Run `npm run deploy`

That's it — changes go live in ~1 minute.
