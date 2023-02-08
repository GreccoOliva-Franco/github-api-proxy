// Configs
import configs from './configs';

// Server
import { Server } from './infrastructures/server/server';

const server = new Server(configs.deployment);

server.start();
