// Shared scroll/entrance variant used by every section: fade in while rising
// 24px, with a per-call delay passed through the `custom` prop.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};
