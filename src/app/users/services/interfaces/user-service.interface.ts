// Interfaces
import { User, UserDetails, UserRepository, UsersFilterOptions } from "../../interfaces/user.interface";

export interface IUserService {
    get(filter: UsersFilterOptions): Promise<User[]>;
}
