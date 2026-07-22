"use client";

import { useEffect } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsapPlugins,
  ScrollTrigger,
} from "@/lib/gsap";

export default function GsapPageEffects() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>("[data-animate-hero]");
      if (hero) {
        const heroBits = hero.querySelectorAll<HTMLElement>(
          "[data-animate-hero-item]",
        );
        gsap.from(heroBits, {
          opacity: 0,
          y: 28,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      const promo = document.querySelector<HTMLElement>("[data-animate-promo]");
      if (promo) {
        gsap.from(promo, {
          opacity: 0,
          y: 48,
          scale: 0.98,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: promo,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          clearProps: "transform",
        });
      }

      gsap.utils
        .toArray<HTMLElement>("[data-animate-section]")
        .forEach((section) => {
          const intro = section.querySelector<HTMLElement>(
            "[data-animate-intro]",
          );
          const cards = section.querySelectorAll<HTMLElement>(
            "[data-animate-card]",
          );

          if (intro) {
            gsap.from(intro, {
              opacity: 0,
              y: 36,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                toggleActions: "play none none none",
              },
              clearProps: "transform",
            });
          }

          if (cards.length > 0) {
            gsap.from(cards, {
              opacity: 0,
              y: 44,
              duration: 0.7,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 72%",
                toggleActions: "play none none none",
              },
              clearProps: "transform",
            });
          }
        });
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return null;
}
