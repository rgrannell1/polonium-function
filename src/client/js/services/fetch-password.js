
if (!window.fetch || typeof window.fetch !== 'function') {
  window.alert('This browser does not support "fetch"')
}

/**
 * Fetch a polonium password
 *
 * @param  {object} opts
 * @return {Promise} a promise yielding the fetched password, or an error
 */
const fetchPassword = opts => {
  return window.fetch('/http/password', {
    method: 'POST',
    referrer: 'no-referrer',
    cache: 'no-store',
    body: JSON.stringify({
      password: opts.password,
      salt: opts.salt
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default fetchPassword
