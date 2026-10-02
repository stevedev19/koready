"use client";

import { useState } from "react";
import { mapSearchLinks, type Coords } from "@/lib/mapLinks";
import { t } from "@/lib/strings";

type Status = "idle" | "locating" | "located" | "denied";

/**
 * Asks for location only when tapped, keeps it in memory, and only puts it in
 * the map link the user taps. It is never sent to our server or stored.
 */
export function FindNearby({ query, label }: { query: string; label: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [coords, setCoords] = useState<Coords | undefined>();

  function onFind() {
    if (!("geolocation" in navigator)) {
      setStatus("denied");
      return;
    }
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus("located");
      },
      () => setStatus("denied"),
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 5 * 60_000 },
    );
  }

  if (status === "idle" || status === "locating") {
    return (
      <button
        type="button"
        onClick={onFind}
        disabled={status === "locating"}
        className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 text-lg font-semibold text-accent-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-70"
      >
        <span aria-hidden="true">📍</span>
        {status === "locating" ? t.local.clinic.locating : `${t.local.clinic.findNearby} ${label}`}
      </button>
    );
  }

  return (
    <div className="space-y-2" aria-live="polite">
      <p className="font-semibold">
        {t.local.clinic.findNearby} {label} · {t.local.clinic.openIn}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {mapSearchLinks(query, coords).map(({ app, href }) => (
          <a
            key={app}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center rounded-xl border-2 border-accent px-2 text-center font-semibold text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t.local.clinic.apps[app]}
          </a>
        ))}
      </div>
      <p className="text-sm text-muted">
        {status === "located" ? t.local.clinic.locationNote : t.local.clinic.locationDenied}
      </p>
    </div>
  );
}
