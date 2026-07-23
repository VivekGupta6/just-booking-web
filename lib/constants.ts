import {
  BedDouble,
  Car,
  Palmtree,
  Plane,
  type LucideIcon,
} from "lucide-react";

export type SectionId = "stays" | "flights" | "car-rentals" | "flight-hotel";

export type NavSection = {
  id: SectionId;
  tabLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  icon: LucideIcon;
};

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "stays",
    tabLabel: "Stays",
    sectionTitle: "Stays",
    sectionDescription:
      "Browse hotels and stays from boutique properties to family-friendly resorts.",
    icon: BedDouble,
  },
  {
    id: "flights",
    tabLabel: "Flights",
    sectionTitle: "Flights",
    sectionDescription:
      "Compare return fares from New Delhi to popular destinations.",
    icon: Plane,
  },
  {
    id: "car-rentals",
    tabLabel: "Car Rentals",
    sectionTitle: "Car Rentals",
    sectionDescription:
      "Find self-drive hire cars at top airports and cities worldwide.",
    icon: Car,
  },
  {
    id: "flight-hotel",
    tabLabel: "Flight+Hotel",
    sectionTitle: "Flight + Hotel",
    sectionDescription:
      "Bundle return flights with popular stays for one package price.",
    icon: Palmtree,
  },
];

export type DrawerNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const DRAWER_NAV_ITEMS: DrawerNavItem[] = [
  { label: "News & Blog", href: "/news" },
];

/** Popular travel blog shortcuts (homepage + hamburger menu). */
export const POPULAR_BLOG_LINKS: DrawerNavItem[] = [
  {
    label: "Plan Bali",
    href: "/news/bali-villa-and-hotel-stay-guide",
  },
  {
    label: "Plan UK",
    href: "/news/first-time-london-travel-guide",
  },
  {
    label: "Hotels in London",
    href: "/news/where-to-stay-in-london-neighbourhood-guide",
  },
  {
    label: "Visa for Dubai",
    href: "/news/uae-dubai-visa-requirements-for-indian-travellers",
  },
  {
    label: "Visa for Germany",
    href: "/news/germany-schengen-visa-requirements-for-indian-travellers",
  },
];

/** Travel partner / discovery sites shown in the hamburger menu. */
export const DRAWER_PARTNER_LINKS: DrawerNavItem[] = [
  { label: "Tripadvisor.com", href: "https://www.tripadvisor.com", external: true },
  { label: "Booking.com", href: "https://www.booking.com", external: true },
  { label: "MakeMyTrip.com", href: "https://www.makemytrip.com", external: true },
  { label: "Easemytrip.com", href: "https://www.easemytrip.com", external: true },
  { label: "Hotels.com", href: "https://www.hotels.com", external: true },
  { label: "ixigo.com", href: "https://www.ixigo.com", external: true },
  { label: "Expedia.com", href: "https://www.expedia.com", external: true },
  { label: "Goibibo.com", href: "https://www.goibibo.com", external: true },
  { label: "Agoda.com", href: "https://www.agoda.com", external: true },
  { label: "Trivago.com", href: "https://www.trivago.com", external: true },
  { label: "Cleartrip.com", href: "https://www.cleartrip.com", external: true },
  { label: "Trip.com", href: "https://www.trip.com", external: true },
  { label: "Viator.com", href: "https://www.viator.com", external: true },
  { label: "Getyourguide.com", href: "https://www.getyourguide.com", external: true },
  { label: "Klook.com", href: "https://www.klook.com", external: true },
  { label: "Airbnb.com", href: "https://www.airbnb.com", external: true },
  { label: "Yatra.com", href: "https://www.yatra.com", external: true },
  { label: "Skyscanner.com", href: "https://www.skyscanner.com", external: true },
  { label: "Redbus.com", href: "https://www.redbus.com", external: true },
  { label: "Hotellook.com", href: "https://www.hotellook.com", external: true },
  { label: "Momondo.com", href: "https://www.momondo.com", external: true },
  { label: "Contiki.com", href: "https://www.contiki.com", external: true },
  { label: "Hyatt.com", href: "https://www.hyatt.com", external: true },
  { label: "Priceline.com", href: "https://www.priceline.com", external: true },
  { label: "Cheapoair.com", href: "https://www.cheapoair.com", external: true },
  { label: "Orbitz.com", href: "https://www.orbitz.com", external: true },
  { label: "Travelocity.com", href: "https://www.travelocity.com", external: true },
  { label: "Wego.com", href: "https://www.wego.com", external: true },
  { label: "AA.com", href: "https://www.aa.com", external: true },
  {
    label: "Americanexpress.com",
    href: "https://www.americanexpress.com",
    external: true,
  },
  { label: "Marriott.com", href: "https://www.marriott.com", external: true },
  { label: "Hilton.com", href: "https://www.hilton.com", external: true },
  { label: "United.com", href: "https://www.united.com", external: true },
  { label: "Vrbo.com", href: "https://www.vrbo.com", external: true },
  { label: "Flightaware.com", href: "https://www.flightaware.com", external: true },
  { label: "Enterprise.com", href: "https://www.enterprise.com", external: true },
  { label: "Amtrak.com", href: "https://www.amtrak.com", external: true },
  { label: "Sixflags.com", href: "https://www.sixflags.com", external: true },
  { label: "Carnival.com", href: "https://www.carnival.com", external: true },
  { label: "IHG.com", href: "https://www.ihg.com", external: true },
];

export const DESKTOP_NAV_LINKS = [] as const;
