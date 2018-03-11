
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
  if (!opts.password) {
    throw new Error('password not provided.')
  }
  if (!opts.salt) {
    throw new Error('salt not provided.')
  }
  const onFetch = window.fetch('/http/password', {
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

  return onFetch.then(response => response.text())
}

export default fetchPassword
