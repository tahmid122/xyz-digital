export interface SiteInfo {
  // Core
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  siteName: string;

  // Branding
  logo: string;
  icon: string;
  image: string;

  // Social
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;

  // SEO
  keywords?: string[];
  authors?: {
    name: string;
    url?: string;
  }[];
  creator?: string;
  publisher?: string;

  // Robots
  robots: {
    index: boolean;
    follow: boolean;
  };

  // Search engine verification
  verification?: {
    google?: string;
    bing?: string;
    yandex?: string;
  };

  // Organization
  organization?: {
    name: string;
    url: string;
    logo: string;
    email?: string;
    phone?: string;
  };

  // Social profiles / structured data
  socialLinks?: string[];
}

export const siteInfo: SiteInfo = {
  // Core
  name: "Xyz Digital",
  title: "Xyz Digital - Digital marketing services",
  description:
    "Xyz Digital is a digital marketing agency that provides a wide range of digital marketing services to businesses.",
  url: "https://xyz-digital.com",
  locale: "en_US",
  siteName: "Xyz Digital",

  // Branding
  logo: "https://nextjs.org/icons/next.svg",
  icon: "/favicon.ico",
  image: "https://nextjs.org/static/images/og-image.png",

  // Social
  twitter: "@vercel",

  // SEO
  keywords: [
    "Next.js",
    "React",
    "React framework",
    "JavaScript",
    "Web development",
  ],
  authors: [
    {
      name: "Vercel",
      url: "https://vercel.com",
    },
  ],
  creator: "Vercel",
  publisher: "Vercel",

  // Robots
  robots: {
    index: true,
    follow: true,
  },

  // Search engine verification
  verification: {
    google: "",
    bing: "",
  },

  // Organization
  organization: {
    name: "Xyz Digital",
    url: "https://xyz-digital.com",
    logo: "/favicon.ico",
  },

  // Structured data
  socialLinks: [
    "https://facebook.com/xyzdigital",
    "https://youtube.com/@xyzdigital",
  ],
};
