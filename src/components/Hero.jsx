import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import profileImg from "../assets/sreeja.jpg";

import HeroLinks from "./HeroLinks";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";

const roles = ["Frontend Developer", "Data Analyst", "AI & ML Enthusiast"];

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xff0080,
          backgroundColor: 0x0a0a0a,
          points: 10.0,
          maxDistance: 22.0,
          spacing: 16.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // ✅ Correct Typing Logic (No "undefined", no cut-off)
  useEffect(() => {
    const currentRole = roles[index];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, index]);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="min-h-screen flex flex-col items-center justify-start text-white text-center px-4 relative overflow-x-hidden"
    >
      <div className="z-10 mt-20">
        <img
          src={profileImg}
          alt="profile"
          className="w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Hi, I'm Chidire Sreeja</h1>
        <h2 className="text-2xl sm:text-3xl text-pink-400 font-semibold h-10">
          {text}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-md text-gray-300 max-w-xl mt-4">
          I'm a passionate frontend developer, data analyst, and AI & ML enthusiast
          dedicated to crafting intelligent, responsive digital experiences.
        </p>
      </div>

      {/* Hero Buttons */}
      <HeroLinks />

      {/* ALL SECTIONS below Hero */}
<div className="w-full mt-10 space-y-24">

  <div id="about" className="py-16">
    <About />
  </div>

  <div id="achievements" className="py-16">
    <Achievements />
  </div>

  <div id="projects" className="py-16">
    <Projects />
  </div>

  <div id="contact" className="py-16">
    <Contact />
  </div>

</div>


    </section>
  );
};

export default Hero;
