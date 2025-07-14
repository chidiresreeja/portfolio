import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import HeroLinks from "./components/HeroLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HeroLinks />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
