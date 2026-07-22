import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsapPlugins(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const HEADER_OFFSET = 88;

export function scrollToSection(sectionId: string): void {
  if (typeof window === "undefined") return;

  const element = document.getElementById(sectionId);
  if (!element) return;

  if (prefersReducedMotion()) {
    element.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  registerGsapPlugins();
  gsap.to(window, {
    duration: 1.05,
    ease: "power3.inOut",
    scrollTo: {
      y: element,
      offsetY: HEADER_OFFSET,
      autoKill: true,
    },
  });
}

export function scrollToElement(elementId: string): void {
  if (typeof window === "undefined") return;

  const element = document.getElementById(elementId);
  if (!element) return;

  const highlight = () => {
    element.classList.add("search-highlight");
    window.setTimeout(() => {
      element.classList.remove("search-highlight");
    }, 1800);
  };

  if (prefersReducedMotion()) {
    element.scrollIntoView({ behavior: "auto", block: "center" });
    highlight();
    return;
  }

  registerGsapPlugins();
  gsap.to(window, {
    duration: 1.1,
    ease: "power3.inOut",
    scrollTo: {
      y: element,
      offsetY: HEADER_OFFSET + 24,
      autoKill: true,
    },
    onComplete: highlight,
  });
}

export { gsap, ScrollTrigger };
