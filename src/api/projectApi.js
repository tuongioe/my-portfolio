import axiosInstance from "./axiosInstance";

export const getProjects = () => axiosInstance.get("/projects");
export const addProject = (data) => axiosInstance.post("/projects", data);
export const updateProject = (id, data) =>
  axiosInstance.put(`/projects/${id}`, data);
export const deleteProject = (id) => axiosInstance.delete(`/projects/${id}`);
