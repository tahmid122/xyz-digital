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

export interface TopBarConfig {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  contact: {
    label: string;
    phone: string;
  };
  socials: SocialLink[];
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

export const mainNavItems: NavItem[] = [
  { title: "Graphics", href: "#" },
  { title: "Web & Software", href: "#" },
  { title: "Digital Marketing", href: "#" },
  { title: "Virtual Assistant", href: "#" },
  { title: "Business & Legal", href: "#" },
  { title: "Video & Photography", href: "#" },
  { title: "Training Edu", href: "#" },
  { title: "Other Service", href: "#" },
];

export const topBarConfig: TopBarConfig = {
  logo: {
    src: "/logo/logo.png",
    alt: "Xyz Digital",
    href: "#",
  },
  contact: {
    label: "Call Us:",
    phone: "01917462410",
  },
  socials: [
    {
      name: "Facebook",
      href: "#",
      icon: "facebook",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "youtube",
    },
  ],
};

export const footerConfig: FooterConfig = {
  services: {
    title: "OUR SERVICES",
    items: mainNavItems,
  },
  company: {
    title: "COMPANY",
    items: [
      { title: "About", href: "#" },
      { title: "Company Blog", href: "#" },
      { title: "FAQ", href: "#" },
      { title: "Contact us", href: "#" },
    ],
  },
  support: {
    title: "SUPPORT",
    items: [
      { title: "Contact Us", href: "#" },
      { title: "Submit a Ticket", href: "#" },
      { title: "Services", href: "#" },
      { title: "Team", href: "#" },
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
      href: "#",
      icon: "facebook",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "youtube",
    },
  ],
  copyright: {
    year: 2026,
    developer: "Xyz Digital",
  },
};
