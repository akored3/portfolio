/**
 * Letter-by-letter roll-up on hover. Needs a `group` class on an ancestor.
 * Renders the text twice (second copy in accent) stacked in clipped cells;
 * on group-hover each cell's column slides up one line, staggered per char.
 */
export default function RollingText({
  text,
  className,
}: Readonly<{ text: string; className?: string }>) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-flex">
        {text.split("").map((ch, i) => (
          <span
            key={i}
            className="inline-block h-[1.3em] overflow-hidden align-top"
          >
            <span
              className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <span className="block leading-[1.3]">
                {ch === " " ? " " : ch}
              </span>
              <span className="block leading-[1.3] text-accent">
                {ch === " " ? " " : ch}
              </span>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
