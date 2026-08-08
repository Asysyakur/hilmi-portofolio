"use client";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-4 lg:px-10">
        <a
          href="#hero"
          className="persona-title text-xl leading-none text-white sm:text-3xl lg:text-4xl"
          aria-label="Back to hero section"
        >
          HILMI<span className="text-[#ffe600]"> {"//"} </span>
          <span className="hidden text-[#ffe600] sm:inline">
            ASYSYAKUR ISLAM
          </span>
          <span className="text-[#ffe600] sm:hidden">A.I.</span>
        </a>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-white sm:gap-8 sm:text-sm sm:tracking-[0.14em]">
          {[
            ["Career Stats", "stats"],
            ["Projects", "projects"],
            ["Contact", "contact"],
          ].map(([item, anchor]) => (
            <a
              key={item}
              href={`#${anchor}`}
              className="group relative hidden sm:block"
            >
              {item}
              <span className="absolute left-0 top-[115%] h-0.5 w-full origin-left scale-x-0 bg-[#ffe600] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
