
const path = require('path')

const constants = {
  paths: {
    static: path.join(__dirname, '../../client'),
    database: path.join(__dirname, '../../data/logs.sqlite')
  },
  limits: {
    urlLength: 128
  },
  queries: {},
  fixedParameters: {
    rounds: 1000000,
    len: 20,
    digest: 'sha1'
  }
}

module.exports = constants
