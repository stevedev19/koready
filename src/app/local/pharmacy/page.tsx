import { Pill } from "lucide-react";
import type { Metadata } from "next";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { EGEN_URL } from "@/lib/helpLines";
import { t } from "@/lib/strings";

const s = t.local.pharmacy;

export const metadata: Metadata = { title: s.title };

export default function PharmacyPage() {
  return (
    <LocalScreen title={s.title}>
      <ClinicTypeCard id="yakguk" title={s.title} icon={Pill} />
      <p className="px-1 text-muted-foreground">
        {s.afterHours}{" "}
        <a
          href={EGEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-2"
        >
          {s.egenLink} ↗
        </a>
      </p>
      <PhraseCard title={s.phrasesTitle} phrases={PHRASES.pharmacy} />
    </LocalScreen>
  );
}
