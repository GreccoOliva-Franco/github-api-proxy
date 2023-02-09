export class RequiredParameterError extends Error {
    constructor(param: string) {
        super(`Required parameter ${param} is missing.`);
        this.name = 'RequiredParameterError';
    }
}
