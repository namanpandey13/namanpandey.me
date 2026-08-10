import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1180px] items-start justify-between gap-8 px-5 py-7 md:px-8">
      <Link href="/" className="group leading-none" aria-label="Naman Pandey home">
        <span className="block text-[15px] font-semibold tracking-[-0.02em] text-ink">
          {site.name}
        </span>
        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {site.location}
        </span>
      </Link>

      <nav
        aria-label="Primary"
        className="flex max-w-[720px] flex-wrap justify-end gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors duration-150 hover:text-ink focus-visible:text-ink focus-visible:outline-none"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
