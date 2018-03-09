
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
    rounds: 100000,
    len: 20,
    digest: 'sha1'
  }
}

constants.queries.createTable = `
CREATE TABLE IF NOT EXISTS Logs (
  id TEXT PRIMARY KEY,
  content BLOB NOT NULL
)`

constants.queries.insertLog = 'INSERT OR REPLACE INTO Logs (id, content) VALUES ($id, $content) '

module.exports = constants
