import type { Metadata } from "next";
import { BringChecklist } from "@/components/local/BringChecklist";
import { DoctorHelper } from "@/components/local/DoctorHelper";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.local.doctor.title };
}

export default async function DoctorPage() {
  const t = await getT();
  const s = t.local.doctor;
  return (
    <LocalScreen title={s.title}>
      <DoctorHelper />
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.clinic} />
      <BringChecklist />
    </LocalScreen>
  );
}
