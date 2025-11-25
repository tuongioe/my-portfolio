import React, { useState } from "react";
import TechStackTab from "../../component/TechStackTab";
import ProjectTab from "../../component/ProjectTab";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("tech");

  return (
    <div className="flex h-screen">
      {/* Menu bên trái */}
      <div className="lg:w-64 w-1/3 bg-gray-800 text-gray-500 flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <button
          onClick={() => setActiveTab("tech")}
          className={`p-4 text-left bg-transparent hover:bg-gray-700 font-semibold border-none ${
            activeTab === "tech" ? "bg-blue-200/40 text-white " : ""
          }`}
        >
          Tech Stacks
        </button>
        <button
          onClick={() => setActiveTab("project")}
          className={`p-4 text-left bg-transparent hover:bg-gray-700 font-semibold border-none ${
            activeTab === "project" ? "bg-blue-200/40 text-white" : ""
          }`}
        >
          Projects
        </button>
        <Link
          to="/"
          className="p-4 text-left text-lg text-white lg:w-[180px] w-[100px] h-14 bg-red-700/40 hover:text-red-500 mt-auto lg:ml-12 ml-10 flex items-center justify-center rounded-lg mb-6 font-bold"
        >
          Log out
        </Link>
      </div>

      {/* Nội dung bên phải */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeTab === "tech" && <TechStackTab />}
        {activeTab === "project" && <ProjectTab />}
      </div>
    </div>
  );
}
