// External modules
import { Request, Response } from 'express';

export interface IUserController {
    get(req: Request, res: Response): Promise<Response>;
    getDetailsByUsername(req: Request, res: Response): Promise<Response>;
}
