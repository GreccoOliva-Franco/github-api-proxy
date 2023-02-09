// External modules
import { Request, Response, Router } from 'express';

// Controllers
import { UserController } from './controllers/user.controller';

const router = Router();

// ! Disclaimer: Due to the lack of usage of a dependency injection container, I'm not able to inject the controller into the route. This means that I have to create a new instance of the controller for every route. This is not the best practice, but it works just fine.

router.route('/')
    .get(async (req: Request, res: Response) => await (new UserController()).get(req, res));

export default router;
