import ServiceItem from "@/app/components/ServiceItem";
import SectionTitle from "@/app/components/SectionTitle";

const services = [
    {
      title: "Visual Branding",
      description: "Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience.",
      isOpen: true,
    },
    {
      title: "Creative Campaign",
      description: "We develop innovative and impactful campaigns that capture attention and drive engagement across all platforms.",
      isOpen: false,
    },
    {
      title: "UI/UX Design",
      description: "We create intuitive and engaging user experiences that combine beautiful design with seamless functionality.",
      isOpen: false,
    },
    {
      title: "Development",
      description: "From concept to deployment, we build robust and scalable digital solutions that bring your vision to life.",
      isOpen: false,
    },
  ];  

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-950">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <SectionTitle title="Our Services" style="text-white md:mt-6" />
            <div className="space-y-0">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  title={service.title}
                  description={service.description}
                  isOpen={service.isOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
