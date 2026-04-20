import type {User} from "./user";

export type Project = {
    id: number;
    name: string;
    description?: string;
    teamId: number;
    createdBy: User;

}