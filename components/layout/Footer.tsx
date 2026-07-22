"use client";

import { useState } from "react";
import Link from "next/link";
import LegalModal from "@/components/ui/LegalModal";
import { scrollToSection } from "@/lib/gsap";
import {
  FOOTER_COLUMNS,
  FOOTER_DESTINATIONS,
  FOOTER_SEO_BLURB,
} from "@/lib/footer";
import type { LegalDocId } from "@/lib/legal";

export default function Footer() {
  const year = new Date().getFullYear();
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocId | null>(null);

  const openLegalDoc = (docId: LegalDocId) => {
    setActiveLegalDoc(docId);
  };

  const isRouteLink = (href: string) =>
    href.startsWith("/") && !href.startsWith("/#");

  const handleSectionLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (isRouteLink(href) || !href.startsWith("#") || href === "#") return;
    event.preventDefault();
    scrollToSection(href.slice(1));
  };

  const renderFooterLink = (link: (typeof FOOTER_COLUMNS)[number]["links"][number]) => {
    const legalAction = link.action;

    if (legalAction === "privacy" || legalAction === "terms") {
      return (
        <button
          type="button"
          onClick={() => openLegalDoc(legalAction)}
          className="cursor-pointer text-left text-sm text-white/75 transition-colors duration-200 hover:text-bright-green"
        >
          {link.label}
        </button>
      );
    }

    if (isRouteLink(link.href)) {
      return (
        <Link
          href={link.href}
          className="cursor-pointer text-sm text-white/75 transition-colors duration-200 hover:text-bright-green"
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        href={link.href}
        onClick={(event) => handleSectionLink(event, link.href)}
        className="cursor-pointer text-sm text-white/75 transition-colors duration-200 hover:text-bright-green"
      >
        {link.label}
      </a>
    );
  };

  return (
    <>
      <footer className="mt-auto border-t border-border-green/60 bg-primary-green text-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-md">
              <Link
                href="/"
                aria-label="Just Booking home"
                className="inline-flex cursor-pointer items-center text-xl font-bold tracking-tight sm:text-2xl"
              >
                <span className="text-white">just</span>
                <span className="text-bright-green">booking</span>
                <span className="text-white/90">.co.in</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {FOOTER_SEO_BLURB}
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-8 sm:max-w-md">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h2 className="text-sm font-bold tracking-wide text-white">
                    {column.title}
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>{renderFooterLink(link)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-8">
            <h2 className="text-sm font-bold tracking-wide text-white">
              Popular destinations
            </h2>
            <p className="mt-1 text-xs text-white/60">
              Flights · Hotels · Hire cars
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
              {FOOTER_DESTINATIONS.map((destination, index) => (
                <li
                  key={destination.label}
                  className="inline-flex items-center"
                >
                  <a
                    href={destination.href}
                    onClick={(event) =>
                      handleSectionLink(event, destination.href)
                    }
                    className="cursor-pointer text-sm text-white/75 transition-colors duration-200 hover:text-bright-green"
                  >
                    {destination.label}
                  </a>
                  {index < FOOTER_DESTINATIONS.length - 1 && (
                    <span className="mx-2 text-white/25" aria-hidden="true">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p>©{year} Justbooking.co.in</p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openLegalDoc("privacy")}
                className="cursor-pointer transition-colors duration-200 hover:text-bright-green"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => openLegalDoc("terms")}
                className="cursor-pointer transition-colors duration-200 hover:text-bright-green"
              >
                Terms & Conditions
              </button>
              <span>English · ₹ INR</span>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        docId={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </>
  );
}
