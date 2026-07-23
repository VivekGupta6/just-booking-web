"use client";

import Image from "next/image";
import { scrollToSection } from "@/lib/gsap";

export default function PromoHeroCard() {
  return (
    <section
      aria-label="Promotional highlight"
      className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8"
    >
      <div
        data-animate-promo
        className="mt-8 overflow-hidden rounded-2xl bg-promo-green sm:mt-10 sm:rounded-[24px] md:mt-12 lg:mt-16 lg:rounded-[28px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-border-green p-4 sm:p-5 md:p-6 lg:border-r lg:p-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/assets/promo/stays-hero.jpg"
                alt="Luxury hotel pool overlooking the ocean at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-t border-border-green px-5 py-8 text-center sm:px-8 sm:py-10 md:border-t md:px-10 md:py-12 lg:border-t-0 lg:p-10">
            <h2 className="max-w-md text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-primary-green">
              Sleep well,
              <br />
              wherever you
              <br />
              wander
            </h2>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-primary-green/85 sm:mt-4 sm:text-base">
              Discover stays that feel right — from city hotels to quiet getaways.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("stays")}
              className="mt-5 inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-primary-green px-8 py-3 text-sm font-bold text-white transition-[transform,filter] duration-200 hover:scale-[1.02] hover:brightness-110 sm:mt-6 sm:w-auto"
            >
              Explore stays
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
