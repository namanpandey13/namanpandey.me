import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import {
  wallArtworks,
  wallSections,
  type TasteImage,
  type WallArtwork,
} from "@/lib/taste";

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
        image: absoluteUrl(artwork.sourceImage.src),
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
      <OriginalGallery items={wallArtworks} />

      <section className="mt-16 grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
        <p className="meta-label">Frame</p>
        <p className="max-w-3xl text-xl leading-9 tracking-[-0.03em] text-ink">
          This reads like a mood board for ambition before it pays out — a kid
          studying under a shadow he can't see yet, a man alone above the fog,
          haulers grinding with no audience. Same question I ask on the show:
          what did you do before the story got clean?
        </p>
      </section>

      <WallPhotoStrip />
    </PageShell>
  );
}

function OriginalGallery({ items }: { items: WallArtwork[] }) {
  return (
    <section className="border-y border-line py-8">
      <div className="grid gap-4 md:grid-cols-[220px_1fr]">
        <p className="meta-label">Originals</p>
        <div>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-ink">
            The wall without the glare.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            The clean files first. The apartment photos can do provenance duty
            later.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-flow-dense auto-rows-[320px] gap-3 sm:grid-cols-2 sm:auto-rows-[260px] lg:grid-cols-6 lg:auto-rows-[190px]">
        {items.map((artwork, index) => (
          <OriginalGalleryCard
            key={artwork.title}
            artwork={artwork}
            className={galleryCellClass(index)}
          />
        ))}
      </div>
    </section>
  );
}

function OriginalGalleryCard({
  artwork,
  className,
}: {
  artwork: WallArtwork;
  className: string;
}) {
  return (
    <figure
      tabIndex={0}
      className={`group relative overflow-hidden border border-line bg-paper-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${className}`}
    >
      <Image
        src={artwork.sourceImage.src}
        alt={artwork.sourceImage.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover grayscale transition duration-300 ease-out group-hover:grayscale-0 group-focus-visible:grayscale-0"
      />
      <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/90 via-ink/35 to-transparent p-4 opacity-100 transition duration-300 ease-out sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase leading-5 tracking-[0.17em] text-paper/70">
            {artwork.artist}
            {artwork.year ? ` / ${artwork.year}` : ""}
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-none tracking-[-0.055em] text-paper-strong">
            {artwork.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-paper/85">
            {artwork.note}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

function galleryCellClass(index: number) {
  const classes = [
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-3",
  ];

  return classes[index] ?? "lg:col-span-2";
}

function WallPhotoStrip() {
  return (
    <section className="mt-16">
      <div className="border-t border-line pt-8">
        <p className="meta-label">On the wall</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-ink">
          Where they actually live.
        </h2>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {wallSections.map((section) => (
          <TastePhoto key={section.image.src} image={section.image} />
        ))}
      </div>
    </section>
  );
}

function TastePhoto({ image }: { image: TasteImage }) {
  const frameClass = image.frame === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <figure>
      <div className="group overflow-hidden border border-line bg-paper-strong">
        <Image
          src={image.src}
          alt={`${image.title} on Naman Pandey's wall`}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
          className={`${frameClass} w-full object-contain grayscale transition duration-300 ease-out group-hover:grayscale-0`}
        />
      </div>
      <figcaption className="mt-4 meta-label">{image.title}</figcaption>
    </figure>
  );
}
