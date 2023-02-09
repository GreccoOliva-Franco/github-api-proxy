import { GitHubUser } from "../services/github/interfaces/github.interface";

export interface UsersFilterOptions {
    since?: number;
    page?: number;
};
export interface User extends GitHubUser { }; // this could be a completely different interface and therefore a mapping utility is needed
