import Image from "next/image";
import { EntryList } from "@/components/entry-list";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { recordPicks, tasteRoomImages } from "@/lib/taste";

const recordsImage = tasteRoomImages.find((image) => image.src === "/taste/taste-records.jpg")!;

export const metadata = pageMetadata({
  title: "The Records",
  description:
    "Naman Pandey's album wall: eighteen records from Radiohead, Tame Impala, Queens of the Stone Age, Arctic Monkeys, and more.",
  path: "/taste/records",
});

const recordsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}/taste/records#collection`,
  url: absoluteUrl("/taste/records"),
  name: "The Records / Naman Pandey",
  description: metadata.description,
  isPartOf: {
    "@id": `${site.url}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: recordPicks.length,
    itemListElement: recordPicks.map((record, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MusicAlbum",
        name: record.album,
        byArtist: {
          "@type": "MusicGroup",
          name: record.artist,
        },
        description: record.note,
      },
    })),
  },
};

export default function TasteRecordsPage() {
  return (
    <PageShell
      eyebrow="Taste / The Records"
      title="The Records"
      intro="The album wall. Mostly the millennial alt canon — melancholy that doesn't wallow, confidence that doesn't announce itself."
    >
      <JsonLd id="taste-records-json-ld" data={recordsSchema} />
      <figure className="border-t border-line pt-5">
        <div className="group overflow-hidden border border-line bg-paper-strong">
          <Image
            src={recordsImage.src}
            alt="Naman Pandey's album cover wall, arranged as a grid above a desk"
            width={recordsImage.width}
            height={recordsImage.height}
            priority
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="aspect-[3/4] w-full object-contain grayscale transition duration-300 ease-out group-hover:grayscale-0"
          />
        </div>
        <figcaption className="mt-4 meta-label">Album wall</figcaption>
      </figure>

      <section className="mt-12 grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
        <p className="meta-label">Signal</p>
        <p className="max-w-3xl text-xl leading-9 tracking-[-0.03em] text-ink">
          The records I keep coming back to. The sound of people figuring
          themselves out in public.
        </p>
      </section>

      <section className="mt-16">
        <EntryList
          entries={recordPicks.map((record) => ({
            kicker: record.artist,
            title: record.album,
            text: record.note,
          }))}
        />
      </section>
    </PageShell>
  );
}
