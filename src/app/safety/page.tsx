import type { Metadata } from "next";
import { HelpLines } from "@/components/HelpLines";
import { ScamChecker } from "@/components/ScamChecker";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.safety };

export default function SafetyPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">{t.tabs.safety}</h1>
        <p className="mt-1 text-muted">{t.safety.intro}</p>
        <p className="mt-2 text-sm font-semibold">{t.safety.disclaimer}</p>
      </header>
      <ScamChecker />
      <HelpLines ids={["police", "scamReport", "fss", "kisa", "immigration"]} footer={t.safety.disclaimer} />
    </div>
  );
}
