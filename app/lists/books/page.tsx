import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Books that rewired me",
  description: "Books that rewired Naman Pandey.",
  path: "/lists/books",
});

export default function BooksListPage() {
  return (
    <PageShell eyebrow="Lists" title="Books that rewired me.">
      <p className="max-w-2xl text-base leading-7 text-muted">
        Coming soon. Currently ranking.
      </p>
    </PageShell>
  );
}
