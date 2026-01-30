import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { AlternatingReveal } from "@/components/ui/alternating-reveal";
// Placeholder data
const posts = [
  {
    slug: "building-reliable-APIs",
    title: "Building Reliable APIs in 2026",
    date: "October 12, 2025",
    excerpt:
      "Why idempotency and strong contracts matter more than stack choice.",
    readTime: "5 min read",
  },
  {
    slug: "react-native-performance",
    title: "Optimizing React Native Lists",
    date: "September 28, 2025",
    excerpt: "How I reduced render times by 60% on low-end Android devices.",
    readTime: "8 min read",
  },
];

export function BlogPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-3xl mx-auto w-full min-h-screen">
      <AlternatingReveal>
        <Badge variant="outline" className="mb-4">
          Writing
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
          Thoughts & Notes
        </h1>
      </AlternatingReveal>

      <AlternatingReveal className="space-y-12" delay={0.2}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-gold-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </AlternatingReveal>
    </div>
  );
}
