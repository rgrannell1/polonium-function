
const constants = {
  cacheUrls: [
    './bundle.js',
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
  console.log('cache "fetch" started.')

  const isSameOrigin = event.request.url.startsWith(self.location.origin)

  if (isSameOrigin) {
    const cachedResponse = await caches.match(event.request)
    if (cachedResponse) {
      return cachedResponse
    }

    const runtimeCache = await caches.open(constants.cacheName)
    const fetchResponse = await fetch(event.request)

    await cache.put(event.request, response.clone())

    return event.respondWith(response)
  }
}

console.log('cache-file loading')

self.addEventListener('activate', reactions.onActivate)
self.addEventListener('install', reactions.onInstall)
self.addEventListener('fetch', reactions.onFetch)
