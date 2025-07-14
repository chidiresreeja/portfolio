import profileImg from "../assets/sreeja.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-center px-4"
    >
      <img
        src={profileImg}
        alt="profile"
        className="w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg"
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
        Hi, I'm Chidire Sreeja
      </h1>
      <p className="text-lg text-gray-300 max-w-md">
        I'm a passionate frontend developer building responsive and beautiful
        web experiences.
      </p>
    </section>
  );
};

export default Hero;
