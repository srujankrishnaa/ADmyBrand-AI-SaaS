import { Variants } from 'framer-motion';

// Main container animation - faster
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.4
    }
  }
};

// Logo animation: big center → shrink and move to left - faster
export const logoVariants: Variants = {
  center: {
    scale: 3,
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" }
  },
  navigation: {
    scale: 1,
    x: -200,
    y: -100,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 }
  }
};

// Sequential text animations - faster
export const textLineVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Avatar cards animation - top to bottom
export const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Floating animation for cards
export const cardFloatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Button animations
export const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};