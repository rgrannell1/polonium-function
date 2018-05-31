
const chain = require('./chain')

const sql = {}

const done = ({query, columns}) => {
  return `${query} (${columns.join(', ')});`
}

const addColumn = ({query, columns}, opts) => {
  const {name, type} = opts

  const constraints = {
    primaryKey: 'PRIMARY KEY',
    unique: 'UNIQUE',
    notNull: 'NOT NULL',
    autoIncrement: 'AUTOINCREMENT'
  }

  let constraint = `${name} ${type.toUpperCase()}`

  for (let prop of Object.keys(constraints)) {
    if (opts[prop]) {
      constraint += ` ${constraints[prop]}`
    }
  }

  columns.push(constraint)

  return chain({addColumn, done}, {query, columns})
}

sql.createTable = ({name}) => {
  let query = `CREATE TABLE ${name}`

  return chain({addColumn}, {
    query,
    columns: []
  })
}

sql.createTable({name: 'screenshots'})
  .addColumn({name: 'id', type: 'integer', autoIncrement: true})
  .addColumn({name: 'version', type: 'text', notNull: true})
  .addColumn({name: 'screenshot', type: 'text' })
  .done()

module.exports = sql
