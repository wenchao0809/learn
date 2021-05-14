const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { assetsPath, resolve } = require('./utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    // '@babel/polyfill',
    './src/main.ts'
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components')
    },
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json', 'jsx', '.vue']
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
          resolve('tests')
          // resolve('/node_modules/webpack-dev-server/client'),
          // resolve('/node_modules/@vue'),
          // resolve('/node_modules/vue'),
          // resolve('/node_modules')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsxSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[hash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new VueLoaderPlugin()
  ]
}
