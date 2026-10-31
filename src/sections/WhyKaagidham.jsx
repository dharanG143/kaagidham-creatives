import React from 'react'

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
  WebkitBoxDecorationBreak: 'clone',
  boxDecorationBreak: 'clone',
}

const WhyKaagidham = () => {
  return (
    <section id="approach" className="w-full bg-[#0A0A0A]">
      <div className="mx-auto w-full max-w-[1343px] px-5 pb-10 pt-[70px] sm:px-10 lg:px-10 xl:px-[190px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block h-[4px] w-[24px] shrink-0 bg-yellow" />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            Paper Thinking · Our Approach
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-[14px] max-w-[960px] text-[34px] font-extrabold leading-[1.1] tracking-[-0.01em] text-white sm:text-[44px] lg:text-[48px] lg:leading-[50px]">
          Creativity becomes powerful{' '}
          <span style={highlight} className="px-[2px]">
            when it has direction.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-[16px] max-w-[560px] text-[16px] font-normal leading-[28px] text-[#CFCFCF] sm:text-[18px]">
          We don’t create visuals simply because they look good. We first
          understand what needs to be communicated, why it matters, and who
          needs to understand it.
        </p>

        {/* Steps */}
        <div className="mt-[40px] grid grid-cols-1 gap-x-[19px] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, text }) => (
            <div key={number} className="border-t-[3px] border-yellow pt-[14px]">
              <p className="text-[48px] font-extrabold leading-[1.1] text-yellow">
                {number}
              </p>
              <h3 className="mt-[14px] text-[18px] font-extrabold leading-[1.2] text-white">
                {title}
              </h3>
              <p className="mt-[10px] max-w-[230px] text-[14px] font-normal leading-[20px] text-[#CFCFCF]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyKaagidham