interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const sizes = {
  sm: { text: "text-sm", tag: "text-[10px]", icon: "h-6 w-6" },
  md: { text: "text-lg", tag: "text-xs", icon: "h-9 w-9" },
  lg: { text: "text-2xl md:text-3xl", tag: "text-sm", icon: "h-14 w-14" },
};

export const BrandMark = ({ size = "md", showTagline = true }: BrandMarkProps) => {
  const s = sizes[size];
  return (
    <div className="flex items-center gap-3">
      {/* Silhouette icon */}
      <div className={`${s.icon} shrink-0 relative`}>
        <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(45 90% 78%)" />
              <stop offset="60%" stopColor="hsl(42 60% 55%)" />
              <stop offset="100%" stopColor="hsl(38 55% 38%)" />
            </linearGradient>
          </defs>
          {/* Hat */}
          <path d="M18 14 Q30 4 42 14 L44 18 L16 18 Z" fill="url(#goldGrad)" />
          <rect x="14" y="17" width="32" height="2.5" fill="url(#goldGrad)" />
          {/* Head */}
          <circle cx="30" cy="24" r="3.5" fill="url(#goldGrad)" />
          {/* Body / suit */}
          <path d="M23 28 L37 28 L40 44 L36 46 L36 56 L24 56 L24 46 L20 44 Z" fill="url(#goldGrad)" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className={`font-display font-semibold tracking-[0.15em] ${s.text} text-gold`}>
          MATTHEW 7 <span className="opacity-80">VS</span> 7
        </div>
        <div className={`font-display tracking-[0.35em] text-primary/80 ${s.tag}`}>
          C L O T H I N G S
        </div>
        {showTagline && (
          <div className={`italic text-muted-foreground mt-1 ${s.tag}`}>
            "Ask and it shall be given"
          </div>
        )}
      </div>
    </div>
  );
};
