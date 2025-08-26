import "../assets/style/Navigation.css";

export default function Navigation() {
  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-full max-w-6xl flex justify-between items-center bg-black/40 backdrop-blur-md px-8 py-4 rounded-2xl mt-5">
        {/* Logo */}
        <h1 className="lg:block hidden text-white text-2xl font-semibold">
          MyPortfolio
        </h1>

        {/* Menu */}
        <nav className="flex space-x-8">
          <a href="#about" className="text-white nav-link font-bold">
            About me
          </a>
          <a href="#tech" className="text-white nav-link font-bold">
            Tech Stacks
          </a>
          <a href="#project" className="text-white nav-link font-bold">
            Project
          </a>
          <a href="#contact" className="text-white nav-link font-bold">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
