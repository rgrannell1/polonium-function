
const sqlite = require('sqlite')
const {sql} = require('../../../src/shared')

const statements = {}
statements.createScreenShotsTable = sql.createTable({name: 'screenshots', ifNotExists: true})
  .addColumn({name: 'id', type: 'integer', primaryKey: true})
  .addColumn({name: 'page', type: 'text'})
  .addColumn({name: 'version', type: 'text', notNull: true})
  .addColumn({name: 'screenshot', type: 'text'})
  .done()

const scenes = {}

scenes.homePage = async page => {

}

const compareScreenShots = async page => {
  const conn = await sqlite.open('./data/screenshots.sqlite')
  await conn.run(statements.createScreenShotsTable)
}

compareScreenShots()

module.exports = compareScreenShots
