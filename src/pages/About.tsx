import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import profileData from "@/content/profile.json";

export function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-3xl mx-auto w-full min-h-screen">
      <ScrollReveal>
        <Badge variant="outline" className="mb-4">
          About Me
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          More than just code.
        </h1>
      </ScrollReveal>

      <div className="prose prose-invert prose-lg text-muted-foreground">
        <ScrollReveal delay={0.1}>
          <p className="lead text-xl text-foreground font-medium mb-6">
            {profileData.headline}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} staggerChildren={0.1}>
          <p>
            I'm Shahrul, a {profileData.location}-based Full-Stack Team Lead. I
            believe in software that feels solid—tools that don't just work, but
            feel reliable and crafted.
          </p>
          <p>
            My journey started with a curiosity for how things work under the
            hood. Today, I lead teams to build complex, high-concurrency systems
            while obsessing over the micro-interactions that make a product feel
            "premium".
          </p>
          <p>
            When I'm not coding, I'm likely exploring new coffee spots, reading
            about system architecture, or refining my local dev environment.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
