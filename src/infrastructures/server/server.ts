// External modules
import express, { Application } from 'express';

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

    public loadApp({ route, app }: { route: string, app: Application }): void {
        this.instance.use(route, app);
    };

    public async start(): Promise<void> {
        this.instance.use('*', ServerHandler.notFound);

        this.instance.on('error', (error: Error) => ServerHandler.onError(error));

        await this.instance.listen(this.configs.port, () => console.log('Server started on port 3000'));
    }
}
