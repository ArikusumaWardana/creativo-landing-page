import Button from "@/app/components/atoms/Button";
import SectionTitle from "@/app/components/atoms/SectionTitle";

export default function CollaborateSection() {

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-950"></div>
        
        {/* Animated Circles */}
        <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute -left-20 bottom-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute left-1/4 top-1/3 w-8 h-8 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute right-1/3 bottom-1/4 w-6 h-6 rounded-full bg-white/10 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Decorative Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform rotate-45 animate-slide"></div>
          <div className="absolute right-20 bottom-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -rotate-45 animate-slide" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Abstract Shapes */}
        <div className="absolute left-1/3 top-20 w-16 h-16 border-2 border-white/10 rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-1/4 bottom-20 w-12 h-12 border-2 border-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

        {/* Additional Floating Elements */}
        <div className="absolute left-1/5 top-1/2 w-10 h-10 border-2 border-white/10 rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute right-1/5 bottom-1/3 w-14 h-14 border-2 border-white/10 rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <SectionTitle title="Let's Collaborate" style="text-white md:mt-6" />
          <div className="md:w-[650px] space-y-8">
            <p className="text-lg md:text-2xl font-inter font-medium text-white/90 leading-relaxed">
              Ready to turn your ideas into exceptional designs? Contact us today, and let's make something amazing together!
            </p>


              <Button 
                text="LET'S TALK" 
                style={`bg-white text-gray-950 hover:bg-gray-200 px-8 py-3 md:px-10 transition-all duration-300`} />
          </div>
        </div>
      </div>
    </section>
  );
}
