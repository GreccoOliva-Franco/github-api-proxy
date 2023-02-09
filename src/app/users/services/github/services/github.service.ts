// External modules
import axios from 'axios';

// Interfaces
import { IGithubService } from "./interfaces/github-service.interface";
import {
    UsersFilterOptions,
    UserRepository,
} from '../../../interfaces/user.interface';
import {
    GitHubUser,
    GitHubUsersFilterOptions,
    GitHubRepository,
    GitHubUserDetailed,
} from "../interfaces/github.interface";

// Errors
import { ServiceUnavailableException } from '../../../../../shared/errors/services/services.errors';

export class GithubService implements IGithubService {
    private endpoints;

    constructor() {
        this.endpoints = {
            host: 'https://api.github.com',
            users: {
                root: '/users',
                by: {
                    username: {
                        root: '/users/:username',
                        repositories: '/users/:username/repos',
                    },
                }
            },
        };
    };

    async getUsers(filter: UsersFilterOptions): Promise<GitHubUser[]> {
        try {
            const githubFilter = this.buildGithubUsersFilter(filter);
            const url = `${this.endpoints.host}${this.endpoints.users.root}`;
            const { data: users } = await axios.get(url, { params: githubFilter });

            return <GitHubUser[]>users;
        } catch (error: unknown) {
            throw new ServiceUnavailableException('Service is unavailable');
        }
    };

    async getUser(username: string): Promise<GitHubUserDetailed> {
        try {
            const url = `${this.endpoints.host}${this.endpoints.users.by.username.root}`
                .replace(':username', username);

            const { data: user } = await axios.get(url);

            return <GitHubUserDetailed>user;
        } catch (error: unknown) {
            throw new ServiceUnavailableException('Service is unavailable');
        }
    };

    async getRepositoriesByUsername(username: string): Promise<GitHubRepository[]> {
        try {
            const url = `${this.endpoints.host}${this.endpoints.users.by.username.repositories}`
                .replace(':username', username);
            const { data: repos } = await axios.get(url);

            return <GitHubRepository[]>repos;
        } catch (error: unknown) {
            throw new ServiceUnavailableException('Service is unavailable');
        }
    };

    private buildGithubUsersFilter(filter: UsersFilterOptions): GitHubUsersFilterOptions {
        // this could be a mapper from the abstract filter to the implementation filter
        return <GitHubUsersFilterOptions>filter;
    };
}
