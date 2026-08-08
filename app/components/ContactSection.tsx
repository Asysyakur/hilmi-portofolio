"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 pb-20 pt-4 sm:px-6 lg:px-10"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 340px" }}
    >
      <div className="persona-panel stable-hover mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center">
        <div>
          <p className="persona-title text-xl uppercase tracking-[0.13em] text-[#f4f2ec]/75">
            Contact
          </p>
          <h3 className="persona-title mt-1 text-4xl uppercase text-white sm:text-5xl">
            Let&apos;s Work Together
          </h3>
          <p className="mt-2 text-sm text-[#f4f2ec]/80">
            08987829808 | hilmiasysyakur123@gmail.com
          </p>
          <p className="mt-1 text-xs text-[#f4f2ec]/60">
            Sukajadi, Bandung, Indonesia
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:hilmiasysyakur123@gmail.com"
            className="persona-slant slash-card bg-[#ffe600] px-5 py-3 text-lg uppercase text-[#0b1220] transition hover:bg-[#fff067]"
          >
            <span className="persona-slant-inner block">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hilmi-asysyakur-islam-489384279/"
            target="_blank"
            rel="noreferrer"
            className="persona-slant slash-card border border-white/25 bg-black/70 px-5 py-3 text-lg uppercase text-white transition hover:border-[#ffe600]"
          >
            <span className="persona-slant-inner block">LinkedIn</span>
          </a>
          <a
            href="https://bit.ly/ProtofolioHilmi"
            target="_blank"
            rel="noreferrer"
            className="persona-slant slash-card border border-white/25 bg-black/70 px-5 py-3 text-lg uppercase text-white transition hover:border-[#ffe600]"
          >
            <span className="persona-slant-inner block">Portofolio</span>
          </a>
          <a
            href="https://github.com/Asysyakur"
            target="_blank"
            rel="noreferrer"
            className="persona-slant slash-card border border-white/25 bg-black/70 px-5 py-3 text-lg uppercase text-white transition hover:border-[#ffe600]"
          >
            <span className="persona-slant-inner block">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
