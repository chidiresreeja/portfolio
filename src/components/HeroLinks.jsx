import { useNavigate } from "react-router-dom";
import {
  Github,
  Linkedin,
  FolderGit2,
  Mail,
  User,
  Award,
} from "lucide-react";

const HeroLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 py-10 bg-black">
      <button
        onClick={() => navigate("/about")}
        className="group bg-gray-900 border border-pink-500 rounded-xl p-4 w-40 text-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
      >
        <User className="mx-auto mb-2 group-hover:animate-pulse" size={28} />
        <span className="font-semibold">About</span>
      </button>

      <button
        onClick={() => navigate("/achievements")}
        className="group bg-gray-900 border border-pink-500 rounded-xl p-4 w-40 text-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
      >
        <Award className="mx-auto mb-2 group-hover:animate-pulse" size={28} />
        <span className="font-semibold">Achievements</span>
      </button>

      <button
        onClick={() => navigate("/projects")}
        className="group bg-gray-900 border border-pink-500 rounded-xl p-4 w-40 text-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
      >
        <FolderGit2 className="mx-auto mb-2 group-hover:animate-pulse" size={28} />
        <span className="font-semibold">Projects</span>
      </button>

      <a
        href="https://github.com/chidiresreeja"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gray-900 border border-pink-500 rounded-xl p-4 w-40 text-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
      >
        <Github className="mx-auto mb-2 group-hover:animate-pulse" size={28} />
        <span className="font-semibold">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/chidire-sreeja-b32045256"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gray-900 border border-pink-500 rounded-xl p-4 w-40 text-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
      >
        <Linkedin className="mx-auto mb-2 group-hover:animate-pulse" size={28} />
        <span className="font-semibold">LinkedIn</span>
      </a>

      <button
        onClick={() => navigate("/contact")}
        className="group bg-gray-900 border border-pink-500 rounded-xl p-4 w-40 text-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
      >
        <Mail className="mx-auto mb-2 group-hover:animate-pulse" size={28} />
        <span className="font-semibold">Contact</span>
      </button>
    </div>
  );
};

export default HeroLinks;
