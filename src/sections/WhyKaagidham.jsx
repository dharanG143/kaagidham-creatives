import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  EASE,
  VIEWPORT,
  stagger,
  fadeUp,
  lineGrow,
  serviceCard,
} from '../lib/motion'

const steps = [
  {
    number: '01',
    title: 'Discover',
    text: 'We learn about your brand, audience and goals.',
  },
  {
    number: '02',
    title: 'Define',
    text: 'We set a clear message and creative direction.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'We turn ideas into meaningful visual designs.',
  },
  {
    number: '04',
    title: 'Deliver',
    text: 'We refine every detail before delivery.',
  },
]

const highlight = {
  backgroundImage:
    'linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)',
  backgroundRepeat: 'no-repeat',
  WebkitBoxDecorationBreak: 'clone',
  boxDecorationBreak: 'clone',
}

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

// Number, title and text inside a step follow their card (parent is serviceCard)
const stepText = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

const WhyKaagidham = () => {
  const reduce = useReducedMotion()

  return (
    <section id="approach" className="w-full bg-[#0A0A0A]">
      <div className="mx-auto w-full max-w-[1343px] px-5 pb-10 pt-[70px] sm:px-10 lg:px-10 xl:px-[190px]">
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
              className="block h-[4px] w-[24px] shrink-0 origin-left bg-yellow"
            />
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Paper Thinking · Our Approach
            </motion.span>
          </div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-[14px] max-w-[960px] text-[34px] font-extrabold leading-[1.1] tracking-[-0.01em] text-white sm:text-[44px] lg:text-[48px] lg:leading-[50px]"
          >
            Creativity becomes powerful{' '}
            <motion.span
              variants={reduce ? highlightStatic : highlightSweep}
              style={highlight}
              className="px-[2px]"
            >
              when it has direction.
            </motion.span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="mt-[16px] max-w-[560px] text-[16px] font-normal leading-[28px] text-[#CFCFCF] sm:text-[18px]"
          >
            We don’t create visuals simply because they look good. We first
            understand what needs to be communicated, why it matters, and who
            needs to understand it.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="mt-[40px] grid grid-cols-1 gap-x-[19px] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, text }, i) => (
            <motion.div
              key={number}
              variants={serviceCard}
              custom={i * 0.1}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
              className="border-t-[3px] border-yellow pt-[14px]"
            >
              <motion.p
                variants={stepText}
                className="text-[48px] font-extrabold leading-[1.1] text-yellow"
              >
                {number}
              </motion.p>
              <motion.h3
                variants={stepText}
                className="mt-[14px] text-[18px] font-extrabold leading-[1.2] text-white"
              >
                {title}
              </motion.h3>
              <motion.p
                variants={stepText}
                className="mt-[10px] max-w-[230px] text-[14px] font-normal leading-[20px] text-[#CFCFCF]"
              >
                {text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyKaagidham