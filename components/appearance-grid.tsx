import Image from "next/image";
import type { Appearance } from "@/types/content";

export function AppearanceGrid({ appearances }: { appearances: Appearance[] }) {
  return (
    <div className="grid gap-7 md:grid-cols-2">
      {appearances.map((appearance, index) => (
        <article
          key={appearance.href}
          className="group transition-transform duration-200 ease-out hover:-translate-y-1"
          style={{ transitionDelay: `${index * 22}ms` }}
        >
          <a href={appearance.href} className="block" target="_blank" rel="noreferrer">
            <div className="overflow-hidden border border-line bg-paper-strong transition-colors duration-200 group-hover:border-accent">
              <Image
                src={appearance.image}
                alt=""
                width={960}
                height={540}
                className="aspect-video w-full scale-[1.01] object-cover grayscale transition duration-300 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
              />
            </div>
            <div className="mt-4 grid gap-2">
              <p className="meta-label">
                {appearance.source}
                {appearance.date ? ` / ${appearance.date}` : ""}
              </p>
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                {appearance.title}
              </h3>
              <p className="max-w-xl text-base leading-7 text-muted">
                {appearance.summary}
              </p>
            </div>
          </a>
          {appearance.links?.length ? (
            <div className="mt-3 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {appearance.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-line transition-colors duration-150 hover:border-ink hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
