import React from "react";

export default function ButtonComponent({
  label = "Click me",
  icon,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center overflow-hidden 
                  px-2 py-3 lg:px-5 lg:py-4 
                  rounded-full mt-5 
                  text-base 
                  text-white group ${className}`}
    >
      <span className="z-10 font-semibold transition-opacity duration-100 group-hover:opacity-0 ease-in-out">
        {label}
      </span>

      {/* Icon trượt */}
      <span
        className="absolute 
                   left-[-60px] lg:left-[-60px] 
                   flex items-center justify-center 
                   w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] 
                   bg-gray-700 text-white rounded-full 
                   transition-all duration-500 ease-in-out
                   group-hover:left-[calc(100%-60px)] lg:group-hover:left-[calc(100%-60px)]"
      >
        {icon}
      </span>
    </button>
  );
}
