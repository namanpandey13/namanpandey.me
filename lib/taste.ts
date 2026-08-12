export type TasteCollection = {
  title: string;
  href: string;
  description: string;
};

export type TasteImage = {
  title: string;
  label: string;
  src: string;
  width: number;
  height: number;
  frame?: "portrait" | "panorama";
};

export type WallArtwork = {
  title: string;
  artist: string;
  year?: string;
  note: string;
};

export type RecordPick = {
  artist: string;
  album: string;
  note: string;
};

export type ShelfBook = {
  title: string;
  author: string;
  note: string;
};

export const tasteCollections: TasteCollection[] = [
  {
    title: "The Wall",
    href: "/taste/wall",
    description: "Eight things I framed. A mood board for ambition before it pays out.",
  },
  {
    title: "The Records",
    href: "/taste/records",
    description: "The album wall. Melancholy that doesn't wallow.",
  },
  {
    title: "The Shelf",
    href: "/taste/shelf",
    description: "The actual bookshelf. How to make things, think, and sit with what you can't fix.",
  },
];

export const tasteSubpagePaths = tasteCollections.map((collection) => collection.href);

export const tasteRoomImages: TasteImage[] = [
  {
    title: "Napoleon studying",
    label: "wall",
    src: "/taste/taste-wall-napoleon.jpg",
    width: 2200,
    height: 1650,
    frame: "portrait",
  },
  {
    title: "Turner and Repin",
    label: "wall",
    src: "/taste/taste-wall-maritime.jpg",
    width: 2200,
    height: 1650,
    frame: "portrait",
  },
  {
    title: "Socrates, Wanderer, School of Athens",
    label: "wall",
    src: "/taste/taste-wall-philosophy.jpg",
    width: 2200,
    height: 1650,
    frame: "portrait",
  },
  {
    title: "Monet and Seurat",
    label: "wall",
    src: "/taste/taste-wall-impressionists.jpg",
    width: 2200,
    height: 1650,
  },
  {
    title: "The album wall",
    label: "records",
    src: "/taste/taste-records.jpg",
    width: 2200,
    height: 1650,
    frame: "portrait",
  },
  {
    title: "The bookshelf",
    label: "shelf",
    src: "/taste/taste-shelf.jpg",
    width: 2200,
    height: 1650,
  },
];

export const tasteArtImages: TasteImage[] = [
  {
    title: "The Death of Socrates",
    label: "Jacques-Louis David",
    src: "/taste/art-socrates-met.jpg",
    width: 2200,
    height: 1464,
  },
  {
    title: "Landscape with the Fall of Icarus",
    label: "Pieter Bruegel the Elder",
    src: "/taste/art-fall-of-icarus.jpg",
    width: 2200,
    height: 1453,
  },
  {
    title: "Wanderer above the Sea of Fog",
    label: "Caspar David Friedrich",
    src: "/taste/art-wanderer.jpg",
    width: 1718,
    height: 2200,
    frame: "portrait",
  },
  {
    title: "The Passing of Shah Jahan",
    label: "Abanindranath Tagore",
    src: "/taste/art-passing-of-shah-jahan.jpg",
    width: 1548,
    height: 2200,
    frame: "portrait",
  },
  {
    title: "Newton",
    label: "William Blake",
    src: "/taste/art-newton.jpg",
    width: 2200,
    height: 1692,
  },
  {
    title: "Bianjing city gate",
    label: "Qingming scroll detail",
    src: "/taste/art-bianjing-city-gate.jpeg",
    width: 2200,
    height: 1575,
  },
  {
    title: "The Great Wave off Kanagawa",
    label: "Hokusai",
    src: "/taste/art-great-wave.jpg",
    width: 2200,
    height: 1479,
  },
  {
    title: "The School of Athens",
    label: "Raphael",
    src: "/taste/art-school-of-athens.jpg",
    width: 2200,
    height: 1436,
  },
  {
    title: "Group of Three Girls",
    label: "Amrita Sher-Gil",
    src: "/taste/art-group-of-three-girls.jpg",
    width: 1598,
    height: 2200,
    frame: "portrait",
  },
  {
    title: "Barge Haulers on the Volga",
    label: "Ilya Repin",
    src: "/taste/art-volga-boatmen.jpg",
    width: 2200,
    height: 1017,
    frame: "panorama",
  },
  {
    title: "Las Meninas",
    label: "Diego Velazquez",
    src: "/taste/art-las-meninas.jpg",
    width: 1911,
    height: 2200,
    frame: "portrait",
  },
  {
    title: "Aristotle with a Bust of Homer",
    label: "Rembrandt",
    src: "/taste/art-aristotle-with-bust-of-homer.jpg",
    width: 2085,
    height: 2200,
    frame: "portrait",
  },
  {
    title: "The Death of Socrates",
    label: "Jacques-Louis David",
    src: "/taste/art-death-of-socrates.jpg",
    width: 2200,
    height: 1445,
  },
  {
    title: "Travelers Among Mountains and Streams",
    label: "Fan Kuan",
    src: "/taste/art-travelers-among-mountains.jpg",
    width: 1097,
    height: 2200,
    frame: "portrait",
  },
  {
    title: "The Fighting Temeraire",
    label: "J. M. W. Turner",
    src: "/taste/art-fighting-temeraire.jpg",
    width: 2200,
    height: 1634,
  },
];

