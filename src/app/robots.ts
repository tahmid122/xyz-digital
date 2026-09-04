import type { MetadataRoute } from "next";
import { siteInfo } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/dashboard/", "/login/", "/register/", "/api/"],
    },

    sitemap: `${siteInfo.url}/sitemap.xml`,
  };
}
