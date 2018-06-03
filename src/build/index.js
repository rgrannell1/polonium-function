
const neodoc = require('neodoc')
const commands = require('./commands')

const cli = {}
cli.main = `
Usage:
  script <command> [<args>...]
Description:
  Run build-commands for polonium-function
`

cli.test = `
Usage:
  script test
Description:
  Run tests
`

/**
 * Read CLI arguments & invoke a build command
 *
 * @return {Promise} A promise with
 */
const invokeCommand = () => {
  const args = neodoc.run(cli.main)

  const commands = {
    selected: args['<command>'],
    valid: new Set(Object.keys(cli))
  }

  if (!commands.valid.has(commands.selected)) {
    throw new Error(`Command "${commands.selected}" not allowed`)
  }

  Object.keys(cli).forEach(command => {
    const commandArgs = neodoc.run(cli[command])
  })
}

invokeCommand()
