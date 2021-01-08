const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { assetsPath, resolve } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    // '@babel/polyfill',
    'core-js', 
    './src/main.ts'],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components')
    },
    extensions: ['.wasm', ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json", 'jsx', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        include: [
          resolve('src'), 
          resolve('tests'),
          resolve('/node_modules/webpack-dev-server/client'), 
          resolve('/node_modules/@vue'), 
          resolve('/node_modules/vue'),
          // resolve('/node_modules')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader',  {
          loader: 'ts-loader',
          options: {
              appendTsxSuffixTo: [/\.vue$/],
              transpileOnly: true
          }
      }]
        // options: {
        //   appendTsSuffixTo: ['/.vue$/']
        // }
      },
      {
        test: /\.scss$/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader', 
          } , 
          'sass-loader' 
        ]
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader'
          } 
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new VueLoaderPlugin()
  ]
}