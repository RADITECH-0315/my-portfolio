import React, { useEffect } from "react";

/**
 * Modal with robust scroll lock:
 * - Adds a <style id="rt-scroll-lock"> to <head> on open (html,body { overflow:hidden !important; })
 * - Removes that style tag on close (so scrolling is guaranteed to be restored)
 * - Also strips any leftover classes that might keep scroll disabled
 * - Closes on backdrop click and Escape
 */
export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;

    // 1) Inject a style tag to force-disable scroll on both html/body
    const styleEl = document.createElement("style");
    styleEl.id = "rt-scroll-lock";
    styleEl.textContent = `
      html, body { 
        overflow: hidden !important; 
        overscroll-behavior: contain;
        touch-action: none;
      }
    `;
    document.head.appendChild(styleEl);

    // 2) Close on Escape
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);

    // Cleanup on close/unmount
    return () => {
      document.removeEventListener("keydown", onKey);

      // Remove our style tag if it still exists
      const existing = document.getElementById("rt-scroll-lock");
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }

      // Hard reset: clear any stray overflow on html/body set by something else
      const html = document.documentElement;
      const body = document.body;

      html.style.overflow = "";
      body.style.overflow = "";

      // Some UI libs add classes to disable scroll; strip common ones
      html.classList.remove("overflow-hidden", "no-scroll", "modal-open");
      body.classList.remove("overflow-hidden", "no-scroll", "modal-open");
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose} // backdrop click closes
    >
      <div
        className="relative max-h-[90vh] w-[92vw] max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/90 px-5 py-4 backdrop-blur">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
