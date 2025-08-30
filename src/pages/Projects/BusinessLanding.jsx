import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BusinessLandingCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-[90vw] max-w-[1000px] px-4 sm:px-6 py-16">
        <span className="text-xs text-muted-foreground">Case Study</span>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          Business Landing Page (Demo)
        </h1>
        <p className="mt-3 text-muted-foreground">
          A reusable landing page kit designed for small businesses. Built to be
          fast, SEO-ready, and modular so it can be adapted quickly for
          different industries.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border">
          <video
            controls
            className="w-full"
            src="/videos/biz-landing.mp4"
            poster="/projects/biz-landing-thumb.png"
          />
        </div>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Goals</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            <li>Deliver a clean, modern landing page template.</li>
            <li>Responsive design with strong SEO score.</li>
            <li>Working contact form for lead capture.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <p className="text-sm text-muted-foreground">
            React, Tailwind CSS, Formspree, Vercel/Netlify (deployment)
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/portfolio" className="rounded-xl border px-4 py-2 text-sm font-semibold">
            ← Back to Portfolio
          </a>
          <a
            href="https://your-vercel-demo-link.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/RADITECH-0315/business-landing-demo"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border px-4 py-2 text-sm font-semibold"
          >
            GitHub
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
