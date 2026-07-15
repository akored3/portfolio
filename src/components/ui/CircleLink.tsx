import Magnetic from "./Magnetic";

/**
 * Bordered circle icon button with magnetic pull and hover invert: the icon
 * language established by the project cards, shared with the footer. Pass the
 * circle size via className (e.g. "size-9"); the child svg sizes itself.
 */
export default function CircleLink({
  href,
  label,
  children,
  className = "size-11 md:size-12",
  strength = 0.2,
  external = true,
}: Readonly<{
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
  external?: boolean;
}>) {
  return (
    <Magnetic strength={strength}>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={label}
        className={`flex items-center justify-center rounded-full border-2 border-foreground/80 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background ${className}`}
      >
        {children}
      </a>
    </Magnetic>
  );
}
