"use client";

import { useEffect, useState } from "react";

const developerStats = [
  { name: "React.js / Next.js", value: 94 },
  { name: "Laravel / PHP", value: 92 },
  { name: "Tailwind CSS & UI/UX", value: 93 },
  { name: "MySQL & REST API", value: 90 },
  { name: "AI Integration (Gemini/Ollama)", value: 88 },
  { name: "ERP & LMS (Odoo/Chamilo)", value: 87 },
];

const achievements = [
  {
    year: "2023",
    title: "UI/UX Design Competition",
    result: "1st Runner-up",
    event: "DIMAS-TI AMLI 2023",
  },
  {
    year: "2022",
    title: "Programming Competition",
    result: "3rd Runner-up",
    event: "DIMAS-TI AMLI 2022",
  },
  {
    year: "2022",
    title: "UI/UX Design Competition",
    result: "Favorite Winner",
    event: "DIMAS-TI AMLI 2022",
  },
];

const videoEditorStats = [
  { name: "Storytelling", value: 93 },
  { name: "Cutting Rhythm", value: 91 },
  { name: "Color Grading", value: 89 },
  { name: "Motion Graphics", value: 87 },
  { name: "Audio Mixing", value: 85 },
  { name: "Client Delivery", value: 92 },
];

export default function Stats() {
  const [isVideoMode, setIsVideoMode] = useState(false);

  useEffect(() => {
    const handleModeChange = (event: Event) => {
      const detail = (event as CustomEvent<{ isVideoMode?: boolean }>).detail;
      setIsVideoMode(Boolean(detail?.isVideoMode));
    };

    window.addEventListener(
      "persona-mode-toggle",
      handleModeChange as EventListener,
    );
    return () => {
      window.removeEventListener(
        "persona-mode-toggle",
        handleModeChange as EventListener,
      );
    };
  }, []);

  const stats = isVideoMode ? videoEditorStats : developerStats;

  return (
    <section id="stats" className="relative px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="persona-title text-5xl uppercase leading-none text-white sm:text-6xl">
            {isVideoMode ? "Editing Stats" : "Skills & Achievements"}
          </h2>
          <span className="slash-card hidden border border-white/25 bg-black/70 px-4 py-2 text-sm uppercase tracking-[0.14em] text-[#f4f2ec]/80 md:block">
            {isVideoMode
              ? "Creative Performance Report"
              : "UPI - Technical Skills Report"}
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.name} className="slash-card persona-panel p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-lg uppercase tracking-widest text-[#f4f2ec]">
                  {stat.name}
                </p>
                <p
                  className={`persona-title text-2xl ${
                    isVideoMode ? "text-[#e8a66f]" : "text-[#ffe600]"
                  }`}
                >
                  {stat.value}%
                </p>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-[#2a2a2a]">
                <div
                  className={`h-full rounded-full ${
                    isVideoMode
                      ? "bg-linear-to-r from-[#4a7c9e] to-[#d4722f]"
                      : "bg-linear-to-r from-[#56b9ea] to-[#ffe600]"
                  }`}
                  style={{ width: `${stat.value}%` }}
                />
              </div>
            </article>
          ))}
        </div>

        {!isVideoMode && (
          <div className="mt-12">
            <h3 className="persona-title mb-6 text-2xl uppercase tracking-[0.12em] text-[#f4f2ec]/90 sm:text-3xl">
              Competitions & Achievements
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {achievements.map((item) => (
                <div
                  key={item.title + item.result}
                  className="slash-card persona-panel border border-[#ffe600]/30 p-5 transition duration-300 hover:border-[#ffe600]"
                >
                  <span className="persona-title text-xs uppercase tracking-widest text-[#ffe600]">
                    {item.event} ({item.year})
                  </span>
                  <h4 className="persona-title mt-2 text-xl text-white">
                    {item.result}
                  </h4>
                  <p className="mt-1 text-sm text-[#f4f2ec]/80">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
