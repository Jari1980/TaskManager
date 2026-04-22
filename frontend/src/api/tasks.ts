import { api } from "./client";
import type { Task } from "../types/task";
import { mockTasks } from "../mock/data";

const USE_MOCK = true;

export const getTasksByProject = async (projectId: number): Promise<Task[]> => {
  if (USE_MOCK) {
    return mockTasks.filter((t) => t.projectId === projectId);
  }

  const res = await api.get<Task[]>(`/projects/${projectId}/tasks`);
  return res.data;
};

export const getTaskById = async (taskId: number): Promise<Task | null> => {
  if (USE_MOCK) {
    return mockTasks.find((t) => t.id === taskId) || null;
  }

  const res = await api.get<Task>(`/tasks/${taskId}`);
  return res.data;
};
