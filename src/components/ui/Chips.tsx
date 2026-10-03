"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const ALL = "__all"; // Radix needs string values; null means "All"

/** Single-choice filter chips on Radix ToggleGroup: arrow keys move between chips. Always one chosen. */
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
    <ToggleGroup
      type="single"
      aria-label={label}
      value={value ?? ALL}
      onValueChange={(next) => {
        if (!next) return; // tapping the chosen chip keeps it chosen
        onChange((next === ALL ? null : next) as T);
      }}
    >
      {options.map((o) => (
        <ToggleGroupItem key={o.value ?? ALL} value={o.value ?? ALL}>
          {o.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
