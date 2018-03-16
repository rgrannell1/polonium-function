
/**
 * Update the state to handle the submit button click.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const clickSubmitButton = (state, action) => {
  // -- already active, just return the old-state
  if (state.submitButton && state.submitButton.state === 'active') {
    return state
  }

  let newButtonState = 'default'

  // -- an initial click. If the data is valid trigger a password fetch,
  // -- otherwise block

  if (!state.submitButton || state.submitButton.state === 'default') {
    const websiteError = state && state.website && state.website.error
    const passwordError = state && state.password && state.password.error
    const valid = !(websiteError || passwordError)

    if (valid) {
      newButtonState = 'active'
    } else {
      newButtonState = 'blocked'
    }
  } else if (state.submitButton.state === 'blocked') {
    newButtonState = 'blocked'
  } else if (state.submitButton.state === 'done') {
    // -- not meant to be possible, but include reasonable fallback behaviour.
    newButtonState = 'active'
  }

  const newState = Object.assign({}, state, {
    submitButton: {
      triggered: true,
      state: newButtonState
    }
  })

  return newState
}

export default clickSubmitButton
