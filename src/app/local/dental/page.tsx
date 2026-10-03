import { Toothbrush } from "lucide-react";
import type { Metadata } from "next";
import { BringChecklist } from "@/components/local/BringChecklist";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.local.dental.title };
}

export default async function DentalPage() {
  const t = await getT();
  const s = t.local.dental;
  return (
    <LocalScreen title={s.title}>
      <ClinicTypeCard id="chigwa" title={t.local.doctor.clinicTitle} icon={Toothbrush} />
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.dental} />
      <BringChecklist />
    </LocalScreen>
  );
}
