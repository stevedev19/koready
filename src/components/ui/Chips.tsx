"use client";

/** Single-choice chips (filters). Uses aria-pressed so the state is announced. */
export function ChipGroup<T extends string | null>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value ?? "all"}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(o.value)}
            className={`min-h-12 rounded-full px-4 text-[0.9375rem] font-bold whitespace-nowrap transition-colors ${
              selected ? "bg-foreground text-card" : "bg-card text-foreground ring-[1.5px] ring-inset ring-input"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/** Two or three exclusive views (e.g. Scam checker / Alert translator). */
export function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex gap-1 rounded-btn bg-surface-3 p-1">
      {options.map((o) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(o.value)}
            className={`min-h-12 flex-1 rounded-[0.6875rem] px-2 text-[0.9375rem] font-bold transition-colors ${
              selected ? "bg-card text-foreground shadow-card ring-1 ring-inset ring-border" : "text-muted-foreground"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
