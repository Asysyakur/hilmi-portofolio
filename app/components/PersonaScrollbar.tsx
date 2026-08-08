"use client";

import { useEffect, useState } from "react";

export default function PersonaScrollbar() {
  const [scrollPercent, setScrollPercent] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        docHeight > 0 ? Math.max(2, (scrollTop / docHeight) * 100) : 2;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="persona-scrollbar"
      style={{ width: `${scrollPercent}%` }}
    />
  );
}
