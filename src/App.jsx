import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ParticleCanvas from "./components/ParticleCanvas/ParticleCanvas";
import GradientBackground from "./components/ParticleCanvas/GradientBackground";
import NoiseOverlay from "./components/ParticleCanvas/NoiseOverlay";
import TechMarquee from "./components/Marquee/TechMarquee";
import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <ScrollProgress />

          <GradientBackground />

          <ParticleCanvas />

          <NoiseOverlay />

          <Cursor />





          <Navbar />

          <div className="bg-[#050810]">
            <Hero />
          </div>

          <div className="bg-[#08101d]">
            <TechMarquee />
          </div>

          <div className="bg-[#050810]">
            <About />
          </div>

          <div className="bg-[#08101d]">
            <Skills />
          </div>

          <div className="bg-[#050810]">
            <Projects />
          </div>

          <div className="bg-[#08101d]">
            <Experience />
          </div>

          <div className="bg-[#050810]">
            <Achievements />
          </div>

          <div className="bg-[#08101d]">
            <Contact />
          </div>

          <div className="bg-[#050810]">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;