import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-[1180px] border-t border-line px-5 py-8 md:px-8">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm text-ink">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            Chicago. Kolkata.
            <br />
            Claude at the 9-5. Ready Set Do at the 5-9. LinkedIn is the
            cleanest route for a first hello.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="meta-label">Index</p>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit transition-colors duration-150 hover:text-ink focus-visible:text-ink focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="meta-label">Elsewhere</p>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <a className="footer-link" href={site.social.linkedin}>
                LinkedIn
              </a>
              <a className="footer-link" href={site.social.email}>
                Email
              </a>
              <a className="footer-link" href={site.social.youtube}>
                YouTube
              </a>
              <a className="footer-link" href={site.social.readySetDo}>
                Ready Set Do
              </a>
              <a className="footer-link" href={site.social.readySetDigest}>
                Ready Set Digest
              </a>
              <a className="footer-link" href={site.social.appearances}>
                Appearances
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
