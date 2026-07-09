"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import { useImageTint } from "@/lib/useImageTint";
import Magnetic from "@/components/ui/Magnetic";
import RollingText from "@/components/ui/RollingText";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function Hero() {
  const avatarTint = useImageTint("/avatar_ready.png");

  return (
    <section
      id="home"
      className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,104,217,0.15),transparent_60%)]"
      />

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
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="github-tooltip"
            className="group relative block text-sm font-semibold md:text-base"
          >
            <RollingText text="GitHub" />
            <span
              id="github-tooltip"
              role="tooltip"
              className="pointer-events-none absolute right-0 top-full mt-3 w-max origin-top-right -translate-y-1 scale-95 rounded-lg border border-white/15 bg-muted/80 px-3 py-1.5 text-xs font-semibold text-white/90 opacity-0 shadow-[0_8px_24px_rgba(14,16,22,0.4)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-75 group-hover:duration-300 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100"
            >
              <span
                aria-hidden
                className="absolute -top-1 right-4 size-2 rotate-45 border-l border-t border-white/15 bg-muted/80 backdrop-blur-md"
              />
              View profile
            </span>
          </a>
        </Magnetic>
      </motion.header>

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="font-display text-center text-[clamp(2.75rem,11vw,8.5rem)] font-extrabold leading-[0.95] tracking-tight text-accent"
          initial="hidden"
          animate="visible"
          custom={0.25}
          variants={fadeUp}
        >
          {site.heroFirstLine}
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
            {/* Resting: greyscale base avatar. On hover, focus, or touch (no hover) it crossfades to the full-colour ready-to-work variant. */}
            <span className="relative block size-24 sm:size-32 md:size-36">
              <Image
                src="/avatar.png"
                alt={`Cartoon avatar of ${site.name}`}
                width={140}
                height={140}
                priority
                className="size-full rounded-full border-4 border-muted object-cover grayscale transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 pointer-coarse:opacity-0"
              />
              <Image
                src="/avatar_ready.png"
                alt=""
                aria-hidden
                width={140}
                height={140}
                priority
                className="absolute inset-0 size-full rounded-full border-4 border-muted object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 pointer-coarse:opacity-100"
              />
            </span>
          </motion.a>
          {/* Sibling of the rotating link so the card stays straight while the avatar tilts */}
          <span
            id="avatar-tooltip"
            role="tooltip"
            style={{ backgroundColor: `rgb(${avatarTint} / 0.78)` }}
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-max max-w-[260px] origin-bottom -translate-x-1/2 translate-y-2 scale-90 rounded-2xl border border-white/20 px-5 py-4 text-left text-white opacity-0 shadow-[0_12px_40px_rgba(14,16,22,0.35)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-75 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
          >
            <span
              aria-hidden
              style={{ backgroundColor: `rgb(${avatarTint} / 0.78)` }}
              className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-b border-r border-white/20 backdrop-blur-md"
            />
            <span className="flex items-center gap-2 text-sm font-bold">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#25D366]" />
              </span>
              Open to work
            </span>
            <span className="mt-1 block text-[13px] leading-snug text-white/75">
              DM me on WhatsApp. I reply fast.
            </span>
          </span>
          <span className="mt-4 hidden items-center justify-center gap-1.5 pointer-coarse:flex">
            <span aria-hidden className="size-2 rounded-full bg-[#25D366]" />
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
        <p className="max-w-xs text-sm leading-relaxed text-foreground/90 md:text-base">
          I&apos;m a freelance{" "}
          <span className="font-bold text-accent">{site.role}</span>, currently
          open to work.
        </p>
        <p className="max-w-xs text-sm leading-relaxed text-foreground/90 sm:text-right md:text-base">
          Focused on interfaces and experiences, working with clients
          worldwide.
        </p>
      </motion.div>
    </section>
  );
}
