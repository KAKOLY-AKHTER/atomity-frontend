import { Hero } from "@/components/Hero";
import { DashboardPreview } from "@/components/DashboardPreview";
import { MetricsSection } from "@/components/MetricsSection";
import { SavingsSection } from "@/components/SavingsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <section id="overview">
        <Hero />
      </section>
      
      <section id="intelligence">
        <DashboardPreview />
      </section>

      <section id="metrics">
        <MetricsSection />
      </section>

      <section id="savings">
        <SavingsSection />
      </section>

      <Footer />
    </main>
  );
}
