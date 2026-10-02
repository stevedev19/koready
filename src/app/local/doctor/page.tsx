import type { Metadata } from "next";
import { BringChecklist } from "@/components/local/BringChecklist";
import { DoctorHelper } from "@/components/local/DoctorHelper";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { t } from "@/lib/strings";

const s = t.local.doctor;

export const metadata: Metadata = { title: s.title };

export default function DoctorPage() {
  return (
    <LocalScreen title={s.title} icon="🩺">
      <DoctorHelper />
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.clinic} />
      <BringChecklist />
    </LocalScreen>
  );
}
