import * as React from "react";
import { Zap } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "cmdk";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(true)}
          className="rounded-full shadow-lg bg-background"
        >
          <span className="text-xs font-bold">CmdK</span>
        </Button>
      </div> */}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="bg-popover text-popover-foreground border border-border shadow-2xl rounded-xl overflow-hidden max-w-lg w-full mx-auto mt-[10vh]">
          <CommandInput
            placeholder="Type a command or search..."
            className="w-full px-4 py-3 bg-transparent outline-none border-b border-border"
          />
          <CommandList className="max-h-[300px] overflow-y-auto p-2">
            <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </CommandEmpty>
            <CommandGroup
              heading="Suggestions"
              className="px-2 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <CommandItem
                onSelect={() => runCommand(() => navigate("/projects"))}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer aria-selected:bg-accent"
              >
                <Zap className="mr-2 h-4 w-4" />
                <span>Projects</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => navigate("/about"))}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer aria-selected:bg-accent"
              >
                <User className="mr-2 h-4 w-4" />
                <span>About Me</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => navigate("/contact"))}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer aria-selected:bg-accent"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator className="my-1 h-px bg-border" />
            <CommandGroup
              heading="Theme"
              className="px-2 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <CommandItem
                onSelect={() =>
                  runCommand(() =>
                    document.documentElement.classList.add("dark"),
                  )
                }
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer aria-selected:bg-accent"
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark Mode</span>
              </CommandItem>
              <CommandItem
                onSelect={() =>
                  runCommand(() =>
                    document.documentElement.classList.remove("dark"),
                  )
                }
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer aria-selected:bg-accent"
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>Light Mode</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </>
  );
}

import { Mail, Moon, Sun, User } from "lucide-react";
