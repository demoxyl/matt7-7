import { Mail, Instagram, Phone } from "lucide-react";
import { BrandMark } from "./BrandMark";

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-background border-t border-border pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4">
            Stay in touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Ask, and it shall be <span className="text-gold italic">given</span>.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Reach out for orders, private commissions, or styling requests.
            We respond personally, and promptly.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "matthew7vs7clothings@gmail.com",
              href: "mailto:matthew7vs7clothings@gmail.com",
            },
            {
              icon: Instagram,
              label: "Instagram",
              value: "@matthew7vs7clothings",
              href: "https://instagram.com/matthew7vs7clothings",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "0803 385 1265",
              href: "tel:+2348033851265",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 border border-border p-5 hover:border-primary/60 transition-colors"
            >
              <div className="h-12 w-12 shrink-0 rounded-full border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {item.label}
                </div>
                <div className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors break-all">
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <BrandMark size="sm" showTagline={false} />
          <p className="font-script text-xl text-gold">Stay Classy. Stay Distinguished.</p>
          <p className="text-xs text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} MATTHEW 7 VS 7 CLOTHINGS
          </p>
        </div>
      </div>
    </footer>
  );
};
