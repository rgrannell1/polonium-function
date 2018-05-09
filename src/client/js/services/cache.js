
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
    const isSameOrigin = event.request.url.startsWith(self.location.origin)

    if (isSameOrigin) {
      const cachedResponse = await caches.match(event.request)
      if (cachedResponse) {
        return cachedResponse
      }

      const fetchResponse = await fetch(event.request)

      const cache = await caches.open(constants.cacheName)
      await cache.put(event.request, event.response.clone())

      return event.respondWith(event.response)
    } else {
      console.log('cross-origin request')
    }
  })())
}

console.log('cache-file loading')

self.addEventListener('activate', reactions.onActivate)
self.addEventListener('install', reactions.onInstall)
self.addEventListener('fetch', reactions.onFetch)
