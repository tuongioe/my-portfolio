import React, { useState } from "react";
import TechStackTab from "../../component/TechStackTab";
import ProjectTab from "../../component/ProjectTab";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("tech");

  return (
    <div className="flex h-screen">
      {/* Menu bên trái */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <button
          onClick={() => setActiveTab("tech")}
          className={`p-4 text-left bg-transparent hover:bg-gray-700 ${
            activeTab === "tech" ? "bg-gray-700" : ""
          }`}
        >
          Tech Stacks
        </button>
        <button
          onClick={() => setActiveTab("project")}
          className={`p-4 text-left bg-transparent hover:bg-gray-700 ${
            activeTab === "project" ? "bg-gray-700" : ""
          }`}
        >
          Projects
        </button>
      </div>

      {/* Nội dung bên phải */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeTab === "tech" && <TechStackTab />}
        {activeTab === "project" && <ProjectTab />}
      </div>
    </div>
  );
}
