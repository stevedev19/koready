/* eslint-disable @typescript-eslint/no-unused-vars -- these are globals used by the HTML pages that load this script */
/* Shared helpers for the Hanji style guide and Home mockup. Icons: Lucide paths (ISC). */
const P = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  rain: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6M8 14v6M12 16v6"/>',
  wind: '<path d="M12.8 19.6A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2 4H2M9.8 4.4A2 2 0 1 1 11 8H2"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  msg: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  house: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>',
  umbrella: '<path d="M22 12a10.06 10.06 1 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
  octagon: '<path d="M12 16h.01M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/>',
  searchcheck: '<path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  swap: '<path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  mask: '<path d="M4 9c2.5-1 5-1.5 8-1.5S17.5 8 20 9v4c0 3-3.5 5.5-8 5.5S4 16 4 13Z"/><path d="M4 10H2.5M20 10h1.5M8 12h8M9 15h6"/>',
};
const ic = (n, s = 22, sw = 2) =>
  `<svg aria-hidden="true" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[n]}</svg>`;

/* WCAG 2.x relative luminance and contrast ratio. Accepts #rrggbb or rgb()/rgba() strings. */
function toRgb(c) {
  c = c.trim();
  if (c.startsWith("#")) return [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
  return c.match(/[\d.]+/g).slice(0, 3).map(Number);
}
function lum(c) {
  const [r, g, b] = toRgb(c).map((v) => v / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const x = lum(a), y = lum(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
const tokenOf = (el, name) => getComputedStyle(el).getPropertyValue(name).trim();

/* Shared fragments used by both pages (text copied from src/lib/strings.ts where it exists). */
const K = {
  tabbar: (on = "Home") => `
    <nav class="tabbar" aria-label="Main navigation">
      ${[["house", "Home"], ["shield", "Safety"], ["pin", "Local"], ["compass", "Explore"]]
        .map(([i, l]) => `<a href="#" ${l === on ? 'aria-current="page"' : ""}>${ic(i, 24, l === on ? 2.4 : 2)}${l}</a>`)
        .join("")}
    </nav>`,
  sos: () => `<button type="button" class="sos" data-sos aria-haspopup="dialog">${ic("phone", 18, 2.4)} 119 · 112</button>`,
  sheet: () => `
    <div class="sheet" role="dialog" aria-label="Emergency calls">
      <div class="grab"></div>
      <div class="sheet-h">
        <h2>Emergency <span class="ko" lang="ko">긴급 전화</span></h2>
        <button type="button" class="x" data-close aria-label="Close">${ic("x")}</button>
      </div>
      <a class="call call-solid" href="tel:119">${ic("phone", 28, 2.4)}<span class="num">119</span><span class="what">Ambulance &amp; fire<small>Also 24h medical advice</small></span></a>
      <a class="call call-outline" href="tel:112">${ic("phone", 28, 2.4)}<span class="num">112</span><span class="what">Police<small>English interpretation available</small></span></a>
      <a class="more" href="#">What to say, nearest ER ${ic("right", 20)}</a>
      <p class="disclaimer">${ic("info", 18)} Not official advice. If unsure, contact the company or police.</p>
    </div>`,
  slang: () => `
    <section class="card slang" id="slang">
      <div class="card-h"><h2>${ic("msg")}Slang of the day <span class="ko" lang="ko">오늘의 신조어</span></h2></div>
      <p class="term" lang="ko">대박</p>
      <p class="roman">daebak</p>
      <p style="margin-top:8px">Awesome, amazing; also "no way!" for big news (good or bad).</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px"><span class="stag">Casual</span><span class="stag">Safe to use</span></div>
      <h3 class="slabel" style="margin-top:16px;font-size:15px;font-weight:700">Examples</h3>
      <ul class="ex">
        <li><p lang="ko">와, 이 콘서트 진짜 대박이다!</p><p class="smuted">Wow, this concert is seriously amazing!</p></li>
        <li><p lang="ko">시험 다 맞았어? 대박!</p><p class="smuted">You got everything right on the test? No way!</p></li>
      </ul>
      <div class="foot"><p>Not yet reviewed by a native speaker.</p></div>
    </section>`,
  status: (tone) => {
    const S = {
      danger: ["status-danger", "octagon", "Likely scam", "Don't tap any links, call back, install apps, or send money or codes. Delete the message, or report it to 1394."],
      warn: ["status-warn", "alert", "Unclear", "We can't tell. Treat it with care: contact the sender through an official app, website or phone number you find yourself."],
      neutral: ["status-neutral", "searchcheck", "No obvious scam signs, but verify with the official source.", "Our rules can't catch every scam. If it asks for money, codes or personal details, check with the company through its official app or number."],
    }[tone];
    return `<div class="status ${S[0]}"><h3>${ic(S[1], 28)}<span>${S[2]}</span></h3><p>${S[3]}</p></div>`;
  },
  disclaimer: () => `<p class="disclaimer">${ic("info", 18)} Not official advice. If unsure, contact the company or police.</p>`,
};
