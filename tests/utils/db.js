
const sqlite = require('sqlite')
const sql = {}

const statements = {}
statements.createScreenShotsTable = `
CREATE TABLE IF NOT EXISTS screenshots (
  id integer PRIMARY KEY,
  screenshot blob NOT NULL,
  version blob NOT NULL
)
`

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
