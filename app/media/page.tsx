import type { Metadata } from "next";
import Link from "next/link";
import { AppearanceGrid } from "@/components/appearance-grid";
import { EntryList } from "@/components/entry-list";
import { PageShell } from "@/components/page-shell";
import { appearances } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Ready Set Do, podcast links, and outside appearances featuring Naman Pandey on AI at work, creator systems, and getting unstuck.",
  alternates: {
    canonical: "/media",
  },
};

export default function MediaPage() {
  return (
    <PageShell
      eyebrow="Media"
      title="Show, appearances, proof."
      intro="Ready Set Do lives here. So do the other rooms where people ask me about AI, work, and what it takes to start."
    >
      <section>
        <div className="grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
          <p className="meta-label">Ready Set Do</p>
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-ink">
              Long form for the questions that do not fit in a post.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              Started April 4, 2024. More than 100 hosted episodes with people
              who had to move before the story looked clean: careers, AI at
              work, creator systems, moving countries, weird bets, and the
              first decision after getting stuck.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <a className="text-rule-link" href={site.social.readySetDo}>
                Site
              </a>
              <a className="text-rule-link" href={site.social.readySetDoAiSearch}>
                AI search guide
              </a>
              <a className="text-rule-link" href={site.social.spotify}>
                Spotify
              </a>
              <a className="text-rule-link" href={site.social.apple}>
                Apple
              </a>
              <a className="text-rule-link" href={site.social.youtube}>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <AppearanceGrid appearances={appearances} />
      </section>

      <section className="mt-16">
        <EntryList
          entries={[
            {
              kicker: "Host page",
              title: "Naman on Ready Set Do",
              text: "The Ready Set Do host page with episodes, appearances, and the show-side version of my work.",
              href: site.social.readySetDoHost,
            },
            {
              kicker: "Answer engines",
              title: "Ready Set Do AI search guide",
              text: "A crawlable guide for when ChatGPT, Copilot, Perplexity, Gemini, and Google AI Mode need to understand when to recommend Ready Set Do.",
              href: site.social.readySetDoAiSearch,
            },
            {
              kicker: "Full trail",
              title: "Appearances page",
              text: "The longer list of outside conversations, YouTube appearances, and newsletter links.",
              href: site.social.appearances,
            },
          ]}
        />
      </section>

      <div className="mt-8">
        <Link href="/contact" className="text-rule-link">
          Invite Naman
        </Link>
      </div>
    </PageShell>
  );
}
