import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useContext } from "react";
import { TechStackContext } from "../context/TechStackContext";

const techLogos = [
  {
    node: <SiReact className="text-gray-600" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-gray-600" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-gray-600" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-gray-600" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function TechStacks() {
  const { techStacks } = useContext(TechStackContext);

  return (
    <div>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
          className="lg:mt-8 mt-20"
        />
      </div>
      <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
        Tools and Technologies
      </h1>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 p-4 lg:w-[75rem] mx-auto justify-center mt-12">
        {techStacks.map((stack) => (
          <div
            key={stack.id}
            className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl"
          >
            <img
              src={stack.icon}
              alt="C++"
              style={{ maxWidth: "80px" }}
              className="ml-8 lg:ml-0"
            />
            <div className="lg:ml-3 md:ml-20 lg:block md:block hidden">
              <p className="text-lg text-white font-bold">{stack.name}</p>
              <p className="text-sm text-gray">{stack.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
