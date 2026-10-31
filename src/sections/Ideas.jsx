import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE, VIEWPORT, stagger, fadeUp, lineGrow, cardReveal } from '../lib/motion'
import piza from '../assets/piza.jpg'

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

// Image: slow zoom on card hover (clipped by the card's overflow-hidden)
const imageZoom = {
  hidden: { scale: 1 },
  show: { scale: 1, transition: { duration: 0.6, ease: EASE } },
  hover: { scale: 1.05, transition: { duration: 0.6, ease: EASE } },
}

// Badge fades in just after the card lands
const badgeIn = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: 0.4 },
  },
}

// Arrow button fades in, then nudges up-right on card hover
const arrowIn = {
  hidden: { opacity: 0, scale: 0.7, x: 0, y: 0 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.45, ease: EASE, delay: 0.5 },
  },
  hover: {
    opacity: 1,
    scale: 1,
    x: 2,
    y: -2,
    transition: { duration: 0.25, ease: EASE },
  },
}

// Caption rises into place, slightly after the badge
const captionIn = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.45 },
  },
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

        {/* Card */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={VIEWPORT}
          className="relative mt-[44px] aspect-[4/3] w-full max-w-[1080px] overflow-hidden rounded-[22px] bg-black sm:aspect-[3/2] md:aspect-[1080/690] md:rounded-[30px]"
        >
          <motion.img
            variants={imageZoom}
            src={piza}
            alt="Pizza Story brand identity, packaging and street campaign"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Bottom gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/80 to-transparent" />

          {/* Badge */}
          <motion.span
            variants={badgeIn}
            className="absolute left-4 top-4 inline-flex h-[24px] items-center rounded-full bg-yellow px-3 text-[10px] font-extrabold uppercase tracking-[0.06em] text-black sm:left-[30px] sm:top-[36px] sm:px-[12px] sm:text-[12px]"
          >
            Brand Identity &amp; OOH
          </motion.span>

          {/* Arrow button */}
          <motion.span
            variants={arrowIn}
            className="absolute right-4 top-4 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-[12px] font-bold leading-none text-black sm:right-[34px] sm:top-[30px] sm:h-[36px] sm:w-[36px] sm:text-[14px]"
          >
            ↗
          </motion.span>

          {/* Caption */}
          <motion.div
            variants={captionIn}
            className="absolute inset-x-0 bottom-0 px-4 pb-4 sm:px-[30px] sm:pb-[34px]"
          >
            <h3 className="text-[20px] font-bold leading-tight text-white sm:text-[26px] md:text-[28px]">
              Pizza Story
            </h3>
            <p className="mt-2 text-[12px] font-medium leading-snug text-white/90 sm:mt-3 sm:text-[14px] md:text-[15px]">
              Comprehensive Visual Identity, Packaging &amp; Chennai Street
              Campaign
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ideas