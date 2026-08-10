import type {
  Appearance,
  CvEntry,
  Favorite,
  IndexItem,
  ListEntry,
  Project,
  Question,
  Writing,
} from "@/types/content";
import { site } from "@/lib/site";

export const indexItems: IndexItem[] = [
  {
    key: "work",
    label: "Work",
    href: "/work",
    line: "Claude rollout, automation, BI, and systems that have to work on Monday.",
  },
  {
    key: "media",
    label: "Media",
    href: "/media",
    line: "Ready Set Do, guest spots, and the longer conversations.",
  },
  {
    key: "writing",
    label: "Writing",
    href: "/writing",
    line: "Ready Set Digest articles, field notes, and essays when something keeps bothering me.",
  },
  {
    key: "taste",
    label: "Taste",
    href: "/taste",
    line: "Films, songs, books, interfaces, and internet things I keep returning to.",
  },
  {
    key: "lists",
    label: "Lists",
    href: "/lists",
    line: "Ranked pages I will probably argue with later.",
  },
  {
    key: "questions",
    label: "Questions",
    href: "/questions",
    line: "Stuff I am still turning over.",
  },
  {
    key: "cv",
    label: "CV",
    href: "/cv",
    line: "Plain, practical, printable.",
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
    line: "Where to reach me.",
  },
];

export const projects: Project[] = [
  {
    title: "Enterprise data and automation work",
    kind: "Professional work",
    year: "current",
    summary:
      "Claude rollout, agentic workflow pilots, Power BI, Azure Data Lake, SQL, process automation, and reporting work for finance, ops, and brokerage teams. Current day job at Cushman & Wakefield.",
    role: `${site.role}, Enterprise AI.`,
    proof:
      "Fortune 500 AI adoption, business-unit pilots, 10M+ row reporting, SOX workflow mapping, AI contract abstraction, and recurring executive reporting.",
  },
  {
    title: "Ready Set Do",
    kind: "Podcast / media",
    year: "2024-present",
    summary:
      "A podcast and YouTube channel where I interview successful people about how they got unstuck. Careers, AI at work, creator systems, moving countries, weird bets, and the first move before the story got clean.",
    role: "Host, researcher, producer, editor, distributor.",
    href: site.social.readySetDo,
  },
  {
    title: "Ready Set Do archive",
    kind: "Publishing system",
    year: "ongoing",
    summary:
      "The system behind the show: episode pages, guest pages, topic pages, platform links, clips, transcripts, and the unglamorous structure that keeps a weekly show from turning into chaos.",
    role: "Information architecture, publishing workflow, clips, transcripts, and search surfaces.",
    href: `${site.social.readySetDo}episodes`,
  },
  {
    title: "Appearances",
    kind: "Guest appearances",
    year: "2024-present",
    summary:
      "Other people's shows, newsletters, and channels. Different room, same questions: AI at work, creator systems, career moves, and what people actually do when they are stuck.",
    role: "Guest, speaker, source.",
    href: site.social.appearances,
  },
];

