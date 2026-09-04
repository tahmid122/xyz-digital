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
  name: "Next.js",
  title: "Next.js – The React Framework for the Web",
  description:
    "Next.js is a React framework for building fast, scalable, and modern web applications.",
  url: "https://nextjs.org",
  locale: "en_US",
  siteName: "Next.js",

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
    name: "Vercel",
    url: "https://vercel.com",
    logo: "https://nextjs.org/icons/next.svg",
  },

  // Structured data
  socialLinks: [
    "https://twitter.com/vercel",
    "https://github.com/vercel/next.js",
  ],
};
