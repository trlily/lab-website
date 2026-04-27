# Lab Website

Brain Imaging & AI Lab homepage — built with React + Vite + Tailwind CSS,
deployed automatically to GitHub Pages.

## Local development

```bash
npm install
npm run dev
# → http://localhost:5173/lab-website/
```

## Editing content

All content is centralized at the top of [`src/LabHomepage.jsx`](src/LabHomepage.jsx)
inside these constants:

- `LAB_INFO` — lab name, address, contact
- `RESEARCH_AREAS` — research focus cards
- `PUBLICATIONS` — papers grouped by year (`featured: true` for highlights)
- `MEMBERS` — profile grid
- `NEWS` — timeline entries

Edit those, save, and the site updates instantly during `npm run dev`.

## Deploying to GitHub Pages

### One-time setup

1. **Create a new repo on GitHub** named `lab-website` under your account
   (https://github.com/trlily). Public repo (free Pages).
2. **Push this folder** to the new repo:
   ```bash
   git init
   git add .
   git commit -m "Initial lab website"
   git branch -M main
   git remote add origin https://github.com/trlily/lab-website.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages → Build and deployment → Source:
   GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will run automatically and
   publish to:

   **https://trlily.github.io/lab-website/**

### Subsequent updates

Every push to `main` triggers a rebuild and redeploy. No manual steps.

## Renaming the repo

If you change the repo name (e.g. to `bial`), update one line in
[`vite.config.js`](vite.config.js):

```js
base: '/bial/',
```

…then push. The new URL will be `https://trlily.github.io/bial/`.

## Custom domain (optional)

If the IT team gives you a custom domain like `bial.yonsei.ac.kr`:

1. Add a `CNAME` file at the project root containing the domain.
2. In `vite.config.js`, set `base: '/'`.
3. Configure the DNS CNAME record to point to `trlily.github.io`.
