function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-900 cursor-pointer">
          Nadeeshani
        </h1>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-800">Home</a></li>
          <li><a href="#about" className="hover:text-blue-800">About</a></li>
          <li><a href="#skills" className="hover:text-blue-800">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-800">Projects</a></li>
          <li><a href="#illustrations" className="hover:text-blue-800">Art</a></li>
          <li><a href="#contact" className="hover:text-blue-800">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
