
const actions = {}

actions.toggle_dropdown = () => {
  return {
    type: 'TOGGLE_DROPDOWN'
  }
}

actions.update_website = text => {
  return {
    type: 'UPDATE_WEBSITE',
    text
  }
}

actions.update_password = text => {
  return {
    type: 'UPDATE_PASSWORD',
    text
  }
}

actions.click_submit_button = () => {
  return {
    type: 'CLICK_SUBMIT_BUTTON'
  }
}

export default actions
