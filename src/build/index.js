
const neodoc = require('neodoc')
const buildCommands = require('./commands')

const cli = {}
cli.main = `
Usage:
  script <command>
Description:
  Run build-commands for polonium-function
`

cli.test = `
Usage:
  script test [--headless]
Description:
  Run tests
`

const processArgs = args => {
  console.log(args)
  return args
}

/**
 * Read CLI arguments & invoke a build command
 *
 * @return {Promise} A promise with
 */
const invokeCommand = () => {
  const args = processArgs(neodoc.run(cli.main, {
    allowUnknown: true
  }))

  const commands = {
    selected: args['<command>'],
    valid: new Set(Object.keys(cli))
  }

  if (!commands.valid.has(commands.selected)) {
    throw new Error(`Command "${commands.selected}" not allowed`)
  }

  const commandArgs = processArgs(neodoc.run(cli[commands.selected]))
  return buildCommands[commands.selected](commandArgs)
}

invokeCommand()
