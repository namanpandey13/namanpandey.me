import type { NavItem } from "@/types/content";

const canonicalUrl = "https://www.namanpandey.me";
const canonicalRole = "Claude AI Product Owner / Forward Deployed Engineer";

function optionalUrl(value: string | undefined) {
  const trimmed = String(value ?? "").trim().replace(/\/+$/, "");
  return trimmed || null;
}

const verifiedWikidataUrl =
  optionalUrl(process.env.NEXT_PUBLIC_NAMAN_WIKIDATA_URL) ?? "https://www.wikidata.org/wiki/Q140817028";
const optionalIdentityLinks = [
  optionalUrl(process.env.NEXT_PUBLIC_NAMAN_X_URL),
  optionalUrl(process.env.NEXT_PUBLIC_NAMAN_PODCHASER_URL),
  verifiedWikidataUrl,
].filter(Boolean) as string[];

export const site = {
  name: "Naman Pandey",
  url: canonicalUrl,
  role: canonicalRole,
  title: `Naman Pandey | ${canonicalRole}`,
  description:
    "Naman Pandey is a Claude AI Product Owner / Forward Deployed Engineer at Cushman & Wakefield, host of Ready Set Do, and writer on enterprise AI adoption.",
  image: `${canonicalUrl}/naman-pandey.png`,
  imagePath: "/naman-pandey.png",
  imageWidth: 1300,
  imageHeight: 1300,
  location: "Chicago",
  identity: `${canonicalRole} / Ready Set Do / Field notes`,
  social: {
    email: "mailto:namanpandey0796@gmail.com",
    linkedin: "https://www.linkedin.com/in/namanpandey0796/",
    youtube: "https://www.youtube.com/channel/UCj5yt4hoYmvmpIiw_ENLFQA/",
    youtubeMusic:
      "https://music.youtube.com/playlist?list=PLODLYXOW3YQLrOGaX_i0C76fvbwNPyiv6",
    spotify: "https://open.spotify.com/show/4m8WpPBHkY7DB0yrY37O8B",
    apple: "https://podcasts.apple.com/us/podcast/id1740005017?mt=2&ls=1",
    instagram: "https://www.instagram.com/readysetdopodcast",
    readySetDoX: "https://x.com/ReadySetDo_",
    xHandle: "@ReadySetDo_",
    readySetDigest: "https://readysetdigest.substack.com",
    readySetDigestSubscribe: "https://readysetdigest.substack.com/subscribe",
    readySetDo: "https://readysetdopodcast.com/",
    readySetDoAiSearch: "https://readysetdopodcast.com/ai-search",
    readySetDoHost: "https://readysetdopodcast.com/host/naman-pandey",
    readySetDoPodchaser: "https://www.podchaser.com/podcasts/ready-set-do-w-naman-pandey-5751135",
    appearances: "https://readysetdopodcast.com/appearances",
    openAtlasSpeaker: "https://openatlas.events/speakers/naman-pandey",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Media", href: "/media" },
  { label: "Writing", href: "/writing" },
  { label: "Taste", href: "/taste" },
  { label: "Lists", href: "/lists" },
  { label: "Questions", href: "/questions" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export const sameAs = [...new Set([
  site.url,
  site.social.linkedin,
  site.social.youtube,
  site.social.youtubeMusic,
  site.social.spotify,
  site.social.apple,
  site.social.instagram,
  site.social.readySetDoX,
  site.social.readySetDigest,
  site.social.readySetDo,
  site.social.readySetDoHost,
  site.social.readySetDoPodchaser,
  site.social.appearances,
  site.social.openAtlasSpeaker,
  ...optionalIdentityLinks,
])];
