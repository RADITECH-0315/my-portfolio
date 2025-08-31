import React from "react";
import { projects } from "./Portfolio"; // reuse the same data

export default function ProjectModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="relative max-h-[90vh] w-[90vw] max-w-5xl overflow-y-auto rounded-2xl bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black"
        >
          Close
        </button>

        <h2 className="mb-6 text-2xl font-bold">Project Previews</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const isLive = p.live && p.live !== "#";
            return (
              <div
                key={p.title}
                onClick={() => {
                  const target = isLive ? p.live : p.repo;
                  if (target) window.open(target, "_blank", "noopener,noreferrer");
                }}
                className={`cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    const target = isLive ? p.live : p.repo;
                    if (target) window.open(target, "_blank", "noopener,noreferrer");
                  }
                }}
                aria-label={`Open ${p.title}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border bg-gray-50 px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
