export const Lookbook = () => {
  const looks = [
    { title: "The Obsidian Polo", price: "₦ 28,500", tag: "New" },
    { title: "Signature Denim", price: "₦ 42,000", tag: "Best Seller" },
    { title: "Heritage Native Set", price: "₦ 95,000", tag: "Limited" },
    { title: "Leather Slides", price: "₦ 22,000", tag: "Restocked" },
  ];

  return (
    <section id="lookbook" className="relative py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4">
              Featured Pieces
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              The <span className="text-gold italic">Lookbook</span>
            </h2>
          </div>
          <a href="#" className="text-sm tracking-widest uppercase text-primary hover:text-primary-glow border-b border-primary/40 pb-1 self-start">
            View all pieces →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {looks.map((look, i) => (
            <div key={look.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-card border border-border group-hover:border-primary/60 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-8xl text-primary/10 group-hover:text-primary/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase text-primary-foreground bg-primary px-2 py-1">
                  {look.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 to-transparent">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <button className="w-full bg-gold text-primary-foreground text-xs tracking-[0.25em] uppercase py-3 font-medium">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-lg">{look.title}</h3>
                <span className="text-primary text-sm font-medium">{look.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
