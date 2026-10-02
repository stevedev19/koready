// Button styles as class helpers so <button>, <a> and <Link> share one look.
export type ButtonVariant = "primary" | "tonal" | "secondary" | "danger" | "emergency" | "text";
export type ButtonSize = "md" | "lg" | "xl";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-bold text-center transition-transform duration-100 ease-out-soft active:scale-[0.97] disabled:pointer-events-none disabled:opacity-45 [&_svg]:shrink-0";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-contrast",
  tonal: "bg-accent-soft text-accent",
  secondary: "bg-surface text-foreground ring-[1.5px] ring-inset ring-border-strong",
  danger: "bg-danger text-danger-contrast",
  emergency: "bg-emergency text-emergency-contrast",
  text: "bg-transparent text-accent",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-[3.25rem] px-5 text-[1.0625rem]", // 52px
  lg: "min-h-14 px-6 text-lg", // 56px
  xl: "min-h-[5.5rem] px-6 text-[1.875rem] rounded-3xl", // 88px, emergency only
};

export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "md", extra = ""): string {
  const s = variant === "text" ? "min-h-12 px-2 text-[1.0625rem]" : sizes[size];
  return `${base} ${variants[variant]} ${s} ${extra}`.trim();
}

/** Shared field style: 1.5px border passes 3:1 against the card in both themes. */
export const fieldClass =
  "w-full rounded-btn border-[1.5px] border-border-strong bg-surface px-4 py-3.5 text-[1.0625rem] text-foreground";
