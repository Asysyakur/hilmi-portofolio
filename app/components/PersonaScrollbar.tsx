"use client";

import { useEffect, useState } from "react";

export default function PersonaScrollbar() {
  const [scrollPercent, setScrollPercent] = useState(2);
  const [isVideoMode, setIsVideoMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        docHeight > 0 ? Math.max(2, (scrollTop / docHeight) * 100) : 2;
      setScrollPercent(percent);
    };

    const handleModeChange = (event: Event) => {
      const detail = (event as CustomEvent<{ isVideoMode?: boolean }>).detail;
      setIsVideoMode(Boolean(detail?.isVideoMode));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener(
      "persona-mode-toggle",
      handleModeChange as EventListener,
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "persona-mode-toggle",
        handleModeChange as EventListener,
      );
    };
  }, []);

  return (
    <div
      className={`persona-scrollbar ${isVideoMode ? "video-mode" : ""}`}
      style={{ width: `${scrollPercent}%` }}
    />
  );
}
