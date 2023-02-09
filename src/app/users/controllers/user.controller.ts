// External modules
import { Request, Response } from 'express';

// Interfaces
import { IUserController } from './interfaces/user-controller.interface';
import { UsersFilterOptions } from '../interfaces/user.interface';

// Controllers
import { Controller } from '../../../shared/controllers/controller';

// Services
import { UserService } from '../services/user.service';
import { RequiredParameterError } from '../../../shared/errors/validators/required-validator.error';

export class UserController extends Controller implements IUserController {
    private readonly userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    };

    async get(req: Request, res: Response): Promise<Response> {
        try {
            const { since, page } = req.query;

            const filter: UsersFilterOptions = {
                since: since as unknown as number,
                page: page as unknown as number,
            };
            const data = await this.userService.get(filter);

            const paginatedResponseBody = this.buildPaginatedResponse(req, 200, data);

            return res.status(paginatedResponseBody.statusCode).json(paginatedResponseBody);
        } catch (error: any) {
            const responseBody = this.buildErrorResponse(500, error.message);

            return res.status(responseBody.statusCode).json(responseBody);
        }
    }
}
