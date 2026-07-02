import { ArrowUpRight } from "lucide-react";

const categories = [
  { name: "Men's Polos", count: 24, tag: "Signature" },
  { name: "Men's Shirts", count: 18, tag: "Tailored" },
  { name: "Men's T-Shirts", count: 22, tag: "Essential" },
  { name: "Men's Jeans", count: 16, tag: "Denim" },
  { name: "Men's Pants", count: 14, tag: "Formal" },
  { name: "Men's Natives", count: 12, tag: "Heritage" },
  { name: "Men's Shoes", count: 20, tag: "Footwear" },
  { name: "Men's Slippers", count: 10, tag: "Comfort" },
  { name: "Men's Belts", count: 8, tag: "Leather" },
  { name: "Men's Watches", count: 9, tag: "Timepieces" },
  { name: "Men's Bracelets", count: 7, tag: "Accents" },
  { name: "Sports Apparel", count: 15, tag: "Performance" },
];

export const Collection = () => {
  return (
    <section id="collection" className="relative py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Crafted for the <span className="text-gold italic">Distinguished</span> Gentleman
          </h2>
          <div className="diamond-divider text-primary/60 mt-6 mb-6">◆</div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Twelve curated categories. Each piece selected for its cut, its cloth,
            and the confidence it brings to the man who wears it.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#"
              className="group relative aspect-[3/4] overflow-hidden border border-border/60 bg-card hover:border-primary/60 transition-all duration-500"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Decorative gold pattern */}
              <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/20" />
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
              </div>

              {/* Number */}
              <div className="absolute top-4 left-4 font-display text-6xl md:text-7xl text-primary/15 group-hover:text-primary/30 transition-colors leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Tag */}
              <div className="absolute top-5 right-5 text-[10px] tracking-[0.25em] uppercase text-primary/80 border border-primary/30 px-2 py-1">
                {cat.tag}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors">
                  {cat.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground tracking-wider">
                    {cat.count} pieces
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>

              {/* Gold hover line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm italic">
            More collections coming soon — accessories, seasonal editions, and
            bespoke commissions.
          </p>
        </div>
      </div>
    </section>
  );
};
