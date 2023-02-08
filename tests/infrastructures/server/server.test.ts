// External modules
import { Router } from 'express';
import supertest from 'supertest';

// Configs
import configs from "../../../src/configs";

import { Server } from '../../../src/infrastructures/server/server';

describe('Server', () => {
    const server = new Server(configs.deployment);

    it('Should instanciate a Server', () => {
        expect(server).toBeInstanceOf(Server);
    });

    it('Should load the server configs to the Server instance', () => {
        expect(server.configs).toBeDefined();
        expect(server.configs).toEqual(configs.deployment);
    });

    it('Should load the app instance on "/" route', async () => {
        // define minimal app
        const app = Router();
        app.get('/', (_, res) => res.send('Hello World!'));

        // load app into server "/" route
        server.loadApp({ route: '/', app });
        await server.start();

        const request = supertest;
        const url = `http://localhost:${configs.deployment.port}`;
        const response = await request(url).get('/');

        expect(response.statusCode).toBe(200);
    });

    it('Should fail for other routes', async () => {
        const request = supertest;
        const url = `http://localhost:${configs.deployment.port}`;
        const response = await request(url).get('/other');

        expect(response.statusCode).toBe(404);
    });
})
