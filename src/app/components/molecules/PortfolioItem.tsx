import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  dataAos?: string;
}

export default function PortfolioItem({ title, description, longDescription, imageUrl, dataAos }: PortfolioItemProps) {
  return (
    <div className="w-full group" data-aos={dataAos}>
      <div className="relative w-full overflow-hidden rounded-lg aspect-[4/3]">
        <Image 
          src={imageUrl} 
          alt={title} 
          width={400} 
          height={300} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
        <div className="absolute inset-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex items-center">
          <div className="text-white text-center w-full">
            <h3 className="text-lg md:text-xl font-inter font-bold mb-3">
              {title}
            </h3>
            <p className="text-sm md:text-base font-inter font-medium leading-relaxed">
              {longDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-base md:text-lg font-inter font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-sm md:text-base font-inter text-gray-600 mt-1.5">
          {description}
        </p>
      </div>
    </div>
  );
} 