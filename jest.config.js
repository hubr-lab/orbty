module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["lib/**"],
  coverageDirectory: "coverage",
  modulePaths: ["./lib/"],
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.js?(x)"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  }
};
