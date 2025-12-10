import React from "react";
import { motion } from "framer-motion";
import {
  revealUp,
  revealDepth,
  staggerContainer,
  hoverLift,
  premiumEasing,
  durations,
} from "../utils/motionConfig";

export const projects = [
  {
    slug: "business-landing",
    title: "Business Landing Page (Demo)",
    desc: "A clean, responsive landing page kit for small businesses. Includes Hero, Services, About, Testimonials, Pricing, and Contact sections with SEO optimization.",
    img: "/projects/biz-landing-thumb.png",
    tags: ["React", "Tailwind", "Formspree", "SEO"],
    live: "https://business-landing-pro.vercel.app/",
  },
  {
    slug: "admin-dashboard",
    title: "Retail Admin Dashboard (Demo)",
    desc: "Interactive analytics dashboard with login, charts, and CRUD features. Built as a demo project to show internal tools.",
    img: "/projects/dashboard-thumb.png",
    tags: ["React", "Node", "Postgres"],
    live: "https://retail-dashboard-mu.vercel.app/",
  },
  {
    slug: "ai-resume-matcher",
    title: "AI Resume Matcher (Prototype)",
    desc: "An AI-powered tool that analyzes resumes and job descriptions to calculate match scores, extract relevant skills, and generate tailored cover letters. Built for automated recruitment assistance.",
    img: "/projects/airesume2.png",
    tags: ["Python", "NLP", "Embeddings", "Flask", "OpenAI API"],
    live: "https://frontend-eight-tau-86.vercel.app/",
  },
  {
    slug: "rvm-rideway",
    title: "RVM Rideway (MVP Prototype)",
    desc: "A ride-sharing and micro-mobility platform with real-time ride booking, GPS tracking, driver-rider matching, and secure payments. Designed for scalable urban transportation solutions.",
    img: "/projects/rvmrideway.png",
    tags: ["React", "Node", "MongoDB", "Express", "Map APIs"],
    live: "https://rvm-rideway-mvp.vercel.app/",
  },
  {
    slug: "urban-crown",
    title: "Urban Crown - Fashion Styling",
    desc: "A premium fashion and styling website featuring Western style with Indian identity. Elegant design showcasing gallery, services, testimonials, and booking functionality for a luxury styling experience.",
    img: "/projects/urban-crown-thumb.png",
    tags: ["React", "Framer Motion", "Tailwind", "Premium UI"],
    live: "https://urban-crown-motion-main.vercel.app/",
  },
  {
    slug: "ai-insights-dashboard",
    title: "AI Business Insights Dashboard",
    desc: "An intelligent business analytics platform that uses AI to analyze uploaded business data (CSV/Excel) and provide actionable insights, predictions, and recommendations to help grow your business.",
    img: "/projects/ai-insights-thumb.png",
    tags: ["React", "AI/ML", "Data Analytics", "OpenAI", "Charts"],
    live: "https://aiinsightdashboard.vercel.app/",
  },
];

export default function PortfolioSection() {
  const openProject = (p) => {
    if (p?.live && p.live !== "#") {
      window.open(p.live, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={revealUp} className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Portfolio
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A selection of our recent work, demonstrating our capabilities in
              web development, dashboard interfaces, and AI integration.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:gap-12"
          >
            {projects.map((p) => {
              const isLive = p.live && p.live !== "#";
              return (
                <motion.div
                  key={p.title}
                  variants={revealDepth}
                  whileHover={isLive ? hoverLift : {}}
                  className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${
                    isLive ? "cursor-pointer" : "opacity-95"
                  }`}
                  onClick={() => openProject(p)}
                  role={isLive ? "button" : undefined}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100 sm:h-72">
                    {/* Overlay gradient that appears on hover for better text contrast/focus */}
                    <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

                    <motion.img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-[center_55%] transition-transform duration-700 will-change-transform"
                      whileHover={{ scale: 1.05 }} // Slow zoom
                    />

                    {/* Floating pill badge for "Live Demo" */}
                    {isLive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="absolute bottom-4 right-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
                          View Project
                        </span>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-4 flex-1 text-base text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
