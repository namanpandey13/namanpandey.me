import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Books that rewired me",
  description: "Books that rewired Naman Pandey.",
  alternates: {
    canonical: "/lists/books",
  },
};

export default function BooksListPage() {
  return (
    <PageShell eyebrow="Lists" title="Books that rewired me.">
      <p className="max-w-2xl text-base leading-7 text-muted">
        Coming soon. Currently ranking.
      </p>
    </PageShell>
  );
}
