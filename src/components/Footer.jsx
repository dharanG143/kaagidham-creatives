import React from "react";
// import logo from '../assets/kaagidham-logo.png'

const links = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-[#1a1a1a] bg-[#0A0A0A]">
      <div className="mx-auto flex w-full max-w-[1348px] flex-col items-center px-5 pb-[40px] pt-[54px] text-center">
        {/* Logo */}
        <div className="flex h-[60px] w-[180px] max-w-full items-center justify-center rounded-[14px] bg-white px-[12px] py-[6px]">
          <img
            // src={logo}
            alt="Kaagidham Creatives"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="mt-[22px] text-[15px] font-semibold leading-[28px] text-white sm:text-[17px]">
          Creative Studio &amp; Strategic Design Consultancy
        </p>

        {/* Navigation */}
        <nav className="mt-[24px] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-[22px]">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative py-2 text-[14px] font-semibold leading-[22px] text-white transition-opacity hover:opacity-80 after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-yellow after:transition-all after:duration-300 hover:after:w-full sm:text-[15px] lg:py-0 lg:after:-bottom-1"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="mt-[25px] text-[12px] font-normal leading-[20px] text-[#8A8A8A] sm:text-[13px]">
  © 2026 Kaagidham Creatives Private Limited. All rights reserved. Developed by Dhamodharan B.
</p>
      </div>
    </footer>
  );
};

export default Footer;