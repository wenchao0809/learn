const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.conf')

module.exports = merge(BaseConfig , {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    // dev-server4.0 移除
    // clientLogLevel: 'warning',
    // contentBase: false,
    // quiet: true,
    // disableHostCheck: true,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    // proxy: config.dev.proxyTable,
    // https: true,
    hot: true,
    port: 8091
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})