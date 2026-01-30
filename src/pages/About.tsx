import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AlternatingReveal } from "@/components/ui/alternating-reveal";
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

      <ScrollReveal delay={0.1}>
        <div className="mb-10 w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-muted/20 relative">
          <img
            src="/images/profile.png"
            alt={profileData.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>
      </ScrollReveal>

      <div className="prose prose-invert prose-lg text-muted-foreground">
        <AlternatingReveal delay={0.1}>
          <p className="lead text-xl text-foreground font-medium mb-6">
            {profileData.headline}
          </p>
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
        </AlternatingReveal>
      </div>
    </div>
  );
}
