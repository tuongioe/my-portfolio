import React from "react";
import { RiDownloadLine } from "react-icons/ri";

export default function ButtonComponent({
  label = "Click me",
  icon,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center overflow-hidden px-8 py-4 rounded-full mt-5 text-xl text-white group ${className}`}
    >
      <span className="z-10 transition-opacity duration-100 group-hover:opacity-0 ease-in-out">
        {label}
      </span>

      {/* Icon trượt */}
      <span className="absolute left-[-60px] flex items-center justify-center w-[60px] h-[60px] bg-gray-700 text-white rounded-full transition-all duration-500 group-hover:left-[calc(100%-60px)]">
        {icon}
      </span>
    </button>
  );
}
