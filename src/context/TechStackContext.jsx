import React, { createContext, useEffect, useState } from "react";
import {
  getTechStacks,
  addTechStack,
  updateTechStack,
  deleteTechStack,
} from "../api/techStackApi";

const TechStackContext = createContext();

const TechStackProvider = ({ children }) => {
  const [techStacks, setTechStacks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTechStacks = async () => {
    setLoading(true);
    try {
      const res = await getTechStacks();
      setTechStacks(res.data);
    } catch (err) {
      console.error("Lỗi khi load tech stacks:", err);
    } finally {
      setLoading(false);
    }
  };

  const createTechStack = async (data) => {
    try {
      const res = await addTechStack(data);
      setTechStacks((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Lỗi khi thêm tech stack:", err);
    }
  };

  const editTechStack = async (id, data) => {
    try {
      const res = await updateTechStack(id, data);
      setTechStacks((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
    } catch (err) {
      console.error("Lỗi khi cập nhật tech stack:", err);
    }
  };

  const removeTechStack = async (id) => {
    try {
      await deleteTechStack(id);
      setTechStacks((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Lỗi khi xoá tech stack:", err);
    }
  };

  useEffect(() => {
    fetchTechStacks();
  }, []);

  return (
    <TechStackContext.Provider
      value={{
        techStacks,
        loading,
        fetchTechStacks,
        createTechStack,
        editTechStack,
        removeTechStack,
      }}
    >
      {children}
    </TechStackContext.Provider>
  );
};

export { TechStackProvider, TechStackContext };
