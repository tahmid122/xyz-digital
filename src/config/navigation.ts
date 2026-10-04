export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface OfficeContactInfo {
  title: string;
  headOffice: string;
  subOffice: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "facebook" | "youtube";
}

export interface FooterConfig {
  services: {
    title: string;
    items: NavItem[];
  };
  company: {
    title: string;
    items: NavItem[];
  };
  support: {
    title: string;
    items: NavItem[];
  };
  office: OfficeContactInfo;
  socials: SocialLink[];
  copyright: {
    year: number;
    developer: string;
  };
}

export const footerConfig: FooterConfig = {
  services: {
    title: "OUR SERVICES",
    items: [
      { title: "Graphics", href: "/services/graphics" },
      { title: "Web & Software", href: "/services/web-software" },
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "Virtual Assistant", href: "/services/virtual-assistant" },
      { title: "Business & Legal", href: "/services/business-legal" },
      { title: "Video & Photography", href: "/services/video-photography" },
      { title: "Training Edu", href: "/services/training-edu" },
      { title: "Other Service", href: "/services/other" },
    ],
  },
  company: {
    title: "COMPANY",
    items: [
      { title: "About", href: "/about" },
      { title: "Company Blog", href: "/blog" },
      { title: "FAQ", href: "/faq" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  support: {
    title: "SUPPORT",
    items: [
      { title: "Contact Us", href: "/contact" },
      { title: "Submit a Ticket", href: "/support/ticket" },
      { title: "Services", href: "/services" },
      { title: "Team", href: "/team" },
    ],
  },
  office: {
    title: "DHAKA OFFICE",
    headOffice:
      "87 BNS Center, level 5, Suite 611, Sector 7, Uttara, Dhaka - 1230",
    subOffice: "Bakshiganj, Jamalpur, Bangladesh",
    phone: "01917462410",
    email: "info@xyzdigital.com",
  },
  socials: [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "facebook",
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: "youtube",
    },
  ],
  copyright: {
    year: 2026,
    developer: "Xyz Digital",
  },
};
