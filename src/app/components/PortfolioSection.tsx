import PortfolioItem from "@/app/components/PortfolioItem";
import SectionTitle from "@/app/components/SectionTitle";

const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping experience",
      longDescription: "A cutting-edge e-commerce platform featuring seamless product browsing, secure checkout, and personalized recommendations. Built with advanced search functionality and real-time inventory management.",
      imageUrl: "/portfolio/image-1.svg",
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial management",
      longDescription: "A comprehensive mobile banking solution offering secure transactions, budget tracking, and investment management. Features biometric authentication and real-time notifications for enhanced security.",
      imageUrl: "/portfolio/image-2.svg",
    },
    {
      title: "Fitness Tracker",
      description: "Personal health companion",
      longDescription: "An innovative fitness tracking application that monitors workouts, nutrition, and sleep patterns. Includes AI-powered recommendations and social features for motivation and community building.",
      imageUrl: "/portfolio/image-3.svg",
    },
    {
      title: "Travel Planning App",
      description: "Smart travel organizer",
      longDescription: "A comprehensive travel planning tool that helps users discover destinations, book accommodations, and create personalized itineraries. Features real-time weather updates and local recommendations.",
      imageUrl: "/portfolio/image-4.svg",
    },
    {
      title: "Food Delivery Service",
      description: "Quick meal ordering",
      longDescription: "A user-friendly food delivery platform with real-time order tracking, restaurant recommendations, and secure payment options. Includes special dietary filters and loyalty rewards program.",
      imageUrl: "/portfolio/image-5.svg",
    },
    {
      title: "Social Media Dashboard",
      description: "Content management system",
      longDescription: "A powerful social media management tool for scheduling posts, analyzing engagement metrics, and managing multiple accounts. Features content calendar and performance analytics.",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <PortfolioItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  longDescription={item.longDescription}
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
