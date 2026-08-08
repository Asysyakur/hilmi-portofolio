import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import CareerRoad from "./components/CareerRoad";
import ContactSection from "./components/ContactSection";
import IntroTransition from "./components/IntroTransition";
import InteractionSounds from "./components/InteractionSounds";
import PersonaScrollbar from "./components/PersonaScrollbar";

export default function Home() {
  return (
    <main className="relative">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <PersonaScrollbar />
      <IntroTransition />
      <InteractionSounds />
      <span className="persona-watermark">Take Your Time</span>
      <Navbar />
      <div id="content" tabIndex={-1}>
        <Hero />
        <div className="persona-divider" />
        <Stats />
        <div className="persona-divider" />
        <CareerRoad />
        <div className="persona-divider" />
        <Projects />
        <ContactSection />
      </div>
    </main>
  );
}
