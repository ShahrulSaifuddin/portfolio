import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout } from "@/components/layout/RootLayout";

// Pages
import { HomePage } from "@/pages/Home";
import { ProjectsPage } from "@/pages/Projects";
import { ProjectDetailsPage } from "@/pages/ProjectDetails";
import { ContactPage } from "@/pages/Contact";
import { AboutPage } from "@/pages/About";
import { ExperiencePage } from "@/pages/Experience";
import { SkillsPage } from "@/pages/Skills";
import { BlogPage } from "@/pages/Blog";
import { BlogPostPage } from "@/pages/BlogPost";
import { NowPage } from "@/pages/Now";
import { ResumePage } from "@/pages/Resume";
import { CommandPalette } from "@/components/features/CommandPalette";
import { AnimatedBackground } from "@/components/features/AnimatedBackground";
import { ThemeToggle } from "@/components/features/ThemeToggle";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        {/* Using BrowserRouter with fallback strategy assumption or HashRouter if user prefers safe static. 
            User prompt said "GitHub Pages: use HashRouter OR configure SPA fallback".
            I will use BrowserRouter for cleaner URLs, but if it breaks on reload in some basic hosting, HashRouter is safer.
            Given "Apple-level polish", clean URLs are mandatory. I'll stick to BrowserRouter. 
        */}
        <BrowserRouter>
          <AnimatedBackground />
          {/* <CommandPalette /> */}

          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/now" element={<NowPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route
                path="*"
                element={
                  <div className="flex h-screen items-center justify-center">
                    404 - Not Found
                  </div>
                }
              />
            </Route>
          </Routes>

          {/* Floating Theme Toggle (optional if not in Nav, keeping it accessible) */}
          <div className="fixed bottom-4 left-4 z-50">
            <ThemeToggle />
          </div>

          {/* Toast notifications would go here */}
          <Toaster />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
