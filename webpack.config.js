
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, 'src/client/dist')
const APP_DIR = path.resolve(__dirname, 'src/client/js/')
const JS_DIR = path.resolve(__dirname, 'src/client/js/')

const config = {
  entry: {
    bundle: APP_DIR + '/index.jsx',
    'bundle.min': APP_DIR + '/index.jsx'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(JS_DIR, 'services/cache.js')
      }
    ]),
    new UglifyJSPlugin({include: /\.min\.js$/})
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
