import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import {
  siteUrl,
  profile,
  skills,
  companies,
  experience,
} from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const description = `${profile.name} — ${profile.role}. ${profile.tagline}`;
const ogImage = "/bsoriano.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    profile.name,
    profile.role,
    "Software Architect",
    "Enginering Director",
    "Full-Stack Engineer",
    "Cloud Architecture",
    "Fintech",
    "AWS",
    "TypeScript",
    "Next.js",
    "RAG",
    ...skills.flatMap((s) => s.items),
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1200,
        alt: `Portrait of ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description,
    url: siteUrl,
    image: new URL(ogImage, siteUrl).toString(),
    email: `mailto:${profile.email}`,
    sameAs: [profile.socials.linkedin, profile.socials.github],
    knowsAbout: skills.flatMap((s) => s.items),
    worksFor: experience.slice(0, 1).map((e) => ({
      "@type": "Organization",
      name: e.company,
    })),
    alumniOf: companies.map((name) => ({
      "@type": "Organization",
      name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper selection:bg-brass/30">
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
