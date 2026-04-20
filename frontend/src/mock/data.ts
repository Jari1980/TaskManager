import type { Team } from "../types/team";
import type { Project } from "../types/project";
import type { Task } from "../types/task";

export const mockUser = {
    id: 1,
    name: "Broccoli Mann",
    email: "green@is.good",
    role: "ADMIN"
} as const;

export const mockTeam: Team = {
    id: 1,
    name: "Dev Team",
    description: "Brewing Code",
    createdBy: mockUser
};

export const mockProject: Project = {
    id: 1,
    name: "Task Manager",
    description: "Super Tool",
    teamId: 1,
    createdBy: mockUser
};

export const mockTasks: Task[] = [
    {
        id: 1,
        title: "Setup backend",
        status: "IN_PROGRESS",
        priority: "MEDIUM",
        projectId: 1,
        createdBy: mockUser
    },
    {
        id: 2,
        title: "Setup frontend",
        status: "IN_PROGRESS",
        priority: "MEDIUM",
        projectId: 1,
        createdBy: mockUser
    }
];