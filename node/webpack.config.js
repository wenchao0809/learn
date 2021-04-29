const path = require('path')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '/graphql/server.js'),
  output: {
    path: path.resolve(__dirname, 'build')
  },
  externals: {
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, use: 'babel-loader'
      }
    ]
  }
}