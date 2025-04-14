import DefaultLayout from './components/templates/DefaultLayout';
import HeroSection from './components/organisms/HeroSection';
import ServicesSection from './components/organisms/ServicesSection';
import PortfolioSection from './components/organisms/PortfolioSection';
import CollaborateSection from './components/organisms/CollaborateSection';

export default function Home() {
  return (
    <DefaultLayout>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CollaborateSection />
    </DefaultLayout>
  );
}
