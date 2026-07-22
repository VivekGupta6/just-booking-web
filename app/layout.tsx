import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just Booking — Search Flights, Hotels & Travel Deals",
  description:
    "Search flights, hotels, hire cars, travel guides and more with Just Booking. Compare stays and fares across London, Dubai, Mumbai, Sydney, Singapore and popular destinations worldwide.",
  keywords: [
    "flights",
    "hotels",
    "hire cars",
    "travel guides",
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
        {children}
      </body>
    </html>
  );
}
