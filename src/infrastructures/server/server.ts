// External modules
import express, { Application, Router } from 'express';

// Handlers
import { ServerHandler } from './handlers/server.handler';

// Interfaces
import { ServerConfig } from './interfaces/server.interface';

export class Server {
    private instance: Application;
    public configs: any;

    constructor(configs: ServerConfig) {
        this.configs = configs;
        this.instance = express();
    };

    public loadApp({ path, router }: { path: string, router: Router }): void {
        this.instance.use(path, router);
    };

    public async start(): Promise<void> {
        this.instance.use('*', ServerHandler.notFound);

        this.instance.on('error', (error: any) => { ServerHandler.onError(error) });

        this.instance.listen(this.configs.port, () => console.log(`Server started on port ${this.configs.port}`));
    }
}
