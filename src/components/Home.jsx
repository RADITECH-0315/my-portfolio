import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import {
  revealUp,
  staggerContainerSlow,
  hoverLift,
  tapCompress,
  premiumEasing,
  durations,
} from "../utils/motionConfig";

export default function HomeSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background decoration - Motion Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge - Fast Entry */}
          <motion.div variants={revealUp} className="mb-8 flex justify-center">
            <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 ring-1 ring-blue-600/20">
              Available for New Projects
            </span>
          </motion.div>

          {/* Headline - Slow & Heavy Entry */}
          <motion.h1
            variants={revealUp}
            className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h1>

          {/* Description - Medium Entry */}
          <motion.p
            variants={revealUp}
            className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 sm:text-xl md:text-2xl leading-relaxed"
          >
            We transform complex problems into elegant, high-performance web
            solutions. Specializing in modern stacks and AI integration.
          </motion.p>

          {/* CTAs - Delayed & Tactile */}
          <motion.div
            variants={revealUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <motion.div whileHover={hoverLift} whileTap={tapCompress}>
              <Link
                to="/contact"
                className="group flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={hoverLift} whileTap={tapCompress}>
              <Link
                to="/portfolio"
                className="flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-gray-50"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
