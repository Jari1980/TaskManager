import { api } from "./client";
import { useAuth } from "../context/AuthContext";
import type { User } from "../types/user";

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
  setUser: ( user: User | null) => void,
) => {
  const response = await api.post("/auth/registerUser", {
    name,
    email,
    password,
  });

  const token = response.data.token;
  localStorage.setItem("authToken", token);

  //temporarily store user info in context
  setUser({ id: 0, name, email, role: "USER" });

  return token;
};

export const loginUser = async (data: LoginUserRequest): Promise<string> => {
  const res = await api.post<string>("/auth/loginUser", data);
  return res.data; //Token from backend
};

export const getMe = async (): Promise<User> => {
  try {
    //TODO: Replace when me endpoint is ready
    //const res = await api.get<User>("/users/me");
    //return res.data;

    //Mock user until we get me endpoint
    return {
      id: 1,
      name: "Mock Admin",
      email: "admin@test.com",
      role: "ADMIN",
    };
  } catch (err) {
    throw err;
  }
};
