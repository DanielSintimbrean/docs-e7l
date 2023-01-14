export const SITE = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://www.rackslabs.com/LogoBlack.png",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "rackslabs",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Racks-Labs/ERC721-Linkable/tree/main`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "docsearch",
  appId: "RS4W43LBEE",
  apiKey: "830dafc5b4de8615fa954646600feb19",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "Section Header": [
      { text: "Introduction", link: "en/introduction" },
      { text: "Page 2", link: "en/page-2" },
      { text: "Page 3", link: "en/page-3" },
    ],
    "Another Section": [{ text: "Page 4", link: "en/page-4" }],
  },
};
