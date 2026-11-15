import React, { useRef, useState } from 'react'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import { EASE, VIEWPORT, stagger, fadeUp, lineGrow, cardReveal } from '../lib/motion'

// Created once, not on every render
const headerStagger = stagger(0.1)

// Yellow marker sweeps in left to right, after the heading has landed
const highlightSweep = {
  hidden: { backgroundSize: '0% 100%' },
  show: {
    backgroundSize: '100% 100%',
    transition: { duration: 0.7, ease: EASE, delay: 0.35 },
  },
}

// Reduced motion: marker is simply there
const highlightStatic = {
  hidden: { backgroundSize: '100% 100%' },
  show: { backgroundSize: '100% 100%' },
}

/* ------------------------------------------------------------------ */
/*  Logos                                                              */
/*                                                                     */
/*  Every image inside src/assets/logos/ is imported automatically,    */
/*  so no filenames are listed here. Add, remove or rename files in    */
/*  that folder and the marquee updates by itself. Order is            */
/*  alphabetical by filename; the alt text comes from the filename.    */
/* ------------------------------------------------------------------ */

const logoModules = import.meta.glob(
  '../assets/logos/*.{png,jpg,jpeg,webp,avif,svg}',
  { eager: true, import: 'default' }
)

const LOGOS = Object.entries(logoModules).map(([path, src]) => ({
  name: path
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' '),
  src,
}))

// One marquee "set" must be wider than the visible area or gaps appear.
// If the folder has only a few logos, the list is repeated up to this many slots.
const MIN_SLOTS = 8

// Scroll speed: seconds per logo slot (same pixel speed whatever the logo count)
const SECONDS_PER_LOGO = 2.8

const MARQUEE_SET = LOGOS.length
  ? Array.from(
      { length: Math.max(MIN_SLOTS, LOGOS.length) },
      (_, i) => LOGOS[i % LOGOS.length]
    )
  : []

const LOOP_SECONDS = MARQUEE_SET.length * SECONDS_PER_LOGO

// Fades logos in/out at the left and right edges (no visible background)
const EDGE_MASK =
  '[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]'

// Fixed-size slot per logo: equal spacing, consistent size, no distortion
const LogoItem = ({ name, src, decorative = false }) => (
  <li className="flex h-10 w-[110px] shrink-0 items-center justify-center px-4 sm:h-12 sm:w-[140px] sm:px-5 md:h-14 md:w-[170px] md:px-6">
    <img
      src={src}
      alt={decorative ? '' : name}
      draggable={false}
      decoding="async"
      className="h-full w-full object-contain"
    />
  </li>
)

// Seamless loop: the set is rendered twice and the track slides left by
// exactly one set (-50%), then wraps back to 0.
const LogoMarquee = ({ playing }) => {
  const progress = useMotionValue(0)
  const x = useTransform(progress, [0, 1], ['0%', '-50%'])

  useAnimationFrame((_, delta) => {
    if (!playing) return
    // delta is capped so returning to a background tab does not cause a jump
    progress.set((progress.get() + Math.min(delta, 64) / (LOOP_SECONDS * 1000)) % 1)
  })

  return (
    <motion.div style={{ x }} className="flex w-max will-change-transform">
      <ul className="flex shrink-0">
        {MARQUEE_SET.map((logo, i) => (
          <LogoItem key={`${logo.src}-${i}`} {...logo} />
        ))}
      </ul>
      <ul className="flex shrink-0" aria-hidden="true">
        {MARQUEE_SET.map((logo, i) => (
          <LogoItem key={`${logo.src}-${i}`} {...logo} decorative />
        ))}
      </ul>
    </motion.div>
  )
}

const LogoShowcase = ({ reduce }) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [hovered, setHovered] = useState(false)

  if (!LOGOS.length) return null

  // Runs only while on screen and not hovered
  const playing = inView && !hovered

  return (
    <motion.div
      ref={ref}
      variants={cardReveal}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      role="group"
      aria-label="Brand logos"
      className={`relative mt-[44px] w-full max-w-[1080px] overflow-hidden ${
        reduce ? '' : EDGE_MASK
      }`}
    >
      {reduce ? (
        // Reduced motion: static, wrapped layout
        <ul className="flex flex-wrap items-center justify-center">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.src} {...logo} />
          ))}
        </ul>
      ) : (
        <LogoMarquee playing={playing} />
      )}
    </motion.div>
  )
}

const Ideas = () => {
  const reduce = useReducedMotion()

  return (
    <section id="work" className="w-full scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-full px-5 pb-10 pt-4 sm:max-w-[75%] sm:px-[21px] 2xl:max-w-[1120px]">
        {/* Heading block: eyebrow + heading */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <motion.span
              variants={lineGrow}
              className="block h-[4px] w-[26px] origin-left bg-yellow"
            />
            <motion.span
              variants={fadeUp}
              className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black"
            >
              Selected Work
            </motion.span>
          </div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-[38px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black sm:text-[46px] md:text-[54px]"
          >
            Ideas,{' '}
            <motion.span
              variants={reduce ? highlightStatic : highlightSweep}
              className="inline-block px-[6px]"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)',
                backgroundRepeat: 'no-repeat',
              }}
            >
              in reality.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Scrolling brand logos on the existing cream background */}
        <LogoShowcase reduce={reduce} />
      </div>
    </section>
  )
}

export default Ideas