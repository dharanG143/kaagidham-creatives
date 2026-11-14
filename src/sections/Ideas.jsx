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
/*  Logo sources: easy to replace                                      */
/*                                                                     */
/*  To use your own logos, import them and swap the `src` values:      */
/*    import acme from '../assets/logos/acme.svg'                      */
/*    { name: 'Acme', src: acme }                                      */
/*  Logos are shown on the card's black background, so white / light   */
/*  logos work best. The placeholders below are white SVGs from the    */
/*  Simple Icons CDN. Add or remove entries freely (10 to 20 works     */
/*  well); the two rows split the list automatically.                  */
/* ------------------------------------------------------------------ */

const simpleIcon = (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`

const LOGOS = [
  { name: 'Google', src: simpleIcon('google') },
  { name: 'Apple', src: simpleIcon('apple') },
  { name: 'Amazon', src: simpleIcon('amazon') },
  { name: 'Netflix', src: simpleIcon('netflix') },
  { name: 'Meta', src: simpleIcon('meta') },
  { name: 'Adobe', src: simpleIcon('adobe') },
  { name: 'Spotify', src: simpleIcon('spotify') },
  { name: 'Nike', src: simpleIcon('nike') },
  { name: 'Samsung', src: simpleIcon('samsung') },
  { name: 'Tesla', src: simpleIcon('tesla') },
  { name: 'Coca-Cola', src: simpleIcon('cocacola') },
  { name: 'Airbnb', src: simpleIcon('airbnb') },
  { name: 'Uber', src: simpleIcon('uber') },
  { name: 'PayPal', src: simpleIcon('paypal') },
]

// Two rows, both moving right to left. Different speeds and start
// positions keep them from looking mechanically in sync.
const HALF = Math.ceil(LOGOS.length / 2)
const MARQUEE_ROWS = [
  { logos: LOGOS.slice(0, HALF), seconds: 40, startAt: 0 },
  { logos: LOGOS.slice(HALF), seconds: 52, startAt: 0.5 },
]

// Fades logos in/out at the card edges
const EDGE_MASK =
  '[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]'

const LogoItem = ({ name, src, decorative = false }) => (
  <li className="flex h-14 w-[120px] shrink-0 items-center justify-center px-5 sm:h-16 sm:w-[150px] sm:px-6 md:h-[72px] md:w-[180px] md:px-8">
    <img
      src={src}
      alt={decorative ? '' : name}
      draggable={false}
      // If a logo fails to load, hide its slot instead of showing a broken icon
      onError={(e) => {
        e.currentTarget.parentElement.style.display = 'none'
      }}
      className="h-7 w-full object-contain opacity-60 transition duration-300 ease-out hover:scale-110 hover:opacity-100 sm:h-8 md:h-9"
    />
  </li>
)

// One seamless row: the logo set is rendered twice and the track slides
// left by exactly one set (-50%), then wraps back to 0.
const LogoRow = ({ logos, seconds, startAt, playing }) => {
  const progress = useMotionValue(startAt)
  const x = useTransform(progress, [0, 1], ['0%', '-50%'])

  useAnimationFrame((_, delta) => {
    if (!playing) return
    // delta is capped so returning to a background tab does not cause a jump
    progress.set((progress.get() + Math.min(delta, 64) / (seconds * 1000)) % 1)
  })

  return (
    <motion.div style={{ x }} className="flex w-max will-change-transform">
      <ul className="flex shrink-0">
        {logos.map((logo) => (
          <LogoItem key={logo.name} {...logo} />
        ))}
      </ul>
      <ul className="flex shrink-0" aria-hidden="true">
        {logos.map((logo) => (
          <LogoItem key={logo.name} {...logo} decorative />
        ))}
      </ul>
    </motion.div>
  )
}

const LogoShowcase = ({ reduce }) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [hovered, setHovered] = useState(false)

  // Runs only while the card is on screen and not hovered
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
      className="relative mt-[44px] w-full max-w-[1080px] overflow-hidden rounded-[22px] bg-black py-8 sm:py-10 md:rounded-[30px] md:py-12"
    >
      {reduce ? (
        // Reduced motion: static, wrapped layout
        <ul className="flex flex-wrap items-center justify-center px-3 sm:px-6">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </ul>
      ) : (
        <div className={`flex flex-col gap-4 sm:gap-6 ${EDGE_MASK}`}>
          {MARQUEE_ROWS.map((row, i) => (
            <LogoRow key={i} {...row} playing={playing} />
          ))}
        </div>
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

        {/* Card: animated brand logo showcase */}
        <LogoShowcase reduce={reduce} />
      </div>
    </section>
  )
}

export default Ideas