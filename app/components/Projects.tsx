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

import absensi84 from "../assets/Absensi/image 84.webp";
import absensi85 from "../assets/Absensi/image 85.webp";
import absensi86 from "../assets/Absensi/image 86.webp";
import absensi89 from "../assets/Absensi/image 89.webp";
import edugame55 from "../assets/Edugame/image 55.webp";
import edugame56 from "../assets/Edugame/image 56.webp";
import edugame58 from "../assets/Edugame/image 58.webp";
import edugame59 from "../assets/Edugame/image 59.webp";
import edugame62 from "../assets/Edugame/image 62.webp";
import lupic77 from "../assets/Lupic/image 77.webp";
import lupic79 from "../assets/Lupic/image 79.webp";
import lupic80 from "../assets/Lupic/image 80.webp";
import lupic81 from "../assets/Lupic/image 81.webp";
import lupic82 from "../assets/Lupic/image 82.webp";
import lupic83 from "../assets/Lupic/image 83.webp";
import pos72 from "../assets/POS Ayam Babak Belur/image 72.webp";
import pos73 from "../assets/POS Ayam Babak Belur/image 73.webp";
import pos74 from "../assets/POS Ayam Babak Belur/image 74.webp";
import pos75 from "../assets/POS Ayam Babak Belur/image 75.webp";

import hiring1 from "../assets/Hiring/hiring1.webp";
import hiring2 from "../assets/Hiring/hiring2.webp";
import hiring3 from "../assets/Hiring/hiring3.webp";
import hiring4 from "../assets/Hiring/hiring4.webp";
import hiring5 from "../assets/Hiring/hiring5.webp";
import hiring6 from "../assets/Hiring/hiring6.webp";
import hiring7 from "../assets/Hiring/hiring7.webp";
import hiring8 from "../assets/Hiring/hiring8.webp";
import hiring9 from "../assets/Hiring/hiring9.webp";

import landing1 from "../assets/LandingPage/landing1.webp";
import landing2 from "../assets/LandingPage/landing2.webp";
import landing3 from "../assets/LandingPage/landing3.webp";
import landing4 from "../assets/LandingPage/landing4.webp";
import landing5 from "../assets/LandingPage/landing5.webp";
import landing6 from "../assets/LandingPage/landing6.webp";

import favorit from "../assets/Achievements/favorit.webp";
import harapan1 from "../assets/Achievements/harapan1.webp";
import harapan3 from "../assets/Achievements/harapan3.webp";
import juara1 from "../assets/Achievements/juara1.webp";

type PortfolioProject = {
  title: string;
  desc: string;
  tag: string;
  period: string;
  image: string;
  role: string;
  techStack: string[];
  problem: string;
  solution: string;
  contribution: string;
  keyFeatures: string[];
  linkType?: "private" | "github" | "live";
  linkUrl?: string;
  details: string[];
  isFeatured?: boolean;
};

