import { Brain, Landmark } from "lucide-react";
import type { Metadata } from "next";
import { HelpLines } from "@/components/HelpLines";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.local.mentalHealth.title };
}

export default async function MentalHealthPage() {
  const t = await getT();
  const s = t.local.mentalHealth;
  return (
    <LocalScreen title={s.title}>
      <p className="rounded-card bg-card px-5 py-4 text-lg font-bold shadow-card">{s.crisisBody}</p>
      <HelpLines ids={["mentalHealthCrisis", "emergency"]} title={s.crisisTitle} />
      <p className="px-1">{s.reassurance}</p>
      <ClinicTypeCard id="jeongsingeongang" title={t.local.doctor.clinicTitle} icon={Brain} />
      <ClinicTypeCard id="mentalHealthCenter" title={s.centerTitle} icon={Landmark} />
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.mentalHealth} />
    </LocalScreen>
  );
}
