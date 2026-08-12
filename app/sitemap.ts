import type { MetadataRoute } from "next";
import { getDigestArticles } from "@/lib/articles";
import { lists, writingPages } from "@/lib/content";
import { navItems, site } from "@/lib/site";
import { tasteSubpagePaths } from "@/lib/taste";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date("2026-06-05");
  const latestDigestArticle = (await getDigestArticles({ limit: 1 }))[0];
  const writingModified = latestDigestArticle?.publishedAt ? new Date(latestDigestArticle.publishedAt) : lastModified;

  const navPages: MetadataRoute.Sitemap = navItems.map((item) => ({
    url: `${site.url}${item.href === "/" ? "/" : item.href}`,
    lastModified: item.href === "/writing" ? writingModified : lastModified,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));

  const listPages = lists.map((item) => ({
    url: `${site.url}${item.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tasteSubpages = tasteSubpagePaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.62,
  }));

  const writingDetailPages = writingPages.map((item) => ({
    url: `${site.url}/writing/${item.slug}`,
    lastModified: item.publishedAt ? new Date(item.publishedAt) : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...navPages, ...writingDetailPages, ...listPages, ...tasteSubpages];
}
