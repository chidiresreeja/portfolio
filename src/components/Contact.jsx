import { Mail, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="min-h-screen bg-gradient-to-b from-[#1f1c2c] via-[#2b5876] to-[#4e4376] text-white py-16 px-6 scroll-mt-24"

    >
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-pink-400 hover:underline"
      >
        ← Back to Home
      </button>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-2 border-pink-500 inline-block">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-8">
          Have a question or want to work together? Let’s connect!
        </p>

        {/* Email */}
        <p className="text-lg mb-4 flex items-center justify-center gap-2">
          <Mail className="text-pink-400" size={22} />
          <a
            href="mailto:chidiresreeja3@gmail.com"
            className="text-pink-400 hover:underline"
          >
            chidiresreeja3@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/chidiresreeja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/chidire-sreeja-b32045256"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
