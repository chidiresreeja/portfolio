import { useState, useEffect } from "react";
import profileImg from "../assets/sreeja.jpg";
import HeroLinks from "./HeroLinks";

const roles = ["Frontend Developer", "Data Analyst", "AI & ML Enthusiast"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

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
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-white text-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] animate-background bg-size-200"
    >
      {/* Add animation wrapper */}
      <style>
        {`
          .animate-background {
            background-size: 400% 400%;
            animation: gradientBG 10s ease infinite;
          }

          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="max-w-3xl w-full">
        <img
          src={profileImg}
          alt="Sreeja"
          className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          Hi, I'm Chidire Sreeja
        </h1>
        <h2 className="text-2xl sm:text-3xl text-pink-400 font-semibold h-10">
          {text}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed">
          I'm a passionate frontend developer, data analyst, and AI & ML enthusiast
          dedicated to building modern, intelligent user interfaces.
        </p>
      </div>

      <div className="mt-10">
        <HeroLinks />
      </div>
    </section>
  );
};

export default Hero;
