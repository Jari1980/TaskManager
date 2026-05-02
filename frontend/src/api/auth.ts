import { api } from "./client";
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
  data: RegisterUserRequest,
): Promise<string> => {
  const res = await api.post("/auth/registerUser", data);
  return res.data.token;
};

export const loginUser = async (data: LoginUserRequest): Promise<string> => {
  const res = await api.post<string>("/auth/loginUser", data);
  return res.data;
};

export const getMe = async (): Promise<User> => {
  const res = await api.get<User>("/user/me");
  return res.data;
};
