// External modules
import dotenv from 'dotenv';

dotenv.config({ path: process.cwd() })

import deploymentConfigs from './deploy/deploy.config';

export default {
    deployment: deploymentConfigs,
};
