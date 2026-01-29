import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: {
    slug: string;
    name: string;
    tagline: string;
    labels: string[];
    result?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 transition-all duration-300 hover:bg-card/50 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/10">
        <div className="flex flex-col h-full justify-between gap-8">
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

          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-gold-500/0 to-gold-500/10 rounded-full blur-2xl group-hover:to-gold-500/20 transition-all duration-500"></div>
        </div>
      </div>
    </Link>
  );
}
