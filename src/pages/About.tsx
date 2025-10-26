import { Navbar } from "../components/Navbar";
import { AboutHero } from "../components/AboutHero";
import { Mission } from "../components/Mission";
import { Values } from "../components/Values";
import { Timeline } from "../components/Timeline";
import { Team } from "../components/Team";
import { AboutStats } from "../components/AboutStats";
import { AboutCTA } from "../components/AboutCTA";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

interface AboutProps {
  onNavigate?: (page: "home" | "about") => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      <Navbar onNavigate={onNavigate} />
      <main>
        <Reveal>
          <AboutHero />
        </Reveal>
        <Reveal>
          <Mission />
        </Reveal>
        <Reveal>
          <Values />
        </Reveal>
        <Reveal>
          <Timeline />
        </Reveal>
        <Reveal>
          <Team />
        </Reveal>
        <Reveal>
          <AboutStats />
        </Reveal>
        <Reveal>
          <AboutCTA />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}