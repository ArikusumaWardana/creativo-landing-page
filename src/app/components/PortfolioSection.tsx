import PortfolioItem from "@/app/components/PortfolioItem";
import SectionTitle from "@/app/components/SectionTitle";
import Image from "next/image";

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
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Large Circle */}
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-[#1F1D2B] opacity-5"></div>
        
        {/* Small Circles */}
        <div className="absolute left-20 top-1/4 w-20 h-20 rounded-full bg-[#1F1D2B] opacity-5"></div>
        <div className="absolute right-1/4 bottom-20 w-16 h-16 rounded-full bg-[#1F1D2B] opacity-5"></div>
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F1D2B" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-[200px]">
            <SectionTitle title="Our Portfolio" style="text-gray-950 md:mt-5"/>
          </div>
          <div className="flex-1">
            <div className="w-full max-w-[650px]">
              <p className="text-gray-950 text-lg md:text-2xl font-inter mb-12 font-medium">
                We envision a world where every idea, product, or service is brought to life through exceptional design.
              </p>
            </div> 
            <div className="flex flex-wrap gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="w-full md:w-[calc(50%-16px)]">
                  <div className="relative overflow-hidden">
                    <div className="group">
                      <div className="relative">
                        <div className="relative">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-[#1F1D2B] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-base md:text-lg font-inter">
                        <span className="font-bold">{item.title}</span> - <span className="font-medium">{item.description}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
