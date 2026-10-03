"use client";

import { Copy, LocateFixed, Map as MapIcon } from "lucide-react";
import { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { mapSearchLinks, type Coords } from "@/lib/mapLinks";
import { t } from "@/lib/strings";
import { buttonClass } from "../ui/button";
import { ListGroup, ListRow } from "../ui/List";
import { Sheet } from "../ui/Sheet";
import type { Tone } from "../ui/IconTile";

type Status = "idle" | "locating" | "located" | "denied";

const APP_TONE: Record<string, Tone> = { naver: "green", kakao: "amber", google: "blue" };

/**
 * Asks for location only when tapped, keeps it in memory, and only puts it in
 * the map link the user taps. It is never sent to our server or stored.
 */
export function FindNearby({ query, label }: { query: string; label: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [coords, setCoords] = useState<Coords | undefined>();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function onFind() {
    setCopied(false);
    if (status === "located" || status === "denied") {
      setOpen(true);
      return;
    }
    if (!("geolocation" in navigator)) {
      setStatus("denied");
      setOpen(true);
      return;
    }
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus("located");
        setOpen(true);
      },
      () => {
        setStatus("denied");
        setOpen(true);
      },
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 5 * 60_000 },
    );
  }

  return (
    <>
      <button type="button" onClick={onFind} disabled={status === "locating"} className={buttonClass("primary", "lg", "w-full")}>
        <LocateFixed aria-hidden="true" className="size-5" />
        {status === "locating" ? t.local.clinic.locating : `${t.local.clinic.findNearby} ${label}`}
      </button>

      <Sheet open={open} onClose={() => setOpen(false)} title={`${t.local.clinic.findNearby} ${label}`}>
        <p className="mb-2 text-sm font-bold text-muted-foreground">{t.local.clinic.openIn}</p>
        <ListGroup>
          {mapSearchLinks(query, coords).map(({ app, href }) => (
            <ListRow key={app} href={href} external icon={MapIcon} tone={APP_TONE[app]} title={t.local.clinic.apps[app]} />
          ))}
        </ListGroup>
        <button
          type="button"
          onClick={async () => setCopied(await copyText(query))}
          className={buttonClass("secondary", "md", "mt-3 w-full")}
        >
          <Copy aria-hidden="true" className="size-5" />
          {copied ? t.local.phrases.copied : t.explore.trail.copyKorean}
        </button>
        <p aria-live="polite" className="sr-only">{copied ? t.local.phrases.copied : ""}</p>
        <p className="mt-3 text-[0.9375rem] text-muted-foreground">
          {status === "located" ? t.local.clinic.locationNote : t.local.clinic.locationDenied}
        </p>
      </Sheet>
    </>
  );
}
