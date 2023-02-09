// External modules
import express from "express";
import request from 'supertest';

// Application
import app from "../../../src/app";

export const getUserRepositoriesTestSuite = () => describe('Get user repositories by username functionalities', () => {
    const server = express();
    server.use('/api', app);
    const api = request(server);

    let response;
    let localhost: string;
    let url: string;
    let fullUrl: string;

    beforeAll(async () => {
        url = `/api/users/GreccoOliva-Franco/repositories`;
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

    it('Should return User Repositories', async () => {
        expect(response.body.data).toBeDefined();
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data[0]).toHaveProperty('id');
        expect(response.body.data[0]).toHaveProperty('node_id');
        expect(response.body.data[0]).toHaveProperty('name');
        expect(response.body.data[0]).toHaveProperty('full_name');
        expect(response.body.data[0]).toHaveProperty('private');
        expect(response.body.data[0]).toHaveProperty('owner');
        expect(response.body.data[0]).toHaveProperty('html_url');
        expect(response.body.data[0]).toHaveProperty('description');
        expect(response.body.data[0]).toHaveProperty('fork');
        expect(response.body.data[0]).toHaveProperty('url');
        expect(response.body.data[0]).toHaveProperty('forks_url');
        expect(response.body.data[0]).toHaveProperty('keys_url');
        expect(response.body.data[0]).toHaveProperty('collaborators_url');
        expect(response.body.data[0]).toHaveProperty('teams_url');
        expect(response.body.data[0]).toHaveProperty('hooks_url');
        expect(response.body.data[0]).toHaveProperty('issue_events_url');
        expect(response.body.data[0]).toHaveProperty('events_url');
        expect(response.body.data[0]).toHaveProperty('assignees_url');
        expect(response.body.data[0]).toHaveProperty('branches_url');
        expect(response.body.data[0]).toHaveProperty('tags_url');
        expect(response.body.data[0]).toHaveProperty('blobs_url');
        expect(response.body.data[0]).toHaveProperty('git_tags_url');
        expect(response.body.data[0]).toHaveProperty('git_refs_url');
        expect(response.body.data[0]).toHaveProperty('trees_url');
        expect(response.body.data[0]).toHaveProperty('statuses_url');
        expect(response.body.data[0]).toHaveProperty('languages_url');
    });
});
