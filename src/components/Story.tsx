import flatlay from "@/assets/product-flatlay.jpg";

export const Story = () => {
  return (
    <section id="story" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img
                src={flatlay}
                alt="Matthew 7 vs 7 signature pieces flat lay"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-r-2 border-b-2 border-primary" />
            <div className="absolute -top-4 -left-4 h-24 w-24 border-l-2 border-t-2 border-primary" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4">
              The House of Matthew 7 vs 7
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              A quiet <span className="text-gold italic">confidence</span>, tailored into every seam.
            </h2>

            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Thank you for choosing <span className="text-primary font-medium">Matthew7vs7 Clothings</span>.
                We appreciate your continued trust and look forward to styling you
                with premium menswear throughout every season.
              </p>
              <p>
                From the weight of the cotton in our signature polos to the fall
                of our denim, every piece is chosen with intent. Wishing you
                prosperity, favor, and remarkable achievements.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-primary pl-6">
              <p className="italic text-lg text-foreground font-serif-alt">
                "Ask, and it shall be given you; seek, and ye shall find; knock,
                and it shall be opened unto you."
              </p>
              <footer className="mt-2 text-xs tracking-[0.3em] uppercase text-primary/80">
                — Matthew 7:7
              </footer>
            </blockquote>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { k: "12+", v: "Categories" },
                { k: "180+", v: "Pieces" },
                { k: "100%", v: "Nigerian craft" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
