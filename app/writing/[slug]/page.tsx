import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { getWritingBySlug, writingPages } from "@/lib/content";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return writingPages.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWritingBySlug(slug);

  if (!item) {
    return {
      title: "Writing",
    };
  }

  const path = `/writing/${item.slug}`;
  const description = item.description ?? item.summary;

  return {
    title: item.title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title: item.title,
      description,
      publishedTime: item.publishedAt,
      authors: [site.name],
      images: [{ url: site.image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description,
      images: [site.image],
    },
  };
}

export default async function WritingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getWritingBySlug(slug);

  if (!item) {
    notFound();
  }

  const pageUrl = `${site.url}/writing/${item.slug}`;
  const description = item.description ?? item.summary;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: item.title,
    description,
    datePublished: item.publishedAt ?? item.date,
    dateModified: item.publishedAt ?? item.date,
    author: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: pageUrl,
    image: site.image,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageShell eyebrow={item.type} title={item.title} intro={description}>
        <article className="mx-auto max-w-3xl border-y border-line py-10">
          <p className="meta-label">{item.date}</p>
          <div className="mt-8 grid gap-11">
            {item.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.055em] text-ink">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-5 text-lg leading-8 text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </PageShell>
    </>
  );
}
