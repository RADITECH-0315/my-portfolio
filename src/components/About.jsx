import React from "react";
import { motion } from "framer-motion";
import {
  revealUp,
  revealDepth,
  staggerContainer,
  hoverLift,
  premiumEasing,
  durations,
} from "../utils/motionConfig";

export default function AboutSection() {
  const bullets = [
    "• Clean & Scalable Code",
    "• Fast Project Delivery",
    "• Applied AI Expertise",
    "• Ongoing Support & Maintenance",
  ];

  // Mini proof-point cards
  const proofPoints = [
    { metric: "100%", label: "Commitment" },
    { metric: "24/7", label: "Support" },
    { metric: "3+", label: "Years" },
    { metric: "AI", label: "Powered" },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center"
        >
          {/* Left Column: Narrative Text */}
          <div className="space-y-8">
            <motion.div variants={revealUp}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About RADI TECH
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-blue-600" />
            </motion.div>

            <motion.div
              variants={revealUp}
              className="prose prose-lg text-muted-foreground"
            >
              <p>
                RADI TECH is a technology services company based in India,
                focused on delivering web development and AI solutions for
                startups and growing businesses.
              </p>
              <p>
                Our mission is simple: to make professional, enterprise-grade
                digital solutions accessible and impactful. We believe in code
                that works, designs that scale, and partnerships that last.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4"
            >
              {bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  variants={revealUp}
                  className="flex items-center text-sm font-medium text-gray-700"
                >
                  <span className="mr-2 text-blue-600">✓</span>
                  {bullet.replace("• ", "")}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Mini Proof-Point Cards with Subtle Background */}
          <motion.div variants={revealUp} className="relative hidden lg:block">
            {/* Subtle dotted background pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Grid of mini cards */}
            <motion.div
              variants={staggerContainer}
              className="relative grid grid-cols-2 gap-4"
            >
              {proofPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={revealDepth}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 12px 24px -8px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3, ease: premiumEasing },
                  }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    },
                  }}
                  className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-blue-600">
                      {point.metric}
                    </span>
                    <span className="mt-2 block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {point.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
