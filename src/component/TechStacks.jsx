import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

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
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266292/c_-removebg-preview_lhpchc.png"
            alt="C++"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">C++</p>
            <p className="text-sm text-gray">Language</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/sql_lvhorj.png"
            alt="MS SQL"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">MS SQL</p>
            <p className="text-sm text-gray">Language</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266177/html_zn7lc9.png"
            alt="HTML"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold ">HTML 5</p>
            <p className="text-sm text-gray ">Language</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266176/css_g2qopx.png"
            alt="CSS"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">CSS 3</p>
            <p className="text-sm text-gray">Language</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266177/js_cvf7cy.png"
            alt="Javascript"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Javascript</p>
            <p className="text-sm text-gray">Language</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png"
            alt="React JS"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">ReactJS</p>
            <p className="text-sm text-gray ">Library</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/tailwind_na1qu8.png"
            alt="Tailwind CSS"
            style={{ maxWidth: "80px", marginTop: "5px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Tailwind</p>
            <p className="text-sm text-gray ">Framework</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266177/git_mbehyp.png"
            alt="Git"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Git</p>
            <p className="text-sm text-gray ">Version control</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266919/mongo-removebg-preview_bxutnl.png"
            alt="MongoDB"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Mongo DB</p>
            <p className="text-sm text-gray ">Database</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266919/docker-removebg-preview_ufuent.png"
            alt="Docker"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Docker</p>
            <p className="text-sm text-gray ">Tool</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756267066/java_vsi8ni.png"
            alt="Java"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Java</p>
            <p className="text-sm text-gray ">Language</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png"
            alt="React Native"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">React native</p>
            <p className="text-sm text-gray ">Library</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278652/github-removebg-preview_zkjhw9.png"
            alt="Git hub"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Git hub</p>
            <p className="text-sm text-gray ">Repogistory</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278653/vscode_e5oozz.png"
            alt="VS Code"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">VS Code</p>
            <p className="text-sm text-gray ">Code Editor</p>
          </div>
        </div>
        <div className="bg-gray-800/90 flex items-center text-white p-4 rounded-xl">
          <img
            src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278652/power_v26gyu.png"
            alt="Power Platform"
            style={{ maxWidth: "80px" }}
          />
          <div className="ml-3">
            <p className="text-lg text-white font-bold">Power Platform</p>
            <p className="text-sm text-gray ">Tool</p>
          </div>
        </div>
      </div>
    </div>
  );
}
