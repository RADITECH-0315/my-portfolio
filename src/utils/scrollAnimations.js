// Scroll-triggered animation variants for sections
// Sleek, slow, and perfect animations

import { premiumEasing, durations } from "./motionConfig";

// Section container - fades in with upward motion
export const sectionFadeIn = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow, // 1.2s
      ease: premiumEasing,
    },
  },
};

// Section with staggered children
export const sectionStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual items within sections
export const itemFadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium, // 0.9s
      ease: premiumEasing,
    },
  },
};

// Heading reveal
export const headingReveal = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.medium,
      ease: premiumEasing,
    },
  },
};

// Card reveal with scale
export const cardReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: premiumEasing,
    },
  },
};

// Viewport configuration for scroll triggers
export const scrollViewport = {
  once: true,
  amount: 0.2,
  margin: "-80px",
};

// Viewport for immediate trigger
export const scrollViewportImmediate = {
  once: true,
  amount: 0.1,
};
