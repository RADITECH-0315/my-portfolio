import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight">Let’s Work Together</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ready to build something amazing? Contact us — we usually respond
            within <span className="font-medium">24 hours</span>.
          </p>

          <form
            className="mt-6 grid gap-4 sm:grid-cols-2"
            action="https://formspree.io/f/your_form_id"
            method="POST"
          >
            <input
              name="name"
              placeholder="Your name"
              required
              className="rounded-xl border border-border/60 p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded-xl border border-border/60 p-3"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your project"
              required
              className="rounded-xl border border-border/60 p-3 sm:col-span-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white sm:col-span-2"
            >
              Send Message
            </button>
          </form>

          <div className="mt-4 text-sm text-muted-foreground">
            Or email us directly:{" "}
            <a
              href="mailto:raditech0315@gmail.com"
              className="font-medium underline-offset-4 hover:underline"
            >
              raditech0315@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
