"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, summary, [data-cursor='hover']";

export default function BubbleCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const state = useRef({ visible: false, hovering: false, pressing: false });
  const rafRef = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnabled(finePointer.matches && !reduceMotion.matches);
    };

    sync();
    finePointer.addEventListener("change", sync);
    reduceMotion.addEventListener("change", sync);

    return () => {
      finePointer.removeEventListener("change", sync);
      reduceMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const html = document.documentElement;
    html.classList.add("has-bubble-cursor");

    const onMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      state.current.visible = true;

      const targetEl = event.target;
      if (targetEl instanceof Element) {
        state.current.hovering = Boolean(
          targetEl.closest(INTERACTIVE_SELECTOR),
        );
      }
    };

    const onDown = () => {
      state.current.pressing = true;
    };

    const onUp = () => {
      state.current.pressing = false;
    };

    const onLeave = () => {
      state.current.visible = false;
      state.current.hovering = false;
      state.current.pressing = false;
    };

    const tick = () => {
      const { visible, hovering, pressing } = state.current;
      const ease = hovering ? 0.42 : 0.18;
      ringPos.current.x += (target.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (target.current.y - ringPos.current.y) * ease;

      const pressScale = pressing ? 0.88 : 1;
      const opacity = visible ? 1 : 0;

      const root = rootRef.current;
      const ring = ringRef.current;
      const dot = dotRef.current;
      const hand = handRef.current;

      if (root) {
        root.dataset.mode = hovering ? "pointer" : "default";
        root.style.opacity = String(opacity);
      }

      if (ring) {
        const scale = hovering ? pressScale * 1.05 : pressScale;
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      if (dot) {
        const scale = pressing ? 0.75 : 1;
        dot.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      if (hand) {
        const scale = pressing ? 0.9 : 1;
        hand.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      html.classList.remove("has-bubble-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={rootRef}
      className="bubble-cursor"
      data-mode="default"
      aria-hidden="true"
    >
      <div ref={ringRef} className="bubble-cursor-ring" />
      <div ref={dotRef} className="bubble-cursor-dot" />
      <div ref={handRef} className="bubble-cursor-hand">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1.75a1.25 1.25 0 0 1 1.25 1.25v7.35a.4.4 0 0 0 .8 0V4.5a1.25 1.25 0 1 1 2.5 0v5.85a.4.4 0 0 0 .8 0V5.75a1.25 1.25 0 1 1 2.5 0v6.85a.4.4 0 0 0 .8 0V8.5a1.25 1.25 0 1 1 2.5 0v7.4c0 3.55-2.35 6.55-5.75 7.35l-.55.12a6.9 6.9 0 0 1-6.35-1.55l-3.2-2.75A3.15 3.15 0 0 1 5.2 15.3V10.5a1.25 1.25 0 1 1 2.5 0v1.85a.4.4 0 0 0 .8 0V3a1.25 1.25 0 0 1 2.5 0v7.35a.4.4 0 0 0 .8 0V3A1.25 1.25 0 0 1 11 1.75Z"
            fill="#ffffff"
            stroke="rgba(0,0,0,0.28)"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
