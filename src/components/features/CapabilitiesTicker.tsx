import { motion } from "framer-motion";

const capabilities = [
  "Shipping scalable APIs",
  "Polished mobile UX",
  "Payments",
  "Real-time updates",
  "Performance tuning",
  "Clean architecture",
  "Data contracts",
  "Next.js & React Native",
];

export function CapabilitiesTicker() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border/40 bg-background/50 py-4">
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex min-w-max shrink-0 items-center gap-8 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First set of items */}
          {capabilities.map((cap, i) => (
            <span
              key={`1-${i}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap"
            >
              {cap} •
            </span>
          ))}
          {/* Duplicate set for loop */}
          {capabilities.map((cap, i) => (
            <span
              key={`2-${i}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap"
            >
              {cap} •
            </span>
          ))}
          {/* Third set just in case the screen is extremely wide, to prevent gaps before the loop resets */}
          {capabilities.map((cap, i) => (
            <span
              key={`3-${i}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap"
            >
              {cap} •
            </span>
          ))}
          {/* Fourth set for safety */}
          {capabilities.map((cap, i) => (
            <span
              key={`4-${i}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap"
            >
              {cap} •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Vignette for fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
}
