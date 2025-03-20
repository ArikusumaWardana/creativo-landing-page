import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import CollaborateSection from "./components/CollaborateSection";
import Footer from "./components/Footer";



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
