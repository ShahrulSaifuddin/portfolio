# Shahrul Saifuddin - Premium Portfolio

A high-performance, dark luxury portfolio built with React, Vite, and Tailwind CSS.
Designed to be 100% static and deployable anywhere (GitHub Pages, Cloudflare Pages, Netlify, S3).

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (SPA)

## Getting Started

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Run Development Server**

    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder.

## Customizing Content

All content is driven by JSON files in `src/content/`. You don't need to touch React code to update text.

- `src/content/profile.json`: Name, bio, social links.
- `src/content/experience.json`: Work history.
- `src/content/projects.json`: Featured projects and deep-dive case studies.
- `src/content/skills.json`: Tech stack categories.
- `src/content/blog.json`: (Implemented as static list in generic page for now).

## Deployment

### Cloudflare Pages (Recommended)

1.  Connect your GitHub repo.
2.  Build command: `npm run build`
3.  Output directory: `dist`
4.  Cloudflare automatically handles SPA routing.

### Netlify

1.  Connect your GitHub repo.
2.  Build command: `npm run build`
3.  Publish directory: `dist`
4.  The included `public/_redirects` file handles SPA routing.

### GitHub Pages

1.  Go to Settings > Pages.
2.  Source: GitHub Actions (Recommended) or `/docs` (if you move dist content there).
3.  **Note**: This project uses `BrowserRouter`. For GitHub Pages, `404.html` hack is included, but `HashRouter` is simpler if you encounter issues.

## Project Structure

```text
/public          # Static assets (images, resume.pdf)
/src
  /components
    /ui          # Base UI components (Buttons, Cards)
    /features    # Complex features (Ticker, CommandPalette)
    /layout      # Navbar, Footer
  /content       # JSON Data
  /pages         # Page Components
  /lib           # Utilities
```

## License

Private / Proprietary.
