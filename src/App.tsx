import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Investment } from "./components/Investment";
import { Contact } from "./components/Contact";
import { Reveal } from "./components/Reveal";
import { Footer } from "./components/Footer";
import About from "./pages/About";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");

  if (currentPage === "about") {
    return <About onNavigate={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setCurrentPage} />
      <main>
        <Hero />
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Investment />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}