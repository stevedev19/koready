import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

/** Large bold page title with an optional back link and subtitle. */
export function PageHeader({
  title,
  subtitle,
  back,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  back?: { href: string; label: string };
}) {
  return (
    <header className="space-y-1">
      {back && (
        <Link
          href={back.href}
          className="-ml-2 inline-flex min-h-12 items-center gap-0.5 rounded-lg px-1 font-bold text-accent"
        >
          <ChevronLeft aria-hidden="true" className="size-6" />
          {back.label}
        </Link>
      )}
      <h1 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em]">{title}</h1>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </header>
  );
}
