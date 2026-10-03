"use client";

import { Banknote, CloudSun, Lock, Plus, Recycle, Settings, X, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useT } from "@/lib/i18n/client";

type Action = { href: string; label: ReactNode; group: "daily" | "utility"; Icon: LucideIcon };

// Screens where a floating button would cover something important: the Safety
// tools' sticky action buttons, the Emergency page, and long lists whose rows and
// arrows it would sit on (Slang, Recycling guide).
const HIDDEN_ON = ["/safety", "/local/emergency", "/slang", "/local/recycling"];

export function QuickActions() {
  const t = useT();
  const s = t.quickActions;
  const pathname = usePathname();
  const ko = (text: string) => (
    <span lang="ko" className="text-[0.9375rem] font-semibold text-muted-foreground">{text}</span>
  );
  // First item is closest to the + button; later items stack upward.
  const actions: Action[] = [
    { href: "/weather", label: <>{s.weather.label} {ko(s.weather.ko)}</>, group: "daily", Icon: CloudSun },
    { href: "/local/money", label: <>{s.exchange.label} {ko(s.exchange.ko)}</>, group: "daily", Icon: Banknote },
    { href: "/local/recycling", label: <>{s.recycling.label} {ko(s.recycling.ko)}</>, group: "daily", Icon: Recycle },
    { href: "/settings", label: <>{t.audience.settings.link} {ko(s.settingsKo)}</>, group: "utility", Icon: Settings },
    { href: "/privacy", label: t.privacy.link, group: "utility", Icon: Lock },
  ];
  // Rendered top-down (farthest first) so DOM and tab order match what's on screen.
  const stack = [...actions].reverse();
  // Open state belongs to one page, so it's closed again after any navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenOn(null);
      buttonRef.current?.focus();
    };
    // The scrim closes on click instead, so the tap can't fall through to the page.
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (ref.current?.contains(target) || scrimRef.current?.contains(target)) return;
      setOpenOn(null);
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
    <>
      {/* Dims the page, but sits under the tab bar (z-30) so it stays visible and tappable. */}
      {open && (
        <div
          ref={scrimRef}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[29] bg-black/25 [-webkit-tap-highlight-color:transparent] motion-safe:animate-in motion-safe:fade-in"
        />
      )}
    <div
      data-quick-actions
      data-hide-on-keyboard
      className="pointer-events-none fixed inset-x-0 z-40 mx-auto flex max-w-lg justify-end pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))] bottom-[calc(max(0.75rem,env(safe-area-inset-bottom))+5.75rem)]"
    >
      <div ref={ref} className="pointer-events-auto flex flex-col items-end gap-3">
        <ul id={listId} aria-label={s.listLabel} hidden={!open} className="flex flex-col items-end gap-2.5">
          {stack.map(({ href, label, group, Icon }, i) => (
            <Fragment key={href}>
              {i > 0 && group !== stack[i - 1].group && (
                <li aria-hidden="true" className="mr-1 h-px w-28 bg-border" />
              )}
              <li>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="group flex min-h-12 items-center gap-2.5 rounded-full [-webkit-tap-highlight-color:transparent] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2"
                >
                  <span className="max-w-[calc(100vw-7rem)] rounded-[1.5rem] border border-border bg-card px-4 py-2.5 text-right font-bold text-card-foreground shadow-float transition-colors group-hover:bg-surface-2 group-active:bg-surface-3">
                    {label}
                  </span>
                  <span className="grid size-12 place-items-center rounded-full border border-border bg-card text-primary shadow-float transition-colors group-hover:bg-surface-2 group-active:bg-surface-3">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                </Link>
              </li>
            </Fragment>
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
    </>
  );
}
