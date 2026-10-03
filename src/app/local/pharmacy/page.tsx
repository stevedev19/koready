import { Pill } from "lucide-react";
import type { Metadata } from "next";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { PhraseCard } from "@/components/local/PhraseCard";
import { PHRASES } from "@/lib/clinics";
import { EGEN_URL } from "@/lib/helpLines";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.local.pharmacy.title };
}

export default async function PharmacyPage() {
  const t = await getT();
  const s = t.local.pharmacy;
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
