"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { DRAWER_NAV_ITEMS, DRAWER_PARTNER_LINKS, POPULAR_BLOG_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenuDrawer({
  isOpen,
  onClose,
}: MobileMenuDrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-200",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-[min(100%,24rem)] flex-col bg-white shadow-lg transition-transform duration-200 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border-green px-4 py-4 sm:px-6 sm:py-5">
          <span className="text-lg font-bold text-primary-green">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-primary-green transition-colors duration-200 hover:bg-primary-green/5"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex flex-col gap-1">
            {DRAWER_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex min-h-12 items-center rounded-xl px-3.5 text-base font-bold tracking-tight transition-colors duration-200 hover:bg-primary-green/5",
                    isActive ? "text-bright-green" : "text-primary-green",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="my-5 border-t border-border-green/50" />

          <p className="mb-3 px-3.5 text-xs font-bold uppercase tracking-wider text-muted">
            Popular blogs
          </p>

          <div className="flex flex-col gap-1.5">
            {POPULAR_BLOG_LINKS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex min-h-12 items-center rounded-xl px-3.5 text-[15px] font-semibold leading-snug transition-colors duration-200 hover:bg-primary-green/5",
                    isActive ? "text-bright-green" : "text-primary-green",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="my-5 border-t border-border-green/50" />

          <p className="mb-3 px-3.5 text-xs font-bold uppercase tracking-wider text-muted">
            Travel sites
          </p>

          <div className="flex flex-col gap-1.5 pb-4">
            {DRAWER_PARTNER_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex min-h-12 items-center rounded-xl px-3.5 text-[15px] font-semibold leading-snug text-primary-green transition-colors duration-200 hover:bg-primary-green/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
