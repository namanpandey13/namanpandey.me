import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Top 25 songs of all time",
  description: "Top 25 songs of all time by Naman Pandey.",
  alternates: {
    canonical: "/lists/songs",
  },
};

export default function SongsListPage() {
  return (
    <PageShell eyebrow="Lists" title="Top 25 songs of all time.">
      <p className="max-w-2xl text-base leading-7 text-muted">
        Coming soon. Currently ranking.
      </p>
    </PageShell>
  );
}
