module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/config/',
    '<rootDir>/src/__tests__/test-helper.js'
  ],
  collectCoverageFrom: ['!src/__tests__/test-helper.js', 'src/**/*.js'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report'
      }
    ]
  ]
}
