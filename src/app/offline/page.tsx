import type { Metadata } from "next";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.offline.title };

// Precached by public/sw.js and shown when a page can't be loaded offline.
export default function OfflinePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
      <span className="text-6xl" aria-hidden="true">📡</span>
      <h1 className="mt-4 text-2xl font-bold">{t.offline.title}</h1>
      <p className="mt-2 text-muted">{t.offline.body}</p>
      {/* Plain link = full reload, which retries the network. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-accent px-5 font-semibold text-accent-contrast"
      >
        {t.offline.retry}
      </a>
    </div>
  );
}
