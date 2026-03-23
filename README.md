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
- Your name, title, bio
- Your photo URL
- GitHub, LinkedIn, LeetCode, email links
- Skills list
- Certifications

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
