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
};

export const DRAWER_NAV_ITEMS: DrawerNavItem[] = [
  { label: "News & Blog", href: "/news" },
  { label: "Review", href: "/" },
];

export const DESKTOP_NAV_LINKS = [] as const;
