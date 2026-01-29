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
    <div className="relative w-full max-w-[100vw] overflow-hidden border-y border-border/40 bg-background/50 py-4">
      <div className="flex select-none gap-8 w-full">
        <motion.div
          className="flex min-w-full shrink-0 gap-8 items-center"
          animate={{ x: "-100%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {capabilities.map((cap, i) => (
            <span
              key={i}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap"
            >
              {cap} •
            </span>
          ))}
          {capabilities.map((cap, i) => (
            <span
              key={`dup-${i}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap"
            >
              {cap} •
            </span>
          ))}
        </motion.div>

        {/* Duplicate for seamless loop if needed, though the above mapping handles it for standard widths. Double rendering is safer. */}
        <motion.div
          className="flex min-w-full shrink-0 gap-8 items-center absolute top-4 left-full"
          animate={{ x: "-100%" }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {capabilities.map((cap, i) => (
            <span
              key={`2-${i}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80 whitespace-nowrap"
            >
              {cap} •
            </span>
          ))}
          {capabilities.map((cap, i) => (
            <span
              key={`2-dup-${i}`}
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
