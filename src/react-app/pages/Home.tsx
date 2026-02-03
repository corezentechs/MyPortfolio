import { useEffect } from "react";
import Hero from "@/react-app/components/Hero";
import About from "@/react-app/components/About";
import Skills from "@/react-app/components/Skills";
import Experience from "@/react-app/components/Experience";
import Education from "@/react-app/components/Education";
import Certifications from "@/react-app/components/Certifications";
import Publications from "@/react-app/components/Publications";
import Patents from "@/react-app/components/Patents";
import Achievements from "@/react-app/components/Achievements";
import Contact from "@/react-app/components/Contact";

export default function HomePage() {
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Publications />
      <Patents />
      <Contact />
    </div>
  );
}
