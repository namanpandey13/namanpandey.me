import type { Metadata } from "next";
import { EntryList } from "@/components/entry-list";
import { PageShell } from "@/components/page-shell";
import { questions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Questions",
  description:
    "Open loops, current curiosities, and questions Naman Pandey is thinking about.",
  alternates: {
    canonical: "/questions",
  },
};

export default function QuestionsPage() {
  return (
    <PageShell
      eyebrow="Questions"
      title="Unclosed tabs."
      intro="Alive pages should have loose ends."
    >
      <EntryList
        entries={questions.map((item) => ({
          title: item.question,
          text: item.context,
        }))}
      />
    </PageShell>
  );
}
