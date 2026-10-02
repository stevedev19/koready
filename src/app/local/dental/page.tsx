import { Toothbrush } from "lucide-react";
import type { Metadata } from "next";
import { BringChecklist } from "@/components/local/BringChecklist";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { t } from "@/lib/strings";

const s = t.local.dental;

export const metadata: Metadata = { title: s.title };

export default function DentalPage() {
  return (
    <LocalScreen title={s.title}>
      <ClinicTypeCard id="chigwa" icon={Toothbrush} />
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.dental} />
      <BringChecklist />
    </LocalScreen>
  );
}
