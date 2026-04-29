import { api } from "./client";
import type { User, Role } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get("/admin/getUsers");
  return res.data.content ?? res.data; 
};

export const deleteUser = async (id: number) => {
  await api.delete(`/admin/deleteUserById/${id}`);
};

export const changeUserRole = async (id: number, role: Role) => {
  await api.put(`/admin/${id}/role`, {
    role,
  });
};