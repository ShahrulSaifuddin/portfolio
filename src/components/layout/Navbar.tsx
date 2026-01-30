import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Now", path: "/now" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-xl font-bold tracking-tighter hover:text-primary transition-colors flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/50">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden sm:inline-block">Shahrul.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "transition-colors hover:text-foreground/80",
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-foreground/60",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <Link to="/contact">Contact</Link>
          </Button>
          <Button
            variant="premium"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <Link to="/resume">Resume</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl font-bold tracking-tighter transition-colors hover:text-primary",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-8">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full text-lg h-12"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </Button>
              <Button
                variant="premium"
                size="lg"
                asChild
                className="w-full text-lg h-12"
              >
                <Link to="/resume" onClick={() => setIsOpen(false)}>
                  Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
