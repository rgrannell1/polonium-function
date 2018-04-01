
const validate = {
  salt (salt) {
    return salt && salt.length >= 1
  },
  password (password) {
    return password && password.length >= 12
  }
}

export default validate
