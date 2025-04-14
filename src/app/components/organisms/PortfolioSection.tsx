import PortfolioItem from "@/app/components/molecules/PortfolioItem";
import SectionTitle from "@/app/components/atoms/SectionTitle";
import { portfolioItems } from "@/app/data/PortfolioData";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 opacity-30"></div>
        
        {/* Large Animated Circle */}
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 animate-pulse"></div>
        
        {/* Small Animated Circles */}
        <div className="absolute left-20 top-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/4 bottom-20 w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute left-1/4 top-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-10 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-1/3 bottom-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Grid Pattern with Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F1D2B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent transform rotate-45 animate-slide"></div>
          <div className="absolute right-20 bottom-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent transform -rotate-45 animate-slide" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-[200px]" data-aos="fade-up">
            <SectionTitle title="Our Portfolio" style="text-gray-950 md:mt-5"/>
          </div>
          <div className="flex-1">
            <div className="w-full max-w-[650px]" data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-950 text-lg md:text-2xl font-inter mb-12 font-medium">
                We envision a world where every idea, product, or service is brought to life through exceptional design.
              </p>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100 + 400}`}>
                  <PortfolioItem
                    title={item.title}
                    description={item.description}
                    longDescription={item.longDescription}
                    imageUrl={item.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
