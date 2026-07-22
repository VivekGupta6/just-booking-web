export type FooterLink = {
  label: string;
  href: string;
  action?: "privacy" | "terms";
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

/** Popular destination keywords inspired by Kayak’s SEO footer. */
export const FOOTER_DESTINATIONS: FooterLink[] = [
  { label: "London", href: "#flights" },
  { label: "Toronto", href: "#flights" },
  { label: "Melbourne", href: "#flights" },
  { label: "San Francisco", href: "#flights" },
  { label: "New York", href: "#flights" },
  { label: "Dallas", href: "#flights" },
  { label: "Boston", href: "#flights" },
  { label: "Europe", href: "#flights" },
  { label: "Maldives", href: "#stays" },
  { label: "Ahmedabad", href: "#flights" },
  { label: "Guwahati", href: "#flights" },
  { label: "Dubai", href: "#flights" },
  { label: "New Delhi", href: "#flights" },
  { label: "Chicago", href: "#flights" },
  { label: "Atlanta", href: "#flights" },
  { label: "Hyderabad", href: "#flights" },
  { label: "Kochi", href: "#flights" },
  { label: "Sydney", href: "#flights" },
  { label: "India", href: "#stays" },
  { label: "Thailand", href: "#stays" },
  { label: "Pune", href: "#flights" },
  { label: "Patna", href: "#flights" },
  { label: "Bengaluru", href: "#flights" },
  { label: "Bangkok", href: "#flights" },
  { label: "Mumbai", href: "#flights" },
  { label: "Singapore", href: "#flights" },
  { label: "Phuket", href: "#stays" },
  { label: "Chennai", href: "#flights" },
  { label: "Kolkata", href: "#flights" },
  { label: "United States", href: "#flights" },
  { label: "Germany", href: "#stays" },
  { label: "Srinagar", href: "#flights" },
  { label: "Bagdogra", href: "#flights" },
  { label: "France", href: "#stays" },
  { label: "Canada", href: "#stays" },
  { label: "Australia", href: "#stays" },
  { label: "New Zealand", href: "#stays" },
  { label: "Brazil", href: "#stays" },
  { label: "United Kingdom", href: "#stays" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Stays", href: "#stays" },
      { label: "Flights", href: "#flights" },
      { label: "Car Rentals", href: "#car-rentals" },
      { label: "Flight + Hotel", href: "#flight-hotel" },
      { label: "Hire cars", href: "#car-rentals" },
      { label: "News & Blog", href: "/news" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Airline fees", href: "#flights" },
      { label: "Airlines", href: "#flights" },
      { label: "Low fare tips", href: "#flights" },
      {
        label: "Privacy Policy",
        href: "#",
        action: "privacy",
      },
      {
        label: "Terms & Conditions",
        href: "#",
        action: "terms",
      },
    ],
  },
];

export const FOOTER_SEO_BLURB =
  "Search flights, hotels, hire cars, travel guides and more with Just Booking. Compare stays and fares across popular destinations to find the information you need to make the right travel decisions.";
