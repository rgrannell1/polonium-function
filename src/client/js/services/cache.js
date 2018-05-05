
const constants = {
  cacheUrls: [
    './bundle.js',
    '..'
  ],
  cacheNames: ['precache-v1', 'runtime']
}

const PRECACHE = 'precache-v1'

const reactions = {}

reactions.onInstall = async event => {
  console.log('cache "install" started.')
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(constants.cacheUrls))
      .then(self.skipWaiting())
      .then(() => console.log('cache "install" ended'))
  )
}

reactions.onActivate = async event => {
  console.log('cache "activate" started.')
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !constants.cacheNames.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete)
      }))
    })
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

    const runtimeCache = await caches.open('runtime')
    const fetchResponse = await fetch(event.request)

    await cache.put(event.request, response.clone())

    return event.respondWith(response)
  }
}
self.addEventListener('activate', reactions.onActivate)
self.addEventListener('fetch', reactions.onFetch)

self.addEventListener('install', reactions.onInstall)
