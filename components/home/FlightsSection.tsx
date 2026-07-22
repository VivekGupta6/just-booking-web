import Image from "next/image";
import { Plane } from "lucide-react";
import flights from "@/data/flights.json";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type FlightLeg = {
  departTime: string;
  arriveTime: string;
  from: string;
  to: string;
};

type Flight = {
  id: string;
  origin: string;
  destination: string;
  destinationLabel: string;
  dates: string;
  airline: string;
  price: string;
  stops: string;
  duration: string;
  cabin: string;
  outbound: FlightLeg;
  inbound: FlightLeg;
  link: string;
  logo: string | null;
};

const FLIGHTS = flights as Flight[];

export default function FlightsSection() {
  return (
    <section
      id="flights"
      data-animate-section
      className="scroll-mt-20 border-t border-border-green/60 py-10 sm:scroll-mt-24 sm:py-14 md:py-16 lg:py-20"
      aria-labelledby="flights-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div data-animate-intro className="max-w-2xl">
          <h2
            id="flights-heading"
            className="text-xl font-bold tracking-tight text-primary-green sm:text-2xl md:text-3xl"
          >
            Flights
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            Featured return fares from New Delhi for 25/8 – 30/8.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {FLIGHTS.map((flight) => (
            <article
              key={flight.id}
              id={`flight-${flight.id}`}
              data-animate-card
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-border-green/50 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <a
                href={flight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 focus-visible:outline-none sm:p-5"
                aria-label={`View ${flight.airline} flight to ${flight.destinationLabel} on Kayak`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-14 w-20 items-center justify-center rounded-xl bg-placeholder/70 p-2">
                    {flight.logo ? (
                      <Image
                        src={flight.logo}
                        alt={`${flight.airline} logo`}
                        width={80}
                        height={64}
                        className="h-10 w-auto object-contain"
                      />
                    ) : (
                      <ImagePlaceholder
                        className="h-10 w-10 rounded-lg"
                        iconClassName="h-5 w-5"
                      />
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary-green">
                      {flight.price}
                    </p>
                    <p className="text-xs text-muted">{flight.cabin}</p>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-primary-green sm:text-lg">
                  {flight.origin.split("(")[0].trim()} →{" "}
                  {flight.destinationLabel}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-green/80">
                  {flight.airline}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  {flight.dates} · {flight.stops} · {flight.duration}
                </p>

                <div className="mt-4 space-y-3 rounded-xl bg-placeholder/40 p-3">
                  <div className="flex items-center gap-2 text-sm text-primary-green">
                    <Plane className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="font-semibold">
                      {flight.outbound.from} {flight.outbound.departTime}
                    </span>
                    <span className="text-muted">→</span>
                    <span className="font-semibold">
                      {flight.outbound.to} {flight.outbound.arriveTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-green">
                    <Plane
                      className="h-4 w-4 shrink-0 rotate-180"
                      aria-hidden="true"
                    />
                    <span className="font-semibold">
                      {flight.inbound.from} {flight.inbound.departTime}
                    </span>
                    <span className="text-muted">→</span>
                    <span className="font-semibold">
                      {flight.inbound.to} {flight.inbound.arriveTime}
                    </span>
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