const projects: PortfolioProject[] = [
  {
    title: "CBT WEB APPLICATION",
    desc: "Built a Computer-Based Testing platform for automated examination management, real-time timer sync, and instant grading.",
    tag: "Fullstack",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/window.svg",
    role: "Fullstack Developer",
    techStack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
    problem: "Manual examination processes made question management, exam scheduling, and result grading time-consuming and error-prone.",
    solution: "Built a web-based CBT platform featuring automated scoring, examination session management, user authentication, and instant result analytics.",
    contribution: "Developed both responsive frontend quiz interface and backend REST APIs, authentication middleware, timer sync, and automated score processing.",
    keyFeatures: [
      "Automated exam scoring & instant analytics reporting",
      "Real-time exam timer synchronization across sessions",
      "Role-based access controls for students and administrators",
      "Printable exam result reports and CSV data export"
    ],
    linkType: "private",
    details: [
      "Built assessment flow for students and administrators.",
      "Developed both responsive frontend UI and backend API & DB schemas.",
      "Optimized test execution stability, timer sync, and results processing.",
    ],
    isFeatured: true,
  },
  {
    title: "GAMIFIED LEARNING MANAGEMENT SYSTEM",
    desc: "Developing a gamified LMS featuring RPG progression mechanics, achievement badges, and interactive course milestones.",
    tag: "Fullstack",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/next.svg",
    role: "Fullstack Developer",
    techStack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
    problem: "Traditional online learning management platforms often suffer from student fatigue, drop-outs, and low completion rates.",
    solution: "Developed a gamified LMS featuring RPG progression mechanics, achievement badges, and interactive course milestones to boost engagement.",
    contribution: "Designed and built the gamified frontend UI, course completion reward APIs, student progress database models, and interactive quiz modules.",
    keyFeatures: [
      "Gamified course completion reward & RPG progression system",
      "Student XP, level-up, and achievement badge tracking",
      "Interactive course modules and real-time quiz assessment",
      "Teacher dashboard for monitoring student course milestones"
    ],
    linkType: "private",
    details: [
      "RPG element for course completion reward system.",
      "Gamified mechanics to improve engagement.",
      "Focused on intuitive learning flow and student motivation.",
    ],
    isFeatured: true,
  },
  {
    title: "POS CASHIER WEB APP",
    desc: "Developed a Point of Sale frontend web app for cashier operations, dynamic cart building, and transaction processing.",
    tag: "Frontend",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/file.svg",
    role: "Frontend Developer",
    techStack: ["React.js", "Tailwind CSS", "Laravel API", "MySQL"],
    problem: "Retail cashiers required a fast, error-free checkout interface to eliminate transaction delays during peak operational hours.",
    solution: "Designed and built a cashier-focused Point of Sale (POS) frontend web application optimized for daily operational speed.",
    contribution: "Developed checkout UI components, cart state management, product search filters, and transaction receipt generation logic.",
    keyFeatures: [
      "Fast product search & dynamic cart builder interface",
      "Instant total calculation and payment change processing",
      "Cashier-friendly keyboard shortcut navigation",
      "Transaction summary modal & receipt print flow"
    ],
    linkType: "private",
    details: [
      "Created cashier-focused transaction interfaces.",
      "Optimized speed for daily operational tasks.",
      "Built clean, practical flow for store usage.",
    ],
    isFeatured: true,
  },
  {
    title: "EMPLOYEE EVALUATION PLATFORM",
    desc: "Developing a company staff evaluation platform to track, score, and manage employee performance across departments.",
    tag: "Fullstack",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/window.svg",
    role: "Fullstack Developer",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Blade"],
    problem: "Company employee performance evaluations were handled through fragmented spreadsheets without unified progress tracking.",
    solution: "Built a centralized company employee evaluation platform to track, score, and report staff performance effectively.",
    contribution: "Developed evaluation form interfaces, manager & employee access controls, database schema design, and summary dashboard.",
    keyFeatures: [
      "Multi-criteria employee evaluation forms & rating scales",
      "Manager review & staff self-evaluation access roles",
      "Automated performance score aggregation & analytics",
      "Printable PDF evaluation reports for HR decision making"
    ],
    linkType: "private",
    details: [
      "Built evaluation forms and performance tracking views.",
      "Designed data flow for manager and employee roles.",
      "Focused on actionable performance insight delivery.",
    ],
    isFeatured: true,
  },
  {
    title: "CHAMILO AI EVALUATION PLUGIN",
    desc: "Built an AI-powered evaluation plugin for Chamilo LMS integrating cloud Gemini AI & local Ollama AI for automated essay grading.",
    tag: "AI / LMS Plugin",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/vercel.svg",
    role: "Fullstack Developer / AI Integration",
    techStack: ["Chamilo LMS", "PHP", "Gemini AI", "Ollama AI"],
    problem: "Grading open-ended essay assignments in LMS platforms consumed extensive instructor time, causing assessment bottlenecks.",
    solution: "Developed an AI-powered plugin for Chamilo LMS integrating both cloud (Gemini AI) and local (Ollama AI) models for automated grading assistance.",
    contribution: "Built the plugin integration architecture, API connectors for Gemini AI & Ollama AI, prompt grading logic, and instructor review UI.",
    keyFeatures: [
      "Automated essay assignment grading assistance with AI feedback",
      "Dual Gemini AI cloud & Ollama local AI model support",
      "Customizable evaluation rubric prompt configurations",
      "Instructor score review and manual override controls"
    ],
    linkType: "private",
    details: [
      "Automates evaluation workflow with AI assistance.",
      "Leveraged Gemini AI and Ollama AI for local & cloud AI inference.",
      "Supports more efficient learning assessment and automated feedback.",
    ],
    isFeatured: true,
  },
  {
    title: "HAND GESTURE HIRING PLATFORM",
    desc: "Developing an interactive hiring platform that integrates camera hand-gesture technology for touchless candidate profile navigation.",
    tag: "AI / Tech Innovation",
    period: "Nov 2024 - Aug 2025 | Freelance",
    image: "/globe.svg",
    role: "Fullstack Developer",
    techStack: ["React.js", "Laravel", "MySQL", "MediaPipe / OpenCV", "Tailwind CSS"],
    problem: "Standard text-only application forms failed to provide interactive candidate engagement during early-stage recruitment.",
    solution: "Built an innovative hiring platform integrating camera-based hand gesture recognition for candidate profile navigation.",
    contribution: "Integrated browser camera hand-gesture detection, candidate onboarding flows, REST APIs, and recruitment dashboard interface.",
    keyFeatures: [
      "Camera-based hand gesture detection & navigation",
      "Interactive candidate video & profile showcase",
      "Recruiter evaluation & candidate filtering portal",
      "Responsive touchless onboarding user interface"
    ],
    linkType: "private",
    details: [
      "Integrated camera-based interaction for profile input.",
      "Built engaging and modern recruitment experience.",
      "Focused on usability for candidate onboarding.",
    ],
    isFeatured: true,
  },
  {
    title: "COMPANY PROFILE + E-COMMERCE",
    desc: "Developed Front-end and Back-end of a Company Profile and E-commerce website using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "Fullstack",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/window.svg",
    role: "Fullstack Developer",
    techStack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
    problem: "Businesses required a cohesive company showcase and online storefront to present products and capture customer leads.",
    solution: "Built an integrated company profile and e-commerce web platform with product catalog, cart, and inquiry flows.",
    contribution: "Developed product catalog frontend components, backend REST APIs, shopping cart state management, and database models.",
    keyFeatures: [
      "Responsive company profile landing sections",
      "Product catalog with category filters & detail views",
      "Integrated shopping cart & customer checkout flow",
      "Admin panel for managing products and company info"
    ],
    linkType: "private",
    details: [
      "Built profile pages, product catalog, and checkout flow.",
      "Implemented responsive UI and backend integration.",
      "Focused on conversion-oriented business flow.",
    ],
    isFeatured: false,
  },
  {
    title: "OFFICIAL MEMO APPLICATION",
    desc: "Developed the Front-end of an Official Memo Application for enterprise communication using React.js, Laravel, MySQL, and Tailwind CSS.",
    tag: "Frontend",
    period: "Jan 2024 - Jun 2024 | PT ARM Solusi",
    image: "/file.svg",
    role: "Frontend Developer",
    techStack: ["React.js", "Tailwind CSS", "Laravel API"],
    problem: "Enterprise internal communications lacked a structured, official digital memo dispatch and tracking interface.",
    solution: "Developed the frontend application for official internal memos with status indicators, department filters, and document preview.",
    contribution: "Built memo creation forms, inbox/outbox views, memo preview layouts, and API integration with enterprise backends.",
    keyFeatures: [
      "Official memo draft, dispatch, and review interfaces",
      "Departmental approval workflow & status tracking",
      "Document preview modal and printable memo views",
      "Clean corporate design system implementation"
    ],
    linkType: "private",
    details: [
      "Built responsive frontend for company memo workflow.",
      "Focused on clarity, hierarchy, and formal business usage.",
      "Worked on production-facing UI implementation.",
    ],
    isFeatured: false,
  },
  {
    title: "HOTEL SIMULATION PLATFORM",
    desc: "Developed Front-end and Back-end of a Hotel Front Office and Housekeeping simulation website using React.js, Tailwind CSS, and AppWrite.",
    tag: "Simulation",
    period: "Oct 2023 - Feb 2024 | PT Widata Intelligent Solution",
    image: "/globe.svg",
    role: "Fullstack Developer",
    techStack: ["React.js", "AppWrite", "Tailwind CSS"],
    problem: "Hospitality students needed practical simulation software for front office room reservation and housekeeping operations.",
    solution: "Built a web-based hotel simulation platform replicating real-world reservation desk and room status management scenarios.",
    contribution: "Developed front office desk views, room status tracking dashboards, and AppWrite cloud database integration.",
    keyFeatures: [
      "Interactive front office reservation desk simulator",
      "Housekeeping room status tracking & update board",
      "Role-based operational scenarios for training",
      "AppWrite database integration for real-time state sync"
    ],
    linkType: "private",
    details: [
      "Built modules for front office and housekeeping scenarios.",
      "Designed interactive flow for training context.",
      "Improved clarity for role-based operations.",
    ],
    isFeatured: false,
  },
  {
    title: "RESPONSIVE PROMOTIONAL LANDING PAGE",
    desc: "Developed a responsive landing page website for digital promotion, focusing on modern UI design and optimal user experience using React.js and Tailwind CSS.",
    tag: "Frontend",
    period: "Dec 2025 - Jun 2026 | PT Padepokan Tujuh Sembilan",
    image: "/vercel.svg",
    role: "Frontend Developer",
    techStack: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    problem: "Promotional campaigns required a high-converting, mobile-optimized web landing page with clean brand typography.",
    solution: "Designed and built a responsive promotional landing page with high visual appeal, smooth scroll sections, and CTA touchpoints.",
    contribution: "Created responsive UI components, hero banner animations, interactive layout sections, and cross-browser testing.",
    keyFeatures: [
      "High-impact hero section with clear CTA conversion points",
      "100% mobile-first responsive layout optimization",
      "Clean CSS animations & interactive scroll behavior",
      "Optimized asset loading & fast page performance"
    ],
    linkType: "private",
    details: [
      "Crafted modern promotional layout and components.",
      "Optimized responsive behavior for mobile and desktop.",
      "Improved visual hierarchy and readability.",
    ],
    isFeatured: false,
  },
  {
    title: "ODOO ERP SYSTEM EXPLORATION",
    desc: "Studied the workflow of Odoo and explored its core modules to understand integrated business processes within an ERP system.",
    tag: "ERP / Workflow",
    period: "Dec 2025 - Jun 2026 | PT Padepokan Tujuh Sembilan",
    image: "/file.svg",
    role: "Frontend / Workflow Explorer",
    techStack: ["Odoo ERP", "Python", "PostgreSQL", "XML"],
    problem: "Understanding complex enterprise resource planning (ERP) workflows across sales, inventory, and accounting departments.",
    solution: "Explored Odoo ERP core architecture and custom module customization to understand end-to-end business process integration.",
    contribution: "Analyzed Odoo modules, configured test environment workflows, and documented multi-department enterprise data flows.",
    keyFeatures: [
      "Sales, Inventory, and Accounting module workflow analysis",
      "Enterprise multi-department data flow mapping",
      "Hands-on custom ERP view & workflow integration analysis"
    ],
    linkType: "private",
    details: [
      "Explored core Odoo modules including Sales, Accounting, and Inventory.",
      "Analyzed integrated enterprise workflows for multi-department operations.",
      "Gained hands-on knowledge in custom ERP workflow integration.",
    ],
    isFeatured: false,
  },
  {
    title: "COMPETITION ACHIEVEMENTS",
    desc: "Favorite Winner UI/UX (2022), 3rd Runner-up Programming (2022), and 1st Runner-up UI/UX (2023) at DIMAS-TI AMLI.",
    tag: "Achievement",
    period: "2022 - 2023 | DIMAS-TI AMLI",
    image: "/file.svg",
    role: "UI/UX & Programming Contestant",
    techStack: ["Figma", "React.js", "Algorithms", "UI/UX"],
    problem: "Competitive programming and UI/UX design challenges under tight deadline constraints.",
    solution: "Designed user-centered digital solutions and solved algorithm challenges, achieving top placements across 3 national competitions.",
    contribution: "Led UI/UX prototyping in Figma, developed frontend interactive demos, and solved algorithmic challenges.",
    keyFeatures: [
      "1st Runner-up, UI/UX Design Competition, DIMAS-TI AMLI 2023",
      "3rd Runner-up, Programming Competition, DIMAS-TI AMLI 2022",
      "Favorite Winner, UI/UX Design Competition, DIMAS-TI AMLI 2022"
    ],
    linkType: "private",
    details: [
      "Favorite Winner, UI/UX Design Competition, DIMAS-TI AMLI 2022.",
      "Programming Competition - 3rd Runner-up, DIMAS-TI AMLI 2022.",
      "UI/UX Design Competition - 1st Runner-up, DIMAS-TI AMLI 2023.",
    ],
    isFeatured: false,
  },
];

