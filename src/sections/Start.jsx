import React from 'react'
import { motion } from 'framer-motion'
import { EASE, VIEWPORT, stagger, fadeUp, lineGrow, buttonMotion } from '../lib/motion'

// Created once, not on every render
const bannerStagger = stagger(0.1) // text block -> CTA
const textStagger = stagger(0.08) // eyebrow -> heading -> description

// Price pops in just after the heading lands
const pricePop = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.25 },
  },
}

const Start = () => {
  return (
    <section className="w-full border-b-2 border-black bg-yellow">
      <motion.div
        variants={bannerStagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-full flex-col items-start justify-between gap-8 px-5 py-[56px] sm:max-w-[90%] sm:px-10 md:flex-row md:items-center md:px-10 md:py-[62px] lg:px-[138px] lg:pr-[137px] 2xl:max-w-[1351px]"
      >
        {/* Left content */}
        <motion.div variants={textStagger} className="max-w-[520px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <motion.span
              variants={lineGrow}
              className="block h-[5px] w-[26px] origin-left rounded-full bg-black"
            />
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black"
            >
              Start Here
            </motion.span>
          </div>

          {/* Heading + price */}
          <motion.h2
            variants={fadeUp}
            className="mt-[6px] flex flex-wrap items-baseline gap-x-3 text-black"
          >
            <span className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] min-[400px]:text-[40px] sm:text-[48px] md:text-[52px]">
              Clarity Session
            </span>
            <motion.span
              variants={pricePop}
              className="origin-left text-[20px] font-extrabold leading-none min-[400px]:text-[24px] sm:text-[28px]"
            >
              ₹7,500
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-[6px] text-[15px] font-medium leading-[24px] text-black sm:text-[16px]"
          >
            A focused session to define your idea, audience and creative
            direction before any design begins.
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.a
          variants={fadeUp}
          custom={0.2}
          {...buttonMotion}
          href="#"
          className="inline-flex h-[56px] max-w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0D0D0D] px-5 text-[15px] font-bold text-white min-[400px]:px-[30px]"
        >
          Book a Clarity Session →
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Start