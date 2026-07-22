import Image from "next/image";
import { MapPin } from "lucide-react";
import cars from "@/data/cars.json";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type CarRentalDestination = {
  id: string;
  destination: string;
  title: string;
  blurb: string;
  fromPrice: string;
  priceLabel: string;
  dates: string;
  cities: string[];
  link: string;
  photo: string | null;
};

const DESTINATIONS = cars as CarRentalDestination[];

export default function CarRentalsSection() {
  return (
    <section
      id="car-rentals"
      data-animate-section
      className="scroll-mt-20 border-t border-border-green/60 py-10 sm:scroll-mt-24 sm:py-14 md:py-16 lg:py-20"
      aria-labelledby="car-rentals-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div data-animate-intro className="max-w-2xl">
          <h2
            id="car-rentals-heading"
            className="text-xl font-bold tracking-tight text-primary-green sm:text-2xl md:text-3xl"
          >
            Car Rentals
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            Search cheap car hire by destination — compare deals for 25/8 – 30/8.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {DESTINATIONS.map((item) => (
            <article
              key={item.id}
              id={`car-${item.id}`}
              data-animate-card
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-border-green/50 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer focus-visible:outline-none"
                aria-label={item.title}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-placeholder sm:aspect-[4/3]">
                  {item.photo ? (
                    <Image
                      src={item.photo}
                      alt={item.destination}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <ImagePlaceholder className="h-full w-full rounded-none" />
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold leading-snug text-primary-green sm:text-lg">
                      {item.title}
                    </h3>
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-muted">{item.priceLabel}</p>
                      <p className="text-sm font-bold text-primary-green">
                        {item.fromPrice}
                      </p>
                    </div>
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {item.blurb}
                  </p>

                  <p className="mt-3 text-xs text-muted sm:text-sm">
                    {item.dates}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <MapPin
                      className="h-3.5 w-3.5 shrink-0 text-primary-green/70"
                      aria-hidden="true"
                    />
                    {item.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full bg-primary-green/8 px-2.5 py-1 text-xs font-medium text-primary-green"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
