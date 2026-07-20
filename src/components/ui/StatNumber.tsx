"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Odometer numeral: digits 0..value stacked in a clipped 1em cell (the same
 * clipped-cell language as RollingText), rolled up once on mount and settling
 * on the final digit. Tween, not spring: the column ends at the target digit,
 * so any overshoot would expose empty track. The suffix is mounted from the
 * start (reserves width, no layout shift) and stamps in as the digit lands.
 * Reduced motion renders the final value as plain text.
 */
const ROLL_EASE = [0.16, 1, 0.3, 1] as const;

export default function StatNumber({
  value,
  suffix = "",
  delay = 0,
  className,
}: Readonly<{
  value: number;
  suffix?: string;
  delay?: number;
  className?: string;
}>) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  const digits = Array.from({ length: value + 1 }, (_, i) => i);

  return (
    <span className={className}>
      <span className="sr-only">{`${value}${suffix}`}</span>
      <span aria-hidden className="flex">
        <span className="block h-[1em] overflow-hidden">
          <motion.span
            className="flex flex-col"
            initial={{ y: "0em" }}
            animate={{ y: `-${value}em` }}
            transition={{ duration: 1.2, delay, ease: ROLL_EASE }}
          >
            {digits.map((d) => (
              <span key={d} className="block h-[1em] leading-none">
                {d}
              </span>
            ))}
          </motion.span>
        </span>
        {suffix && (
          <motion.span
            className="block leading-none"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: delay + 0.85,
              ease: [0.21, 0.47, 0.32, 0.98] as const,
            }}
          >
            {suffix}
          </motion.span>
        )}
      </span>
    </span>
  );
}
