# Brennan & Michèle Wedding Website

A polished, production-ready wedding website and gift registry built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The site includes an elegant landing experience, story timeline, registry cards, event details, travel guidance, FAQ, and contact details.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production:

```bash
npm run build
npm run start
```

## Editing Content

All editable wedding content is centralized in:

- `src/content/siteContent.ts`

Update names, dates, locations, story text, FAQ entries, and registry URLs there without touching layout components.

## Project Structure

- `src/app/page.tsx` – Main multi-section wedding experience
- `src/components/site-header.tsx` – Sticky header + premium mobile navigation
- `src/content/siteContent.ts` – Structured editable content
- `public/images/*` – Placeholder visual assets for story/gallery sections

## Deploy (GitHub Pages)

This project is configured for static export and deployment on GitHub Pages.

### GitHub Pages Setup

1. In your repository, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Ensure the included workflow (`.github/workflows/deploy-github-pages.yml`) is present; it builds and deploys `out/` to Pages.

The Next.js config already uses static export (`output: "export"`) and applies the repo base path for production GitHub Actions builds.
