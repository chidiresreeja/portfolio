const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">Sreeja</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-pink-400">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400">About</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
