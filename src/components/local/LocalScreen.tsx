import type { ReactNode } from "react";
import { Disclaimer } from "@/components/ui/Notice";
import { PageHeader } from "@/components/ui/PageHeader";
import { t } from "@/lib/strings";

/** "Not medical advice. In an emergency call 119." with 119 as a call link. */
export function MedicalDisclaimer() {
  const [before, after] = t.local.disclaimer.split("119");
  return (
    <Disclaimer>
      {before}
      <a href="tel:119" className="font-bold text-danger underline underline-offset-2">
        119
      </a>
      {after}
    </Disclaimer>
  );
}

type LocalScreenProps = {
  title: string;
  /** Kept for call sites; the large title carries the page now. */
  icon?: string;
  children: ReactNode;
  /** Shown under the title. Defaults to the medical disclaimer. */
  notice?: ReactNode;
  backHref?: string;
  backLabel?: string;
};

/** Shared frame for sub-screens: back link, large title, notice. */
export function LocalScreen({
  title,
  children,
  notice = <MedicalDisclaimer />,
  backHref = "/local",
  backLabel = t.local.back,
}: LocalScreenProps) {
  return (
    <div className="space-y-4">
      <PageHeader title={title} back={{ href: backHref, label: backLabel }} />
      {notice}
      {children}
    </div>
  );
}
