export type NavItem = {
  label: string;
  href: string;
};

export type SectionKey =
  | "work"
  | "media"
  | "writing"
  | "taste"
  | "lists"
  | "questions"
  | "cv"
  | "contact";

export type IndexItem = {
  key: SectionKey;
  label: string;
  href: string;
  line: string;
};

export type Project = {
  title: string;
  kind: string;
  year: string;
  summary: string;
  role: string;
  proof?: string;
  href?: string;
};

export type Appearance = {
  title: string;
  source: string;
  date?: string;
  uploadDate?: string;
  endDate?: string;
  location?: string;
  schemaType?: "VideoObject" | "Event";
  summary: string;
  href: string;
  image: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type Writing = {
  title: string;
  date: string;
  publishedAt?: string;
  type: "note" | "field report" | "essay" | "opinion";
  summary: string;
  href?: string;
  slug?: string;
  description?: string;
  sections?: Array<{
    title: string;
    body: string[];
  }>;
};

export type Favorite = {
  title: string;
  category: "film" | "show" | "music" | "book" | "internet" | "interface";
  note: string;
};

export type Question = {
  question: string;
  context: string;
  date: string;
};

export type CvEntry = {
  label: string;
  title: string;
  detail: string;
};

export type ListEntry = {
  title: string;
  date: string;
  tag: string;
  description: string;
  href: string;
};
