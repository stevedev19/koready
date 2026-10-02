import Link from "next/link";
import type { ReactNode } from "react";
import { t } from "@/lib/strings";

/** "Not medical advice. In an emergency call 119." with 119 as a call link. */
export function MedicalDisclaimer() {
  const [before, after] = t.local.disclaimer.split("119");
  return (
    <p role="note" className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-semibold">
      {before}
      <a href="tel:119" className="text-danger underline underline-offset-2">
        119
      </a>
      {after}
    </p>
  );
}

type LocalScreenProps = {
  title: string;
  icon: string;
  children: ReactNode;
  /** Shown under the title. Defaults to the medical disclaimer. */
  notice?: ReactNode;
  backHref?: string;
};

/** Shared frame for Local sub-screens: back link, title, notice. */
export function LocalScreen({ title, icon, children, notice = <MedicalDisclaimer />, backHref = "/local" }: LocalScreenProps) {
  return (
    <div className="space-y-4">
      <Link
        href={backHref}
        className="-ml-1 inline-flex min-h-11 items-center gap-1 px-1 font-medium text-accent focus-visible:outline-2 focus-visible:outline-accent"
      >
        <span aria-hidden="true">←</span> {t.local.back}
      </Link>
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        <span aria-hidden="true">{icon}</span>
        {title}
      </h1>
      {notice}
      {children}
    </div>
  );
}
