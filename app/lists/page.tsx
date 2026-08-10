import { EntryList } from "@/components/entry-list";
import { PageShell } from "@/components/page-shell";
import { lists } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Lists",
  description: "Ranked lists from Naman Pandey.",
  path: "/lists",
});

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
          title: item.title,
          text: item.description,
          href: item.href,
        }))}
      />
    </PageShell>
  );
}
