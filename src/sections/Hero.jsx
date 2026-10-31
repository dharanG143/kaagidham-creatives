function Tag({ children, className = "" }) {
  return (
    <span
      className={`absolute z-20 rounded-full bg-[#0d0d0d] px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white sm:px-4 sm:py-2 sm:text-xs ${className}`}
    >
      {children}
    </span>
  );
}

function Bar({ className = "" }) {
  return <div className={`h-2 rounded-full bg-beige ${className}`} />;
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[1/0.95] w-full max-w-[300px] sm:max-w-[460px] lg:max-w-[520px]">
      {/* Yellow circle */}
      <div className="absolute right-0 top-[4%] aspect-square w-[50%] rounded-full bg-gradient-to-b from-[#FFC20E] to-[#F5A300]" />

      {/* Small yellow dots */}
      <div className="absolute left-[11%] top-[9%] z-10 h-[7%] w-[7%] rounded-full bg-yellow" />
      <div className="absolute bottom-[14%] right-[15%] z-10 h-[6%] w-[6%] rounded-full bg-yellow" />

      {/* Tags */}
      <Tag className="left-[4%] top-[5%] -rotate-3">BRAND</Tag>
      <Tag className="right-[10%] top-[66%] -rotate-3">MOTION</Tag>
      <Tag className="bottom-[10%] left-[0%] -rotate-3">STRATEGY</Tag>

      {/* Card 1: Brand identity */}
      <div className="absolute left-2 top-[22%] z-[1] h-[40%] w-[48%] -rotate-[6deg] rounded-2xl border-[3px] border-black bg-white p-[5%] shadow-[5px_5px_0_0_#000]">
        <div className="flex gap-1.5 sm:gap-2.5">
          <span className="h-4 w-4 rounded-full border-2 border-black bg-yellow sm:h-7 sm:w-7" />
          <span className="h-4 w-4 rounded-full border-2 border-black bg-[#F5A300] sm:h-7 sm:w-7" />
          <span className="h-4 w-4 rounded-full border-2 border-black bg-black sm:h-7 sm:w-7" />
          <span className="h-4 w-4 rounded-full border-2 border-black bg-white sm:h-7 sm:w-7" />
        </div>
        <p className="mt-2 text-[7px] font-semibold tracking-[0.12em] text-black sm:mt-4 sm:text-[10px]">
          BRAND IDENTITY
        </p>
        <Bar className="mt-2 w-full sm:mt-3" />
        <Bar className="mt-1.5 w-2/3 sm:mt-2" />
      </div>

      {/* Card 2: Aa */}
      <div className="absolute right-[3%] top-[10%] z-[2] h-[40%] w-[48%] rotate-[5deg] rounded-2xl border-[3px] border-black bg-white p-[5%] shadow-[5px_5px_0_0_#000]">
        <p className="text-xl font-black leading-none sm:text-4xl">Aa</p>
        <Bar className="mt-2 w-[85%] sm:mt-3" />
        <p className="mt-2 text-[7px] font-semibold tracking-[0.1em] sm:mt-5 sm:text-[10px]">
          VISUAL COMMUNICATION
        </p>
      </div>

      {/* Card 3: Ideas on paper */}
      <div className="absolute bottom-[7%] top-[45%] left-[8%] z-[3] h-[40%] w-[66%] -rotate-[2deg] rounded-2xl border-[3px] border-black bg-white p-[6%] shadow-[5px_5px_0_0_#000]">
        <p className="mt-[8%] inline-block border-b-2 border-dashed border-black pb-1 text-[11px] font-black leading-tight sm:text-xl">
          Ideas on paper.
        </p>
        <div className="mt-2 sm:mt-3">
          <span className="inline-block -rotate-2 rounded-lg border-2 border-black bg-yellow px-2 py-1 text-[9px] font-bold shadow-[2px_2px_0_0_#000] sm:px-3 sm:py-1.5 sm:text-sm">
            Impact in reality.
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-8 md:pt-12 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-16">
        {/* Left: content */}
        <div className="min-w-0">
          <span className="inline-block rounded-full border-2 border-black  px-4 py-2 text-[10px] font-semibold leading-[16.5px] tracking-[0.12em] text-dark sm:text-[11px]">
            {" "}
            CREATIVE STUDIO &amp; STRATEGIC DESIGN CONSULTANCY
          </span>

          <h1 className="mt-4 text-[44px] font-extrabold leading-[1.2] tracking-tight text-dark min-[400px]:text-[52px] sm:text-[60px] md:text-[70px] md:leading-[90.72px]">
            Think clearly. Create with
            <span className="inline-block bg-[linear-gradient(transparent_58%,var(--color-yellow)_58%,var(--color-yellow)_94%,transparent_94%)] px-1 sm:px-2">
              purpose.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a4540] sm:text-lg">
            We help businesses and organisations turn ideas into meaningful
            creative work through brand identity, visual communication, motion,
            and creative direction.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full border-2 border-black bg-yellow px-7 py-3.5 text-center text-[15px] font-semibold text-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000]"
            >
              Start a project
            </a>
            <a
              href="#approach"
              className="rounded-full border-2 border-black bg-white px-7 py-3.5 text-center text-[15px] font-semibold text-black transition-colors hover:bg-[#FFF3C4]"
            >
              Explore Paper Thinking
            </a>
          </div>
        </div>

        {/* Right: visual */}
        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;