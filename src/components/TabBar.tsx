"use client";

import { House, MapPin, MessagesSquare, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/strings";

const TABS = [
  // Home also owns the trail pages and the weather page.
  { href: "/", label: t.tabs.home, icon: House, also: ["/explore", "/trails/"] },
  { href: "/safety", label: t.tabs.safety, icon: Shield, also: [] },
  { href: "/local", label: t.tabs.local, icon: MapPin, also: [] },
  { href: "/slang", label: t.tabs.slang, icon: MessagesSquare, also: [] },
] as const;

function isActive(pathname: string, href: string, also: readonly string[]) {
  if (also.some((prefix) => pathname.startsWith(prefix))) return true;
  // Sub-pages (e.g. /local/doctor) keep their tab highlighted.
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

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
        {TABS.map(({ href, label, icon: Icon, also }) => {
          const active = isActive(pathname, href, also);
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
