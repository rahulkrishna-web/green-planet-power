import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StickyScrollStack } from "@/components/StickyScrollStack";
import { Metrics } from "@/components/Metrics";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <StickyScrollStack />
      <Metrics />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
