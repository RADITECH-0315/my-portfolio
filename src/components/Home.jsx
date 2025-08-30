import React, { useState } from "react";
import Modal from "./Modal";
import { projects } from "./Portfolio";

function ProjectsPreview() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((p) => (
        <div key={p.title} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-border/60 bg-gray-50 px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomeSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto grid w-[90vw] max-w-[1400px] items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        {/* Left: pitch + CTAs */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
            Web & AI Engineering for Modern Businesses
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Smart Websites & AI Solutions for{" "}
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Startups and SMEs
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            RADI TECH builds modern, high-performance websites and integrates practical AI tools to help
            businesses grow faster.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/services" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              Explore Services
            </a>
            <a href="/contact" className="rounded-xl border border-border/60 px-4 py-2 text-sm font-semibold">
              Request a Free Quote
            </a>
          </div>
        </div>

        {/* Right: interactive stats */}
        <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setOpen(true)}
              className="rounded-2xl border p-4 text-left transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="View demo solutions"
            >
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-muted-foreground">Demo Solutions</div>
            </button>

            <a href="/contact" className="rounded-2xl border p-4 transition hover:shadow-sm" aria-label="Contact support">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </a>

            <a href="/services" className="rounded-2xl border p-4 transition hover:shadow-sm" aria-label="See SEO practices">
              <div className="text-2xl font-bold">100</div>
              <div className="text-sm text-muted-foreground">SEO Score Goal</div>
            </a>
          </div>
        </div>
      </div>

      {/* Modal with project previews */}
      <Modal open={open} onClose={() => setOpen(false)} title="Project Previews">
        <ProjectsPreview />
        <div className="mt-6 flex justify-end">
          <a href="/portfolio" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            View All Projects
          </a>
        </div>
      </Modal>
    </section>
  );
}
