
const sqlite = require('sqlite')
const sql = require('./sql')

const statements = {}
statements.createScreenShotsTable = sql.createTable({name: 'screenshots', ifNotExists: true})
  .addColumn({name: 'id', type: 'integer', autoIncrement: true})
  .addColumn({name: 'version', type: 'text', notNull: true})
  .addColumn({name: 'screenshot', type: 'text'})
  .done()

const db = {}

db.open = path => {
  return sqlite.open(path)
}

async function main () {
  const conn = await db.open('./bing.sqlite')

  conn.run(statements.createScreenShotsTable)
}

main()

module.exports = db
