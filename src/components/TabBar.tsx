"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/strings";

const TABS = [
  { href: "/", label: t.tabs.home, icon: "🏠" },
  { href: "/safety", label: t.tabs.safety, icon: "🛡️" },
  { href: "/local", label: t.tabs.local, icon: "📍" },
  { href: "/explore", label: t.tabs.explore, icon: "🧭" },
] as const;

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label={t.tabs.label}
      className="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-surface pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {TABS.map((tab) => {
          // Sub-pages (e.g. /local/doctor) keep their tab highlighted.
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={pathname === tab.href ? "page" : active ? "true" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-0.5 text-sm focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent ${
                  active ? "font-bold text-accent" : "text-muted"
                }`}
              >
                <span aria-hidden="true" className="text-xl">{tab.icon}</span>
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
