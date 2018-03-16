
const {googleCloudStorage} = require('@rgrannell1/utils')
const elasticSearch = require('elasticsearch')
const request = require('request-promise')

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
      process.exit(1)
    }
  }
}

/**
 * Import logs into an ElasticSearch server.
 *
 * @param  {string} name the name of the blob to download from.
 * @return {Promise} a result promise
 */
const importLogs = async name => {
  try {
    await request('http://localhost:9200/_cluster/health')
  } catch (err) {
    console.error('Could not connect to ElasticSearch: is it running?')
    process.exit(1)
  }

  const client = new elasticSearch.Client({host: 'localhost:9200'})

  return googleCloudStorage.downloadBlobFiles(name)
    .then(files => {
      return files.map(file => {
        return parseLines(client, file.toString().split('\n'))
      })
    })
}

importLogs('polonium-logs').catch(err => {
  console.error(err)
  process.exit(1)
})
