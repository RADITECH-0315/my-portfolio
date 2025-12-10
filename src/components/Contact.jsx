import React from "react";
import { motion } from "framer-motion";
import {
  revealUp,
  staggerContainer,
  focusScale,
  tapCompress,
  hoverLift,
  premiumEasing,
  durations,
} from "../utils/motionConfig";

export default function ContactSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl"
        >
          <motion.div variants={revealUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to build something amazing? We usually respond within{" "}
              <span className="font-semibold text-blue-600">24 hours</span>.
            </p>
          </motion.div>

          <motion.div
            variants={revealUp}
            className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 p-8 sm:p-10"
          >
            <form
              action="https://formspree.io/f/your_form_id"
              method="POST"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <motion.input
                  whileFocus={focusScale}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <motion.input
                  whileFocus={focusScale}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <motion.textarea
                  whileFocus={focusScale}
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all resize-none"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <motion.button
                  type="submit"
                  whileHover={hoverLift}
                  whileTap={tapCompress}
                  className="w-full rounded-xl bg-blue-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700"
                >
                  Send Message
                </motion.button>
              </div>
            </form>

            <div className="mt-8 border-t border-gray-100 pt-6 text-center">
              <p className="text-sm text-gray-500">
                Prefer email?{" "}
                <a
                  href="mailto:raditech0315@gmail.com"
                  className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                >
                  raditech0315@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
