import { Brain, Landmark } from "lucide-react";
import type { Metadata } from "next";
import { HelpLines } from "@/components/HelpLines";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { t } from "@/lib/strings";

const s = t.local.mentalHealth;

export const metadata: Metadata = { title: s.title };

export default function MentalHealthPage() {
  return (
    <LocalScreen title={s.title}>
      <p className="rounded-card bg-surface px-5 py-4 text-lg font-bold shadow-card">{s.crisisBody}</p>
      <HelpLines ids={["mentalHealthCrisis", "emergency"]} title={s.crisisTitle} />
      <p className="px-1">{s.reassurance}</p>
      <ClinicTypeCard id="jeongsingeongang" icon={Brain} />
      <ClinicTypeCard id="mentalHealthCenter" title={s.centerTitle} icon={Landmark} />
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.mentalHealth} />
    </LocalScreen>
  );
}
