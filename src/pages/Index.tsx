
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { PetHumor } from "@/components/PetHumor";
import { MonthlyTip } from "@/components/MonthlyTip";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f9fdf8] text-[#333]">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <Gallery />
        <PetHumor />
        <MonthlyTip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
