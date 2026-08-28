import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "cyrillic"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://moonvanta.studio"),
  title: "MOONVANTA — Creative Design & Development Studio",
  description:
    "MOONVANTA создаёт выразительные сайты, визуальные системы и цифровые опыты для амбициозных брендов.",
  alternates: {
    canonical: "/",
    languages: { "ru-RU": "/", "en-US": "/?lang=en" },
  },
  openGraph: {
    title: "MOONVANTA — Digital worlds for ambitious brands",
    description: "Creative design & development studio.",
    url: "/",
    siteName: "MOONVANTA",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOONVANTA",
    description: "Creative Design & Development Studio",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  const studioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MOONVANTA",
    description: "Creative Design & Development Studio",
    url: "https://moonvanta.studio",
    areaServed: "Worldwide",
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Brand Identity",
      "3D Design",
      "Creative Development",
    ],
  };
  return (
    <html lang="ru" className={geist.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(studioSchema) }}
        />
      </body>
    </html>
  );
}
