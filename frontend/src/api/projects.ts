import { api } from "./client";
import type { Project } from "../types/project";
import { mockProjects } from "../mock/data";

const USE_MOCK = true;

export const getProjectsByTeam = async (teamId: number): Promise<Project[]> => {
  if (USE_MOCK) {
    return mockProjects.filter((p) => p.teamId === teamId);
  }

  const res = await api.get<Project[]>(`/teams/${teamId}/projects`);
  return res.data;
};

export const getProjectById = async (
  projectId: number,
): Promise<Project | null> => {
  if (USE_MOCK) {
    return mockProjects.find((p) => p.id === projectId) || null;
  }

  const res = await api.get<Project>(`/projects/${projectId}`);
  return res.data;
};
