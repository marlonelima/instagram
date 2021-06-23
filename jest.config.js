module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/config',
        '<rootDir>/src/server.ts',
        '<rootDir>/src/app.ts',
        '<rootDir>/src/errors/index.ts'
    ]
}