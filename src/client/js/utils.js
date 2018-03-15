
const prop = (prop, obj, fallback = undefined) => {
  const parts = prop.split('.')
  let ref = obj

  for (let part of parts) {
    if (ref === null || typeof ref === 'undefined' || !ref.hasOwnProperty(part)) {
      return fallback
    }
    ref = ref[part]
  }
  return ref
}

const hasProp = (prop, obj) => {
  const parts = prop.split('.')
  let ref = obj

  for (let part of parts) {
    if (ref === null || typeof ref === 'undefined' || !ref.hasOwnProperty(part)) {
      return false
    }
    ref = ref[part]
  }
  return true
}

export {prop, hasProp}
