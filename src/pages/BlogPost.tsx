import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function BlogPostPage() {
  const { slug } = useParams();

  return (
    <article className="pt-32 pb-20 px-4 sm:px-8 max-w-3xl mx-auto w-full min-h-screen">
      <Link
        to="/blog"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 capitalize">
          {slug?.replace(/-/g, " ")}
        </h1>
        <p className="text-muted-foreground">Published on October 12, 2025</p>
      </header>

      <div className="prose prose-invert prose-gold max-w-none">
        <p className="lead">
          This is a placeholder for the blog post content. ideally this would be
          rendered from MDX.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Subheading</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </article>
  );
}
