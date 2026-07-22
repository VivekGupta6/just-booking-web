import { ExternalLink, Car, Plane, BedDouble, Palmtree } from "lucide-react";
import type { BlogCta as BlogCtaType } from "@/lib/blogs";
import { cn } from "@/lib/utils";

const CTA_ICONS = {
  flights: Plane,
  stays: BedDouble,
  cars: Car,
  packages: Palmtree,
} as const;

type BlogCtaProps = {
  cta: BlogCtaType;
  country?: string;
  className?: string;
};

export default function BlogCta({ cta, country, className }: BlogCtaProps) {
  const Icon = CTA_ICONS[cta.type];

  return (
    <aside
      className={cn(
        "rounded-2xl border border-border-green/50 bg-primary-green p-6 text-white sm:p-8",
        className,
      )}
      aria-label="Book your trip"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bright-green/20">
          <Icon className="h-6 w-6 text-bright-green" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-white/80">
            Ready to explore{country ? ` ${country}` : ""}?
          </p>
          <h3 className="mt-1 text-lg font-bold sm:text-xl">
            Book with KAYAK
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            Compare prices across hundreds of sites to find the best deals on
            flights, hotels, and car rentals.
          </p>
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-bright-green px-5 py-2.5 text-sm font-bold text-primary-green transition-opacity hover:opacity-90"
          >
            {cta.label}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
}
