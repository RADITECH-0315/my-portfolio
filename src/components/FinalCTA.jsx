import React from "react";
import { motion } from "framer-motion";
import {
  revealUp,
  hoverLift,
  tapCompress,
  premiumEasing,
  durations,
} from "../utils/motionConfig";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto w-[90vw] max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={revealUp}
          className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-16 shadow-2xl shadow-blue-600/20 sm:px-16 sm:py-24 text-center"
        >
          {/* Abstract Background Shapes */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-400 blur-3xl opacity-50" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your next project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100 leading-relaxed opacity-90">
              Let's turn your vision into reality. Collaborative, professional,
              and efficient.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div whileHover={hoverLift} whileTap={tapCompress}>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-md transition-all hover:bg-blue-50"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
