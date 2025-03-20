import PortfolioItem from "./PortfolioItem";
import SectionTitle from "./SectionTitle";

const portfolioItems = [
    {
      title: "Daily App",
      description: "Increasing your productivity",
      imageUrl: "/portfolio/image-1.svg",
    },
    {
      title: "Daily App",
      description: "Increasing your productivity",
      imageUrl: "/portfolio/image-2.svg",
    },
    {
      title: "Daily App",
      description: "Increasing your productivity",
      imageUrl: "/portfolio/image-3.svg",
    },
    {
      title: "Daily App",
      description: "Increasing your productivity",
      imageUrl: "/portfolio/image-4.svg",
    },
    {
      title: "Daily App",
      description: "Increasing your productivity",
      imageUrl: "/portfolio/image-5.svg",
    },
    {
      title: "Daily App",
      description: "Increasing your productivity",
      imageUrl: "/portfolio/image-6.svg",
    }
  ];

export default function PortfolioSection() {
  return (
  <section id="portfolio" className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <SectionTitle title="Our Portfolio" style="text-gray-950 md:mt-5"/>
            <div>
              <div className="w-full max-w-[650px]">
              <p className="text-gray-950 text-lg md:text-2xl font-inter mb-12 font-medium">
                We envision a world where every idea, product, or service is brought to life through exceptional design.
              </p>
              </div> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioItems.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}  
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
