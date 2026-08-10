import { EntryList } from "@/components/entry-list";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Work",
  description: `Selected work by Naman Pandey across ${site.role}, enterprise AI, automation, Ready Set Do, and creator systems.`,
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="Work"
      title="Shipped things."
      intro="Claude rollout, enterprise AI, automation, and the systems behind the show."
    >
      <EntryList
        entries={projects.map((project) => ({
          kicker: project.kind,
          meta: project.year,
          title: project.title,
          text: `${project.summary} Role: ${project.role} ${project.proof ?? ""}`.trim(),
          href: project.href,
        }))}
      />
    </PageShell>
  );
}
