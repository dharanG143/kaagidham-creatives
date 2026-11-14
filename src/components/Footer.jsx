import React from "react";
import { motion } from "framer-motion";
import { EASE, VIEWPORT, stagger, fadeUp } from "../lib/motion";
import logo from '../assets/kc-logo.png'

const links = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// Nav rises in as one unit, then its links stagger in
const navReveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, staggerChildren: 0.06 },
  },
};

// Small travel for text links (fadeUp's 24px is too much here)
const linkItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// Created once, not on every render
const footerStagger = stagger(0.1);

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-[#1a1a1a] bg-[#0A0A0A]">
      <motion.div
        variants={footerStagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-[1348px] flex-col items-center px-5 pb-[40px] pt-[54px] text-center"
      >
        {/* Logo */}
        <motion.div
          variants={fadeUp}
          className="flex h-[70px] w-[185px] max-w-full items-center justify-center rounded-[14px] bg-white px-[12px] py-[6px]"
        >
          <img
            src={logo}
            alt="Kaagidham Creatives"
            className="h-full w-full object-contain "
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-[22px] text-[15px] font-semibold leading-[28px] text-white sm:text-[17px]"
        >
          Creative Studio &amp; Strategic Design Consultancy
        </motion.p>

        {/* Navigation */}
        <motion.nav
          variants={navReveal}
          className="mt-[24px] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-[22px]"
        >
          {links.map(({ label, href }) => (
            <motion.a
              key={label}
              variants={linkItem}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              href={href}
              className="relative py-2 text-[14px] font-semibold leading-[22px] text-white transition-opacity hover:opacity-80 after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-yellow after:transition-all after:duration-300 hover:after:w-full sm:text-[15px] lg:py-0 lg:after:-bottom-1"
            >
              {label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Copyright */}
        <motion.p
          variants={fadeUp}
          className="mt-[25px] text-[12px] font-normal leading-[20px] text-[#8A8A8A] sm:text-[13px]"
        >
          © 2026 Kaagidham Creatives Private Limited. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;