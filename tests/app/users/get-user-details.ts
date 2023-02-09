// External modules
import express from "express";
import request from 'supertest';

// Configs
import configs from "../../../src/configs";

// Application
import app from "../../../src/app";

export const getUserDetailsTestSuite = () => describe('Get user details by username functionalities', () => {
    const server = express();
    server.use('/api', app);
    // server.listen(configs.deployment.port)
    const api = request(server);

    let response;
    let localhost: string;
    let url: string;
    let fullUrl: string;

    beforeAll(async () => {
        url = `/api/users/GreccoOliva-Franco/details`;
        response = await api.get(url);
        localhost = response.request.protocol + '//' + response.request.host;
        fullUrl = localhost + url;
    });

    it('Should return 200 OK', async () => {
        expect(response.status).toBe(200);
    });

    it('Should return 200 as Response Body Status', async () => {
        expect(response.body.statusCode).toBe(200);
    });

    it('Should return a User Details', async () => {
        expect(response.body.data).toBeDefined();
        expect(response.body.data).toHaveProperty("id");
        expect(response.body.data).toHaveProperty("login");
        expect(response.body.data).toHaveProperty("profile_url");
        expect(response.body.data).toHaveProperty("created_at");
    });
});
