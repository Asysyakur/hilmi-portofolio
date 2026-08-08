"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (window.matchMedia("(pointer: coarse)").matches || reducedMotion) {
      return;
    }

    const draw = () => {
      const node = cursorRef.current;
      if (!node) {
        frameRef.current = null;
        return;
      }

      const x = targetRef.current.x - 12;
      const y = targetRef.current.y - 12;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frameRef.current = null;
    };

    const queueDraw = () => {
      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(draw);
      }
    };

    const updatePosition = (e: MouseEvent | PointerEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      const node = cursorRef.current;
      if (node) {
        node.style.opacity = "1";
      }

      queueDraw();
    };

    const refreshOnScroll = () => queueDraw();

    const leave = () => {
      const node = cursorRef.current;
      if (node) {
        node.style.opacity = "0";
      }
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });
    window.addEventListener("pointerdown", updatePosition, { passive: true });
    window.addEventListener("scroll", refreshOnScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("wheel", refreshOnScroll, { passive: true });
    window.addEventListener("mouseleave", leave);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("pointermove", updatePosition);
      window.removeEventListener("pointerdown", updatePosition);
      window.removeEventListener("scroll", refreshOnScroll, true);
      window.removeEventListener("wheel", refreshOnScroll);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] h-6 w-6 rounded-full border border-[#ffe600] mix-blend-difference shadow-[0_0_16px_rgba(255,230,0,0.7)]"
      style={{ opacity: 0, willChange: "transform, opacity" }}
    />
  );
}
