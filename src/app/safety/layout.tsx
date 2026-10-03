import { EmergencyShortcut } from "@/components/EmergencyShortcut";

/** Safety tab only: the 119 / 112 shortcut sits top right on every Safety screen. */
export default function SafetyLayout({ children }: LayoutProps<"/safety">) {
  return (
    <>
      <div className="-mt-3 mb-2 flex justify-end">
        <EmergencyShortcut />
      </div>
      {children}
    </>
  );
}
