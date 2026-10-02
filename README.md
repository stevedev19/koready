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
- `data/scam-rules.json`: scam checker rules (patterns, weights, explanations). Edit to add rules, then run `npm run test:scam`
- `src/lib/scam/`: scam checker (`check.ts` is the entry point; runs on the device, never sends or stores text)
- `src/lib/helpLines.ts`: help phone numbers, each with the official source it was verified against
- `data/clinics.json`: problem categories → clinic types, and Korean phrases (`needs_native_review: true` until checked)
- `src/lib/mapLinks.ts`: plain Naver / Kakao / Google Maps search links (no map API, no keys)
- `data/recycling-<district>.json`: recycling guide per district, from official district sources. **To add a district, add one file** (same shape as `recycling-gangnam.json`, `district.id` matching the file name); it's picked up at build time with no code changes, and a bad file fails the build with a clear error

## Scam checker tests

```bash
npm run test:scam   # runs tests/scam-samples.json, prints expected vs actual and FN/FP counts
```
