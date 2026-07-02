import heroModels from "@/assets/hero-models.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroModels}
          alt="Matthew 7 vs 7 Clothings — luxury menswear campaign"
          className="h-full w-full object-cover object-center opacity-70"
          width={1280}
          height={1600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 min-h-screen flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm tracking-[0.4em] text-primary/90 uppercase mb-6 animate-fade-up">
            The Autumn Edit · 2026
          </p>

          <h1
            className="font-display font-bold leading-[0.9] text-6xl sm:text-7xl md:text-8xl lg:text-9xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-foreground">Happy</span>
            <span className="block text-gold shimmer-gold">New</span>
            <span className="block text-gold shimmer-gold">Month</span>
          </h1>

          <div
            className="mt-8 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="h-px w-16 bg-primary/60" />
            <span className="text-primary/80 rotate-45 inline-block">◆</span>
            <span className="h-px w-16 bg-primary/60" />
          </div>

          <p
            className="mt-8 text-lg md:text-xl text-foreground/80 max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Welcome to a new month of style, confidence, success, and endless
            possibilities. Premium menswear crafted for the distinguished.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium shadow-gold hover:shadow-glow transition-all"
            >
              Explore the Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center gap-3 border border-primary/40 text-primary px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:bg-primary/10 transition-all"
            >
              Our Story
            </a>
          </div>

          <p
            className="font-script text-3xl md:text-4xl text-gold mt-16 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Stay Classy. <br /> Stay Distinguished.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
