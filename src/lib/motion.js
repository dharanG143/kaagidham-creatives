/**
 * Shared Framer Motion presets for Kaagidham Creatives.
 *
 * Plain objects and functions only (no JSX, no React imports), so this file
 * works as a .js module in Vite and has no dependency on React 19 or
 * Tailwind CSS v4 versions.
 *
 * Everything here animates opacity, transform (x / y / scale / rotate) or
 * background-size, so none of it causes layout shift.
 *
 * Usage:
 *   import { fadeUp, stagger, VIEWPORT } from '../lib/motion'
 *
 *   <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
 *     <motion.h2 variants={fadeUp}>Title</motion.h2>
 *   </motion.div>
 *
 * Reduced motion: wrap the app (or page) in
 *   <MotionConfig reducedMotion="user"> ... </MotionConfig>
 * so transform animations are switched off for visitors who enable
 * "prefers-reduced-motion". Only gentle opacity fades remain.
 */

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

/** Smooth ease-out used across the site. */
export const EASE = [0.22, 1, 0.36, 1]

/** Scroll-reveal settings: play once, when 15% of the element is visible. */
export const VIEWPORT = { once: true, amount: 0.15 }

/** Yellow marker drawn under highlighted words (lower part of the text line). */
export const HIGHLIGHT_GRADIENT =
  'linear-gradient(transparent 68%, #FFC20E 68%, #FFC20E 94%, transparent 94%)'

/* ------------------------------------------------------------------ */
/*  Variant builders                                                   */
/* ------------------------------------------------------------------ */

/**
 * Parent variants that stagger their variant children.
 * @param {number} [gap=0.1]   seconds between children
 * @param {number} [delay=0]   seconds before the first child starts
 */
export const stagger = (gap = 0.1, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */

/**
 * Generic fade + rise.
 * Pass `custom={seconds}` on the element for an extra delay.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
}

/** Yellow eyebrow line draws in from the left (add `origin-left` in Tailwind). */
export const lineGrow = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: EASE, delay: 0.2 } },
}

/**
 * Service card: rises in, then its checklist items (see `listItem`) follow.
 * Pass `custom={seconds}` to offset cards that sit in the same row.
 */
export const serviceCard = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
      delay,
      staggerChildren: 0.07,
      delayChildren: delay + 0.25,
    },
  }),
}

/** Checklist item inside a `serviceCard`. */
export const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
}

/** Large single card (e.g. Selected Work). */
export const cardReveal = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
}

/**
 * Hero visual cards and pills.
 * `custom` is the final rotation in degrees (default 0). Rotation lives here,
 * not in Tailwind `rotate-*` classes, because Framer Motion writes its own
 * transform and would otherwise conflict with Tailwind (v3 overwrites it,
 * v4 would apply the rotation twice).
 */
export const heroCard = {
  hidden: (rotate = 0) => ({ opacity: 0, y: 28, scale: 0.94, rotate }),
  show: (rotate = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate,
    transition: { duration: 0.7, ease: EASE },
  }),
}

/** Yellow circle behind the hero cards. */
export const heroCircle = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
}

/* ------------------------------------------------------------------ */
/*  Prop presets                                                       */
/* ------------------------------------------------------------------ */

/** Spread onto a motion element for the shared button hover / tap feel. */
export const buttonMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2 },
}