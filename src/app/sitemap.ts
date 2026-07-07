import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/portfolio";
import { fetchPosts } from "@/sanity/fetchPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPosts();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${siteUrl}/posts/${p.slug}`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
