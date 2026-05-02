import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

//Request interceptor to attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  const publicPaths = ["/auth/registerUser", "/auth/loginUser"];
  const isPublic = publicPaths.includes(config.url || "");

  if (!isPublic && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});