import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, User, UserRoundCog, Trophy, SquareUser, HandCoins, BadgeHelp, FileQuestion, SquarePower, ReceiptText, Handshake, UserCheck } from "lucide-react";
import { footerData } from "@/app/data/footerData";

export default function Footer() {
    return (
        <footer className="py-20 pb-0 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-800"></div>
          
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

        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            {/* Left Section - About */}
            <div className="md:max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <Image src={footerData.info.logo} alt="logo" width={32} height={32} />
                <span className="text-2xl font-bold font-inter">{footerData.info.brandName}</span>
              </div>
              <p className="text-gray-500 font-inter mb-8">
                {footerData.info.description}
              </p>
              <div className="space-y-2">
                <p className="font-inter text-white font-medium flex items-center"> <Mail className="w-4 h-4 mr-2" /> {footerData.info.email}</p>
                <p className="font-inter text-white font-medium flex items-center"> <Phone className="w-4 h-4 mr-2" /> {footerData.info.phone}</p>
              </div>
            </div>

            {/* Right Navigation Columns */}
            <div className="grid grid-cols-3 gap-8 md:gap-16 lg:gap-24">
              {/* Company Column */}
              <div>
                <h4 className="font-bold font-inter text-xl mb-10 text-white">Company</h4>
                <div className="flex flex-col space-y-10">
                  {footerData.company.map((item, index) => (
                    <Link key={index} href={item.href} className="text-gray-400 hover:text-white transition-colors font-inter flex items-center group">
                      {item.icon === "User" && <User className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "UserRoundCog" && <UserRoundCog className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "Trophy" && <Trophy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "SquareUser" && <SquareUser className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "HandCoins" && <HandCoins className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="font-bold font-inter text-xl mb-10 text-white">Contact</h4>
                <div className="flex flex-col space-y-10">
                  {footerData.contact.map((item, index) => (
                    <Link key={index} href={item.href} className="text-gray-400 hover:text-white transition-colors font-inter flex items-center group">
                      {item.icon === "BadgeHelp" && <BadgeHelp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "FileQuestion" && <FileQuestion className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "SquarePower" && <SquarePower className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "ReceiptText" && <ReceiptText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "Handshake" && <Handshake className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Discover Column */}
              <div>
                <h4 className="font-bold font-inter text-xl mb-10 text-white">Discover</h4>
                <div className="flex flex-col space-y-10">
                  {footerData.discover.map((item, index) => (
                    <Link key={index} href={item.href} className="text-gray-400 hover:text-white transition-colors font-inter flex items-center group">
                      {item.icon === "UserCheck" && <UserCheck className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.icon === "Handshake" && <Handshake className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                      {item.name}
                    </Link>
                  ))}
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
              {footerData.social.map((item, index) => (
                <Link key={index} href={item.href} className="bg-white rounded-md p-2 hover:opacity-80 transition-opacity flex items-center justify-center w-9 h-9 group">
                  <Image src={item.icon} alt={item.name} width={20} height={20} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
}