
if (!fetch || typeof fetch !== 'function') {
  alert('This browser does not support "fetch"')
}

/**
 * Fetch a polonium password
 *
 * @param  {object} opts
 * @return {Promise} a promise yielding the fetched password, or an error
 */
const fetchPassword = opts => {
  if (!opts.password) {
    console.error('password not provided.')
    return Promise.resolve()
  }
  if (!opts.salt) {
    console.error('salt not provided.')
    return Promise.resolve()
  }
  const onFetch = fetch('/http/password', {
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
