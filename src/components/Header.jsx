import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// Put your logo at /public/logo.png (or change this path)
const LOGO_SRC = "/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  // Close the menu when the screen becomes desktop-sized
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close the menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#3836360a] bg-cream">
      <div className="mx-auto flex w-full h-16 max-w-5xl flex-nowrap items-center justify-between gap-4 px-5 md:px-6 md:py-4 xl:px-0">
        {/* Logo */}
        <a
          href="#top"
          className="shrink-0"
          aria-label="Kaagidham Creatives home"
        >
          <img
            src={LOGO_SRC}
            alt="Kaagidham Creatives"
            className="h-12 w-auto object-contain md:h-14"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden shrink-0 items-center gap-4 md:flex lg:gap-6">
          <ul className="flex shrink-0 flex-nowrap items-center gap-4 lg:gap-6">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative text-[14px] font-medium leading-[21px] tracking-wide text-dark transition-opacity hover:opacity-60 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-yellow after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-full border-2 border-black bg-yellow px-5 py-3 text-[15px] font-semibold leading-[22.5px] text-dark shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none lg:px-7"
          >
            Start a project
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 bg-transparent transition-colors md:hidden ${
            open ? "border-[#D9A21B] text-[#8a6a10]" : "border-black text-black"
          }`}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 8h14M5 12h14M5 16h14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <ul className="px-5">
            {links.map((l) => (
              <li key={l.label} className="border-b border-black/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium text-[#1a1a1a]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-5 pb-6 pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full border-2 border-black bg-yellow py-4 text-center text-lg font-semibold text-black shadow-[4px_4px_0_0_#000]"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;