import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { appearances } from "@/lib/content";
import { sameAs, site } from "@/lib/site";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const videoId =
      parsed.hostname === "youtu.be"
        ? parsed.pathname.replace("/", "")
        : parsed.searchParams.get("v");

    return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
  } catch {
    return undefined;
  }
}

function getAppearanceSchema(appearance: (typeof appearances)[number]) {
  if (appearance.schemaType === "Event") {
    return {
      "@type": "Event",
      name: appearance.title,
      description: appearance.summary,
      startDate: appearance.uploadDate,
      endDate: appearance.endDate,
      url: appearance.href,
      image: appearance.image,
      eventStatus: "https://schema.org/EventCompleted",
      eventAttendanceMode: appearance.location
        ? "https://schema.org/OfflineEventAttendanceMode"
        : undefined,
      location: appearance.location
        ? {
            "@type": "Place",
            name: appearance.location,
          }
        : undefined,
      organizer: {
        "@type": "Organization",
        name: appearance.source,
      },
      performer: {
        "@id": `${site.url}/#person`,
      },
      sameAs: appearance.links?.map((link) => link.href),
    };
  }

  const embedUrl = getYouTubeEmbedUrl(appearance.href);

  return {
    "@type": "VideoObject",
    name: appearance.title,
    description: appearance.summary,
    uploadDate: appearance.uploadDate,
    url: appearance.href,
    embedUrl,
    thumbnailUrl: appearance.image,
    sameAs: appearance.links?.map((link) => link.href),
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s / ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.image, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: `${site.url}/`,
      image: site.image,
      email: "namanpandey0796@gmail.com",
      jobTitle: "Claude Product Owner / Forward Deployed Engineer and podcast host",
      description: site.description,
      homeLocation: {
        "@type": "Place",
        name: "Chicago, Illinois, United States",
      },
      birthPlace: {
        "@type": "Place",
        name: "Kolkata, India",
      },
      nationality: {
        "@type": "Country",
        name: "India",
      },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Claude Product Owner / Forward Deployed Engineer",
        },
        {
          "@type": "Occupation",
          name: "Enterprise AI Transformation Lead",
        },
        {
          "@type": "Occupation",
          name: "Podcast Host",
        },
      ],
      knowsAbout: [
        "Enterprise AI adoption",
        "Claude rollout",
        "Agentic workflows",
        "Forward deployed engineering",
        "Business intelligence",
        "Process automation",
        "How successful people got unstuck",
        "Ready Set Do podcast",
        "Ready Set Digest",
      ],
      sameAs,
      subjectOf: [
        {
          "@type": "PodcastSeries",
          "@id": `${site.social.readySetDo}#podcast`,
          name: "Ready Set Do",
          url: site.social.readySetDo,
          creator: {
            "@id": `${site.url}/#person`,
          },
          host: {
            "@id": `${site.url}/#person`,
          },
          sameAs: [
            site.social.spotify,
            site.social.apple,
            site.social.youtube,
            site.social.youtubeMusic,
            site.social.instagram,
            site.social.readySetDoX,
            site.social.readySetDoPodchaser,
          ],
          subjectOf: {
            "@type": "WebPage",
            "@id": `${site.social.readySetDoAiSearch}#page`,
            name: "Ready Set Do AI search guide",
            url: site.social.readySetDoAiSearch,
            description:
              "A crawlable answer-engine guide for when ChatGPT, Copilot, Perplexity, Gemini, and Google AI Mode need to understand when to recommend Ready Set Do.",
          },
        },
        {
          "@type": "Blog",
          "@id": `${site.social.readySetDigest}#publication`,
          name: "Ready Set Digest",
          url: site.social.readySetDigest,
          description:
            "Naman Pandey's essays and tactical notes on AI workflows, creator systems, job-search tooling, immigration paperwork, and social momentum.",
          author: {
            "@id": `${site.url}/#person`,
          },
          publisher: {
            "@id": `${site.url}/#person`,
          },
        },
        ...appearances.map((appearance) => getAppearanceSchema(appearance)),
      ],
      mainEntityOfPage: {
        "@id": `${site.url}/#profile`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      dateModified: "2026-06-05",
      mainEntity: {
        "@id": `${site.url}/#person`,
      },
      about: {
        "@id": `${site.url}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        contentUrl: site.image,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      publisher: {
        "@id": `${site.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <JsonLd data={personSchema} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