export const appearances: Appearance[] = [
  {
    title: "The OpenClaw Guide no PM is Talking About",
    source: "Aakash Gupta",
    date: "Mar 17, 2026",
    uploadDate: "2026-03-17T12:00:00-05:00",
    summary:
      "AI product work, PM judgment, and what changes when the tools keep moving.",
    href: "https://www.youtube.com/watch?v=YLXRg078EKs",
    image: "https://i.ytimg.com/vi_webp/YLXRg078EKs/maxresdefault.webp",
    links: [
      {
        label: "Newsletter post",
        href: "https://www.news.aakashg.com/p/naman-pandey2-podcast",
      },
      {
        label: "Wave podcast app",
        href: "https://pod.wave.co/podcast/product-growth-podcast/the-complete-guide-to-openclaw-for-pms-exclusive",
      },
      {
        label: "Medium article",
        href: "https://aakashgupta.medium.com/openclaw-has-245-000-github-stars-and-zero-real-guides-for-pms-so-i-built-one-60bdf82928d8",
      },
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/posts/aagupta_openclaw-is-the-next-claude-code-for-pms-activity-7440121525279813633-cRvQ",
      },
      {
        label: "Companion page",
        href: "https://www.aakashg.com/naman-pandey-podcast/",
      },
    ],
  },
  {
    title: "How I Upleveled My 9 to 5 With YouTubing 5 to 9",
    source: "Beyond Grad",
    date: "Mar 13, 2026",
    uploadDate: "2026-03-13T12:00:00-05:00",
    summary:
      "The day job, the after-hours work, and the point where the second thing starts getting real.",
    href: "https://www.youtube.com/watch?v=gJ67_gBRvu0",
    image: "https://i.ytimg.com/vi/gJ67_gBRvu0/hqdefault.jpg",
  },
  {
    title: "These 3 AI Browsers make Chrome Feel useless",
    source: "Aakash Gupta",
    date: "Jan 29, 2026",
    uploadDate: "2026-01-29T12:00:00-06:00",
    summary:
      "A conversation about AI browsers and the habits they quietly change.",
    href: "https://www.youtube.com/watch?v=vJvSPW9_0Hw",
    image: "https://i.ytimg.com/vi/vJvSPW9_0Hw/maxresdefault.jpg",
    links: [
      {
        label: "Newsletter post",
        href: "https://www.news.aakashg.com/p/naman-pandey-podcast",
      },
      {
        label: "Castbox episode page",
        href: "https://castbox.fm/episode/AI-Agent-Browsers%3A-Should-you-use-one--%7C-ChatGPT-Atlas-vs-Perplexity-Comet-vs-Arc-Dia-id6257506-id897946061",
      },
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/posts/aagupta_ai-agent-browsers-are-under-hyped-for-pms-activity-7422787954600853504-ly5o",
      },
    ],
  },
  {
    title: "Can AI Help You Land a Job in 2025?",
    source: "Aish Gupta",
    date: "Sep 11, 2025",
    uploadDate: "2025-09-11T12:00:00-05:00",
    summary:
      "Job search, AI tools, and where people still overestimate prompts.",
    href: "https://www.youtube.com/watch?v=vpJOYp7Kn50",
    image: "https://i.ytimg.com/vi/vpJOYp7Kn50/maxresdefault.jpg",
  },
  {
    title: "Naman Pandey | Open Atlas Summit 2025",
    source: "Open Atlas Summit",
    date: "Aug 15-16, 2025",
    uploadDate: "2025-08-15T09:00:00-07:00",
    endDate: "2025-08-16T18:00:00-07:00",
    location: "India Community Centre, Milpitas, California",
    schemaType: "Event",
    summary:
      "Speaker and moderator profile for Open Atlas Summit 2025, connecting enterprise AI, migration, and Ready Set Do to an independent event page.",
    href: site.social.openAtlasSpeaker,
    image: site.image,
    links: [
      {
        label: "Speakers page",
        href: "https://openatlas.events/speakers",
      },
      {
        label: "LinkedIn announcement",
        href: "https://www.linkedin.com/posts/namanpandey0796_oas-openatlassummit2025-unshackled-activity-7353804727098232832-tWUF",
      },
    ],
  },
  {
    title: "Journey from Calcutta to Chicago",
    source: "Pathfinders",
    date: "Oct 3, 2024",
    uploadDate: "2024-10-03T12:00:00-05:00",
    summary:
      "Ambition, doubt, movement, and the life before the outside version looks impressive.",
    href: "https://www.youtube.com/watch?v=Lh2JnM9Xxt8",
    image: "https://i.ytimg.com/vi/Lh2JnM9Xxt8/maxresdefault.jpg",
    links: [
      {
        label: "Podcast app page",
        href: "https://player.captivate.fm/episode/a0141985-1325-4d49-800d-48f8a1aa8161",
      },
    ],
  },
];

