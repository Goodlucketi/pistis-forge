
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-800">The Pistis Forge</div>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><a href="#about" className="hover:text-purple-700">About</a></li>
          <li><a href="#objectives" className="hover:text-purple-700">Objectives</a></li>
          <li><a href="#projects" className="hover:text-purple-700">Projects</a></li>
          <li><a href="#events" className="hover:text-purple-700">Events</a></li>
          <li><a href="#contact" className="hover:text-purple-700">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
