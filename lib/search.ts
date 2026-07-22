import stays from "@/data/stays.json";
import flights from "@/data/flights.json";
import cars from "@/data/cars.json";
import flightHotel from "@/data/flight-hotel.json";
import type { SectionId } from "@/lib/constants";

export type SearchCategory = "stay" | "flight" | "car" | "package" | "country";

export type SearchResult = {
  id: string;
  label: string;
  description: string;
  category: SearchCategory;
  sectionId: SectionId;
  targetId: string;
  keywords: string[];
};

const CATEGORY_LABELS: Record<SearchCategory, string> = {
  stay: "Stay",
  flight: "Flight",
  car: "Car rental",
  package: "Flight + Hotel",
  country: "Country",
};

export function getCategoryLabel(category: SearchCategory): string {
  return CATEGORY_LABELS[category];
}

function uniqueById(items: SearchResult[]): SearchResult[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function countryLabelFromLocation(location: string): string {
  const parts = location
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  return parts[parts.length - 1] || location;
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const stay of stays) {
    results.push({
      id: `stay-${stay.id}`,
      label: stay.name,
      description: stay.neighborhood || stay.location,
      category: "stay",
      sectionId: "stays",
      targetId: `stay-${stay.id}`,
      keywords: [
        stay.name,
        stay.location,
        stay.neighborhood,
        stay.id,
        "hotel",
        "stay",
        "stays",
      ],
    });

    const country = countryLabelFromLocation(stay.location);
    results.push({
      id: `country-stay-${stay.id}`,
      label: country,
      description: `Stays in ${stay.location}`,
      category: "country",
      sectionId: "stays",
      targetId: `stay-${stay.id}`,
      keywords: [country, stay.location, stay.neighborhood, stay.id, "country"],
    });
  }

  for (const flight of flights) {
    results.push({
      id: `flight-${flight.id}`,
      label: `${flight.origin.split("(")[0].trim()} → ${flight.destinationLabel}`,
      description: `${flight.airline} · ${flight.stops} · ${flight.price}`,
      category: "flight",
      sectionId: "flights",
      targetId: `flight-${flight.id}`,
      keywords: [
        flight.origin,
        flight.destination,
        flight.destinationLabel,
        flight.airline,
        flight.id,
        "flight",
        "flights",
      ],
    });

    results.push({
      id: `country-flight-${flight.id}`,
      label: flight.destinationLabel,
      description: `Flights to ${flight.destination}`,
      category: "country",
      sectionId: "flights",
      targetId: `flight-${flight.id}`,
      keywords: [
        flight.destinationLabel,
        flight.destination,
        flight.id,
        "country",
      ],
    });
  }

  for (const car of cars) {
    results.push({
      id: `car-${car.id}`,
      label: car.title,
      description: car.cities.join(" · "),
      category: "car",
      sectionId: "car-rentals",
      targetId: `car-${car.id}`,
      keywords: [
        car.title,
        car.destination,
        ...car.cities,
        car.id,
        "car",
        "rental",
        "hire",
      ],
    });
  }

  for (const pkg of flightHotel) {
    results.push({
      id: `package-${pkg.id}`,
      label: pkg.title,
      description: `${pkg.routeLabel} · ${pkg.stay.name}`,
      category: "package",
      sectionId: "flight-hotel",
      targetId: `package-${pkg.id}`,
      keywords: [
        pkg.title,
        pkg.routeLabel,
        pkg.stay.name,
        pkg.stay.neighborhood,
        pkg.flight.destination,
        pkg.flight.airline,
        pkg.id,
        "package",
        "flight hotel",
        "hotel",
      ],
    });
  }

  return uniqueById(results);
}

const SEARCH_INDEX = buildSearchIndex();

export function searchCatalog(query: string, limit = 8): SearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  const terms = normalized.split(/\s+/).filter(Boolean);

  const scored = SEARCH_INDEX.map((item) => {
    const haystack = [item.label, item.description, ...item.keywords]
      .join(" ")
      .toLowerCase();

    let score = 0;
    for (const term of terms) {
      if (item.label.toLowerCase().startsWith(term)) score += 6;
      else if (item.label.toLowerCase().includes(term)) score += 4;
      else if (haystack.includes(term)) score += 2;
      else return null;
    }

    if (item.category === "country") score += 1;
    return { item, score };
  }).filter(Boolean) as { item: SearchResult; score: number }[];

  return scored
    .sort(
      (a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label),
    )
    .slice(0, limit)
    .map(({ item }) => item);
}
