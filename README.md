# Developer Portfolio

![Deploy](https://github.com/BrianLiu0531/portfolio/actions/workflows/deploy.yml/badge.svg)

My personal portfolio: a fast, accessible React site showcasing my full-stack projects, skills and experience.

**Live:** https://brianliu0531.github.io/portfolio/

## Features

- **Home, About, Projects and Contact pages** with client-side routing and per-page titles
- **Project case studies** — problem, features, technical highlights, stack, tests and demo logins
- **Filter projects by technology** (state kept in the URL, e.g. `/projects?tech=PostgreSQL`)
- **Contact form** with validation, a spam honeypot, and two delivery modes:
  - posts to a form service (Formspree, Web3Forms…) when `VITE_CONTACT_ENDPOINT` is set
  - otherwise opens a pre-filled email draft, so it works with zero setup
- **Light / dark theme** that follows the OS and remembers the visitor’s choice, with no flash on load
- **Responsive and accessible**: skip link, visible focus styles, labelled form errors, reduced-motion support
- **No backend required** — deploys as static files to GitHub Pages or Vercel

## Tech stack

React 18 · TypeScript · Vite · React Router · Vitest · React Testing Library · GitHub Actions

## Editing the content

Everything — name, bio, skills, experience and projects — lives in **[`src/content.ts`](src/content.ts)**. Search for `TODO` and replace each value. Also update the `<title>` and description in `index.html`.

- **CV:** add `public/resume.pdf` and set `resume: 'resume.pdf'`
- **Screenshots:** add images to `public/screenshots/` and set `screenshot: 'screenshots/ledgerly.png'` on a project. Until then, a coloured cover is generated automatically.
- **Live demos:** set `demo: 'https://…'` on a project to show a “Live demo” button

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm test
npm run build
```

## Deployment

### GitHub Pages (included)

1. Push this repo to GitHub.
2. **Settings → Pages → Source: GitHub Actions.**
3. Every push to `main` runs the tests, builds and deploys.
   - Name the repo `<username>.github.io` to serve it at `https://<username>.github.io/`, or any other name to serve it at `https://<username>.github.io/<repo>/`. The workflow sets the base path automatically.
4. *(Optional)* To receive form submissions instead of email drafts, create a free form on [Formspree](https://formspree.io), then add its URL under **Settings → Secrets and variables → Actions → Variables** as `CONTACT_ENDPOINT`.

### Vercel

Import the repo on [Vercel](https://vercel.com) — `vercel.json` already handles client-side routes. Add `VITE_CONTACT_ENDPOINT` as an environment variable if you want form delivery.
