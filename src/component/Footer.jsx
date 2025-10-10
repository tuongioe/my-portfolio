import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-6 px-8 mt-10 rounded-t-2xl lg:mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Cột trái */}
        <div className="mb-4 lg:mb-0">
          <h1 className="text-4xl font-bold text-indigo-300">MyPortfolio</h1>
        </div>

        {/* Cột giữa */}
        <div className="lg:flex items-center justify-center space-x-6 mb-4 lg:mb-0 lg:ml-[-160px] hidden">
          <a
            href="https://github.com/tuongioe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/t%C6%B0%E1%BB%9Dng-tr%C6%B0%C6%A1ng-a58343327/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.facebook.com/truongtuong.2502/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaFacebook size={40} />
          </a>
        </div>

        {/* Cột phải */}
        <button
          onClick={scrollToTop}
          className="bg-indigo-500 hover:bg-indigo-600 p-3 rounded-full shadow-md 
             transition transform hover:scale-150 active:scale-125 border-none"
        >
          <FaArrowUp size={20} />
        </button>
      </div>

      {/* Dòng chữ dưới cùng */}
      <div className="text-center text-xl mt-4  text-gray-400">
        Powered by Truong Tuong
      </div>
    </footer>
  );
}
