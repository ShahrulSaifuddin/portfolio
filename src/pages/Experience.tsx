import experienceData from "@/content/experience.json";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ExperiencePage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-4xl mx-auto w-full min-h-screen">
      <ScrollReveal>
        <Badge variant="outline" className="mb-4">
          Experience
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
          My Journey
        </h1>
      </ScrollReveal>

      <div className="space-y-8">
        {experienceData.experience.map((role, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line (Hidden on mobile for cleaner look or adapted) */}

              <Card className="bg-card/30 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <div className="text-lg text-gold-500 font-medium mt-1">
                        {role.company}
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {role.start} — {role.end}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {role.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
