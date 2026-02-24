import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sncard.fr"),
  title: {
    default: "SNCard | Boostez vos Avis Google avec une Carte NFC",
    template: "%s | SNCard",
  },
  description:
    "SNCard est la carte NFC qui permet aux commercants de collecter des avis Google facilement. Approchez, notifiez, collectez.",
  keywords: [
    "carte NFC",
    "avis Google",
    "SNCard",
    "commercant",
    "reputation en ligne",
    "NFC business card",
    "avis clients",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "SNCard",
    images: [{ url: "/images/og/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
