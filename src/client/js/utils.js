
/**
 * Return a property from an object.
 *
 * @param  {string} prop  a dot-delimited chain of properties.
 * @param  {object} obj   the target object.
 * @param  {any} fallback a value to return if the object property-chain hits a dead-end.
 * @return {any}          an object property.
 */
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

/**
 * Does a property exist within an object?
 *
 * @param  {string} prop a dot-delimited chain of properties.
 * @param  {object} obj the target object.
 * @return {boolean} an indicator of whether or not a property exists.
 */
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
