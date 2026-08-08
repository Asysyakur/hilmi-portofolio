"use client";

type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "⚡",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Responsive UI/UX",
    ],
  },
  {
    category: "Backend & Systems",
    icon: "🛠️",
    skills: [
      "Laravel",
      "PHP",
      "RESTful API Development",
      "Authentication Middleware",
      "JSON Data Pipelines",
    ],
  },
  {
    category: "Database & Cloud",
    icon: "🗄️",
    skills: ["MySQL", "AppWrite", "Relational DB Architecture", "PostgreSQL"],
  },
  {
    category: "Tools & Workflows",
    icon: "⚙️",
    skills: ["Git & GitHub", "Figma (UI Prototyping)", "Odoo ERP Modules", "VS Code"],
  },
  {
    category: "AI Integration",
    icon: "🤖",
    skills: [
      "Gemini AI API",
      "Ollama Local AI",
      "AI Prompt Engineering",
      "Automated Evaluation Plugins",
    ],
  },
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

export default function Stats() {
  return (
    <section id="stats" className="relative px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="persona-title text-4xl uppercase leading-none text-white sm:text-5xl">
            Tech Skills & Achievements
          </h2>
          <span className="slash-card hidden border border-white/25 bg-black/70 px-4 py-2 text-sm uppercase tracking-[0.14em] text-[#f4f2ec]/80 md:block">
            Technical Stack Matrix
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((item) => (
            <article
              key={item.category}
              className="slash-card persona-panel border border-white/15 p-5 transition duration-300 hover:border-[#ffe600]/40"
            >
              <div className="mb-4 flex items-center gap-2 border-b border-white/15 pb-3">
                <span className="text-xl">{item.icon}</span>
                <h3 className="persona-title text-lg uppercase tracking-wider text-white">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="slash-card border border-white/20 bg-black/60 px-3 py-1.5 text-xs text-[#f4f2ec]/90 transition hover:border-[#ffe600] hover:text-[#ffe600]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

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
      </div>
    </section>
  );
}
