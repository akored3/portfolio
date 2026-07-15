import type { MetadataRoute } from "next";
import { productionOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${productionOrigin}/sitemap.xml`,
  };
}
