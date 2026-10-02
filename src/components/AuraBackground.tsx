/** Decorative "Sunset Boulevard" aura behind every page (light theme only; see globals.css). */
export function AuraBackground() {
  return (
    <div className="aura-bg" aria-hidden="true">
      <div className="aura-layer aura-layer-1" />
      <div className="aura-layer aura-layer-2" />
    </div>
  );
}
