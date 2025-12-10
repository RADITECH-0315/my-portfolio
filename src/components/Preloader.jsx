import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { premiumEasing, durations } from "../utils/motionConfig";

export default function Preloader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState("entry"); // 'entry', 'reveal', 'exit'

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Slightly longer display time for premium feel
    const minDisplayTime = 3200;
    const startTime = Date.now();

    // Staged reveal sequence
    setTimeout(() => setPhase("reveal"), 1000);

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setPhase("exit");
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        }, 1200); // Allow efficient time for exit animation
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Container animation - Smooth dissolve
  const containerVariants = {
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.0,
        ease: premiumEasing,
      },
    },
  };

  // Text Reveal Animations
  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
      scale: 0.95,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1.4,
        delay: custom * 0.2, // Slower stagger
        ease: premiumEasing,
      },
    }),
    exit: (custom) => ({
      opacity: 0,
      y: -30,
      filter: "blur(10px)",
      scale: 1.05,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: premiumEasing,
      },
    }),
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          variants={containerVariants}
          initial="visible"
          animate={phase === "exit" ? "exit" : "visible"}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          style={{ pointerEvents: "all" }}
        >
          <div className="text-center px-8 relative">
            {/* Background blur for depth */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-[100px] -z-10"
            />

            {/* "Welcome To" - Small & Light */}
            <motion.div
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate={phase === "exit" ? "exit" : "visible"}
              className="overflow-hidden mb-4"
            >
              <h2
                className="text-sm sm:text-base md:text-lg uppercase tracking-[0.4em] text-gray-400 font-medium"
                style={{
                  fontFamily: "'Inter', 'Outfit', system-ui, sans-serif",
                }}
              >
                Welcome To
              </h2>
            </motion.div>

            {/* "RADI TECH" - Bold & Massive */}
            <div className="relative inline-block my-2">
              <motion.h1
                custom={1}
                variants={lineVariants}
                initial="hidden"
                animate={phase === "exit" ? "exit" : "visible"}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900"
                style={{
                  fontFamily: "'Inter', 'Outfit', system-ui, sans-serif",
                }}
              >
                RADI <span className="text-blue-600">TECH</span>
              </motion.h1>
            </div>

            {/* Tagline - Subtle */}
            <motion.div
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate={
                phase === "reveal"
                  ? "visible"
                  : phase === "exit"
                  ? "exit"
                  : "hidden"
              }
              className="mt-6"
            >
              <p
                className="text-sm sm:text-lg text-gray-500 font-light tracking-wide max-w-sm mx-auto leading-relaxed"
                style={{
                  fontFamily: "'Inter', 'Outfit', system-ui, sans-serif",
                }}
              >
                Building digital excellence.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
