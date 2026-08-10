import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Top 25 songs of all time",
  description: "Top 25 songs of all time by Naman Pandey.",
  path: "/lists/songs",
});

export default function SongsListPage() {
  return (
    <PageShell eyebrow="Lists" title="Top 25 songs of all time.">
      <p className="max-w-2xl text-base leading-7 text-muted">
        Coming soon. Currently ranking.
      </p>
    </PageShell>
  );
}
