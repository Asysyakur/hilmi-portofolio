"use client";

type CareerItem = {
  phase: string;
  period: string;
  point: string;
  note: string;
};

const careerRoad: CareerItem[] = [
  {
    phase: "Education (Pendidikan)",
    period: "Aug 2021 - Aug 2025",
    point: "Universitas Pendidikan Indonesia",
    note: "S1 Computer Science Education (GPA 3.83 / 4.00). Served as a teaching assistant for the Data Structures course practicum.",
  },
  {
    phase: "Organizational Experience",
    period: "Feb 2023 - Jan 2024",
    point: "BEM KEMAKOM & UKM FILM SATU LAYAR UPI",
    note: "Staff of IT Communication & Media Division. Edited official video documentations, designed visual social content, managed media channels, and mentored crew members in video editing.",
  },
  {
    phase: "Fullstack Developer",
    period: "Oct 2023 - Feb 2024",
    point: "PT. Widata Intelligent Solution - Bandung",
    note: "Developed Front-end and Back-end for Computer-Based Test (CBT) platform, Company Profile & E-commerce, Hotel Front Office simulation (AppWrite), and POS Cashier Web Application using React.js, Laravel, MySQL, and Tailwind CSS.",
  },
  {
    phase: "Front End Developer",
    period: "Jan 2024 - Jun 2024",
    point: "PT ARM Solusi - Bandung",
    note: "Developed the Front-end of an Official Memo Application for enterprise company operations using React.js, Laravel, MySQL, and Tailwind CSS.",
  },
  {
    phase: "Freelance Fullstack Developer",
    period: "Nov 2024 - Aug 2025",
    point: "Freelance Projects - Bandung",
    note: "Built company employee evaluation platform, drag-and-drop LMS platform, Gemini AI-integrated village profile platform, gesture camera hiring platform, and Chamilo AI evaluation plugin (Gemini & Ollama AI).",
  },
  {
    phase: "Front End Developer",
    period: "Dec 2025 - Jun 2026",
    point: "PT Padepokan Tujuh Sembilan - Bandung",
    note: "Developed responsive digital promotion landing pages focusing on modern UI design & UX (React.js, Tailwind CSS) and explored Odoo workflow and core ERP modules.",
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
          <h2 className={sectionTitleClass}>Career Road</h2>
        </div>

        <ol className="relative space-y-6 before:absolute before:bottom-2 before:left-3 before:top-2 before:w-0.5 before:bg-linear-to-b before:from-[#ffe600] before:via-[#56b9ea] before:to-white/25">
          {careerRoad.map((item, index) => (
            <li
              key={item.phase}
              className="persona-road-item relative border-b border-white/8 pb-5 pl-10 last:border-b-0"
            >
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#ffe600]/70 bg-[#0b1a2d] text-[10px] font-bold text-[#ffe600] shadow-[0_0_12px_rgba(255,230,0,0.24)]">
                0{index + 1}
              </span>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:w-2/5">
                  <p className={contentTitleClass}>{item.phase}</p>
                  <p className={metaTextClass}>{item.period}</p>

                  <div className="mt-3 h-0.5 w-16 bg-linear-to-r from-[#ffe600] to-[#56b9ea]" />
                </div>

                <div className="sm:w-3/5">
                  <p className="persona-slant inline-block max-w-full bg-[#ffe600] px-3 py-1 text-xs uppercase tracking-wider text-[#0b1220] sm:text-sm">
                    <span className="persona-slant-inner block">
                      {item.point}
                    </span>
                  </p>

                  <p className="mt-2 text-base leading-7 text-[#f4f2ec]/85 sm:text-lg">
                    {item.note}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}