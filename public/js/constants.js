
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
  },
  colours: {
    primaryColour: '#5d51d6',
    white: 'white',
    font: '#404040',
    barLight: '#1cd6cd',
    barMedium: '#1c82d6',
    barDark: '#1c25d6'
  }
}
