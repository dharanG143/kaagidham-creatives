import React from 'react'

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

const ClaritySession = () => {
  return (
    <section id="services" className="w-full scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-[1009px] px-5 pb-12 pt-2 sm:px-5 lg:px-5">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block h-[4px] w-[24px] bg-yellow" />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-black">
            What We Do
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-[14px] text-[26px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black min-[400px]:text-[34px] sm:text-[42px] md:text-[48px]">
          Four services.{' '}
          <span
            className="inline-block px-[6px]"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)',
            }}
          >
            One clear direction.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-[18px] max-w-[560px] text-[16px] font-normal leading-[28px] text-[#555555] sm:text-[18px]">
          From the first strategic thought to the final creative asset, our work
          combines business understanding with thoughtful design.
        </p>

        {/* Cards */}
        <div className="mt-[48px] grid grid-cols-1 gap-[19px] md:grid-cols-2">
          {services.map(({ number, title, description, points }) => (
            <div
              key={number}
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
                  <li key={point} className="flex items-center gap-[12px]">
                    <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-yellow text-[11px] font-bold leading-none text-black">
                      ✓
                    </span>
                    <span className="text-[14px] font-medium leading-[20px] text-black sm:text-[15px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClaritySession