import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { revealUp, premiumEasing, durations } from "../utils/motionConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={revealUp}
      className={`sticky top-0 z-50 backdrop-blur transition-all duration-500 ${
        scrolled ? "border-b border-border/60 bg-white/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-[90vw] max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <a href="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-gray-900">RADI</span>{" "}
          <span className="text-blue-600">TECH</span>
        </a>
        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="relative rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: durations.hover, ease: premiumEasing }}
            >
              {l.label}
              <motion.span
                className="absolute bottom-1 left-3 right-3 h-0.5 bg-blue-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: premiumEasing }}
              />
            </motion.a>
          ))}
          <motion.a
            href="/contact"
            className="ml-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
            whileHover={{
              y: -2,
              scale: 1.02,
              boxShadow: "0 8px 25px -5px rgba(37, 99, 235, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: durations.hover, ease: premiumEasing }}
          >
            Get a Quote
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
