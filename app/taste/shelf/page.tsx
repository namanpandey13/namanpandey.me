import Image from "next/image";
import Link from "next/link";
import { EntryList } from "@/components/entry-list";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { shelfBooks, shelfSections, tasteRoomImages } from "@/lib/taste";

const shelfImage = tasteRoomImages.find((image) => image.src === "/taste/taste-shelf.jpg")!;

export const metadata = pageMetadata({
  title: "The Shelf",
  description:
    "Naman Pandey's actual bookshelf: books on making things, thinking clearly, and sitting with what cannot be fixed.",
  path: "/taste/shelf",
});

const shelfSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}/taste/shelf#collection`,
  url: absoluteUrl("/taste/shelf"),
  name: "The Shelf / Naman Pandey",
  description: metadata.description,
  isPartOf: {
    "@id": `${site.url}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: shelfBooks.length,
    itemListElement: shelfBooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: {
          "@type": "Person",
          name: book.author,
        },
        description: book.note,
      },
    })),
  },
};

export default function TasteShelfPage() {
  return (
    <PageShell
      eyebrow="Taste / The Shelf"
      title="The Shelf"
      intro="Not a curated shelf — the actual one, phone photo and all."
    >
      <JsonLd id="taste-shelf-json-ld" data={shelfSchema} />
      <figure className="border-t border-line pt-5">
        <div className="group overflow-hidden border border-line bg-paper-strong">
          <Image
            src={shelfImage.src}
            alt="A phone photo of Naman Pandey's actual bookshelf"
            width={shelfImage.width}
            height={shelfImage.height}
            priority
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="aspect-[4/3] w-full object-contain grayscale transition duration-300 ease-out group-hover:grayscale-0"
          />
        </div>
        <figcaption className="mt-4 meta-label">Actual shelf</figcaption>
      </figure>

      <section className="mt-12 grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
        <p className="meta-label">Stacks</p>
        <div>
          <p className="max-w-3xl text-xl leading-9 tracking-[-0.03em] text-ink">
            Three stacks, really: how to make things, how to think, and how to
            sit with the stuff you can't fix.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Shelf is the room.{" "}
            <Link href="/lists/books" className="text-rule-link">
              Books that rewired me
            </Link>{" "}
            is the ranking.
          </p>
        </div>
      </section>

      <div className="mt-16 grid gap-16">
        {shelfSections.map((section) => (
          <section key={section.heading}>
            <div className="border-t border-line pt-8">
              <p className="meta-label">{section.heading}</p>
            </div>
            <div className="mt-6">
              <EntryList
                entries={section.books.map((book) => ({
                  kicker: book.author,
                  title: book.title,
                  text: book.note,
                }))}
              />
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
