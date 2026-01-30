import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
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
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * Skew effect based on velocity
   */
  const skew = useTransform(smoothVelocity, [-1000, 1000], [-10, 10]);

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap gap-10 will-change-transform"
        style={{ x, skew }}
      >
        {/* Render multiple copies for seamless loop */}
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="text-1xl md:text-2xl font-black uppercase tracking-tighter text-transparent stroke-text hover:text-primary transition-colors duration-300 cursor-default select-none"
            style={{
              WebkitTextStroke: "1px hsl(var(--muted-foreground))",
            }}
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
