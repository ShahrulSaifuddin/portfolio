import { useParams, Navigate, Link } from "react-router-dom";
import projectsData from "@/content/projects.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, MonitorPlay } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-muted/10 border-b border-border/40 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            {project.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.labels.map((label) => (
              <Badge
                key={label}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {label}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="rounded-full">
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live Demo <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full"
            >
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Case Study Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 grid md:grid-cols-[1fr_300px] gap-16">
        <div className="space-y-16">
          {/* Role & Problem */}
          <ScrollReveal>
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-1 bg-gold-500 rounded-full"></div>Overview
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {project.intro}
              </p>

              <div className="grid md:grid-cols-2 gap-8 bg-card/50 p-6 rounded-xl border border-border/50">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    My Role
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    {project.myRole.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Constraints & Challenges
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    {project.constraints.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <Separator />

          {/* Problem & Solution */}
          <ScrollReveal>
            <section>
              <h2 className="text-2xl font-bold mb-6">The Problem</h2>
              <div className="space-y-4">
                {project.problem.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Architecture */}
          <ScrollReveal width="100%">
            <section>
              <h2 className="text-2xl font-bold mb-6">Architecture</h2>
              <Card className="bg-card/40 border-border/60">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
                    {project.architecture.diagramNodes.map((node, i) => (
                      <div key={i} className="flex items-center">
                        <div className="bg-background border border-border px-4 py-2 rounded-lg font-mono text-sm shadow-sm">
                          {node}
                        </div>
                        {i < project.architecture.diagramNodes.length - 1 && (
                          <div className="w-4 h-[2px] bg-border mx-2 md:mx-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground font-mono">
                    {project.architecture.summary}
                  </p>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Key Features */}
          <ScrollReveal>
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          {/* Tech Choices */}
          <ScrollReveal>
            <section>
              <h2 className="text-2xl font-bold mb-6">Tech Stack Decisions</h2>
              <div className="grid gap-4">
                {project.techChoicesWhy.map((choice, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-secondary/20 border border-border/50"
                  >
                    <p className="text-sm text-foreground/90">{choice}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Results Metrics */}
          <ScrollReveal width="100%">
            <section>
              <h2 className="text-2xl font-bold mb-6">Impact & Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl text-center"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-500 mb-2">
                      {res.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {res.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>

        {/* Sidebar (can include sticky nav later, simplified for now) */}
        <aside className="hidden md:block space-y-8 sticky top-32 h-fit">
          <ScrollReveal delay={0.2} animation="slide-in">
            <div className="p-6 rounded-2xl border border-border bg-card/20 backdrop-blur-sm">
              <h3 className="font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.links.live}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="mr-3 h-4 w-4" /> Live Site
                </a>
                <a
                  href={project.links.github}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="mr-3 h-4 w-4" /> Source Code
                </a>
                <a
                  href={project.links.demo}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MonitorPlay className="mr-3 h-4 w-4" /> Video Demo
                </a>
              </div>
            </div>
          </ScrollReveal>
        </aside>
      </div>
    </article>
  );
}
