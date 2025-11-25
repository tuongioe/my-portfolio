import React from "react";

export default function ProjectCard({ preview, name, technologies }) {
  return (
    <div className="lg:w-[280px] w-[350px] h-[300px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4 flex flex-col">
      {/* Ảnh preview */}
      <div className="w-full h-[200px] rounded-lg overflow-hidden">
        <img
          src={preview}
          alt={name}
          className="w-full h-full object-cover hover:scale-125 transition-transform duration-300"
        />
      </div>

      {/* Tên dự án */}
      <h3 className="text-xl font-bold text-white mt-4">{name}</h3>

      {/* Technology icons */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {technologies.map((tech, index) => (
          <img
            key={index}
            src={tech}
            alt={`tech-${index}`}
            className="w-8 h-8 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
