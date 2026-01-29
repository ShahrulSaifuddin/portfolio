# Implementation Plan: Shahrul Saifuddin Portfolio

## 1. Site Architecture & Map

**Goal**: A 100% static site (SSG) hosted on Cloudflare Pages / GitHub Pages. No runtime server.

### Routes

| Route              | Type     | Description                                          |
| ------------------ | -------- | ---------------------------------------------------- |
| `/`                | `.astro` | Hero, rotating ticker, bio, featured projects block. |
| `/projects`        | `.astro` | Grid of projects (Editorial + Cards).                |
| `/projects/[slug]` | `.astro` | Deep case study pages (Static paths from JSON).      |
| `/experience`      | `.astro` | Timeline view of work history.                       |
| `/skills`          | `.astro` | Categorized tech stack with "hover capabilities".    |
| `/blog`            | `.astro` | List of MDX posts.                                   |
| `/blog/[slug]`     | `.astro` | Individual blog post (MDX).                          |
| `/now`             | `.astro` | "Now" page (MDX).                                    |
| `/about`           | `.astro` | Biographical detail.                                 |
| `/contact`         | `.astro` | Contact form (Mailto / Formspree static).            |
| `/resume`          | `.astro` | Resume view/download wrapper.                        |

---

## 2. Design System Tokens (Tailwind + CSS Variables)

**Theme Strategy**: Dark Luxury (Zinc-950 base) with Gold/Amber highlights.

### Colors

- **Background**: `bg-zinc-950` (near black), `bg-zinc-900` (cards).
- **Text**: `text-zinc-50` (headings), `text-zinc-400` (body).
- **Accent**: `amber-400` (Gold) for subtle glows, active states, and cursors.
- **Borders**: `border-white/10` (subtle glass), `border-amber-500/20` (active).

### Typography

- **Font**: `Inter` (Variable) or `Geist Sans` if preferred for that "vercel/apple" crispness.
- **Scale**: Large, confident headings (H1 ~ 4rem+), readable body (1rem/1.125rem).

### Animation Rules (Expensive Feel)

- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (custom "luxury" ease).
- **Duration**: Slower than usual.
  - Hover: `duration-300`
  - Fade/Reveal: `duration-700` to `duration-1000`
- **Reduced Motion**: All animations disabled via `@media (prefers-reduced-motion)`.

---

## 3. Content Schema

### JSON Data (`src/data/*.json`)

1.  **`profile.json`**: Name, headlines, bio, social links.
2.  **`projects.json`**: List of projects with full case study data (Problem, Tech, Metrics, etc.).
3.  **`experience.json`**: Work history array.
4.  **`skills.json`**: Categorized skills list.

### MDX Content (`src/content/`)

- **`blog/*.mdx`**: Technical articles.
- **`now.mdx`**: Current status update.

---

## 4. Component Architecture

We will use **Astro** for structure and **React** only for interactive "Islands".

### Static Components (Astro - Zero JS)

- `Layout.astro`: Main shell, SEO head, fonts.
- `Header.astro` & `Footer.astro`: Navigation links.
- `Section.astro`: Content wrapper with consistent spacing.
- `ProjectCard.astro`: Image + Text layout (CSS hover effects only).
- `TechChip.astro`: Static badge.
- `MetricCard.astro`: Stat display.
- `ArchitectureDiagram.astro`: SVG rendered server-side.

### Interactive Islands (React + Framer Motion)

- `CommandPalette.tsx` (`client:idle`): CMD+K accessible menu.
- `ThemeToggle.tsx` (`client:visible`): Dark/Light switch.
- `CapabilitiesTicker.tsx` (`client:load`): Smooth infinite scroll text.
- `ContactForm.tsx` (`client:load`): Client-side validation before mailto/submission.
- `Toast.tsx`: Notification system for small interactions.

---

## 5. Technical Stack Checklist

- **Framework**: Astro 5.0 (or latest)
- **UI Library**: React 19
- **Styling**: TailwindCSS v3.4+
- **Motion**: `framer-motion` (Islands only), `tailwindcss-animate`
- **Icons**: `lucide-react`
- **Fonts**: `@fontsource/inter` (or strictly local fonts/Google)
- **Deployment**: Static (`npm run build` -> `/dist`)

---

## 6. Execution Steps (Next Phase)

1.  **Scaffold**: Initialize Astro + React + Tailwind.
2.  **Data Layer**: Create JSON files with the provided client data.
3.  **Core UI**: Set up `globals.css` with mesh gradients and variables.
4.  **Components**: Build the ui/ folder (shadcn-like primitives).
5.  **Pages**: Assemble the 11 required routes.
6.  **Polish**: Add the "expensive" spacing and motion.
