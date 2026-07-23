import Image from "next/image";
import { Star } from "lucide-react";
import stays from "@/data/stays.json";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type Stay = {
  id: string;
  name: string;
  location: string;
  neighborhood: string;
  dates: string;
  rating: number | null;
  ratingLabel: string | null;
  link: string;
  photo: string | null;
};

const STAYS = stays as Stay[];

export default function StaysSection() {
  return (
    <section
      id="stays"
      data-animate-section
      className="scroll-mt-20 py-10 sm:scroll-mt-24 sm:py-14 md:py-16 lg:py-20"
      aria-labelledby="stays-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div data-animate-intro className="max-w-2xl">
          <h2
            id="stays-heading"
            className="text-xl font-bold tracking-tight text-primary-green sm:text-2xl md:text-3xl"
          >
            Stays
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            Featured stays for 25/8 – 30/8 across popular destinations.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {STAYS.map((stay) => (
            <article
              key={stay.id}
              id={`stay-${stay.id}`}
              data-animate-card
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-border-green/50 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <a
                href={stay.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer focus-visible:outline-none"
                aria-label={`View ${stay.name} stay`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-placeholder sm:aspect-[4/3]">
                  {stay.photo ? (
                    <Image
                      src={stay.photo}
                      alt={stay.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <ImagePlaceholder className="h-full w-full rounded-none" />
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="line-clamp-2 text-base font-bold text-primary-green sm:text-lg">
                    {stay.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">
                    {stay.neighborhood || stay.location}
                  </p>
                  <p className="mt-0.5 text-xs text-muted sm:text-sm">
                    {stay.location} · {stay.dates}
                  </p>

                  {stay.rating != null && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-primary-green px-2 py-1 text-xs font-bold text-white">
                        <Star
                          className="h-3 w-3 fill-current"
                          aria-hidden="true"
                        />
                        {stay.rating.toFixed(1)}
                      </span>
                      {stay.ratingLabel && (
                        <span className="text-sm font-medium text-primary-green">
                          {stay.ratingLabel}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
