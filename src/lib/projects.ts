export type ProjectImage = {
  file: string;
  alt: string;
};

export type BuiltItem = {
  text: string;
  images?: ProjectImage[];
  cols?: 1 | 2 | 3;
};

export const colsMap = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3" };

export type Project = {
  number: string;
  slug: string;
  name: string;
  type: string;
  year: string;
  overview: string;
  overviewImage?: ProjectImage[];
  bullets?: string[];
  built?: BuiltItem[];
  builtImage?: {
    images: ProjectImage[];
    cols?: 1 | 2 | 3;
  };
  tech: string[];
  team: string;
  isGallery?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "resonine",
    name: "Resonine",
    type: "Creative Platform · Web",
    year: "2026-Present",
    overview:
      "Multi-brand creative platform for music festivals and cultural experiences in Indonesia, powering sub-brands Soundrenaline, Primaria, Magnumotion, Mahakaraoke, and Route 360°.",
    overviewImage: [
      {
        file: "/assets/resonine/overview.jpg",
        alt: "Resonine home page on desktop and mobile",
      },
    ],
    bullets: [
      "Built all core pages: homepage, about, upcoming events, news/articles, contact, FAQ",
      "Implemented JSON-LD structured data across event, article, and organization schemas for SEO",
      "Performance optimization in progress — Lighthouse audit completed, improvements ongoing",
    ],
    built: [
      {
        text: "Built core pages (homepage, about, upcoming events, news/articles, contact, FAQ) using Next.js App Router",
        images: [
          {
            file: "/assets/resonine/after-point1.jpg",
            alt: "Showing page Upcoming Event, News, and FAQ",
          },
        ],
      },
      {
        text: "SEO infrastructure — JSON-LD structured data, configured robots metadata and HTTP headers via next.config.js for indexing control",
      },
      {
        text: "Consumed REST API endpoints using an existing data-fetching pattern to render dynamic content — events, articles, and sub-brand data — across pages",
      },
      {
        text: "Built reusable components shared and themed across multiple event sub-brands",
      },
    ],
    builtImage: {
      images: [
        {
          file: "/assets/resonine/after-built-1.jpg",
          alt: "Different theming on mobile menu",
        },
        {
          file: "/assets/resonine/after-built-2.jpg",
          alt: "Different theming on event card",
        },
      ],
      cols: 2,
    },
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "REST API"],
    team: "Frontend developer at Weekend Inc., collaborating with design, backend, and content teams across dev/QA/production environments.",
  },
  {
    number: "02",
    slug: "soundrenaline",
    name: "Soundrenaline",
    type: "Music Festival Platform · Web",
    year: "Nov 2025-Present",
    overview:
      "Indonesia's largest music and arts festival digital platform, built as the flagship sub-brand of Resonine.",
    overviewImage: [
      {
        file: "/assets/soundrenaline/overview.jpg",
        alt: "Soundrenaline home page on desktop and mobile",
      },
    ],
    bullets: [
      "Developed lineup/rundown pages displaying performers, stages, and city schedules",
      "Contributed to PWA implementation — continued development and resolved bugs in an existing setup",
      "Implemented structured data (JSON-LD) for event listings to improve search visibility",
    ],
    built: [
      {
        text: "Built core pages — homepage, about, lineup/rundown, venue map, ticket information, and FAQ",
      },
      {
        text: "Contributed to existing PWA implementation — continued development and resolved bugs",
        images: [
          {
            file: "/assets/soundrenaline/after-point2.jpg",
            alt: "The app icon if Soundrenaline has one installed on a phone",
          },
        ],
      },
      {
        text: "Implemented JSON-LD structured data for event listings to improve search visibility",
      },
      {
        text: "Performance optimization in progress, focused on improving load times for high-traffic festival pages",
      },
    ],
    builtImage: {
      cols: 3,
      images: [
        {
          file: "/assets/soundrenaline/after-built-1.jpg",
          alt: "Lineup page",
        },
        {
          file: "/assets/soundrenaline/after-built-2.jpg",
          alt: "Popup artist details after click an artist on Lineup page",
        },
        {
          file: "/assets/soundrenaline/after-built-3.jpg",
          alt: "Rundown page layout for The Stage category",
        },
        {
          file: "/assets/soundrenaline/after-built-4.jpg",
          alt: "Rundown page layout for The Lab category",
        },
        {
          file: "/assets/soundrenaline/after-built-5.jpg",
          alt: "Venue map page",
        },
        {
          file: "/assets/soundrenaline/after-built-6.jpg",
          alt: "Venue map detail page",
        },
      ],
    },
    tech: ["Next.js", "Tailwind CSS", "PWA", "Push Notifications", "REST API"],
    team: "Weekend Inc. cross-functional team — designers, backend engineers, content managers.",
  },
  {
    number: "03",
    slug: "aksi-gizi",
    name: "Aksi Gizi",
    type: "Mobile App · Android",
    year: "Aug 2025 - Jan 2026",
    overview:
      "Android app for calculating daily nutritional requirements for toddlers, built for parents.",
    bullets: [
      "Built the entire app independently — UI, navigation, and data integration with SheetDB API",
      "First project using Flutter and Dart — picked up the framework specifically for this build",
      "Integrated Google Sheets as a lightweight backend via SheetDB for data storage and retrieval",
    ],
    built: [
      {
        text: "Built the full Android app independently using Flutter — first project with this framework",
      },
      {
        text: "Implemented nutritional calculation logic based on anthropometric data (toddler age, weight, height, and gender)",
      },
      {
        text: "Designed input forms with validation, prioritizing usability for parents as primary users",
      },
      {
        text: "Built data sync flow with Google Sheets via SheetDB API for lightweight backend storage",
      },
    ],
    tech: ["Flutter", "Dart", "Google Sheets", "SheetDB API"],
    team: "Solo project — responsible for UI, logic, and integration end to end.",
  },
  {
    number: "04",
    slug: "tinthumb",
    name: "Tinthumb Design",
    type: "UI/Web Design · Competition",
    year: "Mar - Jul 2022",
    overview:
      "Weekly UI/web design submissions for Steve Jenkins's team at 99designs (UK) across a 5-month contest period.",
    bullets: [
      "Delivered 12 paid UI/web designs over a 5-month period for a 99designs contest team",
      "Designed to client briefs provided by the team lead, with most submissions receiving top ratings and revision-based feedback",
      "Built for international client (UK-based), working within competition deadlines and design specifications",
    ],
    built: [
      {
        text: "Designed to weekly briefs provided by the client, covering a range of UI and web design concepts",
      },
      { text: "Delivered 12 completed designs across the contest period" },
      {
        text: "Most submissions received top ratings with revision-based feedback",
      },
    ],
    tech: ["Figma", "UI Design", "Visual Design"],
    team: "Remote collaboration with UK-based client team. Weekly delivery cadence.",
    isGallery: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
