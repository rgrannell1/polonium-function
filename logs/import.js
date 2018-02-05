
const fs = require('fs')
const {googleCloudStorage} = require('@rgrannell1/utils')

const writeLog = log => {
  console.log(JSON.stringify(log, null))
}

const parseLines = logs => {
  const parsed = logs
    .map(line => {
      try { return JSON.parse(line) } catch (err) {}
    })
    .map(log => {
      try { return JSON.parse(log.textPayload) } catch (err) {}
    })
    .filter(value => !!value)

  parsed.map(writeLog)
}

const importLogs = name => {
  return googleCloudStorage.downloadBlobFiles(name)
    .then(files => {
      return files.map(file => {
        return parseLines(fs.readFileSync(file).toString().split('\n'))
      })
    })
}

importLogs('polonium-logs')
.catch(err => {
  console.error(err)
})
