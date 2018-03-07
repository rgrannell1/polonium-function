
const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/client/dist')
const APP_DIR = path.resolve(__dirname, 'src/client/js/components')
const JS_DIR = path.resolve(__dirname, 'src/client/js/')

const config = {
  entry: APP_DIR + '/app/index.jsx',
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
    filename: 'bundle.js'
  }
}

module.exports = config
