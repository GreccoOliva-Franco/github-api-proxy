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

    async getDetailsByUsername(req: Request, res: Response): Promise<Response> {
        try {
            const { username } = req.params;
            if (!username) throw new RequiredParameterError('username');

            const data = await this.userService.getDetailsByUsername(username!);

            const responseBody = this.buildSuccessResponse(200, data);

            return res.status(responseBody.statusCode).json(responseBody);
        } catch (error: any) {
            let responseBody = this.buildErrorResponse(500, error.message);

            // replace default error when a known error is catched
            if (error instanceof RequiredParameterError) responseBody = this.buildErrorResponse(400, error.message);

            return res.status(responseBody.statusCode).json(responseBody);
        }
    }

    async getRepositoriesByUsername(req: Request, res: Response): Promise<Response> {
        try {
            const { username } = req.params;
            if (!username) throw new RequiredParameterError('username');

            const data = await this.userService.getRepositoriesByUsername(username);

            const responseBody = this.buildSuccessResponse(200, data);

            return res.status(responseBody.statusCode).json(responseBody);
        } catch (error: any) {
            let responseBody = this.buildErrorResponse(500, error.message);

            // replace default error when a known error is catched
            if (error instanceof RequiredParameterError) responseBody = this.buildErrorResponse(400, error.message);

            return res.status(responseBody.statusCode).json(responseBody);
        }
    }
}
