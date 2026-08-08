"use client";

type CareerItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const careerRoad: CareerItem[] = [
  {
    role: "Front End Developer",
    company: "PT Padepokan Tujuh Sembilan — Bandung",
    period: "Dec 2025 - Jun 2026",
    bullets: [
      "Developed responsive promotional landing page web applications focusing on modern UI design and UX optimization using React.js and Tailwind CSS.",
      "Explored core Odoo ERP modules (Sales, Inventory, Accounting) to analyze integrated enterprise workflow data structures.",
      "Optimized mobile responsiveness, cross-browser layout consistency, and page load performance."
    ],
  },
  {
    role: "Freelance Fullstack Developer",
    company: "Freelance Projects — Bandung",
    period: "Nov 2024 - Aug 2025",
    bullets: [
      "Built company employee evaluation platform, gamified LMS platform, and camera hand-gesture hiring web application.",
      "Integrated Gemini AI and local Ollama AI for Chamilo LMS automated assignment evaluation plugin.",
      "Developed RESTful APIs, role-based authentication, relational database schemas, and interactive React UI components."
    ],
  },
  {
    role: "Front End Developer",
    company: "PT ARM Solusi — Bandung",
    period: "Jan 2024 - Jun 2024",
    bullets: [
      "Developed the frontend interface of an official enterprise memo system using React.js, Tailwind CSS, and REST APIs.",
      "Implemented department approval status workflows, memo draft/dispatch views, and printable document layouts.",
      "Collaborated with backend engineers to integrate corporate communication endpoints and authentication middleware."
    ],
  },
  {
    role: "Fullstack Developer",
    company: "PT. Widata Intelligent Solution — Bandung",
    period: "Oct 2023 - Feb 2024",
    bullets: [
      "Built front-end and back-end for Computer-Based Test (CBT) platform, POS Cashier web app, Company Profile & E-commerce, and Hotel simulation.",
      "Developed React.js UI components, Laravel REST APIs, MySQL relational schemas, and AppWrite cloud backend integrations.",
      "Optimized real-time exam timer synchronization, checkout cart calculation logic, and cashier transaction workflows."
    ],
  },
  {
    role: "S1 Computer Science Education",
    company: "Universitas Pendidikan Indonesia",
    period: "Aug 2021 - Aug 2025",
    bullets: [
      "Graduated with GPA 3.83 / 4.00 in S1 Computer Science Education program.",
      "Mentored undergraduate students as Teaching Assistant for Data Structures & Algorithms course practicum.",
      "Built strong foundation in software engineering, database architecture, web systems, and algorithmic logic."
    ],
  },
  {
    role: "IT & Media Division Staff",
    company: "BEM KEMAKOM & UKM Film Satu Layar UPI",
    period: "Feb 2023 - Jan 2024",
    bullets: [
      "Managed digital media channels, official event documentations, and visual content publication.",
      "Mentored creative crew members in video editing workflows and digital media production."
    ],
  },
];

export default function CareerRoad() {
  const sectionTitleClass =
    "persona-title text-3xl uppercase text-white sm:text-4xl";

  const contentTitleClass =
    "persona-title text-2xl uppercase leading-tight text-white sm:text-3xl";

  const metaTextClass =
    "mt-1 text-sm uppercase tracking-[0.13em] text-[#f4f2ec]/70";

  return (
    <section
      id="career-road"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "1px 700px",
      }}
    >
      <div className="absolute left-[-20%] top-28 h-72 w-[140%] rotate-8 bg-[#56b9ea] opacity-70" />
      <div className="absolute left-[-15%] top-18 h-8 w-[130%] -rotate-6 bg-[#ffe600]/70" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#10233a]/72" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className={sectionTitleClass}>Work Experience & Education</h2>
        </div>

        <ol className="relative space-y-6 before:absolute before:bottom-2 before:left-3 before:top-2 before:w-0.5 before:bg-linear-to-b before:from-[#ffe600] before:via-[#56b9ea] before:to-white/25">
          {careerRoad.map((item, index) => (
            <li
              key={item.role + item.company}
              className="persona-road-item relative border-b border-white/8 pb-5 pl-10 last:border-b-0"
            >
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#ffe600]/70 bg-[#0b1a2d] text-[10px] font-bold text-[#ffe600] shadow-[0_0_12px_rgba(255,230,0,0.24)]">
                0{index + 1}
              </span>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:w-2/5">
                  <p className={contentTitleClass}>{item.role}</p>
                  <p className={metaTextClass}>{item.period}</p>

                  <div className="mt-3 h-0.5 w-16 bg-linear-to-r from-[#ffe600] to-[#56b9ea]" />
                </div>

                <div className="sm:w-3/5">
                  <p className="persona-slant inline-block max-w-full bg-[#ffe600] px-3 py-1 text-xs uppercase tracking-wider text-[#0b1220] sm:text-sm">
                    <span className="persona-slant-inner block">
                      {item.company}
                    </span>
                  </p>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#f4f2ec]/85 sm:text-base">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="text-[#ffe600] font-bold mt-0.5">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}