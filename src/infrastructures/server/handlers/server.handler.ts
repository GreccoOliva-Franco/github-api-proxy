// External modules
import { Request, Response } from 'express';

export class ServerHandler {
    public static notFound(_: Request, res: Response) {
        return res.status(404).json({ error: { code: 404, message: 'Endpoint not found' } });
    };
}
