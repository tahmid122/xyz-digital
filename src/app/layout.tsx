import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReduxProvider } from "@/store/provider";
import { siteInfo } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),

  title: {
    default: siteInfo.title,
    template: `%s | ${siteInfo.name}`,
  },

  description: siteInfo.description,

  keywords: siteInfo.keywords,

  authors: siteInfo.authors,

  creator: siteInfo.creator,

  publisher: siteInfo.publisher,

  applicationName: siteInfo.name,

  alternates: {
    canonical: "/",
  },

  robots: siteInfo.robots,

  openGraph: {
    type: "website",
    locale: siteInfo.locale,
    url: siteInfo.url,
    siteName: siteInfo.siteName,
    title: siteInfo.title,
    description: siteInfo.description,
    images: [
      {
        url: siteInfo.image,
        width: 1200,
        height: 630,
        alt: siteInfo.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteInfo.title,
    description: siteInfo.description,
    images: [siteInfo.image],
    creator: siteInfo.twitter,
  },

  icons: {
    icon: siteInfo.icon,
  },

  verification: siteInfo.verification,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteInfo.organization?.name,
    url: siteInfo.url,
    logo: siteInfo.organization?.logo,
    sameAs: siteInfo.socialLinks,
  };
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
