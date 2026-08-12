import Image from "next/image";
import { EntryList } from "@/components/entry-list";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { wallArtworks, wallSections, type TasteImage } from "@/lib/taste";

export const metadata = pageMetadata({
  title: "The Wall",
  description:
    "The eight framed artworks on Naman Pandey's wall: ambition before it pays out, from Napoleon studying to the Wanderer above the fog.",
  path: "/taste/wall",
});

const wallSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}/taste/wall#collection`,
  url: absoluteUrl("/taste/wall"),
  name: "The Wall / Naman Pandey",
  description: metadata.description,
  isPartOf: {
    "@id": `${site.url}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: wallArtworks.length,
    itemListElement: wallArtworks.map((artwork, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VisualArtwork",
        name: artwork.title,
        creator: {
          "@type": "Person",
          name: artwork.artist,
        },
        description: artwork.note,
      },
    })),
  },
};

export default function TasteWallPage() {
  return (
    <PageShell
      eyebrow="Taste / The Wall"
      title="The Wall"
      intro="The wall I actually stare at. Every piece is a person mid-climb, before the summit."
    >
      <JsonLd id="taste-wall-json-ld" data={wallSchema} />
      <section className="grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
        <p className="meta-label">Frame</p>
        <p className="max-w-3xl text-xl leading-9 tracking-[-0.03em] text-ink">
          This reads like a mood board for ambition before it pays out — a kid
          studying under a shadow he can't see yet, a man alone above the fog,
          haulers grinding with no audience. Same question I ask on the show:
          what did you do before the story got clean?
        </p>
      </section>

      <div className="mt-16 grid gap-16">
        {wallSections.map((section) => (
          <section key={section.image.src} className="grid gap-8">
            <TastePhoto image={section.image} />
            <EntryList
              entries={section.items.map((item) => ({
                kicker: item.artist,
                meta: item.year,
                title: item.title,
                text: item.note,
              }))}
            />
          </section>
        ))}
      </div>
    </PageShell>
  );
}

function TastePhoto({ image }: { image: TasteImage }) {
  const frameClass = image.frame === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <figure className="border-t border-line pt-5">
      <div className="group overflow-hidden border border-line bg-paper-strong">
        <Image
          src={image.src}
          alt={`${image.title} on Naman Pandey's wall`}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 70vw, 100vw"
          className={`${frameClass} w-full object-contain grayscale transition duration-300 ease-out group-hover:grayscale-0`}
        />
      </div>
      <figcaption className="mt-4 meta-label">{image.title}</figcaption>
    </figure>
  );
}
