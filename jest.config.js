module.export = {
  jest: {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js','<rootDir>/src/setupTests.js'],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'jsdom',
    testRunner: 'C:\\Users\\admin\\Desktop\\jest-react\\node_modules\\jest-circus\\runner.js',
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
      '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
      '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    modulePaths: [],
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    resetMocks: true,
  },
};
