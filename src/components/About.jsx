import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">About RADI TECH</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          RADI TECH is a technology services company based in India, focused on
          delivering web development and AI solutions for startups and growing
          businesses. Our mission is to make professional digital solutions
          accessible and impactful.
        </p>
        <ul className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
          <li>• Clean & Scalable Code</li>
          <li>• Fast Project Delivery</li>
          <li>• Applied AI Expertise</li>
          <li>• Ongoing Support & Maintenance</li>
        </ul>
      </div>
    </section>
  );
}
