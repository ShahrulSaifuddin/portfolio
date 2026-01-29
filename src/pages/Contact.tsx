import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-4xl mx-auto w-full min-h-screen">
      <div className="mb-12">
        <Badge variant="outline" className="mb-4">
          Get in Touch
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Let's build something ambitious.
        </h1>
        <p className="text-xl text-muted-foreground">
          I'm currently available for freelance projects and consulting.
        </p>
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <Card className="border-border/60 bg-card/50">
          <CardContent className="p-8">
            <form
              action="mailto:shahrul@example.com"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-input/60 focus:border-gold-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 border-input/60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="project-type" className="text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="project-type"
                  className="flex h-10 w-full rounded-md border border-input/60 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>Backend / API</option>
                  <option>Consulting / Audit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium">
                  Budget Range (MYR)
                </label>
                <select
                  id="budget"
                  className="flex h-10 w-full rounded-md border border-input/60 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>RM 2k - 5k</option>
                  <option>RM 5k - 10k</option>
                  <option>RM 10k+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project context, goals, and timeline..."
                  className="min-h-[150px] bg-background/50 border-input/60"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto px-8"
                variant="premium"
              >
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center md:text-left">
                This will open your default email client.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-2">Contact Details</h3>
            <p className="text-muted-foreground text-sm">shahrul@example.com</p>
            <p className="text-muted-foreground text-sm">Malaysia (GMT+8)</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
