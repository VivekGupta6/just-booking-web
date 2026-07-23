import type { Metadata, Viewport } from "next";
import BubbleCursor from "@/components/motion/BubbleCursor";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Search Flights, Hotels & Travel Deals`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  keywords: [
    "flights",
    "hotels",
    "hire cars",
    "travel guides",
    "visa requirements",
    "cheap flights",
    "hotel deals",
    "London",
    "Dubai",
    "Mumbai",
    "New Delhi",
    "Sydney",
    "Singapore",
    "Bangkok",
    "Just Booking",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Search Flights, Hotels & Travel Deals`,
    description: SITE_TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Search Flights, Hotels & Travel Deals`,
    description: SITE_TAGLINE,
  },
  category: "travel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full overflow-x-hidden bg-background text-primary-green">
        <BubbleCursor />
        {children}
      </body>
    </html>
  );
}
