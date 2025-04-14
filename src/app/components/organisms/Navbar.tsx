"use client"

import Link from "next/link"
import Image from "next/image"
import Button from "@/app/components/atoms/Button"
import { useState, useEffect } from "react"
import { X, Menu } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a nav link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-white py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <Image src="/logo/brand.svg" alt="logo" width={32} height={32} />
            <span className="text-2xl font-bold font-inter">Creativo.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 md:gap-10">
            <Link href="#home" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm font-medium">
              Home
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm font-medium">
              About Us
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm font-medium">
              Portfolio
            </Link>
            <Button text="GET IN TOUCH" style="bg-[#1F1D2B] text-white hover:bg-[#2d2b3d] px-6 py-3 md:px-8 md:py-3"/>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <X className="h-6 w-6" />
            ) : (
              // Hamburger Icon (≡)
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-4 py-4">
            <Link href="#home" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm font-medium px-2 py-2" onClick={closeMenu}>
              Home
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm font-medium px-2 py-2" onClick={closeMenu}>
              About Us
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm font-medium px-2 py-2" onClick={closeMenu}>
              Portfolio
            </Link>
            <div className="mt-2">
              <Button text="GET IN TOUCH" style="bg-[#1F1D2B] text-white hover:bg-[#2d2b3d] px-6 py-3 w-full"onClick={closeMenu}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};
