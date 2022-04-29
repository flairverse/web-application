const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/cypress'],
  moduleNameMapper: {
    '^@/source/(.*)$': '<rootDir>/source/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/(.*)$': '<rootDir>/source/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: ['<rootDir>/'],
}

module.exports = createJestConfig(customJestConfig)
