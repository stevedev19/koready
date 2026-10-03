"use client";

import { House, LifeBuoy, MessagesSquare, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n/client";

const TABS = [
  // Home also owns the trail pages, the weather page and Settings.
  { href: "/", key: "home", icon: House, also: ["/trails/", "/weather", "/settings"] },
  { href: "/safety", key: "safety", icon: Shield, also: [] },
  { href: "/slang", key: "slang", icon: MessagesSquare, also: [] },
  { href: "/local", key: "local", icon: LifeBuoy, also: [] },
] as const;

function isActive(pathname: string, href: string, also: readonly string[]) {
  if (also.some((prefix) => pathname.startsWith(prefix))) return true;
  // Sub-pages (e.g. /local/doctor) keep their tab highlighted.
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Floating, frosted tab bar that clears the home indicator (and the notch in landscape). */
export function TabBar() {
  const t = useT();
  const pathname = usePathname();

  return (
    <nav
      aria-label={t.tabs.label}
      data-hide-on-keyboard
      className="fixed inset-x-0 bottom-0 z-30 pr-[max(0.75rem,env(safe-area-inset-right))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))]"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4 gap-1 rounded-[1.625rem] border border-border bg-surface-glass p-1.5 shadow-float backdrop-blur-xl backdrop-saturate-150">
        {TABS.map(({ href, key, icon: Icon, also }) => {
          const active = isActive(pathname, href, also);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : active ? "true" : undefined}
                // Pressed: inactive tabs darken to surface-3, the active tab dims slightly.
                // Focus: the global outset ring (an inset ring would vanish on the active tab).
                className={`flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-[1.25rem] text-[0.8125rem] font-bold transition-colors duration-100 [-webkit-tap-highlight-color:transparent] ${
                  active ? "bg-primary text-primary-foreground active:opacity-85" : "text-muted-foreground active:bg-surface-3"
                }`}
              >
                <Icon aria-hidden="true" className="size-6" strokeWidth={active ? 2.4 : 2} />
                {t.tabs[key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
