"use client";

import { ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { HELP_LINES } from "@/lib/helpLines";
import { t } from "@/lib/strings";
import { Disclaimer } from "./ui/Notice";
import { BottomSheet } from "./ui/BottomSheet";

const s = t.emergencyShortcut;
const spaced = (n: string) => n.split("").join(" ");

/** Quiet 119 / 112 pill in the top bar of every screen. Opens a sheet with call links. */
export function EmergencyShortcut() {
  const [open, setOpen] = useState(false);
  const ambulance = HELP_LINES.emergency.number;
  const police = HELP_LINES.police.number;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={s.open}
        aria-haspopup="dialog"
        className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-border bg-card pr-4 pl-3 text-[0.9375rem] font-bold tabular-nums shadow-card"
      >
        <Phone aria-hidden="true" className="size-[1.125rem] text-destructive" strokeWidth={2.4} />
        {ambulance} · {police}
      </button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title={
          <>
            {s.title}{" "}
            <span lang="ko" className="text-[0.9375rem] font-semibold text-jade-text">
              {s.titleKo}
            </span>
          </>
        }
      >
        <div className="space-y-3">
          <a
            href={`tel:${ambulance}`}
            aria-label={`${t.helpLines.call} ${t.helpLines.lines.emergency.name}, ${spaced(ambulance)}`}
            className="flex min-h-[4.75rem] items-center gap-3.5 rounded-[1.125rem] bg-emergency px-[1.125rem] py-3 text-emergency-contrast"
          >
            <Phone aria-hidden="true" className="size-7 shrink-0" strokeWidth={2.4} />
            <span className="shrink-0 text-[2rem] font-extrabold tracking-[-0.02em] tabular-nums">{ambulance}</span>
            <span className="leading-snug font-bold">
              {t.helpLines.lines.emergency.name}
              <span className="block text-[0.9375rem] font-semibold">{s.ambulanceNote}</span>
            </span>
          </a>
          <a
            href={`tel:${police}`}
            aria-label={`${t.helpLines.call} ${t.helpLines.lines.police.name}, ${spaced(police)}`}
            className="flex min-h-[4.75rem] items-center gap-3.5 rounded-[1.125rem] border-2 border-destructive bg-card px-[1.125rem] py-3 text-foreground"
          >
            <Phone aria-hidden="true" className="size-7 shrink-0 text-destructive" strokeWidth={2.4} />
            <span className="shrink-0 text-[2rem] font-extrabold tracking-[-0.02em] tabular-nums">{police}</span>
            <span className="leading-snug font-bold">
              {t.helpLines.lines.police.name}
              <span className="block text-[0.9375rem] font-semibold">{s.policeNote}</span>
            </span>
          </a>
          <Link
            href="/local/emergency"
            onClick={() => setOpen(false)}
            className="flex min-h-[3.25rem] items-center justify-between font-bold text-primary"
          >
            {s.more}
            <ChevronRight aria-hidden="true" className="size-5" />
          </Link>
          <Disclaimer>{t.safety.disclaimer}</Disclaimer>
        </div>
      </BottomSheet>
    </>
  );
}
