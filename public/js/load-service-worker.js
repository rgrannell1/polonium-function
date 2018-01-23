
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/service-worker.js').then(() => {
    console.log('service worker loaded.')
  })
} else {
  console.error('serviceWorker not supported.')
}
