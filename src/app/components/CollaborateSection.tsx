import Button from "./Button";
import SectionTitle from "./SectionTitle";

export default function CollaborateSection() {
  return (
    <section className="py-20 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <SectionTitle title="Let's Collaborate" style="text-white md:mt-6" />
            <div className="md:w-[650px]">
              <p className="text-lg md:text-2xl font-inter mb-6 md:mb-8 font-medium">
                Ready to turn your ideas into exceptional designs? Contact us today, and let's make something amazing together!
              </p>
              <Button text="LET'S TALK" style="bg-white text-gray-950 hover:bg-gray-200 px-8 py-3 md:px-10" />
            </div>
          </div>
        </div>
      </section>
  );
}
