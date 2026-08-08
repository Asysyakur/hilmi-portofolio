"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

import absensi84 from "../assets/Absensi/image 84.png";
import absensi85 from "../assets/Absensi/image 85.png";
import absensi86 from "../assets/Absensi/image 86.png";
import absensi89 from "../assets/Absensi/image 89.png";
import edugame55 from "../assets/Edugame/image 55.png";
import edugame56 from "../assets/Edugame/image 56.png";
import edugame58 from "../assets/Edugame/image 58.png";
import edugame59 from "../assets/Edugame/image 59.png";
import edugame62 from "../assets/Edugame/image 62.png";
import jelajahiku66 from "../assets/Jelajahiku/image 66.png";
import jelajahiku67 from "../assets/Jelajahiku/image 67.png";
import jelajahiku68 from "../assets/Jelajahiku/image 68.png";
import jelajahiku69 from "../assets/Jelajahiku/image 69.png";
import jelajahiku71 from "../assets/Jelajahiku/image 71.png";
import lupic77 from "../assets/Lupic/image 77.png";
import lupic79 from "../assets/Lupic/image 79.png";
import lupic80 from "../assets/Lupic/image 80.png";
import lupic81 from "../assets/Lupic/image 81.png";
import lupic82 from "../assets/Lupic/image 82.png";
import lupic83 from "../assets/Lupic/image 83.png";
import pos72 from "../assets/POS Ayam Babak Belur/image 72.png";
import pos73 from "../assets/POS Ayam Babak Belur/image 73.png";
import pos74 from "../assets/POS Ayam Babak Belur/image 74.png";
import pos75 from "../assets/POS Ayam Babak Belur/image 75.png";
import scarlett63 from "../assets/Scarlett/image 63.png";
import scarlett64 from "../assets/Scarlett/image 64.png";
import scarlett65 from "../assets/Scarlett/image 65.png";

type PortfolioProject = {
  title: string;
  desc: string;
  tag: string;
  period: string;
  image: string;
  github?: string;
  details: string[];
};

