import { EntryList } from "@/components/entry-list";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { buildDigestArticleSchema, digest, getDigestArticles } from "@/lib/articles";
import { writing } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Writing",
  description:
    "Ready Set Digest articles, notes, field reports, short essays, and opinions from Naman Pandey.",
  path: "/writing",
});

function buildWritingPageSchema(articles: Awaited<ReturnType<typeof getDigestArticles>>) {
  const pageUrl = `${site.url}/writing`;
  const personId = `${site.url}/#person`;
  const itemListId = `${pageUrl}#ready-set-digest-item-list`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: "Writing by Naman Pandey",
        description: metadata.description,
        about: { "@id": personId },
        author: { "@id": personId },
        publisher: { "@id": personId },
        mainEntity: { "@id": itemListId },
        significantLink: [digest.url, site.social.readySetDo, site.social.readySetDoHost],
      },
      {
        "@type": "Blog",
        "@id": `${digest.url}#publication`,
        name: digest.name,
        url: digest.url,
        description: digest.description,
        author: { "@id": personId },
        publisher: { "@id": personId },
        sameAs: [digest.feedUrl, digest.archiveUrl],
      },
      {
        "@type": "ItemList",
        "@id": itemListId,
        name: "Ready Set Digest articles",
        numberOfItems: articles.length,
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: article.link,
          item: buildDigestArticleSchema(article),
        })),
      },
    ],
  };
}

export default async function WritingPage() {
  const digestArticles = await getDigestArticles();

  return (
    <>
      <JsonLd data={buildWritingPageSchema(digestArticles)} />
      <PageShell
        eyebrow="Writing"
        title="Ready Set Digest. Notes. Field reports."
        intro="The Substack is the live article archive. This page pulls it in, keeps the personal-site entity signal clean, and leaves each article canonical on Substack."
      >
        <section>
          <div className="grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
            <p className="meta-label">{digest.name}</p>
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-normal text-ink">
                Essays and build notes from the same person behind Ready Set Do.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                AI workflows, creator systems, job-search tooling, immigration paperwork, and the social moves that
                make people memorable. New posts appear here automatically from the public Substack feed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                <a className="text-rule-link" href={digest.url}>
                  Substack
                </a>
                <a className="text-rule-link" href={digest.archiveUrl}>
                  Archive
                </a>
                <a className="text-rule-link" href={digest.subscribeUrl}>
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <EntryList
              entries={digestArticles.map((article) => ({
                kicker: article.source,
                meta: article.dateLabel,
                title: article.title,
                text: article.description,
                href: article.link,
              }))}
            />
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
            <p className="meta-label">Local notes</p>
            <p className="max-w-2xl text-base leading-8 text-muted">
              A few shorter notes that live directly on this site.
            </p>
          </div>
          <EntryList
            entries={writing.map((item) => ({
              kicker: item.type,
              meta: item.date,
              title: item.title,
              text: item.summary,
              href: item.href,
            }))}
          />
        </section>
      </PageShell>
    </>
  );
}
