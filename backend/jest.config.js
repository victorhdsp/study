module.exports = {
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['src/database/mock.ts'],
};