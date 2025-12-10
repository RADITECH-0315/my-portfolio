import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code, Zap } from "lucide-react";
import {
  revealUp,
  staggerContainer,
  staggerContainerHorizontal,
  hoverLift,
  premiumEasing,
  durations,
} from "../utils/motionConfig";

const steps = [
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "Discover",
    desc: "We start by understanding your goals, audience, and technical requirements through collaborative discussions.",
  },
  {
    icon: <Palette className="h-6 w-6 text-blue-600" />,
    title: "Design",
    desc: "Our team crafts intuitive interfaces and system architectures that align with your brand and user needs.",
  },
  {
    icon: <Code className="h-6 w-6 text-blue-600" />,
    title: "Build",
    desc: "We develop using modern frameworks and best practices, ensuring clean, maintainable, and scalable code.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "Optimize",
    desc: "Continuous testing, performance tuning, and iterative improvements to deliver exceptional results.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={revealUp} className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our streamlined process ensures transparency and quality delivery
              at every step.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={revealUp}
                whileHover={hoverLift}
                className="group relative rounded-2xl border bg-white p-6 shadow-sm transition-all"
              >
                {/* Connecting Line (Desktop) - distinct visual element */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 -right-4 hidden h-0.5 w-8 bg-gray-100 lg:block" />
                )}

                <div className="flex items-center gap-4 mb-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100/50 text-sm font-bold text-blue-600 ring-4 ring-white">
                    {index + 1}
                  </span>
                  <motion.div
                    className="rounded-lg bg-blue-50 p-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4, ease: premiumEasing }}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
