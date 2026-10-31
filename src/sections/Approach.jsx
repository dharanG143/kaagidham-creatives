import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE, VIEWPORT, stagger, fadeUp, lineGrow } from '../lib/motion'

const items = [
  'Strategy before visual execution',
  'Purpose-driven creative thinking',
  'Attention to detail at every stage',
  'Creative solutions built around your goals',
]

// Created once, not on every render
const headerStagger = stagger(0.1)
const gridStagger = stagger(0.12)

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

// Check badge pops in just after its card
const badgePop = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 },
  },
}

const Approach = () => {
  const reduce = useReducedMotion()

  return (
    <section id="approach" className="w-full  bg-cream">
      <div className="mx-auto w-full max-w-full px-5 pb-6 pt-2 sm:max-w-[78%] sm:px-[39px] 2xl:max-w-[1155px]">
        {/* Heading block: eyebrow + heading + paragraph */}
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
              Why Kaagidham
            </motion.span>
          </div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-[28px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black min-[400px]:text-[34px] sm:text-[40px] md:text-[54px]"
          >
            Creative work{' '}
            <motion.span
              variants={reduce ? highlightStatic : highlightSweep}
              className="inline-block px-[6px]"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)',
                backgroundRepeat: 'no-repeat',
              }}
            >
              with a reason.
            </motion.span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[640px] text-[17px] font-normal leading-[32px] text-[#555555] md:text-[20px]"
          >
            Choosing a creative partner is about finding someone who understands
            your business, your audience, and the role creativity needs to play in
            your goals.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-[44px] grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {items.map((text) => (
            <motion.div
              key={text}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.25, ease: EASE } }}
              className="flex min-h-[75px] items-center gap-4 rounded-[16px] border-2 border-black bg-white px-[24px] py-3"
            >
              <motion.span
                variants={badgePop}
                className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-yellow text-[15px] font-bold leading-none text-black"
              >
                ✓
              </motion.span>
              <span className="text-[15px] font-bold leading-tight text-black md:text-[16px]">
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Approach