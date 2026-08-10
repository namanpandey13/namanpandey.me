import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
      <header className="border-t border-line pt-12 md:pt-16">
        {eyebrow ? <p className="meta-label">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl text-[clamp(3.4rem,11vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-ink">
          {title}
        </h1>
        {intro ? (
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{intro}</p>
        ) : null}
      </header>
      <div className="mt-14 md:mt-20">{children}</div>
    </main>
  );
}
