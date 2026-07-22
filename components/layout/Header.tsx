"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import MobileMenuDrawer from "./MobileMenuDrawer";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 bg-white transition-[border-color] duration-200",
          isScrolled && "border-b border-border-green",
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 md:h-[72px] lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 flex-1 cursor-pointer items-center"
            aria-label="Just Booking home"
          >
            <Logo />
          </Link>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-menu-drawer"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary-green transition-colors duration-200 hover:bg-primary-green/5 cursor-pointer"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