export const wallSections: Array<{
  image: TasteImage;
  items: WallArtwork[];
}> = [
  {
    image: tasteRoomImages[0],
    items: [
      {
        title: "The Young Napoleon Bonaparte Studying",
        artist: "Job (Jacques Onfroy de Bréville)",
        year: "c.1908",
        note: "A kid at a desk in Brienne, the emperor's shadow already thrown on the wall. The shadow shows up before the man does. That's the whole bet.",
      },
    ],
  },
  {
    image: tasteRoomImages[2],
    items: [
      {
        title: "Wanderer above the Sea of Fog",
        artist: "Caspar David Friedrich",
        note: "Alone, above the weather, no idea what's under the fog. Correct posture for most of it.",
      },
      {
        title: "The Death of Socrates",
        artist: "Jacques-Louis David",
        note: "The cleanest argument that conviction costs something. He reaches for the cup mid-sentence.",
      },
      {
        title: "The School of Athens",
        artist: "Raphael",
        note: "Every idea worth having, in one room, arguing. The good kind of loud.",
      },
    ],
  },
  {
    image: tasteRoomImages[1],
    items: [
      {
        title: "Barge Haulers on the Volga",
        artist: "Ilya Repin",
        note: "The part of the work nobody frames. Repin framed it anyway. So did I.",
      },
      {
        title: "The Fighting Temeraire",
        artist: "J.M.W. Turner",
        note: "An old warship towed off to be scrapped at sunset. Progress, and what it costs. Turner knew.",
      },
    ],
  },
  {
    image: tasteRoomImages[3],
    items: [
      {
        title: "The Cliff Walk at Pourville",
        artist: "Claude Monet",
        note: "Two figures, a lot of wind, a good day. Proof I don't only hang the heavy stuff.",
      },
      {
        title: "A Sunday Afternoon on the Island of La Grande Jatte",
        artist: "Georges Seurat",
        note: "Made dot by dot over two years. The most patient flex in the building.",
      },
    ],
  },
];

export const wallArtworks = wallSections.flatMap((section) => section.items);

