// Tap feedback classes, shared by <Pressable> and by elements that can't be one
// (a <summary>, a native <select>). A plain module, so server components can import it.
// hover: only applies on devices with a real pointer (Tailwind v4 wraps it in
// @media (hover: hover)), so it never sticks after a tap on a phone.
// Focus ring: the global 3px :focus-visible outline in globals.css.
// Contrast (tokens.css): text ≥ 9.8:1, muted ≥ 5.1:1, icons ≥ 3.8:1 on surface-2/3 in both themes.

/** Background change on hover and press, without layout. */
export const pressFeedbackClass =
  "transition-colors duration-100 [-webkit-tap-highlight-color:transparent] hover:bg-surface-2 active:bg-surface-3";

/** Full Pressable base: 48px minimum, left-aligned. */
export const pressableClass = `relative flex min-h-12 w-full items-center text-left ${pressFeedbackClass} disabled:pointer-events-none disabled:opacity-45`;
