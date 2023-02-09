// External modules
import axios from 'axios';

// Interfaces
import { IGithubService } from "./interfaces/github-service.interface";
import {
    UsersFilterOptions,
} from '../../../interfaces/user.interface';
import {
    GitHubUser,
    GitHubUsersFilterOptions,
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

    private buildGithubUsersFilter(filter: UsersFilterOptions): GitHubUsersFilterOptions {
        // this could be a mapper from the abstract filter to the implementation filter
        return <GitHubUsersFilterOptions>filter;
    };
}
