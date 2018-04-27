
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'src/client/dist')
const APP_DIR = path.resolve(__dirname, 'src/client/js/')
const JS_DIR = path.resolve(__dirname, 'src/client/js/')

const config = {
  entry: APP_DIR + '/index.jsx',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(JS_DIR, 'services/cache.js')
      }
    ])
  ],
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
