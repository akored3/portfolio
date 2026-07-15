"use client";

import { motion } from "motion/react";
import { site, emailHref } from "@/lib/site";
import { fadeUp } from "@/lib/motion-variants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/Magnetic";
import RollingText from "@/components/ui/RollingText";

// CTA link: RollingText letters can't carry text-decoration (the cells are
// inline-flex), so the underline is a border on the anchor instead.
function TalkLink({
  href,
  text,
  external,
}: Readonly<{ href: string; text: string; external?: boolean }>) {
  return (
    <Magnetic strength={0.15} className="inline-block">
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group inline-block border-b-2 border-current pb-0.5"
      >
        <RollingText text={text} />
      </a>
    </Magnetic>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[85svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* The hero's ambient lamp returns behind the closing CTA: the
          open-to-work beacon bookends the site. No parallax here; it just
          breathes. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-ambient" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center">
        <h2 className="text-center text-[clamp(3.5rem,18vw,13rem)] font-bold leading-[0.9] tracking-tighter text-foreground">
          <ScrollReveal text={site.contact.headline} />
        </h2>

        {/* One centered stack under the headline (the reference splits this
            into a left prompt and right socials; we deliberately don't). */}
        <div className="mt-14 flex w-full max-w-6xl flex-col items-center text-center md:mt-20">
          <div className="max-w-[420px] text-sm font-semibold uppercase tracking-wide text-foreground md:text-base">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.15}
              variants={fadeUp}
            >
              {site.contact.prompt}
            </motion.p>
            {/* div, not p: Magnetic renders a motion.div and divs can't
                live inside a paragraph. */}
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.25}
              variants={fadeUp}
            >
              <TalkLink href={emailHref} text="Send me an email" />
              <span>or</span>
              <TalkLink href={site.whatsapp} text="DM me on WhatsApp" external />
            </motion.div>
          </div>

          <motion.div
            className="mt-10 text-lg font-bold text-foreground md:mt-12 md:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.35}
            variants={fadeUp}
          >
            <Magnetic strength={0.25} className="inline-block">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <RollingText text="GitHub" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