export const recordPicks: RecordPick[] = [
  {
    artist: "Radiohead",
    album: "OK Computer",
    note: "Saw the internet coming and wasn't happy about it.",
  },
  {
    artist: "Radiohead",
    album: "Kid A",
    note: "The follow-up that refused to repeat the trick.",
  },
  {
    artist: "Tame Impala",
    album: "InnerSpeaker",
    note: "One guy, a lot of reverb, talking himself into it.",
  },
  {
    artist: "Tame Impala",
    album: "Currents",
    note: "The same guy, five years later, talking himself into changing.",
  },
  {
    artist: "Queens of the Stone Age",
    album: "...Like Clockwork",
    note: "The comeback record about almost not making it. You can hear the almost.",
  },
  {
    artist: "Arctic Monkeys",
    album: "AM",
    note: "Confidence works better underplayed. Exhibit A.",
  },
  {
    artist: "The Smiths",
    album: "The Queen Is Dead",
    note: "Miserable and hilarious, usually in the same line.",
  },
  {
    artist: "Porcupine Tree",
    album: "Deadwing",
    note: "Prog for people who claim they don't like prog.",
  },
  {
    artist: "Nirvana",
    album: "Nevermind",
    note: "Still sounds like something breaking on purpose.",
  },
  {
    artist: "Muse",
    album: "Absolution",
    note: "Maximalist and unembarrassed. Turn it up.",
  },
  {
    artist: "Green Day",
    album: "American Idiot",
    note: "A concept album that earned the concept.",
  },
  {
    artist: "Green Day",
    album: "21st Century Breakdown",
    note: "The swing-for-the-fences sequel. Respect the ambition.",
  },
  {
    artist: "Oasis",
    album: "(What's the Story) Morning Glory?",
    note: "Swagger with the tunes to back it. Rare combo.",
  },
  {
    artist: "Daft Punk",
    album: "Random Access Memories",
    note: "Robots chasing something human. They caught it.",
  },
  {
    artist: "The Beatles",
    album: "Help!",
    note: "The one where the seams start to show. Better for it.",
  },
  {
    artist: "Belle & Sebastian",
    album: "Dear Catastrophe Waitress",
    note: "Twee with teeth. Sadder than it lets on.",
  },
  {
    artist: "Keane",
    album: "Strangeland",
    note: "Homesick piano-pop. Hits different once you've moved countries.",
  },
  {
    artist: "Poets of the Fall",
    album: "Carnival of Rust",
    note: "The deep cut on this wall. Earns its spot.",
  },
];

export const shelfSections: Array<{
  heading: string;
  books: ShelfBook[];
}> = [
  {
    heading: "Make",
    books: [
      {
        title: "Everybody Writes",
        author: "Ann Handley",
        note: "The reason my sentences got shorter.",
      },
      {
        title: "Essentialism",
        author: "Greg McKeown",
        note: "Permission to do less, better. I reread it when I overcommit. Often.",
      },
      {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        note: "Money is behavior, not math. This is the book that made that stick.",
      },
    ],
  },
  {
    heading: "Think",
    books: [
      {
        title: "On Government",
        author: "Cicero",
        note: "Two thousand years old, still the clearest thing written on power.",
      },
      {
        title: "How Propaganda Works",
        author: "Jason Stanley",
        note: "How language gets weaponized. Useful in an AI year.",
      },
      {
        title: "Be Here Now",
        author: "Ram Dass",
        note: "The counterweight to all the ambition on the other walls.",
      },
      {
        title: "The Teaching of Buddha",
        author: "Bukkyo Dendo Kyokai",
        note: "Hotel-drawer wisdom that turned out to be real.",
      },
    ],
  },
  {
    heading: "Sit with it",
    books: [
      {
        title: "The Road",
        author: "Cormac McCarthy",
        note: "A father, a boy, the end of everything.",
      },
      {
        title: "A Long Way Gone",
        author: "Ishmael Beah",
        note: "Puts your bad week in perspective. Permanently.",
      },
      {
        title: "Brain on Fire",
        author: "Susannah Cahalan",
        note: "How fast the self can go offline. Stayed with me.",
      },
      {
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        note: "Made me cry on a plane. No notes.",
      },
      {
        title: "A Life on Our Planet",
        author: "David Attenborough",
        note: "One man's receipts for a century of loss. Sober, not preachy.",
      },
    ],
  },
];

export const shelfBooks = shelfSections.flatMap((section) => section.books);
