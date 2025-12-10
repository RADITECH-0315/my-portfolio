// Premium Motion Configuration
// Physics-based springs and deliberate timings for a luxury feel

export const premiumEasing = [0.22, 1, 0.36, 1]; // Gentle, sophisticated cubic bezier

// Physics-based spring config for "alive" feel
export const springTransition = {
  type: "spring",
  stiffness: 70,
  damping: 20,
  mass: 1,
};

// Slower, more deliberate durations
export const durations = {
  fast: 0.8,
  medium: 1.2,
  slow: 1.6,
  hover: 0.5,
  tap: 0.2,
};

// Global Stagger timings
export const staggers = {
  tight: 0.1,
  normal: 0.15,
  relaxed: 0.25,
};

// --- VARIANTS ---

// 1. Reveal Up (Standard Section Entry)
// Soft fade with gentle upward movement
export const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: premiumEasing,
    },
  },
};

// 2. Reveal Depth (For cards/images)
// Fade in while scaling up slightly (creates depth)
export const revealDepth = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.medium,
      ease: premiumEasing,
    },
  },
};

// 3. Hover Lift (Interactive Cards)
// "Physical" lift effect with shadow bloom
export const hoverLift = {
  y: -5,
  scale: 1.01,
  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)", // Soft, widespread shadow
  transition: {
    duration: durations.hover,
    ease: premiumEasing,
  },
};

// 4. Tap Compress (Buttons/Cards)
// Tactile feedback
export const tapCompress = {
  scale: 0.97,
  transition: { duration: durations.tap, ease: "easeInOut" },
};

// 5. Stagger Containers
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.relaxed,
      delayChildren: 0.2,
    },
  },
};

// 6. Text Line Reveal (for heavy headlines)
export const textLineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: durations.medium, ease: premiumEasing },
  },
};

// 7. Icon Bloom (for Tech Stack)
export const iconBloom = {
  initial: { opacity: 0.85, filter: "grayscale(100%)" },
  hover: {
    opacity: 1,
    filter: "grayscale(0%)",
    scale: 1.1,
    transition: { duration: durations.hover, ease: premiumEasing },
  },
};

// 8. Focus interaction (Inputs)
export const focusScale = {
  scale: 1.01,
  borderColor: "rgba(37, 99, 235, 0.5)", // Blue-500 equivalent
  boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.1)",
  transition: { duration: 0.3, ease: premiumEasing },
};
