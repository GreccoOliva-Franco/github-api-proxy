// Configs
import configs from "../../src/configs";

describe('Configs', () => {
    it('should have a valid "deployment" property', () => {
        expect(configs).toHaveProperty('deployment');
    });
});

describe('Deployment configurations', () => {
    test('should have a valid "port" enviroment variable', () => {
        expect(configs.deployment).toHaveProperty('port');
        expect(configs.deployment.port).toMatch(/^[0-9]{4}$/);
    });
});
