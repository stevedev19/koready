import type { ReactNode } from "react";
import { Disclaimer } from "@/components/ui/Notice";
import { PageHeader } from "@/components/ui/PageHeader";
import { getT } from "@/lib/i18n/server";

/** "Not medical advice. In an emergency call 119." with 119 as a call link. */
export async function MedicalDisclaimer() {
  const t = await getT();
  const [before, after] = t.local.disclaimer.split("119");
  return (
    <Disclaimer>
      {before}
      <a href="tel:119" className="font-bold text-destructive underline underline-offset-2">
        119
      </a>
      {after}
    </Disclaimer>
  );
}

type LocalScreenProps = {
  title: string;
  children: ReactNode;
  /** Shown under the title. Defaults to the medical disclaimer. */
  notice?: ReactNode;
  backHref?: string;
  backLabel?: string;
};

/** Shared frame for sub-screens: back link, large title, notice. */
export async function LocalScreen({
  title,
  children,
  notice = <MedicalDisclaimer />,
  backHref = "/local",
  backLabel,
}: LocalScreenProps) {
  const t = await getT();
  return (
    <div className="space-y-4">
      <PageHeader title={title} back={{ href: backHref, label: backLabel ?? t.local.back }} />
      {notice}
      {children}
    </div>
  );
}
