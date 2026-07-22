export type FooterLink = {
  label: string;
  href: string;
  action?: "privacy" | "terms";
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

/**
 * SEO-style travel keywords linking to verified KAYAK India pages.
 * Hotels use /hotels/{place}-c{id}
 * Flights use dated route searches or /explore/{FROM}-{TO}
 * Cars use dated airport hire searches
 */
export const FOOTER_DESTINATIONS: FooterLink[] = [
  // Hotels / stays
  {
    label: "hotels in Paris",
    href: "https://www.kayak.co.in/hotels/Paris-c14970",
    external: true,
  },
  {
    label: "hotels in London",
    href: "https://www.kayak.co.in/hotels/London-c24916",
    external: true,
  },
  {
    label: "hotels in Germany",
    href: "https://www.kayak.co.in/hotels/Germany-c145",
    external: true,
  },
  {
    label: "hotels in United Kingdom",
    href: "https://www.kayak.co.in/hotels/United-Kingdom-c225",
    external: true,
  },
  {
    label: "hotels in Dubai",
    href: "https://www.kayak.co.in/hotels/Dubai-c12823",
    external: true,
  },
  {
    label: "hotels in Singapore",
    href: "https://www.kayak.co.in/hotels/Singapore-c194",
    external: true,
  },
  {
    label: "hotels in Bangkok",
    href: "https://www.kayak.co.in/hotels/Bangkok-c4504",
    external: true,
  },
  {
    label: "hotels in Maldives",
    href: "https://www.kayak.co.in/hotels/Maldives-c148",
    external: true,
  },
  {
    label: "hotels in Bali",
    href: "https://www.kayak.co.in/hotels/Bali,Indonesia-c15009",
    external: true,
  },
  {
    label: "hotels in New York",
    href: "https://www.kayak.co.in/hotels/New-York-c26170",
    external: true,
  },
  {
    label: "hotels in Tokyo",
    href: "https://www.kayak.co.in/hotels/Tokyo,Japan-c23020",
    external: true,
  },
  {
    label: "hotels in Sydney",
    href: "https://www.kayak.co.in/hotels/Sydney-c22801",
    external: true,
  },
  {
    label: "cheap hotels in Europe",
    href: "https://www.kayak.co.in/hotels/Europe-c14",
    external: true,
  },
  {
    label: "beach resorts in Phuket",
    href: "https://www.kayak.co.in/hotels/Phuket-c18696",
    external: true,
  },
  {
    label: "best stays in France",
    href: "https://www.kayak.co.in/hotels/France-c73",
    external: true,
  },
  {
    label: "family hotels in Singapore",
    href: "https://www.kayak.co.in/hotels/Singapore-c194",
    external: true,
  },
  {
    label: "hotels in Italy",
    href: "https://www.kayak.co.in/hotels/Italy-c106",
    external: true,
  },
  {
    label: "hotels in Switzerland",
    href: "https://www.kayak.co.in/hotels/Switzerland-c204",
    external: true,
  },
  {
    label: "hotels in Canada",
    href: "https://www.kayak.co.in/hotels/Canada-c43",
    external: true,
  },
  {
    label: "hotels in Thailand",
    href: "https://www.kayak.co.in/hotels/Thailand-c213",
    external: true,
  },

  // Flights (dated searches + explore hubs)
  {
    label: "flights to London",
    href: "https://www.kayak.co.in/flights/DEL-LON/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "flights to Dubai",
    href: "https://www.kayak.co.in/flights/DEL-DXB/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "flights to Paris",
    href: "https://www.kayak.co.in/flights/DEL-PAR/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "flights to New York",
    href: "https://www.kayak.co.in/flights/DEL-NYC/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "flights to Singapore",
    href: "https://www.kayak.co.in/flights/DEL-SIN/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "flights to Bangkok",
    href: "https://www.kayak.co.in/flights/DEL-BKK/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "flights to Tokyo",
    href: "https://www.kayak.co.in/flights/DEL-TYO/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "flights to Sydney",
    href: "https://www.kayak.co.in/flights/DEL-SYD/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "cheap flights from India",
    href: "https://www.kayak.co.in/flights",
    external: true,
  },
  {
    label: "Delhi to London flights",
    href: "https://www.kayak.co.in/flights/DEL-LON/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "Mumbai to Dubai flights",
    href: "https://www.kayak.co.in/flights/BOM-DXB/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "Bengaluru to Singapore flights",
    href: "https://www.kayak.co.in/flights/BLR-SIN/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "last minute flight deals",
    href: "https://www.kayak.co.in/flights",
    external: true,
  },
  {
    label: "international flight booking",
    href: "https://www.kayak.co.in/flights",
    external: true,
  },
  {
    label: "flights to Europe from India",
    href: "https://www.kayak.co.in/explore/DEL-LON",
    external: true,
  },
  {
    label: "flights to United States",
    href: "https://www.kayak.co.in/explore/DEL-NYC",
    external: true,
  },
  {
    label: "flights to Canada",
    href: "https://www.kayak.co.in/flights/DEL-YTO/2026-08-25/2026-08-30",
    external: true,
  },

  // Car rentals (airport + dates)
  {
    label: "car rental in Germany",
    href: "https://www.kayak.co.in/cars/FRA-a10556/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "car rental in France",
    href: "https://www.kayak.co.in/cars/CDG-a12158/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "car rental in United Kingdom",
    href: "https://www.kayak.co.in/cars/LHR-a10898/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "car hire in Dubai",
    href: "https://www.kayak.co.in/cars/DXB-a12071/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "car rental in USA",
    href: "https://www.kayak.co.in/cars/JFK-a10688/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "car rental in Italy",
    href: "https://www.kayak.co.in/cars/FCO-a12136/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "car hire in New Zealand",
    href: "https://www.kayak.co.in/cars/AKL-a12009/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "car rental in Australia",
    href: "https://www.kayak.co.in/cars/SYD-a12022/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "airport car hire London",
    href: "https://www.kayak.co.in/cars/LHR-a10898/2026-08-25/2026-08-30",
    external: true,
  },
  {
    label: "cheap car rental Europe",
    href: "https://www.kayak.co.in/cars/CDG-a12158/2026-08-25/2026-08-30",
    external: true,
  },

  // Trip planning / packages
  {
    label: "flight + hotel packages",
    href: "https://www.kayak.co.in/explore",
    external: true,
  },
  {
    label: "weekend getaways from Delhi",
    href: "https://www.kayak.co.in/explore/DEL-DXB",
    external: true,
  },
  {
    label: "honeymoon destinations Asia",
    href: "https://www.kayak.co.in/hotels/Maldives-c148",
    external: true,
  },
  {
    label: "best time to book flights",
    href: "https://www.kayak.co.in/flights",
    external: true,
  },
  {
    label: "compare hotel prices",
    href: "https://www.kayak.co.in/hotels",
    external: true,
  },
  {
    label: "book holiday packages",
    href: "https://www.kayak.co.in/explore",
    external: true,
  },
  {
    label: "travel deals India",
    href: "https://www.kayak.co.in/",
    external: true,
  },
  {
    label: "plan a trip to Switzerland",
    href: "https://www.kayak.co.in/explore/DEL-ZRH",
    external: true,
  },
  {
    label: "plan a trip to Italy",
    href: "https://www.kayak.co.in/explore/DEL-ROM",
    external: true,
  },
  {
    label: "Canada trip planning",
    href: "https://www.kayak.co.in/explore/DEL-YTO",
    external: true,
  },
  {
    label: "Brazil vacation packages",
    href: "https://www.kayak.co.in/explore/DEL-RIO",
    external: true,
  },
  {
    label: "Thailand holiday booking",
    href: "https://www.kayak.co.in/hotels/Thailand-c213",
    external: true,
  },
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
