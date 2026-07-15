"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { site } from "@/lib/site";
import { fadeUp } from "@/lib/motion-variants";
import Magnetic from "@/components/ui/Magnetic";
import RollingText from "@/components/ui/RollingText";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Pointer parallax: the whole light field leans a few pixels toward the
  // cursor on a soft spring. Deliberately capped at ~18px so it registers as
  // depth, not as an object following the mouse.
  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);
  const lampX = useSpring(driftX, { stiffness: 40, damping: 20 });
  const lampY = useSpring(driftY, { stiffness: 40, damping: 20 });

  const handlePointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || e.pointerType === "touch") return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    driftX.set(((e.clientX - rect.left) / rect.width - 0.5) * 36);
    driftY.set(((e.clientY - rect.top) / rect.height - 0.5) * 28);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        driftX.set(0);
        driftY.set(0);
      }}
      className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--glow)_10%,transparent),transparent_60%)]" />
        {/* Wrapper owns the parallax transform; the lamp inside owns the CSS
            breathe keyframes. Same property on one element would clash. */}
        <motion.div className="absolute inset-0" style={{ x: lampX, y: lampY }}>
          <div className="hero-ambient" />
        </motion.div>
      </div>

      <motion.header
        className="relative z-10 flex w-full items-center justify-between"
        initial="hidden"
        animate="visible"
        custom={0.1}
        variants={fadeUp}
      >
        <Magnetic>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-md border-2 border-foreground px-4 py-2 text-sm font-semibold md:text-base"
          >
            <span
              aria-hidden
              className="absolute left-1/2 top-full h-[250%] w-[150%] -translate-x-1/2 rounded-[50%] bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.4,0,0,1)] group-hover:-translate-y-[62%]"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
              DM ON WHATSAPP
            </span>
          </a>
        </Magnetic>
        <Magnetic strength={0.25}>
          {/* Tooltip is a sibling of the anchor (same pattern as the avatar
              tooltip below) so the link's accessible name stays "GitHub"
              instead of swallowing the tooltip text. */}
          <span className="group relative block">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="github-tooltip"
              className="block text-sm font-semibold md:text-base"
            >
              <RollingText text="GitHub" />
            </a>
            <span
              id="github-tooltip"
              role="tooltip"
              className="pointer-events-none absolute right-0 top-full mt-3 w-max origin-top-right -translate-y-1 scale-95 rounded-lg border border-white/15 bg-muted/80 px-3 py-1.5 text-xs font-semibold text-white/90 opacity-0 shadow-[0_8px_24px_rgba(14,16,22,0.4)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-75 group-hover:duration-300 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
            >
              <span
                aria-hidden
                className="absolute -top-1 right-4 size-2 rotate-45 border-l border-t border-white/15 bg-muted/80 backdrop-blur-md"
              />
              View profile
            </span>
          </span>
        </Magnetic>
      </motion.header>

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="font-display text-center text-[clamp(2.75rem,11vw,8.5rem)] font-black leading-[0.95] tracking-tighter text-accent"
          initial="hidden"
          animate="visible"
          custom={0.25}
          variants={fadeUp}
        >
          {/* The explicit space keeps the accessible name reading as two
              words; it collapses visually at the line break. */}
          {site.heroFirstLine}{" "}
          <br />
          {site.heroSecondLine}
        </motion.h1>
        <motion.div
          className="group relative -mt-6 sm:-mt-10"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
        >
          <motion.a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open to work. DM Jide on WhatsApp"
            aria-describedby="avatar-tooltip"
            className="relative block rounded-full"
            whileHover={{ scale: 1.06, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            {/* Jide's two original images: greyscale avatar at rest, crossfading to his coloured ready-to-work avatar (grin, dollar-sign shades) on hover, focus, or touch. Both files are his own assets; never edit, regenerate, or re-encode them. */}
            <span className="relative block size-24 sm:size-32 md:size-36">
              {/* Open-to-work beacon: rings in the site's glow green ripple
                  out from the avatar */}
              <span aria-hidden className="beacon-ring" />
              <span aria-hidden className="beacon-ring beacon-ring-delayed" />
              <Image
                src="/new_avatar.png"
                alt={`Cartoon avatar of ${site.name}`}
                width={140}
                height={140}
                priority
                className="size-full rounded-full border-4 border-muted object-cover grayscale"
              />
              <Image
                src="/newavatar_ready.png"
                alt=""
                aria-hidden
                width={140}
                height={140}
                priority
                className="absolute inset-0 size-full rounded-full border-4 border-muted object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100 pointer-coarse:opacity-100"
              />
            </span>
          </motion.a>
          {/* Sibling of the rotating link so the card stays straight while the avatar tilts */}
          <span
            id="avatar-tooltip"
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-max max-w-[260px] origin-bottom -translate-x-1/2 translate-y-2 scale-90 rounded-2xl border border-white/20 bg-muted/80 px-5 py-4 text-left text-white opacity-0 shadow-[0_12px_40px_rgba(14,16,22,0.35)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-75 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
          >
            <span
              aria-hidden
              className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-b border-r border-white/20 bg-muted/80 backdrop-blur-md"
            />
            <span className="flex items-center gap-2 text-sm font-bold">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
              </span>
              Open to work
            </span>
            <span className="mt-1 block text-[13px] leading-snug text-white/75">
              DM me on WhatsApp. I reply fast.
            </span>
          </span>
          <span className="mt-4 hidden items-center justify-center gap-1.5 pointer-coarse:flex">
            <span aria-hidden className="size-2 rounded-full bg-whatsapp" />
            <span className="text-xs font-semibold tracking-wide">
              open to work
            </span>
          </span>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        initial="hidden"
        animate="visible"
        custom={0.8}
        variants={fadeUp}
      >
        <p className="mx-auto max-w-xs text-center text-base leading-relaxed text-foreground/90 sm:mx-0 sm:text-left md:text-lg">
          I&apos;m a freelance{" "}
          <span className="font-bold text-accent">{site.role}</span>, currently
          open to work.
        </p>
        <p className="hidden max-w-xs text-base leading-relaxed text-foreground/90 sm:block sm:text-right md:text-lg">
          Building sharp, fast websites{" "}
          <br />
          for clients around the world.
        </p>
      </motion.div>
    </section>
  );
}
