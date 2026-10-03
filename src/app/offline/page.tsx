import { WifiOff } from "lucide-react";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/States";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.offline.title };

// Precached by public/sw.js and shown when a page can't be loaded offline.
export default function OfflinePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-12">
      <EmptyState icon={WifiOff} tone="amber" title={<span className="text-2xl">{t.offline.title}</span>}>
        <p>{t.offline.body}</p>
      </EmptyState>
      {/* Plain link = full reload, which retries the network. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className={buttonVariants({ size: "lg", className: "mt-2" })}>
        {t.offline.retry}
      </a>
    </div>
  );
}
