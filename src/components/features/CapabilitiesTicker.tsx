const capabilities = [
  "Shipping scalable APIs",
  "Polished mobile UX",
  "Payments",
  "Real-time updates",
  "Performance tuning",
  "Clean architecture",
  "Data contracts",
  "Next.js & React Native",
];

export function CapabilitiesTicker() {
  // Join the capabilities into a single string item
  const capabilitiesStr = `${capabilities.join(" • ")} • `;

  return (
    <div className="w-full overflow-hidden bg-background">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            width: max-content;
          }
          /* Pause on hover only for desktop */
          @media (hover: hover) {
            .ticker-wrapper:hover .animate-marquee {
              animation-play-state: paused;
            }
          }
        `}
      </style>

      <div className="ticker-wrapper w-full overflow-hidden select-none py-2">
        <div className="animate-marquee flex gap-0 whitespace-nowrap will-change-transform">
          {/* Render two identical large blocks for seamless looping */}
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex">
              {/* Repeat the content multiple times to ensure it's wide enough */}
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="text-xl md:text-3xl font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors duration-300 cursor-default select-none mx-0 px-2"
                >
                  {capabilitiesStr}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
