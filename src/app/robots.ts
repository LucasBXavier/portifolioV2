import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lucasboareto.vercel.app/sitemap.xml",
    host: "https://lucasboareto.vercel.app",
  };
}
