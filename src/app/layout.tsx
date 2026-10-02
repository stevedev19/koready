import type { Metadata, Viewport } from "next";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { TabBar } from "@/components/TabBar";
import { t } from "@/lib/strings";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: t.app.name, template: `%s · ${t.app.name}` },
  description: t.app.description,
  applicationName: t.app.name,
  appleWebApp: { capable: true, title: t.app.shortName, statusBarStyle: "default" },
  icons: { apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <main className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-28">
          {children}
        </main>
        <TabBar />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
