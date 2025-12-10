import React from "react";
import { motion } from "framer-motion";
import { Laptop, Cpu, Wrench } from "lucide-react";
import {
  revealUp,
  revealDepth,
  staggerContainer,
  hoverLift,
  premiumEasing,
  durations,
} from "../utils/motionConfig";

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Group */}
          <motion.div variants={revealUp} className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide end-to-end solutions for your business technology
              needs. From concept to deployment, we handle the complexity.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={revealDepth} // Scales in slightly for depth
                whileHover={hoverLift} // Physical lift on hover
                className="group relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-colors"
              >
                {/* Subtle highlight gradient on hover (optional enhancement) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {s.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>

                  <ul className="mt-6 space-y-3">
                    {s.desc.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500/50" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
