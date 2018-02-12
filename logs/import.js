
const {googleCloudStorage} = require('@rgrannell1/utils')
const elasticSearch = require('elasticsearch')

const storeLog = async (client, body) => {
  return client.index({
    index: 'logs',
    type: 'log',
    body
  })
}

const parseLines = async (client, logs) => {
  const logPayloads = logs
    .map(line => {
      try { return JSON.parse(line) } catch (err) {}
    })
    .map(line => {
      try {
        const content = JSON.parse(line.textPayload)
        content.timestamp = line.timestamp
        return content
      } catch (err) {}
    })
    .filter(value => !!value)

  for (let log of logPayloads) {
    try {
      await storeLog(client, log)
    } catch (err) {
      console.error(err)
      break
    }
  }
}

const importLogs = async name => {
  const client = new elasticSearch.Client({host: 'localhost:9200'})

  return googleCloudStorage.downloadBlobFiles(name)
    .then(files => {
      return files.map(file => {
        return parseLines(client, file.toString().split('\n'))
      })
    })
}

importLogs('polonium-logs')
  .catch(err => {
    console.error(err)
  })
