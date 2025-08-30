import React, { useEffect, useState } from "react";

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
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
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
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
