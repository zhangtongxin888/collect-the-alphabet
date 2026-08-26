export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="section section--ink" style={{ paddingBlock: "var(--s-7) var(--s-6)" }}>
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display">{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
