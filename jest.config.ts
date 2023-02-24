module.exports = {
  testEnvironment: "jsdom",
    moduleNameMapper: {
      '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.ts',
    }
  };

export {}