module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Node alternative: 'jest-environment-node',
  moduleNameMapper: {
    '\\module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/styles-mock.js')
  }
}
