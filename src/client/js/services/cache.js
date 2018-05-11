
const constants = {
  cacheUrls: [
    './bundle.min.js',
    '..'
  ],
  cacheName: 'v1'
}

const reactions = {}

reactions.onInstall = async event => {
  console.log('cache "install" started.')
  event.waitUntil(
    caches.open(constants.cacheName)
      .then(cache => cache.addAll(constants.cacheUrls))
      .then(self.skipWaiting())
      .then(() => console.log('cache "install" ended'))
  )
}

reactions.onActivate = async event => {
  console.log('cache "activate" started.')
  event.waitUntil(
    Promise.resolve()
      .then(() => self.clients.claim())
      .then(() => console.log('cache "activate" ended.'))
  )
}

reactions.onFetch = async event => {
  console.log(`cache "fetch" started for ${event.request.method} ${event.request.url}`)

  event.respondWith((async () => {
    const cachedResponse = await caches.match(event.request)

    if (cachedResponse) {
      console.log(`cache "fetch" using cached request for ${event.request.method} ${event.request.url}`)
      return cachedResponse
    }
    const response = await fetch(event.request)
    const resClone = response.clone()

    const appCache = await caches.open(constants.cacheName)
    appCache.put(event.request, resClone)

    console.log(`cache "fetch" using new request for ${event.request.method} ${event.request.url}`)
    return resClone
  })())
}

console.log('cache-file loading')

self.addEventListener('activate', reactions.onActivate)
self.addEventListener('install', reactions.onInstall)
self.addEventListener('fetch', reactions.onFetch)
