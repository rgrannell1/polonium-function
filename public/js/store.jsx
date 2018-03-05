
import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from 'redux-logger'

const reducers = {}

/**
 * Update the state to indicate the dropdown should be toggled on / off.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
reducers.toggleDropdown = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {
        dropdownShown: state.dropdownShown === true ? false : true
      }
    default:
      return state
  }
}

/**
 * Update the state to include the current website value.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
reducers.updateWebsite = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WEBSITE':
      return {website: action.text}
    default:
      return state
  }
}

/**
 * Update the state to include the current password value
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
reducers.updatePassword = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PASSWORD':
      return {password: action.text}
    default:
      return state
  }
}

/**
 * Update the state to
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
reducers.toggleLoadingBar = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING_BAR':
      return {
        active: state.loadingBar === true ? false : true
      }
    default:
      return state
  }
}

/**
 * Update the state to handle the submit button click.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
reducers.clickSubmitButton = (state = {}, action) => {
  switch (action.type) {
    case 'CLICK_SUBMIT_BUTTON':
      const newState = { }

      if (!state.active) {
        newState.active = true
      }

      return newState
    default:
      return state
  }
}

const createAppStore = defaults => {
  reducers.constants = () => Object.assign({}, defaults)
  return createStore(combineReducers(reducers), {}, applyMiddleware(logger))
}

export default createAppStore
