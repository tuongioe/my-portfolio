import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-portfolio-be-zeta.vercel.app/api/", // backend URL
  withCredentials: true, // cookie
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
