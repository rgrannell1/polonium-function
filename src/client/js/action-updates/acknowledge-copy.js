
const acknowledgeCopy = (state, action) => {
  const newState = Object.assign({}, state, {
    copyButton: {
      state: 'copied',
      hasError: action.hasError
    }
  })
  return newState
}

export default acknowledgeCopy
