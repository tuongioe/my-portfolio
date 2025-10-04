import "../assets/style/Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="w-full flex items-center justify-center fixed z-50 lg:ml-2">
      <div className="lg:w-full max-w-6xl flex justify-between items-center bg-gray-900/50 backdrop-blur-md px-8 py-4 rounded-2xl mt-5">
        {/* Logo */}
        <h1
          className="lg:block hidden text-white text-2xl font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-indigo-300 font-bold">MyPortfolio</span>
        </h1>

        {/* Menu */}
        <nav className="flex space-x-8">
          <a
            href="#about"
            className="text-white nav-link font-bold"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a
            href="#tech"
            className="text-white nav-link font-bold"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("tech")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Tech
          </a>
          <a
            href="#project"
            className="text-white nav-link font-bold"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("project")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-white nav-link font-bold"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
          <Link to="/login" className="text-white nav-link font-bold">
            Author
          </Link>
        </nav>
      </div>
    </div>
  );
}
