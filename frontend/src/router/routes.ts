export const routes = {
  dashboard: () => "/",
  login: () => "/login",
  teams: () => "/teams",
  team: (teamId: number | string) => `/teams/${teamId}`,
  project: (teamId: number | string, projectId: number | string) =>
    `/teams/${teamId}/projects/${projectId}`,
  task: (
    teamId: number | string,
    projectId: number | string,
    taskId: number | string
  ) =>
    `/teams/${teamId}/projects/${projectId}/tasks/${taskId}`,
};