const devGalleryFallback: StaticImageData[] = [
  absensi84,
  edugame55,
  lupic77,
  pos72,
];

const CONFIDENTIAL_PLACEHOLDER = "/confidential-preview.png";

const projectGalleryMapping: Record<
  string,
  { dev: StaticImageData[] }
> = {
  "COMPANY PROFILE + E-COMMERCE": {
    dev: [lupic77, lupic79, lupic80, lupic81, lupic82, lupic83],
  },
  "POS CASHIER WEB APP": {
    dev: [pos72, pos73, pos74, pos75],
  },
  "EMPLOYEE EVALUATION PLATFORM": {
    dev: [absensi84, absensi85, absensi86, absensi89],
  },
  "GAMIFIED LEARNING MANAGEMENT SYSTEM": {
    dev: [edugame55, edugame56, edugame58, edugame59, edugame62],
  },
  "HAND GESTURE HIRING PLATFORM": {
    dev: [
      hiring1,
      hiring2,
      hiring3,
      hiring4,
      hiring5,
      hiring6,
      hiring7,
      hiring8,
      hiring9,
    ],
  },
  "RESPONSIVE PROMOTIONAL LANDING PAGE": {
    dev: [
      landing1,
      landing2,
      landing3,
      landing4,
      landing5,
      landing6,
    ],
  },
  "COMPETITION ACHIEVEMENTS": {
    dev: [juara1, favorit, harapan1, harapan3],
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
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [isModalImageLoading, setIsModalImageLoading] = useState(false);
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

  const displayedProjects = projects;

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
    // Preload ALL project images in background as soon as page mounts
    const preloadAll = () => {
      const allImages: (string | StaticImageData)[] = [];
      Object.values(projectGalleryMapping).forEach((mapping) => {
        allImages.push(...mapping.dev);
      });
      projects.forEach((proj) => {
        if (proj.image) allImages.push(proj.image);
      });

      allImages.forEach((img) => {
        const src = typeof img === "string" ? img : img?.src;
        if (src) {
          const imageObj = new window.Image();
          imageObj.src = src;
        }
      });
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(preloadAll);
      } else {
        setTimeout(preloadAll, 300);
      }
    }
  }, []);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    setIsModalImageLoading(true);
    const gallery = getProjectGallery(activeProject);
    gallery.forEach((image) => {
      const src = typeof image === "string" ? image : image.src;
      if (src) {
        const img = new window.Image();
        img.src = src;
      }
    });
  }, [activeProject, activeImageIndex]);

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
        <div className="absolute left-[-12%] top-20 h-56 w-[120%] rotate-6 bg-[#56b9ea] opacity-40" />
        <div className="absolute left-[-10%] top-16 h-6 w-[112%] -rotate-5 bg-[#ffe600]/70 opacity-50" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#10233a]/72" />
        {showSurpriseBurst ? (
          <div className="persona-surprise-burst" aria-hidden="true" />
        ) : null}

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className={sectionTitleClass}>Featured Projects</h3>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={triggerSurpriseMission}
                className="persona-slant slash-card bg-[#ffe600] px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#0b1220] transition hover:bg-[#fff067] sm:text-xs"
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
                  aria-label="Previous projects"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => scrollProjects("next")}
                  disabled={!canScrollNext}
                  className="slash-card battle-command px-2.5 py-2 text-[10px] sm:px-3 sm:text-xs"
                  aria-label="Next projects"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#f4f2ec]/58 sm:hidden">
              Swipe cards to explore projects
            </p>
            <div className="pointer-events-none absolute inset-y-0 -left-2 z-10 w-6 bg-linear-to-r from-[#10233a] to-transparent sm:w-10" />
            <div className="pointer-events-none absolute inset-y-0 -right-2 z-10 w-6 bg-linear-to-l from-[#10233a] to-transparent sm:w-10" />

            <div
              ref={projectLaneRef}
              onKeyDown={onProjectLaneKeyDown}
              tabIndex={0}
              role="region"
              aria-label="Project archive horizontal slider"
              className="persona-x-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#ffe600]/70 sm:gap-5"
            >
              {displayedProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="slash-card persona-panel archive-card-shadow group w-[88vw] max-w-84 shrink-0 snap-start p-5 transition duration-300 odd:-rotate-[0.8deg] even:rotate-[0.8deg] hover:rotate-0 hover:border-[#ffe600]/46 sm:w-96 sm:max-w-none sm:p-6"
                >
                  <p className="persona-title mb-3 text-2xl text-white/30 sm:text-3xl">
                    0{index + 1}
                  </p>
                  <p className="persona-slant mb-4 inline-block bg-[#ffe600] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#0b1220]">
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
                    className="persona-slant battle-command slash-card mt-5 px-4 py-2 text-sm text-[#f4f2ec]/90 group-hover:text-[#ffe600]"
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
                      ? "h-2.5 w-8 bg-[#ffe600]"
                      : Math.abs(index - activeProjectIndex) === 1
                        ? "h-2.5 w-4 bg-[#56b9ea]/85"
                        : Math.abs(index - activeProjectIndex) === 2
                          ? "h-2.5 w-3 bg-white/55"
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
          className="fixed inset-0 z-1100 flex items-center justify-center bg-[#10233a]/85 p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="persona-panel slash-card my-auto w-full max-w-3xl border border-white/20 p-5 sm:p-7 max-h-[90vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="persona-slant bg-[#56b9ea] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#f4f2ec]">
                    <span className="persona-slant-inner block">
                      {activeProject.tag}
                    </span>
                  </span>
                  <span className="persona-slant bg-[#ffe600] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#0b1220]">
                    <span className="persona-slant-inner block">
                      Role: {activeProject.role}
                    </span>
                  </span>
                </div>
                <h3 className={contentTitleClass}>{activeProject.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.13em] text-[#f4f2ec]/70 sm:text-sm">
                  {activeProject.period}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="battle-command slash-card shrink-0 px-3 py-2 text-sm text-[#f4f2ec] hover:text-[#ffe600]"
              >
                Close
              </button>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="slash-card border border-white/20 bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-[#ffe600]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-[#f4f2ec]/85 sm:text-base">
              {activeProject.desc}
            </p>

            {/* Problem & Solution */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="slash-card border border-red-500/30 bg-red-950/20 p-4">
                <p className="persona-title text-xs uppercase tracking-[0.14em] text-red-400">
                  Problem
                </p>
                <p className="mt-1 text-xs leading-5 text-[#f4f2ec]/85 sm:text-sm">
                  {activeProject.problem}
                </p>
              </div>
              <div className="slash-card border border-[#56b9ea]/35 bg-[#56b9ea]/10 p-4">
                <p className="persona-title text-xs uppercase tracking-[0.14em] text-[#56b9ea]">
                  Solution
                </p>
                <p className="mt-1 text-xs leading-5 text-[#f4f2ec]/85 sm:text-sm">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            {/* Gallery Image Box */}
            <div className="mt-5 rounded-xl border border-white/15 bg-black/35 p-3 sm:p-4">
              <div className="relative h-44 overflow-hidden rounded-lg sm:h-72 lg:h-84">
                <div className="absolute inset-0 bg-linear-to-br from-[#56b9ea]/18 to-[#ffe600]/12" />
                {isModalImageLoading ? (
                  <div className="absolute inset-0 z-15 flex flex-col items-center justify-center bg-[#0d1b2d]/92 backdrop-blur-xs">
                    <div className="mb-2 h-7 w-7 animate-spin rounded-full border-2 border-[#ffe600] border-t-transparent" />
                    <span className="persona-title animate-pulse text-xs uppercase tracking-[0.16em] text-[#ffe600]">
                      Loading Visual...
                    </span>
                  </div>
                ) : null}
                {activeProjectGallery.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setIsModalImageLoading(true);
                        slideActiveProjectImage("prev");
                      }}
                      className="battle-command absolute left-3 top-1/2 z-20 -translate-y-1/2 px-3 py-1.5 text-xs"
                      aria-label="Previous image"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsModalImageLoading(true);
                        slideActiveProjectImage("next");
                      }}
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
                  onLoad={() => setIsModalImageLoading(false)}
                  className={`relative z-10 cursor-zoom-in object-contain object-center transition-opacity duration-300 ${
                    isModalImageLoading ? "opacity-0" : "opacity-95"
                  }`}
                />
              </div>

              {activeProjectGallery.length > 1 ? (
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  {activeProjectGallery.map((imagePath, index) => (
                    <button
                      key={`${activeProject.title}-gallery-${index}`}
                      type="button"
                      onClick={() => {
                        setIsModalImageLoading(true);
                        setActiveImageIndex(index);
                      }}
                      className={`h-2.5 rounded-full transition cursor-pointer ${
                        index === activeImageIndex
                          ? "w-7 bg-[#ffe600]"
                          : "w-2 bg-white/35 hover:bg-[#56b9ea]"
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            {/* My Contribution */}
            <div className="mt-4 slash-card border border-[#ffe600]/30 bg-[#ffe600]/10 p-4">
              <p className="persona-title text-xs uppercase tracking-[0.14em] text-[#ffe600]">
                My Contribution
              </p>
              <p className="mt-1 text-xs leading-5 text-[#f4f2ec] sm:text-sm">
                {activeProject.contribution}
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-4">
              <p className="persona-title text-xs uppercase tracking-[0.14em] text-[#f4f2ec]/75 mb-2">
                Key Features
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {activeProject.keyFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="slash-card flex items-start gap-2 border border-white/15 bg-black/50 p-3 text-xs text-[#f4f2ec]/85 sm:text-sm"
                  >
                    <span className="text-[#ffe600] font-bold">›</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link / Repository status */}
            {/* <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
              <span className="text-xs uppercase tracking-widest text-[#f4f2ec]/60">
                Project Access
              </span>
              {activeProject.linkType === "private" ? (
                <span className="slash-card border border-white/20 bg-black/60 px-3 py-1.5 text-xs uppercase tracking-wider text-[#f4f2ec]/70">
                  🔒 Private Enterprise / Client Project
                </span>
              ) : activeProject.linkUrl ? (
                <a
                  href={activeProject.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="slash-card persona-title bg-[#ffe600] px-4 py-1.5 text-xs uppercase tracking-wider text-[#0b1220] transition hover:bg-[#fff067]"
                >
                  View Repository ↗
                </a>
              ) : null}
            </div> */}
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
