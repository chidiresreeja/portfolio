const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="min-h-screen bg-gray-950 text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-2 border-pink-500 inline-block">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Hello! I'm Sreeja, a frontend developer who loves crafting elegant and performant websites. I enjoy working with modern tools like React and Tailwind CSS to build user-friendly interfaces.
        </p>
        <p className="text-gray-400 text-md">
          I'm always eager to learn new technologies and explore creative solutions. When I’m not coding, I enjoy reading, sketching, and contributing to open source.
        </p>
      </div>
    </section>
  );
};

export default About;
