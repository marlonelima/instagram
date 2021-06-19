module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts']
}