import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CapabilitiesTicker } from "@/components/features/CapabilitiesTicker";
import { ProjectCard } from "@/components/features/ProjectCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import profileData from "@/content/profile.json";
import projectsData from "@/content/projects.json";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { OrbitingSkills } from "@/components/ui/orbiting-skills";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal, revealVariants } from "@/components/ui/text-reveal";

export function HomePage() {
  const featuredProjects = projectsData.projects.slice(0, 2); // Show top 2

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 w-full overflow-hidden">
        {/* Spotlight Effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start gap-8 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Badge
                  variant="gold"
                  className="mb-6 px-3 py-1 text-sm tracking-wide uppercase"
                >
                  Available for work
                </Badge>
                <TextReveal
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-primary mb-8"
                  delay={0.2}
                >
                  <motion.span variants={revealVariants}>I</motion.span>{" "}
                  <motion.span variants={revealVariants}>build</motion.span>{" "}
                  <motion.span
                    variants={revealVariants}
                    className="text-muted-foreground inline-block"
                  >
                    fast
                  </motion.span>
                  <motion.span variants={revealVariants}>,</motion.span>
                  <br className="hidden md:block" />
                  <motion.span variants={revealVariants}>
                    reliable
                  </motion.span>{" "}
                  <motion.span variants={revealVariants}>products.</motion.span>
                </TextReveal>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                  {profileData.headline} {profileData.bio}
                </p>

                <div className="flex flex-wrap gap-4">
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      variant="premium"
                      className="group text-base h-14 px-8 rounded-full"
                    >
                      <Link to="/projects">
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </MagneticButton>

                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="text-base h-14 px-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                    >
                      <Link to="/contact">Let's Talk</Link>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>
            </div>

            {/* Right Column: 3D Robot */}
            <div className="hidden lg:block h-[600px] w-full relative z-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal animation="fade-up" duration={1}>
        <CapabilitiesTicker />
      </ScrollReveal>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <ScrollReveal width="100%">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Selected Work
            </h2>
            <Button
              variant="link"
              asChild
              className="text-gold-500 hover:text-gold-400"
            >
              <Link to="/projects" className="flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.1} width="100%">
              <div className="h-[500px]">
                <ProjectCard project={project} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Simple Stack Section */}
      <section className="py-24 px-4 sm:px-8 border-t border-border/40 bg-card/20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  World-class engineering
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  I don't just write code. I architect scalable systems,
                  specific to business needs. My stack is chosen for reliability
                  and speed.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/skills">View Full Tech Stack</Link>
                </Button>
              </div>
            </ScrollReveal>

            <div className="flex justify-center w-full">
              <ScrollReveal animation="blur-in" delay={0.2}>
                <OrbitingSkills />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
