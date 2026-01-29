import { ProjectCard } from "@/components/features/ProjectCard";
import projectsData from "@/content/projects.json";
import { Badge } from "@/components/ui/badge";

export function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-7xl mx-auto w-full min-h-screen">
      <div className="mb-20 max-w-3xl">
        <Badge variant="outline" className="mb-4">
          Case Studies
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
          Selected Projects
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A collection of product-led case studies. Solving real business
          problems with cleaner logic and better UX.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.projects.map((project, idx) => (
          <div
            key={project.slug}
            className={`h-[450px] md:h-[550px] ${idx % 3 === 0 ? "md:col-span-2 md:h-[600px]" : ""}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
