import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Email, LinkedIn, and booking routes for Naman Pandey.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Clear asks only."
      intro="Best routes: email for a clear ask, LinkedIn when the context lives in your profile."
    >
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="meta-label">Good fits</p>
          <ul className="mt-5 grid gap-4 text-base leading-7 text-muted">
            <li>AI-at-work conversations: Claude rollout, adoption, agentic workflows, and what survives contact with a real company.</li>
            <li>Podcast guest invitations about how successful people got unstuck.</li>
            <li>Panels or speaking where the audience needs practical context instead of another demo reel.</li>
            <li>Collaborations around Ready Set Do, creator systems, content operations, or useful internet experiments.</li>
          </ul>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {[
            {
              label: "Email",
              href: site.social.email,
              display: "namanpandey0796@gmail.com",
            },
            {
              label: "LinkedIn",
              href: site.social.linkedin,
              display: "linkedin.com/in/namanpandey0796",
            },
            {
              label: "Ready Set Do",
              href: site.social.readySetDo,
              display: "readysetdopodcast.com",
            },
            {
              label: "YouTube",
              href: site.social.youtube,
              display: "Ready Set Do on YouTube",
            },
            {
              label: "Spotify",
              href: site.social.spotify,
              display: "Ready Set Do on Spotify",
            },
            {
              label: "Apple Podcasts",
              href: site.social.apple,
              display: "Ready Set Do on Apple Podcasts",
            },
            {
              label: "Instagram",
              href: site.social.instagram,
              display: "@readysetdopodcast",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="grid grid-cols-[140px_1fr] gap-6 py-5 text-sm transition-colors duration-150 hover:bg-paper-strong/55"
            >
              <span className="meta-label">{item.label}</span>
              <span className="truncate text-muted">{item.display}</span>
            </a>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
