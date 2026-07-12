"use client";

import { motion, useReducedMotion } from "motion/react";

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.02, delayChildren: delay },
  }),
};

const letter = {
  hidden: { opacity: 0, y: "1em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

// Scroll-triggered headline reveal: letters rise in with a stagger the first
// time the text scrolls into view. Words wrap as whole units so lines never
// break mid-word. Screen readers get the plain sentence; the animated spans
// are decorative. Reduced motion renders static text.
export default function ScrollReveal({
  text,
  delay = 0,
  className,
}: Readonly<{ text: string; delay?: number; className?: string }>) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={container}
    >
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, w) => (
        <span
          key={w}
          aria-hidden
          className="mr-[0.22em] inline-block whitespace-nowrap"
        >
          {[...word].map((ch, c) => (
            <motion.span key={c} className="inline-block" variants={letter}>
              {ch}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
