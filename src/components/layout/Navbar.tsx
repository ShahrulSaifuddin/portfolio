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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Centering Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
              {/* Glass Card Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                className="w-full max-w-md max-h-[80dvh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-2xl shadow-2xl p-6 flex flex-col items-center pointer-events-auto my-auto"
              >
                <button
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 transition-colors text-foreground"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>

                <nav className="flex flex-col items-center gap-6 w-full mt-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                      className="w-full text-center"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block text-3xl font-bold tracking-tight transition-colors w-full py-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent hover:text-primary",
                          location.pathname === item.path
                            ? "text-primary bg-none"
                            : "",
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-4 mt-10 w-full pb-4"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full h-12 rounded-xl border-white/10 hover:bg-white/5"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get in Touch
                    </Link>
                  </Button>
                  <Button
                    variant="premium"
                    size="lg"
                    asChild
                    className="w-full h-12 rounded-xl shadow-lg shadow-primary/20"
                  >
                    <Link to="/resume" onClick={() => setIsOpen(false)}>
                      View Resume
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
