import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

//Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    //Public endpoints where token is not needed
    const publicPaths = ["/auth/registerUser", "/auth/loginUser"];

    //Token attached to all other endpoints
    if (!publicPaths.includes(config.url || "")) {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);
