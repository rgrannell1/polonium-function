
/**
 * Dispatch a Redux reducer
 *
 * @param  {object<function>} responses an object containing functions
 *
 * @return {object} the updated state
 */
const dispatchAction = responses => (state = {}, action) => {
  if (!responses) {
    throw new Error('responses missing.')
  }

  for (let [actionName, reducer] of Object.entries(responses)) {
    if (action && action.type === actionName) {
      return reducer(state, {}, action)
    }
  }
  return state
}

export {dispatchAction}
