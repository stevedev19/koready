"use client";

import { Compass, House, MapPin, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/strings";

const TABS = [
  { href: "/", label: t.tabs.home, icon: House },
  { href: "/safety", label: t.tabs.safety, icon: Shield },
  { href: "/local", label: t.tabs.local, icon: MapPin },
  { href: "/explore", label: t.tabs.explore, icon: Compass },
] as const;

/** Floating, frosted tab bar that clears the home indicator (and the notch in landscape). */
export function TabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label={t.tabs.label}
      data-hide-on-keyboard
      className="fixed inset-x-0 bottom-0 z-30 pr-[max(0.75rem,env(safe-area-inset-right))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))]"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4 gap-1 rounded-[1.625rem] border border-border bg-surface-glass p-1.5 shadow-float backdrop-blur-xl backdrop-saturate-150">
        {TABS.map(({ href, label, icon: Icon }) => {
          // Sub-pages (e.g. /local/doctor) keep their tab highlighted.
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : active ? "true" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-[1.25rem] text-[0.8125rem] font-bold ${
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <Icon aria-hidden="true" className="size-6" strokeWidth={active ? 2.4 : 2} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
