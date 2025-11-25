import "../assets/style/Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);
  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
  };
  return (
    <div className="w-full flex items-center justify-center fixed z-50 ">
      <div className="lg:w-full hidden max-w-6xl lg:flex justify-between items-center bg-gray-900/50 backdrop-blur-md px-8 py-4 rounded-2xl mt-5">
        {/* Logo */}
        <h1
          className="lg:block hidden text-white text-2xl font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-indigo-300 font-bold">MyPortfolio</span>
        </h1>

        {/* Menu */}
        <nav className="flex lg:space-x-8 text-md space-x-6">
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
          <Link to="/login" className="text-white nav-link font-bold hidden">
            Author
          </Link>
        </nav>
      </div>
      <div className="lg:hidden w-full bg-gray-900/90">
        {/* Header mobile */}
        <div className="flex justify-between items-center w-full px-4 py-4">
          {/* Logo */}
          <h1
            className="text-white text-3xl font-semibold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-indigo-300 font-bold">MyPortfolio</span>
          </h1>

          {/* Icon Menu */}
          <div onClick={handleShowNavigation} className="cursor-pointer">
            {showNavigation ? (
              <IoClose className="w-10 h-10 font-bold text-indigo-300 " />
            ) : (
              <FaBars className="w-8 h-8 font-bold text-indigo-300 " />
            )}
          </div>
        </div>

        {/* Menu Dropdown */}
        {showNavigation && (
          <nav className="w-full bg-gray-900/90 py-6 px-4 fixed">
            <ul className="flex flex-col space-y-8 text-white text-lg font-semibold items-center">
              <li
                href="#about"
                className="text-white text-2xl nav-link font-bold cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleShowNavigation();
                }}
              >
                About
              </li>
              <li
                href="#tech"
                className="text-white text-2xl nav-link font-bold cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("tech")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleShowNavigation();
                }}
              >
                Tech
              </li>
              <li
                href="#project"
                className="text-white text-2xl nav-link font-bold cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("project")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleShowNavigation();
                }}
              >
                Project
              </li>
              <li
                href="#contact"
                className="text-white text-2xl nav-link font-bold cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleShowNavigation();
                }}
              >
                Contact
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-white text-2xl nav-link font-bold cursor-pointer"
                >
                  Author
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
