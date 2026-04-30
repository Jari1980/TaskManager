import { api } from "./client";
import type { User, Role } from "../types/user";

export const getUsers = async (
  page: number,
  size: number
): Promise<{ users: User[]; totalPages: number; totalElements: number }> => {
  const res = await api.get("/admin/getUsers", {
    params: { page, size },
  });

  return {
    users: res.data.content,
    totalPages: res.data.totalPages,
    totalElements: res.data.totalElements,
  };
};

export const deleteUser = async (id: number) => {
  await api.delete(`/admin/deleteUserById/${id}`);
};

export const changeUserRole = async (id: number, role: Role) => {
  await api.put(`/admin/${id}/role`, {
    role,
  });
};