/** Canonical public site URL used for SEO, sitemaps, and AI crawl discovery. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.justbooking.co.in";

export const SITE_NAME = "Just Booking";
export const SITE_TAGLINE =
  "Search flights, hotels, hire cars, travel guides and more with Just Booking.";
