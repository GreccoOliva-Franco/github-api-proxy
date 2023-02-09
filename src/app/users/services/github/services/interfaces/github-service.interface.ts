// Interfaces
import {
    UsersFilterOptions,
} from "../../../../interfaces/user.interface";
import {
    GitHubUser,
} from "../../interfaces/github.interface";

export interface IGithubService {
    getUsers: (filter: UsersFilterOptions) => Promise<GitHubUser[]>;
}
