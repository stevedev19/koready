import type { Metadata } from "next";
import { AlertTranslator } from "@/components/AlertTranslator";
import { HelpLines } from "@/components/HelpLines";
import { ScamChecker } from "@/components/ScamChecker";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.safety };

const jump =
  "flex min-h-12 items-center justify-center rounded-xl border-2 border-border bg-surface px-3 text-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function SafetyPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">{t.tabs.safety}</h1>
        <p className="mt-1 text-muted">{t.safety.intro}</p>
        <p className="mt-2 text-sm font-semibold">{t.safety.disclaimer}</p>
      </header>
      <nav aria-label={t.tabs.safety} className="grid grid-cols-2 gap-2">
        <a href="#scam-checker" className={jump}>🕵️ {t.scam.title}</a>
        <a href="#alert-translator" className={jump}>📢 {t.alerts.title}</a>
      </nav>
      <div id="scam-checker" className="scroll-mt-4">
        <ScamChecker />
      </div>
      <div id="alert-translator" className="scroll-mt-4">
        <AlertTranslator />
      </div>
      <HelpLines ids={["police", "scamReport", "fss", "kisa", "immigration"]} footer={t.safety.disclaimer} />
    </div>
  );
}
