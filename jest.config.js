/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // testMatch: ['./tests/**/*.test.ts'],w
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    verbose: true,
};
