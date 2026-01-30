"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({
  children,
  className,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // A simple way to stagger is to treat each word as a child.
  // But passing complex children (like spans with classes) makes automatic splitting hard.
  // Instead, let's just assume the user passes text or simple elements,
  // and we wrap the whole thing in a motion div that staggers its children.
  // BUT: if I wrap the existing children (which are strings and spans) in motion.div,
  // the strings won't animate individually unless they are motion components.

  // So, for this specific "Expensive" feel, I will manually create a "Word" wrapper
  // or just use `ScrollReveal` with `stagger-blur` on a container,
  // and ensure the children are `motion` elements.

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: delay },
          },
          hidden: {},
        }}
        aria-hidden
      >
        {/* We need to recursively traverse children? No, that's too complex. 
            Let's keep it simple for now. 
            The user wants "expensive". 
            I will use a library-like approach: split string children into words.
            But here I'm passing JSX children.
        */}
        {children}
      </motion.div>
    </div>
  );
}

// Actually, since I can't easily split arbitrary JSX,
// I will create a simpler `StaggeredText` component that takes a string.
// But the user has <span> styled text.
// So I will make a `RevealWrapper` that just staggers its direct children.
// And in Home.tsx, I will wrap each word/segment in a <motion.span variants={...}>.

export const revealVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};
