type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="meta-label">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
