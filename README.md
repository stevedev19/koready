# Korea Survival Kit

A mobile-first PWA for foreigners living in Korea. See `CLAUDE.md` for project rules.

## Run locally

Requires Node 22 (`nvm use` picks it up from `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build (needed to test the service worker / offline mode):

```bash
npm run build && npm start
```

## Data sources (all free, no API keys)

| Card | Source | Cache | Terms |
| --- | --- | --- | --- |
| Weather | [Open-Meteo](https://open-meteo.com/) | 30 min | Free tier is **non-commercial only**, CC BY 4.0 attribution |
| Air quality | [Open-Meteo Air Quality](https://open-meteo.com/en/docs/air-quality-api) | 30 min | Same as above |
| Exchange rate | [Frankfurter](https://frankfurter.dev/) | 6 h | Free incl. commercial; rates under each central bank's terms |

> If the app ever shows ads or charges money, Open-Meteo requires a paid plan
> (or switch to KMA / AirKorea via data.go.kr).

## Project layout

- `src/lib/strings.ts`: all UI text (add a `ko` object for Korean later)
- `src/lib/districts.ts`: district list (append to add more)
- `data/slang.json`: slang entries (`needs_native_review: true` until checked)
- `src/app/api/*`: server routes that call external APIs and cache them
- `public/sw.js`: service worker (offline fallback)
- `scripts/generate-icons.mjs`: regenerates placeholder icons
