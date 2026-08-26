type TileColor =
  | "coral"
  | "amber"
  | "teal"
  | "violet"
  | "leaf"
  | "blue"
  | "ink"
  | "paper";

export default function LetterTile({
  glyph,
  color = "coral",
  label,
}: {
  glyph: string;
  color?: TileColor;
  label?: string;
}) {
  return (
    <span
      className={`tile tile--${color}`}
      role="img"
      aria-label={label ?? `Letter tile ${glyph}`}
    >
      {glyph}
    </span>
  );
}
