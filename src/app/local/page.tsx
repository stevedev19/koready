import { HeartHandshake, Pill, Siren, Stethoscope, Toothbrush, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MedicalDisclaimer } from "@/components/local/LocalScreen";
import { ListGroup, ListRow } from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.tabs.local };
}

export default async function LocalPage() {
  const t = await getT();
  const s = t.local.hospital;
  return (
    <div className="space-y-5">
      <PageHeader title={t.tabs.local} subtitle={t.local.intro} />

      <section aria-labelledby="hospital-helper" className="space-y-3">
        <p className="px-1 text-sm font-bold text-muted-foreground">{s.title}</p>
        <h2 id="hospital-helper" className="px-1 text-[1.375rem] font-extrabold">{s.question}</h2>

        {/* Emergency first and largest: one tap from the Local tab. */}
        <Link
          href="/local/emergency"
          className="flex min-h-[5.25rem] items-center gap-3.5 rounded-card bg-emergency px-4 py-3 text-emergency-contrast shadow-card"
        >
          <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/20">
            <Siren className="size-7" />
          </span>
          <span className="flex-1">
            <span className="block text-[1.375rem] leading-tight font-extrabold">{s.options.emergency.label}</span>
            <span className="block font-semibold">{s.options.emergency.hint}</span>
          </span>
          <ChevronRight aria-hidden="true" className="size-6" />
        </Link>

        <ListGroup>
          <ListRow href="/local/doctor" icon={Stethoscope} tone="blue" title={s.options.doctor.label} subtitle={s.options.doctor.hint} />
          <ListRow href="/local/pharmacy" icon={Pill} tone="green" title={s.options.pharmacy.label} subtitle={s.options.pharmacy.hint} />
          <ListRow href="/local/dental" icon={Toothbrush} tone="teal" title={s.options.dental.label} subtitle={s.options.dental.hint} />
          <ListRow
            href="/local/mental-health"
            icon={HeartHandshake}
            tone="violet"
            title={s.options.mentalHealth.label}
            subtitle={s.options.mentalHealth.hint}
          />
        </ListGroup>
        <MedicalDisclaimer />
      </section>
    </div>
  );
}
