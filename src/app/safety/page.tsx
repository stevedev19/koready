import { Lock } from "lucide-react";
import type { Metadata } from "next";
import { HelpLines } from "@/components/HelpLines";
import { SafetyTabs } from "@/components/SafetyTabs";
import { ListGroup, ListRow } from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.tabs.safety };
}

export default async function SafetyPage() {
  const t = await getT();
  return (
    <div className="space-y-5">
      <PageHeader title={t.tabs.safety} subtitle={t.safety.intro} />
      <SafetyTabs />
      <HelpLines ids={["police", "scamReport", "fss", "kisa", "immigration"]} footer={t.safety.disclaimer} />
      <ListGroup>
        <ListRow href="/privacy" icon={Lock} tone="neutral" title={t.privacy.link} />
      </ListGroup>
    </div>
  );
}
