import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  animation?: "fade-up" | "blur-in" | "slide-in" | "stagger-blur";
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

export function ScrollReveal({
  children,
  width = "fit-content",
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
  staggerChildren = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerBlurVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const selectedVariant =
    animation === "blur-in"
      ? blurVariants
      : animation === "slide-in"
        ? slideVariants
        : animation === "stagger-blur"
          ? staggerBlurVariants
          : variants;

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: selectedVariant.hidden,
          visible: {
            ...selectedVariant.visible,
            transition: {
              duration: duration,
              ease: [0.25, 0.4, 0.25, 1], // Custom "editorial" ease
              delay: delay,
              staggerChildren:
                staggerChildren || (animation === "stagger-blur" ? 0.05 : 0),
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}
