// Interfaces
import { User, UserDetails, UserRepository, UsersFilterOptions } from '../interfaces/user.interface';
import { IUserService } from './interfaces/user-service.interface';

// Services
import { GithubService } from './github/services/github.service';
import { RequiredParameterError } from '../../../shared/errors/validators/required-validator.error';

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

}
