module.exports = {
    setupFiles: ['dotenv/config'],
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    collectCoverage: true
}