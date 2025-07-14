import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import profileImg from "../assets/sreeja.jpg";

const roles = [
  "Frontend Developer",
  "Data Analyst",
  "AI & ML Enthusiast",
];

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

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

  // Typing animation
  useEffect(() => {
    let currentRole = roles[index];
    let charIndex = 0;
    const typing = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayedText((prev) => prev + currentRole[charIndex]);
        charIndex++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setDisplayedText("");
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 relative overflow-hidden"
    >
      <div className="z-10">
        <img
          src={profileImg}
          alt="profile"
          className="w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          Hi, I'm Chidire Sreeja
        </h1>
        <h2 className="text-2xl sm:text-3xl text-pink-400 font-semibold h-10">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-md text-gray-300 max-w-xl mt-4">
          I'm a passionate frontend developer, data analyst, and AI & ML enthusiast
          dedicated to crafting intelligent, responsive digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
