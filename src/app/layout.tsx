import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/shared/back-to-top";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ilham Rizky — Frontend Developer",
  description:
    "Frontend Developer based in Jakarta, Indonesia. 4+ years building fast, accessible, and scalable web experiences with Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-background`}
    >
      <head>
        <link rel="icon" href="/assets/icons/favicon.ico" type="image/x-icon" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
