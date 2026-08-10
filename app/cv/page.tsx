import { EntryList } from "@/components/entry-list";
import { PageShell } from "@/components/page-shell";
import { cvEntries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "CV",
  description: `A clean CV snapshot for Naman Pandey: ${site.role}, enterprise AI, automation, BI, Ready Set Do, and public work.`,
  path: "/cv",
});

export default function CvPage() {
  return (
    <PageShell
      eyebrow="CV"
      title="Plain version."
      intro="Clean, practical, printable. Less feed, more receipts."
    >
      <EntryList
        entries={cvEntries.map((entry) => ({
          kicker: entry.label,
          title: entry.title,
          text: entry.detail,
        }))}
      />
    </PageShell>
  );
}
