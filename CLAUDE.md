# Korea Survival Kit
A mobile-first PWA that helps foreigners living in Korea.

## Stack
Next.js (App Router), TypeScript, Tailwind CSS. Deploy later on Vercel free tier.

## Rules
- Never put API keys in frontend code. Use server routes and .env.local, and add .env.local to .gitignore.
- Cache external API responses (weather and air quality: 30 min, exchange rate: 6 hours).
- Only use free APIs. Before adding any API, tell me its free limits and terms (including whether commercial use is allowed) and ask me to confirm.
- Scam checker: never output "safe". Allowed verdicts: "Likely scam", "Unclear", "No obvious scam signs, but verify with the official source."
- Always show this disclaimer near safety features: "Not official advice. If unsure, contact the company or police."
- Do not store users' pasted messages. Do not log message contents.
- English UI first, but keep all text in a strings file so Korean can be added later.
- Mobile first, simple, fast, accessible (readable font sizes, good contrast).
- Make small commits with clear messages. After each task, summarize what changed and what to test.

@AGENTS.md
