
import React from 'react'
import constants from '../../constants.js'
import submit_button_css from '../submit-button/index.css.jsx'
import {connect} from 'react-redux'
import actions from '../../actions.js'

const buttonText = state => {
  const text = {
    default: 'Get Password',
    blocked: 'Get Password',
    active: 'Fetching...'
  }

  return text[state]
}

const styleText = (buttonState, colours) => {
  const styles = submit_button_css(colours)
  const specifics = {
    default: styles.submit_button_default,
    active: styles.submit_button_active,
    blocked: styles.submit_button_blocked
  }

  if (!specifics.hasOwnProperty(buttonState)) {
    console.error(`no specific button css for state ${buttonState}`)
  }

  const specificButtonState = specifics[buttonState]

  return Object.assign({}, styles.submit_button, specificButtonState)
}

const SubmitButton = ({colours, buttonState, clickButton}) => {
  return (
    <input
      id="submit"
      style={styleText(buttonState, colours)}
      type="button"
      value={buttonText(buttonState)}
      onClick={() => clickButton(buttonState)} />
  )
}

const mapStateToProps = state => {
  let buttonState = 'default'

  if (state.app && state.app.submitButton && state.app.submitButton.state) {
    buttonState = state.app.submitButton.state
  }

  return {
    colours: state.constants.colours,
    buttonState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton (buttonState) {
      const isAllowed = buttonState !== 'active'

      if (isAllowed) {
        dispatch(actions.click_submit_button(buttonState))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
