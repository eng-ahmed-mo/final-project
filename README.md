# Graduation Project (Frontend)

This repository contains the frontend application for the Graduation Project — a React single-page app built with Vite. The app includes product listing, a shop, cart, wishlist, user flows (login/register), and a small mock API for development.

## Quick summary

- Framework: React + Vite
- Routing: react-router-dom
- Data fetching: @tanstack/react-query
- Mock API: json-server (optional, serves `public/data/data.json`)
- Styling: Sass + Bootstrap + custom SCSS modules

## Features

- Product listing, product details, search and filters
- Cart and wishlist (persisted to localStorage)
- Authentication scaffolding (Supabase client included)
- Reusable UI components in `src/components/`

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Install

```bash
npm install
```

## Useful scripts

- `npm run dev` — start Vite dev server (hot reload)
- `npm run build` — build production bundle
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint
- `npm run server` — run json-server at http://localhost:5000 (serves `public/data/data.json`)

Run development sequence:

```bash
npm install
# (optional) start mock API
npm run server
# start frontend
npm run dev
```

Open the app at the address shown by Vite (usually http://localhost:5173).

## Environment / External services

- Supabase: The project includes `src/utils/supabaseClient.jsx`. To enable real auth/data, set your Supabase URL and public anon key (e.g., using `.env` or your deployment platform's env vars). Example env names you can add to a `.env` file at project root:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_public_anon_key
```

Note: Vite exposes env vars prefixed with `VITE_` to the client.

## Important files / structure

- `src/main.jsx` — app entrypoint
- `src/App.jsx` — top-level providers (QueryClientProvider, contexts)
- `src/router/routing.jsx` — route definitions
- `src/components/` — component library grouped by features
- `public/data/data.json` — mock data used by `npm run server`
- `src/utils/axiosConfig.jsx` — axios instance (if used)
- `src/utils/supabaseClient.jsx` — Supabase client setup

## Development notes & tips

- Cart key in localStorage: `Cart Products`
- Wishlist key in localStorage: `Wishlist Products`
- When adding mock data, update `public/data/data.json` and restart `npm run server`.
- Keep SCSS partials in `src/styles/` and import `main.scss` from `src/main.jsx`.

## Deployment

- Build with `npm run build` and deploy the `dist` output to a static host (Netlify, Vercel, Surge, GitHub Pages with adapter).

## Contributing

- Open an issue or create a PR. Run `npm run lint` before submitting if you edit JS/JSX files.

---
