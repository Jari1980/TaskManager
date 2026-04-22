import { api } from "./client";
import type { Team } from "../types/team";
import { mockTeams } from "../mock/data";

const USE_MOCK = true;

export const getTeams = async (): Promise<Team[]> => {
  if (USE_MOCK) {
    return mockTeams;
  }

  const res = await api.get<Team[]>("/teams");
  return res.data;
};

export const getTeamById = async (
  teamId: number
): Promise<Team | null> => {
  if (USE_MOCK) {
    return mockTeams.find((t) => t.id === teamId) || null;
  }

  const res = await api.get<Team>(`/teams/${teamId}`);
  return res.data;
};