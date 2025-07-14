import aws from "../assets/aws.jpg";
import forage from "../assets/forage.jpg";
import gc from "../assets/gc.jpg";
import gl from "../assets/gl.jpg";
import ibm from "../assets/IBM.jpg";
import infosys from "../assets/infosys.jpg";

const Achievements = () => {
  return (
    <section
      id="achievements"
      data-aos="fade-up"
      className="min-h-screen bg-black text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b-2 border-pink-500 inline-block">
          Achievements
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* IBM Certificate */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={ibm} alt="IBM ML with Python" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">IBM – Machine Learning with Python</h3>
              <p className="text-gray-400 text-sm">
                Completed with distinction. Covered supervised/unsupervised learning, scikit-learn, model evaluation.
              </p>
            </div>
          </div>

          {/* AWS Certificate */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={aws} alt="AWS Cloud" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">AWS Academy – Cloud Foundations</h3>
              <p className="text-gray-400 text-sm">
                20-hour course covering cloud computing, storage, networking, IAM, EC2, S3, Lambda, and AWS tools.
              </p>
            </div>
          </div>

          {/* Forage Internship */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={forage} alt="Forage" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Forage – Data Analytics Internship</h3>
              <p className="text-gray-400 text-sm">
                Simulated internship: data cleaning, modeling, storytelling, and presenting insights for Accenture client.
              </p>
            </div>
          </div>

          {/* Google Generative AI */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={gc} alt="Generative AI" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Google Cloud – Intro to Generative AI</h3>
              <p className="text-gray-400 text-sm">
                Covered GenAI, text-to-image, transformers, LLM pipelines. Issued by Google SkillUp.
              </p>
            </div>
          </div>

          {/* Great Learning NLP */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={gl} alt="Great Learning NLP" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Great Learning – NLP Projects</h3>
              <p className="text-gray-400 text-sm">
                Completed real-world NLP mini-projects using Python, including tokenization and sentiment analysis.
              </p>
            </div>
          </div>

          {/* Infosys Deep Learning */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={infosys} alt="Infosys Deep Learning" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Infosys – Introduction to Deep Learning</h3>
              <p className="text-gray-400 text-sm">
                Springboard course covering neural networks, CNNs, and activation functions with practical demos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