export const writing: Writing[] = [
  {
    title: "AI after the demo",
    date: "Jul 2026",
    publishedAt: "2026-07-03",
    type: "note",
    summary:
      "The demo is usually the least interesting part. I care what changes on Monday.",
    href: "/writing/ai-after-the-demo",
    slug: "ai-after-the-demo",
    description:
      "A field note from Naman Pandey on why enterprise AI work starts after the demo: adoption, trust, workflow fit, and what changes on Monday.",
    sections: [
      {
        title: "The demo is the easiest room",
        body: [
          "A good AI demo is supposed to feel unfair. The model answers fast, the screen looks clean, and nobody has had time to ask how the thing will survive a normal Monday.",
          "That is why I do not trust the demo as the main unit of progress. The useful question is what changes when the person leaves the meeting, opens their real inbox, finds the messy spreadsheet, and has to decide whether this new workflow is worth interrupting the old one.",
        ],
      },
      {
        title: "Adoption is a trust problem",
        body: [
          "Most enterprise AI work is not blocked by imagination. People can imagine summaries, agents, copilots, contract review, reporting help, and workflow automation very quickly. The harder part is whether they trust the system enough to move a piece of real work through it.",
          "That means the product work is half technical and half social. You need the model behavior, the data boundaries, the handoff, the escalation path, and the person in the business who can say, yes, this saves time without making us reckless.",
        ],
      },
      {
        title: "What I look for",
        body: [
          "I care about use cases where the before-and-after is boring enough to be real: a report arrives faster, a contract abstraction gets reviewed with clearer evidence, a process map stops living in someone's head, a team uses the same language for the same workflow.",
          "The best signal is not applause in the demo. It is repeat usage after the novelty is gone.",
        ],
      },
    ],
  },
  {
    title: "Enterprise AI adoption is not a tooling problem",
    date: "Jul 2026",
    publishedAt: "2026-07-03",
    type: "field report",
    summary:
      "Claude rollout work is really about workflows, confidence, and the path from pilot to habit.",
    href: "/writing/enterprise-ai-adoption-is-not-a-tooling-problem",
    slug: "enterprise-ai-adoption-is-not-a-tooling-problem",
    description:
      "Naman Pandey on enterprise AI adoption, Claude rollout work, agentic workflows, enablement, and why tools only matter after a team changes behavior.",
    sections: [
      {
        title: "The tool is not the transformation",
        body: [
          "The easiest mistake in enterprise AI is to treat tool access as the finish line. Access matters, but access is not adoption. A license can be provisioned in a day. A habit can take months.",
          "In my work around Claude rollout, agentic workflow pilots, automation, reporting, and enablement, the real question is almost always the same: what part of the business process is now allowed to move differently?",
        ],
      },
      {
        title: "Pilots need a landing strip",
        body: [
          "A pilot is useful only if it has somewhere to land. That means a clear owner, a before-state, a success measure, a review loop, and a decision about what happens if the pilot works.",
          "Without that, teams collect demos like souvenirs. The work feels exciting, then it evaporates because nobody translated the excitement into a durable operating change.",
        ],
      },
      {
        title: "The practical middle",
        body: [
          "The middle is where the work lives: prompt patterns, workflow design, data limits, approval paths, training, office hours, dashboards, and the awkward conversations where people admit which parts of the process are actually broken.",
          "That is the part I like. Not because it is glamorous. Because it is where AI stops being a poster and starts becoming infrastructure.",
        ],
      },
    ],
  },
  {
    title: "Moving changes the math",
    date: "Apr 2026",
    publishedAt: "2026-04-15",
    type: "opinion",
    summary:
      "Advice sounds different when paperwork, distance, and time pressure are in the room.",
    href: "/writing/moving-changes-the-math",
    slug: "moving-changes-the-math",
    description:
      "A personal note from Naman Pandey on ambition, immigration, time pressure, and why advice changes when paperwork is part of the room.",
    sections: [
      {
        title: "Advice has a hidden location",
        body: [
          "Most advice pretends it is location-neutral. Work hard. Take risks. Build in public. Quit when you know. Move fast. The sentence sounds clean until paperwork walks into the room.",
          "Moving countries changes the math because ambition stops being only about desire. It becomes timing, status, money, distance, family, and the quiet background calculation of what happens if a plan fails on the wrong week.",
        ],
      },
      {
        title: "Risk is not evenly priced",
        body: [
          "The same career risk costs different people different amounts. For one person, a failed bet is an awkward story. For another, it is a visa clock, a flight, a lease, a family conversation, or the feeling that every decision has a conversion rate attached to it.",
          "That does not mean people should become timid. It means the advice has to become more honest. The move still matters. So does the runway.",
        ],
      },
      {
        title: "Why I keep coming back to this",
        body: [
          "Ready Set Do keeps circling this question because so many guests are building lives across borders, industries, and versions of themselves. The polished version of ambition misses the logistics. The logistics are where the actual courage is.",
          "A better question than 'should I take the leap?' is: what would make the leap survivable enough that I can actually take it?",
        ],
      },
    ],
  },
  {
    title: "What changed after 100 episodes",
    date: "Apr 2026",
    type: "field report",
    summary:
      "What doing the same thing 100 times made obvious. Mostly unglamorous. Mostly useful.",
    href: `${site.social.readySetDo}episodes/how-to-publish-100-podcast-episodes-10-lessons-i-wish-i-knew-on-day-1-ep-100`,
  },
];

