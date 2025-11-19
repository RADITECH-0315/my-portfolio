import React from "react";

export const projects = [
  {
    slug: "business-landing",
    title: "Business Landing Page (Demo)",
    desc: "A clean, responsive landing page kit for small businesses. Includes Hero, Services, About, Testimonials, Pricing, and Contact sections with SEO optimization.",
    img: "/projects/biz-landing-thumb.png",
    tags: ["React", "Tailwind", "Formspree", "SEO"],
    live: "https://business-landing-pro.vercel.app/", // live link
  },
 {
  slug: "admin-dashboard",
  title: "Retail Admin Dashboard (Demo)",
  desc: "Interactive analytics dashboard with login, charts, and CRUD features. Built as a demo project to show internal tools.",
  img: "/projects/dashboard-thumb.png",  // ✅ matches your file name
  tags: ["React", "Node", "Postgres"],
  live: "https://retail-dashboard-mu.vercel.app/", // ✅ deployed Vercel link
},

  {
  slug: "ai-resume-matcher",
  title: "AI Resume Matcher (Prototype)",
  desc: "An AI-powered tool that analyzes resumes and job descriptions to calculate match scores, extract relevant skills, and generate tailored cover letters. Built for automated recruitment assistance.",
  img: "/projects/airesume2.png", // 📌 Make sure the thumbnail image exists
  tags: ["Python", "NLP", "Embeddings", "Flask", "OpenAI API"],
  live: "https://frontend-eight-tau-86.vercel.app/", // 🔗 Replace with your deployed link
},

  {
  slug: "rvm-rideway",
  title: "RVM Rideway (MVP Prototype)",
  desc: "A ride-sharing and micro-mobility platform with real-time ride booking, GPS tracking, driver-rider matching, and secure payments. Designed for scalable urban transportation solutions.",
  img: "/projects/rvmrideway.png",  
  tags: ["React", "Node", "MongoDB", "Express", "Map APIs"],
  live: "https://rvm-rideway-mvp.vercel.app/",  // 
}

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
        <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Here are some of our demo projects to showcase what we can deliver.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const isLive = p.live && p.live !== "#";
            return (
              <div
                key={p.title}
                className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition ${
                  isLive ? "cursor-pointer hover:shadow-md" : "opacity-95"
                }`}
                onClick={() => openProject(p)}
                role={isLive ? "button" : undefined}
                tabIndex={isLive ? 0 : -1}
                onKeyDown={(e) => {
                  if (isLive && (e.key === "Enter" || e.key === " ")) openProject(p);
                }}
                aria-label={isLive ? `Open ${p.title} live demo` : p.title}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />

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

                  <div
                    className="pointer-events-auto mt-4 flex flex-wrap gap-3 text-sm font-semibold"
                    onClick={(e) => e.stopPropagation()} // prevent card click when pressing buttons
                  >
                    {isLive ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
                        aria-label={`Open live demo of ${p.title}`}
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span
                        className="rounded-xl bg-gray-200 px-3 py-1.5 text-gray-600"
                        title="Live link coming soon"
                      >
                        Live soon
                      </span>
                    )}

                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
