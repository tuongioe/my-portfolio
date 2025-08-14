import React from "react";

export default function Navigation() {
  return (
    <div className="wrapper fixed top-5 left-0 w-[80vw] bg-white/10 backdrop-blur-md shadow-md rounded-3xl">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">
          MyPortfolio
        </div>

        {/* Menu Items */}
        <nav className="flex space-x-8 text-white font-medium">
          {["About", "Tech Stacks", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group"
            >
              {item}
              {/* underline hover animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
