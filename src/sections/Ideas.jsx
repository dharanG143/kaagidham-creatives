import React from 'react'
// import pizzaStoryCollage from '../assets/pizza-story-collage.jpg'

const Ideas = () => {
  return (
    <section id="work" className="w-full scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-full px-5 pb-10 pt-4 sm:max-w-[75%] sm:px-[21px] 2xl:max-w-[1120px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block h-[4px] w-[26px] bg-yellow" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
            Selected Work
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-[38px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black sm:text-[46px] md:text-[54px]">
          Ideas,{' '}
          <span
            className="inline-block px-[6px]"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)',
            }}
          >
            in reality.
          </span>
        </h2>

        {/* Card */}
        <div className="relative mt-[44px] aspect-[4/3] w-full max-w-[1080px] overflow-hidden rounded-[22px] bg-black sm:aspect-[3/2] md:aspect-[1080/690] md:rounded-[30px]">
          <img
            // src={pizzaStoryCollage}
            alt="Pizza Story brand identity, packaging and street campaign"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Bottom gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/80 to-transparent" />

          {/* Badge */}
          <span className="absolute left-4 top-4 inline-flex h-[24px] items-center rounded-full bg-yellow px-3 text-[10px] font-extrabold uppercase tracking-[0.06em] text-black sm:left-[30px] sm:top-[36px] sm:px-[12px] sm:text-[12px]">
            Brand Identity &amp; OOH
          </span>

          {/* Arrow button */}
          <span className="absolute right-4 top-4 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-[12px] font-bold leading-none text-black sm:right-[34px] sm:top-[30px] sm:h-[36px] sm:w-[36px] sm:text-[14px]">
            ↗
          </span>

          {/* Caption */}
          <div className="absolute inset-x-0 bottom-0 px-4 pb-4 sm:px-[30px] sm:pb-[34px]">
            <h3 className="text-[20px] font-bold leading-tight text-white sm:text-[26px] md:text-[28px]">
              Pizza Story
            </h3>
            <p className="mt-2 text-[12px] font-medium leading-snug text-white/90 sm:mt-3 sm:text-[14px] md:text-[15px]">
              Comprehensive Visual Identity, Packaging &amp; Chennai Street
              Campaign
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ideas