import Image from "next/image";
import Link from "next/link";
import { AppearanceGrid } from "@/components/appearance-grid";
import { EntryList } from "@/components/entry-list";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getDigestArticles } from "@/lib/articles";
import {
  appearances,
  favorites,
  indexItems,
  lists,
  projects,
  questions,
  writing,
} from "@/lib/content";
import { site } from "@/lib/site";

export const revalidate = 3600;

export default async function HomePage() {
  const proofRail = [...appearances.slice(0, 4), ...appearances.slice(0, 4)];
  const digestArticles = await getDigestArticles({ limit: 2 });

  return (
    <main className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
      <Reveal as="section" className="border-t border-line pt-10 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1fr_340px] md:items-end">
          <div>
            <p className="meta-label">{site.identity}</p>
            <h1 className="mt-7 max-w-5xl text-[clamp(5rem,18vw,15rem)] font-semibold leading-[0.78] tracking-[-0.09em] text-ink">
              Naman
              <br />
              Pandey
            </h1>
          </div>
          <div className="md:pb-3">
            <p className="max-w-[32rem] text-[1.35rem] leading-8 tracking-[-0.035em] text-ink">
              Data person by day. Podcast host the rest of the time.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              I work on enterprise data, automation, reporting, and the messy
              systems that keep teams honest. I also host Ready Set Do, where I
              interview successful people about how they got unstuck.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              If LinkedIn brought you here, start with the CV or Work pages. If
              the podcast brought you here, Media has the show, appearances, and
              the outside rooms where I keep borrowing microphones.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal
        as="section"
        delay={90}
        className="mt-16 grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]"
      >
        <p className="meta-label">Index</p>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {indexItems.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <span className="block text-2xl font-semibold tracking-[-0.05em] text-ink group-hover:text-accent">
                {item.label}
              </span>
              <span className="mt-1 block text-sm leading-6 text-muted">
                {item.line}
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="mt-20 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start"
      >
        <div className="sticky top-8 hidden md:block">
          <div className="overflow-hidden border border-line bg-paper-strong">
            <Image
              src={site.image}
              alt="Naman Pandey"
              width={800}
              height={1000}
              priority
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="grid gap-16">
          <section>
            <SectionHeading
              eyebrow="Selected work"
              title="Work I can point to."
              intro="A short list. Real links. No mood board required."
            />
            <div className="mt-8">
              <EntryList
                entries={projects.map((project) => ({
                  kicker: project.kind,
                  meta: project.year,
                  title: project.title,
                  text: `${project.summary} ${project.proof ?? ""}`.trim(),
                  href: project.href,
                }))}
              />
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Writing"
              title="Writing"
              intro="Notes when the thought survives more than a day."
            />
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              Published when the thought can stand up without me in the room.
            </p>
            <div className="mt-8">
              <EntryList
                entries={[
                  ...digestArticles.map((article) => ({
                    kicker: article.source,
                    meta: article.dateLabel,
                    title: article.title,
                    text: article.description,
                    href: article.link,
                  })),
                  ...writing.slice(0, 2).map((item) => ({
                    kicker: item.type,
                    meta: item.date,
                    title: item.title,
                    text: item.summary,
                    href: item.href,
                  })),
                ]}
              />
            </div>
            <div className="mt-8">
              <Link href="/writing" className="text-rule-link">
                Open writing
              </Link>
            </div>
          </section>
        </div>
      </Reveal>

      <Reveal as="section" className="mt-24">
        <SectionHeading
          eyebrow="Media"
          title="Media"
          intro="The show, the guest spots, and the outside rooms where the questions keep following me."
        />
        <div className="mt-8 overflow-hidden border-y border-line py-3">
          <div className="motion-rail" aria-hidden="true">
            {proofRail.map((appearance, index) => (
              <a
                key={`${appearance.href}-${index}`}
                href={appearance.href}
                className="motion-rail-item font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
                target="_blank"
                rel="noreferrer"
              >
                {appearance.source} / {appearance.date ?? "appearance"}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <AppearanceGrid appearances={appearances.slice(0, 4)} />
        </div>
        <div className="mt-8">
          <Link href="/media" className="text-rule-link">
            Open media
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="mt-24">
        <SectionHeading
          eyebrow="Taste"
          title="Taste"
          intro="Some things stay useful long after I first liked them."
        />
        <p className="mt-3 max-w-xl text-base leading-7 text-muted">
          A throughline runs under all of this. I am drawn to things that are
          honest about what they are. Cold rooms. Ugly software. Confident bands
          who underplay it. That is the taste.
        </p>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {favorites.slice(0, 4).map((item) => (
            <article key={item.title} className="py-5">
              <p className="meta-label">{item.category}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.note}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mt-24">
        <SectionHeading
          eyebrow="Lists"
          title="Lists"
          intro="Ranked not recommended. These are mine, not for you."
        />
        <div className="mt-8">
          <EntryList
            entries={lists.map((item) => ({
              kicker: item.tag,
              meta: item.date,
              title: item.title,
              text: item.description,
              href: item.href,
            }))}
          />
        </div>
      </Reveal>

      <Reveal as="section" className="mt-24">
        <SectionHeading
          eyebrow="Questions"
          title="Questions"
          intro="Things I keep coming back to while working."
        />
        <div className="mt-8">
          <EntryList
            entries={questions.slice(0, 4).map((item) => ({
              meta: item.date,
              title: item.question,
              text: item.context,
            }))}
          />
        </div>
      </Reveal>

      <Reveal as="section" className="mt-24 border-t border-line pt-10">
        <SectionHeading
          eyebrow="End"
          title="One ask"
          intro="If you only do one thing after landing here, subscribe to Ready Set Do. That is where the conversations live."
        />
        <div className="mt-8">
          <Link
            href={site.social.readySetDo}
            className="inline-flex border border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
          >
            Subscribe on your platform
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
