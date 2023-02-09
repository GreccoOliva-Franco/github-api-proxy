// Interfaces
import { User, UserDetails, UserRepository, UsersFilterOptions } from "../../interfaces/user.interface";

export interface IUserService {
    get(filter: UsersFilterOptions): Promise<User[]>;
    getDetailsByUsername(username: string): Promise<UserDetails>;
    getRepositoriesByUsername(username: string): Promise<UserRepository[]>;
}
