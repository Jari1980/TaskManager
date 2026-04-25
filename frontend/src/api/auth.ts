import { api } from "./client";
import { useAuth } from "../context/AuthContext";

interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

interface LoginUserRequest {
  email: string;
  password: string;
}

export const registerUser = async (
  { name, email, password }: RegisterUserRequest,
  setUser: (user: { name: string; email: string } | null) => void
) => {
  const response = await api.post("/auth/registerUser", { name, email, password });
  
  const token = response.data.token; 
  localStorage.setItem("authToken", token);

  //temporarily store user info in context
  setUser({ name, email });

  return token;
};

export const loginUser = async (data: LoginUserRequest): Promise<string> => {
  const res = await api.post<string>("/auth/loginUser", data);
  return res.data; //Token from backend
};
