# MOBAD – Warsaw Visitor Info

This project provides visitor information for MOBAD at CIC Warsaw.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Building

```bash
npm run build
```

## Content

All copy and external URLs are centralised in `src/lib/content.ts`.

## Assets

This repository does not include image assets. Before running the app, place the following files in the `public/` directory (Next.js HTTP docs folder):

- `public/cic-warsaw.jpeg` – hero background
- `public/mobad-logo-white-font.svg` – logo used in the hero
- `public/favicon.png` – site favicon

The app will reference these paths at runtime; ensure the files exist in that directory.
