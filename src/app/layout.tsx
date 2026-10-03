import type { Metadata, Viewport } from "next";
import { EmergencyShortcut } from "@/components/EmergencyShortcut";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { TabBar } from "@/components/TabBar";
import { t } from "@/lib/strings";
// Self-hosted Pretendard; dynamic subsets load only the Korean glyphs a page uses.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: t.app.name, template: `%s · ${t.app.name}` },
  description: t.app.description,
  applicationName: t.app.name,
  // iOS Home Screen. "default" status bar = dark text on light, light text on dark, never
  // over the content. ("black-translucent" forces white text, unreadable on cream.)
  appleWebApp: { capable: true, title: t.app.shortName, statusBarStyle: "default" },
  icons: { apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  // Stop iOS from turning numbers (rates, temperatures) into stray tel: links.
  formatDetection: { telephone: false, email: false, address: false },
  // Next only emits the unprefixed tag; older iOS needs the apple- one for standalone.
  other: { "apple-mobile-web-app-capable": "yes" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#14172b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <main className="mx-auto flex w-full max-w-lg flex-1 flex-col pt-[max(0.5rem,env(safe-area-inset-top))] pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))] pb-[calc(7.5rem+env(safe-area-inset-bottom))]">
          <div className="mb-2 flex justify-end">
            <EmergencyShortcut />
          </div>
          {children}
        </main>
        <TabBar />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
