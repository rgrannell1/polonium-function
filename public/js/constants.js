
/**
 * Constants used by polonium-function
 *
 * @type {Object}
 */
export default {
  urls: {
    host: `https://${window.location.host}/http`
  },
  state: {
    isActive: false,
    showDropdown: false,
    websiteError: '',
    passwordError: ''
  },
  options: {
    rounds: 1000000,
    len: 20,
    digest: 'sha1'
  },
  limits: {
    minimumPasswordLength: 12,
    minimumWebsiteLength: 1
  },
  patterns: {
    website: '[^ ]+',
    password: '[^ ]+'
  }
}
