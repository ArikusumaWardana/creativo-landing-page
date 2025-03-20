import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import CollaborateSection from "@/app/components/CollaborateSection";
import Footer from "@/app/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Collaborate Section */}
      <CollaborateSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
