import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description: `About Naman Pandey: ${site.role} at Cushman & Wakefield and host of Ready Set Do.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Short version."
      intro="A factual page. Short by design."
    >
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <p className="text-2xl font-semibold leading-tight tracking-[-0.045em] text-ink">
          Naman Pandey is a {site.role} at Cushman & Wakefield and hosts Ready
          Set Do after hours.
        </p>
        <div className="grid gap-7 text-base leading-8 text-muted">
          <p>
            My 9-5 is enterprise AI transformation: Claude pilots, agentic
            workflows, finance and ops use-cases, adoption, enablement, and the
            part where very smart people have to decide whether they trust the
            new tool enough to actually use it.
          </p>
          <p>
            Before that, I worked across automation, BI, Power Platform, SQL,
            Alteryx, Python, and process transformation at Cushman & Wakefield
            and PwC. Half engineering, half translation. That still feels like
            the job.
          </p>
          <p>
            My 5-9 is Ready Set Do, a podcast and YouTube channel where I
            interview successful people about how they got unstuck. Careers, AI
            at work, creator systems, moving countries, weird bets. Same
            question underneath: what did you do when the story was still messy?
          </p>
          <p>
            Purdue gave me the US chapter. PwC gave me the first professional
            version. The podcast gave me a public one.
          </p>
          <p>
            This site is the calmer version of my LinkedIn feed. Work, media,
            writing, taste, lists, questions, and a few ways to reach me without
            digging through posts.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
