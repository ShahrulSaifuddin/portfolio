"use client";

import { motion, useInView } from "framer-motion";
import { Children, useRef } from "react";

interface AlternatingRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AlternatingReveal({
  children,
  className,
  delay = 0,
}: AlternatingRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Convert children to array to map over them
  const childArray = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => {
        // Even index: Slide from Right (x: 50) ? User said: "first from right to left"
        // Let's assume index 0 = Right to Left.
        // Index 1 = Left to Right.

        // Wait, "from right to left" means it starts at x: 50 and moves to x: 0.
        // "from left to right" means it starts at x: -50 and moves to x: 0.

        const isEven = index % 2 === 0;
        const xOffset = isEven ? 50 : -50;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: xOffset }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.4, 0.25, 1], // Editorial ease
              delay: delay + index * 0.1, // Stagger effect
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
