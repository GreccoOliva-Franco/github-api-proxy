// Configs
import configs from './configs';

// Server
import { Server } from './infrastructures/server/server';

// Applications
import app from './app';

const server = new Server(configs.deployment);

server.loadApp({ path: '/api', router: app });
server.start();
