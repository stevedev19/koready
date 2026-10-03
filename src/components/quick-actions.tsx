"use client";

import { Banknote, CloudSun, Plus, Recycle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useT } from "@/lib/i18n/client";

const ACTIONS = [
  { href: "/weather", key: "weather", Icon: CloudSun },
  { href: "/local/money", key: "exchange", Icon: Banknote },
  { href: "/local/recycling", key: "recycling", Icon: Recycle },
] as const;

// Screens where a floating button would cover something important: the Safety
// tools' sticky action buttons, the Emergency page, and long lists whose rows and
// arrows it would sit on (Slang, Recycling guide).
const HIDDEN_ON = ["/safety", "/local/emergency", "/slang", "/local/recycling"];

export function QuickActions() {
  const t = useT();
  const s = t.quickActions;
  const pathname = usePathname();
  // Open state belongs to one page, so it's closed again after any navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenOn(null);
      buttonRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenOn(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;

  return (
    <div
      data-quick-actions
      data-hide-on-keyboard
      className="pointer-events-none fixed inset-x-0 z-40 mx-auto flex max-w-lg justify-end pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))] bottom-[calc(max(0.75rem,env(safe-area-inset-bottom))+5.75rem)]"
    >
      <div ref={ref} className="pointer-events-auto flex flex-col items-end gap-3">
        <ul id={listId} aria-label={s.listLabel} hidden={!open} className="flex flex-col items-end gap-2.5">
          {ACTIONS.map(({ href, key, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="group flex min-h-12 items-center gap-2.5 rounded-full [-webkit-tap-highlight-color:transparent] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2"
              >
                <span className="rounded-full border border-border bg-card px-4 py-2.5 font-bold text-card-foreground shadow-float transition-colors group-hover:bg-surface-2 group-active:bg-surface-3">
                  {s[key].label}{" "}
                  <span lang="ko" className="text-[0.9375rem] font-semibold text-muted-foreground">{s[key].ko}</span>
                </span>
                <span className="grid size-12 place-items-center rounded-full border border-border bg-card text-primary shadow-float transition-colors group-hover:bg-surface-2 group-active:bg-surface-3">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          ref={buttonRef}
          type="button"
          aria-label={open ? s.close : s.open}
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen(!open)}
          className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-float transition-transform duration-100 [-webkit-tap-highlight-color:transparent] active:scale-95 motion-reduce:active:scale-100"
        >
          {open ? <X aria-hidden="true" className="size-7" /> : <Plus aria-hidden="true" className="size-7" />}
        </button>
      </div>
    </div>
  );
}
