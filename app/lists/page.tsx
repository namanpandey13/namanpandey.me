import type { Metadata } from "next";
import { EntryList } from "@/components/entry-list";
import { PageShell } from "@/components/page-shell";
import { lists } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lists",
  description: "Ranked lists from Naman Pandey.",
  alternates: {
    canonical: "/lists",
  },
};

export default function ListsPage() {
  return (
    <PageShell
      eyebrow="Lists"
      title="Lists"
      intro="Ranked not recommended. These are mine, not for you."
    >
      <EntryList
        entries={lists.map((item) => ({
          kicker: item.tag,
          meta: item.date,
          title: item.title,
          text: item.description,
          href: item.href,
        }))}
      />
    </PageShell>
  );
}
