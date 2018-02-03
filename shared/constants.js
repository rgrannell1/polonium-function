
const path = require('path')

const constants = {
  paths: {
    static: path.join(__dirname, '../public')
  },
  limits: {
    urlLength: 128
  }
}

module.exports = constants
