
const Storage = require('@google-cloud/storage')

const cloudStorage = { }

cloudStorage.getBuckets = () => {
  const storage = new Storage()

  return storage.getBuckets()
    .then(results => results[0])
    .catch(err => {
      console.error(err)
    })
}

cloudStorage.getBucket = name => {
  return cloudStorage.getBuckets().then(buckets => {
    buckets.find(bucket => {
      return bucket.name === name
    })
  })
}

cloudStorage.listFiles = bucket => {
  const storage = new Storage()
  return storage.bucket(bucket).getFiles().then(results => results[0])
}

cloudStorage.downloadFile = (bucket, src, dest) => {
  const storage = new Storage()
  return storage.bucket(bucket).file(src).download({destination: dest}).then(() => dest)
}

cloudStorage.downloadBlobFiles = bucket => {
  return cloudStorage.listFiles(bucket)
    .then(files => files.map(file => file.name))
    .then(names => {
      const chain = names.map((name, ith) => {
        return cloudStorage.downloadFile(bucket, name, `data/${ith}.json`)
      })
      return Promise.all(chain)
    })
}
module.exports = cloudStorage
