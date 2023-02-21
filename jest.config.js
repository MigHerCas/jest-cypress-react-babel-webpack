module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Node alternative: 'jest-environment-node',
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/styles-mock.js')
  }
}