const projects: PortfolioProject[] = [
  {
    title: "CBT WEB APPLICATION",
    desc: "Developed Front-end and Back-end of a Computer-Based Test (CBT) web application using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "Fullstack",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/window.svg",
    details: [
      "Built assessment flow for students and administrators.",
      "Developed both responsive frontend UI and backend API & DB schemas.",
      "Optimized test execution stability, timer sync, and results processing.",
    ],
  },
  {
    title: "COMPANY PROFILE + E-COMMERCE",
    desc: "Developed Front-end and Back-end of a Company Profile and E-commerce website using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "Fullstack",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/window.svg",
    details: [
      "Built profile pages, product catalog, and checkout flow.",
      "Implemented responsive UI and backend integration.",
      "Focused on conversion-oriented business flow.",
    ],
  },
  {
    title: "HOTEL SIMULATION PLATFORM",
    desc: "Developed Front-end and Back-end of a Hotel Front Office and Housekeeping simulation website using React.js, Tailwind CSS, and AppWrite.",
    tag: "Simulation",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/globe.svg",
    details: [
      "Built modules for front office and housekeeping scenarios.",
      "Designed interactive flow for training context.",
      "Improved clarity for role-based operations.",
    ],
  },
  {
    title: "POS CASHIER WEB APP",
    desc: "Developed Front-end of a Point of Sale (POS) web application for cashier operations using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "Frontend",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/file.svg",
    details: [
      "Created cashier-focused transaction interfaces.",
      "Optimized speed for daily operational tasks.",
      "Built clean, practical flow for store usage.",
    ],
  },
  {
    title: "OFFICIAL MEMO APPLICATION",
    desc: "Developed the Front-end of an Official Memo Application for enterprise communication using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "Frontend",
    period: "Jan 2024 - Jun 2024 | PT ARM Solusi",
    image: "/file.svg",
    details: [
      "Built responsive frontend for company memo workflow.",
      "Focused on clarity, hierarchy, and formal business usage.",
      "Worked on production-facing UI implementation.",
    ],
  },
  {
    title: "EMPLOYEE EVALUATION PLATFORM",
    desc: "Developing a company employee evaluation platform to assess and manage staff performance effectively using Laravel, MySQL, and Tailwind CSS.",
    tag: "Fullstack",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/window.svg",
    details: [
      "Built evaluation forms and performance tracking views.",
      "Designed data flow for manager and employee roles.",
      "Focused on actionable performance insight delivery.",
    ],
  },
  {
    title: "DRAG-AND-DROP LMS PLATFORM",
    desc: "Developing an LMS platform featuring drag-and-drop interaction for a more intuitive learning experience using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "Fullstack",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/next.svg",
    details: [
      "Implemented drag-and-drop learning interactions.",
      "Added gamified mechanics to improve engagement.",
      "Focused on intuitive learning flow and student motivation.",
    ],
  },
  {
    title: "INTERACTIVE VILLAGE PROFILE + GEMINI AI",
    desc: "Developing an interactive village profile platform integrated with Gemini AI to provide intelligent insights and answers about local culture and heritage using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "AI Integration",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/globe.svg",
    details: [
      "Integrated Gemini AI for smart village information answers.",
      "Designed interactive local culture storytelling.",
      "Balanced exploration, information, and visual appeal.",
    ],
  },
  {
    title: "HAND GESTURE HIRING PLATFORM",
    desc: "Developing an interactive hiring platform that integrates hand gesture camera technology for candidate profile using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "AI / Tech Innovation",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/globe.svg",
    details: [
      "Integrated camera-based interaction for profile input.",
      "Built engaging and modern recruitment experience.",
      "Focused on usability for candidate onboarding.",
    ],
  },
  {
    title: "CHAMILO AI EVALUATION PLUGIN",
    desc: "Built an AI-powered evaluation plugin for Chamilo LMS to automate assessment processes and improve learning efficiency using Chamilo LMS, Gemini AI, and Ollama AI.",
    tag: "AI / LMS Plugin",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/vercel.svg",
    details: [
      "Automates evaluation workflow with AI assistance.",
      "Leveraged Gemini AI and Ollama AI for local & cloud AI inference.",
      "Supports more efficient learning assessment and automated feedback.",
    ],
  },
  {
    title: "RESPONSIVE PROMOTIONAL LANDING PAGE",
    desc: "Developed a responsive landing page website for digital promotion, focusing on modern UI design and optimal user experience using React.js and Tailwind CSS.",
    tag: "Frontend",
    period: "Dec 2025 - Jun 2026 | PT Padepokan Tujuh Sembilan",
    image: "/vercel.svg",
    details: [
      "Crafted modern promotional layout and components.",
      "Optimized responsive behavior for mobile and desktop.",
      "Improved visual hierarchy and readability.",
    ],
  },
  {
    title: "ODOO ERP SYSTEM EXPLORATION",
    desc: "Studied the workflow of Odoo and explored its core modules to understand integrated business processes within an ERP system.",
    tag: "ERP / Workflow",
    period: "Dec 2025 - Jun 2026 | PT Padepokan Tujuh Sembilan",
    image: "/file.svg",
    details: [
      "Explored core Odoo modules including Sales, Accounting, and Inventory.",
      "Analyzed integrated enterprise workflows for multi-department operations.",
      "Gained hands-on knowledge in custom ERP workflow integration.",
    ],
  },
  {
    title: "COMPETITION ACHIEVEMENTS",
    desc: "Favorite Winner UI/UX (2022), 3rd Runner-up Programming (2022), and 1st Runner-up UI/UX (2023) at DIMAS-TI AMLI.",
    tag: "Achievement",
    period: "2022 - 2023 | DIMAS-TI AMLI",
    image: "/file.svg",
    details: [
      "Favorite Winner, UI/UX Design Competition, DIMAS-TI AMLI 2022.",
      "Programming Competition - 3rd Runner-up, DIMAS-TI AMLI 2022.",
      "UI/UX Design Competition - 1st Runner-up, DIMAS-TI AMLI 2023.",
    ],
  },
];

