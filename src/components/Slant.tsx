/**
 * Decorative slanted join between ink and paper sections.
 * Pure SVG geometry, no external assets.
 */
export default function Slant({
  fill,
  flip = false,
}: {
  fill: string;
  flip?: boolean;
}) {
  return (
    <svg
      className="join-slant"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <polygon points="0,20 100,20 100,6 0,18" fill={fill} />
    </svg>
  );
}
