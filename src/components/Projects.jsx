import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
const Projects = () => {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="min-h-screen bg-black text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b-2 border-pink-500 inline-block">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
            <img src={p1} alt="AI Data Analyst" className="rounded mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-semibold mb-2">AI Data Analyst</h3>
            <p className="text-gray-400 text-sm mb-2">
              Upload CSVs, filter data, and view charts with GPT-4o-powered summaries.
            </p>
            <a
              href="https://ai-analytics-dashboard.vercel.app/"
              className="text-pink-400 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
            <img src={p2} alt="Blockchain Verification" className="rounded mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-semibold mb-2">Product Verification</h3>
            <p className="text-gray-400 text-sm mb-2">
              Blockchain Chrome Extension to verify products using QR and smart contracts.
            </p>
            <a
              href="https://fpd-blockchain.web.app/"
              className="text-pink-400 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          {/* Quiz Website Project */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={p4} alt="Quiz Website" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">JavaScript Quiz Website</h3>
              <p className="text-gray-400 text-sm mb-4">
                Developed a dynamic quiz website with 25 JS questions, instant feedback, and score tracking.
                Great for testing core JavaScript skills interactively.
              </p>
              <a
                href="https://chidiresreeja.github.io/quizwebsite/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
            <img src={p3} alt="Form Validation" className="rounded mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-semibold mb-2">Form Validation</h3>
            <p className="text-gray-400 text-sm mb-2">
              A responsive form with HTML5 + custom JS validation for email, phone, and passwords.
            </p>
            <a
              href="https://chidiresreeja.github.io/validation-form/"
              className="text-pink-400 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
