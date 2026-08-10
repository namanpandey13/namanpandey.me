import { XMLParser } from "fast-xml-parser";
import { site } from "@/lib/site";

export type DigestArticle = {
  title: string;
  link: string;
  description: string;
  publishedAt: string | null;
  dateLabel: string;
  author: string;
  source: string;
  image: string | null;
};

export const digest = {
  name: "Ready Set Digest",
  url: site.social.readySetDigest,
  feedUrl: `${site.social.readySetDigest}/feed`,
  archiveUrl: `${site.social.readySetDigest}/archive`,
  subscribeUrl: `${site.social.readySetDigest}/subscribe`,
  description:
    "Naman Pandey's essays and tactical notes on AI workflows, creator systems, job-search tooling, immigration paperwork, and the small moves that make people memorable.",
  revalidateSeconds: 3600,
};

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
});

const fallbackDigestArticles = [
  {
    title: "Skip the Stranger Phase",
    link: "https://readysetdigest.substack.com/p/skip-the-stranger-phase",
    description: "What a pickleball court in New Jersey taught me about why nobody remembers you.",
    publishedAt: "2026-08-01T15:29:37.000Z",
  },
  {
    title: "How to make Claude Code or Codex find relevant jobs, tailor resumes, and draft personalized recruiter emails",
    link: "https://readysetdigest.substack.com/p/the-honest-job-search-agent-how-to",
    description:
      "A contact-first job-search wizard for people who do not know Git, do not want fake resume claims, and do not want an agent blindly applying to jobs.",
    publishedAt: "2026-05-18T13:40:47.000Z",
  },
  {
    title: "How to run a local podcast clip pipeline with Claude Code or Codex",
    link: "https://readysetdigest.substack.com/p/how-to-run-a-local-podcast-clip-pipeline",
    description:
      "Raw episode in. Captioned clips out. A dummy-proof setup for people who do not know Git and do not want another editing subscription.",
    publishedAt: "2026-05-18T13:30:34.000Z",
  },
  {
    title: "How to Fix a USCIS EAD Card Typo or Date Error: The 5-Step Process I Wish I Had",
    link: "https://readysetdigest.substack.com/p/how-to-fix-a-uscis-ead-card-typo",
    description:
      "This guide is based on USCIS public guidance as of May 10, 2026. Always verify the current address, form instructions, and process before mailing anything.",
    publishedAt: "2026-05-10T22:31:42.000Z",
  },
  {
    title: "The Codex Reel Pipeline",
    link: "https://readysetdigest.substack.com/p/the-codex-reel-pipeline",
    description:
      "Turn a folder of phone clips into a posted Reel with one prompt. Every prompt, every config, the bash script.",
    publishedAt: "2026-04-30T16:42:08.000Z",
  },
] satisfies Array<Omit<DigestArticle, "dateLabel" | "author" | "source" | "image">>;

function valueToText(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "object" && "#text" in value) {
    return valueToText((value as { "#text"?: unknown })["#text"]);
  }
  return "";
}

function decodeBasicEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function cleanText(value: unknown): string {
  return decodeBasicEntities(valueToText(value))
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function parsePublishedAt(value: unknown): string | null {
  const parsed = new Date(valueToText(value));
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

export function formatArticleDate(value: string | null): string {
  if (!value) return "Undated";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Undated";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

function getEnclosureImage(item: Record<string, unknown>): string | null {
  const enclosure = toArray(item.enclosure).find((entry) => {
    const type = valueToText((entry as Record<string, unknown>)?.["@_type"]);
    return type.startsWith("image/");
  }) as Record<string, unknown> | undefined;

  return valueToText(enclosure?.["@_url"]) || null;
}

function normalizeArticle(item: Record<string, unknown>): DigestArticle | null {
  const title = cleanText(item.title);
  const link = cleanText(item.link || item.guid);
  const description = cleanText(item.description || item["content:encoded"]);
  const publishedAt = parsePublishedAt(item.pubDate);

  if (!title || !link) return null;

  return {
    title,
    link,
    description,
    publishedAt,
    dateLabel: formatArticleDate(publishedAt),
    author: cleanText(item["dc:creator"]) || site.name,
    source: digest.name,
    image: getEnclosureImage(item),
  };
}

function normalizeArticles(items: Array<Record<string, unknown>>): DigestArticle[] {
  const seen = new Map<string, DigestArticle>();

  for (const item of items) {
    const article = normalizeArticle(item);
    if (article) seen.set(article.link, article);
  }

  return Array.from(seen.values()).sort((a, b) => {
    const left = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const right = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return right - left;
  });
}

function fallbackArticles(): DigestArticle[] {
  return fallbackDigestArticles.map((article) => ({
    ...article,
    dateLabel: formatArticleDate(article.publishedAt),
    author: site.name,
    source: digest.name,
    image: null,
  }));
}

export async function getDigestArticles({ limit }: { limit?: number } = {}): Promise<DigestArticle[]> {
  try {
    const response = await fetch(digest.feedUrl, {
      next: { revalidate: digest.revalidateSeconds },
    });

    if (!response.ok) {
      throw new Error(`Ready Set Digest feed returned ${response.status}`);
    }

    const xml = await response.text();
    const parsed = xmlParser.parse(xml) as {
      rss?: { channel?: { item?: Record<string, unknown> | Array<Record<string, unknown>> } };
    };
    const articles = normalizeArticles(toArray(parsed.rss?.channel?.item));

    if (articles.length > 0) {
      return typeof limit === "number" ? articles.slice(0, limit) : articles;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.warn(`Using fallback Ready Set Digest articles: ${message}`);
  }

  const articles = fallbackArticles();
  return typeof limit === "number" ? articles.slice(0, limit) : articles;
}

export function buildDigestArticleSchema(article: DigestArticle) {
  const personId = `${site.url}/#person`;

  return {
    "@type": "Article",
    "@id": `${article.link}#article`,
    headline: article.title,
    description: article.description,
    url: article.link,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: `${site.url}/`,
    },
    publisher: {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: `${site.url}/`,
    },
    isPartOf: {
      "@id": `${digest.url}#publication`,
    },
    image: article.image ? [article.image] : undefined,
  };
}
