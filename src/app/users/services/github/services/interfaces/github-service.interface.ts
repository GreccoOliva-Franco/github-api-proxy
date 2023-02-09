// Interfaces
import {
    UsersFilterOptions,
    UserRepositoryFilterOptions,
} from "../../../../interfaces/user.interface";
import {
    GitHubUser,
    GitHubRepository,
} from "../../interfaces/github.interface";

export interface IGithubService {
    getUsers: (filter: UsersFilterOptions) => Promise<GitHubUser[]>;
    getUser: (username: string) => Promise<GitHubUser>;
    getRepositoriesByUsername: (filter: UserRepositoryFilterOptions) => Promise<GitHubRepository[]>;
}
