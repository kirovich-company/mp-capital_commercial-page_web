import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Investment } from "./components/Investment";
import { Contact } from "./components/Contact";
import { Reveal } from "./components/Reveal";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "login" | "dashboard">("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("home");
  };

  if (currentPage === "dashboard" && isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (currentPage === "about") {
    return <About onNavigate={setCurrentPage} />;
  }
  
  if (currentPage === "login") {
    return <Login onNavigate={setCurrentPage} onLogin={handleLogin} />;
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