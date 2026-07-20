"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import { fadeUp } from "@/lib/motion-variants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CircleLink from "@/components/ui/CircleLink";
import RollingText from "@/components/ui/RollingText";

type Project = (typeof site.work.projects)[number];

/* Octicons mark-github (MIT). */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="size-5 fill-current md:size-6">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-5 fill-none stroke-current stroke-2 md:size-6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: Readonly<{ project: Project; index: number }>) {
  // Even-index cards: text left, media right. Odd: flipped. Below lg the card
  // is a flex column sized by its content (absolute text over fixed heights
  // collides with the media when copy runs long); lg switches to the
  // reference's absolute composition inside a fixed 500px card.
  const flip = index % 2 === 1;

  const mediaClass = `z-10 mt-10 -mb-2 w-[85%] sm:w-[70%] lg:absolute lg:-bottom-2 lg:mt-0 lg:mb-0 lg:max-w-[55%] ${
    flip ? "self-start lg:left-0" : "self-end lg:right-0"
  }`;

  // Hovering anywhere on the card floats the laptop with a spring (variant
  // propagates down from the article's whileHover).
  const media = (
    <motion.div
      className={mediaClass}
      variants={{
        hover: {
          y: -14,
          rotate: flip ? 1.2 : -1.2,
          transition: { type: "spring", stiffness: 220, damping: 18 },
        },
      }}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.title} website in a laptop frame`}
          width={1175}
          height={693}
          className="h-auto w-full"
        />
      ) : (
        // No mockup yet: draw a browser window in code, echoing the
        // watchlist's typographic fallback cards.
        <div
          aria-hidden
          className="overflow-hidden rounded-t-xl border border-white/10 bg-[#08090d] shadow-[0_-12px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
            <span className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </span>
            <span className="h-4 w-1/2 rounded-full bg-white/5" />
          </div>
          <div className="flex aspect-[16/10] items-center justify-center px-6">
            <span className="text-center font-display text-3xl font-black uppercase leading-none tracking-tight text-foreground/20 md:text-4xl">
              {project.title}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <motion.article
      className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-muted lg:block lg:h-[500px]"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      custom={0.1}
      variants={fadeUp}
    >
      {/* Orbiting border beam; negative delay staggers cards apart. */}
      <span aria-hidden className="beam-track">
        <span className="beam" style={{ animationDelay: `${index * -2.5}s` }} />
      </span>

      {(project.github || project.live) && (
        <div
          className={`z-20 flex gap-3 px-6 pt-6 sm:px-8 sm:pt-8 lg:absolute lg:top-8 lg:p-0 ${
            flip ? "justify-end lg:right-10" : "lg:left-10"
          }`}
        >
          {project.github && (
            <CircleLink href={project.github} label={`Open the ${project.title} GitHub repository`}>
              <GitHubIcon />
            </CircleLink>
          )}
          {project.live && (
            <CircleLink href={project.live} label={`Open the live ${project.title} website`}>
              <ArrowIcon />
            </CircleLink>
          )}
        </div>
      )}

      <div
        className={`z-10 px-6 pt-8 sm:px-8 lg:absolute lg:top-1/2 lg:w-[430px] lg:-translate-y-1/2 lg:p-0 ${
          flip ? "lg:right-14" : "lg:left-14"
        }`}
      >
        <h3 className="text-4xl font-bold leading-none text-accent md:text-[44px] lg:text-5xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-[460px] text-base font-semibold leading-relaxed text-foreground/70">
          {project.description}
        </p>
        <ul aria-label="Built with" className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-foreground/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent md:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {media}
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className="w-full px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <h2 className="text-center text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.9] tracking-tighter text-foreground">
          <ScrollReveal text={site.work.headline} />
        </h2>
        <motion.p
          className="mt-6 w-[90%] max-w-xl text-center text-sm font-semibold uppercase tracking-wide text-foreground md:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0.2}
          variants={fadeUp}
        >
          {site.work.subtitle}
        </motion.p>

        <div className="mt-16 grid w-full grid-cols-1 gap-10 md:mt-20">
          {site.work.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          {/* Closing beat: one quiet card ending the section instead of it
              just stopping after the last project. The whole card is the
              anchor, so the arrow circle is a styled span (CircleLink is an
              anchor itself and links can't nest); it borrows CircleLink's
              border-and-invert language via group-hover. */}
          <motion.a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-4 rounded-3xl bg-muted px-8 py-10 md:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <span className="text-lg font-bold text-foreground md:text-xl">
              <RollingText text="More builds on GitHub" />
            </span>
            <span
              aria-hidden
              className="flex size-11 items-center justify-center rounded-full border-2 border-foreground/80 text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background group-focus-visible:bg-foreground group-focus-visible:text-background md:size-12"
            >
              <ArrowIcon />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
