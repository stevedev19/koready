import "server-only";

export const THIRTY_MINUTES = 30 * 60;
export const SIX_HOURS = 6 * 60 * 60;

/**
 * Fetch JSON from an external API with Next's data cache (`revalidate` seconds)
 * and a timeout so a slow upstream can't hang our route.
 */
export async function fetchJson<T>(url: string, revalidate: number, retries = 1): Promise<T> {
  try {
    const res = await fetch(url, {
      next: { revalidate },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      throw new Error(`Upstream ${new URL(url).host} responded ${res.status}`);
    }
    return (await res.json()) as T;
  } catch (err) {
    // Free APIs blip now and then (e.g. 503); one quick retry hides most of it.
    if (retries > 0) {
      await new Promise((r) => setTimeout(r, 500));
      return fetchJson<T>(url, revalidate, retries - 1);
    }
    throw err;
  }
}

/** JSON response that browsers/CDN may cache for `maxAge` seconds. */
export function cachedJson(body: unknown, maxAge: number) {
  return Response.json(body, {
    headers: {
      "Cache-Control": `public, max-age=60, s-maxage=${maxAge}, stale-while-revalidate=${Math.round(maxAge / 2)}`,
    },
  });
}

/** Error response that is never cached. */
export function errorJson(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: { "Cache-Control": "no-store" } });
}
