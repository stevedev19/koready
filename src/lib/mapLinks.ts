// Plain links that open a map search in the app (if installed) or the browser.
// No map API and no keys. Coordinates, if given, only go into the Google Maps
// link the user taps; they are never sent to our server.

export type Coords = { lat: number; lng: number };

export type MapApp = "naver" | "kakao" | "google";

/** ~100 m precision: enough for "nearby", less precise than the raw GPS fix. */
const round = (n: number) => n.toFixed(3);

export function mapSearchLinks(query: string, coords?: Coords): { app: MapApp; href: string }[] {
  const q = encodeURIComponent(query);
  return [
    // Naver and Kakao links have no documented location parameter; their apps
    // and sites center the search on the phone's own location.
    { app: "naver", href: `https://map.naver.com/p/search/${q}` },
    // Documented format: https://apis.map.kakao.com/web/guide/ ("link/search")
    { app: "kakao", href: `https://map.kakao.com/link/search/${q}` },
    {
      app: "google",
      href: coords
        ? `https://www.google.com/maps/search/${q}/@${round(coords.lat)},${round(coords.lng)},15z`
        : `https://www.google.com/maps/search/?api=1&query=${q}`,
    },
  ];
}
