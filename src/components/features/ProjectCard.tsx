import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  project: {
    slug: string;
    name: string;
    tagline: string;
    labels: string[];
    result?: string;
  };
}

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block h-full group perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 transition-colors duration-300 group-hover:bg-card/50 group-hover:border-gold-500/30 group-hover:shadow-2xl group-hover:shadow-gold-500/10"
      >
        <div
          style={{ transform: "translateZ(50px)" }}
          className="flex flex-col h-full justify-between gap-8 relative z-10"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-gold-200 transition-colors">
                {project.name}
              </h3>
              <div className="bg-primary/20 p-2 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-gold-500" />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light mb-6">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.labels.slice(0, 3).map((label) => (
                <Badge
                  key={label}
                  variant="secondary"
                  className="bg-secondary/50 backdrop-blur-md border-white/5 text-xs text-muted-foreground"
                >
                  {label}
                </Badge>
              ))}
              {project.labels.length > 3 && (
                <Badge
                  variant="secondary"
                  className="bg-secondary/50 backdrop-blur-md border-white/5 text-xs text-muted-foreground"
                >
                  +{project.labels.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Sheen Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay" />

        {/* Glow orb */}
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-gold-500/0 to-gold-500/10 rounded-full blur-2xl group-hover:to-gold-500/20 transition-all duration-500 translate-z-20"></div>
      </motion.div>
    </Link>
  );
}
