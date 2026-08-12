import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  openGraphTitle?: string;
  openGraphType?: "profile" | "website";
};

export const openGraphImage = {
  url: site.image,
  width: site.imageWidth,
  height: site.imageHeight,
  alt: site.name,
};

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function displayTitle(title: string) {
  return title === site.name ? site.title : `${title} / ${site.name}`;
}

export function twitterMetadata(title: string, description: string): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [site.image],
    site: site.social.xHandle,
    creator: site.social.xHandle,
  };
}

export function pageMetadata({
  title,
  description,
  path,
  openGraphTitle,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const resolvedTitle = openGraphTitle ?? displayTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: openGraphType,
      url: absoluteUrl(path),
      siteName: site.name,
      title: resolvedTitle,
      description,
      images: [openGraphImage],
    },
    twitter: twitterMetadata(resolvedTitle, description),
  };
}
