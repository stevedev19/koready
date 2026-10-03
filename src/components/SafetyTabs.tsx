"use client";

import { useSyncExternalStore, useState } from "react";
import { useT } from "@/lib/i18n/client";
import { AlertTranslator } from "./AlertTranslator";
import { ScamChecker } from "./ScamChecker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type Tool = "scam" | "alerts";

const subscribe = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};
const readHash = () => window.location.hash;

/** One tool at a time. #alert-translator / #scam-checker links open the matching tool. */
export function SafetyTabs() {
  const t = useT();
  const hash = useSyncExternalStore(subscribe, readHash, () => "");
  const [picked, setPicked] = useState<Tool | null>(null);
  const tool: Tool = picked ?? (hash === "#alert-translator" ? "alerts" : "scam");

  return (
    <Tabs value={tool} onValueChange={(value) => setPicked(value as Tool)} className="space-y-4">
      <TabsList aria-label={t.tabs.safety}>
        <TabsTrigger value="scam">{t.scam.title}</TabsTrigger>
        <TabsTrigger value="alerts">{t.alerts.title}</TabsTrigger>
      </TabsList>
      {/* Both stay mounted so switching keeps what you typed; only one is visible. */}
      <TabsContent value="scam" forceMount>
        <div id="scam-checker">
          <ScamChecker />
        </div>
      </TabsContent>
      <TabsContent value="alerts" forceMount>
        <div id="alert-translator">
          <AlertTranslator />
        </div>
      </TabsContent>
    </Tabs>
  );
}
