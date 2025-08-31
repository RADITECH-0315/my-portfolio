import React from "react";
import Modal from "./Modal";
import { projects } from "./Portfolio";

export default function ProjectPreviews({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Project Previews">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const liveLink =
            p.live && p.live !== "#" ? p.live : null;
          const repoLink =
            p.repo && p.repo !== "#" ? p.repo : null;

          return (
            <div
              key={p.slug || p.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border bg-gray-50 px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-4 flex gap-3">
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Live Demo
                    </a>
                  )}
                  {repoLink && (
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
