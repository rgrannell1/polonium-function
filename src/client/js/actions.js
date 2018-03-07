
const actions = {}

/**
 * Display or hide the loading bar
 *
 * @return {Object} The associated action.
 */
actions.toggle_loading_bar = () => {
  return {
    type: 'TOGGLE_LOADING_BAR'
  }
}

/**
 * Register that the dropdown has been toggled on / off
 *
 * @return {Object} The associated action.
 */
actions.toggle_dropdown = () => {
  return {
    type: 'TOGGLE_DROPDOWN'
  }
}

/**
 * Register that the website has been updated
 *
 * @return {Object} The associated action.
 */
actions.update_website = text => {
  return {
    type: 'UPDATE_WEBSITE',
    text
  }
}

/**
 * Register that the password has been updated
 *
 * @return {Object} The associated action.
 */
actions.update_password = text => {
  return {
    type: 'UPDATE_PASSWORD',
    text
  }
}

/**
 * Register that the primary button on the polonium page has been clicked
 *
 * @return {Object} The associated action.
 */
actions.click_submit_button = () => {
  return {
    type: 'CLICK_SUBMIT_BUTTON'
  }
}

export default actions
