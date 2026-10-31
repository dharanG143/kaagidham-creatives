import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  EASE,
  VIEWPORT,
  stagger,
  fadeUp,
  lineGrow,
  serviceCard,
  listItem,
} from '../lib/motion'

const services = [
  {
    number: '01',
    title: 'Brand Identity Systems',
    description:
      'Distinctive identities that give businesses a strong, recognisable and consistent visual presence.',
    points: [
      'Logo design & identity direction',
      'Typography & colour systems',
      'Brand guidelines',
      'Visual language development',
    ],
  },
  {
    number: '02',
    title: 'Visual Communication Design',
    description:
      'Information and ideas turned into clear, engaging communication for digital and physical spaces.',
    points: [
      'Posters & marketing creatives',
      'Print & digital communication',
      'Editorial & Publication Design',
      'Infographics & Presentation Design',
    ],
  },
  {
    number: '03',
    title: 'Motion & Visual Storytelling',
    description:
      'Ideas brought to life through purposeful motion and stories that hold attention.',
    points: [
      'Motion graphics',
      'Social media animations',
      'Visual storytelling',
      'Concept-driven creative content',
    ],
  },
  {
    number: '04',
    title: 'Strategic Creative Direction',
    description:
      'We define how a business should look, sound and communicate before execution begins.',
    points: [
      'Brand positioning',
      'Creative direction',
      'Message architecture',
      'Campaign strategy & Planning',
    ],
  },
]

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

const ClaritySession = () => {
  const reduce = useReducedMotion()

  return (
    <section id="services" className="w-full scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-[1009px] px-5 pb-12 pt-2 sm:px-5 lg:px-5">
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
              className="block h-[4px] w-[24px] origin-left bg-yellow"
            />
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-black"
            >
              What We Do
            </motion.span>
          </div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-[14px] text-[26px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black min-[400px]:text-[34px] sm:text-[42px] md:text-[48px]"
          >
            Four services.{' '}
            <motion.span
              variants={reduce ? highlightStatic : highlightSweep}
              className="inline-block px-[6px]"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)',
                backgroundRepeat: 'no-repeat',
              }}
            >
              One clear direction.
            </motion.span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="mt-[18px] max-w-[560px] text-[16px] font-normal leading-[28px] text-[#555555] sm:text-[18px]"
          >
            From the first strategic thought to the final creative asset, our work
            combines business understanding with thoughtful design.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="mt-[48px] grid grid-cols-1 gap-[19px] md:grid-cols-2">
          {services.map(({ number, title, description, points }, i) => (
            <motion.div
              key={number}
              variants={serviceCard}
              custom={(i % 2) * 0.12}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
              className="rounded-[24px] border border-black bg-white px-5 pb-[24px] pt-[26px] sm:px-[28px]"
            >
              <p className="text-[34px] font-extrabold leading-[1.1] text-yellow">
                {number}
              </p>

              <h3 className="mt-[18px] text-[18px] font-extrabold leading-[1.3] text-black">
                {title}
              </h3>

              <p className="mt-[12px] text-[14px] font-normal leading-[24px] text-[#666666] sm:text-[15px]">
                {description}
              </p>

              <div className="mt-[14px] border-t border-[#EADFC8]" />

              <ul className="mt-[14px] flex flex-col gap-[10px]">
                {points.map((point) => (
                  <motion.li
                    key={point}
                    variants={listItem}
                    className="flex items-center gap-[12px]"
                  >
                    <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-yellow text-[11px] font-bold leading-none text-black">
                      ✓
                    </span>
                    <span className="text-[14px] font-medium leading-[20px] text-black sm:text-[15px]">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClaritySession