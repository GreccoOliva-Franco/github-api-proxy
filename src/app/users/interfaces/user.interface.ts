import { GitHubUser } from "../services/github/interfaces/github.interface";

export interface UsersFilterOptions {
    since?: number;
    page?: number;
};
export interface UserFilterOptions {
    username?: string;
}
export interface UserRepositoryFilterOptions { };

export interface User extends GitHubUser { }; // this could be a completely different interface and therefore a mapping utility is needed
export interface UserDetails {
    id: number;
    login: string;
    profile_url: string;
    created_at: string;
};
export interface UserRepository { };
