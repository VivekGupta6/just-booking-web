import Image from "next/image";
import { BedDouble, Plane, Star } from "lucide-react";
import packages from "@/data/flight-hotel.json";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type FlightLeg = {
  departTime: string;
  arriveTime: string;
  from: string;
  to: string;
};

type FlightHotelPackage = {
  id: string;
  title: string;
  routeLabel: string;
  dates: string;
  packagePrice: string;
  priceLabel: string;
  nights: number;
  link: string;
  flight: {
    origin: string;
    destination: string;
    airline: string;
    stops: string;
    duration: string;
    outbound: FlightLeg;
    inbound: FlightLeg;
    logo: string | null;
  };
  stay: {
    name: string;
    neighborhood: string;
    rating: number | null;
    ratingLabel: string | null;
    photo: string | null;
  };
};

const PACKAGES = packages as FlightHotelPackage[];

export default function FlightHotelSection() {
  return (
    <section
      id="flight-hotel"
      data-animate-section
      className="scroll-mt-20 border-t border-border-green/60 py-10 sm:scroll-mt-24 sm:py-14 md:py-16 lg:py-20"
      aria-labelledby="flight-hotel-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div data-animate-intro className="max-w-2xl">
          <h2
            id="flight-hotel-heading"
            className="text-xl font-bold tracking-tight text-primary-green sm:text-2xl md:text-3xl"
          >
            Flight + Hotel
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            Bundle return flights from New Delhi with a popular stay for 25/8 –
            30/8.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              id={`package-${pkg.id}`}
              data-animate-card
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-border-green/50 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <a
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer focus-visible:outline-none"
                aria-label={`View ${pkg.title} package`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-placeholder sm:aspect-[4/3]">
                  {pkg.stay.photo ? (
                    <Image
                      src={pkg.stay.photo}
                      alt={pkg.stay.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <ImagePlaceholder className="h-full w-full rounded-none" />
                  )}
                  <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-green shadow-sm">
                    {pkg.nights} nights
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {pkg.routeLabel}
                      </p>
                      <h3 className="mt-1 text-base font-bold leading-snug text-primary-green sm:text-lg">
                        {pkg.title}
                      </h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-muted">{pkg.priceLabel}</p>
                      <p className="text-base font-bold text-primary-green">
                        {pkg.packagePrice}
                      </p>
                    </div>
                  </div>

                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    {pkg.dates}
                  </p>

                  <div className="mt-4 rounded-xl bg-placeholder/40 p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-12 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                        {pkg.flight.logo ? (
                          <Image
                            src={pkg.flight.logo}
                            alt={`${pkg.flight.airline} logo`}
                            width={48}
                            height={36}
                            className="h-6 w-auto object-contain"
                          />
                        ) : (
                          <Plane className="h-4 w-4 text-primary-green" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-primary-green">
                          {pkg.flight.origin.split("(")[0].trim()} →{" "}
                          {pkg.flight.destination.split("(")[0].trim()}
                        </p>
                        <p className="truncate text-xs text-muted">
                          {pkg.flight.airline} · {pkg.flight.stops} ·{" "}
                          {pkg.flight.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2.5 space-y-1.5 border-t border-border-green/30 pt-2.5 text-xs text-primary-green sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <Plane className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span className="font-medium">
                          {pkg.flight.outbound.from}{" "}
                          {pkg.flight.outbound.departTime}
                        </span>
                        <span className="text-muted">→</span>
                        <span className="font-medium">
                          {pkg.flight.outbound.to}{" "}
                          {pkg.flight.outbound.arriveTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Plane
                          className="h-3.5 w-3.5 shrink-0 rotate-180"
                          aria-hidden
                        />
                        <span className="font-medium">
                          {pkg.flight.inbound.from}{" "}
                          {pkg.flight.inbound.departTime}
                        </span>
                        <span className="text-muted">→</span>
                        <span className="font-medium">
                          {pkg.flight.inbound.to}{" "}
                          {pkg.flight.inbound.arriveTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-green/8 text-primary-green">
                      <BedDouble className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-semibold text-primary-green">
                        {pkg.stay.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {pkg.stay.neighborhood}
                      </p>
                      {pkg.stay.rating != null && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-md bg-primary-green px-2 py-0.5 text-xs font-bold text-white">
                            <Star
                              className="h-3 w-3 fill-current"
                              aria-hidden
                            />
                            {pkg.stay.rating.toFixed(1)}
                          </span>
                          {pkg.stay.ratingLabel && (
                            <span className="text-xs font-medium text-primary-green">
                              {pkg.stay.ratingLabel}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
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
