# Alexander & Isabella Wedding Website

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

## Deploy

This project can be deployed to Vercel or any Node-compatible host.

### Vercel

1. Push the repository to GitHub
2. Import the repo in Vercel
3. Use default Next.js build settings
4. Deploy

### Other Platforms

Use:

```bash
npm run build
npm run start
```

and serve the app on your chosen platform.