const videoProjects: PortfolioProject[] = [
  {
    title: "CAMPUS EVENT AFTERMOVIE",
    desc: "Edited a cinematic aftermovie to capture atmosphere, crowd emotion, and event highlights.",
    tag: "Event Edit",
    period: "2023",
    image: "/window.svg",
    details: [
      "Built narrative pacing from opening to final crescendo.",
      "Balanced crowd ambience with licensed music track.",
      "Delivered social-ready formats for multiple platforms.",
    ],
  },
  {
    title: "PROMOTIONAL REELS PACK",
    desc: "Produced short-form promotional reels for digital campaigns with strong visual hooks.",
    tag: "Commercial",
    period: "2024",
    image: "/globe.svg",
    details: [
      "Designed first-3-second hooks to increase retention.",
      "Applied dynamic text animation and speed ramp transitions.",
      "Exported optimized variants for Reels, Shorts, and TikTok.",
    ],
  },
  {
    title: "EDUCATIONAL MOTION EXPLAINER",
    desc: "Edited educational explainer videos with clean narration sync and visual clarity.",
    tag: "Education",
    period: "2024",
    image: "/file.svg",
    details: [
      "Created modular edit template for recurring episodes.",
      "Combined screen captures, callouts, and motion overlays.",
      "Improved watchability through rhythm and visual hierarchy.",
    ],
  },
  {
    title: "BRAND STORY VIDEO",
    desc: "Assembled interview, b-roll, and typography to shape a compelling brand narrative.",
    tag: "Branding",
    period: "2025",
    image: "/next.svg",
    details: [
      "Structured emotional arc with strategic story beats.",
      "Performed color balancing for visual consistency.",
      "Integrated subtle sound design to elevate immersion.",
    ],
  },
  {
    title: "SHORT-FORM CONTENT SERIES",
    desc: "Developed an efficient editing pipeline for weekly short-form content delivery.",
    tag: "Social Content",
    period: "2025 - Present",
    image: "/vercel.svg",
    details: [
      "Built reusable presets for transitions and captions.",
      "Maintained consistent brand look across episodes.",
      "Reduced turnaround time while preserving quality.",
    ],
  },
];

const devGalleryFallback: StaticImageData[] = [
  absensi84,
  edugame55,
  jelajahiku66,
  scarlett63,
  lupic77,
  pos72,
];

const videoGalleryFallback: StaticImageData[] = [
  absensi85,
  edugame56,
  jelajahiku67,
  scarlett64,
  lupic79,
  pos73,
];

const CONFIDENTIAL_PLACEHOLDER = "/confidential-preview.png";

const projectGalleryMapping: Record<
  string,
  { dev: StaticImageData[]; video: StaticImageData[] }
> = {
  "CBT WEB APPLICATION": {
    dev: [pos72, pos73, pos74, pos75],
    video: [pos73, pos73, pos74, pos75],
  },
  "COMPANY PROFILE + E-COMMERCE": {
    dev: [lupic77, lupic79, lupic80, lupic81, lupic82, lupic83],
    video: [lupic79, lupic79, lupic80, lupic81, lupic82, lupic83],
  },
  "POS CASHIER WEB APP": {
    dev: [pos72, pos73, pos74, pos75],
    video: [pos73, pos73, pos74, pos75],
  },
  "EMPLOYEE EVALUATION PLATFORM": {
    dev: [absensi84, absensi85, absensi86, absensi89],
    video: [absensi84, absensi85, absensi84, absensi89],
  },
  "DRAG-AND-DROP LMS PLATFORM": {
    dev: [edugame55, edugame56, edugame58, edugame59, edugame62],
    video: [edugame56, edugame56, edugame58, edugame59, edugame62],
  },
  "INTERACTIVE VILLAGE PROFILE + GEMINI AI": {
    dev: [jelajahiku66, jelajahiku67, jelajahiku68, jelajahiku69, jelajahiku71],
    video: [
      jelajahiku67,
      jelajahiku67,
      jelajahiku68,
      jelajahiku69,
      jelajahiku71,
    ],
  },
};

