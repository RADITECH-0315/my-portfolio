import React from "react";

export const projects = [
    {
    slug: "business-landing-page",
    title: "Business Landing Page (Demo)",
    desc: "A clean, responsive landing page kit for small businesses. Includes Hero, Services, About, Testimonials, Pricing, and Contact sections with SEO optimization.",
    img: "/projects/biz-landing-thumb.png",
    video: "/videos/biz-landing.mp4",
    tags: ["React", "Tailwind", "Formspree", "SEO"],
    live: "https://your-vercel-demo-link.vercel.app",   // replace with deployed link
    repo: "https://github.com/RADITECH-0315/business-landing-demo", // replace with repo link
    caseStudy: "/projects/business-landing",
  },
  {
    title: "Admin Dashboard (Demo)",
    desc: "Analytics dashboard with login, charts, and CRUD features. Built as a demo project to show internal tools.",
    img: "/demo-dashboard.png",    // put a screenshot at public/demo-dashboard.png
    tags: ["React", "Node", "Postgres"],
  },
  {
    title: "AI Resume Matcher (Prototype)",
    desc: "Upload a resume and job description → get skill match score and a tailored cover letter. Prototype demo.",
    img: "/demo-ai.png",           // put a screenshot at public/demo-ai.png
    tags: ["Python", "NLP", "Embeddings"],
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Here are some of our demo projects to showcase what we can deliver.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-gray-50 px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* Optional CTA row
                <div className="mt-4 flex gap-3 text-sm font-semibold">
                  <a href="#" className="underline-offset-4 hover:underline">Live Demo</a>
                  <a href="https://github.com/RADITECH-0315" target="_blank" className="underline-offset-4 hover:underline">GitHub</a>
                </div>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
