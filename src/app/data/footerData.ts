interface FooterLink {
  name: string;
  icon: string;
  href: string;
}

interface FooterData {
  company: FooterLink[];
  contact: FooterLink[];
  discover: FooterLink[];
  social: FooterLink[];
  info: {
    logo: string;
    brandName: string;
    description: string;
    email: string;
    phone: string;
  };
}

export const footerData: FooterData = {
  info: {
    logo: "/logo/brand-white.svg",
    brandName: "Creativo.",
    description: "Creativo is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.",
    email: "hello@creativo.com",
    phone: "+1-800-123 4567"
  },
  company: [
    { name: "About", icon: "User", href: "/" },
    { name: "Services", icon: "UserRoundCog", href: "/" },
    { name: "Careers", icon: "Trophy", href: "/" },
    { name: "Blog", icon: "SquareUser", href: "/" },
    { name: "Pricing", icon: "HandCoins", href: "/" }
  ],
  contact: [
    { name: "Help", icon: "BadgeHelp", href: "/" },
    { name: "FAQs", icon: "FileQuestion", href: "/" },
    { name: "Press", icon: "SquarePower", href: "/" },
    { name: "Terms & Conditions", icon: "ReceiptText", href: "/" },
    { name: "Partners", icon: "Handshake", href: "/" }
  ],
  discover: [
    { name: "Affiliate", icon: "UserCheck", href: "/" },
    { name: "Partner Program", icon: "Handshake", href: "/" }
  ],
  social: [
    { name: "Twitter", icon: "/footer/twitter.svg", href: "/" },
    { name: "LinkedIn", icon: "/footer/linkedin.svg", href: "/" },
    { name: "Facebook", icon: "/footer/facebook.svg", href: "/" }
  ]
}; 