export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Hero Image Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 dark:opacity-20 transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) blur(1px)",
        }}
      />

      {/* Gradient Overlay for Fadeout */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-10" />

      {/* Subtle Mesh Accents on top */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] mix-blend-screen opacity-30" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay z-20" />
    </div>
  );
}
