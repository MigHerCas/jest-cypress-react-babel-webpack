module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Node alternative: 'jest-environment-node',
  moduleNameMapper: {
    // For CSS Modules
    '\\module\\.css$': 'identity-obj-proxy',
    // For any other CSS file
    '\\.css$': require.resolve('./test/styles-mock.js')
  }
}
