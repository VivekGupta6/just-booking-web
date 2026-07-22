"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { LEGAL_DOCS, type LegalDocId } from "@/lib/legal";

type LegalModalProps = {
  docId: LegalDocId | null;
  onClose: () => void;
};

export default function LegalModal({ docId, onClose }: LegalModalProps) {
  const isOpen = docId !== null;
  const doc = docId ? LEGAL_DOCS[docId] : null;

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

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="relative z-10 flex max-h-[min(84vh,720px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg animate-modal-in"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border-green/50 px-5 py-4 sm:px-6">
          <div>
            <h2
              id="legal-modal-title"
              className="text-lg font-bold text-primary-green sm:text-xl"
            >
              {doc.title}
            </h2>
            <p className="mt-1 text-xs text-muted">
              Last updated: {doc.lastUpdated}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${doc.title}`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary-green transition-colors duration-200 hover:bg-primary-green/5"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <div className="space-y-6">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h3 className="text-base font-bold text-primary-green">
                  {section.heading}
                </h3>
                <div className="mt-2 space-y-2">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
