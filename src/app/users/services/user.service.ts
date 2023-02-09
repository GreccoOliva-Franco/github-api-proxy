// Interfaces
import { User, UserDetails, UserRepository, UsersFilterOptions } from '../interfaces/user.interface';
import { IUserService } from './interfaces/user-service.interface';

// Services
import { GithubService } from './github/services/github.service';
import { RequiredParameterError } from '../../../shared/errors/validators/required-validator.error';
import { GitHubRepository, GitHubUserDetailed } from './github/interfaces/github.interface';

export class UserService implements IUserService {
    private readonly provider: GithubService;

    constructor() {
        this.provider = new GithubService();
    };

    async get(filter: UsersFilterOptions): Promise<User[]> {
        try {
            const users = await this.provider.getUsers(filter);

            return users;
        } catch (error: any) {
            throw error;
        }
    };

    async getDetailsByUsername(username: string): Promise<UserDetails> {
        try {
            if (!username) throw new RequiredParameterError('username');

            const user = await this.provider.getUser(username);
            const userDetails = this.mapUserDetails(user);

            return userDetails;
        } catch (error: any) {
            throw error;
        }
    };

    private mapUserDetails(user: GitHubUserDetailed): UserDetails {
        const { id, login, html_url, created_at } = user;

        return {
            id,
            login,
            profile_url: html_url,
            created_at,
        };
    };
}
