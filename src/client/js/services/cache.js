
const constants = {
  cacheUrls: [
    'http/dist/bundle.js'
  ],
  cacheNames: ['precache-v1', 'runtime']
}

const reactions = {}

reactions.onInstall = async event => {
  const cache = await caches.open('v1')
  return cache.addAll(constants.cacheUrls)
}

/*

reactions.onActivate = async event => {
  const cacheNames = await caches.keys()
  const deleteable = cacheNames.filter(cache => !cacheNames.includes(caches))
  const deleteOldCaches = Promise.all(deleteable.map(deleted => caches.delete(deleted)))

  await deleteOldCaches
  event.waitUntil(deleteOldCaches.then(() => self.clients.claim()))
}

reactions.onFetch = async event => {
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
*/

self.addEventListener('install', reactions.onInstall)
