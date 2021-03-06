
import acknowledgeCopy from './acknowledge-copy.js'
import clickSubmitButton from './click-submit-button.js'
import toggleDropdown from './toggle-dropdown.js'
import toggleLoadingBar from './toggle-loading-bar.js'
import updatePassword from './update-password.js'
import updateWebsite from './update-website.js'
import setDerivedPassword from './set-derived-password.js'
import closeDialog from './close-dialog.js'

const actions = {
  ACKNOWLEDGE_COPY: acknowledgeCopy,
  CLICK_SUBMIT_BUTTON: clickSubmitButton,
  CLOSE_DIALOG: closeDialog,
  SET_DERIVED_PASSWORD: setDerivedPassword,
  TOGGLE_DROPDOWN: toggleDropdown,
  TOGGLE_LOADING_BAR: toggleLoadingBar,
  UPDATE_PASSWORD: updatePassword,
  UPDATE_WEBSITE: updateWebsite
}

const initialState = {}
export default (state = initialState, action) => {
  if (actions.hasOwnProperty(action.type)) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}
