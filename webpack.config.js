
const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'public/js/dist')
const APP_DIR = path.resolve(__dirname, 'public/js/components')
const JS_DIR = path.resolve(__dirname, 'public/js/')

const config = {
  entry: APP_DIR + '/app.jsx',
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
