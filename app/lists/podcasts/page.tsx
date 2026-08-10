import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Top 10 podcast episodes I return to",
  description: "Top 10 podcast episodes Naman Pandey returns to.",
  path: "/lists/podcasts",
});

export default function PodcastsListPage() {
  return (
    <PageShell eyebrow="Lists" title="Top 10 podcast episodes I return to.">
      <p className="max-w-2xl text-base leading-7 text-muted">
        Coming soon. Currently ranking.
      </p>
    </PageShell>
  );
}
