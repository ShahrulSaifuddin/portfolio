import { Link } from "react-router-dom";
import profileData from "@/content/profile.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-10">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-sm font-medium">{profileData.name}</span>
          <p className="text-xs text-muted-foreground w-64">
            {profileData.headline}
          </p>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/now" className="hover:text-foreground transition-colors">
            Now
          </Link>
          <Link
            to="/skills"
            className="hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-xs text-muted-foreground">
          &copy; {currentYear}. Built with Vite & React.
        </div>
      </div>
    </footer>
  );
}
