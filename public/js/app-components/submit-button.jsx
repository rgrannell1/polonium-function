
import React from 'react'
import constants from '../../js/constants.js'
import submit_button_css from './submit-button.css.jsx'
import {connect} from 'react-redux'
import actions from '../actions.js'

const SubmitButton = props => {
  let style = Object.assign({}, submit_button_css.submit_button)
  let buttonText = ''

  if (props.buttonState === 'default') {
    buttonText = 'Get Password'
    Object.assign(style, submit_button_css.submit_button_default)
  }

  return (
    <input
      id="submit"
      style={style}
      type="button"
      value={buttonText}
      onClick={() => props.clickButton()} />
  )
}

const mapStateToProps = state => {
  let buttonState = ''

  if (state.clickSubmitButton.error) {
    buttonState = 'error'
  } else if (state.clickSubmitButton.active) {
    buttonState = 'active'
  } else {
    buttonState = 'default'
  }

  return {buttonState}
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton () {
      dispatch(actions.click_submit_button())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
