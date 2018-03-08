
import clickSubmitButton from './click-submit-button.js'
import toggleDropdown from './toggle-dropdown.js'
import toggleLoadingBar from './toggle-loading-bar.js'
import updatePassword from './update-password.js'
import updateWebsite from './update-website.js'

const actions = {
  CLICK_SUBMIT_BUTTON: clickSubmitButton,
  TOGGLE_DROPDOWN: toggleDropdown,
  TOGGLE_LOADING_BAR: toggleLoadingBar,
  UPDATE_PASSWORD: updatePassword,
  UPDATE_WEBSITE: updateWebsite
}

export default (state = {}, action) => {
  if (actions.hasOwnProperty(action.type)) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}
