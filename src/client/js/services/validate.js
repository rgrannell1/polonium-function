
import constants from '../constants.js'

const validate = {
  salt (salt) {
    return salt && salt.length >= constants.limits.minimumWebsiteLength
  },
  password (password) {
    return password && password.length >= constants.limits.minimumPasswordLength
  }
}

export default validate
