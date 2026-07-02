import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Story } from "@/components/Story";
import { Lookbook } from "@/components/Lookbook";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Collection />
      <Story />
      <Lookbook />
      <Footer />
    </main>
  );
};

export default Index;