const getProjectGallery = (
  project: PortfolioProject,
): (StaticImageData | string)[] => {
  const projectMapping = projectGalleryMapping[project.title];

  if (projectMapping) {
    return projectMapping.dev;
  }

  return [CONFIDENTIAL_PLACEHOLDER];
};

export default function Projects() {
  const sectionTitleClass =
    "persona-title text-3xl uppercase text-white sm:text-4xl";
  const contentTitleClass =
    "persona-title text-2xl uppercase leading-tight text-white sm:text-3xl";
  const metaTextClass =
    "mt-1 text-sm uppercase tracking-[0.13em] text-[#f4f2ec]/70";

  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [showSurpriseBurst, setShowSurpriseBurst] = useState(false);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [scrollbar, setScrollbar] = useState({ left: 0, width: 1 });
  const projectLaneRef = useRef<HTMLDivElement | null>(null);
  const scrollbarTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollbarDragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
  } | null>(null);
  const activeSnapIndexRef = useRef(0);
  const surpriseBurstTimeoutRef = useRef<number | null>(null);
  const surpriseOpenTimeoutRef = useRef<number | null>(null);

  const getProjectCards = (lane: HTMLDivElement) =>
    Array.from(lane.children) as HTMLElement[];

  const getLaneSnapPoints = (lane: HTMLDivElement, cards: HTMLElement[]) =>
    Array.from(
      new Set(cards.map((card) => Math.round(getCardTargetLeft(lane, card)))),
    ).sort((a, b) => a - b);

  const getNearestSnapIndex = (snapPoints: number[], left: number) => {
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    snapPoints.forEach((point, index) => {
      const distance = Math.abs(point - left);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const getCardTargetLeft = (lane: HTMLDivElement, card: HTMLElement) => {
    const maxScroll = Math.max(lane.scrollWidth - lane.clientWidth, 0);
    return Math.min(card.offsetLeft, maxScroll);
  };

  const displayedProjects = isVideoMode ? videoProjects : projects;

  useEffect(() => {
    const handleModeChange = (event: Event) => {
      const detail = (event as CustomEvent<{ isVideoMode?: boolean }>).detail;
      setIsVideoMode(Boolean(detail?.isVideoMode));
      setActiveProject(null);
      setActiveImageIndex(0);
      setActiveProjectIndex(0);
      setIsImageFullscreen(false);
      projectLaneRef.current?.scrollTo({ left: 0, behavior: "smooth" });
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

  useEffect(() => {
    const lane = projectLaneRef.current;
    if (!lane) {
      return;
    }

    const updateActiveIndex = () => {
      const cards = getProjectCards(lane);
      if (cards.length === 0) {
        setActiveProjectIndex(0);
        setCanScrollPrev(false);
        setCanScrollNext(false);
        return;
      }

      const maxScroll = Math.max(lane.scrollWidth - lane.clientWidth, 0);
      const thumbWidth = Math.max(lane.clientWidth / lane.scrollWidth, 0.12);
      setScrollbar({
        width: Math.min(thumbWidth, 1),
        left:
          maxScroll > 0
            ? (lane.scrollLeft / maxScroll) * (1 - Math.min(thumbWidth, 1))
            : 0,
      });
      const edgeThreshold = 8;
      const snapPoints = getLaneSnapPoints(lane, cards);
      if (snapPoints.length > 0) {
        activeSnapIndexRef.current = getNearestSnapIndex(
          snapPoints,
          lane.scrollLeft,
        );
      }

      if (lane.scrollLeft <= edgeThreshold) {
        setActiveProjectIndex(0);
        setCanScrollPrev(false);
        setCanScrollNext(maxScroll > edgeThreshold);
        return;
      }

      if (lane.scrollLeft >= maxScroll - edgeThreshold) {
        setActiveProjectIndex(cards.length - 1);
        setCanScrollPrev(true);
        setCanScrollNext(false);
        return;
      }

      const laneCenter = lane.scrollLeft + lane.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - laneCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveProjectIndex(nearestIndex);
      setCanScrollPrev(lane.scrollLeft > 4);
      setCanScrollNext(lane.scrollLeft < maxScroll - 4);
    };

    updateActiveIndex();
    lane.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      lane.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (surpriseBurstTimeoutRef.current !== null) {
        window.clearTimeout(surpriseBurstTimeoutRef.current);
      }

      if (surpriseOpenTimeoutRef.current !== null) {
        window.clearTimeout(surpriseOpenTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isImageFullscreen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageFullscreen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener,
    );
    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener,
      );
    };
  }, [isImageFullscreen]);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const gallery = getProjectGallery(activeProject);
    gallery.forEach((image) => {
      const src = typeof image === "string" ? image : image.src;
      if (src) {
        const img = new window.Image();
        img.src = src;
      }
    });
  }, [activeProject, isVideoMode]);

  const scrollProjects = (direction: "prev" | "next") => {
    const lane = projectLaneRef.current;
    if (!lane) {
      return;
    }

    const cards = getProjectCards(lane);
    if (cards.length === 0) {
      return;
    }

    const snapPoints = getLaneSnapPoints(lane, cards);

    if (snapPoints.length === 0) {
      return;
    }

    const nearestSnapIndex = getNearestSnapIndex(snapPoints, lane.scrollLeft);
    activeSnapIndexRef.current = nearestSnapIndex;

    const targetSnapIndex =
      direction === "next"
        ? Math.min(activeSnapIndexRef.current + 1, snapPoints.length - 1)
        : Math.max(activeSnapIndexRef.current - 1, 0);

    activeSnapIndexRef.current = targetSnapIndex;
    const targetLeft = snapPoints[targetSnapIndex];

    lane.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  };

  const handleScrollbarPointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const lane = projectLaneRef.current;
    const track = scrollbarTrackRef.current;
    if (!lane || !track) {
      return;
    }

    const maxScroll = Math.max(lane.scrollWidth - lane.clientWidth, 0);
    if (maxScroll <= 0) {
      return;
    }

    event.preventDefault();
    track.setPointerCapture(event.pointerId);
    scrollbarDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: lane.scrollLeft,
    };
  };

  const handleScrollbarPointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const drag = scrollbarDragRef.current;
    const lane = projectLaneRef.current;
    const track = scrollbarTrackRef.current;
    if (!drag || drag.pointerId !== event.pointerId || !lane || !track) {
      return;
    }

    const maxScroll = Math.max(lane.scrollWidth - lane.clientWidth, 0);
    const draggableWidth = track.clientWidth * (1 - scrollbar.width);
    if (maxScroll <= 0 || draggableWidth <= 0) {
      return;
    }

    const delta = event.clientX - drag.startX;
    lane.scrollLeft = Math.min(
      Math.max(drag.startScrollLeft + (delta / draggableWidth) * maxScroll, 0),
      maxScroll,
    );
  };

  const stopScrollbarDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (scrollbarDragRef.current?.pointerId !== event.pointerId) {
      return;
    }

    scrollbarDragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const jumpToProject = (index: number) => {
    const lane = projectLaneRef.current;
    if (!lane) {
      return;
    }

    const cards = getProjectCards(lane);
    const safeIndex = Math.min(Math.max(index, 0), cards.length - 1);
    const targetCard = cards[safeIndex];
    if (!targetCard) {
      return;
    }

    lane.scrollTo({
      left: getCardTargetLeft(lane, targetCard),
      behavior: "smooth",
    });
  };

  const triggerSurpriseMission = () => {
    if (displayedProjects.length === 0) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * displayedProjects.length);
    if (displayedProjects.length > 1 && randomIndex === activeProjectIndex) {
      randomIndex = (randomIndex + 1) % displayedProjects.length;
    }

    jumpToProject(randomIndex);
    setShowSurpriseBurst(true);

    if (surpriseBurstTimeoutRef.current !== null) {
      window.clearTimeout(surpriseBurstTimeoutRef.current);
    }

    if (surpriseOpenTimeoutRef.current !== null) {
      window.clearTimeout(surpriseOpenTimeoutRef.current);
    }

    surpriseBurstTimeoutRef.current = window.setTimeout(() => {
      setShowSurpriseBurst(false);
    }, 520);

    surpriseOpenTimeoutRef.current = window.setTimeout(() => {
      setActiveProject(displayedProjects[randomIndex]);
      setActiveImageIndex(0);
    }, 220);
  };

  const onProjectLaneKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollProjects("next");
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollProjects("prev");
      return;
    }

    const lane = projectLaneRef.current;
    if (!lane) {
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      lane.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      lane.scrollTo({ left: lane.scrollWidth, behavior: "smooth" });
    }
  };

  const activeProjectGallery = activeProject
    ? getProjectGallery(activeProject)
    : [];

  const slideActiveProjectImage = (direction: "prev" | "next") => {
    if (activeProjectGallery.length <= 1) {
      return;
    }

    setActiveImageIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % activeProjectGallery.length;
      }

      return (
        (prev - 1 + activeProjectGallery.length) % activeProjectGallery.length
      );
    });
  };

  const openFullscreenImage = () => {
    setIsImageFullscreen(true);
  };

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1px 1200px",
        }}
      >
        <div
          className={`absolute left-[-12%] top-20 h-56 w-[120%] rotate-6 opacity-40 ${isVideoMode ? "bg-[#4a7c9e]" : "bg-[#56b9ea]"}`}
        />
        <div
          className={`absolute left-[-10%] top-16 h-6 w-[112%] -rotate-5 opacity-50 ${isVideoMode ? "bg-[#d4722f]/70" : "bg-[#ffe600]/70"}`}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#10233a]/72" />
        {showSurpriseBurst ? (
          <div className="persona-surprise-burst" aria-hidden="true" />
        ) : null}

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className={sectionTitleClass}>
              {isVideoMode ? "Video Reel Archive" : "Project Archive"}
            </h3>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={triggerSurpriseMission}
                className={`persona-slant slash-card px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#0b1220] transition sm:text-xs ${
                  isVideoMode
                    ? "bg-[#d4722f] hover:bg-[#e8a66f]"
                    : "bg-[#ffe600] hover:bg-[#fff067]"
                }`}
                aria-label="Surprise me with a random project"
              >
                <span className="persona-slant-inner block">
                  Surprise Mission
                </span>
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollProjects("prev")}
                  disabled={!canScrollPrev}
                  className="slash-card battle-command px-2.5 py-2 text-[10px] sm:px-3 sm:text-xs"
                  aria-label={
                    isVideoMode ? "Previous video reels" : "Previous projects"
                  }
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => scrollProjects("next")}
                  disabled={!canScrollNext}
                  className="slash-card battle-command px-2.5 py-2 text-[10px] sm:px-3 sm:text-xs"
                  aria-label={
                    isVideoMode ? "Next video reels" : "Next projects"
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#f4f2ec]/58 sm:hidden">
              {isVideoMode
                ? "Swipe cards to explore reels"
                : "Swipe cards to explore projects"}
            </p>
            <div className="pointer-events-none absolute inset-y-0 -left-2 z-10 w-6 bg-linear-to-r from-[#10233a] to-transparent sm:w-10" />
            <div className="pointer-events-none absolute inset-y-0 -right-2 z-10 w-6 bg-linear-to-l from-[#10233a] to-transparent sm:w-10" />

            <div
              ref={projectLaneRef}
              onKeyDown={onProjectLaneKeyDown}
              tabIndex={0}
              role="region"
              aria-label={
                isVideoMode
                  ? "Video reel horizontal slider"
                  : "Project archive horizontal slider"
              }
              className={`persona-x-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-3 outline-none focus-visible:ring-2 sm:gap-5 ${
                isVideoMode
                  ? "focus-visible:ring-[#d4722f]/70"
                  : "focus-visible:ring-[#ffe600]/70"
              }`}
            >
              {displayedProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`slash-card persona-panel archive-card-shadow group w-[88vw] max-w-84 shrink-0 snap-start p-5 transition duration-300 odd:-rotate-[0.8deg] even:rotate-[0.8deg] hover:rotate-0 sm:w-96 sm:max-w-none sm:p-6 ${
                    isVideoMode
                      ? "hover:border-[#d4722f]/46"
                      : "hover:border-[#ffe600]/46"
                  }`}
                >
                  <p className="persona-title mb-3 text-2xl text-white/30 sm:text-3xl">
                    0{index + 1}
                  </p>
                  <p
                    className={`persona-slant mb-4 inline-block px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#0b1220] ${isVideoMode ? "bg-[#d4722f]" : "bg-[#ffe600]"}`}
                  >
                    <span className="persona-slant-inner block">
                      {project.tag}
                    </span>
                  </p>
                  <h3 className={contentTitleClass}>{project.title}</h3>
                  <p className="mt-3 text-sm text-[#f4f2ec]/78 sm:text-base">
                    {project.desc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(project);
                      setActiveImageIndex(0);
                    }}
                    className={`persona-slant battle-command slash-card mt-5 px-4 py-2 text-sm text-[#f4f2ec]/90 ${isVideoMode ? "group-hover:text-[#d4722f]" : "group-hover:text-[#ffe600]"}`}
                  >
                    <span className="persona-slant-inner block">
                      View Detail
                    </span>
                  </button>
                </article>
              ))}
            </div>
            <div
              ref={scrollbarTrackRef}
              onPointerDown={handleScrollbarPointerDown}
              onPointerMove={handleScrollbarPointerMove}
              onPointerUp={stopScrollbarDrag}
              onPointerCancel={stopScrollbarDrag}
              className="project-scrollbar mt-1"
              aria-hidden="true"
            >
              <div
                className="project-scrollbar-thumb"
                style={{
                  width: `${scrollbar.width * 100}%`,
                  left: `${scrollbar.left * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#f4f2ec]/60">
              {String(activeProjectIndex + 1).padStart(2, "0")} /{" "}
              {String(displayedProjects.length).padStart(2, "0")}
            </p>
            <div className="flex flex-wrap justify-end gap-1.5">
              {displayedProjects.map((project, index) => (
                <button
                  key={`indicator-${project.title}`}
                  type="button"
                  onClick={() => jumpToProject(index)}
                  className={`rounded-full transition ${
                    Math.abs(index - activeProjectIndex) === 0
                      ? isVideoMode
                        ? "h-2.5 w-8 bg-[#d4722f]"
                        : "h-2.5 w-8 bg-[#ffe600]"
                      : Math.abs(index - activeProjectIndex) === 1
                        ? isVideoMode
                          ? "h-2.5 w-4 bg-[#4a7c9e]/85"
                          : "h-2.5 w-4 bg-[#56b9ea]/85"
                        : Math.abs(index - activeProjectIndex) === 2
                          ? "h-2.5 w-3 bg-white/55"
                          : isVideoMode
                            ? "h-2.5 w-2.5 bg-white/25 hover:bg-[#4a7c9e]/70"
                            : "h-2.5 w-2.5 bg-white/25 hover:bg-[#56b9ea]/70"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeProject ? (
        <div
          className="fixed inset-0 z-1100 flex items-center justify-center bg-[#10233a]/78 px-4 py-10"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="persona-panel slash-card w-full max-w-3xl border border-white/20 p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className={`persona-slant mb-2 inline-block px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#f4f2ec] ${
                    isVideoMode ? "bg-[#d4722f]" : "bg-[#56b9ea]"
                  }`}
                >
                  <span className="persona-slant-inner block">
                    {activeProject.tag}
                  </span>
                </p>
                <h3 className={contentTitleClass}>{activeProject.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.13em] text-[#f4f2ec]/70">
                  {activeProject.period}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className={`battle-command slash-card px-3 py-2 text-sm text-[#f4f2ec] ${
                  isVideoMode ? "hover:text-[#e8a66f]" : "hover:text-[#ffe600]"
                }`}
              >
                Close
              </button>
            </div>

            <p className="mt-6 text-base leading-7 text-[#f4f2ec]/85">
              {activeProject.desc}
            </p>

            <div className="mt-5 rounded-xl border border-white/15 bg-black/35 p-4">
              <div className="relative h-48 overflow-hidden rounded-lg sm:h-72 lg:h-96">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${isVideoMode ? "from-[#4a7c9e]/18 to-[#d4722f]/12" : "from-[#56b9ea]/18 to-[#ffe600]/12"}`}
                />
                {activeProjectGallery.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => slideActiveProjectImage("prev")}
                      className="battle-command absolute left-3 top-1/2 z-20 -translate-y-1/2 px-3 py-1.5 text-xs"
                      aria-label="Previous image"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={() => slideActiveProjectImage("next")}
                      className="battle-command absolute right-3 top-1/2 z-20 -translate-y-1/2 px-3 py-1.5 text-xs"
                      aria-label="Next image"
                    >
                      Next
                    </button>
                  </>
                ) : null}
                <Image
                  src={
                    activeProjectGallery[activeImageIndex] ??
                    activeProject.image
                  }
                  alt={`${activeProject.title} visual`}
                  fill
                  sizes="(max-width: 640px) 100vw, 800px"
                  onClick={openFullscreenImage}
                  className="relative z-10 cursor-zoom-in object-contain object-center opacity-95"
                />
              </div>

              {activeProjectGallery.length > 1 ? (
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  {activeProjectGallery.map((imagePath, index) => (
                    <button
                      key={`${activeProject.title}-gallery-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2.5 rounded-full transition cursor-pointer ${
                        index === activeImageIndex
                          ? `w-7 ${isVideoMode ? "bg-[#d4722f]" : "bg-[#ffe600]"}`
                          : `w-2 bg-white/35 ${isVideoMode ? "hover:bg-[#4a7c9e]" : "hover:bg-[#56b9ea]"}`
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {activeProject.details.map((detail) => (
                <div
                  key={detail}
                  className="slash-card border border-white/15 bg-black/65 p-4 text-sm text-[#f4f2ec]/80"
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {activeProject && isImageFullscreen ? (
        <div
          className="fixed inset-0 z-1300 flex items-center justify-center bg-black/95 p-1 sm:p-2"
          onClick={() => setIsImageFullscreen(false)}
        >
          <div
            className="relative h-full w-full max-w-[99vw] max-h-[99vh] sm:max-w-[98vw] sm:max-h-[98vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={
                activeProjectGallery[activeImageIndex] ?? activeProject.image
              }
              alt={`${activeProject.title} fullscreen visual`}
              width={1920}
              height={1080}
              unoptimized
              priority
              className="max-w-full max-h-full object-contain opacity-100"
            />

            <button
              type="button"
              onClick={() => setIsImageFullscreen(false)}
              className="battle-command absolute right-3 top-3 z-20 px-3 py-2 text-xs"
              aria-label="Close fullscreen image"
            >
              Close
            </button>

            {activeProjectGallery.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => slideActiveProjectImage("prev")}
                  className="battle-command absolute left-3 top-1/2 z-20 -translate-y-1/2 px-3 py-1.5 text-xs"
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => slideActiveProjectImage("next")}
                  className="battle-command absolute right-3 top-1/2 z-20 -translate-y-1/2 px-3 py-1.5 text-xs"
                  aria-label="Next image"
                >
                  Next
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
