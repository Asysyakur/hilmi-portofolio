"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [typedLine, setTypedLine] = useState("");

  const profileLabel = "Profile // Frontend Developer";

  const heroSummary =
    "Building modern, responsive, and scalable web applications with React.js, Next.js, and Laravel. Experienced in fullstack development, REST APIs, database integration, and AI-powered applications.";

  const skillTags = [
    "React.js",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
    "MySQL",
    "Gemini AI",
  ];

  const commandItems = [
    "Build scalable React & Next.js UI",
    "Integrate robust RESTful APIs & DBs",
    "Deliver production-ready web apps",
  ];

  useEffect(() => {
    const phrases = [
      "Designing scalable frontend systems...",
      "Building reliable fullstack workflows...",
      "Shipping clean and usable products...",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timerId: number | null = null;

    const tick = () => {
      const current = phrases[phraseIndex] ?? "";

      if (!deleting) {
        charIndex += 1;
        setTypedLine(current.slice(0, charIndex));

        if (charIndex >= current.length) {
          deleting = true;
          timerId = window.setTimeout(tick, 1100);
          return;
        }
      } else {
        charIndex -= 1;
        setTypedLine(current.slice(0, charIndex));

        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      const speed = deleting ? 34 : 58;
      timerId = window.setTimeout(tick, speed);
    };

    tick();

    return () => {
      if (timerId !== null) {
        window.clearTimeout(timerId);
      }
    };
  }, []);

  const handleCardMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5.5;
    const rotateX = ((centerY - y) / centerY) * 5.5;

    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-10"
    >
      <div className="absolute left-[-22%] top-[22%] h-60 w-[132%] -rotate-12 bg-[#56b9ea] opacity-46 sm:h-80" />
      <div className="absolute left-[-14%] top-[58%] h-36 w-[120%] rotate-6 bg-[#ffe600] opacity-10 sm:h-44" />
      <div className="absolute inset-0 bg-linear-to-b from-white/6 to-[#17324f]/30" />

      <div className="absolute right-[6%] top-[22%] hidden rotate-[-8deg] rounded-xl border border-white/20 bg-[#0f1f34]/80 px-4 py-3 shadow-lg lg:block">
        <p className="persona-title text-lg tracking-[0.14em] text-[#f4f2ec]/85">
          BUILD / DESIGN / SHIP
        </p>
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 lg:pr-6">
          <span className="persona-label">{profileLabel}</span>

          <h2 className="persona-title text-[clamp(2.4rem,11vw,6.8rem)] leading-[0.88]">
            <span className="hero-glitch block" data-text="HILMI">
              HILMI
            </span>
            <span className="block text-[#f4f2ec]">ASYSYAKUR ISLAM</span>
          </h2>

          <p className="max-w-xl text-lg text-[#f4f2ec]/80 sm:text-xl">
            {heroSummary}
          </p>

          <div className="slash-card inline-flex w-full max-w-2xl items-center gap-3 border border-[#ffe600]/55 bg-[#3b3708]/45 px-4 py-3 shadow-[0_0_20px_rgba(255,230,0,0.2)]">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffe600] animate-pulse"
              aria-hidden="true"
            />
            <p
              aria-live="polite"
              className="persona-title text-sm uppercase tracking-[0.14em] text-[#f4f2ec] sm:text-base"
            >
              {typedLine}
              <span className="ml-1 inline-block text-[#ffe600] animate-pulse">
                |
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-widest text-[#f4f2ec]">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="slash-card border border-white/25 bg-black/65 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[#ffe600]/55 hover:shadow-[0_0_14px_rgba(255,230,0,0.22)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="slash-card persona-title bg-[#ffe600] px-7 py-3 text-2xl text-[#0b1220] transition hover:bg-[#fff067]"
            >
              View Projects
            </a>
            <a
              href="/HILMI_ASYSYAKUR_ISLAM-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="slash-card border border-white/25 bg-[#102033]/75 px-7 py-3 text-xl uppercase tracking-[0.12em] text-white transition hover:border-[#ffe600]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="slash-card border border-white/25 bg-black/60 px-7 py-3 text-xl uppercase tracking-[0.12em] text-white transition hover:border-[#ffe600]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <aside
          onMouseEnter={handleCardMouseEnter}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          className="slash-card persona-panel h-fit p-6 transition duration-300 sm:p-7 hover:border-[#ffe600]/40 hover:shadow-[0_14px_30px_rgba(0,0,0,0.45),0_0_18px_rgba(255,230,0,0.2)]"
          style={{
            transform: `perspective(900px) rotateX(${cardTilt.x.toFixed(2)}deg) rotateY(${cardTilt.y.toFixed(2)}deg) translateY(${isCardHovered ? -4 : 0}px)`,
            transition: isCardHovered
              ? "transform 120ms ease-out"
              : "transform 320ms ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="group mb-5 mx-auto w-36 overflow-hidden rounded-lg border border-white/20 sm:w-40">
            <Image
              src="/PasFoto.jpg"
              alt="Hilmi's portrait"
              width={200}
              height={250}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <p className="persona-title text-xl tracking-[0.13em] text-[#f4f2ec]/75">
            Quick Info
          </p>
          <div className="mt-5 space-y-4 text-[#f4f2ec]">
            <div className="flex items-center justify-between border-b border-white/15 pb-2 text-base uppercase tracking-[0.12em]">
              <span>Role</span>
              <span className="text-[#ffe600]">Frontend Developer</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/15 pb-2 text-base uppercase tracking-[0.12em]">
              <span>Status</span>
              <span className="text-[#ffe600]">Available</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/15 pb-2 text-base uppercase tracking-[0.12em]">
              <span>Location</span>
              <span className="text-[#ffe600]">Bandung, Indonesia</span>
            </div>
            <p className="pt-2 text-sm tracking-[0.06em] text-[#f4f2ec]/70">
              Recent Role: Front End Developer at PT Padepokan Tujuh Sembilan
              (Dec 2025 - Jun 2026). S1 Computer Science Education (UPI, GPA
              3.83).
            </p>

            <div className="mt-5 space-y-2 text-sm text-[#f4f2ec]/85">
              <p className="persona-title text-base uppercase tracking-[0.13em] text-[#f4f2ec]/65">
                What I bring
              </p>
              {commandItems.map((command) => (
                <p
                  key={command}
                  className="battle-command slash-card w-full px-3 py-2 text-left"
                >
                  {command}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
