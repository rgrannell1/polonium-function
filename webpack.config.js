
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')

const CLIENT_DIR = path.resolve(__dirname, 'src/client')
const BUILD_DIR = path.resolve(CLIENT_DIR, 'dist')
const APP_DIR = path.resolve(CLIENT_DIR, 'js')
const JS_DIR = path.resolve(CLIENT_DIR, 'js')

const config = {
  entry: {
    bundle: APP_DIR + '/index.jsx',
    'bundle.min': APP_DIR + '/index.jsx'
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(JS_DIR, 'services/cache.js')
      },
      {
        from: path.join(CLIENT_DIR, 'index.html')
      },
      {
        from: path.join(CLIENT_DIR, 'icons'),
        to: path.join(BUILD_DIR, 'icons')
      },
      {
        from: path.join(CLIENT_DIR, 'fonts'),
        to: path.join(BUILD_DIR, 'fonts')
      },
      {
        from: path.join(CLIENT_DIR, 'data'),
        to: path.join(BUILD_DIR, 'data')
      }
    ]),
    new CompressionPlugin({
      include: /\.min\.js$/,
      algorithm: 'gzip'
    }),
    new UglifyJSPlugin({
      include: /\.min\.js$/
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: JS_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  }
}

module.exports = config
