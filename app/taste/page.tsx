import Image from "next/image";
import { EntryList } from "@/components/entry-list";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { tasteArtImages, tasteCollections, tasteRoomImages, type TasteImage } from "@/lib/taste";

const throughline =
  "A throughline runs under all of this: I'm drawn to the lone figure before the story got clean. The kid studying under a shadow he can't see yet. The wanderer above the fog. The band that almost didn't make the record. Honest about what it is, and caught mid-climb. Same question I ask people on the show.";

const looseEnds = [
  {
    title: "Breaking Bad",
    category: "show",
    note: "Still the best argument for consequences. Nobody gets away clean.",
  },
  {
    title: "Arctic Monkeys",
    category: "music",
    note: "A reminder that confidence works better when it is underplayed.",
  },
  {
    title: "Windows 2000",
    category: "interface",
    note: "Ugly in the right way. Clear buttons. Clear edges. No hand-holding.",
  },
];

export const metadata = pageMetadata({
  title: "Taste",
  description:
    "Naman Pandey's taste hub for framed art, records, books, and loose picks around ambition before it pays out.",
  path: "/taste",
});

export default function TastePage() {
  return (
    <PageShell
      eyebrow="Taste"
      title="Taste"
      intro="Ranked, framed, or stuck to a wall. These are mine, not for you."
    >
      <section className="grid gap-8 border-y border-line py-8 md:grid-cols-[220px_1fr]">
        <p className="meta-label">Throughline</p>
        <p className="max-w-3xl text-xl leading-9 tracking-[-0.03em] text-ink">
          {throughline}
        </p>
      </section>

      <section className="mt-16">
        <EntryList
          entries={tasteCollections.map((collection) => ({
            kicker: "collection",
            title: collection.title,
            text: collection.description,
            href: collection.href,
          }))}
        />
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold tracking-[-0.06em] text-ink">
          Loose ends
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {looseEnds.map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
              <p className="meta-label">{item.category}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <TasteImageSection
        className="mt-20"
        eyebrow="Wall / records / shelf"
        title="The room."
        images={tasteRoomImages}
      />

      <TasteImageSection
        className="mt-20"
        eyebrow="Source art"
        title="The originals."
        images={tasteArtImages}
      />
    </PageShell>
  );
}

function TasteImageSection({
  className,
  eyebrow,
  title,
  images,
}: {
  className?: string;
  eyebrow: string;
  title: string;
  images: TasteImage[];
}) {
  return (
    <section className={className}>
      <div className="border-t border-line pt-8">
        <p className="meta-label">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-ink">
          {title}
        </h2>
      </div>
      <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <TasteImageCard key={`${image.src}-${image.title}`} image={image} />
        ))}
      </div>
    </section>
  );
}

function TasteImageCard({ image }: { image: TasteImage }) {
  const frameClass =
    image.frame === "portrait"
      ? "aspect-[3/4]"
      : image.frame === "panorama"
        ? "aspect-[16/9]"
        : "aspect-[4/3]";

  return (
    <article className="border-t border-line pt-5">
      <div className="group overflow-hidden border border-line bg-paper-strong">
        <Image
          src={image.src}
          alt={image.title}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className={`${frameClass} w-full object-contain grayscale transition duration-300 ease-out group-hover:grayscale-0`}
        />
      </div>
      <p className="mt-4 meta-label">{image.label}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-ink">
        {image.title}
      </h3>
    </article>
  );
}
