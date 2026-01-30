import { Badge } from "@/components/ui/badge";
import { AlternatingReveal } from "@/components/ui/alternating-reveal";

export function NowPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-3xl mx-auto w-full min-h-screen">
      <AlternatingReveal>
        <Badge variant="outline" className="mb-4">
          Now
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          What I'm doing now
        </h1>
      </AlternatingReveal>

      <div className="prose prose-invert prose-lg text-muted-foreground">
        <AlternatingReveal delay={0.2}>
          <p>Updated January 30, 2026.</p>
          <h3>Building</h3>
          <p>
            Currently focused on building scalable payment infrastructure at
            Karuna. We are migrating legacy systems to a microservices
            architecture.
          </p>
          <h3>Learning</h3>
          <p>Diving deep into Rust for backend performance and WebAssembly.</p>
          <h3>Reading</h3>
          <p>
            "Designing Data-Intensive Applications" by Martin Kleppmann
            (Re-reading).
          </p>
        </AlternatingReveal>
      </div>
    </div>
  );
}
