
const neodoc = require('neodoc')
const buildCommands = require('./commands')

const cli = {}
cli.main = `
Usage:
  script <command> [--headless]
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
  const processed = {}

  Object.keys(args).forEach(argName => {
    let key = argName.startsWith('--') ? argName.slice(2) : argName
    processed[key] = args[argName]
  })

  return processed
}

/**
 * Read CLI arguments & invoke a build command
 *
 * @return {Promise} A promise with
 */
const invokeCommand = () => {
  const args = processArgs(neodoc.run(cli.main))

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
