import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function PortfolioItem({ title, description, imageUrl }: PortfolioItemProps) {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={title} width={400} height={300} className="w-full h-auto object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="text-base md:text-lg font-inter">
          <span className="font-bold">{title}</span> - <span className="font-medium">{description}</span>
        </h3>
      </div>
    </div>
  );
} 