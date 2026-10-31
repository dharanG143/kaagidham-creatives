import React from 'react'

const Start = () => {
  return (
    <section className="w-full border-b-2 border-black bg-yellow">
      <div className="mx-auto flex w-full max-w-full flex-col items-start justify-between gap-8 px-5 py-[56px] sm:max-w-[90%] sm:px-10 md:flex-row md:items-center md:px-10 md:py-[62px] lg:px-[138px] lg:pr-[137px] 2xl:max-w-[1351px]">
        {/* Left content */}
        <div className="max-w-[520px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block h-[5px] w-[26px] rounded-full bg-black" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
              Start Here
            </span>
          </div>

          {/* Heading + price */}
          <h2 className="mt-[6px] flex flex-wrap items-baseline gap-x-3 text-black">
            <span className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] min-[400px]:text-[40px] sm:text-[48px] md:text-[52px]">
              Clarity Session
            </span>
            <span className="text-[20px] font-extrabold leading-none min-[400px]:text-[24px] sm:text-[28px]">
              ₹7,500
            </span>
          </h2>

          {/* Description */}
          <p className="mt-[6px] text-[15px] font-medium leading-[24px] text-black sm:text-[16px]">
            A focused session to define your idea, audience and creative
            direction before any design begins.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex h-[56px] max-w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0D0D0D] px-5 text-[15px] font-bold text-white min-[400px]:px-[30px]"
        >
          Book a Clarity Session →
        </a>
      </div>
    </section>
  )
}

export default Start