export const writingPages = writing.filter(
  (item): item is Writing & { slug: string; sections: NonNullable<Writing["sections"]> } =>
    Boolean(item.slug && item.sections?.length),
);

export function getWritingBySlug(slug: string) {
  return writingPages.find((item) => item.slug === slug);
}

export const favorites: Favorite[] = [
  {
    title: "Breaking Bad",
    category: "show",
    note: "Still the best argument for consequences. Nobody gets away clean.",
  },
  {
    title: "Severance",
    category: "show",
    note: "Cold rooms. Bad lighting. People pretending the weird thing is normal.",
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
  {
    title: "Old forum threads",
    category: "internet",
    note: "Messy people solving real problems in public.",
  },
  {
    title: "Sharp thumbnails",
    category: "internet",
    note: "A tiny promise. Usually broken. Sometimes perfect.",
  },
];

export const questions: Question[] = [
  {
    question: "What happens when making things gets cheap?",
    context:
      "I keep thinking about taste, distribution, and the new ways people will fake being good.",
    date: "Apr 2026",
  },
  {
    question: "How much does moving countries change ambition?",
    context:
      "The normal advice breaks when time, status, and distance are part of the decision.",
    date: "Apr 2026",
  },
  {
    question: "What part of creator work is actually work?",
    context:
      "Editing, packaging, follow-up, distribution. The visible part gets too much credit.",
    date: "Apr 2026",
  },
  {
    question: "When does starting publicly become performing?",
    context:
      "I like public work. I do not like watching people turn every attempt into a costume.",
    date: "Apr 2026",
  },
];

export const lists: ListEntry[] = [
  {
    title: "Top 25 films of all time.",
    tag: "ranking",
    date: "Apr 2026",
    description: "Ranked. Argued. Occasionally embarrassing.",
    href: "/lists/films",
  },
  {
    title: "Top 25 songs of all time.",
    tag: "ranking",
    date: "Apr 2026",
    description: "The ones that keep earning their place back after every listen.",
    href: "/lists/songs",
  },
  {
    title: "Top 10 podcast episodes I return to.",
    tag: "ranking",
    date: "Apr 2026",
    description:
      "Not mine. Other people's. The ones I have rewound at least three times.",
    href: "/lists/podcasts",
  },
  {
    title: "Books that rewired me.",
    tag: "ranking",
    date: "Apr 2026",
    description: "A short list. Mostly nonfiction. A few cheats.",
    href: "/lists/books",
  },
];

export const cvEntries: CvEntry[] = [
  {
    label: "Current",
    title: `${site.role}, Cushman & Wakefield`,
    detail:
      "Greater Chicago Area. Running Claude rollout work across business units: pilots, agentic workflows, adoption, enablement, and the practical bridge between Big Tech AI demos and corporate reality.",
  },
  {
    label: "Also current",
    title: "Enterprise Data and AI Transformation, Cushman & Wakefield",
    detail:
      "Power BI, Azure, SQL, process analytics, contract abstraction, reporting systems, and the unglamorous data plumbing teams only notice when it breaks.",
  },
  {
    label: "Before",
    title: "Senior Transformation Analyst, Intelligent Automation",
    detail:
      "Led automation analytics, citizen-development reporting, sprint metrics, SQL models, and infrastructure migration work. Practical process work. Fewer posters, more uptime.",
  },
  {
    label: "Earlier",
    title: "PwC, Material Handling Systems",
    detail:
      "Tax analytics, VBA and Python automation, blockchain proof-of-concept work, project reporting, Power Apps, SharePoint, and Azure migration.",
  },
  {
    label: "Education",
    title: "Purdue University; PES Institute of Technology",
    detail:
      "MS in Engineering Management from Purdue. BE in Information Science and Engineering from PESIT, Bangalore.",
  },
  {
    label: "Tools",
    title: "Claude, Claude Code, MCP, Python, SQL, Power BI, Azure, Alteryx, Power Platform",
    detail:
      "The stack is mostly practical: AI adoption, agentic workflows, reporting, automation, data modeling, dashboards, process analytics, and workflows people actually have to use.",
  },
  {
    label: "Public work",
    title: "Ready Set Do",
    detail:
      "Started April 4, 2024. More than 100 hosted episodes across podcast and YouTube. Long-form conversations on how successful people got unstuck.",
  },
  {
    label: "Recognition",
    title: "Purdue Analytics finalist, student leadership, CNR Rao Merit Scholarship",
    detail:
      "A few receipts from school and early work. Useful context, not the headline.",
  },
];
