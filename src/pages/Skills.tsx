import skillsData from "@/content/skills.json";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function SkillsPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-5xl mx-auto w-full min-h-screen">
      <ScrollReveal>
        <Badge variant="outline" className="mb-4">
          Technical Skills
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
          The Toolbox
        </h1>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.skills.map((group, i) => (
          <ScrollReveal key={group.group} delay={i * 0.1}>
            <div className="p-6 rounded-2xl border border-border bg-card/20">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold-500" />
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary/30 border border-white/5 text-sm font-medium text-foreground hover:bg-gold-500/10 hover:border-gold-500/20 hover:text-gold-500 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
