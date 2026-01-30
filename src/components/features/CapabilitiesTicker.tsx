import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

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

interface ParallaxTextProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap gap-10 will-change-transform"
        style={{ x }}
      >
        {/* Render multiple copies for seamless loop */}
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="text-xl md:text-3xl font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors duration-300 cursor-default select-none"
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function CapabilitiesTicker() {
  return (
    <div className="w-full overflow-hidden bg-background">
      <ParallaxText baseVelocity={0.5}>
        {`${capabilities.join(" • ")} • `}
      </ParallaxText>
    </div>
  );
}
