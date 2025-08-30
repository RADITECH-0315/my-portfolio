import React from "react";
import { Laptop, Cpu, Wrench } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Laptop className="h-6 w-6 text-blue-600" />,
    desc: [
      "Responsive Landing Pages",
      "Business Websites",
      "Admin Dashboards",
      "SEO Optimization",
    ],
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="h-6 w-6 text-blue-600" />,
    desc: [
      "Chatbots & Assistants",
      "Resume Matcher",
      "Document Q&A",
      "Process Automation",
    ],
  },
  {
    title: "Maintenance & Support",
    icon: <Wrench className="h-6 w-6 text-blue-600" />,
    desc: [
      "Bug Fixing",
      "Hosting & Deployment",
      "Performance Monitoring",
      "Ongoing Updates",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          We provide end-to-end solutions for your business technology needs.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-3">{s.icon}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-2 list-disc pl-4 text-sm text-muted-foreground">
                {s.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
