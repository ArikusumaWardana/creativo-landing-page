'use client'
import { useState } from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  isOpen?: boolean;
}

export default function ServiceItem({ title, description, isOpen = false }: ServiceItemProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="border-b border-white/50">
      <button
        className="w-full py-6 flex items-center justify-between text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl md:text-2xl font-inter font-medium text-left">{title}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-40 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-white/80 text-base md:text-lg font-inter">
          {description}
        </p>
      </div>
    </div>
  );
} 