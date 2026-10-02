import type { Metadata } from "next";
import { HelpLines } from "@/components/HelpLines";
import { SafetyTabs } from "@/components/SafetyTabs";
import { PageHeader } from "@/components/ui/PageHeader";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.safety };

export default function SafetyPage() {
  return (
    <div className="space-y-5">
      <PageHeader title={t.tabs.safety} subtitle={t.safety.intro} />
      <SafetyTabs />
      <HelpLines ids={["police", "scamReport", "fss", "kisa", "immigration"]} footer={t.safety.disclaimer} />
    </div>
  );
}
