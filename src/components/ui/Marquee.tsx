// An infinite horizontal marquee: renders its children twice inside a track
// that slides by half its width (see the marquee keyframes in globals.css),
// so the loop never shows a seam. Pauses on hover so cards can be clicked.
// No client JS needed; reduced motion degrades to a static strip via the
// global media query.
export default function Marquee({
  children,
  duration = 40,
  className,
}: Readonly<{
  children: React.ReactNode;
  duration?: number;
  className?: string;
}>) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className="flex w-max animate-[marquee_linear_infinite] hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 gap-3 pr-3 md:gap-4 md:pr-4">
          {children}
        </div>
        <div aria-hidden className="flex shrink-0 gap-3 pr-3 md:gap-4 md:pr-4">
          {children}
        </div>
      </div>
    </div>
  );
}
