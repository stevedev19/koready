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
    <LocalScreen title={s.title} icon="💬">
      <HelpLines ids={["mentalHealthCrisis", "emergency"]} title={s.crisisTitle} footer={s.crisisBody} />
      <p>{s.reassurance}</p>
      <ClinicTypeCard id="jeongsingeongang" icon="🧠" />
      <ClinicTypeCard id="mentalHealthCenter" title={s.centerTitle} icon="🏛️" />
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.mentalHealth} />
    </LocalScreen>
  );
}
