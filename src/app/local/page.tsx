import type { Metadata } from "next";
import Link from "next/link";
import { MedicalDisclaimer } from "@/components/local/LocalScreen";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.local };

const s = t.local.hospital;

const OPTIONS = [
  { href: "/local/doctor", icon: "🩺", ...s.options.doctor },
  { href: "/local/pharmacy", icon: "💊", ...s.options.pharmacy },
  { href: "/local/dental", icon: "🦷", ...s.options.dental },
  { href: "/local/mental-health", icon: "💬", ...s.options.mentalHealth },
] as const;

export default function LocalPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">{t.tabs.local}</h1>
        <p className="mt-1 text-muted">{t.local.intro}</p>
      </header>

      <section aria-labelledby="hospital-helper" className="space-y-3">
        <h2 id="hospital-helper" className="text-lg font-semibold">
          <span aria-hidden="true">🏥 </span>
          {s.title}
        </h2>
        <p className="text-xl font-bold">{s.question}</p>

        {/* Emergency first and largest: one tap from the Local tab. */}
        <Link
          href="/local/emergency"
          className="flex min-h-20 items-center gap-4 rounded-2xl bg-red-700 px-5 py-4 text-white shadow-sm focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-700 dark:bg-red-600"
        >
          <span aria-hidden="true" className="text-4xl">🚑</span>
          <span>
            <span className="block text-2xl font-bold">{s.options.emergency.label}</span>
            <span className="block font-medium">{s.options.emergency.hint}</span>
          </span>
        </Link>

        <ul className="grid gap-3">
          {OPTIONS.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="flex min-h-18 items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-3 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span aria-hidden="true" className="text-3xl">{o.icon}</span>
                <span className="flex-1">
                  <span className="block text-xl font-semibold">{o.label}</span>
                  <span className="block text-muted">{o.hint}</span>
                </span>
                <span aria-hidden="true" className="text-2xl text-muted">›</span>
              </Link>
            </li>
          ))}
        </ul>
        <MedicalDisclaimer />
      </section>
    </div>
  );
}
