import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, User, UserRoundCog, Trophy, SquareUser, HandCoins, BadgeHelp, FileQuestion, SquarePower, ReceiptText, Handshake, UserCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 pb-0 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            {/* Left Section - About */}
            <div className="md:max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <Image src="/logo/brand-white.svg" alt="logo" width={32} height={32} />
                <span className="text-2xl font-bold font-inter">Creativo.</span>
              </div>
              <p className="text-gray-500 font-inter mb-8">
                Creativo is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.
              </p>
              <div className="space-y-2">
                <p className="font-inter text-white font-medium flex items-center"> <Mail className="w-4 h-4 mr-2" /> hello@creativo.com</p>
                <p className="font-inter text-white font-medium flex items-center"> <Phone className="w-4 h-4 mr-2" /> +1-800-123 4567</p>
              </div>
            </div>

            {/* Right Navigation Columns */}
            <div className="grid grid-cols-3 gap-8 md:gap-16 lg:gap-24">
              {/* Company Column */}
              <div>
                <h4 className="font-bold font-inter text-xl mb-10">Company</h4>
                <div className="flex flex-col space-y-10">
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    About
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <UserRoundCog className="w-4 h-4 mr-2" />
                    Services
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <Trophy className="w-4 h-4 mr-2" />
                    Careers
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <SquareUser className="w-4 h-4 mr-2" />
                    Blog
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <HandCoins className="w-4 h-4 mr-2" />
                    Pricing
                  </Link>
                </div>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="font-bold font-inter text-xl mb-10">Contact</h4>
                <div className="flex flex-col space-y-10">
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <BadgeHelp className="w-4 h-4 mr-2" />
                    Help
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <FileQuestion className="w-4 h-4 mr-2" />
                    FAQs
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <SquarePower className="w-4 h-4 mr-2" />
                    Press
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <ReceiptText className="w-4 h-4 mr-2" />
                    Terms & Conditions
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <Handshake className="w-4 h-4 mr-2" />
                    Partners
                  </Link>
                </div>
              </div>

              {/* Discover Column */}
              <div>
                <h4 className="font-bold font-inter text-xl mb-10">Discover</h4>
                <div className="flex flex-col space-y-10">
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Affiliate
                  </Link>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter flex items-center">
                    <Handshake className="w-4 h-4 mr-2" />
                    Partner Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media - Full Width */}
        <div className="w-full border-t border-gray-800 mt-16">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 pt-6 pb-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-inter text-sm">
              Copyright © 2032 Creativo®. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/" className="bg-white rounded-md p-2 hover:opacity-80 transition-opacity flex items-center justify-center w-9 h-9">
                <Image src="/footer/twitter.svg" alt="Twitter" width={20} height={20} className="w-5 h-5" />
              </Link>
              <Link href="/" className="bg-white rounded-md p-2 hover:opacity-80 transition-opacity flex items-center justify-center w-9 h-9">
                <Image src="/footer/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5" />
              </Link>
              <Link href="/" className="bg-white rounded-md p-2 hover:opacity-80 transition-opacity flex items-center justify-center w-9 h-9">
                <Image src="/footer/facebook.svg" alt="Facebook" width={20} height={20} className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
}