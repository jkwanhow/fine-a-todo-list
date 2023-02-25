module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
    moduleNameMapper: {
      '^.+\\.(css|less|svg)$': '<rootDir>/config/CSSStub.ts',
    }
  };

export {}