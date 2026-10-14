import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllWorkSlugs } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const workRoutes: MetadataRoute.Sitemap = getAllWorkSlugs().map((slug) => ({
    url: `${site.url}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...workRoutes,
  ];
}
