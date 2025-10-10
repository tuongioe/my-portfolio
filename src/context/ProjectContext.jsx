import React, { createContext, useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../api/projectApi";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.error("Lỗi khi load projects:", err);
    }
  };

  const createProject = async (data) => {
    try {
      const res = await addProject(data);
      setProjects((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Lỗi khi thêm project:", err);
    }
  };

  const editProject = async (id, data) => {
    try {
      const res = await updateProject(id, data);
      setProjects((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
    } catch (err) {
      console.error("Lỗi khi cập nhật project:", err);
    }
  };

  const removeProject = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Lỗi khi xoá project:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        fetchProjects,
        createProject,
        editProject,
        removeProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
