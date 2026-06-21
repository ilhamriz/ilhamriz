const ICON_SLUGS: Record<string, string> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  "React.js": "react",
  React: "react",
  "Next.js": "nextdotjs",
  Angular: "angular",
  "Tailwind CSS": "tailwindcss",
  SCSS: "sass",
  "Framer Motion": "framer",
  Git: "github",
  Github: "github",
  Figma: "figma",
  "REST API": "openapiinitiative",
  "Vite.js": "vite",
  Redux: "redux",
  Flutter: "flutter",
  Dart: "dart",
  PWA: "pwa",
  AWS: "amazonwebservices",
  "Google Sheets": "googlesheets",
};

export function techIconUrl(label: string): string | null {
  const slug = ICON_SLUGS[label];
  if (!slug) return null;
  return `https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${slug}.svg`;
}
