import React from 'react'

const items = [
  'Strategy before visual execution',
  'Purpose-driven creative thinking',
  'Attention to detail at every stage',
  'Creative solutions built around your goals',
]

const Approach = () => {
  return (
    <section id="approach" className="w-full  bg-cream">
      <div className="mx-auto w-full max-w-full px-5 pb-6 pt-2 sm:max-w-[78%] sm:px-[39px] 2xl:max-w-[1155px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block h-[4px] w-[26px] bg-yellow" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
            Why Kaagidham
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-[28px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black min-[400px]:text-[34px] sm:text-[40px] md:text-[54px]">
          Creative work{' '}
          <span
            className="inline-block px-[6px]"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)',
            }}
          >
            with a reason.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-5 max-w-[640px] text-[17px] font-normal leading-[32px] text-[#555555] md:text-[20px]">
          Choosing a creative partner is about finding someone who understands
          your business, your audience, and the role creativity needs to play in
          your goals.
        </p>

        {/* Cards */}
        <div className="mt-[44px] grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((text) => (
            <div
              key={text}
              className="flex min-h-[75px] items-center gap-4 rounded-[16px] border-2 border-black bg-white px-[24px] py-3"
            >
              <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-yellow text-[15px] font-bold leading-none text-black">
                ✓
              </span>
              <span className="text-[15px] font-bold leading-tight text-black md:text-[16px]">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach