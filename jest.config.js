const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts, tsx}"],
  coverageDirectory: "coverage",
};

module.exports = createJestConfig(config);
