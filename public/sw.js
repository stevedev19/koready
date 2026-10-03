// KReady service worker: basic offline fallback.
// Bump VERSION when this file's caching logic changes.
const VERSION = "v4"; // v4: new navigation; drops pages cached under old URLs (/explore)
const STATIC_CACHE = `ksk-static-${VERSION}`;
const PAGES_CACHE = `ksk-pages-${VERSION}`;
const OFFLINE_URL = "/offline";
const PRECACHE = [OFFLINE_URL, "/manifest.webmanifest", "/icons/icon-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

async function precache() {
  const cache = await caches.open(STATIC_CACHE);
  await cache.addAll(PRECACHE);
  // The offline page also needs its CSS and JS, or a cold offline launch from the
  // Home Screen shows it unstyled. Best effort: one missing file must not fail install.
  try {
    const html = await (await cache.match(OFFLINE_URL)).text();
    const assets = new Set(html.match(/\/_next\/static\/[^"'\s)\\]+/g) || []);
    await Promise.allSettled([...assets].map((url) => cache.add(url)));
  } catch {
    // ignore
  }
}

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k.startsWith("ksk-") && ![STATIC_CACHE, PAGES_CACHE].includes(k)).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // API calls go straight to the network; the UI shows its own error state.
  if (url.pathname.startsWith("/api/")) return;

  // Pages: network first, then last cached copy, then the offline page.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(PAGES_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match(OFFLINE_URL))),
    );
    return;
  }

  // Hashed build assets and icons never change: cache first.
  if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/icons/")) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
            }
            return response;
          }),
      ),
    );
  }
});
