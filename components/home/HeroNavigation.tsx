"use client";

import { cn } from "@/lib/utils";
import { scrollToElement, scrollToSection } from "@/lib/gsap";
import { NAV_SECTIONS, type SectionId } from "@/lib/constants";
import {
  getCategoryLabel,
  searchCatalog,
  type SearchCategory,
  type SearchResult,
} from "@/lib/search";
import { BedDouble, Car, MapPin, Palmtree, Plane, Search } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const CATEGORY_ICONS = {
  stay: BedDouble,
  flight: Plane,
  car: Car,
  package: Palmtree,
  country: MapPin,
} as const satisfies Record<SearchCategory, typeof BedDouble>;

export default function HeroNavigation() {
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSectionId, setActiveSectionId] = useState<SectionId>("stays");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionElements = NAV_SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSectionId(visibleEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const handleSectionSelect = (sectionId: SectionId) => {
    setActiveSectionId(sectionId);
    scrollToSection(sectionId);
  };

  const updateQuery = (value: string) => {
    setQuery(value);
    const nextResults = searchCatalog(value);
    setResults(nextResults);
    setActiveIndex(0);
    setIsOpen(value.trim().length > 0);
  };

  const selectResult = (result: SearchResult) => {
    setQuery(result.label);
    setIsOpen(false);
    setActiveSectionId(result.sectionId);
    scrollToElement(result.targetId);
  };

  const handleExplore = () => {
    if (results[activeIndex]) {
      selectResult(results[activeIndex]);
      return;
    }

    if (results[0]) {
      selectResult(results[0]);
      return;
    }

    scrollToSection(activeSectionId);
  };

  return (
    <section
      aria-label="Explore navigation"
      data-animate-hero
      className="mx-auto w-full max-w-[920px] px-4 pt-8 sm:px-6 sm:pt-12 md:pt-14 lg:px-8 lg:pt-16"
    >
      <h1
        data-animate-hero-item
        className="text-center text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] tracking-tight text-primary-green"
      >
        Where to?
      </h1>

      <nav
        data-animate-hero-item
        className="mt-6 grid grid-cols-4 border-b border-border-green sm:flex sm:justify-center sm:gap-7 md:mt-10 md:gap-8"
        aria-label="Category navigation"
      >
        {NAV_SECTIONS.map((section) => {
          const Icon = section.icon;
          const isActive = activeSectionId === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSectionSelect(section.id)}
              className={cn(
                "group flex min-h-11 flex-col items-center justify-center gap-1 border-b-[3px] px-0.5 pb-3 text-[10px] font-semibold leading-tight transition-colors duration-200 sm:shrink-0 sm:gap-2 sm:px-1 sm:text-sm md:text-base",
                isActive
                  ? "border-primary-green text-primary-green"
                  : "border-transparent text-muted hover:text-primary-green",
              )}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              <span className="text-center leading-tight">{section.tabLabel}</span>
            </button>
          );
        })}
      </nav>

      <div ref={containerRef} data-animate-hero-item className="relative mt-5 sm:mt-6 md:mt-8">
        <div className="flex items-center gap-2 rounded-full border border-border-green bg-white p-2 pl-4 shadow-sm transition-[box-shadow,border-color] focus-within:border-primary-green focus-within:shadow-[0_0_0_3px_rgba(0,59,42,0.12)] sm:gap-4 sm:pl-5">
          <div className="flex min-h-11 min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <Search
              className="h-4 w-4 shrink-0 text-primary-green sm:h-5 sm:w-5"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              onFocus={() => {
                if (query.trim()) setIsOpen(true);
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setIsOpen(true);
                  setActiveIndex((index) =>
                    results.length === 0 ? 0 : (index + 1) % results.length,
                  );
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActiveIndex((index) =>
                    results.length === 0
                      ? 0
                      : (index - 1 + results.length) % results.length,
                  );
                } else if (event.key === "Enter") {
                  event.preventDefault();
                  handleExplore();
                } else if (event.key === "Escape") {
                  setIsOpen(false);
                }
              }}
              role="combobox"
              aria-expanded={isOpen}
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-activedescendant={
                isOpen && results[activeIndex]
                  ? `${listboxId}-${results[activeIndex].id}`
                  : undefined
              }
              placeholder="Search countries, hotels, flights, stays…"
              className="min-w-0 flex-1 border-0 bg-transparent text-xs text-primary-green shadow-none outline-none ring-0 placeholder:text-muted focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 sm:text-sm md:text-base"
            />
          </div>

          <button
            type="button"
            onClick={handleExplore}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-primary-green px-4 py-2.5 text-sm font-semibold text-white transition-[filter] duration-200 hover:brightness-110 sm:px-6"
          >
            Explore
          </button>
        </div>

        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            aria-label="Search results"
            className="absolute z-30 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-border-green/50 bg-white py-2 shadow-lg"
          >
            {results.length === 0 ? (
              <p className="px-4 py-3 text-sm text-muted">
                No matches. Try a country, hotel, flight, or stay.
              </p>
            ) : (
              results.map((result, index) => {
                const Icon = CATEGORY_ICONS[result.category];

                return (
                  <button
                    key={result.id}
                    id={`${listboxId}-${result.id}`}
                    type="button"
                    role="option"
                    aria-selected={index === activeIndex}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectResult(result)}
                    className={cn(
                      "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors",
                      index === activeIndex
                        ? "bg-primary-green/8"
                        : "hover:bg-placeholder/60",
                    )}
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-placeholder text-primary-green">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-primary-green">
                        {result.label}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-muted">
                        {getCategoryLabel(result.category)} ·{" "}
                        {result.description}
                      </span>
                    </span>
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
}
