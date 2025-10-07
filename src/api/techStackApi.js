import axiosInstance from "./axiosInstance";

export const getTechStacks = () => axiosInstance.get("/techstacks");
export const addTechStack = (data) => axiosInstance.post("/techstacks", data);
export const updateTechStack = (id, data) =>
  axiosInstance.put(`/techstacks/${id}`, data);
export const deleteTechStack = (id) =>
  axiosInstance.delete(`/techstacks/${id}`);
