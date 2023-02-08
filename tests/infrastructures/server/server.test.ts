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
})
