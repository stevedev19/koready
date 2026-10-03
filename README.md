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

## Deploying

- Node 22 (`engines` in `package.json` and `.nvmrc`); Vercel uses the `engines` value.
- No environment variables are needed: every API used is key-free. See `.env.example`.
- Before deploying: `npm run lint && npm run test:scam && npm run test:alerts && npm run build`.
- Privacy page: `/privacy` (linked from Home and Safety). Pasted messages never leave the browser and are never logged.

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
- `data/alert-rules.json`: alert translator rules (categories, alert types with official action steps and sources, glossary). `src/lib/alerts/` reads alerts on the device only
- `data/alert-samples.json`: practice alerts written for the app (not real alerts)
- `data/trails.json`: Explore trails (public places verified on official tourism sites; each stop has `source`, `last_checked`, `needs_review`)
- `src/lib/config.ts`: `REPORT_EMAIL` for the "Report a problem" link (empty = link hidden)

## Tests

```bash
npm run test:scam     # runs tests/scam-samples.json, prints expected vs actual and FN/FP counts
npm run test:alerts   # runs tests/alert-samples.json against the alert translator
```

## Licenses

```bash
npm run notices       # regenerates THIRD_PARTY_NOTICES.md and the /licenses page data
```

Run it after adding or updating a dependency. UI components in `src/components/ui/` are adapted from shadcn/ui (MIT); the Pretendard font is under SIL OFL 1.1 (`licenses/`).
