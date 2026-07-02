import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { Menu, ShoppingBag, X } from "lucide-react";

const links = [
  { href: "#collection", label: "Collection" },
  { href: "#story", label: "The House" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="hover:opacity-80 transition-opacity">
          <BrandMark size="sm" showTagline={false} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase text-foreground/90 hover:text-primary transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Cart · 0</span>
          </button>
          <button
            className="md:hidden text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase text-foreground/90 hover:text-primary py-2"
              >
                {l.label}
              </a>
            ))}
            <button className="flex items-center gap-2 text-sm tracking-widest uppercase text-primary pt-2 border-t border-border/50">
              <ShoppingBag className="h-4 w-4" /> Cart · 0
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
