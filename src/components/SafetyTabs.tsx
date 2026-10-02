"use client";

import { useSyncExternalStore, useState } from "react";
import { t } from "@/lib/strings";
import { AlertTranslator } from "./AlertTranslator";
import { ScamChecker } from "./ScamChecker";
import { Segmented } from "./ui/Chips";

type Tool = "scam" | "alerts";

const subscribe = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};
const readHash = () => window.location.hash;

/** One tool at a time. #alert-translator / #scam-checker links open the matching tool. */
export function SafetyTabs() {
  const hash = useSyncExternalStore(subscribe, readHash, () => "");
  const [picked, setPicked] = useState<Tool | null>(null);
  const tool: Tool = picked ?? (hash === "#alert-translator" ? "alerts" : "scam");

  return (
    <div className="space-y-4">
      <Segmented<Tool>
        label={t.tabs.safety}
        value={tool}
        onChange={setPicked}
        options={[
          { value: "scam", label: t.scam.title },
          { value: "alerts", label: t.alerts.title },
        ]}
      />
      {/* Both stay mounted so switching keeps what you typed; only one is visible. */}
      <div id="scam-checker" hidden={tool !== "scam"}>
        <ScamChecker />
      </div>
      <div id="alert-translator" hidden={tool !== "alerts"}>
        <AlertTranslator />
      </div>
    </div>
  );
}
