export type Role = "ADMIN" | "USER";

export type User = {
    id: number;
    name: string;
    email: string;
    role: Role;
}