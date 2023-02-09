// External modules
import express from "express";
import request from "supertest";

// Configs
import configs from "../../../src/configs";

// Application
import app from "../../../src/app";

export const getUsersTestSuite = () => describe('Get users functionalities', () => {
    const server = express();
    server.use('/api', app);
    server.listen(configs.deployment.port)
    const api = request(server);

    let response;
    let localhost: string;
    let url: string;
    let fullUrl: string;

    beforeAll(async () => {
        url = `/api/users`;
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

    it('Should return an Array of Users', async () => {
        expect(response.body.data).toBeDefined();
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data.length).toBeGreaterThanOrEqual(0);
    });

    it('Should return a link to the next page', async () => {
        expect(response.body.link).toBeDefined();
        expect(response.body.link).toBe(`${fullUrl}?page=2`);
    });

    //     it('Should work with "since" query parameter', async () => {
    //         const randomSince = Math.floor(Math.random() * 100 + 1);
    //         const sinceUrl = `${url}?since=${randomSince}`;
    //         const { status, body, header } = await api.get(sinceUrl);
    //         const { } = header;
    // 
    //         expect(status).toBe(200);
    //         expect(body.statusCode).toBe(200);
    //         expect(body.data).toBeDefined();
    //         expect(Array.isArray(body.data)).toBe(true);
    //         expect(body.data[0]).toHaveProperty("id");
    //         expect(body.data[0].id).toBeGreaterThan(randomSince);
    //         expect(body.link).toBeDefined();
    //         expect(body.link).toBe(`${fullUrl}?since=${randomSince}&page=2`);
    //     });
    // 
    //     it('Should work with "page" query parameter', async () => {
    //         const randomPage = Math.floor(Math.random() * 10 + 1);
    //         const url = `${localhost}/api/users?page=${randomPage}`;
    //         const pageResponse = await api.get(url);
    // 
    //         expect(pageResponse.status).toBe(200);
    //         expect(pageResponse.body.statusCode).toBe(200);
    //         expect(pageResponse.body.data).toBeDefined();
    //         expect(Array.isArray(pageResponse.body.data)).toBe(true);
    //         expect(pageResponse.body.link).toBeDefined();
    //         expect(pageResponse.body.link).toBe(`${localhost}/api/users?page=${randomPage + 1}`);
    //     });
    // 
    //     it('Should work with "since" and "page" query parameters', async () => {
    //         const randomSince = Math.floor(Math.random() * 100 + 1);
    //         const randomPage = Math.floor(Math.random() * 10 + 1);
    //         const url = `${localhost}/api/users?since=${randomSince}&page=${randomPage}`;
    //         const { status, body, header } = await api.get(url);
    // 
    //         expect(status).toBe(200);
    //         expect(body.statusCode).toBe(200);
    //         expect(body.data).toBeDefined();
    //         expect(Array.isArray(body.data)).toBe(true);
    //         expect(body.link).toBeDefined();
    //         // expect(body.link).toBe(`${newHost}/api/users?since=${randomSince}&page=${randomPage + 1}`);
    //     });
});
