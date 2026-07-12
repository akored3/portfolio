"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-6 pt-16 pb-24 sm:px-10 md:pt-20 md:pb-32 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col">
        {/* The About headline switches to Syne (font-sans), cream, left-aligned:
            in this design only the hero name gets the display font and pure
            white. */}
        <h2 className="mb-10 text-balance text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.9] tracking-tighter text-foreground md:mb-16">
          <ScrollReveal text={site.about.headline} />
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-20">
          {/* Bio */}
          <div className="mb-10 flex flex-col gap-4 text-lg font-medium leading-relaxed tracking-wide text-foreground md:mb-16 md:gap-6 md:text-xl lg:mb-0 lg:max-w-[62%] lg:text-2xl">
            {site.about.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.1 + i * 0.08}
                variants={fadeUp}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-6 md:gap-8 lg:w-[30%] lg:shrink-0 lg:gap-6">
            {site.about.tools.map((group, i) => (
              <motion.div
                key={group.title}
                className="flex flex-col gap-2 md:gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.15 + i * 0.08}
                variants={fadeUp}
              >
                <h3 className="text-2xl font-bold text-foreground md:text-3xl lg:text-xl">
                  {group.title}
                </h3>
                <p className="text-lg leading-relaxed tracking-wide text-foreground/80 md:text-base lg:text-lg">
                  {group.items}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Watchlist marquee: full-bleed strip of poster cards, so it escapes
          the section's px padding on purpose. */}
      <motion.div
        className="mt-16 md:mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        custom={0.1}
        variants={fadeUp}
      >
        <Marquee className="watch-strip -mx-6 py-3 sm:-mx-10 lg:-mx-16" duration={45}>
          {site.about.watchlist.map((item) => {
            const card = item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={480}
                className="size-full rounded-xl object-cover"
              />
            ) : (
              // No image: draw the poster in code. A typographic card with a
              // heat gradient; for Heat it reads literally.
              <span className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#08090d] px-3">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,88,12,0.28),transparent_65%)]"
                />
                <span className="relative break-words bg-gradient-to-b from-amber-200 via-orange-500 to-red-800 bg-clip-text text-center font-display text-3xl font-black uppercase leading-none tracking-tight text-transparent md:text-4xl">
                  {item.title}
                </span>
              </span>
            );
            return item.link ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title}: see why I recommend it`}
                className="watch-card block h-[190px] w-[130px] shrink-0 overflow-hidden rounded-xl md:h-[240px] md:w-[160px]"
              >
                {card}
              </a>
            ) : (
              <span
                key={item.title}
                className="watch-card block h-[190px] w-[130px] shrink-0 overflow-hidden rounded-xl md:h-[240px] md:w-[160px]"
              >
                {card}
              </span>
            );
          })}
        </Marquee>
        <p className="mx-auto mt-8 w-[90%] max-w-md text-center text-sm font-semibold uppercase tracking-wide text-foreground md:text-base">
          {site.about.watchCaption}
        </p>
      </motion.div>
    </section>
  );
}
