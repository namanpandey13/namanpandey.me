import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { favorites } from "@/lib/content";

export const metadata: Metadata = {
  title: "Taste",
  description:
    "Films, shows, music, books, interfaces, and internet things Naman Pandey keeps returning to.",
  alternates: {
    canonical: "/taste",
  },
};

export default function TastePage() {
  return (
    <PageShell
      eyebrow="Taste"
      title="Things I keep close."
      intro="Taste gets equal status. Otherwise the work gets dull."
    >
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((item) => (
          <article key={item.title} className="border-t border-line pt-5">
            <p className="meta-label">{item.category}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-ink">
              {item.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">{item.note}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
