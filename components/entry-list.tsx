import Link from "next/link";

type Entry = {
  kicker?: string;
  title: string;
  text: string;
  href?: string;
  meta?: string;
};

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {entries.map((entry, index) => {
        const content = (
          <article
            className="grid gap-3 py-6 transition-[background-color,transform] duration-200 ease-out md:grid-cols-[180px_1fr] md:gap-8"
            style={{ transitionDelay: `${index * 18}ms` }}
          >
            <div>
              {entry.kicker ? <p className="meta-label">{entry.kicker}</p> : null}
              {entry.meta ? (
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {entry.meta}
                </p>
              ) : null}
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.035em] text-ink">
                {entry.title}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-muted">
                {entry.text}
              </p>
            </div>
          </article>
        );

        if (!entry.href) {
          return <div key={entry.title}>{content}</div>;
        }

        const external = entry.href.startsWith("http");
        if (external) {
          return (
            <a
              key={entry.title}
              href={entry.href}
              className="group block transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-paper-strong/55 focus-visible:-translate-y-0.5"
            >
              {content}
            </a>
          );
        }

        return (
          <Link
            key={entry.title}
            href={entry.href}
            className="group block transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-paper-strong/55 focus-visible:-translate-y-0.5"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
