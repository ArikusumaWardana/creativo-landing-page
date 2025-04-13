import Button from "@/app/components/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden">
      {/* Decorative Background SVG */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            {/* Circles */}
            <circle cx="200" cy="200" r="100" fill="#1F1D2B" />
            <circle cx="1200" cy="400" r="150" fill="#1F1D2B" />
            <circle cx="800" cy="600" r="80" fill="#1F1D2B" />
            
            {/* Dots Pattern */}
            <g>
              {Array.from({ length: 20 }).map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r="2"
                  fill="#1F1D2B"
                />
              ))}
            </g>
          </g>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="space-y-6 flex-1">
            <h1 className="text-3xl md:text-6xl font-bold text-[#1F1D2B] leading-tight font-inter">
              Where<br />
              Design Meets<br />
              Innovation!
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg font-inter">
              Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image, we've got the creative firepower to make it happen.
            </p>
            <Button text="LET'S TALK" style="bg-[#1F1D2B] text-white hover:bg-[#2d2b3d] px-8 py-3 md:px-12 md:py-3"/>
          </div>
          <div className="relative flex-1">
            <Image
              src="/hero/hero-section.svg"
              alt="Creative team illustration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
