import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="min-h-screen bg-gradient-to-b from-[#1f1c2c] via-[#2b5876] to-[#4e4376] text-white py-16 px-6 scroll-mt-24"
    > 
    <button
        onClick={() => navigate("/")}
        className="mb-6 text-pink-400 hover:underline"
      >
        ← Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-2 border-pink-500 inline-block">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Hello! I'm Sreeja — a passionate frontend developer, data analyst, and AI/ML enthusiast. I enjoy building intelligent, responsive, and user-friendly websites using technologies like <span className="text-pink-400">React</span>, <span className="text-pink-400">Tailwind CSS</span>, and the <span className="text-pink-400">MERN stack</span>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I’m also deeply interested in <span className="text-pink-400">Business Intelligence tools</span> such as <span className="text-pink-400">Power BI</span> and <span className="text-pink-400">Tableau</span>, along with core subjects like <span className="text-pink-400">Operating Systems</span>, <span className="text-pink-400">DBMS</span>, <span className="text-pink-400">C</span>, <span className="text-pink-400">Java</span>, and <span className="text-pink-400">Python</span>.
        </p>
        <p className="text-gray-400 text-md">
          I'm always eager to learn and grow. When I’m not coding, I love reading novels 📚, exploring new ideas 💡, or playing games 🎮 to unwind and recharge.
        </p>
      </div>
    </section>
  );
};

export default About;
